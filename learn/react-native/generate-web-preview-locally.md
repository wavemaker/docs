---
title: "Generate Web Preview in Local Machine"
id: "generate-web-preview-locally"
sidebar_label: "Local Web Preview"
---
---


For projects with a large number of pages (over 100), generating a web-preview in WaveMaker Studio be time-consuming, impacting the build time of other projects as well. To address this issue, an alternative approach is to generate the web-preview locally, which significantly reduces the time required. With this setup, whenever code changes are made in WaveMaker Studio, the preview is generated on the developer's machine. The procedure to set up web-preview generation on a local system is explained below:

## Prerequisites

Before proceeding, ensure the following prerequisites are met:

1. Install [Node.js version 14.15.5](https://nodejs.org/download/release/v14.15.5/).
2. Install [wm-reactnative-cli version 1.3.23](https://www.npmjs.com/package/@wavemaker/wm-reactnative-cli) globally by running the following command:

```
npm install -g @wavemaker/wm-reactnative-cli
```
3. Install [Git version 2.41](https://git-scm.com/downloads).


## Setup

Follow the steps below to set up generating web-preview locally:

1. Open the [link](https://raw.githubusercontent.com/wavemaker/wm-reactnative-cli/1.x.x/files/ui-build.js) and save the file as `ui-build.js`.
2. Delete the existing `ui-build.js` file using the **Import Resource** dialog in the File Explorer:
   ![Import Dialog](/learn/assets/generate-web-preview-locally/upload-dialog.png)
3. Upload the downloaded `ui-build.js` file to your project folder. Ensure that the filename remains `ui-build.js`.
4. Click on the **Preview** button in WaveMaker Studio. You should see a similar screen:
   ![Preview Message](/learn/assets/generate-web-preview-locally/message.png)
5. Copy the command displayed and execute it on your local machine:
   ![Copy Command](/learn/assets/generate-web-preview-locally/command.png)
6. A prompt for a token will appear. Follow the procedure mentioned in the terminal to obtain the token:
   ![Token Prompt](/learn/assets/generate-web-preview-locally/token-prompt.png)
   ![Copy Token](/learn/assets/generate-web-preview-locally/copy-token.png)
7. The initial setup for each project may take some time.
8. Open http://localhost:<b>19009</b> in your browser (discard http://localhost:19006).
9. From here on, clicking on the **Preview** button in WaveMaker Studio will trigger a web-preview build on your local machine.
10. Open the devtools and adjust the viewport to a mobile phone:
    ![Preview](/learn/assets/generate-web-preview-locally/preview.png)

## Troubleshooting Guide

If you encounter any issues, refer to the troubleshooting guide below:

1. Ensure that the required software and versions are installed correctly.
2. If the expected content is not displayed:
   - Refresh the browser window.
   - Stop the CLI and kill all Node processes using the task manager or activity monitor.
   - Run the CLI command with the `--clean` option appended.
3. If the sync process fails to download uncommitted files, perform a VCS push in WaveMaker Studio and click on the preview button again.
