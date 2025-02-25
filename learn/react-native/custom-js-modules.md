---
title: "Uploading Platform Specific Custom JS Modules"
sidebar_label: "Custom JS Modules"
id: "custom-js-modules"
---

A JavaScript module can be created on any platform and integrated in WaveMaker application to be reused anywhere. This feature enables users to enhance the application functionality by allowing integration of specialized libraries or custom scripts, facilitating the creation of unique user interfaces, implementing complex business logic, or incorporating third-party services.

Uploading custom JS modules locally comes with below pros.

### Benefits

- You can upload platform specific custom JS module.
- Local modules can be uploaded to use in the project.
- As it doesnt require to upload in cloud, confidentiality is maintained. 


Note: If the custom JS module is already available in NPM or Git, and it is not dependent on the platform then go to (mayank sent the link).

## Uploading Custom JS Module

A custom JS module can be created for Web and Native applications or it can be platform independent. When creating platform specific custom JS modules, user can either

- Uploading Single Custom JS module and importing platform specific custom js code.
- Uploading Platform Specific Custom JS Modules and importing custom js module.


### Uploading Single Custom JS module

When uploading single JS module which has platform specific code, you can import Web and Native specific code separately in the application. To upload the single custom JS module, 

1. Navigate to File Explorer, go to resources.
2. Click `+` icon to upload the custom module.
3. In Project tab, navigate to the following path: `project/src/main/webapp/resources/files`
4. Upload the custom module.

**Example**: Uploading the custom JS module with name `customScript.js`.

:::note
Ensure the path where the custom module is uploaded is same as the mentioned one.
:::

![](/learn/assets/single-js-module.png)

### Importing Platform Specific Custom JS Modules

Once uploaded, import the platform specific files using the following steps.

- In an application, go to **app.js** file.
- Import the platform specific custom JS file using the below commands.
  - **For Web**: `require('./assets/resources/files/customScript.web.js');`
  - **For Native**: `require('./assets/resources/files/customScript.native.js');`


![](/learn/assets/importing-single-custom-module.png)

## Uploading Platform Specific Custom JS Modules

A custom JS module can be created and uploaded separately for Web and Native platforms.

### Why to Upload Platform Specific JS Module

- **Different Execution Environments**: 
  - Web Logic Runs in a browser-based environment, relying on standard web technologies like HTML, CSS, and JavaScript, as well as browser APIs.
  - Native Logic executes in a mobile-specific environment, where JavaScript interacts with native modules through React Native and must use React Native-specific APIs.
- **Platform-specific APIs**:
  - Web Logic uses browser-based APIs like document, window, or DOM methods, which are not available in the React Native environment.
  - Native Logic relies on React Native-specific features like NativeModules, or StyleSheet, which are not applicable for Web applications.
- **Code Optimization and platform flexibility**: 
  - Keeping platform-specific logic separate ensures the application loads only the relevant code for the target environment. This improves application performance.

### How to upload for web

The Custom JS module with web logic can be uploaded in the resources folder of the application in studio.

1. Go to File Explorer and click **'+'** to add resources.
2. In Import Resource dialog, click **Upload Files** to upload the custom JavaScript library.
3. Upload **customScript.web.js** library that has the web logic.

![](/learn/assets/web-js-module.png)

### How to upload for Mobile

Similar to uploading Web logic, the custom JS module with native logic can be uploaded in the resources folder of the application.

1. Go to File Explorer and click **'+'** to add resources.
2. In Import Resource dialog, click **Upload Files** to upload the custom JavaScript library.
3. Upload **customScript.native.js** library that has the native logic.

![](/learn/assets/native-js-module.png)

## How to Import in Application

Two files, **customScript.web.js** for web and **customScript.native.js** for React Native, are uploaded to the application's resources folder. To use custom JS files in any application, import them using the following code in the **app.js** file.


```JavaScript
require('./assets/resources/files/customScript.js');
```

![Importing Custom JS File](/learn/assets/importing-custom-js-file.png)

:::note
Studio automatically picks up the platform specific custom js file to be used in the application.
:::

































