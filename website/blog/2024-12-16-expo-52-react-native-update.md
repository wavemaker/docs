---
title: "React Native Update - Expo 52 is Here"
author: "Swetha Kundaram"
---
---

Expo rolled out version 52 with a set of features and enhancements aimed at improving developer productivity and app performance. This update addresses critical pain points, introduces new capabilities, and refines existing tools, making it a significant release for mobile app developers. Here's a detailed look at what Expo 52 brings to the table and how it compares to version 50.

<!-- truncate -->

## React Native 0.76

React Native introduces a stable new architecture with React Native 0.76. This update resolves long-standing limitations in the interaction between JavaScript and native code.

**Key Advantages of the New Architecture**

|Capability|Before|Now|
|---|---|---|
|**Reduced Latency**|Communication through the bridge involved batched messages and required serializing and deserializing data, creating latency and slowing app responsiveness.|JSI enables direct function calls between JavaScript and native modules, bypassing the need for serialization. This minimizes delays and delivers a more real-time user experience.|
|**Enhanced Performance**|Apps that relied heavily on native modules, such as those with intensive animations or custom native UI components, often experienced lag due to the bridge's inefficiencies in handling frequent data exchanges.|The JSI allows JavaScript to access native C++ objects directly, dramatically improving execution speed for computationally heavy tasks, making apps faster and more reliable.|
|**Scalability for Complex Projects**|Managing scalability in large applications was cumbersome because the bridge introduced additional complexity in maintaining communication channels, particularly in projects with high modularity. |The updated architecture simplifies app development and maintenance by providing a more unified and modular design. The direct access between JavaScript and native code enhances flexibility and supports the rapid growth of complex projects.|

## Expo 50 vs. Expo 52: A Quick Comparison

Comparision table

## New Features and Improvements in Expo 52

- Expo 52 introduces several impactful updates that developers should explore:
- Expo - Video: Improved video handling capabilities provide smoother playback and enhanced integration options.
    - Video poster - Poster / Thumbnail given from the studio will be displayed on the video until user starts playing the video
- Expo CLI - Tree Shaking Support: Optimized tree-shaking support reduces bundle sizes and improves app performance.
- React Native DevTools: Updates to React Native DevTools bring new debugging features, making issue resolution faster and more effective.
- Simplified debugging tool includes (console, scripts and network debugging), enter "J" to launch the debugger, where the app metro bundler is running
- Expo Camera: The Expo Camera module now supports more features, including enhanced image capture and video recording functionalities.

### Faster Previews for Enhanced Workflow

Enjoy reduced turnaround times when testing changes, which is a boon for iterative development. This improvement ensures that teams can focus more on refining user experiences rather than waiting for builds to load.

**Why it matters**

- Accelerates the development cycle.
- Enhances productivity by minimizing downtime.
- Encourages rapid prototyping and debugging.

### Splash Screen Enhancements

Splash screens have received significant attention in Expo 52. While the update introduces new flexibility and design improvements, there are critical changes developers should be aware of:

- Android Full-Screen Mode Not Supported with Icons: Developers planning splash screens with icons in Android full-screen mode will need to adjust their designs. This limitation could impact branding and user experience if not addressed during development.
- Better Splash Screen Customization: Enhanced tools and options make it easier to align splash screens with branding guidelines, despite the limitations on Android.
- Following the android up to date standards for the splash screen design https://developer.android.com/develop/ui/views/launch/splash-screen

### Accessibility Improvements

Accessibility takes center stage in Expo 52, addressing limitations that existed in version 50. Notably, accessibility IDs, which were previously unavailable for nested components on iOS, are now supported. This update is a game-changer for developers striving to make their apps more inclusive and compliant with accessibility standards.

Impact:

- Ensures better support for assistive technologies.
- Simplifies the process of testing and validating accessibility features.
- Improves the usability of apps for a wider audience.

### New Style props introduced

https://reactnative.dev/blog/2024/10/23/release-0.76-new-architecture#box-shadow-and-filter-style-props

- **Box shadow** : BoxShadow adds a shadow to an element, with the ability to control the position, color, size, and blurriness of the shadow. 
- **Filter** : Filter adds certain graphical filters to an element. There are a mix of color filters that let you modify things like brightness, saturation, and hue as well as non-color filters that let you add blurs and shadows. 

## How to Prepare for Expo 52

To make the most of this update, here are some tips for developers:

- Plan for Splash Screen Changes: Revisit your Android splash screen designs to accommodate the lack of full-screen support with icons.
- Leverage Faster Previews: Incorporate more frequent testing into your workflow to benefit from the reduced preview times.
- Enhance Accessibility: Take advantage of the improved accessibility ID support to make your app more inclusive.
- Explore New Features: Dive into the updates to Expo Camera, Video for improved capabilities.
- Optimize for Performance: Utilize the tree-shaking support to reduce bundle sizes and improve rendering.

### New Architecture Goes Mainstream

**Why it matters**

- In SDK 52, the New Architecture will be enabled by default
- Developers will need to opt out if they want to continue using the old architecture
- A future release in 2025 may completely remove support for the old architecture

#### Min supported versions

- iOS deployment target (minimum supported version) is iOS 15.1. This mirrors the minimum version of iOS that is required by React Native 0.76.
- Android `minSdkVersion` and `compileSdkVersion` are 24 and  35 respectively. This mirrors changes from React Native.

#### Deprecations and Limitations

- Push notifications (remote notifications) will no longer be supported in Expo Go in SDK 53. In SDK 52, you will be warned when using push notifications-related features from expo-notifications in Expo Go. 
- Google Maps will no longer be supported in Expo Go for Android in SDK 53. In SDK 52, you will be warned when using react-native-maps in Expo Go for Android. On iOS, Expo Go only supports Apple Maps. You can use Google Maps in development builds. 
- `expo-av` Video API is deprecated, use `expo-video` instead.
- `expo-barcode-scanner` has been removed.



