---
title: "Introduction to React Native Studio"
id: "react-native-overview"
sidebar_label: "Welcome"
---
---

WaveMaker Studio for React Native allows developers to build native mobile apps for iOS and Android using web development skills. It simplifies the development process with a visual studio, reusable components, and a fully exportable codebase.

This documentation introduces the key concepts, tools, and workflow for developing React Native applications using WaveMaker.

## Architecture

React Native is a mobile app framework. It is based on ReactJS principles (Virtual DOM). You can define app UI using the React Native markup and extensions in JavaScript. React Native will render UI using native UI controls similar to native apps based on the UI definition in runtime.

React Native bridge amends native UI based on the response Virtual DOM from JavaScript—consequently, not allowing you to use **CSS and HTML in React Native apps**. You must define JSX Markup, styles, and logic in JavaScript.

![React Native Architecture](/learn/assets/react-native-architecture.png)


### What You Can Do with WaveMaker React Native?

**1. Web Skills for Developing Mobile apps**: Develop native mobile applications using familiar web technologies. You can build and deploy apps without learning native iOS or Android programming.

**2. Prefab Architecture**: Prefabs are reusable UI+logic components. Once created and connected to backend APIs, prefabs can be reused across multiple apps, promoting consistency and reducing redundancy.

**3. Performance Features**: WaveMaker integrates performance optimizations provided by React Native:

- Hermes JavaScript engine
- Optimized list rendering
- Efficient state management

These ensure fast load times and smooth user experience. 

**4. Open and Customizable Architecture**

- Exportable, standards-compliant React Native code
- Support for third-party React Native libraries and Expo plugins
- No vendor lock-in

### Development and Testing Tools

- **Automated Testing**: WaveMaker supports automated UI testing through Appium.
- **Debugging**: Use Flipper for real-time debugging of layout, logs, performance, and plugins.
- **App Deployment**: WaveMaker exports a React Native project zip that can be processed by AppChef to generate APKs (Android) or IPAs (iOS) for distribution.

## Mobile App Development Workflow

> React Native is an open-source framework developed by Meta. It uses JavaScript and runs in a native environment using engines like Hermes or JSC. The framework allows building native UI components through JavaScript.

### WaveMaker Integration

- Markup: [WaveMaker markup](/learn/app-development/ui-design/page-artefacts#page-markup) is converted to React Native markup during build. Some widgets and properties may not be supported. See [Supported Widgets](/learn/react-native/supported-widgets) to know more. 
- Variables: Variables act like a glue between the frontend UI and the backend services, integrating data and services with the Widgets. Learn more about the supporting [React Native Variables here](/learn/react-native/supported-variables).
- Script: JavaScript event handling is supported, but web-specific APIs like jQuery or HTML DOM manipulation are not.
- Styles: React Native does not support traditional CSS. Styles must be written in JavaScript. WaveMaker allows partial CSS definitions for development.
- Themes: Theming support is integrated into the platform.
- Prefabs: Prefabs must separate styles for React Native using the delimiter /*REACT_NATIVE_STYLES*/. Unsupported widgets are ignored during build.

## Things to be noted

In WaveMaker, apps are developed with WaveMaker Markup, Variables, JavaScript, and Styles defined in CSS. Let's see how it works for React Native app development.



:::note
React native has started supporting customization of data using Custom Formatter from [Release 11.3](/learn/wavemaker-release-notes/v11-3-0). For more information, see [Custom Formatter](/learn/app-development/variables/custom-formatter).
:::

### Script

All UI and [Variable event callbacks](/learn/app-development/variables/accessing-elements-via-javascript) work as they do, but web browser APIs are not supported. HTML DOM amending JS libraries (jQuery etc.) does not work when the app is installed on the phone. In addition, adding a JS library is not supported.

### Styles

In WaveMaker, styles are typically defined in CSS but React Native does not support CSS. Therefore, you define React Native styles in JavaScript.

We included partial support for CSS usage so that WaveMaker developers can define styles in CSS. Do not add CSS classes copied from the web preview HTML DOM tree. For more information, see [React Native Style API Documentation](https://www.wavemakeronline.com/app-runtime/latest/rn/style-docs/widgets/basic/anchor/).

### Theme

React Native supports Themes. For more information,learn about how to [generate themes](/learn/react-native/theme).

### Prefabs

A Prefab can be used in a web app, a Cordova-based mobile app, or a React Native-based mobile app. Follow the guidelines below for developing a Prefab so that the prefab renders properly in the web app, Cordova, and React Native mobile apps.

- The stylesheet of a prefab should be divided into two parts by the line:

``` /*REACT_NATIVE_STYLES*/ ```

- After the above line, you can place styles for React Native environment.
- Adding a JS file is not supported.
- [Widgets that are not supported](/learn/react-native/supported-widgets) by WaveMaker React Native runtime are discarded.

## See Also

[React JS](https://reactjs.org/)  
[React Native](https://reactnative.dev/)    