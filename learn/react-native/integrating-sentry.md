---
title: "Integrating Sentry"
id: "integrating-sentry"
sidebar_label: "Sentry"
---
---
import crashLogs from '/learn/assets/CrashLogsAndErrors.png';

Sentry is a real-time error tracking and monitoring platform used by software developers to identify and diagnose issues in their applications. It's designed to help development teams catch and resolve errors, exceptions, and other issues that can occur in software systems. By tracking errors and providing insights into their causes, Sentry enables developers to improve the stability and reliability of their applications.

Here's a more detailed breakdown of what Sentry does:

**1. Error Tracking:** Sentry captures errors, exceptions, and crashes that occur within applications. It collects detailed information about the error, including stack traces, user context, environment details, and more.

**2. Real-time Alerts:** When an error occurs, Sentry can send real-time alerts to developers, notifying them of the issue. This enables quick responses to critical errors, helping to reduce downtime and improve the user experience.

**3. Contextual Information:** Sentry provides context around errors by capturing data such as user actions leading up to the error, the version of the application being used, and other relevant session information. This context is crucial for understanding the circumstances in which the error occurred.

**4. Performance Monitoring:** In addition to error tracking, Sentry offers performance monitoring capabilities. It helps identify performance bottlenecks, slow transactions, and other issues that could affect the application's responsiveness and user experience.


## Why sentry-expo?

- Sentry treats React Native as a first-class citizen and we have collaborated with Sentry to make sure Expo is, too.
- It's very easy to set up and use
- It scales to meet the demands of even the largest projects.
- We trust it for our projects at Expo.
- It is free for up to 5,000 events per month.
- It streamlines your error-reporting code across iOS, Android, and web


## Install and configure Sentry

### 1. Sign up and create project in Sentry

Before getting real-time updates on errors we need to create an account and project to the Sentry. Here's how to do that:

[Sign up for Sentry](https://sentry.io/signup/) (it's free), and create a project in your Dashboard. Take note of your organization slug, project name, and DSN as you'll need them later:

- **organization slug** is available in your **Organization settings** tab
- **project name** is available in your project's **Settings > Projects** tab (find it in the list)
- DSN is available in your project's **Settings > Projects > Project name > Client Keys (DSN)** tab.

### 2. Installation

#### Adding Expo Sentry Plugin to your WaveMaker React Native App​

Sentry plugins can be installed in few steps in WaveMaker. Please refer to this [page](https://docs.wavemaker.com/learn/react-native/third-party-expo-plugins#expo)
on how to install a plugins.

```javascript
# Install & setup the app module
npm i sentry-expo

# sentry-expo also requires some additional Expo module packages.

npm i expo-application expo-constants expo-device @sentry/react-native

```

Once installed, you need to add the  `sentry-expo` config plugin to your `app.json` or `app.config.json`.

**`app.json`**  

```javascript
{
  "expo": {
    "plugins": ["sentry-expo"]
    ... your existing configuration 
  }
}

```

If Configuring `sentry-expo` is done through the config plugin in your `app.json` or `app.config.json` file then configure a `postPublish` hook.

Add `expo.hook` property to your project’s `app.json` or `app.config.json` file:

```javascript
{
  "expo": {
    ... your existing configuration 
    "hooks": {
      "postPublish": [
        {
          "file": "sentry-expo/upload-sourcemaps",
          "config": {
            "organization": "sentry org slug, or use the `SENTRY_ORG` environment variable",
            "project": "sentry project name, or use the `SENTRY_PROJECT` environment variable"
          }
        }
      ]
    }
  }
}
```

### Integrating sentry-expo plugin in WaveMaker app

<img src={crashLogs} style={{width:"35%"}} />

Here, we created two buttons, one for the test log and another for crashing the app manually.

The following is the code snippet for the above mockup:

```javascript
const Sentry = App.getDependency('sentry-expo')
Page.onReady = function() {
    Sentry.init({
        enabled: true,
        dsn:"your-dsn",
        enableInExpoDevelopment: true,
        debug: true, 
    });
};

Page.trylogTap = function($event, widget) {
    Sentry.Native.captureException("Wavemaker log testing")
};

Page.testcrashTap = function($event, widget) {
    Sentry.Native.nativeCrash();
};

```

To run your app locally, run the prebuild command and then compile the app

```javascript
npm run android
```