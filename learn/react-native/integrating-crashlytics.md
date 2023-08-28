---
title: "Integrating Crashlytics"
id: "integrating-crashlytics"
sidebar_label: "Crashlytics"
---
---
import crashLogs from '/learn/assets/CrashLogsAttributesAndErrorReports.png';

Crashlytics is a crash reporting and analysis tool provided by Firebase. Crashlytics helps developers track and understand crashes that occur in their mobile applications. It provides insights into the causes of crashes and allows developers to take action to improve the stability of their apps, which essentially contributes to higher user satisfaction and increased app success.

Here is what Crashlytics can do:

#### Crash Reporting

Crashlytics monitors your mobile app in real-time and captures crash reports when the app encounters an unexpected error or crashes. When a crash occurs, Crashlytics collects information about the crash, including the stack trace, device information, app version, and more.

#### Error Insights

Crashlytics provides detailed crash reports that help you understand the circumstances under which the crash occurred. This includes information about the sequence of events leading up to the crash, the specific lines of code that were executing, and any variables involved.

#### Real time Alerts

Crashlytics can send you real-time alerts when new crashes are detected in your app. This allows you to be aware of issues as they arise and respond quickly to minimize the impact on users.

#### Custom Logs

In addition to crash reports, Crashlytics allows you to log custom events and data. This can be helpful for tracking user actions, debugging, and gaining insights into the usage patterns of your app.

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