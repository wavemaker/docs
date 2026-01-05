---
title: "Cordova 10.0.0 Upgrade "
author: "Srinivasa Rao Boyina"
---

In 10.6.0 release, WaveMaker platform is upgraded to use cordova@10.0.0 and cordova-ios@6.1.0.

<!--truncate-->

Following plugins are not required for WaveMaker10.6 platform. During the upgradation process, these plugins are removed from config.xml.

1) cordova-plugin-file-transfer
2) [cordova-plugin-local-webserver](/learn/blog/2020/04/20/wavemaker-wkwebview-upgrade)
3) cordova-plugin-transport-security
4) [cordova-plugin-wkwebview-engine](/learn/blog/2020/04/20/wavemaker-wkwebview-upgrade)
5) cordova-plugin-telerik-imagepicker

With cordova-ios@6.1.0 upgradation, WaveMaker supports from iOS-12.0 (and above). [As recommended by cordova](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/#designing-launch-storyboard-images), WaveMaker supports Launch story boards in iOS. Due to that, minimum number of splash images in iOS got reduced to 8.

