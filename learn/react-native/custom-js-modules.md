---
title: "Supporting Custom JS Libraries in React Native Apps"
sidebar_label: "Custom JS Modules"
id: "custom-js-modules"
---

A JavaScript module can be created on any platform and integrated in WaveMaker application to be reused anywhere. In this document, we understand why and how to upload and use different custom JS logic for web and mobile applications.

## Why to upload it separately

- **Different Execution Environments**: 
  - Web Logic Runs in a browser-based environment, relying on standard web technologies like HTML, CSS, and JavaScript, as well as browser APIs.
  - Native Logic executes in a mobile-specific environment, where JavaScript interacts with native modules through a bridge (React Native) and must use React Native-specific APIs.
- **Platform-specific APIs**:
  - Web Logic uses browser-based APIs like document, window, or DOM methods, which are not available in the React Native environment.
  - Native Logic relies on React Native-specific features like NativeModules, or StyleSheet, which are not applicable for Web applications.
- **Code Optimization and platform flexibility**: 
  - Keeping platform-specific logic separate ensures the application loads only the relevant code for the target environment. This improves application performance.

## How to upload for web

The Custom JS module with web logic can be uploaded in the resources folder of the application in studio.

1. Go to File Explorer and click **'+'** to add resources.
2. In Import Resource dialog, click **Upload Files** to upload the custom JavaScript library.
3. Upload **customScript.web.js** library that has the web logic.

## How to upload for Mobile

Similar to uploading Web logic, the custom JS module with native logic can be uploaded in the resources folder of the application.

1. Go to File Explorer and click **'+'** to add resources.
2. In Import Resource dialog, click **Upload Files** to upload the custom JavaScript library.
3. Upload **customScript.native.js** library that has the native logic.

## How to Import in Application

Two files, **customScript.web.js** for web and **customScript.native.js** for React Native are uploaded in the resources folder of the application. To use custom JS files in any application, you need to import the files using the following code in **app.js** file.

```JavaScript
require('./assets/resources/files/customScript.js');
```

![Importing Custom JS File](/learn/assets/importing-custom-js-file.png)

:::note
Studio automatically picks up the platform specific custom js file to be used in the application.
:::

## Usecase































