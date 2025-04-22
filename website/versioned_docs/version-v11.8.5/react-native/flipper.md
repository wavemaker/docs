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

## Debug 

1. Open the project and preview the application.

2. Copy the preview URL. For example:

```
https://wavemakeronline.com/…../{Project_Name}
```

For Android, run the following command.

```
wm-reactnative run android "preview-link" --clean
```

For iOS, run the following command.

```
wm-reactnative run ios "preview-link" --clean
```

:::note
You can skip the `clean` option after the initial run.
:::

3. Once app is launched in the emulator or device, open Flipper to debug the application.

4. Select the Emulator/Device from the App Inspect option.

![Flipper-Select-Device](/learn/assets/flipper-device-selection.png)

## Flipper Plugins

You can access Flipper plugins for debugging the application and for development ease.

![Flipper-Plugin-Manager](/learn/assets/flipper-plugin-manager.png)

Go to the **Plugin Manager** option to access plugins, as shown in the image below.

![Flipper-Plugin-Manager-Dialog](/learn/assets/flipper-plugin-manager-dialog.png)

From the **Install Plugins** tab, you can install the required plugin, 

From the **Plugins Status** tab, you can check all the active plugins.

## Flipper Default Plugins

For React Native applications, you can use some plugins by default, including Crash Reporter, Logs, React DevTools, and Network.

![Flipper-Select-Device](/learn/assets/flipper-default-plugins.png)

### Crash Reporter

The Crash Reporter plugin shows a notification in Flipper when the app crashes. The notification shows the crash information, such as stacktrace and other metadata.

### Logs

The Logs plugin shows device logs without any additional setup. There are plugins for both Device and App Logs.

![Flipper-Select-Device](/learn/assets/flipper-logs-plugins.png)

### React DevTools

The React DevTools shows the React Native Component Tree, which can be used to edit the component properties.

![Flipper-Select-Device](/learn/assets/flipper-devtools-plugins.png)

:::note
Run the following command if Flipper fails to connect to the device.

`adb reverse tcp:8097 tcp:8097`
:::

### Network

The Network plugin provides the Network Inspector, which is used to inspect outgoing network traffic in your apps. You can easily browse all requests being made and their responses. The plugin also supports gzipped responses.

![Flipper-Select-Device](/learn/assets/flipper-network-plugins.png)


