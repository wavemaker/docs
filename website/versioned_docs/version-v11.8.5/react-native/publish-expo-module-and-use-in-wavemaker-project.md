---
title: "Publish Expo Module and Use in WaveMaker Project"
id: "publish-expo-module-and-use-in-wavemaker-project"
sidebar_label: "Publish Expo Module"
---
---

import pluginExample from '/learn/assets/SecureFlagOnDemand.png';

Expanding the capabilities of your app goes beyond merely installing Expo packages or third-party libraries. When you need to tap into native platform APIs or leverage existing Android or iOS dependencies, you can write custom native code. Fortunately, Expo offers excellent support for this through Expo Modules.

With Expo Modules, you can write native code in a way that feels natural and straightforward, with minimal boilerplate. It ensures consistency across both iOS and Android platforms and provides a set of APIs and utilities specifically designed to streamline the development of native modules for Expo and React Native. This empowers you to enhance your app's functionalities and take advantage of native device features effectively.

In this How-to series we’ll walk you through the following:

1. How to create an Expo Module
2. Publish the Expo Module and
3. Use the Module in WaveMaker project

## How to create an Expo Module

To begin using the Expo Modules API, you have two options: You can either start by creating a new module from scratch or integrate the Expo Modules API into an existing module. Both approaches allow you to harness the power of Expo Modules and access native device features in a seamless and consistent manner for your Expo and React Native projects. In this section of How-to we’ll show you how-to create an Expo module in Isolation and we’ll be walking you through on how to use the same in the WaveMaker project in a couple of sections.

For this demonstration, we’ll be creating an Expo Module for Android to show a blank screen in Recent Tasks.

### Initialize a new module

First, we'll create a new module. On this page we will use the name `expo-flagsecure`. You can name it whatever you like, just adjust the instructions accordingly:

```javascript
npx create-expo-module expo-flagsecure
```
:::tip
If you aren't going to actually ship this library, you can hit `return` for all of the prompts to accept the default values.
:::

:::note
The above command internally relies on pipenv and has restrictions in using them in PowerShell. Request readers to an use appropriate system (Linux/Mac).
:::


### Set up your workspace

`create-expo-module` bootstraps your module with number of files that might not be actually required.  
So, it's good clean up the default module a little for a clean slate. We're deleting the view module as we'll be not covering Expo's view here.


```javascript
- cd expo-flagsecure
- rm ios/ExpoFlagsecureView.swift
- rm android/src/main/java/expo/modules/flagsecure/ExpoFlagsecureView.kt
- rm src/ExpoFlagsecureView.tsx src/ExpoFlagsecure.types.ts
- rm src/ExpoFlagsecureView.web.tsx src/ExpoFlagsecureModule.web.ts
```

### Core File Changes 

Find the following files and replace them with the provided minimal boilerplate:

`android/src/main/java/expo/modules/flagsecure/ExpoFlagsecureModule.kt`

```kotlin
package expo.modules.flagsecure

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import android.content.Context
import android.view.WindowManager

class ExpoFlagsecureModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoFlagsecure")
    
    Function("activate"){
        val activity = appContext.activityProvider?.currentActivity
        activity?.runOnUiThread{
            activity?.window?.setFlags(
                WindowManager.LayoutParams.FLAG_SECURE,
                WindowManager.LayoutParams.FLAG_SECURE
            )
        }
    }


    Function("deactivate"){
        val activity = appContext.activityProvider?.currentActivity
        activity?.runOnUiThread{
            activity?.window?.clearFlags(WindowManager.LayoutParams.FLAG_SECURE)
        }
    }
  }
}
```

`src/index.ts`

```javascript
import ExpoFlagsecureModule from './ExpoFlagsecureModule';

export function activate(){
   return ExpoFlagsecureModule.activate();
}

export function deactivate(){
   return ExpoFlagsecureModule.deactivate();
}
```

### Build Compile the Module

Start the TypeScript compiler to watch for changes and rebuild the JavaScript module.

```javascript
- npm run build
```

## Publish the Module

Before publishing your package to npm, you must have an npm account. If you don't have one yet, you can easily create it on the npm [website](https://www.npmjs.com/). Once you have successfully registered, log in to your npm account to proceed with the package publishing process.

To login from terminal use the following command:

```javascript
npm login
```

Then, navigate to root of your module and publish using the following command:

```javascript
npm publish
```

In addition to publishing your module to npm, there are alternative ways to utilize it in your project:

1. Create a tarball of your module using `npm pack` and directly install it in your project by running `npm install /path/to/tarball`. This approach is helpful for testing your module locally before publishing it to npm or for sharing it with others who may not have access to the npm registry.

2. Set up a local npm registry, like Verdaccio, and install your module from there. This method is beneficial when you want to host a private npm registry to manage internal packages within your company or organization securely.

3. Consider publishing a private package or using a private registry in conjunction with EAS Builds, a service provided by Expo. This option allows you to manage and use your proprietary packages securely in your projects.

## Use the Module in WaveMaker Project:

The published plugin can be installed in a few steps in WaveMaker. 
Please refer to this [page](https://docs.wavemaker.com/learn/react-native/third-party-expo-plugins#expo) on how to install a plugin.

`ExpoFlagSecure` can be leveraged in your WaveMaker app through the following ways:

- Enabling and Disabling App Preview on Demand
- Disabling App Preview on App Launch

### Enabling and Disabling App Preview on Demand

Some apps may require the ability to enable or disable app preview only in certain situations i.e. on demand. For example, some users may want to disable app previews when their device is locked or when the app is in the background to prevent sensitive information from being displayed.

For our example, we will create a simple app that allows users to enable or disable app preview on click of a button. 
The following is the mockup of the app:

<img src={pluginExample} style={{width:"35%"}} />

The following is the code snippet for the above mockup:

```javascript
  const ExpoFlagsecure = require('expo-flagsecure');
  Page.onReady = function () {
    Page.Widgets.enablepreview.show = false;
    Page.Widgets.previewlabel.caption = 'App preview: Enabled';
  };
  Page.disablepreivewTap = function ($event, widget) {
    Page.Widgets.disablepreivew.show = false;
    Page.Widgets.enablepreview.show = true;
    Page.Widgets.previewlabel.caption = 'App preview: Disabled';
    ExpoFlagsecure.activate();
  };


  Page.enablepreviewTap = function ($event, widget) {
    Page.Widgets.disablepreivew.show = true;
    Page.Widgets.enablepreview.show = false;
    Page.Widgets.previewlabel.caption = 'App preview: Disabled';
    ExpoFlagsecure.deactivate();
  };
```

### Disabling App Preview on App Launch

Some apps may require the ability to disable app preview on app launch. For example, a banking app may want to disable app preview to prevent sensitive information. In such cases, the ExpoFlagsecure plugin can be leveraged as shown below:

In your WaveMaker project, navigate to the `src/main/webapp/app.js` file and add the following code snippet, which imports the plugin into the app.

```javascript
const ExpoFlagsecure = require('expo-flagsecure');
```

Add the following code snippet to the `onPageReady` function, which disables app preview while using the app.

```javascript
ExpoFlagsecure.activate();
```

Effectively, the `onPageReady` function should look like this:

```javascript
App.onPageReady = function(activePageName, activePageScope, $activePageEl) {
    await ExpoFlagsecure.activate();
};
```

To run your app locally, run the prebuild command and then compile the app

```javascript
npx expo prebuild --clean
```
Then, 

```javascript
npm start
```

