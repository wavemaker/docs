---
title: "Generate Web Preview in your local machine"
id: "generate-webpreview-locally"
sidebar_label: "Local Web Preview"
---
---

## Introduction
In case of projects that have more 100 pages, generating web-preview in WaveMaker studio takes several minutes of time. In those cases, other projects' build time can also get affected. Instead of depending on the WaveMaker studio, one can generate web-preview locally also and it takes less time. Whenever code gets changed in WaveMaker Studio, preview is generated on developer's machine. Procedure to setup web-preview generation on a system, is explained below.

## Prerequisites

1. Install [Node @14.15.5](https://nodejs.org/download/release/v14.15.5/).
2. Install [wm-reactnative-cli @1.3.23](https://www.npmjs.com/package/@wavemaker/wm-reactnative-cli).
```
npm install -g @wavemaker/wm-reactnative-cli
```
3. Install [git @2.41](https://git-scm.com/downloads)

## Setup

1. Open the [link](https://raw.githubusercontent.com/wavemaker/wm-reactnative-cli/1.x.x/files/ui-build.js) and save it as ui-build.js.
2. Using import resource dialog in File Explorer, delete ui-build.js.<br></br>
![Import Dialog](/learn/assets/generate-web-preview-locally/upload-dialog.png)
3. Upload the downloaded ui-build.js to project folder. Make sure that name is ui-build.js
4. Click on preview. A screen similar to the one below, should appear.<br></br>
![preview message](/learn/assets/generate-web-preview-locally/message.png)
5. Copy the command and execute it on your local machine.<br></br>
![Copy Command](/learn/assets/generate-web-preview-locally/command.png)
6. A prompt for a token will appear. Please follow the procedure mentioned in the terminal.
![Token-prompt](/learn/assets/generate-web-preview-locally/token-prompt.png)
![Copy-Token](/learn/assets/generate-web-preview-locally/copy-token.png)
7. It takes some time for the initial setup for each project.
8. Open http://localhost:<b>19009</b>. <i>Discard http://localhost:19006.</i>
9. From here on, a click on preview in WaveMaker Studio will trigger a web-preview build on your local machine.
10. Open devtools and adjust view port to a mobile phone.
![Preview](/learn/assets/generate-web-preview-locally/preview.png)


## Troubleshooting Guide
1. Make the required software and required versions are installed.
2. When the expected the content is not displayed.
    - Refresh the browser window.
    - Stop the cli and kill all node processes using task manager or activity monitor.
    - Run the cli command with <b>--clean</b> option appended.
3. If the sync process gets failed to download the uncommited files, then do a VCS push in studio and click on preview button.