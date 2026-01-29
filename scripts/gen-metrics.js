const fs = require('fs');
const path = require('path');
// Ensure gray-matter is installed: npm install gray-matter
const matter = require('gray-matter');

const docsDir = path.join(__dirname, '../docs');
const stats = { total: 0, md: 0, mdx: 0, noAuthor: 0, authors: {}, noAuthorDocs: [], authorDocs: {}, authorNameIds: [], noAuthorIds: [] };

function walk(dir) {
  // 1. Safety check: does the directory even exist?
  if (!fs.existsSync(dir)) {
    console.warn(`Directory not found: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    
    if (fs.lstatSync(fullPath).isDirectory()) {
      // 2. REMOVED 'return' here. 
      // We want to dive into the folder AND then continue with the rest of the files.
      walk(fullPath); 
    } else {
      const ext = path.extname(file);
      if (ext === '.md' || ext === '.mdx') {
        stats.total++;
        ext === '.md' ? stats.md++ : stats.mdx++;

        try {
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data } = matter(fileContents);
          const relativePath = path.relative(docsDir, fullPath);
          const docId = relativePath.replace(/\.(mdx?)$/, '').replace(/\\/g, '/'); // Normalize paths for Windows
          const docInfo = { name: file, path: relativePath, id: docId };
          // 3. Match your front matter structure exactly
          if (data.last_update && data.last_update.author) {
            const author = data.last_update.author;
            stats.authors[author] = (stats.authors[author] || 0) + 1;
            if (!stats.authorDocs[author]) stats.authorDocs[author] = [];
            stats.authorDocs[author].push(docInfo);
            if(author === "Author Name") {
              stats.authorNameIds.push(docId);
            }
          } else {
            stats.noAuthor++;
            stats.noAuthorDocs.push(docInfo);
            stats.noAuthorIds.push(docId);
          }
        } catch (err) {
          console.error(`Error parsing ${fullPath}:`, err);
        }
      }
    }
  });
}

// console.log('Scanning directory:', docsDir);
walk(docsDir);

// 4. Ensure the output directory exists or use a simple path
fs.writeFileSync(path.join(__dirname, 'metrics.json'), JSON.stringify(stats, null, 2));
// console.log('Metrics generated successfully:', stats);