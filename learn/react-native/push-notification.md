---
title: "Push Notifications"
id: "push-notification"
sidebar_label: "Push Notification"
---
---
import pushNotification from '/learn/assets/push-notification.png';

A push notification is a message or alert that is "pushed" from a server or service to a user's device (such as a smartphone or tablet) without the user explicitly requesting it. Push notifications are used to notify users about specific events, updates, or information even when the associated app is not actively in use. These notifications can include text, sounds, and badges, and they appear on the device's lock screen or in the notification center. Apps can use push notifications to re-engage users by drawing their attention to new content, features, or promotions. This helps maintain user interest and encourages continued app usage.


## Implement Push Notification in WaveMaker App using Firebase

For the push notification you need to integrate firebase messaging into the  WaveMaker application's codebase. If you don't have a Firebase project, create one on the Firebase Console: [console.firebase.google.com](https://console.firebase.google.com/) Once you have created a Firebase project, you can follow the steps below to integrate Crashlytics into a WaveMaker application.

### Adding Firebase Plugin to WaveMaker App

Firebase plugins can be installed in few steps in WaveMaker. Please refer to this [page](https://docs.wavemaker.com/learn/react-native/third-party-expo-plugins#expo)
on how to install a plugin. Also, you need to add `react-native-app-badge` package to the app for the app icon badge count. We will discuss below about that.

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

Also, you need to implement `react-native-app-badge` for showing counter on WaveMaker app icon.

### Implementing App icon badge on WaveMaker app

An app icon badge is a visual indicator that appears on the icon of a mobile application, typically displayed on the home screen of a device. This badge usually contains a number or a small icon, providing users with a quick glance at certain information or notifications related to the app. 

App icon badges are commonly used to notify users of unread messages, missed calls, or other pending notifications within the app. The badge number indicates the quantity of unread items, giving users a quick overview without opening the app.

For our example, we will create a simple app that to showing token key in input field and also added `REMOVE NOTIFICATION COUNTER` button for remove notification (mark as read) . The following is the mockup of the app:

<img src={pushNotification} style={{width:"35%"}} />

The following is the code snippet for the above mockup:

```javascript
const ReactNative = require('react-native');
const messaging = require('@react-native-firebase/messaging').default;
const ShortcutBadge = require('react-native-app-badge').default;
/* perform any action on widgets/variables within this block */
Page.onReady = function() {
    ReactNative.PermissionsAndroid.request(
        ReactNative.PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );

    getToken();

    messaging().setBackgroundMessageHandler(async remoteMessage => {
        const count = await ShortcutBadge.getCount();

        if (remoteMessage.sentTime != 0) {
            ShortcutBadge.setCount(count + 1);
        }
    });
    messaging().getInitialNotification(async remoteMessage => {
        console.log('Message handled in kill  background!', remoteMessage);
    });
    messaging().onNotificationOpenedApp(async remoteMessage => {
        console.log('Message handled in kill aaa background!', remoteMessage);
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

Page.removenotificationTap = function($event, widget) {
    ShortcutBadge.setCount(0);
};
```


### Test Firebase push notification using FCM Tester

To test the push notification we are using [FCM Tester](https://testfcm.com/). Here we need FCM Registration Token (Device Token) which is already getting in our app input field and we need Server Key from Firebase Console: [console.firebase.google.com](https://console.firebase.google.com/). Also, we need to fill required fields for notification also there is some optional fields.


### To get server key from Firebase Console

#### Log In to Firebase Console
- Open your web browser and go to the Firebase Console: [console.firebase.google.com](https://console.firebase.google.com/)
- Log in using the Google account associated with your Firebase project.

#### Select Your Project
- If you have multiple projects, select the appropriate project from the Firebase project list.
- Click on Setting icon in the left-hand menu and select Project Settings and then click on Cloud Messaging Tab

- Now, Select Your server key from Cloud Messaging API (Legacy). If your Cloud Messaging API is disabled first enable it by click on triple dot on the right-hand side

