---
title: "Disable Screen Capture and Recording"
id: "disable-device-screencapture"
sidebar_label: "Disable Screen Capture"
---
---
import pluginExample from '/learn/assets/ScreeCaptureOnDemand.png';

Restricting screenshots in a mobile app can provide several important benefits. 

Firstly, it helps protect sensitive information that the app may handle, such as personal details, financial data, or private messages. By disabling screenshots, 
unauthorized users are prevented from capturing and potentially misusing this sensitive information. 

Secondly, it safeguards intellectual property by preventing users from easily capturing and distributing proprietary or copyrighted content without permission. 
This is particularly relevant for apps that offer paid content, as it helps prevent content piracy. 

Additionally, disabling screenshots ensures user privacy by preventing accidental or unintentional sharing of sensitive content, conversations, or activities. 
It also helps app developers comply with industry regulations regarding data security and privacy, especially in fields 
like finance or healthcare. 

By implementing measures to protect user data and privacy, such as disabling screenshots, 
app developers can enhance user trust and confidence. It's important to note that disabling screenshots alone is not 
foolproof, so it's crucial to implement other security measures like encryption and secure data handling.

## Expo ScreenCapture Plugin

The [ScreenCapture](https://docs.expo.dev/versions/latest/sdk/screen-capture/) plugin empowers developers by offering granular 
control over screen capture functionality in their apps. By enabling or disabling screenshots programmatically, developers 
can enhance security and privacy. Preventing users from capturing sensitive content, such as confidential data or premium 
resources, safeguards user information and protects intellectual property. With a seamless integration within the Expo ecosystem, 
the ScreenCapture plugin ensures a smooth implementation process.

### Adding ScreenCapture to your WaveMaker React Native App

ScreenCapture plugin can be installed in few steps in WaveMaker. Please refer to this [page](https://docs.wavemaker.com/learn/react-native/third-party-expo-plugins#expo)
on how to install a plugin.

## Integrating ScreenCapture Plugin in React Native App

ScreenCapture plugin can be leveraged in your WaveMaker app through the following ways:

- Enabling and Disabling ScreenCapture on Demand
- Disabling ScreenCapture on App Launch

### Enabling and Disabling ScreenCapture on Demand

Some apps may require the ability to enable or disable screen capture only in certain situations i.e. on demand.
For example, a video streaming app may want to allow screenshots when the user is watching a free video, but disable for
content that requires a paid subscription.

For our example, we will create a simple app that allows users to enable or disable screenshots on click of a button. 
The following is the mockup of the app:

<img src={pluginExample} style={{width:"35%"}} />

The following is the code snippet for the above mockup:

```javascript
const ScreenCapture = require('expo-screen-capture');
/* perform any action on widgets/variables within this block */
Page.onReady = function() {
};

Page.enableCapture = async function($event, widget) {
    await ScreenCapture.allowScreenCaptureAsync();
    Page.Widgets.enable.disabled = true;
    Page.Widgets.disable.disabled = false;
    alert("Screenshot option is enabled");

};
Page.disableCapture = async function($event, widget) {
    await ScreenCapture.preventScreenCaptureAsync();
    Page.Widgets.enable.disabled = false;
    Page.Widgets.disable.disabled = true;
    alert("Screenshot option is disabled");
};
```

### Disabling Screenshots on App Launch

Some apps may require the ability to disable screen capture on app launch. For example, a banking app may want to disable
for all screens to prevent sensitive information from being captured. In such cases, the ScreenCapture plugin can be leveraged
as shown below:

In your WaveMaker project, navigate to the `src/main/webapp/app.js` file and add the following code snippet, which imports the plugin into the app.

```javascript
const ScreenCapture = require('expo-screen-capture');
```

Add the following code snippet to the `onPageReady` function, which disables the ability to capture screenshots and screen recordings while using the app.

```javascript
await ScreenCapture.preventScreenCaptureAsync();
```

Effectively, the `onPageReady` function should look like this:

```javascript
App.onPageReady = async function(activePageName, activePageScope, $activePageEl) {
    await ScreenCapture.preventScreenCaptureAsync();
};
```
