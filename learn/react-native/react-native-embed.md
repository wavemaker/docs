---
title: "Embed WaveMaker React Native apps into Native Apps"
id: "react-native-embed"
sidebar_label: "React Native Embed"
---
---

From WaveMaker 11.3 onwards, you can embed React Native apps into the native application. By using the embedding feature, WaveMaker is adding project code to native code. With the embedding of the application, the code will convert from React Native to native application code.

## Requirements

- JDK 11 
- Apache Maven 3.8.2
- Node 14.15.1
- npm 7.20.1
- wm-reactnative-cli and its requirements


When using this feature, you can add WM app to an existing native application, such as a small component or an SPA, or even a micro application. 

## How it works

Once the code is converted to native app, you can continue to make changes to the embedded application by running the CLI commands. However, for the first time, you have to follow the instructions as shown below. 

## WaveMaker Embed Command



##  Android

```
wm-reactnative embed android –mp="${NATIVE_ANDROID_PROJECT_PATH}" "${REACT_NATIVE_ZIP_PATH}"
```

- After the command is executed, embed should get generated in the following path.
 
**dest_path/android-embed** or **dest_path/ios-embed**

To embed React native apps into native apps, changes are required in both React Native project and Native project.

[@wavemaker/wm-reactnative-cli](https://github.com/wavemaker/wm-reactnative-cli) will take care of the react native project changes. In order for changes in native project, follow the steps below:

## Android

- Add the following line in project-level build.gradle

```
apply from:'./rnApp/root.build.gradle'
```

- Add the below line in project-level settings.gradle

```
apply from:'./rnApp/root.settings.gradle'
```

- Add **rnApp** as a dependency in the app module build.gradle.

```
implementation (project(':rnApp'))
```

- Make the MainApplication class inherit React Native Application Class

- Add the below code to start React native app.

```
Intent intent = new Intent(getActivity(), ${REACT_ACTIVITY_MAIN_CLASS});
startActivity(intent);
```

- Fix dependency issues.

## iOS

Execute the following command to embed the application.

```
wm-reactnative embed ios –mp="${NATIVE_IOS_PROJECT_PATH}" "${REACT_NATIVE_ZIP_PATH}"
```

- After the command is executed, embed should get generated in the following path.
 
**dest_path/android-embed** or **dest_path/ios-embed**

To embed React Native apps into native apps, changes are required in both React Native project and Native project.

Follow [@wavemaker/wm-reactnative-cli documentation](https://github.com/wavemaker/wm-reactnative-cli) for the React Native project changes. 

### Native Project Changes

In order for changes in Native project, follow the steps below:

1. Extract rnApp.zip, provided  by WaveMaker. Copy the rnApp folder to iOS project.

2. Open the Native project in Xcode.

3. Add rnApp folder to the project in a new group.

4. Add main.jsbundle and assets folder files to the project folder.

:::note
This rnApp folder acts a placeholder and gets replaced with the actual content during embed process.
:::

- In project info, list, set ```UIViewControllerBasedStatusBarAppearance``` as **false**.

- In project bridge header, add ```#import "ReactNativeView.h"```

- Pod file changes required to React Native app are given by WaveMaker.

- Resolve dependencies.

- Using ReactNativePageView or ReactNativeHostingController, React Native app can be launched.

## Communicate from react native js to native layer 

```
const promise = App.invokeNativeApi('action-name', {...params})
```

## Implementing actions in Android project

- Include the following as dependency into the module.

```
implementation (project(':wavemaker-expo-native-module'))
```

- Import package

```
import com.wavemaker.reactnative.embed.CommunicationService;
```

- Implement action

```
CommunicationService.Companion.getINSTANCE().process("action-name",(data, promise) -> {
// your implementation goes here.
});
```

## Implementing actions in iOS project

- Import package

```
import EmbedCommModule
```

- Implement action

```
CommunicationService.INSTANCE.process(
messageType: "action-name",
processor: {(message: NSDictionary?, promise: Promise?) in
// your implementation goes here
});
```
