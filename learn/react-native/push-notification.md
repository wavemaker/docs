---
title: "Push Notifications"
id: "push-notification"
sidebar_label: "Push Notification"
---
---
import pushNotification from '/learn/assets/push-notification.png';

Push notifications in mobile applications are a critical feature for engaging and retaining users. 
They serve as a direct communication channel between an app and its users, allowing for the delivery of timely, relevant
information. This can significantly enhance user experience and increase app usage.

For instance, in e-commerce apps, push notifications can alert users about special deals, new arrivals, or abandoned 
cart reminders, thereby driving sales and engagement. In the case of social media apps, these notifications keep users 
informed about new messages, comments, or likes, which encourages more frequent interactions within the app.

Moreover, push notifications can be personalized based on user behavior and preferences, making them a powerful tool for
delivering tailored content. This personalization not only increases the relevance of the notifications but also 
strengthens the user’s connection to the app.

In news and utility apps, they are instrumental in providing critical updates and information, enhancing the app's value
to the user. For example, a weather app sending real-time alerts about severe weather conditions can be both useful and 
life-saving.

In this how-to guide, we will walk you through implementing push notifications in a WaveMaker app through Firebase.


## Firebase Setup

For the push notification you need to integrate Firebase messaging into the  WaveMaker application's codebase. If you 
don't have a Firebase project, create one on the Firebase Console: 
[console.firebase.google.com](https://console.firebase.google.com/).
If you have an existing Google project associated with your mobile app, select project in Firebase Console.

Then click on Android icon, fill-in input fields Android package name (Eg:- `com.wavemaker.pushnotification`). and also you can filled Optional fields.

Now click on Register button. After that download `google-services.json`. 


### Adding Firebase Plugin to WaveMaker App

Firebase plugins can be installed in few steps in WaveMaker. Please refer to this [page](https://docs.wavemaker.com/learn/react-native/third-party-expo-plugins#expo)
on how to install a plugin. Also, you need to add `react-native-app-badge` package to the app for the app icon badge count. We will discuss below about that.

1. @react-native-firebase/app
2. @react-native-firebase/messaging
3. react-native-app-badge

Once installed, get project on your local and run `npx expo prebuild` command in the WaveMaker project.
Move the downloaded `google-services.json` file into your module (**app-level**) root directory `WaveMakerApp/android/app`.
Also, add firebase SDK plug-in as dependency to your **project-level** `build.gradle`.

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
    Page.Widgets.supportedLocaleList1.show = false
    ReactNative.PermissionsAndroid.request(
        ReactNative.PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );


    getToken();

    messaging().onNotificationOpenedApp(remoteMessage => {
        updateCardData(remoteMessage);
    });
    messaging().setBackgroundMessageHandler(async remoteMessage => {
        const count = await ShortcutBadge.getCount();

        if (remoteMessage.sentTime != 0) {
            ShortcutBadge.setCount(count + 1);
        }
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
        updateCardData(remoteMessage);

    });

    return unsubscribe;
};

function updateCardData(notificationMessage) {
    Page.Widgets.supportedLocaleList1.show = true
    Page.stockName = notificationMessage.data.name;
    Page.price = notificationMessage.data.last
    Page.stockName = notificationMessage.data.name;
    Page.price = notificationMessage.data.last;
    Page.change = notificationMessage.data.change;
    Page.high = notificationMessage.data['52high'];
    Page.low = notificationMessage.data['52low'];
    Page.volume = notificationMessage.data.volume;
    Page.refresh();
}

async function getToken() {
    let fcmtoken = await messaging().getToken();
    Page.tokeninput = fcmtoken;

}

Page.removenotificationTap = function($event, widget) {
    ShortcutBadge.setCount(0);
};
```


### Test Firebase push notification using FCM Tester

To test the push notification we can use services like [FCM Tester](https://testfcm.com/). To test the notification  we 
require FCM Registration Token (Device Token) which is already getting in our app input field and we need Server Key 
from Firebase Console: [console.firebase.google.com](https://console.firebase.google.com/). Also, we need to fill required fields for notification also there is some optional fields.

### To get server key from Firebase Console

#### Log In to Firebase Console
- Open your web browser and go to the Firebase Console: [console.firebase.google.com](https://console.firebase.google.com/)
- Log in using the Google account associated with your Firebase project.

#### Select Your Project
- If you have multiple projects, select the appropriate project from the Firebase project list.
- Click on Setting icon in the left-hand menu and select Project Settings and then click on Cloud Messaging Tab

- Now, Select Your server key from Cloud Messaging API (Legacy). If your Cloud Messaging API is disabled first enable it by click on triple dot on the right-hand side

