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

## UI Elements

The application's UI elements are rendered as a component tree starting from the root of the application. These elements can be inspected to verify if they are rendered correctly, including the applied styles and properties.

### Using Web Preview

For example, if in the Web Preview, the app search bar border color is applied as green instead of red.

1. Click on **Inspect** icon and navigate to the components tree. Component tree will give the list of elements rendered.
2. Go to **WmSearch** > **View** screen displays the props, hooks, styles applied to the selected element. Style trace shows all styles applied to the element (default, theme, custom class based styles).
3. Customize or modify the styles for the UI to display as expected.
4. Copy the styles and click on the root element to get the name of the element.
5. Now go to Markup to add class to the element and apply the styles accordingly. For example,

```css
collections_search.app-search {
// custom_styles here
}
```

### Using Expo Go and React Devtools

### Using WavePulse


## Network Calls

### Using Web Preview

1. Open the inspector in the Web browser and go to the Network tab. 
2. In Network tab, filter the network list, Preserve log. You can also simulate the network to high speed, low speed, or offline, using throttling options. List of network calls and Detailed information of selected network is displayed.

## JS Sources

When running applications in the browser, we can inspect the js codebase and pause the execution at the required line, and can add logs as shown below, and hovering over the current execution will give the current value at that time. It will help to track the current status of the values / variables.

### Using Web Preview

1. If we are adding any brakepoint in the code execution (clicking on that line). Code execution will be paused when it reaches that line of execution.
2. To open the required file in the sources cmd + p in macbook and ctrl + p in windows, linux
3. When code execution reached to the line / function, it can show the current values at the debugged state.

## Performance/Profiling

Performance of the application can be analyzed by the time taken to load the components and render on screen, and number of times components re-rendered and caching optimisations. These can be tracked as below.

### Using Web Preview

## App Logs/Device Logs

In development mode, we can add console logs to track and warning and error logs also will be displayed while running the debug application. Generally there will be 2 types of logs (JS logs, and Native logs). 

Js logs can be tracked in the browser. Native logs can be tracked in the Android studio in case of Android and Console window of the desktop application in iOS.

:::note

To view JS logs, it is necessary to enable JS logs in the project in studio.

:::

### Using Web Preview

Logs added inside the sources / scripts and runtime logs will be displayed in the console tab of the inspector.