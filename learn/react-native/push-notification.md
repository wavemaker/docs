---
title: "Push Notifications"
id: "push-notification"
sidebar_label: "Push Notification"
---
---
import pushNotification from '/learn/assets/push-notification.gif';

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

1. `@react-native-firebase/app` - version: `19.2.2`
2. `@react-native-firebase/messaging` - version: `19.2.2`
3. `expo-build-properties` - version: `0.11.1`

#### Adding google-services.json
Once installed, get project on your local and run `npx expo prebuild` command in the WaveMaker project.
Move the downloaded `google-services.json` file into your resource folder `src/main/webapp/resources/files/google-services.json`.

#### Updating app.json

Now create a app.json file with below config and add it to webapp folder `src/main/webapp/app.json`.

```json
{
	"expo": {
		"android": {
			"googleServicesFile": "./assets/resources/files/google-services.json",
			"package": "com.wavemaker.pushnotification"
		},
		"ios": {
			"googleServicesFile": "./assets/resources/files/GoogleService-Info.plist",
			"bundleIdentifier": "com.wavemaker.pushnotification"
		},
		"plugins": [
			"@react-native-firebase/app",
			"@react-native-firebase/messaging",
			[
				"expo-build-properties",
				{
					"ios": {
						"useFrameworks": "static"
					}
				}
			]
		]
	}
}
```

### Implement Firebase messaging to the WaveMaker App

Since, firebase modules are native modules and will not work in Web preview 
we will implement web and native seperately.

#### Web Implementation
As we can't use firebase modules, we will be returning `No Token` string as respinse

create a file `notification.web.js` with below content and add it resources folder  `src/main/webapp/resources/files/notification.web.js`
```js
async function getNotifications() {
    return "No Token";
}

module.exports = {
    getNotifications,
}
```

#### Native Implementation
create a file `notification.native.js` with below content and add it resources folder  `src/main/webapp/resources/files/notification.native.js`

```js
async function getNotifications() {
    const ReactNative = require("react-native");
    const messaging = require('@react-native-firebase/messaging').default();
    ReactNative.PermissionsAndroid.request(
        ReactNative.PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );
    let fcmtoken = await messaging.getToken();
    const tokeninput = fcmtoken ? fcmtoken : 'No Token';

    messaging.setBackgroundMessageHandler(async remoteMessage => {
        ReactNative.Alert.alert(JSON.stringify(remoteMessage));
    });
    messaging.getInitialNotification(async remoteMessage => {
        ReactNative.Alert.alert(JSON.stringify(remoteMessage));
    });
    messaging.onNotificationOpenedApp(async remoteMessage => {
        ReactNative.Alert.alert(JSON.stringify(remoteMessage));
    });

    messaging.onMessage(async remoteMessage => {
        ReactNative.Alert.alert(JSON.stringify(remoteMessage));
    });
    return tokeninput;
}


module.exports = {
    getNotifications
}
```

#### Main Page - Markup

```html
<wm-page name="mainpage">
    <wm-left-panel content="leftnav" name="left_panel1"></wm-left-panel>
    <wm-mobile-navbar name="mobile_navbar1" title="Title" backbutton="false">
        <wm-anchor caption="" name="AddLink" iconclass="wi wi-gear"></wm-anchor>
    </wm-mobile-navbar>
    <wm-content name="content1">
        <wm-page-content columnwidth="12" name="page_content1">
            <wm-label padding="unset" name="label1" caption="bind:Token"></wm-label>
        </wm-page-content>
    </wm-content>
    <wm-mobile-tabbar name="mobile_tabbar1"></wm-mobile-tabbar>
</wm-page>
```

#### Main Page - Script

```javascript
Page.onReady = function() {
    try {
        const {
            getNotifications
        } = require('../../../assets/resources/files/notification');
        getNotifications().then(token => {
            Page.Token = token;
        });
    } catch (error) {
        console.log(error);
    }
};
```

#### Preview

<img src={pushNotification} style={{width:"35%"}} />


### Test Firebase push notification 

#### Log In to Firebase Console
- Open your web browser and go to the Firebase Console: [console.firebase.google.com](https://console.firebase.google.com/)
- Log in using the Google account associated with your Firebase project.

### using FCM Tester
To test the push notification we can use services like [FCM Tester](https://testfcm.com/). To test the notification  we 
require FCM Registration Token (Device Token) which we are showing it as label caption in our app and we need Server Key 
from Firebase Console: [console.firebase.google.com](https://console.firebase.google.com/). Also, we need to fill required fields for notification also there is some optional fields.

#### To get server key from Firebase Console
- If you have multiple projects, select the appropriate project from the Firebase project list.
- Click on Setting icon in the left-hand menu and select Project Settings and then click on Cloud Messaging Tab

- Now, Select Your server key from Cloud Messaging API (Legacy). If your Cloud Messaging API is disabled first enable it by click on triple dot on the right-hand side

### using Campaigns

1. In Firebase Console [console.firebase.google.com](https://console.firebase.google.com/) select Messaging in the left Navigation, here we can create a new campaign or we can use the test option firebase provides while creating the Campaign

2. Under Campaigns tab select create New Campaign and fill the **Notification Title** and **Notification Text**

3. Now select **Send test message** button, and add FCM Registration Token (Device Token) and click on test.

4. you can also continue creating a Campaign by submitting all required fields

both  Test Message or Campaign will be shown as either **Push Notification** when app is not open or it will be shown as **In-App message** when app is open