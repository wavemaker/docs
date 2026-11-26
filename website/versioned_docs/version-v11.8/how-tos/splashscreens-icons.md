---
title: "Setting Splashscreen Images and App Icons"
id: "splashscreens-icons"
---
---

A **splash screen** is a graphical control element, that usually appears while the app is launching. Icons and splashes are usually platform specific.

## Setting Splashscreen Images & App Icons

For WaveMaker Hybrid Mobile Apps, splash screens and app icons for various devices can be edited and uploaded. You can set them from the Build dialog.

:::note
Though the steps shown below are for [Andriod Build](/learn/hybrid-mobile/mobile-build-android/#android), the process is same when using the [Send to PhoneGap](/learn/hybrid-mobile/mobile-build-phonegap/) option for Build. In case of PhoneGap build, you will have the option to set images and icons for both iOS and Android platforms.
:::

1. From Project Actions, Build -> Build for Android option (you can also select the Send to PhoneGap option)
2. In the build dialog, you will see the Splash screens and App Icons option under Android (and iOS, in case of PhoneGap) section
3. On hover of the splash screen/ app icon, edit icon is shown. 

[![](/learn/assets/mobile_splashscreen_default.png)](/learn/assets/mobile_splashscreen_default.png)

4. On click of the edit icon, the selected splash screen/icon is shown in the file tree.
5. Upload a file and select the uploaded file in the tree. Click ‘Apply’ to apply the changes. (See the next sections for the splash screen image and icon requirements).
6. Repeat for all the splash screens and icons.

## Setting Splash Screen Images Requirements

### Android Platform

| Screen Size | Dimensions |
| --- | --- |
| Landscape | Potrait |
| --- | --- |
| LDPI | 320x200px | 200x320px |
| MDPI | 480x320px | 320x480px |
| HDPI | 800x480px | 480x800px |
| XHDPI | 1280x720px | 720x1280px |
| XXHDPI | 1600x960px | 960x1600px |
| XXXHDPI | 1280x1920px | 720x1280px |

### iOs Platform

| Device | Dimensions |
| --- | --- |
| Landscape | Potrait |
| --- | --- |
| Tablet (iPad) |
| Non-Retina (1x) | 1024x768px | 768x1024px |
| Retina (2x) | 2048x1536px | 1536x2048px |
| Handheld (iPhone, iPod) |
| Non-Retina (1x) | 480x320px | 320x480px |
| Retina (2x) | 960x640px | 640x960px |
| iPhone 5 Retina (2x) | 1136x640px | 640x1136px |
| iPhone 6 (2x) | 1334x750px | 750x1334px |
| iPhone 6 Plus (3x) | 1920x1080px | 1080x1920px |

## App Icon Dimensions

### Android Platform

| Screen Size | Dimensions |
| --- | --- |
| XXXHDPI | 192px |
| XXHDPI | 144px |
| XHDPI | 96px |
| HDPI | 72px |
| MDPI | 48px |
| LDPI | 36px |

### iOS Platform

| Device | Dimensions |
| --- | --- |
| iPhone | 57 px |
| iPad | 72 px |
| iPhone 4 Retina Display | 114 px |
| iPad 3 Retina Display | 144 px |
| iTunes* | 1024 px |
| iPhone Settings/Spotlight | 29 px |
| iPad Settings | 29 px |
| iPad Spotlight | 48 px |
| iPhone 4 Settings/Spotlight | 58 px |
| document icon | 64 px |
| document icon | 320 px |

## See Also

[Using Cordova Plugin](/learn/how-tos/using-cordova-plugins/)
