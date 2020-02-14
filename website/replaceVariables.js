const https = require('https');
const {exec} = require('child_process');
require('dotenv').config();

const siteVariables = {
    wmVersionNumberAPI: process.env.WM_VERSION_NUMBER_API,
    wmVersionNumber: process.env.WM_VERSION_NUMBER
};

/**
 * get the latest WM run time build number ah use it for the docs here
 */
function fetchRuntimeUIVersionNumber() {
    console.log('fetching runtime build number from - ', siteVariables.wmVersionNumberAPI);
    let api = siteVariables.wmVersionNumberAPI;
    https.get(api, function (res) {
        var body = '';
        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('end', function () {
            var studioAboutResponse = JSON.parse(body);
            console.log("Got a response: ", studioAboutResponse);
            let versionNumber = studioAboutResponse.product.runtimeProperties['wavemaker.app.runtime.ui.version'];
            console.log("Version Number: ", versionNumber);
            replaceBuildNumber(versionNumber)
        });
    }).on('error', function (e) {
        console.log("Got an error while fetching the build number: ", e);
        //fallback on the version number defined in the env. Build will happen with some old number
        replaceBuildNumber(siteVariables.wmVersionNumber)
    });
}

/**
 * The exec function will run after the build directory is generated and it looks for notation #{<variable name>}#
 * in all the subdirectories and files and replaces the respective variable using the wmVersionNumber
 */
function replaceBuildNumber(wmVersionNumber) {
    console.log('Variable replacement started');
    exec("cd ./build/learn && LC_ALL=C find . -type f -name '*.*' -exec sed -i -e 's/#{wmVersionNumber}#/" + wmVersionNumber + "/g' {} \\;", (err, stdout, stderr) => {
        if (err) {
            console.log("Command execution error:", err);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        console.log('Variable replacement of wmVersionNumber to ' + wmVersionNumber + ' completed');
    });
}

fetchRuntimeUIVersionNumber();
