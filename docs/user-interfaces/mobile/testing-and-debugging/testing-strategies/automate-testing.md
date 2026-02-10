---
last_update: { author: "Priyanka Bhadri" }
---


# Automated Testing 

Automated testing is essential for building reliable, consistent, and
high‑quality mobile applications. WaveMaker's React Native platform
provides a comprehensive automation testing framework that allows
developers to simulate real user interactions and validate app behavior
across platforms, devices, and workflows.

WaveMaker's automation testing framework supports:

-   Functional and end‑to‑end workflows
-   UI component interaction testing
-   Regression validation
-   Cross‑platform and device testing
-   Continuous integration pipelines

Automation tests can be executed locally or in the cloud using platforms
like BrowserStack.

------------------------------------------------------------------------

## Core Automation Framework

WaveMaker leverages the following tools:

-   **Appium** -- Cross‑platform mobile automation tool
-   **WebDriverIO (WDIO)** -- Test framework and runner
-   **Mocha** -- JavaScript test runner
-   **Allure Reports** -- Test reporting and visualization
-   **BrowserStack** -- Cloud device testing platform
-   **Jenkins** -- CI/CD automation server

------------------------------------------------------------------------

## Setting Up Automation Testing

### Prerequisites

-   Node.js and npm
-   Java JDK 11 or higher
-   Android Studio with SDK tools
-   Appium CLI
-   WebDriverIO CLI

### Installing CLI Tools

``` bash
npm install -g appium
npm install -g @wdio/cli
```

Initialize your test framework:

``` bash
npx wdio config
```

------------------------------------------------------------------------

## Test Project Structure

Typical structure:

-   `/test/specs/` -- Test scripts
-   `wdio.conf.js` -- Configuration file

### Example Test

``` javascript
describe('App Launch', () => {
  it('should display welcome screen', async () => {
    await expect($('~welcome')).toBeDisplayed();
  });
});
```

------------------------------------------------------------------------

## WebDriverIO Configuration Example

``` javascript
exports.config = {
  runner: 'local',
  path: '/wd/hub',
  specs: ['./test/specs/**/*.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Android Emulator',
    'appium:platformVersion': '11.0',
    'appium:app': '/path/to/app.apk',
    'appium:automationName': 'UiAutomator2'
  }],
  framework: 'mocha',
  reporters: ['spec'],
  services: ['appium'],
};
```

------------------------------------------------------------------------

## Test Execution

### Local Execution

1.  Start emulator or simulator
2.  Start Appium server
3.  Run:

``` bash
npx wdio run wdio.conf.js
```

------------------------------------------------------------------------

### Cloud Execution

Cloud testing enables:

-   Parallel execution
-   Real device testing
-   Wider OS coverage

------------------------------------------------------------------------

## CI/CD Integration

Typical pipeline:

1.  Export project from WaveMaker
2.  Build APK/IPA
3.  Upload artifacts
4.  Execute automation tests
5.  Generate reports

------------------------------------------------------------------------

## Reporting

Allure Reports provide:

-   Execution summaries
-   Logs and screenshots
-   Failure diagnostics

------------------------------------------------------------------------

## Best Practices

-   Use stable selectors (`testID`)
-   Focus on critical workflows
-   Integrate testing into CI/CD
-   Maintain reusable test components

------------------------------------------------------------------------

## Summary

WaveMaker React Native automation testing enables scalable, reliable
validation of mobile applications using Appium, WebDriverIO, Mocha,
Allure Reports, BrowserStack, and Jenkins.
