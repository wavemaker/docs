import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories
const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const SIDEBAR_BASE_DIR = path.join(ROOT_DIR, 'sidebar');
const SIDEBARS_DIR = path.join(SIDEBAR_BASE_DIR, 'sidebars');
const MAIN_SIDEBAR_FILE = path.join(SIDEBAR_BASE_DIR, 'sidebars.js');

// Reserved Windows filenames that cannot be used
const RESERVED_WINDOWS_NAMES = [
  'CON', 'PRN', 'AUX', 'NUL',
  'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9',
  'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9'
];

// Session History for Rollback
let sessionHistory = [];

const PRETTIER_PATH = path.join(ROOT_DIR, 'node_modules', '.bin', 'prettier');

function formatFile(filePath) {
  try {
    if (
      filePath.endsWith('.js') ||
      filePath.endsWith('.mdx') ||
      filePath.endsWith('.md') ||
      filePath.endsWith('.json')
    ) {
      // Use locally installed prettier for offline support
      execSync(`"${PRETTIER_PATH}" --write "${filePath}"`, { stdio: 'ignore' });
    }
  } catch (e) {
    // Ignore prettier errors
  }
}

function recordFileCreation(filePath) {
  sessionHistory.push({ type: 'create_file', path: filePath });
}

function recordDirCreation(dirPath) {
  if (!fs.existsSync(dirPath)) {
    // Find the highest level directory that doesn't exist yet
    let topMost = dirPath;
    while (!fs.existsSync(path.dirname(topMost)) && path.dirname(topMost) !== ROOT_DIR) {
      topMost = path.dirname(topMost);
    }
    sessionHistory.push({ type: 'create_dir', path: topMost });
  }
}

function recordFileModification(filePath) {
  if (fs.existsSync(filePath)) {
    // Check if we already have a record for this file in this session
    // We only want to keep the REAL original content from before the session started
    const alreadyRecorded = sessionHistory.find(h => h.type === 'modify_file' && h.path === filePath);
    if (!alreadyRecorded) {
      const content = fs.readFileSync(filePath, 'utf-8');
      sessionHistory.push({ type: 'modify_file', path: filePath, originalContent: content });
    }
  }
}

async function rollbackAndExit() {
  if (sessionHistory.length === 0) {
    console.log(chalk.yellow('No changes to rollback.'));
    process.exit(0);
  }

  console.log(chalk.yellow('\nRolling back all changes from this session...'));
  
  // Reversing to ensure sub-items are deleted before parents
  for (let i = sessionHistory.length - 1; i >= 0; i--) {
    const action = sessionHistory[i];
    try {
      const relPath = path.relative(ROOT_DIR, action.path);
      if (action.type === 'create_file') {
        if (fs.existsSync(action.path)) {
          fs.unlinkSync(action.path);
          console.log(chalk.gray(`  Deleted file: ${relPath}`));
        }
      } else if (action.type === 'create_dir') {
        if (fs.existsSync(action.path)) {
          fs.rmSync(action.path, { recursive: true, force: true });
          console.log(chalk.gray(`  Deleted directory: ${relPath}`));
        }
      } else if (action.type === 'modify_file') {
        fs.writeFileSync(action.path, action.originalContent);
        console.log(chalk.gray(`  Restored file: ${relPath}`));
      }
    } catch (e) {
      console.error(chalk.red(`  Rollback error for ${action.path}:`), e.message);
    }
  }

  console.log(chalk.green('\nRollback successful. All session changes undone.'));
  process.exit(0);
}

async function main() {
  console.log('\n' + chalk.cyan.bold('  ┌──────────────────────────────────────────────────┐'));
  console.log(chalk.cyan.bold('  │                                                  │'));
  console.log(chalk.cyan.bold('  │   ') + chalk.white.bold('WAVEMAKER DOCUMENTATION MANAGER (ALPHA)') + chalk.cyan.bold('        │'));
  console.log(chalk.cyan.bold('  │                                                  │'));
  console.log(chalk.cyan.bold('  └──────────────────────────────────────────────────┘'));
  console.log(chalk.yellow('  Please verify all changes done by this tool carefully.\n'));

  while (true) {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          { name: '1. Create a new sidebar', value: 'Create a new sidebar' },
          { name: '2. Create a new category', value: 'Create a new category' },
          { name: '3. Create a new doc', value: 'Create a new doc' },
          { name: '4. Rollback and Exit', value: 'Rollback and Exit' },
          { name: '5. Exit', value: 'Exit' },
        ],
      },
    ]);

    if (action === 'Exit') {
      console.log('Goodbye!');
      process.exit(0);
    }

    if (action === 'Rollback and Exit') {
      await rollbackAndExit();
    }

    try {
      if (action === 'Create a new sidebar') {
        await createSidebar();
      } else if (action === 'Create a new category') {
        await createCategory();
      } else if (action === 'Create a new doc') {
        await createDoc();
      }
    } catch (error) {
      console.error(chalk.red('Error:'), error.message);
    }
    
    console.log('\n');
  }
}

// --- Helpers ---

function validateName(input) {
  if (!input) return 'Required';
  if (input.length > 50) return 'Name too long (max 50 characters)';
  if (!/^[a-zA-Z0-9\s-]+$/.test(input)) return 'Only letters, numbers, spaces, and hyphens are allowed';
  
  // Check for reserved Windows names
  const upperInput = input.toUpperCase().trim();
  if (RESERVED_WINDOWS_NAMES.includes(upperInput)) {
    return `"${input}" is a reserved system name and cannot be used`;
  }
  
  return true;
}

function getNameVariants(name) {
  // Trim spaces and hyphens from both ends
  const trimmed = name.replace(/^[\s-]+|[\s-]+$/g, '');
  
  // kebab-case: lowercase, replace internal spaces/hyphens with single hyphen
  const kebab = trimmed.toLowerCase()
    .replace(/[\s-]+/g, '-');
    
  // camelCase: remove spaces/hyphens and capitalize following letter
  const camel = trimmed.toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, '');
    
  return { original: trimmed, kebab, camel };
}

function getDocTemplate(name) {
  return (
`---
last_update: { author: "Author Name" }
---

# Overview

Welcome to ${name} doc.

`);
}

async function selectSidebarFile() {
  const files = fs.readdirSync(SIDEBARS_DIR).filter(f => f.endsWith('.js') && f !== 'sidebars.js');
  if (files.length === 0) {
    console.log(chalk.red('No sidebars found. Create one first.'));
    return null;
  }
  const choices = [
    ...files.map((f, i) => ({ name: `${i + 1}. ${f}`, value: f })),
    { name: `${files.length + 1}. ⬅️ Back`, value: 'BACK' }
  ];

  const { filename } = await inquirer.prompt([
    {
      type: 'list',
      name: 'filename',
      message: 'Select a Sidebar:',
      choices,
    },
  ]);
  
  if (filename === 'BACK') return 'BACK';
  return path.join(SIDEBARS_DIR, filename);
}

function parseSidebarContent(content) {
  try {
    const arrayContentMatch = content.match(/export default\s*(\[[\s\S]*\]);?/);
    if (arrayContentMatch && arrayContentMatch[1]) {
      return eval(arrayContentMatch[1]);
    }
  } catch (e) {
    console.error('Failed to parse sidebar file content:', e);
  }
  return [];
}

async function browseCategories(items, parentPath = []) {
  const categories = items.filter(i => i.type === 'category');
  
  const choices = [
    { name: `1. [Select Here] (Current: ${parentPath.join('/') || 'Root'})`, value: 'SELECT_HERE' },
    ...categories.map((c, idx) => ({ name: `${idx + 2}. 📂 ${c.label}`, value: idx })),
    { name: `${categories.length + 2}. ⬅️ Back`, value: 'BACK' }
  ];

  const { selection } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selection',
      message: `Browse Categories (${parentPath.join(' > ') || 'Root'}):`,
      choices,
    },
  ]);

  if (selection === 'SELECT_HERE') {
    return { selectedPath: parentPath, targetItems: items };
  } else if (selection === 'BACK') {
    return 'BACK';
  } else {
    const cat = categories[selection];
    const result = await browseCategories(cat.items, [...parentPath, cat.label]);
    if (result === 'BACK') {
      return browseCategories(items, parentPath);
    }
    return result;
  }
}

function resolveFSPathFromItems(items) {
  for (const item of items) {
    if (item.type === 'doc') {
      return path.dirname(item.id);
    }
  }

  for (const item of items) {
    if (item.type === 'category' && item.items) {
      const childDir = resolveFSPathFromItems(item.items);
      if (childDir) {
        const labelKebab = getNameVariants(item.label).kebab;
        const childDirBasename = path.basename(childDir);
        
        if (childDirBasename === labelKebab) {
            return path.dirname(childDir);
        }
        return childDir;
      }
    }
  }
  return null;
}

async function promptForPosition(itemType, numItems) {
  const { positionType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'positionType',
      message: `Where should the ${itemType} be placed? (Currently ${numItems} items)`,
      choices: [
        { name: '1. Start', value: 'start' },
        { name: '2. End', value: 'end' },
        { name: '3. Custom Position (Number)', value: 'number' },
        { name: '4. ⬅️ Back', value: 'BACK' }
      ],
    },
  ]);

  if (positionType === 'BACK') return 'BACK';

  if (positionType === 'start') {
    return 1;
  } else if (positionType === 'number') {
    const { customIndex } = await inquirer.prompt([
      {
        type: 'number',
        name: 'customIndex',
        message: `Enter position (1 to ${numItems + 1}):`,
        validate: (val) => (val >= 1 && val <= numItems + 1) 
          ? true 
          : `Please enter a number between 1 and ${numItems + 1}`,
      },
    ]);
    return customIndex;
  }
  return null; // 'end'
}

function resolveTargetDirectory(sidebarPath, sidebarItems, selectedPath) {
  let currentItems = sidebarItems;
  
  if (selectedPath.length > 0) {
    for (const label of selectedPath) {
      const found = currentItems.find(i => i.type === 'category' && i.label === label);
      if (found) currentItems = found.items;
    }
  }
  
  const resolved = resolveFSPathFromItems(currentItems);
  if (resolved) {
    return path.join(DOCS_DIR, resolved);
  }
  
  const base = path.basename(sidebarPath).replace('Sidebar.js', '');
  return path.join(DOCS_DIR, getNameVariants(base).kebab);
}

async function promptForUniqueName(message, checkExists) {
  let name = '';
  let isValid = false;
  
  while (!isValid) {
    const response = await inquirer.prompt([{
      type: 'input',
      name: 'value',
      message: message + chalk.gray(' (Leave empty to go back)'),
      validate: (val) => {
        if (val === '') return true; // Allow empty for "back"
        return validateName(val);
      }
    }]);
    
    name = response.value;
    if (name === '') return 'BACK'; // Signify back action

    const variants = getNameVariants(name);
    
    if (checkExists(variants)) {
      console.log(chalk.red(`"${name}" already exists. Please enter a different name.`));
    } else {
      isValid = true;
    }
  }
  
  return name;
}

// --- Features ---

async function createSidebar() {
  const name = await promptForUniqueName(
    'Enter the name of the new sidebar (e.g., Mobile):',
    (variants) => {
      const sidebarFile = path.join(SIDEBARS_DIR, `${variants.camel}Sidebar.js`);
      return fs.existsSync(sidebarFile);
    }
  );

  if (name === 'BACK') return;

  const variants = getNameVariants(name);
  const sidebarVariableName = `${variants.camel}Sidebar`;

  console.log('\n' + chalk.blue.bold('──────────────────────────────────────────────────'));
  console.log(chalk.blue.bold(`🚀 Creating sidebar: `) + chalk.white.bold(variants.kebab));
  console.log(chalk.blue.bold('──────────────────────────────────────────────────'));
  
  const docFolderPath = path.join(DOCS_DIR, variants.kebab);
  if (!fs.existsSync(docFolderPath)) {
    recordDirCreation(docFolderPath);
    fs.mkdirSync(docFolderPath, { recursive: true });
    console.log(chalk.gray(`  📁 Created directory: `) + chalk.cyan(docFolderPath));
  }

  const overviewPath = path.join(docFolderPath, 'overview.mdx');
  recordFileCreation(overviewPath);
  const overviewContent = getDocTemplate(variants.original);
  fs.writeFileSync(overviewPath, overviewContent);
  formatFile(overviewPath);
  console.log(chalk.gray(`  📄 Created overview:  `) + chalk.cyan(overviewPath));

  const sidebarContent = `/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export default [
    {
        "type": "doc",
        "id": "${variants.kebab}/overview",
        "label": "${variants.original}"
    }
];
`;
  const newSidebarFile = path.join(SIDEBARS_DIR, `${sidebarVariableName}.js`);
  recordFileCreation(newSidebarFile);
  fs.writeFileSync(newSidebarFile, sidebarContent);
  formatFile(newSidebarFile);
  console.log(chalk.gray(`  📜 Created config:    `) + chalk.cyan(newSidebarFile));

  recordFileModification(MAIN_SIDEBAR_FILE);
  let mainSidebarContent = fs.readFileSync(MAIN_SIDEBAR_FILE, 'utf-8');
  const importLine = `import ${sidebarVariableName} from './sidebars/${sidebarVariableName}';`;
  const lastImportIndex = mainSidebarContent.lastIndexOf('import ');
  if (lastImportIndex !== -1) {
    const endOfImportLine = mainSidebarContent.indexOf('\n', lastImportIndex);
    mainSidebarContent = mainSidebarContent.slice(0, endOfImportLine + 1) + importLine + '\n' + mainSidebarContent.slice(endOfImportLine + 1);
  } else {
    mainSidebarContent = importLine + '\n' + mainSidebarContent;
  }

  const exportMatch = mainSidebarContent.match(/(const|let|var)\s+sidebars\s*=\s*\{/);
  if (exportMatch) {
    const exportStart = exportMatch.index;
    const insertionPoint = mainSidebarContent.indexOf('};', exportStart);
    if (insertionPoint !== -1) {
        const contentBefore = mainSidebarContent.slice(0, insertionPoint);
        const contentAfter = mainSidebarContent.slice(insertionPoint);
        mainSidebarContent = contentBefore + `  ${sidebarVariableName},\n` + contentAfter;
    }
  }

  fs.writeFileSync(MAIN_SIDEBAR_FILE, mainSidebarContent);
  formatFile(MAIN_SIDEBAR_FILE);
  console.log(chalk.green(`  ✅ Successfully updated sidebars.js`));
}

async function createCategory() {
  let sidebarPath = null;
  let selectedPath = null;
  let targetItems = null;

  while(true) {
    // Step 1: Select Sidebar
    if (!sidebarPath) {
      const result = await selectSidebarFile();
      if (result === 'BACK' || !result) return;
      sidebarPath = result;
    }

    const content = fs.readFileSync(sidebarPath, 'utf-8');
    const sidebarItems = parseSidebarContent(content);

    // Step 2: Select Parent Category
    if (!selectedPath) {
      console.log('\n' + chalk.blue.bold('🔍 NAVIGATION') + chalk.blue(' (Select the PARENT category)'));
      const selection = await browseCategories(sidebarItems);
      
      if (selection === 'BACK') {
        sidebarPath = null;
        continue;
      }
      if (!selection) return;
      
      selectedPath = selection.selectedPath;
      targetItems = selection.targetItems;
    }
    
    // Step 3: Select Position
    const numItems = targetItems.length;
    const insertionIndex = await promptForPosition('category', numItems);
    if (insertionIndex === 'BACK') {
      selectedPath = null;
      continue;
    }

    // Step 4: Enter Name
    const targetDir = resolveTargetDirectory(sidebarPath, sidebarItems, selectedPath);
    const catName = await promptForUniqueName(
      'Enter new Category Name:',
      (variants) => {
        const finalDir = path.join(targetDir, variants.kebab);
        return fs.existsSync(finalDir);
      }
    );

    if (catName === 'BACK') {
      // Go back to position selection (since we are in a loop, we just continue)
      // but we need to stay in Step 3/4 area. 
      // To keep it simple, going back from name takes you back to position.
      continue; 
    }

    const variants = getNameVariants(catName);
    const finalDir = path.join(targetDir, variants.kebab);

    console.log('\n' + chalk.magenta.bold(`📦 Building Category: `) + chalk.white.bold(variants.kebab));

    if (!fs.existsSync(finalDir)) {
      recordDirCreation(finalDir);
      fs.mkdirSync(finalDir, { recursive: true });
      console.log(chalk.gray(`  📁 Created directory: `) + chalk.cyan(finalDir));
    }

    const relPath = path.relative(DOCS_DIR, finalDir);
    const fileId = path.join(relPath, 'overview').replace(/\\/g, '/');

    const overviewContent = getDocTemplate(variants.original);
    const overviewPath = path.join(finalDir, 'overview.mdx');
    recordFileCreation(overviewPath);
    fs.writeFileSync(overviewPath, overviewContent);
    formatFile(overviewPath);
    console.log(chalk.gray(`  📄 Created overview:  `) + chalk.cyan(overviewPath));

    insertItemIntoSidebar(sidebarPath, selectedPath, {
      type: 'category',
      label: variants.kebab,
      collapsible: true,
      collapsed: true,
      items: [{ type: 'doc', id: fileId, label: variants.original }]
    }, insertionIndex);
    
    break; // Finish
  }
}

async function createDoc() {
  let sidebarPath = null;
  let selectedPath = null;
  let targetItems = null;

  while(true) {
    if (!sidebarPath) {
      const result = await selectSidebarFile();
      if (result === 'BACK' || !result) return;
      sidebarPath = result;
    }

    const content = fs.readFileSync(sidebarPath, 'utf-8');
    const sidebarItems = parseSidebarContent(content);

    if (!selectedPath) {
      console.log('\n' + chalk.blue.bold('🔍 NAVIGATION') + chalk.blue(' (Select the target category)'));
      const selection = await browseCategories(sidebarItems);
      
      if (selection === 'BACK') {
        sidebarPath = null;
        continue;
      }
      if (!selection) return;
      
      selectedPath = selection.selectedPath;
      targetItems = selection.targetItems;
    }

    const numItems = targetItems.length;
    const insertionIndex = await promptForPosition('doc', numItems);
    if (insertionIndex === 'BACK') {
      selectedPath = null;
      continue;
    }

    const targetDir = resolveTargetDirectory(sidebarPath, sidebarItems, selectedPath);
    const docName = await promptForUniqueName(
      'Enter Doc Name:',
      (variants) => {
        const filePath = path.join(targetDir, `${variants.kebab}.mdx`);
        return fs.existsSync(filePath);
      }
    );

    if (docName === 'BACK') continue;

    const variants = getNameVariants(docName);
    const filePath = path.join(targetDir, `${variants.kebab}.mdx`);
    const relPath = path.relative(DOCS_DIR, filePath).replace('.mdx', ''); 
    
    console.log('\n' + chalk.yellow.bold(`📝 Writing Document: `) + chalk.white.bold(variants.kebab));

    recordFileCreation(filePath);
    fs.writeFileSync(filePath, getDocTemplate(variants.original));
    formatFile(filePath);
    console.log(chalk.gray(`  📄 Created file: `) + chalk.cyan(filePath));

    insertItemIntoSidebar(sidebarPath, selectedPath, {
        type: 'doc',
        id: relPath.replace(/\\/g, '/'),
        label: variants.original
    }, insertionIndex);
    
    break;
  }
}

function findLabelInContext(content, label, searchStart, searchEnd) {
  // Escape special regex characters in label
  const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const labelPattern = new RegExp(`['"]?label['"]?\\s*:\\s*['"]${escapedLabel}['"]`);
  
  // Create a substring to search within
  const searchContent = searchEnd 
    ? content.substring(searchStart, searchEnd)
    : content.substring(searchStart);
    
  const match = searchContent.match(labelPattern);
  
  if (!match) {
    return null;
  }
  
  // Return absolute match position
  return {
    match: { index: searchStart + match.index, [0]: match[0] },
    relativeIndex: match.index
  };
}

function insertItemIntoSidebar(filepath, parentLabels, newItem, atIndex = null) {
  recordFileModification(filepath);
  let content = fs.readFileSync(filepath, 'utf-8');
  
  // Use 2-space indentation and calculate base padding based on nesting depth
  const indentLevel = parentLabels.length + 1;
  const baseIndent = '  '.repeat(indentLevel);
  const newItemString = JSON.stringify(newItem, null, 2)
                        .split('\n')
                        .map((line, i) => (i === 0 ? '' : baseIndent) + line)
                        .join('\n');

  let searchIndex = 0;
  let insertionPoint = -1;
  let searchBoundary = content.length;

  if (parentLabels.length === 0) {
    const rootArrayMatch = content.match(/export default\s*\[/);
    if (rootArrayMatch) {
        searchIndex = rootArrayMatch.index + rootArrayMatch[0].length;
    } else {
        const lastBracket = content.lastIndexOf(']');
        if (lastBracket !== -1) insertionPoint = lastBracket;
    }
  } else {
    for (const label of parentLabels) {
       const result = findLabelInContext(content, label, searchIndex, searchBoundary);
       
       if (!result) {
           console.error(`Could not find label "${label}" in sidebar file to update.`);
           return;
       }
       
       const absoluteLabelPos = result.match.index;
       const objectStart = content.lastIndexOf('{', absoluteLabelPos);
       
       const itemsPattern = /['"]?items['"]?\s*:\s*\[/;
       const itemsMatch = content.slice(objectStart).match(itemsPattern);
       if (!itemsMatch) {
            console.error(`Could not find items array for "${label}".`);
            return;
       }
       
       searchIndex = objectStart + itemsMatch.index + itemsMatch[0].length;
       
       // Find the end of this category's items array to set boundary for next search
       let depth = 1;
       let i = searchIndex;
       while (i < content.length && depth > 0) {
         if (content[i] === '[') depth++;
         if (content[i] === ']') depth--;
         i++;
       }
       searchBoundary = i;
    }
  }

  if (insertionPoint === -1) {
    if (atIndex === null || atIndex === 1) {
        if (atIndex === 1) {
            insertionPoint = searchIndex;
        } else {
            let depth = 1;
            for (let i = searchIndex; i < content.length; i++) {
                if (content[i] === '[') depth++;
                if (content[i] === ']') depth--;
                if (depth === 0) {
                    insertionPoint = i;
                    break;
                }
            }
        }
    } else {
        let arrayDepth = 1;
        let objectDepth = 0;
        let commaCount = 0;
        let found = false;
        for (let i = searchIndex; i < content.length; i++) {
            if (content[i] === '[') arrayDepth++;
            if (content[i] === ']') {
                arrayDepth--;
                if (arrayDepth === 0) {
                    insertionPoint = i;
                    found = true;
                    break;
                }
            }
            if (content[i] === '{') objectDepth++;
            if (content[i] === '}') objectDepth--;

            if (arrayDepth === 1 && objectDepth === 0 && content[i] === ',') {
                commaCount++;
                if (commaCount === atIndex - 1) {
                    insertionPoint = i + 1;
                    found = true;
                    break;
                }
            }
        }
        if (!found) {
             let depth = 1;
            for (let i = searchIndex; i < content.length; i++) {
                if (content[i] === '[') depth++;
                if (content[i] === ']') depth--;
                if (depth === 0) { insertionPoint = i; break; }
            }
        }
    }
  }
  
  if (insertionPoint !== -1) {
    let prefix = '';
    let suffix = '';
    
    const isAtStart = insertionPoint === searchIndex;
    const textAfter = content.slice(insertionPoint).trim();
    const isEmptyArray = isAtStart && textAfter.startsWith(']');

    if (isAtStart) {
        prefix = '\n' + baseIndent;
        if (!isEmptyArray) {
            suffix = ',\n';
        } else {
            suffix = '\n' + '  '.repeat(indentLevel - 1);
        }
    } else {
        const textBefore = content.slice(0, insertionPoint).trim();
        const lastCharBefore = textBefore[textBefore.length - 1];
        
        if (lastCharBefore === '[' || lastCharBefore === ',') {
            prefix = '\n' + baseIndent;
        } else {
            prefix = ',\n' + baseIndent;
        }

        if (!textAfter.startsWith(']') && !textAfter.startsWith(',')) {
            suffix = ',\n';
        } else if (textAfter.startsWith(']')) {
             suffix = '\n' + '  '.repeat(indentLevel - 1);
        }
    }

    // Clean up excessive whitespace around the insertion point if we're inserting at start
    if (isAtStart) {
        content = content.slice(0, insertionPoint).trimEnd() + prefix + newItemString + suffix + content.slice(insertionPoint).trimStart();
    } else {
        content = content.slice(0, insertionPoint) + prefix + newItemString + suffix + content.slice(insertionPoint);
    }
  }
  
  
  fs.writeFileSync(filepath, content);
  formatFile(filepath);
  console.log(chalk.green(`  ✅ Successfully updated sidebar: `) + chalk.white(path.basename(filepath)));
}

export {
  validateName,
  getNameVariants,
  getDocTemplate,
  parseSidebarContent,
  resolveFSPathFromItems,
  insertItemIntoSidebar,
  browseCategories,
  promptForPosition,
  resolveTargetDirectory,
  promptForUniqueName
};

if (process.argv[1] === __filename) {
  main().catch(console.error);
}
