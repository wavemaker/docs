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
| Chrome Devtool | Yes | No | No | No |
| React Devtool | Yes | Yes | Yes | |
| React Native Devtool | No | Yes | Yes |  |
| WavePulse | Yes | No | Yes | Yes |

## Web DevTools


### Web Preview

- Once a React Native application is developed, click the **Preview** icon to view how the application User Interface(UI) is rendering and how correctly the functionalities are working.
- After the Preview screen is launched, remove the Toolbar.
- Right click on the screen and select **Inspect**.

![Inspect Window](/learn/assets/inspect-window.png)

## React DevTools

When developing a React Native application, React DevTools provides in-depth debugging capabilities to inspect and optimize app's components. By using React DevTools the process of development and debugging can be streamlined for React Native applications.

### Web Preview

- Go to [Chrome Web Store](https://chromewebstore.google.com/category/extensions) to use React DevTools for Web Preview in Chrome browser.
- Search for React Developer Tools.
- Click Add to Chrome, this adds the extension to your Chrome browser. To know how to add the extension in other browsers, see [React Developer Tools - Browser Extension](https://react.dev/learn/react-developer-tools#browser-extension).

### Expo Go

- Export and download React Native Zip of the aplication from studio.
- Go to project directory in your terminal.
- To run your application in Expo go/ Expo Development Build, see [Expo - Set up your environment](https://docs.expo.dev/get-started/set-up-your-environment/).
- Open a new terminal window and run `npx react-devtools` to open the React DevTools application.

:::note
If the application is not connected to React DevTools automatically, try reloading the application by pressing `r` where expo server is running.
:::

## React Native DevTools


### Expo Go



## WavePulse

WavePulse, a feature in WaveMaker, offers real-time diagnostics for applications. It streamlines debugging by enabling you to inspect APK or IPA files without the need of connecting a mobile device to the system, making remote debugging efficient.

To understand more about WavePulse, see [WavePulse - To Inspect and Debug APK/IPA File](/learn/react-native/wavepulse/).

### Web Preview

- Open [WavePulse Client](https://apps.wavemakeronline.com/wavepulse/client/c1736304109744/elements).
- Select **Connect to Web Preview** to use Web Preview for debugging.
- Copy the below code from WavePulse and execute it in developer Console of the application up for Web Preview. This launches the debugging session in WavePulse.

### Expo Development Build

- Export and download React Native Zip of the aplication from studio.
- Go to project directory in your terminal.
- To install and run your application in Expo Development Build, see [Expo - Set up your environment](https://docs.expo.dev/get-started/set-up-your-environment/).
- Launch WavePulse client in browser.
- Enter the application ID.
- Scan the QR code. You can also copy the link address to open in the browser.

:::note
Ensure that the application is closed in the device before launching it through WavePulse.
:::

### Native Build (APK/IPA)

- Build APK/IPA of your application and install it in the device. To know more, see [WavePulse - To Inspect and Debug APK/IPA File](/learn/react-native/wavepulse/).
.
- Launch WavePulse in browser.
- Enter application ID.
- Scan the QR code. You can also copy the link address to open in the browser.

:::note
Ensure that the application is closed in the device before launching it through WavePulse.
:::
