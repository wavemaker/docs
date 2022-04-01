---
title: "Preview React Native Apps in Mobile without Building Installers"
id: ""
sidebar_label: "Expo Debug"
---
---

Mobile app developers can preview their apps using the Preview button. To see the complete app along with their native capabilities, developers have to build the installer (apk or ipa) for respective OS. This build step consumes 10 mins of developer time. To improve your productivity, we will be use Expo Go app to see an instant preview of the app without building the installer

## Pre-requisitess

1. If you are using windows machine, Install [Git Bash](https://gitforwindows.org/) and use it as terminal window. 
2. Make sure you have node 12 and npm 7 installed in your machine
3. Install wm-reactnative-cli in your machine using below command
 ```npm install -g https://github.com/wavemaker/wm-reactnative-cli```
4. Install Expo Go app on your mobile phone from [Playstore](https://play.google.com/store/apps/details?id=host.exp.exponent) or [App Store](https://apps.apple.com/us/app/expo-go/id982107779)
5. Install React Dev Tools `npm i -g react-devtools@4.14.0`.

## Debugging Procedure

1. Open project and preview the application.
2. copy the preview url. Ex: ```https://wm11.wavemakeronline.com/…../{Project_Name}```
3. Execute the following command in your machine terminal
   ```wm-reactnative run expo ${APP_PREVIEW_URL}```
4. Once command gets executed successfully, open [http://localhost:19002/](http://localhost:19002/) in your chrome browser
5. If  you have Android, open the Expo Go app and scan the QR code that appears at the left bottom of [http://localhost:19002/](http://localhost:19002/)  

![expo portal](/learn/assets/expo-portal-qr-code.png)

6. If you have iOS, open the Safari browser in your iPhone and type the exp url that appears on top of the QR code. Expo Go will open automatically.

![expo portal ios url](/learn/assets/expo-portal-ios-link.png)

7. When you shake the phone, the expo developer menu opens up. In the developer menu, click on `Debug Remote JS` option to debug the JavaScript of the app. You can stop debugging by tapping on the `Stop Debug` in developer menu. An active debugging session will make the app to run slower.

<img src="../../assets/expo-developer-menu.png" style="height:480px">

8. Open [http://localhost:19000/debugger-ui/](http://localhost:19000/debugger-ui/) in your system. If there are many tabs with the same URL, close all except anyone.

![React Debug Portal](/learn/assets/react-debug-portal.png)

9. To view React Native component tree, execute `react-devtools` in terminal. Then reload the app in mobile from the developer menu.

![React Dev Tools](/learn/assets/react-dev-tools.png)

## Additional Resources

[https://docs.expo.dev/workflow/debugging/](https://docs.expo.dev/workflow/debugging/)