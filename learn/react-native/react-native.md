---
title: "Welcome to React Native Studio"
id: ""
sidebar_label: "Welcome"
---
---

React Native is a cross-platform framework for developing native mobile applications, including iOS and Android. The framework is open-sourced and is supported by a developer community, hosting a number of React Native plugins that you can use. For example, [Expo go](https://expo.dev/client). 

React Native runs on a native environment using a JavaScript engine, making cross-platform mobile applications truly native. 

To develop fully Native apps, you do not need to learn additional programming skills for iOS or Android or maintain two different codebases. React Native provides platform-specific versions of components such that a single codebase can be shared across platforms. 

## Architecture

React Native is a mobile app framework from Facebook. It is based on ReactJS principles (Virtual DOM). You can define app UI using the React Native markup and extensions in JavaScript. React Native will render UI using native UI controls similar to native apps based on the UI definition in runtime.

### WaveMaker Hybrid Mobile 

When developing Hybrid mobile apps in WaveMaker,  Cordova apps display HTML-based UI using a browser component. So, you can use HTML and CSS along with JavaScript in Cordova apps. 

### WaveMaker React Native

React Native apps run JavaScript in JavaScript runtime, including JSC and Hermes. React Native bridge amends native UI based on the response Virtual DOM from JavaScript—consequently, not allowing you to use **CSS and HTML in React Native apps**. You must define JSX Markup, styles, and logic in JavaScript for React Native apps.

## Things to be noted

In WaveMaker, apps are developed with WaveMaker Markup, Variables, JavaScript, and Styles defined in CSS. Let's see how it works for t Native app development.

### Markup

During the build, the WaveMaker platform convert the [WaveMaker markup](/learn/app-development/ui-design/page-artefacts#page-markup) to React Native markup. But, not all Widgets and their properties are supported. See [Supported Widgets](/learn/react-native/supported-widgets) to know more. 

### Variables

Variable acts like a glue between the frontend UI and the backend services, integrating data and services with the Widgets. Learn more about the supporting [React Native Variables here](/learn/react-native/supported-variables).

### Script

All UI and [Variable event callbacks](/learn/app-development/variables/accessing-elements-via-javascript) work as they do, but web browser APIs are not supported. HTML DOM amending JS libraries (jQuery etc.) does not work when the app is installed on the phone. In addition, adding a JS library is not supported.

### Styles

In WaveMaker, styles are typically defined in CSS but React Native does not support CSS. Therefore, you define React Native styles in JavaScript.

We included partial support for CSS usage so that WaveMaker developers can define styles in CSS. Do not add CSS classes copied from the web preview HTML DOM tree. For more information, see [found here](https://www.wavemakeronline.com/app-runtime/latest/rn/style-docs/widgets/basic/anchor/).

### Theme

Themes are supported. Click here to learn about how to generate themes.

### Prefabs

A Prefab can be used in a web app, a Cordova-based mobile app, or a React Native-based mobile app. Follow the guidelines below for developing a Prefab so that the prefab renders properly in the web app, Cordova, and React Native mobile apps.

- The stylesheet of a prefab should be divided into two parts by the line:

``` /*REACT_NATIVE_STYLES*/ ```

- After the above line, you can place styles for React Native environment.
- Adding a JS file is not supported.
- Widgets that are not supported by WaveMaker React Native runtime are discarded.

## Additional Resources

[React JS](https://reactjs.org/)  
[React Native](https://reactnative.dev/)    