---
title: "Integrating Crashlytics"
id: "integrating-crashlytics"
sidebar_label: "Crashlytics"
---
---
import crashLogs from '/learn/assets/CrashLogsAttributesAndErrorReports.png';

Crashlytics is a crash reporting and analysis tool provided by Firebase. Crashlytics helps developers track and understand crashes that occur in their mobile applications. It provides insights into the causes of crashes and allows developers to take action to improve the stability of their apps, which essentially contributes to higher user satisfaction and increased app success.


### How to use Firebase Crashlytics
To send crash logs to Crashlytics, you need to integrate the Crashlytics SDK into your mobile application's codebase. Crashlytics is part of Firebase, and it provides a way to capture and report crashes, errors, and exceptions that occur in your app.

Here's the general process

#### Create a Firebase Project
- If you don't have a Firebase project, create one on the Firebase Console: [console.firebase.google.com](https://console.firebase.google.com/)

#### Integrate Firebase SDK 
- Follow the Firebase documentation to integrate the Firebase SDK into your app. This typically involves adding configuration files, dependencies, and initializing the Firebase SDK.
- Below we mentions how to add configuration files, dependencies, and initializing the Firebase SDK


Also, here is what Crashlytics can do:

#### Crash Reporting

Crashlytics monitors your mobile app in real-time and captures crash reports when the app encounters an unexpected error or crashes. When a crash occurs, Crashlytics collects information about the crash, including the stack trace, device information, app version, and more.

#### Error Insights

Crashlytics provides detailed crash reports that help you understand the circumstances under which the crash occurred. This includes information about the sequence of events leading up to the crash, the specific lines of code that were executing, and any variables involved.

#### Real time Alerts

Crashlytics can send you real-time alerts when new crashes are detected in your app. This allows you to be aware of issues as they arise and respond quickly to minimize the impact on users.

#### Custom Logs

In addition to crash reports, Crashlytics allows you to log custom events and data. This can be helpful for tracking user actions, debugging, and gaining insights into the usage patterns of your app.


### Crashlytics Interfaces 

| Methods | Description |
| ------- | ------- |
| log(message: String) | Log a custom message or event |
| logException(exception: Throwable) | Logs an exception or error that occurred in the app. |
| recordError(error: Throwable) | Records an error without causing the app to crash. |
| setAttribute(key: String, value: Any) | Sets a custom key-value attribute that provides additional context for crash reports. |
| setUserId(userId: String) | Associates a user identifier with crash reports, helping to identify affected users. |
| catchException(exception: Throwable) | Catches an exception to provide more context about app issues. |

## Using Firebase Crashlytics

Follow the steps below to integrate Crashlytics into a WaveMaker application.

### Adding Crashlytics Plugin to an App​

Crashlytics plugins can be installed in a few steps in a WaveMaker application. Please refer to this [page](https://docs.wavemaker.com/learn/react-native/third-party-expo-plugins#expo)
on how to install the plugin.


1. Install and setup the app module.

```
npm i @react-native-firebase/app
```

2. Install the Crashlytics module

```
npm i @react-native-firebase/crashlytics
```

3. Once installed, you need to add the following config plugin to your `app.json` or `app.config.json`.
    - `@react-native-firebase/app`
    - `@react-native-firebase/crashlytics` 

### Adding Plugin to App JSON

**`app.json`**

```javascript
{
  "expo": {
    "plugins": [
    "@react-native-firebase/app",
    "@react-native-firebase/crashlytics"
    ]
    ... your existing configuration 
  }
}
```

### Create Firebase JSON in Expo

Create `firebase.json` file in the root directory of your Expo app with the Crashlytics-related keys set to the following values: 

**`firebase.json`**

```javascript
{
    "react-native":{
    "crashlytics_auto_collection_enabled": true,
    "crashlytics_debug_enabled": true,
    "crashlytics_ndk_enabled": true,
    "crashlytics_is_error_generation_on_js_crash_enabled": true,
    "crashlytics_javascript_exception_handler_chaining_enabled": true
    }
}
```

### Add PreBuild Script

Add `prebuild` script to `package.json`.

```javascript
{
  "scripts": {
       ... your existing scripts,
        "Prebuild":"expo prebuild –clean —platform android"
  }
}
```

## Integrating Crashlytics Plugin in App

### Crash Logs Attributes and Error Reports

You can use methods to set attributes for the crash report, which enables analytic data when crash occurs. This helps you review them. In addition, you can report errors to Crashlytics using the `recordError` when you catch unexpected errors.

<img src={crashLogs} style={{width:"35%"}} />

The following is the code snippet for the above mockup:

```javascript
var crashlytics = require('@react-native-firebase/crashlytics');

Page.onReady = function() {
    crashlytics.log('App mounted.')
};

Page.attributelogsTap = function($event, widget) {
    crashlytics().setAttribute("data", "user-data")

    crashlytics().setAttributes({
        email: "wm_example@wavemaker.com",
        username: "wm_example"
    })
};

Page.crashappTap = function($event, widget) {
    crashlytics.crash();
};
Page.errorreportsTap = function ($event, widget) { 
    try {
      
      ...your code 
    } catch (error) {
      crashlytics().recordError(error);
    }
     //if you catch unexpected errors to the app you can report that error to Crashlytics using the `recordError` method.
};
```

### Run App

To run your app locally, run the prebuild command.

```javascript
npm run prebuild
```

Then, compile the app using the following command.

```javascript
npm run android
```


### To view crash reports in Firebase Crashlytics

#### Log In to Firebase Console
- Open your web browser and go to the Firebase Console: [console.firebase.google.com](https://console.firebase.google.com/)
- Log in using the Google account associated with your Firebase project.

#### Select Your Project
- If you have multiple projects, select the appropriate project from the Firebase project list.

#### Navigate to Crashlytics
- In the left-hand menu, you should see a list of available Firebase services. Scroll down and click on "Crashlytics."

#### View Crash Reports
- Once you're in the Crashlytics section, you'll see a dashboard displaying a summary of crash reports and issues detected in your app.
- he dashboard will show a list of recent crashes, with information such as the number of affected users, the issue's impact, and a brief description of the error.

