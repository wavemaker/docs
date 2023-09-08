---
title: "Integrating Crashlytics"
id: "integrating-crashlytics"
sidebar_label: "Crashlytics"
---
---
import crashLogs from '/learn/assets/crash-logs-attributes-error-reports.png';

Crashlytics is a crash reporting and analysis tool provided by Firebase. Crashlytics helps developers track and understand crashes that occur in their mobile applications. It provides insights into the causes of crashes and allows developers to take action to improve the stability of their apps, which essentially contributes to higher user satisfaction and increased app success.

Crashlytics can be employed for the following reasons:

- Crash Reporting
- Error Insights
- Real time Alerts
- Custom Logs

## Using Firebase Crashlytics
To send crash logs to Crashlytics, you need to integrate the Crashlytics SDK into your Wavemaker application's codebase.
If you don't have a Firebase project, create one on the Firebase Console: [console.firebase.google.com](https://console.firebase.google.com/)
Once you have created a Firebase project, you can follow the steps below to integrate Crashlytics into a WaveMaker application.

### Adding Crashlytics Plugin to an App

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

Create `firebase.json` file in the root directory of your Wavemaker application with the Crashlytics-related keys set to the following values: 

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
        "Prebuild":"expo prebuild –clean"
  }
}
```

### Crashlytics Interfaces

Crashlytics provides the following interfaces to log messages, events, and errors.

| Methods | Description |
| ------- | ------- |
| log(message: String) | Log a custom message or event |
| logException(exception: Throwable) | Logs an exception or error that occurred in the app. |
| recordError(error: Throwable) | Records an error without causing the app to crash. |
| setAttribute(key: String, value: Any) | Sets a custom key-value attribute that provides additional context for crash reports. |
| setUserId(userId: String) | Associates a user identifier with crash reports, helping to identify affected users. |
| catchException(exception: Throwable) | Catches an exception to provide more context about app issues. |


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

