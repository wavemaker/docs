---
title: "React Native Update - Expo 52 is Here"
author: "Prem Kumar Katta, Abdullah Khan Mohammed"
---

import expo_50_splashscreen from '/learn/assets/react-native/expo_50_splash_screen.png';
import expo_52_splashscreen from '/learn/assets/react-native/expo_52_splash_screen.png';

Expo has rolled out version 52 with a set of features and enhancements aimed at improving developer productivity and app performance. This update addresses critical pain points, introduces new capabilities, and refines existing tools, making it a significant release for mobile app developers. Here's a quick look at what Expo 52 brings to the table and how it compares to version 50.

<!-- truncate -->

### Expo 50 vs. Expo 52: A Quick Comparison

| Feature                          | Expo 50                                     | Expo 52                                     |
|----------------------------------|---------------------------------------------|---------------------------------------------|
| Preview Speed                    | Standard                                    | Significantly faster                        |
| Accessibility IDs for iOS        | Limited support for nested elements         | Fully supported for nested elements         |
| Android Splash Screen with Icon  | Full-screen supported                       | [Full-screen not supported](#splash-screen-enhancements) |
| DevTools                         | Standard                                    | Enhanced                                    |

### New React Native 0.76 Architecture

React Native introduces a stable new architecture with version 0.76. This update resolves long-standing limitations in the interaction between JavaScript and native code.

**Key Advantages of the New Architecture**

| Capability            | Before                                                                                     | Now                                                                                         |
|------------------------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| **Reduced Latency**    | Communication through the bridge involved batched messages and required serializing and deserializing data, creating latency and slowing app responsiveness. | JSI enables direct function calls between JavaScript and native modules, bypassing the need for serialization. This minimizes delays and delivers a more real-time user experience. |
| **Enhanced Performance** | Apps that relied heavily on native modules, such as those with intensive animations or custom native UI components, often experienced lag due to the bridge's inefficiencies in handling frequent data exchanges. | The JSI allows JavaScript to access native C++ objects directly, dramatically improving execution speed for computationally heavy tasks, making apps faster and more reliable. |

- reactnative.directory will give the information about the compatibility of the libraries or any third party packages for the new architecture.
- [Read about the known issues](https://docs.expo.dev/guides/new-architecture/#troubleshooting) to understand what to expect.

---

## What's More with Expo 52?

### Faster Previews for Enhanced Workflow

Enjoy reduced turnaround times when testing changes, which is a boon for iterative development. This improvement ensures that teams can focus more on refining user experiences rather than waiting for builds to load.

**Why it matters**
- Accelerates the development cycle.
- Enhances productivity by minimizing downtime.
- Encourages rapid prototyping and debugging.

### Splash Screen Enhancements

Splash screens have received significant attention in Expo 52. While the update introduces new flexibility and design improvements, there are critical changes developers should be aware of:
- **Android Full-Screen Mode Not Supported with Icons**: Developers planning splash screens with icons in Android full-screen mode will need to adjust their designs. This limitation could impact branding and user experience if not addressed during development.

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

- **Better Splash Screen Customization**: Enhanced tools and options make it easier to align splash screens with branding guidelines.
- Follow Android's up-to-date standards for splash screen design: [Learn More](https://developer.android.com/develop/ui/views/launch/splash-screen).

### Accessibility Improvements

Accessibility takes center stage in Expo 52, addressing limitations that existed in version 50. Notably, accessibility IDs, which were previously unavailable for nested components on iOS, are now supported. This update is a game-changer for developers striving to make their apps more inclusive and compliant with accessibility standards.

:::impact
- Simplifies the process of testing and validating accessibility features.
- Improves the usability of apps for a wider audience.
:::

---

### New Style Props Introduced

- **Box Shadow**: Adds a shadow to an element, with the ability to control the position, color, size, and blurriness of the shadow.
- **Filter**: Adds graphical filters to an element. There is a mix of color filters that allow you to modify brightness, saturation, and hue, as well as non-color filters that let you add blurs and shadows.

:::note
The filter styles should be applied only to Image widget. [Learn more](https://reactnative.dev/blog/2024/10/23/release-0.76-new-architecture#box-shadow-and-filter-style-props).
:::

---

### Improvements in Expo 52

- **Expo Video**: Improved video handling capabilities provide smoother playback and enhanced integration options.
  - **Video Poster**: A poster or thumbnail is displayed on the video until the user starts playing it.
- **Expo Camera**: Now supports enhanced image capture and video recording functionalities.

---

### Debugging Enhancements

- **React Native DevTools**: Updates bring new debugging features, making issue resolution faster and more effective.
- Simplified debugging tools include (console, scripts, and network debugging). Enter "J" to launch the debugger where the app Metro bundler is running.

---

## How to Prepare for Expo 52

- **Library Support for New Architecture**:
    - Check new architecture support for any library incompatibilities in react native zip. Use
    - Run `npx expo-doctor@latest` in expo project to validate incompatible and unmaintained libraries.
- **Plan for Splash Screen Changes**: Revisit your Android splash screen designs to accommodate limitations.

---

### Splash Screen and App Icon Configuration

#### Supported Formats
- Only `.png` images are supported for splash screens in an Expo project; other formats will cause production build failure.

#### Platform-Specific Configuration
- Use `splash.android` for Android-specific settings.
- Use `splash.ios` for iOS-specific settings.

#### App Icon Best Practices
- Icon must be at least 512x512 pixels, in `.png` format, and exactly square.
- For adaptive icons, use `android.adaptiveIcon.foregroundImage` and `android.adaptiveIcon.backgroundColor`.

---

## Deprecations and Limitations

- Push notifications will no longer be supported in Expo Go in SDK 53. In SDK 52, you will be warned when using push notifications-related features from expo-notifications in Expo Go.
- Google Maps will no longer be supported in Expo Go for Android in SDK 53. In SDK 52, you will be warned when using react-native-maps in Expo Go for Android. On iOS, Expo Go only supports Apple Maps. [You can use Google Maps in development builds](https://docs.expo.dev/versions/v52.0.0/sdk/map-view/#deploy-app-with-google-maps). 
- `expo-av` Video API is deprecated, use `expo-video` instead.

---

## Breaking Changes and Deprecations

### Platform Version Upgrades

- **iOS**: Deployment target bumped from 13.4 to iOS 15.1.
- **Android**: 
    - Minimum SDK version increased from 23 to 24
    - Compilation SDK version updated from 34 to 35

---

### Expo Go Limitations

- Push notifications no longer supported in Expo Go
- Google Maps support removed for Android
- Pedometer support dropped for Android
- Expo Go now uses the New Architecture for all apps

---

## Known Issues

- The text area widget's height behaves differently in Expo52 and Expo50. In Expo52, it stays unchanged as if no properties are set, but in Expo50, the height increases. [Reference](https://github.com/facebook/react-native/issues/47942)

- Dashed and dotted borders break when `borderStyle: "dashed" | "dotted"` is combined with `overflow: "hidden"` or `"scroll"`, displaying a solid border instead. They work correctly with `overflow: "visible"` and on Android. [Reference](https://github.com/facebook/react-native/issues/48078)

---

## Upgrade Recommendations

- Update platform dependencies and review breaking changes carefully.
- For CLI - Node v22, Java v17, and `@wavemaker/wm-reactnative-cli@1.8.6`.
- Review and test layout & style changes
- Review new architecture support for libraries used in the app.