---
title: "Embed WaveMaker React Native apps into Native Apps"
id: "react-native-embed"
sidebar_label: "React Native Embed"
---
---

#### Requirements

    JDK 11 
    Apache Maven 3.8.2
    Node 14.15.1
    npm 7.20.1
    wm-reactnative-cli and its requirements

#### WaveMaker Embed command

    wm-reactnative embed android –mp="${NATIVE_ANDROID_PROJECT_PATH}" "${REACT_NATIVE_ZIP_PATH}"
    wm-reactnative embed ios –mp="${NATIVE_IOS_PROJECT_PATH}" "${REACT_NATIVE_ZIP_PATH}"

- After the command is executed embed should get generated at 
 
    **dest_path/android-embed** or **dest_path/ios-embed**

To embed React native apps into native apps, changes are required in both react native project and native project.

[@wavemaker/wm-reactnative-cli](https://github.com/wavemaker/wm-reactnative-cli) will take care of the react native porject changes, changes for native project are as follows:

#### Android

- Add below line in project level build.gradle

```
apply from:'./rnApp/root.build.gradle'
```

- Add the below line in project level settings..gradle

```
apply from:'./rnApp/root.settings.gradle'
```

- Add rnApp as dependency in app module build.gradle.

```
implementation (project(':rnApp'))
```

- Make the MainApplication class to inherit React Native Application Class

- Add below code to start React native app.

```
Intent intent = new Intent(getActivity(), ${REACT_ACTIVITY_MAIN_CLASS});
    
startActivity(intent);
```

- Fix dependency issues.

#### IOS

- Extract rnApp.zip (given by wavemaker) and copy the rnApp folder to iOS project.

- Open the Native project in Xcode.

- Add rnApp folder to the project in a new group.

- Add main.jsbundle and assets folder files to the project folder.

    **Note:** This rnApp folder acts a placeholder and gets replaced with the actual content during embed process.

- In project info,plist, set ```UIViewControllerBasedStatusBarAppearance``` as **false**.

- In project bridge header, add ```#import "ReactNativeView.h"```

- Pod file changes required to React Native app are given by WaveMaker.

- Resolve dependencies.

- Using ReactNativePageView or ReactNativeHostingController, React Native app can be launched.

#### Communicate from react native js to native layer 

     const promise = App.invokeNativeApi('action-name', {...params})

#### Implementing actions in Android project

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

#### Implementing actions in iOS project

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
