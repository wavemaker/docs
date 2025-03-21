---
title: "React Native Update - Expo 52 is Here"
author: "Prem Kumar Katta, Abdullah Khan Mohammed"
---

import expo_50_splashscreen from '/learn/assets/react-native/expo_50_splash_screen.png';
import expo_52_splashscreen from '/learn/assets/react-native/expo_52_splash_screen.png';
import expo_52_filter from '/learn/assets/react-native/expo_52_filter.png';

---

Expo has rolled out version 52 with a set of features and enhancements aimed at improving developer productivity and app performance. This update addresses critical pain points, introduces new capabilities, and refines existing tools, making it a significant release for mobile app developers. Here's a quick look at what Expo 52 brings to the table and how it compares to version 50.

This upgrade stabilizes the platform to support the latest up-to-date Expo 52 features, minimizing the gaps between the Expo and WaveMaker platforms and improving the development experience with enhanced tools and support.

<!-- truncate -->

##  Expo 50 vs. Expo 52: A Quick Comparison

| Feature                          | Expo 50                                     | Expo 52                                     |
|----------------------------------|---------------------------------------------|---------------------------------------------|
| Accessibility IDs for iOS        | Limited support for nested elements         | [Fully supported for nested elements](#accessibility-improvements)         |
| Android Splash Screen with Image  | Full-screen supported                       | [Full-screen not supported](#splash-screen) |
| DevTools                         | Standard                                    | [Enhanced](#debugging-enhancements)                                  |

## 1. New React Native 0.76 Architecture

With Expo 52, new architecture support is available with the flag in:

> **`app.json`**: `"newArchEnabled": true `. 
 
The New Architecture is a rewrite of the internals of React Native to enable app developers to develop high quality native applications using React. For more information refer : https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here

- reactnative.directory will give the information about the compatibility of the libraries or any third party packages for the new architecture.
- [Read about the known issues](https://docs.expo.dev/guides/new-architecture/#troubleshooting) to understand what to expect.

## 2. What's More with Expo 52?

### Accessibility Improvements

Accessibility takes center stage in Expo 52, addressing limitations that existed in version 50. Notably, accessibility IDs, which were previously unavailable for nested components on iOS, are now supported. This update is a game-changer for developers striving to make their apps more inclusive and compliant with accessibility standards.

:::impact
Simplifies the process of automation testing via accessibility id in iOS.
:::

 ***Expo 50 Accessibility***
[![Expo 50 Accessibility](/learn/assets/react-native/expo_50_accessibility.png)](/learn/assets/react-native/expo_50_accessibility.png)

> In Expo 50, when attempting to access individual elements using Appium, the elements were grouped together, making it difficult to interact with them individually.

 ***Expo 52 Accessibility***
[![Expo 52 Accessibility](/learn/assets/react-native/expo_52_accessibility.png)](/learn/assets/react-native/expo_52_accessibility.png)

> In Expo 52, the issue has been resolved, allowing Appium to access and interact with individual elements seamlessly.

---

### New Style Props Introduced

- **Filter**: Adds graphical filters to an element. There is a mix of color filters that allow you to modify brightness, saturation, and hue, as well as non-color filters that let you add blurs and shadows.

  ```css
  .filter.app-picture {
      filter: saturate(0.5) grayscale(0.25);
  }
  ```
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <figure style={{ textAlign: 'center', margin:0 }}>
    <img src={expo_52_filter} style={{ width: 300}} alt="Expo 52 Filter" />
    <figcaption>Expo 52 Filter</figcaption>
  </figure>
</div>

:::note
The filter styles should be applied only to Image widget. [Learn more](https://reactnative.dev/blog/2024/10/23/release-0.76-new-architecture#box-shadow-and-filter-style-props).
:::

---

### Debugging Enhancements

#### React Native DevTools

- This is an enhancement and different tool to the react devtools, new default debugging experience from the react native 0.76 and Expo SDK 52.

- Brings new debugging features, making issue resolution faster and more effective.

- Simplified debugging tools include (console, scripts, and network debugging). Enter "J" to launch the debugger where the app Metro bundler is running (for the mobile debugging). Will open this tool for debugging.

- For more information refer : https://reactnative.dev/blog/2024/10/23/release-0.76-new-architecture#react-native-devtools

---

### Splash Screen

Splash screens have received significant attention in Expo 52. While the update introduces new flexibility and design improvements, there are critical changes developers should be aware of:

- **Android Full-Screen Mode Not Supported with Images**: Developers planning splash screens with images in Android full-screen mode will need to adjust their designs. This limitation could impact branding and user experience if not addressed during development.

<div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
  <figure style={{ textAlign: 'center', margin:0 }}>
    <img src={expo_50_splashscreen} style={{ width: 300}} alt="Expo 50 Splashscreen" />
    <figcaption>Expo 50 Splash Screen</figcaption>
  </figure>
  <figure style={{ textAlign: 'center', margin:0 }}>
    <img src={expo_52_splashscreen} style={{ width: 300}} alt="Expo 52 Splashscreen" />
    <figcaption>Expo 52 Splash Screen</figcaption>
  </figure>
</div>

- Full screen splash image in android is not supported from expo 52 and recommended way is using splash screen with icon as shown above expo 52 image reference.

- Follow Android's up-to-date standards for splash screen design: [Learn More](https://developer.android.com/develop/ui/views/launch/splash-screen).

#### Splash Screen Configuration

Starting expo 52, using expo-splash-screen config plugin is recommended because using a full screen splash image on Android 12+ for Android is outdated. See `expo-splash-screen` [reference](https://docs.expo.dev/versions/latest/sdk/splash-screen/#configuration) on how to use the config plugin and for up-to-date information.

---

### Fixes
  - Video widget (expo-video) fix for support of video poster: A poster or thumbnail is displayed on the video until the user starts playing it.

---

## 3. How to Prepare for Expo 52

### Library Support

  - Check new architecture support for any library incompatibilities in react native zip.
  - Run `npx expo-doctor@latest` in Expo project to validate incompatible and unmaintained libraries.
- **Plan for Splash Screen Changes**: Revisit your Android splash screen designs to accommodate limitations.

### Breaking Changes, Deprecations and Limitations

#### Platform Version Upgrades

- **iOS**: Deployment target bumped from 13.4 to iOS 15.1.
- **Android**: 
    - Minimum SDK version increased from 23 to 24
    - Compilation SDK version updated from 34 to 35

#### Expo Go Limitations

- Push notifications will no longer be supported in Expo Go in SDK 53. In SDK 52, you will be warned when using push notifications-related features from expo-notifications in Expo Go.
- Google Maps will no longer be supported in Expo Go for Android in SDK 53. In SDK 52, you will be warned when using react-native-maps in Expo Go for Android. On iOS, Expo Go only supports Apple Maps. [You can use Google Maps in development builds](https://docs.expo.dev/versions/v52.0.0/sdk/map-view/#deploy-app-with-google-maps). 
- Pedometer support dropped for Android
- Expo Go now uses the New Architecture for all apps

#### Unsupported Plugins from Expo 52.

The following plugins support has been removed from the Expo SDK 52.
- `expo-ads-admob`
- `expo-analytics-amplitude`
- `expo-app-loading`
- `expo-branch`
- `expo-error-recovery`
- `expo-facebook`
- `expo-ads-faceboo`
- `expo-firebase-analytics`
- `expo-firebase-core`
- `expo-firebase-recaptcha`
- `expo-in-app-purchases`
- `expo-notification`
- `expo-random`
- `expo-sqlite`
- `expo-analytics-segment`
- `react-native-shared-element`

### Known Issues

- The text area widget's height behaves differently in Expo52 and Expo50. In Expo52, it stays unchanged as if no properties are set, but in Expo50, the height increases. [Reference](https://github.com/facebook/react-native/issues/47942)

- Dashed and dotted borders break when `borderStyle: "dashed" | "dotted"` is combined with `overflow: "hidden"` or `"scroll"`, displaying a solid border instead. They work correctly with `overflow: "visible"` and on Android. [Reference](https://github.com/facebook/react-native/issues/48078)

- **RTL breaking changes** : 
  - RTL might not work as expected in Expo preview
  - When RTL is enabled in iOS, it requires manual app restart to apply the RTL changes.

- **Layout breaking changes**:  
  - Previously, when working with margin, padding, or border, React Native flipped **left to right** and **right to lift**; similarly, **start to end** and **end to start** edges , set on a row-reverse container. Now, behavior of these properties lines up with web. 
  - To prevent from the breaking changes,  set the flag:  
      **`revertLayoutToExpo50` to true in `wm_rn_config.json`**.   
      [Reference](https://reactnative.dev/blog/2024/04/22/release-0.74#new-layout-behaviors)

---

## 4. Upgrade Recommendations

- Update platform dependencies and review breaking changes carefully.
- For CLI recommendations - Node v22, Java v17, and `@wavemaker/wm-reactnative-cli@1.8.6`.
- Review and test layout & style changes
- Review new architecture support for libraries used in the app. Run `npx expo-doctor@latest` in Expo project to validate the compatibility and packages to support new architecture.