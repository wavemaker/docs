---
title: "Embed WaveMaker React Native apps into Native Apps"
id: "react-native-embed"
sidebar_label: "React Native Embed"
---

---

import newProject from '/learn/assets/android-newproject.png';
import basicActivity from '/learn/assets/android-newproject-basicactivity.png';
import Preview from '/learn/assets/android-embed-preview.gif';

From WaveMaker 11.3 onwards, React Native apps can be embeded into the native application. By using the CLI command and inital changes to Native App, WaveMaker is adding React Native project code to Native code.

## Requirements

- JDK 11
- Apache Maven 3.8.2
- Node 18.16.1
- npm 9.5.1
- wm-reactnative-cli and its requirements

When using this feature, you can add WaveMaker app to an existing native application, such as a small component or an SPA, or even a micro application.

## How it works

Once the code is converted to a native app, by running the CLI commands, React Native code inside the Embedded Application can be updated. However, for the first time, you must implement the following setup.

## WaveMaker Embed Command

To embed React native apps into native apps, changes are required in both React Native project and the Native project. [@wavemaker/wm-reactnative-cli](https://github.com/wavemaker/wm-reactnative-cli) will handle the react native project requirements. In order for changes in the Native project, follow the steps below.

### Android

- Download the React Native Project zip from **Export as ReactNative Zip** Dialog and execute the command below.

```
wm-reactnative embed android –mp="${NATIVE_ANDROID_PROJECT_PATH}" "${REACT_NATIVE_ZIP_PATH}"
```

- After the command is executed, embed should get generated in the following path **dest_path/android-embed**.

- Add the following line in project-level build.gradle.

```
apply from:'./rnApp/root.build.gradle'
```

- Add the below line in project-level settings.gradle.

```
apply from:'./rnApp/root.settings.gradle'
```

- Add **rnApp** as a dependency in the app module build.gradle.

```
implementation (project(':rnApp'))
```

- Make the MainApplication class inherit React Native Application Class.

- Add the below code to start React native app.

```
Intent intent = new Intent(getActivity(), ${REACT_ACTIVITY_MAIN_CLASS});
startActivity(intent);
```

- Fix dependency issues.

### iOS

For changes in the Native project, follow the steps below:

1. Extract **rnApp.zip**, provided by WaveMaker. Copy the **rnApp** folder to the iOS project.

2. Open the Native project in Xcode.

3. Add the **rnApp** folder to the project in a new group.

![Add Files](/learn/assets/xcode-addFiles.png)

![Add rnApp](/learn/assets/xcode-addFiles-rnApp.png)

4. Add main.jsbundle and assets folder files to the project folder.

:::note
The rnApp folder acts a placeholder and gets replaced with the actual content during the embed process.
:::

- In project info.list, set `UIViewControllerBasedStatusBarAppearance` as **false**.

- In the project bridge header, add `#import "ReactNativeView.h"`.    

- Pod file changes required to React Native app are given by WaveMaker.

- Resolve dependencies.

- Using ReactNativePageView or ReactNativeHostingController, React Native app can be launched.

### Example

#### Android

- Download the React Native Project zip from **Export as ReactNative Zip** Dialog and execute the command below.

- Create a New Android project with Basic Activity.

<div style={{flex:1}}>
<img src={newProject} style={{ width:500, height:300}}/>
<img src={basicActivity} style={{ width:500, height:300}}/>
</div>

- execute the `wm-reactnative-cli` command by passing both Path values of android project and Native Zip.

- once the Embed is done, make the following changes in the `android-embed` folder.

##### build.gradle Project Level

```java
// Top-level build file where you can add configuration options common to all sub-projects/modules.
plugins {
    id 'com.android.application' version '7.4.2' apply false
    id 'com.android.library' version '7.4.2' apply false
}
apply from:'./rnApp/root.build.gradle'
```

##### build.gradle App Level

Add `implementation (project(':rnApp'))` to dependencies

```java
dependencies {

    implementation 'androidx.appcompat:appcompat:1.4.1'
    implementation 'com.google.android.material:material:1.5.0'
    implementation 'androidx.constraintlayout:constraintlayout:2.1.3'
    testImplementation 'junit:junit:4.13.2'
    androidTestImplementation 'androidx.test.ext:junit:1.1.3'
    androidTestImplementation 'androidx.test.espresso:espresso-core:3.4.0'
    implementation (project(':rnApp'))
}
```

##### settings.gradle

```java
pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}
//dependencyResolutionManagement {
//    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
//    repositories {
//        google()
//        mavenCentral()
//    }
//}
rootProject.name = "ReactNativeEmebed"
include ':app'
apply from:'./rnApp/root.settings.gradle'
```

##### AndroidManifest.xml

Add `android:name=".MainApplication"` to `application` tag in `rnApp/src/main/AndroidManifest.xml` file.

```xml
  <application android:name=".MainApplication" android:label="@string/app_name" android:icon="@mipmap/ic_launcher" android:roundIcon="@mipmap/ic_launcher_round" android:allowBackup="true" android:usesCleartextTraffic="true">
```

##### Activity Main Xml

Add button to `app/src/main/res/layout/activity_main.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello World!"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Button"
        tools:layout_editor_absoluteX="159dp"
        tools:layout_editor_absoluteY="90dp" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

##### Native App MainActivity

```java
package com.example.reactnativeemebed;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
        setContentView(R.layout.activity_main);
        Button button = (Button) findViewById(R.id.button);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, com.demo.MainActivity.class);
                startActivity(intent);
            }
        });
    }
}
```

- After these changes Build and run the Application.

#### IOS

##### Podfile
```
require File.join(File.dirname(`node --print "require.resolve('expo/package.json')"`), "scripts/autolinking")
require File.join(File.dirname(`node --print "require.resolve('react-native/package.json')"`), "scripts/react_native_pods")
require File.join(File.dirname(`node --print "require.resolve('@react-native-community/cli-platform-ios/package.json')"`), "native_modules")
# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target 'Demo' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_expo_modules!
  use_react_native!(
    :hermes_enabled => true,
  )
  post_install do |installer|
    react_native_post_install(
      installer,
      # Set `mac_catalyst_enabled` to `true` in order to apply patches
      # necessary for Mac Catalyst builds
      :mac_catalyst_enabled => false
    )
    __apply_Xcode_12_5_M1_post_install_workaround(installer)

    # This is necessary for Xcode 14, because it signs resource bundles by default
    # when building for devices.
    installer.target_installation_results.pod_target_installation_results
      .each do |pod_name, target_installation_result|
      target_installation_result.resource_bundle_targets.each do |resource_bundle_target|
        resource_bundle_target.build_configurations.each do |config|
          config.build_settings['CODE_SIGNING_ALLOWED'] = 'NO'
        end
      end
    end
  end

  post_integrate do |installer|
    begin
      expo_patch_react_imports!(installer)
    rescue => e
      Pod::UI.warn e
    end
  end
end
```

##### ViewController
```swift
import UIKit
import React

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        let myFirstButton = UIButton()
        myFirstButton.setTitle("RN", for: .normal)
        myFirstButton.backgroundColor = .black
        myFirstButton.setTitleColor(.white, for: .normal)
        myFirstButton.frame = CGRect(x: 30, y: 300, width: 60, height: 30)
        myFirstButton.addTarget(self, action: #selector(pressed), for: .touchUpInside)
        view.addSubview(myFirstButton)
    }
    
    @objc func pressed() {
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")!
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "Demo",
            initialProperties: nil,
            launchOptions: nil
        )
        self.view = rootView
    }

}
```

##### Preview

<img src={Preview} style={{ width:300, height:500}}/>

## Communicate from React Native JS to Native Layer

```
const promise = App.invokeNativeApi('action-name', {...params})
```

## Implementing Actions in Android Project

- Include the following as a dependency into the module.

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
