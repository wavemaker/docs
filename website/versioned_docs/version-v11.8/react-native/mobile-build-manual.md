---
title: "React Native - Mobile Build using the command line or for integrating with automated build tools"
id: "mobile-build-manual"
sidebar_label: "Manual Build"
---
---

To build the mobile app so that it can be listed on the app stores, you can run the build commands provided by the WaveMaker React Native CLI in your local environment. This build process is used when,

- You want to use Continuous Integration and Continuous Deployment (CI/CD) pipeline for building the mobile application.
- WaveMaker Enterprise Users want to use CLi to build artifacts as they do not have access to [AppChef](https://docs.wavemaker.com/learn/react-native/build-installers).
- You do not want to use certificates in Appchef to build the artifacts. To know more about certificates in AppChef, see [Build Configuration using AppChef](https://docs.wavemaker.com/learn/hybrid-mobile/mobile-build-appchef#configure-build).

:::note
CI/CD pipeline includes practices and tools used to automate the processes of building, testing, and deploying software applications.
:::

In general, WaveMaker Studio builds the iOS Package App Store (IPA) and Android Package Kit (APK) files online using our cloud infrastructure namely [AppChef](https://docs.wavemaker.com/learn/react-native/build-installers) and the process outlined in this document is for teams that want to implement a CI/CD pipeline themselves.

## IPA and APK Files

After the application development, the files are compiled to generate IPA and APK files, used to deploy the application in App Store.

IPA and APK files contain the application source binary, assets, resources, and all other information about the application. These are used to distribute and install the application on iOS and Android devices respectively.

## How to use React Native CLI in Build Process

WaveMaker developers use `wm-reactnative-cli` in this process where `wm-reactnative-cli` combines multiple React Native commands into a single command. Follow the below procedure.

1. Ensure that the hardware and software required by `wm-reactnative-cli` are available. To find the list of requirements, see [https://github.com/wavemaker/wm-reactnative-cli](https://github.com/wavemaker/wm-reactnative-cli)

:::note

The commands available in [https://github.com/wavemaker/wm-reactnative-cli](https://github.com/wavemaker/wm-reactnative-cli) change now and then with respect to the updates in the product.

:::

2. [Export React Native zip](https://docs.wavemaker.com/learn/react-native/export-react-native-zip) from WaveMaker Studio. This zip file helps store the React Native studio project in your local environment and is used to build the IPA or APK files.


## Android

While using the build process for the Android platform, an APK file is generated.

### Build Commands to Generate APK File

1. Execute the `wm-react-native` command with Android platform-related arguments. To find the commands and examples, see [https://github.com/wavemaker/wm-reactnative-cli](https://github.com/wavemaker/wm-reactnative-cli).

For example, use the following commands:

#### To Build the App for Debugging

If the build is for Debugging, the application can be tested further before deployment.

```
wm-reactnative build android "/path/to/src"
```

#### To Build For Production

If the build is for Production, the application cannot be further tested and is directly deployed.

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

`wm-reactnative-cli` command prints the destination build folder at the beginning of build logs. 

[![](/learn/assets/reactnative-command-destination-folder.png)](/learn/assets/reactnative-command-destination-folder.png)

When the build gets completed, `wm-reactnative-cli` prints out the path at which the generated APK is present.

[![](/learn/assets/reactnative-command-final-file.png)](/learn/assets/reactnative-command-final-file.png)


## iOS

While using the build process for the iOS platform, an IPA file is generated.

### Build Commands to Generate IPA File

1. Execute the `wm-react-native` command with iOS platform-related arguments. To find the commands and examples, see [https://github.com/wavemaker/wm-reactnative-cli](https://github.com/wavemaker/wm-reactnative-cli).

For example, use the following commands:

#### To Build For Production

If the build is for Production, the application cannot be further tested and is directly deployed.

```
wm-reactnative build ios "/path/to/src" \
--iCertificate="/path/to/distribution.p12" \
--iCertificatePassword="unlock_password" \
--iProvisioningFile="/path/to/profile.mobileprovision" \
--iCodeSigningIdentity="certificate name in keychain access" \
--buildType="production"
```


`wm-reactnative-cli` command prints the destination build folder at the beginning of build logs.

[![](/learn/assets/reactnative-command-destination-folder-ios.png)](/learn/assets/reactnative-command-destination-folder-ios.png)

When the build gets completed, `wm-reactnative-cli` prints out the path at which the generated IPA is present.

[![](/learn/assets/reactnative-command-final-file-ios.png)](/learn/assets/reactnative-command-final-file-ios.png)
