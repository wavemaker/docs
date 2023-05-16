---
title: "React Native - Mobile Manual Build"
id: "mobile-build-manual"
---
---

In application development process, you create iOS Package App Store (IPA) or Android Package Kit (APK) files for developing any mobile application. After the mobile app is developed, creating IPA and APK is necessary for deploying it on the App Store where IPA file is the compressed version of the required files and resources of iOS application. This is created to test the iOS application before it is live. APK file is the similar package file used in Android devices.

With React Native CLI, you can build the APK or IPA on your CI/CD machines easily. You can create APK or IPA on your system from a React Native zip. WaveMaker developers use ```wm-reactnative-cli``` in this manual process. ```wm-reactnative-cli``` combines multiple React Native commands into a single command. Follow the below procedure.

1. Go through the documentation of wm-reactnative-cli. [https://github.com/wavemaker/wm-reactnative-cli](https://github.com/wavemaker/wm-reactnative-cli)
2. Ensure that all the hardware and software required by wm-reactnative-cli are present.
3. As explained below, export and download the react-native zip from WaveMaker studio.
4. Execute wm-react-native command with respective arguments based upon platform (Android or iOS).
5. wm-reactnative-cli will log the destination build folder at the begining. When the build gets completed, wm-reactnative-cli prints out the path at which the built artifact is present.

## See Also

[Export Reactnative zip](/learn/hybrid-mobile/export-react-native-zip)

