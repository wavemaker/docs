---
title: "Generate Web Preview in Developer Machine"
id: "generate-web-preview-locally"
sidebar_label: "Local Web Preview"
---
---


For projects with a large number of pages (over 100), generating a web-preview in WaveMaker Studio be time-consuming, impacting the build time of other projects as well. To address this issue, an alternative approach is to generate the web-preview in developer machine. This significantly reduces the time required. With this setup, whenever code changes are made in WaveMaker Studio, the preview is generated on the developer's machine. The procedure to set up web-preview generation on a developer machine is explained below:

## Prerequisites

Before proceeding, ensure the following prerequisites are met:

1. Install [Node.js version 18.16.1](https://nodejs.org/download/release/v18.16.1/).
2. Install [wm-reactnative-cli version 1.5.0](https://www.npmjs.com/package/@wavemaker/wm-reactnative-cli) globally by running the following command:

```
npm install -g @wavemaker/wm-reactnative-cli
```
3. Install [Git version 2.41](https://git-scm.com/downloads).


## Setup

Follow the steps below to set up generating web-preview locally:

1. Turn off Web Preview in the project settings dialog.
   ![Preview Message](/learn/assets/generate-web-preview-locally/turn_off_webpreview.png)
2. Click on the **Preview** button in WaveMaker Studio. You should see a similar screen:
   ![Preview Message](/learn/assets/generate-web-preview-locally/message.png)
3. Copy the command displayed and execute it on your local machine.
4. If required, a prompt for a authenticate token will appear. Follow the procedure mentioned in the terminal to obtain the token:
   ![Token Prompt](/learn/assets/generate-web-preview-locally/token-prompt.png)
   ![Copy Token](/learn/assets/generate-web-preview-locally/copy-token.png)
5. The initial setup for each project may take some time.
6. Open http://localhost:<b>19009</b> in your browser (not http://localhost:19006).
7. From here on, clicking on the **Preview** button in WaveMaker Studio will trigger a web-preview build on your local machine.
8. Open the devtools and adjust the viewport to a mobile phone:
    ![Preview](/learn/assets/generate-web-preview-locally/preview.png)

## Troubleshooting Guide

If you encounter any issues, refer to the troubleshooting guide below:

1. Ensure that the required software and versions are installed correctly.
2. If the expected content is not displayed:
   - Refresh the browser window.
   - Stop the CLI and kill all Node processes using the task manager or activity monitor.
   - Run the CLI command with the `--clean` option appended.
3. If the sync process fails to download uncommitted files, perform a VCS push in WaveMaker Studio and click on the preview button again.
