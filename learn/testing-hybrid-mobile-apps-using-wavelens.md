---
title: "Testing Hybrid Mobile Apps using WaveLens"
id: ""
---

Mobile app developers can preview their apps using Preview button. However, web preview lacks native capabilities (like camera, calendar etc.,). To see the complete app along with their native capabilities, developers have to build the installer (apk or ipa) for respective OS. This build step consumes 10 mins of developer time. To improve your productivity, Wavemaker introduces a mobile app called ‘**WaveLens**’. Using this app, you can see an instant preview of their app without building the installer.

[![](./assets/wavelens.png)](./assets/wavelens.png)[![](./assets/google-play-badge.png)](https://play.google.com/store/apps/details?id=com.wavemaker.wavelens&hl=en) [![](./assets/App_Store_Badge.png)](https://itunes.apple.com/in/app/wavelens/id1146808805?mt=8)

## Usage

- For Wavemaker online developers,
    1. Select Wavemaker domain.
    2. Login with your credentials.
    3. All your mobile projects are shown in alphabetical order.
    4. Tap on any project, you wish to preview

- For Wavemaker on-premise developers: (Note: you do not need internet to use WaveLens. If you can access the WaveMaker on-premise installation domain from the mobile browser you can use WaveLens)
    1. Click **Edit** and add your WaveMaker on-premise installation domain.
    2. Select the domain.
    3. Log in with your credentials.
    4. All your mobile projects are shown in alphabetical order.
    5. Tap on any project, you wish to preview.

**Android only**: There is an extra option called ‘_Sign In As Guest_’. This is useful to show previews to clients, who don’t have a WaveMaker account. Clients can log in guest and scan preview URL QR code to preview the app.

**Note**: Except Offline DB plugin, rest of plugins that are listed in the plugins section of mobile build dialog are available in WaveLens.

**Update:** Deprecated support for Andriod KitKat devices.

B.3 Platform Installer

- [3.1 Test Run (Preview)](#)
    - [i. App Preview](/learn/hybrid-mobile/test-run/#preview)
    - [iii. Debugging Mobile Apps](/learn/hybrid-mobile/debugging-mobile-apps/)
        - [○ on Android](/learn/hybrid-mobile/debugging-mobile-apps/#android)
        - [○ on iOS](/learn/hybrid-mobile/debugging-mobile-apps/#ios)
    - [iv. Testing using Wavelens](#)
- 3.2 Mobile Build
    - [i. Android Build](/learn/hybrid-mobile/mobile-build/#android)
    - [ii. Send to PhoneGap](/learn/hybrid-mobile/mobile-build-phonegap/#phonegap)
    - [iii. Manual build - Using cordova zip](/learn/hybrid-mobile/mobile-build-manual/#manual)
