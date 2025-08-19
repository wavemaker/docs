---
id: "automate-reactnative-apps"
title: "Automate Testing of WaveMaker Mobile Apps Using Appium"
sidebar_label: "Automate Testing - Appium"
---
---

Appium is an open-source tool for automating testing of native, mobile web, and hybrid applications on iOS mobile, Android mobile, and Windows desktop platforms.

WaveMaker mobile applications are hybrid mobile applications and can be easily tested using Appium.  This document outlines the steps to configure mobile automation testing for React Native applications using Appium, Android Studio, and WebdriverIO.

## Prerequisites

Ensure the following tools are installed and properly configured on your system before proceeding.

### 1 Node.js and npm

Install Node.js (v16 or higher is recommended), which comes with npm.

```text
node -v
npm -v
```

Download: [https://nodejs.org/](https://www.google.com/url?sa=E&source=gmail&q=https://nodejs.org/)



### 2 Java JDK

Install Java Development Kit (JDK) -- version 11 or above.

```text
java -version
```

Download: [https://www.oracle.com/java/technologies/javase-downloads.html](https://www.google.com/url?sa=E&source=gmail&q=https://www.oracle.com/java/technologies/javase-downloads.html)



### 3 Android Studio

Install Android Studio to get the Android SDK and emulator tools.

* Ensure ANDROID\_HOME environment variable is set.
* Add the following paths to your environment variables:


```text

export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Download: [https://developer.android.com/studio](https://www.google.com/url?sa=E&source=gmail&q=https://developer.android.com/studio)

Note: Ensure you install the required SDK Platform Tools and emulator images from SDK Manager.



### 4 Appium

Install Appium globally using npm

``` text
npm install -g appium
```

Verify installation

```text
appium -v
```

You can also use the Appium Desktop for GUI interaction : Download: [https://github.com/appium/appium-desktop](https://www.google.com/url?sa=E&source=gmail&q=https://github.com/appium/appium-desktop)

### 5 WebdriverIO CLI

Install WebdriverIO CLI globally

```text
npm install -g @wdio/cli
```

Create your project and run the configuration wizard

```text
npx wdio config
```

During setup, it will ask to choose options for multiple parameters.
Here are some of the important parameters you have to choose:

* Test Framework: Mocha or Jasmine
* Reporter: spec
* Services: appium
* Path: /wd/hub
* Test Framework: Mocha or Jasmine
* Reporter: spec
* Services: appium
* Path: /wd/hub



## Project Setup

1. Initialize your test project (if not already)

```text

npm init -y
```

2. Install required dependencies

```text
npm install @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/spec-reporter @wdio/appium-service appium --save-dev
```

3. Add test specs

Create your test file in `./test/specs/example.e2e.js`

```javascript
describe('React Native App Launch', () => {
    it('should launch the app and show the welcome screen', async () => {
        await expect($('~welcome')).toBeDisplayed();
    });
});
```

## Sample WebdriverIO Configuration

Below is a sample `wdio.conf.js` for Android:

```javascript
exports.config = {
    runner: 'local',
    path: '/wd/hub',
    specs: ['./test/specs/**/*.js'],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Android Emulator',
        'appium:platformVersion': '11.0',
        'appium:app': '/path/to/your/app.apk',
        'appium:automationName': 'UiAutomator2'
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec'],
    services: ['appium'],
};
```



## Running the Tests

* Start the Android emulator from Android Studio or the CLI.
* Start Appium server

```text
appium
```

* Run the WebdriverIO test.

```text
npx wdio run wdio.conf.js
```

## Quick Example

### TestCase

This Test will attempt to log in to the application.  We need to fill in the Username & Password and click on the Login button.  We will verify if the Login is successful.

* Launch the application in the Android Studio emulator.
* Launch the Appium Inspector, and switch to uiautomatorviewer in the Appium Inspector.

![Appium_Inspector](/learn/assets/appium-automation-inspector.png)

* Obtain the AccessibilityIDs of Username, Password, and Log in button as shown in the above image.



```javascript
login = async (username: string, password: string) => {
    const userNameField = await $('~username'); // Replace with actual accessibility ID or selector
    const passwordField = await $('~password'); // Replace with actual accessibility ID or selector
    const loginButton = await $('~login');      // Replace with actual accessibility ID or selector

    await userNameField.setValue(username);
    await passwordField.setValue(password);
    await driver.hideKeyboard(); // optional
    await loginButton.click();
};
```

## Sample Automation Framework

We have created a sample automation framework to execute a single testcase.
All you have to do is,

* Get the setup ready.
* Generate apk of an application.
* Clone or Download the zip from this repository.
  [Appium test framework](https://github.com/anitha-thummalapally/reactnative_automation.git)
* If downloaded, extract and start writing a testcase using the above mentioned process and execute it.

## Execution

![Appium_Execution](/learn/assets/appium-automation-brightbank-login-execution.gif)
