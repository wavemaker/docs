---
title: "Debugging - React Native Application"
id: "debugging-in-react-native"
sidebar_label: "Debugging - React Native Application"
---
---

An application debugging process includes identifying, analyzing, and resolving issues or defects (bugs) within a software application. It involves systematically testing, investigating, and correcting errors that prevent the application from functioning as expected. Debugging ensures the application runs smoothly and performs correctly under different conditions.

The application developed in our studio can be debugged using three tools.

- Web DevTools
- React DevTools
- WavePulse

|  | Web Preview | Expo Go (Mobile Device) | Expo Development Build | Native Build (APK/IPA) |
| ------ | ----- | ----- | ----- | ----- |
| Chrome DevTools | Yes | No | No | No |
| React DevTools | Yes | Yes | Yes | |
| React Native DevTools | No | Yes | Yes |  |
| WavePulse | Yes | No | Yes | Yes |

The application that is to be debugged can run in the following ways.

- **Web Preview**: In studio, the application can be previewed on web browser at any point of development.
- **Expo Go**: It is a mobile application to preview and test React Native projects on your device in real time without needing a separate build process.
- **Expo Development Build**: It is a build of your React Native app that includes native code, enabling you to test features not supported by Expo Go.
- **Native Build (APK/IPA)**: A native build (APK/IPA) is a platform-specific application package that can be directly installed and run on mobile devices.

## Web DevTools

### Web Preview

1. Once a React Native application is developed, click the **Preview** icon to view how the application User Interface(UI) is rendering and how correctly the functionalities are working.
2. After the Preview screen is launched, remove the Toolbar.
3. Right click on the screen and select **Inspect**.

![Inspect Window](/learn/assets/inspect-window.png)

## React DevTools

When developing a React Native application, React DevTools provides in-depth debugging capabilities to inspect and optimize app's components. By using React DevTools the process of development and debugging can be streamlined for React Native applications.

### Web Preview

1. Go to [Chrome Web Store](https://chromewebstore.google.com/category/extensions) to use React DevTools for Web Preview in Chrome browser.
2. Search for React Developer Tools.
3. Click Add to Chrome, this adds the extension to your Chrome browser. To know how to add the extension in other browsers, see [React Developer Tools - Browser Extension](https://react.dev/learn/react-developer-tools#browser-extension).

### Expo Go

1. Export and download React Native Zip of the aplication from studio.
2. Go to project directory in your terminal.
3. To run your application in Expo go/ Expo Development Build, see [Expo - Set up your environment](https://docs.expo.dev/get-started/set-up-your-environment/).
4. Open a new terminal window and run `npx react-devtools` to open the React DevTools application.

:::note
If the application is not connected to React DevTools automatically, try reloading the application by pressing `r` where expo server is running.
:::

## React Native DevTools


### Expo Go/ Expo Development Build

1. Export and download React Native Zip of the aplication from studio.
2. Go to project directory in your terminal.
3. To run your application in Expo go/ Expo Development Build, see [Expo - Set up your environment](https://docs.expo.dev/get-started/set-up-your-environment/).
4. In the terminal where Expo server is running, press `j` to launch the React Native DevTools.

## WavePulse

WavePulse, a feature in WaveMaker, offers real-time diagnostics for applications. It streamlines debugging by enabling you to inspect APK or IPA files without the need of connecting a mobile device to the system, making remote debugging efficient.

To understand more about WavePulse, see [WavePulse - To Inspect and Debug APK/IPA File](/learn/react-native/wavepulse/).

### Web Preview

1. Open [WavePulse Client](https://apps.wavemakeronline.com/wavepulse/client/c1736304109744/elements).
2. Select **Connect to Web Preview** to use Web Preview for debugging.
3. Copy the below code from WavePulse and execute it in developer Console of the application up for Web Preview. This launches the debugging session in WavePulse.

### Expo Development Build

1. Export and download React Native Zip of the aplication from studio.
2. Go to project directory in your terminal.
3. To install and run your application in Expo Development Build, see [Expo - Set up your environment](https://docs.expo.dev/get-started/set-up-your-environment/).
4. Launch WavePulse client in browser.
5. Enter the application ID.
6. Scan the QR code. You can also copy the link address to open in the browser.

:::note
Ensure that the application is closed in the device before launching it through WavePulse.
:::

### Native Build (APK/IPA)

1. Build APK/IPA of your application and install it in the device. To know more, see [WavePulse - To Inspect and Debug APK/IPA File](/learn/react-native/wavepulse/).
2. Launch WavePulse in browser.
3. Enter application ID.
4. Scan the QR code. You can also copy the link address to open in the browser.

:::note
Ensure that the application is closed in the device before launching it through WavePulse.
:::
