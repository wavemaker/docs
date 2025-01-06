---
title: "Debugging - React Native Application"
id: "debugging-in-react-native"
sidebar_label: "Debugging - React Native Application"
---

---

An application debugging process includes identifying, analyzing, and resolving issues or defects (bugs) within a software application. It involves systematically testing, investigating, and correcting errors that prevent the application from functioning as expected. Debugging ensures the application runs smoothly and performs correctly under different conditions.

The application developed in our studio can be debugged using three platforms ways.
- Web Preview
- Expo Go and React Devtool
- WavePulse

## Web Preview

Once a React Native application is developed, you can click the **Preview** icon to view how the application User Interface(UI) is rendering and how correctly the functionalities are working.

After the Preview screen is launched, remove the Toolbar and right click on the screen and select **Inspect**.

![Inspect Window](/learn/assets/inspect-window.png)

## Expo Go and React Devtool

When developing a React Native application, Expo Go serves as the environment where the application can be run on your device. React DevTools provides in-depth debugging capabilities to inspect and optimize app's components. Using Expo Go and React Devtools the process of development and debugging can be streamlined for React Native applications.

### Expo Go

A React Native application is exported as React native zip to run on expo go.

1. Export the project as react native zip.
2. Install node modules by running `npm i` given that the node is installed.
3. Start the application by running the `npx expo start` command in the root of the project. This launches the application in the emulator, simulator, or web browser, or you can scan the displayed QR code to open it in the Expo Go application on a mobile device.

### React Devtool

1. Run `npx react-devtools` to open the devtools application and to connect the expo application
2. Open or reload the application in the emulator or simulator.
3. Enter `M`, to navigate to the dev menu > click Show Element Inspector > Inspect. This displays the display components tree in react-devtools.

## WavePulse

WavePulse, a feature in WaveMaker, offers real-time diagnostics for applications. It streamlines debugging by enabling you to inspect APK or IPA files without the need of connecting a mobile device to the system, making remote debugging efficient.

To understand more about WavePulse, see [WavePulse - To Inspect and Debug APK/IPA File](/learn/react-native/wavepulse/).

## Areas of Debugging in Application

### UI Elements

The application's UI elements are rendered as a component tree starting from the root of the application. We can inspect these elements to verify that they are rendered correctly, including checking the applied styles and props.

For example, if in the Web Preview, the app search bar border color is applied as green instead of red.
