---
title: "Detect Rooted Device"
id: "detect-rooted-device"
sidebar_label: "Detect Rooted Device"
---
---
import pluginExample from '/learn/assets/RootedDeviceOnDemand.png';

Detecting jailbroken or rooted devices offers significant advantages across security, enterprise management, and app development. By identifying these modified devices, developers can implement enhanced security measures, effectively mitigating potential risks such as malware infections and unauthorized access to sensitive information.

Furthermore, detecting jailbroken or rooted devices plays a vital role in preventing cheating and unauthorized activities within mobile games and applications. This safeguards fair play and helps protect app revenues by countering manipulations, bypassing in-app purchases, and other forms of cheating.

In the enterprise context, the identification of jailbroken or rooted devices is crucial for maintaining a secure environment. These devices pose risks to corporate networks and data integrity. By detecting and addressing them, organisations can enforce security policies, ensuring that sensitive resources remain protected and reducing the likelihood of breaches.


## Expo Device Plugin

The Expo [Device](https://docs.expo.dev/versions/latest/sdk/device) plugin offers a straightforward way to check if a device is rooted or jailbroken. By utilizing the Expo device plugin, developers can access device-specific information, including the device's rooted or jailbroken status.

The plugin provides a boolean property called isDeviceRooted or isDeviceJailbroken, depending on the platform. By checking the value of this property, developers can determine whether the device running their Expo app is rooted or jailbroken.

The Expo device plugin's rooted/jailbreak detection functionality can be helpful for implementing specific behaviours or security measures based on the device's modified status. For example, developers might choose to limit certain functionalities or display warnings when the app is running on a rooted or jailbroken device

> **_NOTE:_** This method is experimental and is not completely reliable. See description below.

Checks whether the device has been rooted (Android) or jailbroken (iOS). This is not completely reliable because there exist solutions to bypass root-detection on both iOS and Android. Further, many root-detection checks can be bypassed via reverse engineering.

- On Android, it's implemented in a way to find all possible files paths that contain the "su" executable but some devices that are not rooted may also have this executable. Therefore, there's no guarantee that this method will always return correctly.

- On iOS, these jailbreak checks are used to detect if a device is rooted/jailbroken. However, since there are closed-sourced solutions such as xCon that aim to hook every known method and function responsible for informing an application of a jailbroken device, this method may not reliably detect devices that have xCon or similar packages installed

### Adding ExpoDevice Plugin to your WaveMaker React Native App

ExpoDevice plugin can be installed in few steps in WaveMaker. Please refer to this [page](https://docs.wavemaker.com/learn/react-native/third-party-expo-plugins#expo)
on how to install a plugin.

## Integrating ExpoDevice plugin in React Native app

ExpoDevice plugin can be leveraged in your WaveMaker app through the following ways:

- Detect device is rooted or not on demand
- Disabling ScreenCapture on App Launch

### Detect device is rooted or not on demand

Some apps may require the ability to detect whether a device is rooted or not only in certain situations i.e. on demand. For example, if your app includes security-sensitive features, such as encrypted storage, secure communication, or digital rights management, it may be necessary to verify that the device is not rooted to maintain the integrity and effectiveness of those features.

For our example, we will create a simple app to check whether a device is rooted or not on click of a button. 
The following is the mockup of the app:

<img src={pluginExample} style={{width:"35%"}} />

The following is the code snippet for the above mockup:

```javascript
const Device = require('expo-device')
/* perform any action on widgets/variables within this block */
Page.onReady = function() {
};

Page.checkDeviceRootedTap = async function($event, widget) {
    const device = await Device.isRootedExperimentalAsync();
    if (device) {
        alert('Your device is rooted');
    } else {
        alert('Your device is Not rooted');
    }
};

```

### Detect device is rooted or not on app launch

Rooted devices are not safe for banking apps. Because banking apps include security sensetive features such as encrypted storage, secure communication, or digital rights management  . In such cases, we can use the ExpoDevice plugin to detect whether the device is rooted or not upon app launch.

In your WaveMaker project, navigate to the `src/main/webapp/app.js` file and add the following code snippet, which imports the plugin into the app.

```javascript
const ReactNative = require("react-native");
const Device = require('expo-device')
```

Add the following code snippet to the `onPageReady` function, Here Closing the app if the ExpoDevice plugin detects a rooted device.

```javascript
const device = await Device.isRootedExperimentalAsync();
if (device) {
    React.BackHandler.exitApp();
}
```

Effectively, the `onPageReady` function should look like this:

```javascript
App.onPageReady = async function(activePageName, activePageScope, $activePageEl) {
  setTimeout(async function() {
      const device = await Device.isRootedExperimentalAsync();
      if (device) {
          React.BackHandler.exitApp();
      }
  }, 300);
};
```
