
---
title: "Image Picker"
id: "image-picker"
sidebar_label: "Image Picker"
---
---

import ImagePreview from '/learn/assets/image-picker_01.png';
import ImageEditor from '/learn/assets/image-picker_02.png';

An image picker feature allows users to select or choose images from their device's gallery or camera. 
This feature is commonly implemented in applications that involves working with images, such as photo editors, 
social media platforms, messaging apps, and various content creation tools. The primary purpose of an image picker is to 
provide users with a convenient way to select the images they want to work with or share within the application.

The integration of an image picker in applications presents several compelling benefits, significantly enhancing the 
user experience. Users can effortlessly browse through their device's gallery or capture new moments using the 
integrated camera, fostering a sense of convenience and immediacy. 


## Implement Image Picker in WaveMaker Application


### Adding Image Picker Plugin to your WaveMaker React Native App​

Image Picker plugin can be installed in few steps in WaveMaker. Please refer to this [page](https://docs.wavemaker.com/learn/react-native/third-party-expo-plugins#expo)
on how to install a plugin.

**`AndroidManifest.xml`**
```xml
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

Above changes in `android/app/src/debug/AndroidManifest.xml` will enable the application to request camera permission and storage permissions.

Following snippet will help you to leverage the Image Picker plugin in your WaveMaker React Native application.

```javascript
const ImagePicker = require('react-native-image-crop-picker').default;

const options = {
    cropping: true,
    includeExif: true,
    compressImageQuality: 0.6,
}
Page.opengalleryTap = function($event, widget) {
    ImagePicker.openPicker(options).then(image => {
        Page.imageurl = image.path;
        Page.refresh();
    });
};

Page.opencameraTap = function($event, widget) {
    ImagePicker.openCamera(options).then(image => {
        Page.imageurl = image.path;
        Page.refresh();
    });
};
```

<img src={ImagePreview} style={{width:"35%"}} />

<img src={ImageEditor} style={{width:"35%"}} />
