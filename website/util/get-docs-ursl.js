const glob = require('glob');
const fs = require('fs');
const srcPath = '../../learn/';

let files = glob.sync(`${srcPath}**/*`);
let filesData = { files: [] };
files.forEach(function(item) {
	if (item.endsWith('.md')) {
		let splitItem = item.substring(srcPath.length, item.length - 3);
		filesData.files.push(splitItem);
	}
});

const destPath = '../cypress/fixtures/wavemaker-docs-urls.json';
fs.writeFile(destPath, JSON.stringify(filesData), () => {});
