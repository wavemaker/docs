---
title: "Introduction to React Native Studio"
id: "react-native-overview"
sidebar_label: "Welcome"
---
---


WaveMaker Studio for React Native allows developers to build native mobile apps for iOS and Android using web development skills. It simplifies the development process with a visual studio, reusable components, and a fully exportable codebase.

This documentation introduces the key concepts, tools, and workflow for developing React Native applications using WaveMaker.

## With WaveMaker React Native, You Can

**1. Use Web Skills to Develop Mobile Apps**  
Develop native mobile applications using familiar web technologies like JavaScript. You can build and deploy apps without needing to learn native iOS or Android programming.

**2. Reuse Components with Prefab Architecture**  
Prefabs are reusable UI and logic components. Once created and connected to backend APIs, they can be reused across multiple apps — promoting consistency and reducing redundancy.

**3. Work with an Open and Customizable Architecture**  
- Export clean, standards-compliant React Native code  
- Integrate third-party React Native libraries and Expo plugins  
- Avoid vendor lock-in with fully portable projects

**4. Development and Testing Tools**

- **Automated Testing**: WaveMaker supports automated UI testing through Appium.
- **Debugging**: Use Flipper for real-time debugging of layout, logs, performance, and plugins.
- **App Deployment**: WaveMaker exports a React Native project zip that can be processed by AppChef to generate APKs (Android) or IPAs (iOS) for distribution.

## Architecture Overview

A streamlined build pipeline to convert your app from visual development to an installable native app.

![](/learn/assets/react-native-architecture.png)

#### Development

- **WaveMaker Project** *(design in WaveMaker Studio)*: Build your app using WaveMaker Studio — no native code needed.
- **Code Generation**: WaveMaker generates a standard Expo project, not a custom runtime.
- **Expo Project**: The app runs using Expo’s React Native environment, ensuring compatibility and ease of testing.

#### Build and Deployment

- **Build for Stores**: Using WaveMaker CLI or AppChef, convert the Expo project into installable .ipa (iOS) files or .apk (Android).

## In WaveMaker React Native Studio

### Markup and Variables

- **Markup**: [WaveMaker markup](/learn/app-development/ui-design/page-artefacts#page-markup) is converted to React Native markup during build. Some widgets and properties may not be supported. See [Supported Widgets](/learn/react-native/supported-widgets) to know more.
- **Variables**: Variables act as a bridge between the frontend UI and backend services, integrating data and services with the widgets. Learn more about the supporting [React Native Variables here](/learn/react-native/supported-variables).

### Things to Note

In WaveMaker, apps are developed with WaveMaker Markup, Variables, JavaScript, and Styles defined in CSS. However, React Native development has specific rules:

- **Script**: All UI and [Variable event callbacks](/learn/app-development/variables/accessing-elements-via-javascript) work as expected, but web browser APIs are not supported. HTML DOM amending JS libraries (e.g., jQuery) do not work on mobile apps. Additionally, adding external JS libraries is not supported.

- **Styles**: In WaveMaker, styles are typically defined in CSS, but React Native does not support CSS. Instead, React Native styles must be defined using JavaScript. WaveMaker allows partial CSS usage for development. For more information, refer to the [React Native Style API Documentation](https://www.wavemakeronline.com/app-runtime/latest/rn/style-docs/widgets/basic/anchor/). Be sure not to add CSS classes copied from the web preview HTML DOM tree.

- **Themes**: React Native supports Themes. Learn more about how to [generate themes](/learn/react-native/theme).

### Prefabs

A **Prefab** can be used in a web app, a Cordova-based mobile app, or a React Native-based mobile app. To ensure that a Prefab renders properly across platforms, follow these guidelines:

- The stylesheet of a prefab should be divided into two parts by the line:


- After the line above, you can place styles specific to the React Native environment.
- Adding a JavaScript file is not supported.
- [Widgets that are not supported](/learn/react-native/supported-widgets) by the WaveMaker React Native runtime will be discarded.

By following these guidelines, you can create Prefabs that are compatible with React Native, Cordova, and web platforms, ensuring maximum reusability and consistency.

### Note on Custom Formatter

React Native has started supporting customization of data using **Custom Formatter** from [Release 11.3](/learn/wavemaker-release-notes/v11-3-0). For more information, refer to [Custom Formatter](/learn/app-development/variables/custom-formatter).

## See Also

[React JS](https://reactjs.org/)  
[React Native](https://reactnative.dev/)    