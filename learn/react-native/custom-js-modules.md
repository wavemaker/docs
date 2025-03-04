---
title: "Using Custom JS Libraries in React Native Applications"
sidebar_label: "Custom JS Modules"
id: "custom-js-modules"
---

A JavaScript module enables users to enhance the application functionality by allowing integration of specialized libraries or custom scripts, facilitating the creation of unique user interfaces, implementing complex business logic, or incorporating third-party services.

Uploading custom JS modules locally comes with below pros.

- You can upload platform specific custom JS module.
- Local modules can be uploaded in the project without using third party server. 

:::note
If the custom JS module is already available in NPM or Git, and it is not dependent on the platform then go to [Third-party expo plugins](/learn/react-native/third-party-expo-plugins/).
:::

## Using Custom JS Module

A custom JS module can be created for Web and Native applications or it can be platform independent. When creating platform specific custom JS modules, user can either

- Uploading a custom JS module.
- Uploading Platform Specific Custom JS Modules.

### Uploading Custom JS module

When uploading single JS module which has platform specific code, you can import Web and Native specific code separately in the application. To upload the single custom JS module, 

1. Navigate to File Explorer, go to resources.
2. Click `+` icon to upload the custom module.
3. In Project tab, navigate to the following path: `project/src/main/webapp/resources/files`
4. Upload the custom module.

**Example**: Uploading the custom JS module with name `customScript.js`.

:::note
Ensure the path where the custom module is uploaded is same as the mentioned one.
:::


<iframe width="700px" height="400px" src="https://embed.app.guidde.com/playbooks/tXtEv6RDtJhz4dsgKDY8JE" title="Guide to upload custom js module " frameborder="0" allowfullscreen ></iframe>


### Importing Custom JS Modules

Once uploaded, import the custom JS module using the following steps.

- In an application, go to **app.js** file.
- Import the platform specific custom JS file using the below command.

`require('./assets/resources/files/customScript.js');`

![](/learn/assets/importing-single-custom-module.png)

### Uploading Platform Specific Custom JS Modules

A custom JS module can be created and uploaded separately for Web and Native platforms.

#### Why to Upload Platform Specific JS Module

- Web Logic uses browser-based APIs like document, window, or DOM methods, which are not available in the React Native environment.
- Native Logic relies on React Native-specific features like NativeModules, or StyleSheet, which are not applicable for Web applications.
- Keeping platform-specific logic separate ensures the application loads only the relevant code for the target environment. This improves application performance.

### How to Upload Platform Specific JS Modules

The Custom JS module with web logic can be uploaded in the resources folder of the application in studio.

1. Go to File Explorer and click **'+'** to add resources.
2. In Import Resource dialog, click **Upload Files** to upload the custom JavaScript library.
3. To upload platform specific files,
   1. **For Web:** Upload **customScript.web.js** library that has the web logic.
   2. **For Native:** Upload **customScript.native.js** library that has the native logic.

<iframe width="700px" height="400px" src="https://embed.app.guidde.com/playbooks/6qB7zewc5dDDBh7aKuB49z" title="Upload custom js module (platform specific)" frameborder="0" allowfullscreen ></iframe>

## How to Import in Application

Two files, **customScript.web.js** for web and **customScript.native.js** for React Native, are uploaded to the application's resources folder. To use custom JS files in any application, import them using the following code in the **app.js** file.

Studio automatically picks up the platform specific custom JS file to be used in the application.


```JavaScript
require('./assets/resources/files/customScript');
```

![Importing Custom JS File](/learn/assets/importing-custom-js-file.png)


:::note
While importing platform sepcific JS module, ensure not to use file extension `.js` in the `require` statement as shown above.
:::

