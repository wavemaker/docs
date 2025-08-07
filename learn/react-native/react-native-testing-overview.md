---
title: "Testing Overview"
sidebar_label: "Testing Overview"
id: "react-native-testing-overview"
---
---

WaveMaker mobile apps are built using React Native. Our testing strategy includes both manual and automated approaches to ensure quality, performance, and compatibility across devices and platforms.

### Testing Types

| Type                                                                       | Description                                                                                                             |
|----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [Manual Testing](/learn/react-native/react-native-manual-testing-overview) | End-to-end testing of features and widgets, services conducted during development, bug fixes, and UI/UX validations.    |
| [Automation Testing](/learn/react-native/react-native-automation-testing)  | Automated functional and UI testing using WebdriverIO, Mocha, and TypeScript.                                           |
| [Visual Testing](/learn/react-native/react-native-automation-testing)      | Automated verification of visual elements for consistency and design validation.                                        |
| [Accessibility Testing](/learn/react-native/react-native-accessibility-testing) | Manual & Automated testing using BrowserStack and local tools to ensure WCAG compliance and support for screen readers. |
| [Performance Testing](/learn/react-native/react-native-performance-testing) | Manual & Automated Performance checks for app responsiveness and loading behavior and other important metrics           |
| [Platform & Device Compatibility](/learn/react-native/device-compatibility) | Testing across iOS/Android, multiple screen sizes, OS versions using emulators and BrowserStack.                        |

### Tools & Infrastructure

| Category             | Tools/Platforms                                             |
|----------------------|-------------------------------------------------------------|
| Device Testing       |[Physical devices](/learn/react-native/react-native-device-compatibility#physical-devices-manual-testing), [Android/iOS Studio emulators](https://developer.android.com/studio/run/emulator), [BrowserStack](/learn/react-native/react-native-device-compatibility#automation-testing-devices-via-browserstack) |
| Automation Framework | Appium + WebdriverIO, TypeScript, Mocha                    |
| CI/CD                | Jenkins                                                     |
| Reporting            | Allure Report  |
| Accessibility        | Screen Readers, Manual checks, BrowserStack                 |
| Visual testing       | Pixel Match |
| Performance          | Apptim, BrowserStack, Android Profiler |
|Test Management | BrowserStack |
