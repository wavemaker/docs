---
title: "React Native - Mobile Manual Build"
id: "mobile-build-manual"
sidebar id: "mobile-build-manual"
---
---

In the manual build process using React Native Command Line Interface (CLI), you can generate the WaveMaker studio project in the local environment where additional customization and debugging of project code can be performed. The React Native CLI commands are also used to preview the application.

## How to use React Native CLI in Build Process

WaveMaker developers use `wm-reactnative-cli` in this manual process where `wm-reactnative-cli` combines multiple React Native commands into a single command. Follow the below procedure.

1. Ensure that the hardware and software required by `wm-reactnative-cli` are available. To find the list of requirements, see [https://github.com/wavemaker/wm-reactnative-cli](https://github.com/wavemaker/wm-reactnative-cli)

:::note

The commands available in [https://github.com/wavemaker/wm-reactnative-cli](https://github.com/wavemaker/wm-reactnative-cli) change now and then with respect to the updates in the product.

:::

2. [Export React Native zip](/learn/hybrid-mobile/export-react-native-zip) from WaveMaker Studio. This zip file helps store the React Native studio project in your local environment and is used to build the IPA or APK files.

## Generating IPA and APK Files

### IPA and APK Files

After the code customization, the files are compiled to generate iOS Package App Store (IPA) and Android Package Kit (APK) files, used to deploy the application in App Store.

IPA and APK files contain the application source code, assets, resources, and all other information about the application. These are used to distribute and install the application on iOS and Android devices respectively.

### Build Commands

Different set of commands are available to build in Android and iOS platforms. 

1. Execute `wm-react-native` command with respective arguments based on the platform (Android or iOS).This step decides the purpose of the build i.e., Production or Debug. To find the commands and examples, see [https://github.com/wavemaker/wm-reactnative-cli](https://github.com/wavemaker/wm-reactnative-cli).

:::note

If the build is for Production, the application cannot be further tested and is directly deployed. In case the build is for Debugging, the application can be tested further before deployment.

:::

Following are the commands to build w.r.t. platform.

**Android Platform:**

For example, in the case of an Android application, use the following commands:

### To Build For Debug

```
wm-reactnative build android "/path/to/src"
```

### To Build For Production

```
wm-reactnative build android "/path/to/src" \
--dest="/path/to/dest" \
--aKeyStore="/path/to/file.keystore" \
--aStorePassword="store_password" \
--aKeyAlias="key_alias_name" \
--aKeyPassword="key" \
--buildType="production"
--auto-eject=true
```

**iOS Platform:**

For example, in the case of an iOS application, use the following commands:

### To Build For Debug

```
wm-reactnative build iOS "/path/to/src"
```

### To Build For Production

```
wm-reactnative build ios "/path/to/src" \
--iCertificate="/path/to/distribution.p12" \
--iCertificatePassword="unlock_password" \
--iProvisioningFile="/path/to/profile.mobileprovision" \
--iCodeSigningIdentity="certificate name in keychain access" \
--buildType="production"
```

2. `wm-reactnative-cli` will log the destination build folder at the beginning. When the build gets completed, `wm-reactnative-cli` prints out the path at which the built artifact is present.

:::note
IPA and APK files are the generated artifacts.
:::
