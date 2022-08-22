---
title: "Testing Hybrid Mobile Apps using Live Sync"
id: ""
---
---

Live Sync is a feature that brings App UI changes in Studio to the mobile app without needing a new build. This reduces the number of mobile builds required and tremendously saving developers' time.


## Configuring Live Sync

1. Open **Export as Cordova zip** dialog.
2. Select server path as **dev** and profile as **development**.

![](/learn/assets/live-sync/cordova-export.png)

3. Click the **Build** button.
4. Download the Cordova zip and run a mobile build using **wm-cordova-cli** or **AppChef**.
5. Download and install the app on mobile and open the app.

The following popup will be shown. This popup is shown after every app restart.

![](/learn/assets/live-sync/live-sync-screen-confirmation.png)

### Enabling Live Sync

To switch on Live Sync, press the **Yes** button. You can see the Live Sync button at the bottom right corner.

![](/learn/assets/live-sync/live-sync-screen-refresh.png)

### Disabling Live Sync

If you do not need Live Sync, press **No**. 

:::note
If you wish to enable Live Sync later, you can either restart the app or press and hold anywhere for 5 seconds, and the screen should show the Live Sync Popup again.
:::

![](/learn/assets/live-sync/live-sync-screen-info.png)

## Understanding Live Sync

- Whenever a UI change is made in Studio, press the Live Sync button to refresh the app with the latest changes.

![](/learn/assets/live-sync/live-sync-screen-refresh.png)

- Except for offline functionality, rest of the functionalities should work as they do.
- Whenever plugins are added in WaveMaker Studio, a new build is required to add the plugin into the app to function. When Live Sync observes plugin addition, you will notice the following warnings and it is recommended to have a new build when such warning is shown. 

:::note
When a device variable or widget is added, plugins required for that variable or widget are added automatically.
:::

- Third-party plugins are supported.
- You can debug the app as usual.

## Limitations

- Offline functionality is not supported.
