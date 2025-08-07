---
title: "Automation Testing"
sidebar_label: "Automation Testing"
id: "react-native-automation-testing"
---
---

## Automation Architecture - Testing Framework

This document outlines the complete automation framework designed for testing React Native mobile applications, leveraging tools such as Appium, WebDriverIO, Mocha, Jenkins, BrowserStack, and Allure Reports.

## Architecture

![Appium_Architecture](/learn/assets/appium-automation-architecture.png)

## Test Suite Setup

The process begins with a test suite that includes all test cases written in JavaScript or TypeScript. To know more about how to setup a test suite with the following components, Please refer to [Automation Testing in WaveMaker](/learn/react-native/automate-reactnative-apps).

### Components

- **Mocha**: Test runner for managing and executing test cases.
- **WebDriverIO (WDIO)**: Test configuration and execution tool.
- **Appium**: Test automation tool for Android and iOS apps.

---

## Test Execution

Tests can be executed in two environments:

### A. Local Execution

- APK/IPA paths are provided through a `.env` file.
- The app is launched on local Android/iOS emulators or simulators.
- Tests get executed in the above launched emulators.
- Test results are generated using [Allure Reports](https://allurereport.org/).

### B. Cloud Execution

- Initiated automatically through Jenkins pipelines for continuous integration.

---

## Jenkins CI/CD Workflow (Cloud Execution)

### Steps

1. **WMStudio**
    - Downloads the zipped React Native project.

2. **AppChef**
    - Builds the APK (Android) and IPA (iOS) files.

3. **Amazon S3**
    - Stores the built APK/IPA files and test reports.

4. **BrowserStack**
    - Executes tests on real devices in the cloud.

5. **Allure Report**
    - Generates detailed reports post-execution.

---

## Reporting

- **Allure Report** is used to visualize:
  - Test status (pass/fail/skip)
    - Execution logs
    - Screenshots of test failures

---

## Visual Testing

We also execute Visual tests using Pixel Match node library in WebDriverIO framework itself to validate layout consistency and UX.
It compares the baseline screenshots with the actual screenshots

---

### Test Coverage

- Functional Scenarios
- Widget UI interactions
- Services Integration testing
- Regressions and critical flows
- Sanity testing
