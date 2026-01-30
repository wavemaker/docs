const fs = require('fs');
const path = require('path');
// Ensure gray-matter is installed: npm install gray-matter
const matter = require('gray-matter');

const docsDir = path.join(__dirname, '../docs');
const blogsDir = path.join(__dirname, '../blogs/blog');
const featureAnnouncementsDir = path.join(__dirname, '../blogs/feature-announcements');

const stats = { 
  total: 0, 
  md: 0, 
  mdx: 0, 
  noAuthor: 0, 
  authors: {}, 
  noAuthorDocs: [], 
  authorDocs: {}, 
  authorNameIds: [], 
  noAuthorIds: [],
  blogCount: 0,
  featureAnnouncementCount: 0
};

function countFiles(dir) {
  if (!fs.existsSync(dir)) return 0;
  let count = 0;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      count += countFiles(fullPath);
    } else {
      const ext = path.extname(file);
      if (ext === '.md' || ext === '.mdx') {
        count++;
      }
    }
  });
  return count;
}

function walk(dir) {
  if (!fs.existsSync(dir)) {
    console.warn(`Directory not found: ${dir}`);
    return;
  }
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walk(fullPath); 
    } else {
      const ext = path.extname(file);
      if (ext === '.md' || ext === '.mdx') {
        stats.total++;
        ext === '.md' ? stats.md++ : stats.mdx++;
        try {
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data, content } = matter(fileContents);
          const charCount = content.trim().length;
          const relativePath = path.relative(docsDir, fullPath);
          const docId = relativePath.replace(/\.(mdx?)$/, '').replace(/\\/g, '/');
          const docInfo = { name: file, path: relativePath, id: docId, charCount };

          const author = data.last_update && data.last_update.author;

          if (!author || (author === "Author Name" && charCount < 250)) {
            // Classified as Pending
            stats.noAuthor++;
            stats.noAuthorDocs.push(docInfo);
            stats.noAuthorIds.push(docId);
            if (author) {
              stats.authors[author] = (stats.authors[author] || 0) + 1;
            }
          } else {
            // Has an author and if it is "Author Name", it has enough content
            stats.authors[author] = (stats.authors[author] || 0) + 1;
            if (!stats.authorDocs[author]) stats.authorDocs[author] = [];
            stats.authorDocs[author].push(docInfo);
            
            if (author === "Author Name") {
              stats.authorNameIds.push(docId);
            }
          }
        } catch (err) {
          console.error(`Error parsing ${fullPath}:`, err);
        }
      }
    }
  });
}

walk(docsDir);
stats.blogCount = countFiles(blogsDir);
stats.featureAnnouncementCount = countFiles(featureAnnouncementsDir);

fs.writeFileSync(path.join(__dirname, 'metrics.json'), JSON.stringify(stats, null, 2));