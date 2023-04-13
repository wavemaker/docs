---
title: "Flipper - Debug tools"
id: "flipper"
sidebar_label: "Flipper"
---
---

Flipper is a platform for debugging iOS, Android and React Native apps. Visualize, inspect, and control your apps from a simple desktop interface. We have integrating flipper using wm-reactnative-cli.

### Setup

Downlaod [Flipper](https://fbflipper.com/)

After installing Flipper, please select settings option from left menu

![Flipper-Settings](/learn/assets/flipper-settings.png)

Add android sdk location for Android development and IDB location for IOS development

![Flipper-Settings-Dialog](/learn/assets/flipper-settings-dialog.png)

Check the requirements to run Flipper from setup-doctor option

![Flipper-Setup-Doctor](/learn/assets/flipper-setup-doctor.png)

make sure the requriements are met for respective development environment

![Flipper-Setup-Dialog](/learn/assets/flipper-setup-doctor-dialog.png)

### Debug

For Android, we need run the follow command. clean option can be ignored after the initial run.

    wm-reactnative run android "preview-link" --clean

For Ios, we need run the follow command. clean option can be ignored after the initial run.

    wm-reactnative run ios "preview-link" --clean

<!-- ![Flipper-preview](/learn/assets/flipper-setup-doctor-dialog.png) -->

### Plugins

We can add react native plugins in market place or custom plugins from plugin manager option.

![Flipper-Plugin-Manager](/learn/assets/flipper-plugin-manager.png)

From the Plugins Status tab we can check all the active plugins and install Plugins tab will allow us to add plugins

![Flipper-Plugin-Manager-Dialog](/learn/assets/flipper-plugin-manager-dialog.png)

