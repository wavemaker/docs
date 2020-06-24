---
title: " Imporvements in UI to select files in mobile app "
author: Srinivasa Rao Boyina
---

## Problem 

Uploading files from a mobile phone is a common usecase that every mobile app has. Until last release, WaveMaker UI to select files has the following problems.

1) Failing to honour multiple/single flag in all the cases.
2) UI for selecting images and UI for selecting videos are completly different.
3) There is no option to select files from Google drive or Cloud drive.
4) UI to select files (filetype: file) is very basic and doesn't provide much file information(thumbnails, last modified time etc.,).

<!-- truncate -->
  
## Solution

A plugin was created by WaveMaker team to address the above problems. Please visit (https://github.com/wavemaker/wm-filepicker-plugin)[https://github.com/wavemaker/wm-filepicker-plugin] to know more about the plugin. 
  
#### Developer Action Required

Migration was written to automatically to remove some unnecessary plugins and to add file picker plugin in projects it is needed. So, there is **no action** is required from developer. 

## Known Issues

 1. In iOS, selection of multiple videos from local Photo Library is not supported. 
