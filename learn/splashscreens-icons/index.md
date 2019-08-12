---
title: "Setting Splashscreen Images and App Icons"
date: "2016-10-06"
---

**screen** is a graphical control element, that usually appears while the app is launching. Icons and splashes are usually platform specific.

## Splashscreen Images & App Icons

For WaveMaker Hybrid Mobile Apps, splash screens and app icons for various devices can be edited and uploaded. You can set them from the Build dialog : Though the steps shown below are for [Build](/learn/hybrid-mobile/mobile-build-android/#android), the process is same when using the [to PhoneGap](/learn/hybrid-mobile/mobile-build-phonegap/) option for Build. In case of PhoneGap build, you will have the option to set images and icons for both iOS and Android platforms.

1. Project Actions, Build -> Build for Android option (you can also select the Send to PhoneGap option)
2. the build dialog, you will see the Splash screens and App Icons option under Android (and iOS, in case of PhoneGap) section
3. hover of the splash screen/ app icon, edit icon is shown. [![](../assets/mobile_splashscreen_default.png)](../assets/mobile_splashscreen_default.png)
4. click of the edit icon, the selected splash screen/icon is shown in the file tree.
5. a file and select the uploaded file in the tree. Click ‘Apply’ to apply the changes. (See the next sections for the splash screen image and icon requirements).
6. for all the splash screens and icons.

## Splash Screen Images Requirements

### Platform

Size

320x200px

200x320px

480x320px

320x480px

800x480px

480x800px

1280x720px

720x1280px

1600x960px

960x1600px

1280x1920px

720x1280px

### Platform

(iPad)

\-Retina (1x)

1024x768px

768x1024px

(2x)

2048x1536px

1536x2048px

(iPhone, iPod)

\-Retina (1x)

480x320px

320x480px

(2x)

960x640px

640x960px

5 Retina (2x)

1136x640px

640x1136px

6 (2x)

1334x750px

750x1334px

6 Plus (3x)

1920x1080px

1080x1920px

## Icon Dimensions

### Platform

Size

192px

144px

96px

72px

48px

36px

### Platform

57 px

72 px

4 Retina Display

114 px

3 Retina Display

144 px

\*

1024 px

Settings/Spotlight

29 px

Settings

29 px

Spotlight

48 px

4 Settings/Spotlight

58 px

icon

64 px

icon

320 px

App Use Cases

- [1\. Setting Splashscreen Images & App Icons](#steps)
    - [Splashscreen Image Requirements](#images)
    - [App Icon Dimensions](#icons)
- [2\. Using Cordova Plugin](/learn/how-tos/using-cordova-plugins/)
