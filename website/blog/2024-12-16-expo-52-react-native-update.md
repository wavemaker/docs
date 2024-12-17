---
title: "React Native Update - Expo 52 is Here"
author: "Prem Kumar Katta"
---
---

Expo rolled out version 52 with a set of features and enhancements aimed at improving developer productivity and app performance. This update addresses critical pain points, introduces new capabilities, and refines existing tools, making it a significant release for mobile app developers. Here's a quick look at what Expo 52 brings to the table and how it compares to version 50.

<!-- truncate -->

### Expo 50 vs. Expo 52: A Quick Comparison

|Feature|Expo 50|Expo 52|
|---|---|---|
|Preview Speed|Standard|Significantly faster|
|API Generation|Standard setup|Streamlined and faster|
|Accessibility IDs for iOS|Limited support for nested elements|Fully supported for nested elements|
|Android Splash Screen with Icon|Full-screen supported|Full-screen not supported|
|Video Handling | Basic | Improved |
|DevTools | Standard| Enhanced |
|Camera Features|Basic|Improved|

### New React Native 0.76 Architecture

React Native introduces a stable new architecture with React Native 0.76. This update resolves long-standing limitations in the interaction between JavaScript and native code.

**Key Advantages of the New Architecture**

|Capability|Before|Now|
|---|---|---|
|**Reduced Latency**|Communication through the bridge involved batched messages and required serializing and deserializing data, creating latency and slowing app responsiveness.|JSI enables direct function calls between JavaScript and native modules, bypassing the need for serialization. This minimizes delays and delivers a more real-time user experience.|
|**Enhanced Performance**|Apps that relied heavily on native modules, such as those with intensive animations or custom native UI components, often experienced lag due to the bridge's inefficiencies in handling frequent data exchanges.|The JSI allows JavaScript to access native C++ objects directly, dramatically improving execution speed for computationally heavy tasks, making apps faster and more reliable.|
|**Scalability for Complex Projects**|Managing scalability in large applications was cumbersome because the bridge introduced additional complexity in maintaining communication channels, particularly in projects with high modularity. |The updated architecture simplifies app development and maintenance by providing a more unified and modular design. The direct access between JavaScript and native code enhances flexibility and supports the rapid growth of complex projects.|

## What's More with Expo 52?

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

### New Style Props Introduced

https://reactnative.dev/blog/2024/10/23/release-0.76-new-architecture#box-shadow-and-filter-style-props

- **Box shadow** : BoxShadow adds a shadow to an element, with the ability to control the position, color, size, and blurriness of the shadow. 
- **Filter** : Filter adds certain graphical filters to an element. There are a mix of color filters that let you modify things like brightness, saturation, and hue as well as non-color filters that let you add blurs and shadows. 

### Improvements in Expo 52

Expo 52 introduces several impactful updates that developers should explore:

- Expo - Video: Improved video handling capabilities provide smoother playback and enhanced integration options.
    - Video poster - Poster / Thumbnail given from the studio will be displayed on the video until user starts playing the video
- Expo CLI - Tree Shaking Support: Optimized tree-shaking support reduces bundle sizes and improves app performance.
- React Native DevTools: Updates to React Native DevTools bring new debugging features, making issue resolution faster and more effective.
- Simplified debugging tool includes (console, scripts and network debugging), enter "J" to launch the debugger, where the app metro bundler is running
- Expo Camera: The Expo Camera module now supports more features, including enhanced image capture and video recording functionalities.


## How to Prepare for Expo 52

To make the most of this update, here are some tips for developers:

- Plan for Splash Screen Changes: Revisit your Android splash screen designs to accommodate the lack of full-screen support with icons.
- Leverage Faster Previews: Incorporate more frequent testing into your workflow to benefit from the reduced preview times.
- Enhance Accessibility: Take advantage of the improved accessibility ID support to make your app more inclusive.
- Explore New Features: Dive into the updates to Expo Camera, Video for improved capabilities.
- Optimize for Performance: Utilize the tree-shaking support to reduce bundle sizes and improve rendering.

### New Architecture Goes Mainstream

- Expo 52 is coming with the new Architecture, which is from react native 0.76 version (enabled by default). The New Architecture is a complete rewrite of the major systems that underpin React Native, including how components are rendered, how JavaScript abstractions communicates with native abstractions, and how work is scheduled across different threads.
- reactnative.directory will give the information about the compatibility of the libraries or any third party packages for the new architecture.
- [Read about the known issues](https://docs.expo.dev/guides/new-architecture/#troubleshooting) to get an idea of what might expect.

**Why it matters**

- In SDK 52, the New Architecture will be enabled by default
- Developers will need to opt out if they want to continue using the old architecture
- A future release in 2025 may completely remove support for the old architecture

#### Min supported versions

- iOS deployment target (minimum supported version) is iOS 15.1. This mirrors the minimum version of iOS that is required by React Native 0.76.
- Android `minSdkVersion` and `compileSdkVersion` are 24 and  35 respectively. This mirrors changes from React Native.

#### Deprecations and Limitations

- Push notifications (remote notifications) will no longer be supported in Expo Go in SDK 53. In SDK 52, you will be warned when using push notifications-related features from expo-notifications in Expo Go. 
- Google Maps will no longer be supported in Expo Go for Android in SDK 53. In SDK 52, you will be warned when using react-native-maps in Expo Go for Android. On iOS, Expo Go only supports Apple Maps. [You can use Google Maps in development builds](https://docs.expo.dev/versions/v52.0.0/sdk/map-view/#deploy-app-with-google-maps). 
- `expo-av` Video API is deprecated, use `expo-video` instead.
- `expo-barcode-scanner` has been removed.

## Breaking Changes

### Correct Handling of Logical Edges in Row-reverse Containers

- From Yoga 3.0 (react native 0.74+ / expo51+) layout changes with flex direction row reverse is aligned with web standards. 
- Yoga would previously incorrectly reverse start and end edges, when operating on:
- The padding, border, or margin of a row-reverse container
- The position, of the child of a row-reverse container
- These changes impacts on the RTL changes or in the flex layout where flex direction is handled with row reverese and nested childrens used margin, paddings, start or end properties.

For more information, see [New Layout Behaviours](https://reactnative.dev/blog/2024/04/22/release-0.74#new-layout-behaviors).

### Platform Version Upgrades

- iOS deployment target bumped from 13.4 to iOS 15.1
- Android:
    - Minimum SDK version increased from 23 to 24
    - Compilation SDK version updated from 34 to 35

## Development and Performance Improvements

### Metro and Build Enhancements

- Fast resolving enabled by default across all platforms
- Up to 15x faster resolution
- Experimental universal Tree Shaking support
- Automatic removal of unused ESM imports and exports
- Improved monorepo support, including automatic configuration for pnpm


### New Development Features

- React Native DevTools replaces JavaScript debugger

```
<!-- - New event APIs: `useEvent` and `useEventListener` -->
<!-- - Added `OnUserLeavesActivity` event for Android lifecycle -->
<!-- - Ability to customize root view through `ExpoAppDelegateSubscriberProtocol` -->
```

## Breaking Changes and Deprecations


### Expo Go Limitations
- Push notifications no longer supported in Expo Go
- Google Maps support removed for Android
- Pedometer support dropped for Android
- Expo Go now uses the New Architecture for all apps


### Removed Components
- `expo-camera/legacy` removed
- `expo-barcode-scanner` functionality now handled by `expo-camera`
- `create-react-native-app` no longer supported


### API Changes
- `expo-av` Video API deprecated in favor of `expo-video`
- React state set functions will no longer execute synchronously with New Architecture
- Expo notifications trigger types modified


### Layout Changes
- From Yoga 3.0 (react native 0.74+ / expo51+) layout changes with flex direction row reverse is aligned with web standards.
Yoga would previously incorrectly reverse start and end edges, when operating on below.
- The padding, border, or margin of a row-reverse container, the position of the child of a row-reverse container.
- These changes impacts on the RTL changes or in the flex layout where flex direction is handled with row reverese and nested childrens used margin, paddings, start or end properties.

## Library Changes


### New and Updated Libraries

- Stable release of `expo-video`

Beta releases

- `expo-audio`
- `expo-file-system/next`
- `expo-live-photo` (iOS-only)
- `expo-image` v2 with new image loading API

- `expo-image-manipulator` offers new object-oriented API
- `expo-sqlite/kv-store` provides key/value storage
- `expo/fetch` introduces WinterCG-compliant Fetch API with download streaming -->

## Miscellaneous Updates

### Layout and Design

Improved edge-to-edge layout support for Android

- Box shadow : BoxShadow adds a shadow to an element, with the ability to control the position, color, size, and blurriness of the shadow.
- Filter : Filter adds certain graphical filters to an element. There are a mix of color filters that let you modify things like brightness, saturation, and hue as well as non-color filters that let you add blurs and shadows.

For more information, see [Box Shadow and Filter Style Props](https://reactnative.dev/blog/2024/10/23/release-0.76-new-architecture#box-shadow-and-filter-style-props).

### Other Notes

- Google mandating SDK 35 for app updates on Play Store by August 31, 2025
- Splash screen API migrated for Android 12+
- Web assets now use strings/ImageSource for better web ecosystem interop
- Added `ios.appleTeamId` field for multi-target iOS apps


## Upgrade Recommendations

- Review breaking changes carefully
- Test your app thoroughly with the New Architecture
- Update platform dependencies
- Migrate from deprecated APIs
- Review and test layout & style changes


### Prerequisite
    
Versions to use

- Node : v22.11.0
- Java: 17.0.11 


# Splash Screen and App Icon Configuration


## Splash Screen


### Supported Formats
- **Note**: Currently, only .png images are supported to use as a splash screen in an Expo project. If you use another image format, making a production build of your app will fail.


### Platform-Specific Configuration
You can configure any splash properties for a native platform using:
- `splash.android` for Android-specific settings
- `splash.ios` for iOS-specific settings


#### Android Specifics
- Set splash images for different device DPIs from mdpi to xxxhdpi


#### iOS Specifics
- Set `ios.splash.tabletImage` to have a different splash image on iPads


### Important Workflow Note
- If your app does not use Expo Prebuild (formerly the managed workflow) to generate the native android and iOS directories, then changes in the app config will have no effect


### iOS Development Builds
In iOS development builds, launch screens can sometimes remain cached between builds. Apple recommends clearing the derived data folder before rebuilding:
```
npx expo run:ios --no-build-cache
```


### Splash Screen Animation

#### Out-of-the-Box Animation

```javascript
SplashScreen.setOptions({
duration: 1000,
fade: true,
});
```

:::note
'Splashscreen.setOptions' cannot be used in Expo Go. To customize the splash screen, you can use development builds.
:::

#### Custom Animation

- Reference: https://github.com/expo/examples/blob/master/with-splash-screen/App.js

## App Icon Generation

### Quick Generation Tools

- Quick generation: https://buildicon.netlify.app/
- Figma template: https://www.figma.com/community/file/1155362909441341285

### Device Metrics

- iOS: https://developer.apple.com/design/human-interface-guidelines/layout#Specifications
- Android: https://m3.material.io/blog/device-metrics


## Android App Icon

### Adaptive Icons

- Use .png files
- Use `android.adaptiveIcon.foregroundImage` to specify path to foreground image
- Use `android.adaptiveIcon.monochromeImage` to specify path to monochrome image
- Default background color is white
- Specify different background color using `android.adaptiveIcon.backgroundColor`
- Can specify background image using `android.adaptiveIcon.backgroundImage`
- Ensure background image has same dimensions as foreground image


### Additional Note

- Provide a separate icon for older Android devices using `android.icon` property
- This single icon would combine foreground and background layers

## iOS App Icon

### Best Practices

- Provide an icon that's at least 512x512 pixels
- Use a .png file
- 1024x1024 is a good size
- If using Expo project (created with npx create-expo-app), EAS Build will generate other sizes
- Icon must be exactly square (e.g., 1023x1024 is invalid)
- Icon should fill whole square
- No rounded corners or transparent pixels
- Operating system will mask icon when appropriate








