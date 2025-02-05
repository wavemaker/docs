---
title: "Debugging - React Native Application"
id: "debugging-in-react-native"
sidebar_label: "Debugging - React Native Application"
---
---

WaveMaker Mobile Applications are built using Expo & React Native, so you can debug them like any other Expo React Native application. Along with the already exiting tools and methods to debug Expo React Native Apps, WaveMaker also provides specialized tool like **[WavePulse](#wavepulse)** to debug WaveMaker Mobile Applications.

For debugging we can run application in following ways.

- **[Web Preview](test-run)**: In studio, the application can be previewed on web browser at any point of development. It gives us very quick and easy way to preview our appliction.
- **[Expo Go / Development Build](expo-debug)**: We can run our Expo project locally using Expo CLI, there are two ways to run it.
    - **Expo Go** - It is a mobile application to preview and test React Native projects on your device in real time without needing a separate build process.
    - **Expo Development build** - It is a build of your React Native app that includes native code, enabling you to test features not supported by Expo Go.
- **[App Installers (APK/IPA)](build-installers)**: Mobile apps are packaged into installers—APK for Android and IPA for iOS. These files allow apps to be installed on devices. There are two types of builds:
  - **Debug Build:** Used for development and testing. It includes extra tools for debugging and is not optimized for performance.
  - **Release Build:** A final, optimized version for users. It runs faster, has no debug tools, and is required for app stores.

Below table gives few debugging tools along with where they are supported.

| Platforms → <hr style={{margin:0}}/> Tools ↓ | Web Preview | Expo (Go / Dev Build) | Release Build (APK/IPA) |
| ------ | :-----: | :-----: | :-----: |
| **Chrome DevTools** | ✅ | - | - |
| **React DevTools** | ✅ | ✅ | - |
| **React Native DevTools** | - | ✅ | - |
| **WavePulse** | ✅ | ✅ | ✅ |

## Common Panels in Debugging Tools

Different debugging tools offer various features, often grouped into panels. These panels help inspect and experiment with different aspects of an app. Here are some commonly used ones:

- **Console**: View log messages, errors, or debugging information from JavaScript. Execute JavaScript commands directly. View stack traces for errors and warnings.
- **Elements/Components**: Inspect and analyse elements making up the page, usually displayed in hierarchical manner. It can also show details related to those elements like styles, state etc. We can also hover/select over elements to highlight it on the application we are debugging.
- **Sources**: View and debug JavaScript code by setting breakpoints. View and step through code execution line by line. Use Watch expressions and Call Stack to trace program flow.
- **Network**: Monitor and analyze API calls, HTTP requests, responses, and timing. View resource load order and performance metrics. Inspect request headers, response data, and cookies.
- **Performance/Timeline/Profiler**: Record and analyze page performance. View timelines for CPU usage, scripting, rendering, and layout tasks. Identify bottlenecks that slow down the application.
- **Memory/Storage**: View storage usage by application. Detect memory leaks and optimize memory usage.

:::note
Panels, its UI and features present, will depend on the tool and its version being used.
:::

## Enabling Logs in WaveMaker Mobile App

- You must enable logs to see logs in console when running app, it can be enabled in `wm_rn_config.json`.
- If running app on expo server, you need restart expo server whenever you make changes to config files like `wm_rn_config.json`.
- If WavePulse is enable, source for every log will be shown as wavepulse.agent.js as it intercepts the logs.
- WavePulse is always enabled in web preview.
- Steps to enable logs in WaveMaker
  - Go to 'File Explorer' in Studio.
  - Open src > main > webapp > wm_rn_config.json
  - Add `"enableLogs" : true` in `preferences` object.

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/ce8XxiZkyG1R6rRNZ7HXKC"
    title="guide to show how to enable logs in WaveMaker mobile apps"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

## Debugging Tools

### Chrome DevTools

Chrome DevTools is a built-in debugging tool present in Chrome browser which helps to inspect, analyze, edit and debug web applications directly in the browser. We can use it to inspect and debug WaveMaker mobile applications, by launching it in web preview in the browser.

#### Panels Available
- Console, Elements (shows HTML), Sources, Network, Performance, Memory, Application etc.

<details>
<summary>Key Features & Limitations</summary>

**Key Features**
- Works with web preview, which we can launch very quickly and easily while developing app in the WaveMaker studio.
- Inspecting elements and their styles. Can be used to edit CSS to quickly debug style issues.
- Viewing logs and executing JS directly in console.
- Monitoring network activity.
- Viewing & debugging JS source by setting breakpoints in the Source Panel.

**Limitations**
- In Elements panel it shows HTML elements, not the React components of our application.
- Can't debug native features as they don't work on web preview.

</details>

#### Using Chrome DevTools

- Open the project in studio and click on 'Preview' button at the top, to launch web preview.
- After web preview is loaded, click on 'REMOVE TOOLBAR'.
- Right click anywhere on the page and click on **Inspect**.
- Chrome DevTools will be opened. Its docking position and size is customizable and depends on your settings.
- In Sources Panel, you can view and debug page scripts easily. For this, press Ctrl+P or Cmd+P and enter the page name.
<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/kBN1AsvKu66Eb9tE9QVaBX"
    title="Chrome DevTools Walkthrough in Web Preview for WM Mobile App"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

<br/>

:::note
Most modern browsers ships with their own DevTools, with similar features. If using any other browser, please check documentation for their DevTools.
:::

### React DevTools

React DevTools is a debugging tool that is used to debug React and React Native Apps. It can be used in browser by installing its extension.

#### Panels Available
- Components - Shows React components in hierarchical manner along with its props (Data passed to that component from its parent) and state (Data that the component manages itself, which can change over time and triggers the component to re-render when updated).
- Profiler - Collects timing information about each component that’s rendered in order to identify performance bottlenecks.

<details>
<summary>Key Features</summary>

**Key Features**
- It can be used along with Chrome DevTools, its Component Panel gives react compoennets unlike Chrome DevTools, which gives HTML in its Elements Panel. This can very useful while debugging in web preview as we can analyse react components composing our app along with its state and props.
- You can also edit state and prop value in ⚛️ Components Panel.

</details>

#### Using React DevTools

<details>
<summary>Installation</summary>

- React DevTools can be installed as extension in [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) and [Edge](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil) Browser.
- Here we are installing in Chrome, for Firefox and Edge, steps will be similar.
- For other browsers it can be installed with npm. [Learn More](https://react.dev/learn/react-developer-tools)

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/1sMAWFG2RXrYq82p693aMW"
    title="Installing React DevTools"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>
</details>

- Once installation is complete, launch the application web preview and click on "REMOVE TOOLBAR".
- Right click anywhere on the page and click on **Inspect**. This will open browser's DevTools.
- The DevTools will now have two new panels '⚛️ Components' & '⚛️ Profiler' will be present in browser devtools.
- In ⚛️ Components panel, by selecting a component in the component tree, you can inspect and edit its current props and state in the panel on the right.
- In style details, there is a trace object. Trace object contains sources that participated in the preparation of the final style. In the trace object, styles of later sources are overridden by the former sources.
- Along with WaveMaker components it shows many other wrapper components. If you only want to see WaveMaker components, use fitler `^(?!Wm)` to filter out all components except WaveMaker Components.
TO DO (edit the video properly)
<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/rJEJEs4wGrcAJexguS9LE9"
    title="React DevTools Walkthrogh"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

### React Native DevTools
React Native DevTools is a newly launched debgging tool specifically to debug react native apps.

:::note
Available for applications using Expo 52 (WaveMaker 11.10.0) or higher. For earlier versions old debugger along with React DevTools can be used. Press `j` for old debugger and `shift` + `m` > "Open React devtools", in terminal where Expo CLI is running to open old debugger and React DevTools respectively.
:::

#### Panels Available
- Console, Sources, Memory, Components (shows React components), Profiler, Network

<details>
<summary>Key Features</summary>

**Key Features**  
- It can be used to debug native builds of the app running on physical and virtual devices. This also enables debugging of native features, which isn't possible with the web preview.  
- It allows debugging of an application locally while running using Expo CLI, connected to WaveMaker Studio through `wm-reactnative sync`. This enables you to make changes in the studio, which will reflect on the app running on a physical/virtual device and can be debugged with React Native DevTools in real-time.  

</details>

#### Using React Native DevTools

:::note
React Native DevTools requires either Google Chrome or Microsoft Edge installed.
:::

- Run the application in Expo Go/Dev Build using Expo CLI.
- Press `j` in the terminal where Expo CLI is running, this will launch React Native DevTools.
- Its ⚛️ Component and ⚛️ Profiler panels comes from React DevTools and have the same features as React DevTools.  
- Its Console, Sources, Memory and Network Panel works similarly as in Chrome DevTools.

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/qN3ypGfED7Yy8p9n2rcZNo"
    title="React Native DevTools"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>
<br />

:::tip
- Press `?` in terminal where Expo CLI is running to view all available options. Press `shift` + `m` here to see more tools like 'Inspect elements', 'Toggle performance monitor', 'Toggle developer menu', 'Open React devtools' and more. 
- Use Element Inspector of React Native Dev Menu, to hover and select components. To turn it on or off select it from more tools. You can also toggle it from React Dev Menu which can be opened by shaking the device, or by pressing `m` in terminal where Expo CLI is running.
:::

Refer React Native DevTools official docs to [learn more](https://reactnative.dev/docs/react-native-devtools).

### WavePulse

WavePulse is a debugging tool designed specifically for apps built using WaveMaker Mobile studio. 

#### Panels Available
- Console, Elements (shows WaveMaker Components), Network, Timeline, Storage, Info

<details>
<summary>Key Features & Limitations</summary>

**Key Features**  
- In the Elements panel, it shows only WaveMaker components along with their properties and styles.  
- The Timeline displays the page and WaveMaker service variable load time, along with other network requests.  
- Debugging session data can be easily exported and imported to resume the session later or share it with others.  
- The Storage Panel directly shows the app's local storage.  
- It can be used to debug release builds of the application (APK/IPA).  

**Limitations**  
- The Source Panel is not available for debugging JavaScript.  
- All displayed data is read-only. Values like state, styles, etc., cannot be edited in the tool to see changes in the running app.  

</details>

### Enabling WavePulse in WaveMaker Mobile App

- WavePulse must be enabled in the project to use it for debugging the application, it can be enabled in `wm_rn_config.json`.
- If running app on expo server, you need restart expo server whenever you make changes to config files like `wm_rn_config.json`.
- If WavePulse is enable, source for every log will be shown as wavepulse.agent.js as it intercepts the logs.
- WavePulse is always enabled in web preview.
- Steps to enable WavePulse in WaveMaker
  - Go to 'File Explorer' in Studio.
  - Open src > main > webapp > wm_rn_config.json
  - Add `"enableWavePulse" : true` in `preferences` object.

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/eNEZKgeMjr2cHEwvb8kNSq"
    title="Enable WavePulse in WaveMaker Mobile App"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

### Connecting WavePulse
  - Connecting WavePulse with Web Preview.
    - Launch Web Preview of the app, click on "REMOVE TOOLBAR" once the preview loads.
    - Open [WavePulse](https://apps.wavemakeronline.com/wavepulse/client/) in another tab, it will start a new session in WavePulse.
    - Select 'Connect to Web Preview" from the dropdown.
    - Copy the code generated, to connect Web Preview with this session of WavePulse.
    - Go back to the tab where Web Preview is running, and open Console Panel in the devloper tools. In Chrome you can press `Cmd` + `option` + `j` (Mac) / `Ctrl` + `shift` + `j` (Windows / Linux).
    - Paste the code copied from WavePulse in the Console Panel, and press enter to initiate connection the WavePulse session started earlier.
    - Web Preview is now connected with WavePulse session started earlier.
    - You can now use WavePulse to debug your application.

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/1tKCbzKBWYEgis3ZjfXhRQ"
    title="Connecting Web Preview with WavePulse"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

<br />

  - Connecting with app running on physical/virtual device (Expo dev build / Debug & Realease apk/ipa).
    - Run the application in Expo Dev Build using Expo CLI.
    - If using apk/ipa, install the app on device. If apk/ipa is built in debug mode ensure it is connecetd with Expo CLI in Dev Build mode.
    - Open [WavePulse](https://apps.wavemakeronline.com/wavepulse/client/) in a browser, it will start a new session in WavePulse.
    - Ensure 'Connect to APK or IPA" is selected from the dropdown.
    - Enter the application id for the application, this will generate QR code and coonnection link for app with given Application ID and this WavePulse session. (You can find application id in studio. Settings > Build Preferences > Application Properties > Application ID).
    - Close the application on device if it is already running.
    - Scan the QR code generated from the device, to launch the app and initiate WavePulse connection. Alternatively, you can code link given below QR code and open it in the browser of your device to do the same.
    - A pop up will appear once the application is launched, asking for permission to connect with the WavePulse session started earlier. Press 'Yes' to initiate connection.
    - WavePulse is now connected. You can now use WavePulse to debug your application.

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/nLGL8FgNiBkhPfTbVgLnRY"
    title="Connecting WavePulse with iOS Sim"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

#### Using WavePulse
- After launching WavePulse, you can select three options from the dropdown.
  1. Connect to APK or IPA - To connect with app running through Expo CLI in dev build or to connect with apk/ipa.
  2. Connect to Web Preview - To connect with app running in Web Preview.
  3. Import Data - To import previously exported WavePulse debugging data. This enables you to save data from a debugging session and use same data later on. 
- In Console Panel you can view all the logs, search for specific logs, clear all current logs and filter them by selecting types to show on upper right corner button.
- Elements Panel will show all WaveMaker components composing the page currently opened in the app. It will auto update when there is any change in the app running.
  - You can hover/select over the components shown here to highlight it in the app running on device.
  - When any component is selected in Elements Panel, its Properties and Styles will be shown on the right side of Elemets Panel.
  - Properties will show the Properties for widget as configured in the project in WaveMaker Studio.
  - Styles have a dropdown which can be used to select class for specific part of a widget to see classes applied on that part.
- Network Panel shows all network calls made by the application. You can click on any request to se its details like "Header", "Response" etc. You can also fiter request by selecting types to show on upper right corner button.
- Timeline Panel shows recorded time intervals for various events like page load, network calls, service variables etc. You can also use filters to filter specific types of events or time interval.
- Storage Panel shows app's local storage. To see latest data, you can use refresh button on upper right corner.
- Info Panel shows metadata related to app, you can use refresh button on upper right corner.
- To export current debugging session you can click om export button on the bottom right corner of the WavePulse.

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/oa96srQW46ksPkRQMAKHPC"
    title="WavePulse walkthrough"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>
<br />

:::danger
You can use WavePulse to debug apk/ipa built in release mode for testing. However, it is advised to disable WavePulse, in builds for distribution including Play store or App Store submissions.
:::

- Dive Deeper into [WavePulse](wavepulse).

## Debugging Android/iOS Specific Native Code
- All the tools mentioned here, including React Native DevTools, are designed for debugging JavaScript and React-related issues. To inspect React Native’s underlying platform layers (e.g., for Native Modules), use Android Studio for Android and Xcode for iOS. Learn more [here](https://reactnative.dev/docs/debugging-native-code).
- You can also run and debug the app directly in Android Studio or Xcode. Please check their respective documentation for detailed instructions.

## Reference
- [Expo Docs](https://docs.expo.dev/debugging/errors-and-warnings/)
- [React Native Docs](https://reactnative.dev/docs/debugging)
