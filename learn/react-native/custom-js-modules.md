---
title: "Using Custom JS Libraries in React Native Applications"
sidebar_label: "Custom JS Modules"
id: "custom-js-modules"
---

A JavaScript module allows you to enhance your application by integrating specialized libraries or custom scripts. This helps in:

- Creating unique user interfaces  
- Implementing complex business logic  
- Integrating third-party services  

### Why Upload Custom JS Modules Locally?

Uploading JS modules directly into the project offers the following advantages:

- Supports **platform-specific** custom modules (Web or Native)
- Local modules can be uploaded in the project without using third party server. 

:::note
If your JS module is already available on NPM or Git, and it is not dependent on the platform, consider using [Third-party expo plugins](/learn/react-native/third-party-expo-plugins/).
:::

### Types of Custom JS Modules

Custom JS modules can be:

1. **Platform-independent** — works on both Web and Native
2. **Platform-specific** — different versions for Web and Native platforms

When creating platform specific custom JS modules, user can either

- Uploading a custom JS module.
- Uploading Platform Specific Custom JS Modules.

### Uploading Custom JS module

You can upload a custom JS module by using the following steps. 

1. Navigate to File Explorer, go to resources.
2. Click `+` icon to upload the custom module.
3. In Project tab, navigate to the following path: `project/src/main/webapp/resources/files`
4. Upload the custom module.

**Example**: Uploading the custom JS module with name `customScript.js`.

:::note
Ensure the path where the custom module is uploaded is same as the mentioned one.
:::


<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/tXtEv6RDtJhz4dsgKDY8JE"
    title="Guide to upload custom js module "
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

### Importing Custom JS Module

Once uploaded, import the custom JS module using the following steps.

- In an application, go to **app.js** file.
- Import the platform specific custom JS file using the below command.

`require('./assets/resources/files/customScript.js');`

![](/learn/assets/importing-single-custom-module.png)

### Uploading Platform Specific Custom JS Modules

A custom JS module can be created and uploaded separately for Web and Native platforms.

#### Why Use Platform-Specific Modules?

- Web Logic uses browser-based APIs like document, window, or DOM methods, which are not available in the React Native environment.
- Native Logic relies on React Native-specific features like NativeModules, or StyleSheet, which are not applicable for Web applications.
- Keeping platform-specific logic separate ensures the application loads only the relevant code for the target environment. This improves application performance.

### How to Upload Platform Specific JS Modules

You can upload an alternative custom JS module for Web to successfully run the Web preview in cases where the Native libraries might cause Web preview failure. To upload two custom JS module files for Web and Native platforms follow the below steps.

1. Go to File Explorer and click **'+'** to add resources.
2. In Import Resource dialog, click **Upload Files** to upload the custom JavaScript library.
3. To upload platform specific files,
   1. **For Web:** Upload **customScript.web.js** library that has the web logic.
   2. **For Native:** Upload **customScript.native.js** library that has the native logic.

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/6qB7zewc5dDDBh7aKuB49z"
    title="Upload custom js module (platform specific)"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

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

### Use Case

For instance, where you need to create an alternative Web custom JS module for Native JS module, go to [PDF Preview](/learn/react-native/pdf-preview-and-download/). With this document, you can create platform specific custom JS modules for PDF preview.

