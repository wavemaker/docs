---
title: "Switching between Offline and Online Mode"
id: ""
---

##### 9.2 release

Mobile Apps switch between online and offline modes based on the network connectivity. Apart from this, when an app uses offline DB and there is an intermittent network connectivity, the user should be able to decide when the offline changes need to be synced. In such a case, when the network is available, the user will be asked whether to connect to the backend server or continue in offline mode.

# Online-Offline Modes

Following are the network scenarios and the state of WaveMaker apps:

The network is available

The app connected to the backend server

The app is in online mode.

The network is not available

The app is in offline mode.

The network is available

The backend server is not available

The app is in offline mode.

Network and backend server is available

The app is not connected

The app is in offline mode.

(The app goes into this state when ‘goOffline’ operation is invoked.)

The app is trying to connect to backend server

This is an intermediate state and app will be online or offline based on the success of the operation.

### Implementation

A tag in _index.html_ called ‘**wm-network-info-toaster**’ will display the network info toaster when there is app network status change. Messages shown in the toaster are part of the app’s localized messages. Following are the keys to these messages.

Key

Message

LABEL\_HIDE\_NETWORK\_INFO

Hide

LABEL\_CONNECT\_TO\_SERVICE

Connect

MESSAGE\_SERVICE\_NOT\_AVAILABLE

Service is not reachable.

MESSAGE\_NETWORK\_NOT\_AVAILABLE

Network not available.

MESSAGE\_SERVICE\_AVAILABLE

Service is available.

MESSAGE\_SERVICE\_CONNECTING

Connecting to server.

MESSAGE\_SERVICE\_CONNECTED

You are online.

**NOTES**:

- You can choose not to use this offline-online switch functionality. In such cases, you can remove the tag from index.html. [![](../assets/offon_index.png)](../assets/offon_index.png)
- You can customize this functionality using the operations (getNetworkInfo, goOffline, goOnline) provided on ‘Device’ service. [see here for more on device variables](/learn/hybrid-mobile/device-variables/).

B.1 Mobile Apps

- [1.1 Mobile App Development](#)
    - [i. App Architecture](#mobile-app-architecture)
    - [ii. App Development](#mobile-app-development)
    - [iii. Testing on Mobile](#testing-mobile)
    - [iv. Creating Installer](#creating-installer)
- 1.2 Native Device Support
    - [i. Device Specific Widgets](/learn/hybrid-mobile/native-device-support/#device-specific-widgets)
    - [ii. Device Variables](/learn/hybrid-mobile/native-device-support/#device-features-variables)
    - [iii. Platform Look n Feel](/learn/hybrid-mobile/native-device-support/#platform-support)
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
