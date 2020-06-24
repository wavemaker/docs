---
title: "New file picker for mobile apps - Imporvements in UI to select files in mobile"
author: Srinivasa Rao Boyina
---

## Problem 

Uploading files from a mobile phone is a common usecase that every mobile app has. Until last release, WaveMaker UI to select files had the following problems.

1. Failing to honour multiple/single flag in all the cases.
2. UI for selecting images and UI for selecting videos are completly different.
3. There is no option to select files from Google drive or Cloud drive.
4. UI to select files (filetype: file) is very basic and doesn't provide much file information(thumbnails, last modified time etc.,).

<!-- truncate -->
  
## Solution

A Cordova plugin was created (with open source license) by WaveMaker team to address the above problems. Please visit (https://github.com/wavemaker/wm-filepicker-plugin)[https://github.com/wavemaker/wm-filepicker-plugin] to know more about the plugin. 
  
#### WavaMaker mobile apps automatically upgraded to use this file picker

Like always, with WaveMaker product updates, we also migrate applications that are already implemented. So if your WaveMaker mobile app was using file picker plugin then you simply get the new & better functionality without taking any action.

## Known Issues

 1. In iOS, selection of multiple videos from local Photo Library is not supported. 
