---
title: "Push Notifications"
id: "push-notification"
sidebar_label: "Push Notification"
---
---


A push notification is a message or alert that is "pushed" from a server or service to a user's device (such as a smartphone or tablet) without the user explicitly requesting it. Push notifications are used to notify users about specific events, updates, or information even when the associated app is not actively in use. These notifications can include text, sounds, and badges, and they appear on the device's lock screen or in the notification center. Apps can use push notifications to re-engage users by drawing their attention to new content, features, or promotions. This helps maintain user interest and encourages continued app usage.


## Implement Push Notification in WaveMaker App using Firebase

For the push notification you need to integrate firebase messaging into the  WaveMaker application's codebase. If you don't have a Firebase project, create one on the Firebase Console: [console.firebase.google.com](https://console.firebase.google.com/) Once you have created a Firebase project, you can follow the steps below to integrate Crashlytics into a WaveMaker application.

### Adding Firebase Plugin to WaveMaker App

Firebase plugins can be installed in few steps in WaveMaker. Please refer to this [page](https://docs.wavemaker.com/learn/react-native/third-party-expo-plugins#expo)
on how to install a plugin. Also, you need to add `react-native-app-badge` package to the app for the app icon badge count.

1. @react-native-firebase/app
2. @react-native-firebase/messaging
3. react-native-app-badge

Once installed, get project on your local and run `npx expo prebuild` command in the WaveMaker project.
Now, select project in Firebase Console or  create new project on Firebase Console: [console.firebase.google.com](https://console.firebase.google.com/).

After that click on Android icon and then fill input fields Android package name (Eg:- `com.wavemaker.pushnotification`). and also you can filled Optional fields. 

Now click on Register button. After that download `google-services.json` and move your downloaded `google-services.json` file into your module (**app-level**) root directory `WaveMakerApp/android/app`.

Now, click on next and then add firebase SDK plug-in as dependency to your **project-level** `build.gradle`.

**`WaveMakerApp/android/build.gradle`**
```gradle
buildscript {
    ... your existing configuration 

    dependencies {
        ... your existing dependencies 
        
        classpath 'com.google.gms:google-services:4.4.0'
    }
}
```

Then, in your module (**app-level**) `build.gradle` file

**`WaveMakerApp/android/app/build.gradle`**
```gradle

apply plugin: 'com.google.gms.google-services'

dependencies {
    ... your existing dependencies 
    
    implementation platform('com.google.firebase:firebase-bom:32.5.0')
    implementation 'com.google.firebase:firebase-analytics'
}
```
Then, finish all steps.


### Implement Firebase messaging to the WaveMaker App

```javascript
const ReactNative = require('react-native');
const messaging = require('@react-native-firebase/messaging').default;

Page.onReady = function() {
    ReactNative.PermissionsAndroid.request(
        ReactNative.PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );

    getToken();

    messaging().setBackgroundMessageHandler(async remoteMessage => {
        alert(JSON.stringify(remoteMessage))
    });
    messaging().getInitialNotification(async remoteMessage => {
        alert(JSON.stringify(remoteMessage))
    });
    messaging().onNotificationOpenedApp(async remoteMessage => {
        alert(JSON.stringify(remoteMessage))
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
        alert(JSON.stringify(remoteMessage));
    });

    return unsubscribe;
};

async function getToken() {
    let fcmtoken = await messaging().getToken();
    Page.tokeninput = fcmtoken;
}
```