---
title: "Integrating Crashlytics"
id: "integrating-crashlytics"
sidebar_label: "Crashlytics"
---
---
import crashLogs from '/learn/assets/CrashLogsAttributesAndErrorReports.png';

Crash reporting services like Crashlytics are essential tools for modern app development. They provide real-time error monitoring, insightful crash reports, and streamlined debugging processes. By monitoring for issues and proactively addressing them, developers can create a more stable and reliable app environment, leading to higher user satisfaction and increased app success.

Here are some of the benefits of using crash reporting services:

- Identify and fix bugs quickly and efficiently.
- Prioritize their efforts and focus on the most critical problems.
- Improve the user experience by reducing the number of crashes and errors.
- Collect feedback from users about their experiences with the app.

## What does it do

Crashlytics is a crash reporting and analysis tool provided by Firebase. Crashlytics helps developers track and understand crashes that occur in their mobile applications. It provides insights into the causes of crashes and allows developers to take action to improve the stability of their apps. Here's what Crashlytics does:

**1. Crash Reporting:** Crashlytics monitors your mobile app in real-time and captures crash reports when the app encounters an unexpected error or crashes. When a crash occurs, Crashlytics collects information about the crash, including the stack trace, device information, app version, and more.

**2. Error Insights:** Crashlytics provides detailed crash reports that help you understand the circumstances under which the crash occurred. This includes information about the sequence of events leading up to the crash, the specific lines of code that were executing, and any variables involved.

**3. Real time Alerts:** Crashlytics can send you real-time alerts when new crashes are detected in your app. This allows you to be aware of issues as they arise and respond quickly to minimize the impact on users.

**4. Custom Logs:** In addition to crash reports, Crashlytics allows you to log custom events and data. This can be helpful for tracking user actions, debugging, and gaining insights into the usage patterns of your app.


## How to use Firebase Crashlytics in WaveMaker

### Adding Crashlytics Plugins to your WaveMaker App​

Crashlytics plugins can be installed in few steps in WaveMaker. Please refer to this [page](https://docs.wavemaker.com/learn/react-native/third-party-expo-plugins#expo)
on how to install a plugins.

```javascript
# Install & setup the app module
npm i @react-native-firebase/app

# Install the Crashlytics module
npm i @react-native-firebase/crashlytics
```

Once installed, you need to add the  `@react-native-firebase/app`  and  `@react-native-firebase/crashlytics` config plugin to your `app.json` or `app.config.json`.

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

Also, you need to create `firebase.json` file in the root directory of your expo app, with these Crashlytics-related keys set to these specific values: 

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

Now, add `prebuild` script to `package.json`

```javascript
{
  "scripts": {
       ... your existing scripts,
        "Prebuild":"expo prebuild –clean —platform android"
  }
}
```

## Integrating Crashlytics plugin in WaveMaker app

### Crash Logs,  Attributes and Error Reports

There are various methods to set attributes for the crash report, in order to provide analytics for crashes and help you review them. Even if you catch unexpected errors, you can report that error to  Crashlytics using the `recordError`.

<img src={crashLogs} style={{width:"35%"}} />

The following is the code snippet for the above mockup:

```javascript
var crashlytics = require('@react-native-firebase/crashlytics');

Page.onReady = function() {
    crashlytics().log('App mounted.')
};

Page.attributelogsTap = function($event, widget) {
    crashlytics().setAttribute("data", "user-data")

    crashlytics().setAttributes({
        email: "wm_example@wavemaker.com",
        username: "wm_example"
    })
};

Page.crashappTap = function($event, widget) {
    crashlytics().crash();
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

To run your app locally, run the prebuild command and then compile the app

```javascript
npm run prebuild
```

Then,

```javascript
npm run android
```