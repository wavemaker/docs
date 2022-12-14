---
title: "Switching between Offline and Online Mode"
id: "switching-offline-online-mode"
---
---

##### 9.2 release

Mobile Apps switch between online and offline modes based on the network connectivity. Apart from this, when an app uses offline DB and there is an intermittent network connectivity, the user should be able to decide when the offline changes need to be synced. In such a case, when the network is available, the user will be asked whether to connect to the backend server or continue in offline mode.

# Online-Offline Modes

Following are the network scenarios and the state of WaveMaker apps:

<table><tbody><tr><td><p style={{textAlign: 'left'}}>The network is available</p><p style={{textAlign: 'left'}}>The app connected to the&nbsp;backend server</p></td><td>The app is in&nbsp;online mode.</td></tr><tr><td style={{textAlign: 'left'}}>The network is not available</td><td>The app is in&nbsp;offline mode.</td></tr><tr><td><p style={{textAlign: 'left'}}>The network is available</p><p style={{textAlign: 'left'}}>The&nbsp;backend server is not available</p></td><td>The app is in&nbsp;offline mode.</td></tr><tr><td><p style={{textAlign: 'left'}}>Network and backend server is available</p><p style={{textAlign: 'left'}}>The&nbsp;app is not connected</p></td><td>The app is in&nbsp;offline mode.<div></div>(The app goes into this state&nbsp;when ‘goOffline’ operation is invoked.)</td></tr><tr><td style={{textAlign: 'left'}}>The app is trying to connect to backend server</td><td>This is an intermediate state and app will be online or offline based on the success of the&nbsp;operation.</td></tr></tbody></table>

### Implementation

A tag in _index.html_ called ‘**wm-network-info-toaster**’ will display the network info toaster when there is app network status change. Messages shown in the toaster are part of the app’s localized messages. Following are the keys to these messages.

| Key                           | Message                   |
| ----------------------------- | ------------------------- |
| LABEL_HIDE_NETWORK_INFO       | Hide                      |
| LABEL_CONNECT_TO_SERVICE      | Connect                   |
| MESSAGE_SERVICE_NOT_AVAILABLE | Service is not reachable. |
| MESSAGE_NETWORK_NOT_AVAILABLE | Network not available.    |
| MESSAGE_SERVICE_AVAILABLE     | Service is available.     |
| MESSAGE_SERVICE_CONNECTING    | Connecting to server.     |
| MESSAGE_SERVICE_CONNECTED     | You are online.           |

**NOTES**:

- You can choose not to use this offline-online switch functionality. In such cases, you can remove the tag from index.html. [![](/learn/assets/offon_index.png)](/learn/assets/offon_index.png)
- You can customize this functionality using the operations (getNetworkInfo, goOffline, goOnline) provided on ‘Device’ service. [see here for more on device variables](/learn/hybrid-mobile/device-variables/).

B.1 Mobile Apps

- 1.1 Mobile App Development
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
