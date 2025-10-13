---
title: "IPA: Debugging React Native iOS App Installed in Mobile"
id: "expo-ipa-debug"
sidebar_label: "Debug IPA"
---

---

You can install a WaveMaker-developed React Native app on your mobile device and debug the application. In this document, we use IPA files to debug an iOS application.

:::warning
This is deprecated. Please check [Flipper](/learn/react-native/flipper) to debug applications.
:::

## Pre-requisites

1. A Mac book with the latest Mac OS.
2. iPhone with iOS 13 or later
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

## Preparing for Debugging an iOS App

1. Ensure the iPhone is connected to your system with a USB.
2. Export and download the React Native zip from WaveMaker Studio.
3. Perform an iOS build using [wm-reactnative-cli](https://www.npmjs.com/package/@wavemaker/wm-reactnative-cli).
4. Open `${build_destination}/ios` folder.
5. Open the file with workspace as an extension in **Xcode**.
6. Connect your iPhone to the Mac.
7. Select your iPhone or simulator and click on the **Build** button.

![Xcode_build](/learn/assets/xcode_build.png)

## Step-by-step Instructions

:::tip
The following procedure is the same for Android and iOS apps.
:::

1. Shake the phone until the following screen pops up.

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
