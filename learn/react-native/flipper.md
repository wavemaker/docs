---
title: "Flipper - Debug tools"
id: "flipper"
sidebar_label: "Flipper"
---
---

Flipper is a tool for debugging iOS, Android, and React Native apps to access applications from a desktop interface where you can visualize and inspect the code. WaveMaker has integrated Flipper using CLI **`wm-reactnative-cli`**.

## Steps to Setup

1. Download [Flipper](https://fbflipper.com/).
2. After installing Flipper, select the **Settings** option from the left menu.

![Flipper-Settings](/learn/assets/flipper-settings.png)

3. For **Android development**, add **Android SDK location** and for **iOS Development**, add **IDB binary location**, as shown in the image below.

![Flipper-Settings-Dialog](/learn/assets/flipper-settings-dialog.png)

4. Check the requirements to run Flipper from the **Setup Doctor** option.

![Flipper-Setup-Doctor](/learn/assets/flipper-setup-doctor.png)

5. Ensure that the requirements are met for each respective development environments. If the requirements fail or show warning, you can expand the item and address the issues and perform **re-run**.

![Flipper-Setup-Dialog](/learn/assets/flipper-setup-doctor-dialog.png)

## Debug Android

For Android, run the follow command. 

```
wm-reactnative run android "preview-link" --clean
```

:::note
You can skip the `clean` option after the initial run.
:::

## Debug iOS

For iOS, run the follow command.

```
wm-reactnative run ios "preview-link" --clean
```

:::note
You can skip the `clean` option after the initial run.
:::

<!-- ![Flipper-preview](/learn/assets/flipper-setup-doctor-dialog.png) -->

## Access Flipper Plugins

You can access to Flipper plugins for debugging the application and for develepment ease.

![Flipper-Plugin-Manager](/learn/assets/flipper-plugin-manager.png)

To access, go to the **Plugin Manager** option, as shown in the image below.

![Flipper-Plugin-Manager-Dialog](/learn/assets/flipper-plugin-manager-dialog.png)

From the **Install Plugins** tab, you can install required plugin, 

From the **Plugins Status** tab, you can check all the active plugins.

