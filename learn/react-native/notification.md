---
title: "Notifications"
id: "notification"
sidebar_label: "Notification"
---
---
import pluginExample from '/learn/assets/schedule-notification.png.png';

A notification is a message or alert that is sent to a user or system to provide information or to prompt a specific action. Notifications can be delivered through various communication channels, such as on-screen pop-ups, sounds, vibrations, or other visual.

Notifications provide users with immediate updates and information about events, messages, or changes relevant to them, ensuring they stay informed without constantly checking for updates. Also, notifications can help maintain user engagement with applications and services. They remind users to interact with an app, website, or platform, keeping them active and involved.

When notifications are used appropriately and respectfully, they can enhance the overall user experience by providing valuable information and reducing the need for manual checks and interactions.

## Expo Notifications Plugin

Expo Notifications, through the expo-notifications module, makes adding push notifications to your mobile app easy. It's especially great if you're building apps for both iOS and Android because it handles the differences for you. You don't have to deal with complex setup, as it manages things like asking for permission to send notifications and getting the codes needed to send notifications to devices. 


## Adding Expo Notifications Plugin to WaveMaker App

Expo Notifications plugin can be installed in few steps in WaveMaker. Please refer to this [page](https://docs.wavemaker.com/learn/react-native/third-party-expo-plugins#expo)
on how to install a plugin. Also, you need to add two more plugins.

1. expo-notifications
2. expo-device
3. expo-constants


### Push Notification on Demand

Some apps may require the ability to enable or disable screen capture only in certain situations i.e. on demand. For example, in a chat app, a user could tap a button to send a notification to another user, prompting an immediate alert.

For our example, we will create a simple app to push notification on click of a button. The following is the mockup of the app:

<img src={pluginExample} style={{width:"35%"}} />

The following is the code snippet for the above mockup:

```javascript

const Device = require('expo-device');
const Notifications = require('expo-notifications');
const Constants = require('expo-constants');

Notifications.setNotificationHandler({
    handleNotification: async() => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});


Page.onReady = function() {
    const notificationListener = registerForPushNotificationsAsync().then(
        token => {
            console.log(token);
        }
    );

    const responseListener = Notifications.addNotificationReceivedListener(
        notification => {
            console.log(notification);
        }
    );

    Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
    });

    return () => {
        Notifications.removeNotificationSubscription(notificationListener)
        Notifications.removeNotificationSubscription(responseListener);
    }

};

async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
        identifier: 'myidentifer',
        content: {
            title: "You've got mail! 📬",
            body: 'Here is the notification body',
            data: {
                data: 'goes here',
            },
        },
        trigger: null,
    });
}
async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    if (Device.isDevice) {
        const {
            status: existingStatus
        } =
        await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
            const {
                status
            } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }

        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (
            await Notifications.getExpoPushTokenAsync({
                projectId: Constants.expoConfig.extra.eas.projectId,
            })
        ).data;
    } else {
        alert('Must use physical device for Push Notifications');
    }

    return token;
}


Page.notificationBtnTap = async function($event, widget) {
    await schedulePushNotification();
};

```

