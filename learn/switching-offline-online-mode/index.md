---
title: "Switching between Offline and Online Mode"
id: ""
---

##### 9.2 release

Mobile Apps switch between online and offline modes based on the network connectivity. Apart from this, when an app uses offline DB and there is an intermittent network connectivity, the user should be able to decide when the offline changes need to be synced. In such a case, when the network is available, the user will be asked whether to connect to the backend server or continue in offline mode.

# \-Offline Modes

Following are the network scenarios and the state of WaveMaker apps:

network is available

app connected to the backend server

app is in online mode.

network is not available

app is in offline mode.

network is available

 backend server is not available

app is in offline mode.

and backend server is available

 app is not connected

app is in offline mode.

(The app goes into this state when ‘goOffline’ operation is invoked.)

app is trying to connect to backend server

is an intermediate state and app will be online or offline based on the success of the operation.

A tag in called ‘**\-network-info-toaster**’ will display the network info toaster when there is app network status change. Messages shown in the toaster are part of the app’s localized messages. Following are the keys to these messages.

\_HIDE\_NETWORK\_INFO

\_CONNECT\_TO\_SERVICE

\_SERVICE\_NOT\_AVAILABLE

is not reachable.

\_NETWORK\_NOT\_AVAILABLE

not available.

\_SERVICE\_AVAILABLE

is available.

\_SERVICE\_CONNECTING

to server.

\_SERVICE\_CONNECTED

are online.

:

- can choose not to use this offline-online switch functionality. In such cases, you can remove the tag from index.html. [![](../assets/offon_index.png)](../assets/offon_index.png)
- can customize this functionality using the operations (getNetworkInfo, goOffline, goOnline) provided on ‘Device’ service. [here for more on device variables](/learn/hybrid-mobile/device-variables/)

1 Mobile Apps

- [1.1 Mobile App Development](#)
    - [App Architecture](#mobile-app-architecture)
    - [App Development](#mobile-app-development)
    - [Testing on Mobile](#testing-mobile)
    - [Creating Installer](#creating-installer)
- 1.2 Native Device Support
    - [Device Specific Widgets](/learn/hybrid-mobile/native-device-support/#device-specific-widgets)
    - [Device Variables](/learn/hybrid-mobile/native-device-support/#device-features-variables)
    - [Platform Look n Feel](/learn/hybrid-mobile/native-device-support/#platform-support)
- 1.3 Offline Data Support
    - [Mechanism](/learn/hybrid-mobile/offline-data-support/#working)
    - [Storage Layer](/learn/hybrid-mobile/offline-data-support/#storage-layer)
    - [Sync Layer](/learn/hybrid-mobile/offline-data-support/#sync-layer)
    - [Enabling](/learn/hybrid-mobile/offline-data-support/#enabling)
        - [DB Configuration](/learn/hybrid-mobile/offline-data-support/#db)
        - [Variable Configuration](/learn/hybrid-mobile/offline-data-support/#variable)
        - [Plugin Configuration](/learn/hybrid-mobile/offline-data-support/#plugin)
        - [Security Configuration](/learn/hybrid-mobile/offline-data-support/#security)
    - [Support & Limitations](/learn/hybrid-mobile/offline-data-support/#limitations)
    - [Use Cases](/learn/hybrid-mobile/offline-data-support/#use-cases)
