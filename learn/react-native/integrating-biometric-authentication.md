---
title: "Integrating Biometric Authentication"
id: "integrating-biometric-authentication"
sidebar_label: "Biometric Authentication"
---
---
Embracing biometric authentication in mobile apps, such as facial recognition and fingerprint scanning, is an investment in robust security and user convenience. Biometric offers superior security, reducing the risk of breaches, and eliminating the hassle of remembering passwords. A streamlined authentication process contributes to a seamless user experience, fostering trust and enhancing user retention. 

While implementing, privacy concerns must be addressed responsibly. Despite these challenges, biometrics has redefined digital security standards in the mobile realm, making it a preferred choice for many applications in our ever-evolving digital landscape.

## Expo LocalAuthentication Plugin

Expo's [LocalAuthentication](https://docs.expo.io/versions/latest/sdk/local-authentication/) plugin provides an API to authenticate with the device's local authentication hardware, such as Touch ID, Face ID, or the Fingerprint API in both Android and iOS.
This plugin can also be used to determine whether biometric hardware is available on the device, if biometric records are enrolled, and to authenticate users using the available biometrics.
The following are key features of the LocalAuthentication plugin:

- Check if the hardware supports biometric authentication.
- Determine if the user has set up biometric authentication.
- Authenticate the user with biometric authentication.

### Adding LocalAuthentication to React Native App

The **LocalAuthentication** plugin can be installed in a few steps in WaveMaker. Please refer to this [page](https://docs.wavemaker.com/learn/react-native/third-party-expo-plugins#expo) on how to install a plugin.

Once the plugin is added, you'll be seeing something similar to this on your screen.

![LocalAuthentication](/learn/assets/install-localauth.png)

## List Supported Local Authentication

LocalAuthentication plugin provides an API `supportedAuthenticationTypeAsync()` to list supported authentication types available in a device.
This API returns a promise that resolves to an array of strings, each of which is a constant defined in the [`AuthenticationType`](https://docs.expo.dev/versions/latest/sdk/local-authentication/#authenticationtype) enum.

## Invoke Local Authentication

The `authenticateAsync()` API is used to invoke any local authentication. This API returns a promise that resolves to a boolean value indicating whether or not the authentication was successful.

```javascript
Page.authenticateTap = async function($event, widget) {
    var result = '';
    try {
        const results = await LocalAuthentication.authenticateAsync();
        if (results.success) {
            Page.msgerror = false;
            result = 'Successfully authenticated';
        } else if (results.error === 'unknown') {
            Page.msgerror = true;
            result = 'Biometric authentication has been disabled';
        } else if (
            results.error === 'user_cancel' ||
            results.error === 'system_cancel' ||
            results.error === 'app_cancel'
        ) {
            Page.msgerror = true;
            result = 'Authentication process has been cancelled';
        } else if (results.error === 'not_available') {
            Page.msg_error = true;
            result = 'BioMetric Authentication is not enabled';
        }
    } catch (error) {
        Page.msgerror = true;
        result = 'There was an error in authentication';
    }
    Page.Widgets.message.show = true;
    Page.Widgets.resetauth.show = true;
    Page.Widgets.authenticate.show = false;
    Page.Widgets.message.caption = result;
    Page.refresh();
};
```

## Invoke only Biometric Authentication 

We can restrict the authentication to only biometric authentication by passing the [`options`](https://docs.expo.dev/versions/latest/sdk/local-authentication/#localauthenticationauthenticateasyncoptions) parameter to the `authenticateAsync()` API.

- `disableDeviceFallback` -- If set to true, the user will be unable to authenticate with biometrics (Touch ID or Face ID) and will be asked for their passcode instead. Defaults to false.
- `requireConfirmation` -- Whether to show a dialog after successful biometric authentication. Defaults to true on Android.

:::note
`requireConfirmation` applies to Android only, and the default value sets to true.
:::

The following code snippet shows how to invoke only biometric authentication.

```javascript
Page.authwithbiomatricTap = async function($event, widget) {
    var result = '';
    try {
        const results = await LocalAuthentication.authenticateAsync({
            disableDeviceFallback: true,
            requireConfirmation: false,
            cancelLabel: 'cancel',
            promptMessage: 'Authenticate with Biometric',
        });
        if (results.success) {
            Page.msg_error = false;
            result = 'Successfully authenticated';
        } else if (results.error === 'unknown') {
            Page.msg_error = true;
            result = 'Biometric authentication has been disabled';
        } else if (
            results.error === 'user_cancel' ||
            results.error === 'system_cancel' ||
            results.error === 'app_cancel'
        ) {
            Page.msg_error = true;
            result = 'Authentication process has been cancelled';
        } else if (results.error === 'not_available') {
            Page.msg_error = true;
            result = 'BioMetric Authentication is not enabled';
        }
    } catch (error) {
        Page.msg_error = true;
        result = 'There was an error in authentication';
    }

    Page.Widgets.message.show = true;
    Page.Widgets.resetauth.show = true;
    Page.Widgets.authwithbiomatric.show = false;
    Page.Widgets.message.caption = result;
    Page.refresh();
};
```
