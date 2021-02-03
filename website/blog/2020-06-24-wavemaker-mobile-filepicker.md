---
title: "New file picker for mobile apps - Improvements in UI to select files in mobile"
author: Srinivasa Rao Boyina
---

Uploading files from a mobile phone is a common use case that every mobile app has. Until last release, WaveMaker UI to select files had the following problems.

1. Failing to honor multiple/single flag in some of the cases.
2. UI for selecting images and UI for selecting videos are completely different.
3. There is no option to select files from Google drive or Cloud drive.
4. UI to select files (filetype: file) is very basic and doesn't provide much file information (thumbnails, last modified time etc.,).

<!-- truncate -->

> WaveMaker allows creation of mobile applications by a simple drag and drop approach. [Click here to know more](/learn/hybrid-mobile/first-mobile-app).
  
## Solution

A Cordova plugin was created (with open source license) by WaveMaker team to address the above problems. Please visit [github repo of the plugin](https://github.com/wavemaker/wm-filepicker-plugin) to know more about the plugin. 

This plugin requires Swift 4.2 runtime, which was released in 2018. Since iOS13, Swift 4.2 runtime is part of the iOS. For earlier versions of iOS (10-12), Swift 4.2 runtime is added to [IPA bundle by the XCode](learn/wavemaker-release-notes/v10-5-0). Due to that addition, the size of IPA will increase (~70 MB). If your app doesn't need to support iOS version 12 and lesser, changing deployment-target preference in config.xml to iOS 13 will reduce the IPA size.
  
#### WavaMaker mobile apps automatically upgraded to use this file picker

Like always, with WaveMaker product updates, we also migrate applications that are already implemented. So if your WaveMaker mobile app was using file picker plugin then you simply get the new & better functionality without taking any action.

## Known Issues

 1. ~~In iOS, selection of multiple videos from local Photo Library is not supported.~~ This issue is addressed in WaveMaker 10.6.0 release.
 
 > This feature is part of WaveMaker 10.5 release. [Checkout more details on what is included in this release](learn/wavemaker-release-notes/v10-5-0).
