---
title: "How to use Push Notification in WaveMaker Mobile App"
id: "use-push-notification-wm-mobile-app"
sidebar_label: "Using Push Notifications in Mobile Device"
---
---
### Scenario 
An app is used to share tasks across the users in a team. A user is assigned a task that should be completed by 5:00 PM and it is 4:30 PM already and task is not completed yet. The app wants to send an auto-reminder to the user about the task. However, the app is not open on the user’s device. In this case, the app uses a third party service to send an sms or an email to the user. 

In addition to using notification channels, a mobile operating system also provides a push notification service. Using this service, an app can send messages to the user even when the app is not in a foreground. 

## How it works
Operating system maintains an http service to which all notifications have to be posted. This service acts as a post office. Each mobile app has to register with this service and should obtain a registration id. If any notification addressed to the registration id is received, then service will simply forward them to respective mobile device. Registration id is unique for each app on device. In iOS, this service is called Apple Push Notification service (APNS). In Android, this service is called Firebase Messaging Service.

[![](/learn/assets/push_1.png)](/learn/assets/push_1.png)

## Architecture

[![](/learn/assets/push_arch.png)](/learn/assets/push_arch.png) 

First, both mobile app and server should register with APNS / FCM.

1. Mobile App registers for device notifications and gets registration token. This token functions as the address to send a push notification to.
2. Backend server registers with APN server (iOS) and FCM server (Android) by submitting credentials.
3. After receiving token, mobile app sends the token to backend server.
4. Backend server stores it in the database for later use.

[![](/learn/assets/push_arch2.png)](/learn/assets/push_arch2.png) 

These are the steps for delivering a push notification:

1. When Backend wants to send a push notification to users, Backend retrieves the stored registration tokens of devices of those users.
2. Then, a push notification request is sent to the corresponding user devices (identified with registration tokens) via FCM / APNS.
3. FCM/ APNS will send push notification to all the devices which have this app installed.

## App Example

A Cordova plugin called **`phonegap-plugin-push`** can be used by the app to create a message to be broadcast to all logged-in users.

## Prerequisites

For registration, app and backend server have to provide some information to push notification service so that they can be verified. These credentials have to be obtained first. 

:::note
In a WaveMaker application, ‘Application Id’ in ‘Build for Android’ dialog is used as the App Id. 
:::

[![](/learn/assets/push_prereq1.png)](/learn/assets/push_prereq1.png) 

Follow below steps to achieve the Android prerequisites:

## Android Prerequisites

Follow below steps to achieve the Android prerequisites.

### `google-services.json`

An app for Android should have `google-services.json` that has all information required for registering with Firebase messaging service. Follow below steps to obtain it:

1. Open [Firebase](https://console.firebase.google.com/) console. Create a new project to register for notifications.
2. Select the created project and click the setting icon at the top and choose Project Settings. 

[![](/learn/assets/push_prereq2.png)](/learn/assets/push_prereq2.png)

3. From settings, go to the general app and click ‘Add Firebase to your Android App’. 

[![](/learn/assets/push_prereq3.png)](/learn/assets/push_prereq3.png)

4. A form appears to register your app. Application id that is mentioned in ‘export cordova dialog’ of your WaveMaker project has to be entered as Android package name in this form. Click **Next**.

[![](/learn/assets/push_prereq4.png)](/learn/assets/push_prereq4.png)

5. Download `google-services.json` and click next. 

[![](/learn/assets/push_prereq5.png)](/learn/assets/push_prereq5.png)


### Service JSON

Firebase also provides another JSON file that is required by the backend to push messages. This JSON is called the service JSON.

1. Open [Firebase](https://console.firebase.google.com/) console. Open your app that was created above.
2. Select your project and click the setting icon at the top and choose Project Settings. 

[![](/learn/assets/push_prereq2.png)](/learn/assets/push_prereq2.png)

3. In Firebase Console, go to settings and open ‘Service Accounts’ tab. 

[![](/learn/assets/push_prereq6.png)](/learn/assets/push_prereq6.png)

4. A button with label **Generate new private key** is located the bottom of page. A JSON file is downloaded after clicking this button. Rename this file as `FCM-admin-service-key.json`. 

[![](/learn/assets/push_prereq7.png)](/learn/assets/push_prereq7.png)

## iOS Prerequisites

Steps to configure iOS app in developer portal

### Configuring App ID

App ID configured for Push Notifications on Apple Developer Portal has to be created first.

1. Log in on [Apple’s Developer Center](https://developer.apple.com/devcenter/ios/index.action).
2. Select the Account tab to go to **Certificates, Identifiers & Profiles**.
3. If you have not already created an App ID, create it now and make sure push notifications is enabled. Or edit your existing App ID and enable them. 

:::note
Wildcard (ending with an asterisk) app id is not allowed to use push notification service. 
:::

[![](/learn/assets/push_prereq8.png)](/learn/assets/push_prereq8.png)

### APNS Certificate 

Backend server requires to provide an APNS certificate to connect APNS.

1. Edit the app id created above and open push notification section. 

[![](/learn/assets/push_prereq9.png)](/learn/assets/push_prereq9.png)

2. Click **Create Certificate** and follow the instructions. 

[![](/learn/assets/push_prereq10.png)](/learn/assets/push_prereq10.png)

3. When prompted upload the CSR file and continue. Download and install the certificates on your Mac. If the certificate is already created, a download option is shown.
4. In Mac, open Keychain Access, click login and drag-drop the downloaded certificate.
5. Navigate to the certificate you want to use for your push notifications. Right-click and export it as a P12 certificate. Use as name `apns-dev-cert.p12` (in case of the development certificate). In this demo app, this certificate is named as `Certificates.p12`. When prompted enter a password to protect the file and note it for future use. 

[![](/learn/assets/push_prereq11.png)](/learn/assets/push_prereq11.png)

### Provisioning profile

A provisioning profile has to be created for the app id created above:

1. Create a provisioning profile for your app. 

[![](/learn/assets/push_prereq12a.png)](/learn/assets/push_prereq12a.png) 

[![](/learn/assets/push_prereq12b.png)](/learn/assets/push_prereq12b.png)

2. Continue with the next steps
3. Download the profile. Install the provisioning profile on your Mac by double-clicking it.

## App Creation

1. From File Explorer open **`pom.xml`** and add `firebase-admin` and `javapns-jdk16` as dependencies as shown below:

``` 
<dependency>
    <groupId>com.google.firebase</groupId>
    <artifactId>firebase-admin</artifactId>
    <version>6.4.0</version>
</dependency>
<dependency>
    <groupId>com.github.fernandospr</groupId>
    <artifactId>javapns-jdk16</artifactId>
    <version>2.2.1</version>
</dependency>
```    
[![](/learn/assets/push_pomxml.png)](/learn/assets/push_pomxml.png)

2. [Import Resource](/learn/app-development/services/3rd-party-libraries). Import the following resources to the respective folders:

    - Import `google-services.json` (downloaded earlier) to the `webapp` folder. 
    
    [![](/learn/assets/push_resources1.png)](/learn/assets/push_resources1.png)
    
    - Add the below script in project config.xml (i.e &lt;project&gt;/src/main/webapp/config.xml) file under ```<platform name="android">```.
      ```<resource-file src="www/google-services.json" target="/app/google-services.json"/>```
    - Import ‘`FCM-admin-service-key.json`’ (downloaded earlier) to `/project/src/main/resources`.
    - Import `.p12` Certificate to `/project/src/main/resources`.
    
3. [Create a db](/learn/app-development/services/database-services/working-with-databases/) named `DeviceDetails`, which will store all the `deviceIds`, `username` and device type i.e. OS (Android or iOS). Mark these columns as unique. 

[![](/learn/assets/push_db-1.png)](/learn/assets/push_db-1.png)

4. [Turn on security](/learn/app-development/app-security/app-security). Here we are setting it to Demo. 

[![](/learn/assets/push_security.png)](/learn/assets/push_security.png)

5. [Create a Java Service](/learn/app-development/services/java-services/java-service/) named `PushService`. This service will contain `registerDevice`, `unregisterDevice` and `notify` methods.
    
    - `RegisterDevice` will create a new record of the registered device details (deviceId, os, userName) in the db.
    - `UnregisterDevice` will delete the device details record in db.

    - `Notify` will request the GCM/APNS to broadcast the messages to the registered devices.
    
    To obtain the above-specified functionality, download the **[Java code](/learn/assets/push_PushService.txt)** file and include the `Java code` in this service file.
    
:::note
Replace packageName, imports specific to the app, `senderId`, `apiKey`, `iosCertificateName`, `iosCertificateKey` (password for iosCertificate) values in above code.
:::

6. [Create a service variable](/learn/app-development/variables/variables) named `RegisterPush` to register the device to receive push notifications.

    - Bind input fields
        - **deviceId** to `bind:deviceToken`
        - **OS** to `deviceInfo variable` and
        - **userName** from `loggedInUser` variable. 
        
        [![](/learn/assets/push_serviceVar.png)](/learn/assets/push_serviceVar.png)

        - DeviceId will be bound on successful push registration which is written in `app.js`.

```
        var push;

function enablePush() {
    // Enable push only if this is invoked inside mobile with push notification plugin..
    if (!push && window.cordova && PushNotification) {
        // Initialize the plugin
        push = PushNotification.init({
            android: {
                forceShow: true,
                vibrate: true
            },
            ios: {
                alert: true,
                sound: true
            }
        });

        push.on('registration', function(data) {
            // On Successful registration with push notification center, save the registration id on our backend.
            var pushVar = App.Variables.RegisterPush;
            if (App.deviceToken === data.registrationId) {
                return;
            }
            App.deviceToken = data.registrationId;
            pushVar.setInput({
                'deviceId': App.deviceToken
            });

            pushVar.invoke();
        });

        push.on('notification', function(data) {
            console.log("notification: %O", data);
        });

    }
}
/* perform any action with the variables inside this block(on-page-load) */

App.onAppVariablesReady = function() {
    /*
     * variables can be accessed through 'App.Variables' property here
     * e.g. App.Variables.staticVariable1.getData()
     */

    //If the user is already logged-in, then enable push
    if (App.Variables.loggedInUser.dataSet.name) {
        enablePush();
    }
};
```
7. On every successful login, register the device for receiving the push notification. For this, [open the Actions dialog](/learn/assets/var_sel.png) and select the pre-defined **loginAction**. 

[![](/learn/assets/push_loginAct.png)](/learn/assets/push_loginAct.png)

Go to **Events** tab and write the `JavaScript function` on `loginVariable` success. 

```
App.loginActiononSuccess = function(variable, data, options) {
    //On successful login, enable push
    enablePush();
};
```
8. If user is already logged-in, then enable push.
9. Initialize the plugin to get the deviceId, and start listening to all the events when notification is received. Store the device Id in DB that we receive on successful registration event.
10. On the Main page, drag and drop a text widget and button as shown below. 

[![](/learn/assets/push_UI.png)](/learn/assets/push_UI.png)

11. [Create a service variable](/learn/assets/var_sel.png) named **`sendNotification`** which will call notify method of `PushService` 

[![](/learn/assets/push_serviceVar2.png)](/learn/assets/push_serviceVar2.png)

- Bind input field message to the text widget datavalue and currentUser to the name field of loggedInUser variable 
    
[![](/learn/assets/push_serviceVar2_input.png)](/learn/assets/push_serviceVar2_input.png)

12. On Send button tap, invoke the sendNotification service variable created above.Enter the text and click on button, push message will be delivered to the devices. 

[![](/learn/assets/push_sendButton.png)](/learn/assets/push_sendButton.png)

13. Create a service variable named UnregisterPush which will call `unregisterDevice` method of `PushService`. 

[![](/learn/assets/push_serviceVar3.png)](/learn/assets/push_serviceVar3.png)

- Bind the input field `deviceId` to `bind:deviceToken`, which is in `app.js`, os to `deviceInfo` variable and `userName` to `loggedInUserName` variable as shown below. 

[![](/learn/assets/push_serviceVar3_input.png)](/learn/assets/push_serviceVar3_input.png)

- On success of `UnregisterPush`, invoke Logout Action. 

[![](/learn/assets/push_serviceVar3_event.png)](/learn/assets/push_serviceVar3_event.png)

14. Add an anchor in mobile navbar, on tap of this link invoke `UnregisterPush` service variable.

[![](/learn/assets/push_UI_anchor.png)](/learn/assets/push_UI_anchor.png)

15. Add a custom plugin in ‘Build for Android’ dialog 

[![](/learn/assets/push_plugin.png)](/learn/assets/push_plugin.png)

- Mention ‘git’ as source, ‘@havesource/cordova-plugin-push’ as plugin name and ‘[https://github.com/wavemaker/phonegap-plugin-push.git#85bd7da](https://github.com/wavemaker/phonegap-plugin-push.git#85bd7da)’ as spec. Then, click **`Add`** button and **`Save`** button.

## App Usage

- The plugin that is mentioned above uses ‘**hook**’ concept of Cordova for Android build. But, Hooks are not supported in `build.phonegap.com`. So, Android builds fail when this plugin is added in `build.phonegap.com`. But, Android app can be built using the using **Build For Android** menu option inside WaveMaker studio or through a manual build. 

[![](/learn/assets/push_build.png)](/learn/assets/push_build.png)

- iOS app can be created either through a manual build or through `build.phonegap.com`. Please make sure that provision profile that is created above (with app id that has push notifications enabled) should be used
- Build and test the app. Login in one device with `user/user credentials`. Login to another device with `admin/admin credentials`. If user sends a message, the other user should get a push notification.

## Conclusion

Our aim is to show how this plugin can be integrated into WaveMaker and how to create push notifications. This integration logic can be used at various places as per your use-case. For complete features of the plugin, please visit the [plugin site](https://github.com/wavemaker/phonegap-plugin-push/blob/master/docs/API.md).

