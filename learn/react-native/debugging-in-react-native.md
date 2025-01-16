---
title: "Debugging - React Native Application"
id: "debugging-in-react-native"
sidebar_label: "Debugging - React Native Application"
---
---

An application debugging process includes identifying, analyzing, and resolving issues or defects (bugs) within a software application. It involves systematically testing, investigating, and correcting errors that prevent the application from functioning as expected. Debugging ensures the application runs smoothly and performs correctly under different conditions.

The application developed in our studio can be debugged using three tools.

- Browser DevTools
- React DevTools
- React Native DevTools
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

## Debugging Windows

For debugging, the aspects that are inspected and fixed in any application varies from each debugging tool. Here is the list of debugging windows, each tailored to specific aspects of web development.

- **Console**: View log messages, errors, or debugging information from JavaScript. Execute JavaScript commands directly. View stack traces for errors and warnings.
- **Elements**: Inspect and edit HTML and CSS in real-time. Modify and test styles, margin, padding, border, and size details.
- **Sources**: Debug JavaScript code by setting breakpoints. View and step through code execution line by line. Use Watch expressions and Call Stack to trace program flow.
- **Network**: Monitor and analyze HTTP requests, responses, and timing. View resource load order and performance metrics. Inspect request headers, response data, and cookies.
- **Performance**: Record and analyze page performance. View timelines for CPU usage, scripting, rendering, and layout tasks. Identify bottlenecks that slow down the application.
- **Memory**: Detect memory leaks and optimize memory usage. View heap snapshots and analyze memory distribution. Monitor garbage collection.
- **Apllication**: Inspect browser storage: LocalStorage, SessionStorage, IndexedDB, Cookies. Debug Progressive Web App (PWA) features like Service Workers and Cache. Manage web manifest and view push notification data.
- **Security**: View details of HTTPS/SSL certificates. Identify security issues like mixed content warnings.
- **Lighthouse**: Run audits for performance, accessibility, SEO, and best practices.
Get actionable improvement suggestions.
- **Components**: Displays the hierarchy of React components in the application. Allows inspection and modification of props, state, and context in real time.
- **Profiler**: Measures component render times and identifies performance bottlenecks. Helps optimize re-renders and resource usage.

## About Tools

### Browser DevTools

Browser DevTools are built-in tools in web browsers like Chrome and Firefox that help developers debug, edit, and analyze web applications directly in the browser. 

#### Supported Platform

- Browsers

#### Features Available

The features like inspecting elements, styles, monitoring network activity, profiling performance, and debugging JavaScript are provided in the Browser DevTools.

#### Limitations





### React DevTools

When developing a React Native application, React DevTools provides in-depth debugging capabilities to inspect and optimize app's components. By using React DevTools the process of development and debugging can be streamlined for React Native applications.

#### Where to Run Application

- Web Preview
- Expo Go/ Development build
- Debug APK

#### Features Available

- Components
- Profiler

### React Native DevTools

React Native DevTools is an enhanced debugging tool for React Native applications.

:::note
Available for applications using Expo 52 or higher.
:::

#### Where to use

- Expo Go/ Development Build
- Debug APK/IPA

#### Features Available

- Console
- Sources
- Memory
- Components
- Profiler
- Network


### WavePulse

WavePulse is a tool offered in WaveMaker, designed to provide real-time diagnostics for applications. It enhances the process of debugging by allowing you to inspect the APK or IPA file of an application with out requiring mobile phone to be connected to system. Remote debugging is possible

#### Where to use

- Browser
- Expo Go/ Development Build
- Debug APK/IPA
- Release APK/IPA

#### Features Available

- Console
- Storage
- Elements
- Network
- Timeline
- Storage
- Info


## Debugging

### Using Browser DevTools

1. Once a React Native application is developed, click the **Preview** icon to view how the application User Interface(UI) is rendering and how correctly the functionalities are working.
2. After the Preview screen is launched, remove the Toolbar.
3. Right click on the screen and select **Inspect**.

<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px" src="https://embed.app.guidde.com/playbooks/5pHCN4nBMG5emn6N6KwoY3" title="Web Browser Preview" frameborder="0" allowfullscreen ></iframe>

#### Debugging scenarios



### Using React DevTools

#### Web Preview

#### Expo

#### Debugging Scenarios




























































