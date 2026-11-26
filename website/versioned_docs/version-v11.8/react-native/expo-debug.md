---
title: "Preview React Native Apps in Mobile without Building Installers"
id: "expo-debug"
sidebar_label: "Expo Go Preview"
---
---

Mobile app developers can web preview their apps using the Preview button. To see the complete app along with its native capabilities, developers have to build the installer (apk or ipa) for respective OS. This build step consumes 10 mins of developer time. To improve your productivity, we will be use Expo Go app to see an instant preview of the app without building the installer

## Prerequisites

1. For Windows, install [Git Bash](https://gitforwindows.org/) and use it as the terminal window. 
2. Install Node 18.16.1
3. Install npm 9.5.1
4. Install wm-reactnative-cli in your machine using below command

```shell
npm install -g @wavemaker/wm-reactnative-cli
```

### Expo Go 

Install Expo Go app on your mobile phone

1. [Playstore](https://play.google.com/store/apps/details?id=host.exp.exponent) 
2. [App Store](https://apps.apple.com/us/app/expo-go/id982107779)

### React Dev Tool

- Install React Dev Tools 

```shell
npm i -g react-devtools@4.26.0
```

## Debugging Procedure

1. Open the project and preview the application.
2. Copy the preview URL. For example:

```shell
https://wavemakeronline.com/…../{Project_Name}
```

3. Execute the following command in your machine terminal

```shell
wm-reactnative run expo ${APP_PREVIEW_URL}
```

4. Once the command gets executed successfully, open [http://localhost:19002/](http://localhost:19002/) in your chrome browser
5. If  you have Android, open the Expo Go app and scan the QR code that appears at the left bottom of [http://localhost:19002/](http://localhost:19002/)  

![expo portal](/learn/assets/expo-portal-qr-code.11.2.2.png)

6. If you have iOS, open the Safari browser in your iPhone and type the exp url that appears on bottom of the QR code. Expo Go will open automatically.

![expo portal ios url](/learn/assets/expo-portal-ios-link.11.2.2.png)

7. When you shake the phone, the expo developer menu opens up. In the developer menu, click on `Debug Remote JS` option to debug the JavaScript of the app. You can stop debugging by tapping on the `Stop Debug` in developer menu. An active debugging session will make the app run slower.

![expo developer menu](/learn/assets/expo-developer-menu.png)

8. Open [http://localhost:19000/debugger-ui/](http://localhost:19000/debugger-ui/) in your system. If there are many tabs with the same URL, close all except anyone.

![React Debug Portal](/learn/assets/react-debug-portal.png)

9. To view React Native component tree, execute `react-devtools` in terminal. Then reload the app in mobile from the developer menu.

![React Dev Tools](/learn/assets/react-dev-tools.png)

## Additional Resources

[https://docs.expo.dev/workflow/debugging/](https://docs.expo.dev/workflow/debugging/)
