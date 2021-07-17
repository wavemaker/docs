---
title: "Generating .aab files using wm-cordova-cli or AppChef"
author: Srinivasa Rao Boyina
---

Android App Bundle (aab) is a new and an alternate to Android application package (apk). 
Google introduced this format mainly to reduce the size of installer for end users. Please check [this](https://developer.android.com/platform/technology/app-bundle) post from Google to learn about aab. Starting from @wavemaker/wm-cordova-cli@2.0.0, generation of aab files from WaveMaker mobile projects is supported.  

<!-- truncate -->

## Bundle Tool

An **aab** file cannot be installed directly on a device. This is a format for publishing to Play Store. For development, **apk** can still be used. Incase if you want to install aab file, apk file has to be generated from aab file. Google released a tool called bundle tool to help developers in this regard. BundleTool is a jar file (requires Java8 or higher) that can be downloaded from [here](https://github.com/google/bundletool/releases). After downloading the jar, create an alias (in Linux or MAC) as follows in bashrc. 

```
alias bundletool="java -jar BUNDLE_TOOL_JAR_PATH"
```

Example command to generate apk file:
```
 bundletool build-apks --bundle="./people_wavemaker(0.0.1).debug.aab" --output="./people_from_aab.apks"
```


Example command to install apk on a connected device
```
bundletool install-apks --apks="./people_from_aab.apks"
```

For more commands supported by bundletool, check this [link](https://developer.android.com/studio/command-line/bundletool).


## wm-cordova-cli breaking change

Previously, **packageType** is an argument in the build command to specify the type of build (development or production). This argument is renamed to **buildType** in 2.0.0. Now, **packageType** is used to specify the type of package. For Android build, options available under packageType are **bundle** (for aab) and **apk**. Since, ipa is the only format available for ios apps, there is no **packageType** option for ios build.

## Changes in AppChef

In the build step of creating a new cordova build, a new dropdown is introduced to capture User's choice of Android Package. This dropdown is only visible when a ceretificate for Android build is selected. This dropdown has only two options (aab and apk). If the build type is **development**, then Android package is set as **apk**. If the build type is **production**, then Android package is set as **aab**. Users can override the default behaviour with their choice.

![aab support in Appchef](/learn/assets/aab_support_in_appchef.png)


## Google Anouncement
Starting from August 1st 2021, Google Play Store will allow only new app submissions in **aab** format. Check the Google Anouncement [here](https://android-developers.googleblog.com/2021/06/the-future-of-android-app-bundles-is.html).