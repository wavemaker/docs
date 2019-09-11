---
title: "Native Device Support"
id: ""
---

WaveMaker offers various features which make the Mobile App building process easy. These features in the form of device widgets, device variables etc. allow you to concentrate on implementing the business logic by taking care of platform specific adaptation.

# Platform Look n Feel

By choosing the appropriate Device setting, you can see the UI effect at design time and at runtime from the Preview option.

Design ModePreview Mode

The Mobile Themes give native look-n-feel on the same page based on the Platform (IOS, Android etc.). Most importantly themes adhere to design guidelines of the Platform. [![mobile_native_uilooknfeel](/learn/assets/mobile_native_UIlooknfeel.png)](/learn/assets/mobile_native_UIlooknfeel.png)

The following widgets are rendered using the Native UI Controls:

- Date and Time Picker
- Select or Dropdown Menu
- Slider
- File Browser
- Toggle
- Alert or Message Display

[![mobile_native_uicontrols](/learn/assets/mobile_native_UIcontrols.png)](/learn/assets/mobile_native_UIcontrols.png)

# Device Specific Widgets

[![](https://www.wavemaker.com../assets/mobile_native_widgets.png)](https://www.wavemaker.com../assets/mobile_native_widgets.png)

**Device Widgets** allow your Mobile App to take advantage of Device Functionality. Two such widgets are available:

1. **Camera** - will pass control to the device camera and once the camera is clicked the control is passed back to the App
2. **Barcode Scanner** - will launch the barcode scanner and the captured image is available for further processing within the App

[Learn more about Mobile widgets](/learn/app-development/widgets/widget-library/#mobile)

# Device Features & Variables

Device Variables can be created to access various Device Features like contacts, geolocation etc.. [![](/learn/assets/mobile_native_features.png)](/learn/assets/mobile_native_features.png)

1. From Main Menu, select Create -> Variables
2. Select Device Variable
3. Choose the appropriate Service
4. Based upon the chosen Service various Operations are available

[Learn more about Device Variables](/learn/app-development/variables/device-variables/)

[![](/learn/assets/mobile_native_variables.png)](/learn/assets/mobile_native_variables.png)

B.1 Mobile Apps

- 1.1 Mobile App Development
    - [i. App Architecture](/learn/hybrid-mobile/building-hybrid-mobile-apps/#mobile-app-architecture)
    - [ii. App Development](/learn/hybrid-mobile/building-hybrid-mobile-apps/#mobile-app-development)
    - [iii. Testing on Mobile](/learn/hybrid-mobile/building-hybrid-mobile-apps/#testing-mobile)
    - [iv. Creating Installer](/learn/hybrid-mobile/building-hybrid-mobile-apps/#creating-installer)
- [1.2 Native Device Support](#)
    - [i. Platform Look n Feel](#platform-support)
    - [ii. Device Specific Widgets](#device-specific-widgets)
    - [iii. Device Variables](#device-features-variables)
- 1.3 Offline Data Support
    - [i. Mechanism](/learn/hybrid-mobile/offline-data-support/#working)
    - [ii. Storage Layer](/learn/hybrid-mobile/offline-data-support/#storage-layer)
    - [iii. Sync Layer](/learn/hybrid-mobile/offline-data-support/#sync-layer)
    - [iv. Enabling](/learn/hybrid-mobile/offline-data-support/#enabling)
        - [○ DB Configuration](/learn/hybrid-mobile/offline-data-support/#db)
        - [○ Variable Configuration](/learn/hybrid-mobile/offline-data-support/#variable)
        - [○ Plugin Configuration](/learn/hybrid-mobile/offline-data-support/#plugin)
        - [○ Security Configuration](/learn/hybrid-mobile/offline-data-support/#security)
    - [v. Support & Limitations](/learn/hybrid-mobile/offline-data-support/#limitations)
    - [vi. Use Cases](/learn/hybrid-mobile/offline-data-support/#use-cases)
