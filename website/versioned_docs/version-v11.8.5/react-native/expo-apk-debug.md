---
title: "APK: Debugging React Native Android App Installed in Mobile"
id: "expo-apk-debug"
sidebar_label: "Debug APK"
---
---

You can install a WaveMaker-developed React Native app on your mobile device and debug the application. In this document, we use APK files to debug an Android application. 

:::warning
This is deprecated. Please check [Flipper](/learn/react-native/flipper) to debug applications.
:::

## Pre-requisites

1. A laptop or desktop with Linux, Windows, or macOS is recommended with the latest OS installed.
2. Android phones with Android Marshmallow 6 or later are supported.
3. Chrome or Firefox browser

### Installation

1. Install **Expo**

```shell
npm install -g expo-cli
```

2. Install **React Native**

```shell
npm install -g react-native
```

3. Install **React Dev Tools**

```shell
npm install -g react-devtools
```

4. Install **`wm-reactnative-cli`**

```shell
npm install -g @wavemaker/wm-reactnative-cli
```


## Preparing for Debugging Android App

1. Ensure that the Android phone is connected to your system with a USB.
2. Execute **adb devices** and check whether your phone is in the command output. 
3. Execute **adb reverse tcp:8081 tcp:8081**; this for debugger.
4. Execute **adb reverse tcp:8097 tcp:8097**; this is for React Dev Tools.
5. Export and download the React Native zip from WaveMaker Studio.
6. Build apk using [wm-reactnative-cli](https://www.npmjs.com/package/@wavemaker/wm-reactnative-cli). 
7. Navigate to the build destination, including parent of the output folder in a terminal. 
8. Execute **react-native run-android** at the build folder.
9. Follow the procedural steps mentioned below. 

## Step-by-step Instructions 

:::tip
The following procedure is the same for Android and iOS apps.
:::

1. Shake the phone until the following screen pops out.
 
 ![expo developer menu](/learn/assets/expo-developer-menu.png)

2. In the developer menu, click on the `Debug Remote JS` option to debug the JavaScript of the app. The following window should open in the Chrome browser.

 ![debugger-ui](/learn/assets/debugger-ui.png)

3. Open developer tools on this page. You can perform JS debugging.
4. Execute react-devtools on a terminal. 

:::note
If the installed react-devtools are incompatible, install the suggested tools when the react-devtools are opened and follow this step again.
:::

5. Click on **Reload app** on the above page.
6. Now, react-devtools should show the component tree.

![React Dev Tools](/learn/assets/react-dev-tools.png)

