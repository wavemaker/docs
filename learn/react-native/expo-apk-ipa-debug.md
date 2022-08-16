---
title: "Debugging React Native Apps installed in Mobile"
id: ""
sidebar_label: "Debug APK & IPA files"
---
---

## Android App Debug Procedure

## Pre-requisites

1. A laptop or desktop with linux or windows, or macos. It is recommended to have the latest OS
2. Android phone with Android Marshmallow (6 or later OS versions).
3. Chrome or firefox
4. Expo (npm install -g expo-cli)
5. React-native (npm install -g react-native)
6. React Dev Tools (npm install -g react-devtools)
7. Install wm-reactnative-cli using below command

```shell
npm install -g https://github.com/wavemaker/wm-reactnative-cli
```

### React Dev Tool

- Install React Dev Tools

```shell
npm i -g react-devtools@4.14.0.
```

## Debugging Procedure

1. Make sure that the Android phone is connected to your system with a USB.
2. Execute **adb devices** and check whether your phone is in the command output. 
3. Execute **adb reverse tcp:8081 tcp:8081** (for debugger)
4. Execute **adb reverse tcp:8097 tcp:8097** (for react dev tools)
5. Export and download the react native zip from WaveMaker studio.
6. Build apk using [wm-reactnative-cli](https://github.com/wavemaker/wm-reactnative-cli). 
7. Navigate to the build destination (parent of output) folder in a terminal. 
8. Execute **react-native run-android** at the build folder.
9. From here, follow the steps mentioned here.


## iOS App Debug Procedure

## Pre-requisites

1. A Mac book with the latest Mac OS.
2. iPhone with iOS 13 or later
3. Chrome or firefox
4. Expo (npm install -g expo-cli)
5. React-native (npm install -g react-native)
6. React Dev Tools (npm install -g react-devtools)
7. Install wm-reactnative-cli using below command

```shell
npm install -g https://github.com/wavemaker/wm-reactnative-cli
```

## Debugging Procedure


1. Make sure that the iPhone is connected to your system with a USB.
2. Export and download the react native zip from WaveMaker studio.
3. Do a iOS build using wm-reactnative-cli (refer doc).
4. Open  ${build_destination}/ios folder.
5. Open the file with workspace as extension in xcode.
6. Connect your iPhone to the Mac.
7. Select your iPhone or simulator and click on Build button

![Xcode_build](/learn/assets/xcode_build.png)

8. From here, follow the below steps.



## Common Procedure


1. Shake the phone until the following screen pops out.
   
   ![expo developer menu](/learn/assets/expo-developer-menu.png)

2. In the developer menu, click on `Debug Remote JS` option to debug the JavaScript of the app. Following window should open in the chrome browser

   ![debugger-ui](/learn/assets/debugger-ui.png)

3. Open developer tools on this page and start JS debugging the app.
4. Execute react-devtools in a terminal. If the installed react-devtools is not compatible, install the one suggested when react-devtools is opened. Then, follow this step again.
5. Then, click on ‘Reload app’ in the above page.
6. Now, react-devtools should show the component tree

![React Dev Tools](/learn/assets/react-dev-tools.png)
