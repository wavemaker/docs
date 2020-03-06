const path = require('path');
const fs = require('fs');
const {exec} = require('child_process');

const slidesConfig = require('./slides-config.json');
const argv = require('optimist').argv;

let isWatchModeEnabled = !!argv.watch;

const srcDirPath = path.join(__dirname, slidesConfig.src);
const outDirPath = path.join(__dirname, slidesConfig.output);
/**
 * for custom styling the slides
 * https://arch.sfc.wide.ad.jp/remark-theme/blue_standard/sample/sample.html#1
 * add theme key in the slides-config.json as shown below pointing to the css file
 * "theme": "static/css/remark_theme_blue_standard.css"
 */
const customTheme = slidesConfig.theme;

function init() {
    fs.readdir(srcDirPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        if (!fs.existsSync(outDirPath)) {
            fs.mkdirSync(outDirPath);
        }
        files.forEach(function (file) {
            let command = 'npx markdown-to-slides -s '+ customTheme + ' ' + getSrcFile(file) + ' -o ' + getDestFile(file);
            if(isWatchModeEnabled) {
                command = 'npx markdown-to-slides -w -s '+ customTheme + ' ' + getSrcFile(file) + ' -o ' + getDestFile(file);
            }
            exec(command, function (e, stdout, stderr) {
                console.log(stderr);
                if (e) throw e;
            });
        });
    });
}

function getSrcFile(mdFileName) {
    return path.join(srcDirPath, mdFileName);
}

function getDestFile(mdFileName) {
    return path.join(outDirPath, path.parse(mdFileName).name + ".html");
}

init();