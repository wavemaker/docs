---
title: "Embed WaveMaker React Native apps into Native Apps"
id: "react-native-embed"
sidebar_label: "React Native Embed"
---

---

import newProject from '/learn/assets/android-newproject.png';
import basicActivity from '/learn/assets/android-newproject-basicactivity.png';
import AndroidPreview from '/learn/assets/android-embed-preview.gif';
import IOSPreview from '/learn/assets/ios-embed-preview.gif';

From WaveMaker 11.8 onwards, React Native apps can be embeded into the native application. By using the CLI command and inital changes to Native App, WaveMaker is adding React Native project code to Native code.

## Requirements

- JDK 17
- Apache Maven 3.8.2
- Node 18.16.1
- npm 9.5.1
- wm-reactnative-cli and its requirements

When using this feature, you can add WaveMaker app to an existing native application, such as a small component or an SPA, or even a micro application.

## How it works

Once the code is converted to a native app, by running the CLI commands, React Native code inside the Embedded Application can be updated. However, for the first time, you must implement the following setup.

## WaveMaker Embed Command

To embed React native apps into native apps, changes are required in both React Native project and the Native project. [@wavemaker/wm-reactnative-cli](https://github.com/wavemaker/wm-reactnative-cli) will handle the react native project requirements. In order for changes in the Native project, follow the steps below.

- Install wm-reactnative-cli using the below command
```
npm install github:rraajvamsy/wm-reactnative-cli#c1794b1
```

### Android

- Download the React Native Project zip from **Export as ReactNative Zip** Dialog and execute the command below.

```
wm-reactnative embed android –mp="${NATIVE_ANDROID_PROJECT_PATH}" "${REACT_NATIVE_ZIP_PATH}"
```

- Create a New Android project with Basic Activity.

<div style={{flex:1}}>
<img src={newProject} style={{ width:500, height:300}}/>
<img src={basicActivity} style={{ width:500, height:300}}/>
</div>

- execute the `wm-reactnative-cli` command by passing both Path values of android project and Native Zip.

- After the command is executed, embed should get generated in the following path **dest_path/android-embed**.

- Minimum Supported Versions

```
agp = "8.3.2"
junit = "4.13.2"
junitVersion = "1.2.1"
espressoCore = "3.6.1"
appcompat = "1.6.1"
material = "1.12.0"
constraintlayout = "2.1.4"
navigationFragment = "2.7.7"
navigationUi = "2.7.7"
```

- Comment the dependencyResolutionManagement in project-level settings.gradle

```
pluginManagement {
    repositories {
        google {
            content {
                includeGroupByRegex("com\\.android.*")
                includeGroupByRegex("com\\.google.*")
                includeGroupByRegex("androidx.*")
            }
        }
        mavenCentral()
        gradlePluginPortal()
    }
}
// dependencyResolutionManagement {
//     repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
//     repositories {
//         google()
//         mavenCentral()
//     }
// }

rootProject.name = "DemoApp"
include ':app'
apply from:'./rnApp/root.settings.gradle'

```

- Check and Update the following in gradle properties

```
android.nonTransitiveRClass=false
android.enableJetifier=true
android.extraMavenRepos=[]
reactNativeArchitectures=armeabi-v7a,arm64-v8a,x86,x86_64
newArchEnabled=false
hermesEnabled=true
expo.gif.enabled=true
expo.webp.enabled=true
expo.webp.animated=false
expo.useLegacyPackaging=true
EX_DEV_CLIENT_NETWORK_INSPECTOR=true
FLIPPER_VERSION=0.182.0
```

- Move the buildScript from `rnApp/root.build.gradle` to project-level `build.gradle`

```
project-level build.gradle

// Top-level build file where you can add configuration options common to all sub-projects/modules.
buildscript {
    ext {
        buildToolsVersion = findProperty('android.buildToolsVersion') ?: '34.0.0'
        minSdkVersion = Integer.parseInt(findProperty('android.minSdkVersion') ?: '24')
        compileSdkVersion = Integer.parseInt(findProperty('android.compileSdkVersion') ?: '34')
        targetSdkVersion = Integer.parseInt(findProperty('android.targetSdkVersion') ?: '34')
        kotlinVersion = findProperty('android.kotlinVersion') ?: '1.8.10'

        ndkVersion = "25.1.8937393"
    }
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath('com.android.tools.build:gradle')
        classpath('com.facebook.react:react-native-gradle-plugin')
    }
}

plugins {
    id 'com.android.application' version '8.3.2' apply false
    id 'com.android.library' version '8.3.2' apply false
}

task clean(type: Delete) {
    delete rootProject.buildDir
}
apply from:'./rnApp/root.build.gradle'
```

```
rnApp/root.build.gradle

// Top-level build file where you can add configuration options common to all sub-projects/modules.



// apply plugin: "com.facebook.react.rootproject"

allprojects {
    repositories {
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url(new File(['node', '--print', "require.resolve('react-native/package.json')"].execute(null, rootDir).text.trim(), '../android'))
        }
        maven {
            // Android JSC is installed from npm
            url(new File(['node', '--print', "require.resolve('jsc-android/package.json', { paths: [require.resolve('react-native/package.json')] })"].execute(null, rootDir).text.trim(), '../dist'))
        }

        google()
        mavenCentral()
        maven { url 'https://www.jitpack.io' }
    }
}
// @generated begin expo-camera-import - expo prebuild (DO NOT MODIFY) sync-f244f4f3d8bf7229102e8f992b525b8602c74770
def expoCameraMavenPath = new File(["node", "--print", "require.resolve('expo-camera/package.json')"].execute(null, rootDir).text.trim(), "../android/maven")
allprojects { repositories { maven { url(expoCameraMavenPath) } } }
// @generated end expo-camera-import
allprojects {
            configurations.all {
                resolutionStrategy {
                    force "com.facebook.react:react-native:+"
                    force "com.facebook.react:hermes-android:+"
                    force "androidx.annotation:annotation:1.4.0"
                }
            }
        }

```

- Update android - defaultConfig in `rnApp/build.gradle`

```
  defaultConfig {
      buildConfigField "boolean", "IS_NEW_ARCHITECTURE_ENABLED", "false"
      buildConfigField "boolean", "IS_HERMES_ENABLED", "true"
      buildConfigField("boolean", "REACT_NATIVE_UNSTABLE_USE_RUNTIME_SCHEDULER_ALWAYS", (findProperty("reactNative.unstable_useRuntimeSchedulerAlways") ?: true).toString())
  }
```

- Comment the following line in `rnApp/build.gradle` **(optional)**

```
  in android

  // signingConfigs {
  //     debug {
  //         storeFile file('debug.keystore')
  //         storePassword 'android'
  //         keyAlias 'androiddebugkey'
  //         keyPassword 'android'
  //     }
  // }
  // buildyTpes {
  //     debug {
  //         signingConfig signingConfigs.debug
  //     }
  //     release {
  //         // Caution! In production, you need to generate your own keystore file.
  //         // see https://reactnative.dev/docs/signed-apk-android.
  //         signingConfig signingConfigs.debug
  //         shrinkResources (findProperty('android.enableShrinkResourcesInReleaseBuilds')?.toBoolean() ?: false)
  //         minifyEnabled enableProguardInReleaseBuilds
  //         proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
  //     }
  // }
  // packagingOptions {
  //     jniLibs {
  //         useLegacyPackaging (findProperty('expo.useLegacyPackaging')?.toBoolean() ?: false)
  //     }
  // }


  // ["pickFirsts", "excludes", "merges", "doNotStrip"].each { prop ->
  //     // Split option: 'foo,bar' -> ['foo', 'bar']
  //     def options = (findProperty("android.packagingOptions.$prop") ?: "").split(",");
  //     // Trim all elements in place.
  //     for (i in 0..<options.size()) options[i] = options[i].trim();
  //     // `[] - ""` is essentially `[""].filter(Boolean)` removing all empty strings.
  //     options -= ""

  //     if (options.length > 0) {
  //         println "android.packagingOptions.$prop += $options ($options.length)"
  //         // Ex: android.packagingOptions.pickFirsts += '**/SCCS/**'
  //         options.each {
  //             android.packagingOptions[prop] += it
  //         }
  //     }
// }
```

- Update dirstibutionUrl in `gradle/wrapper/gradle-wrapper.properties

```
distributionUrl=https\://services.gradle.org/distributions/gradle-8.4-all.zip
```

- Add button to app/src/main/res/layout/activity_main.xml

```
  <Button
    android:id="@+id/button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Button"
    tools:layout_editor_absoluteX="159dp"
    tools:layout_editor_absoluteY="90dp" />
```

- In MainActivity.java use Intent to load the WaveMaker Application

```
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

- Fix dependency issues.

##### Preview

<img src={AndroidPreview} style={{ width:250, height:600}}/>

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

- Pod file changes required to React Native app are given by WaveMaker.

- Resolve dependencies.

##### Podfile

- Run `pod init` in `project/ios-embed`
- Move Podfile from project/ios/Podfile to project/ios-embed/Podfile

````
require File.join(File.dirname(`node --print "require.resolve('expo/package.json')"`), "scripts/autolinking")
require File.join(File.dirname(`node --print "require.resolve('react-native/package.json')"`), "scripts/react_native_pods")

require 'json'
podfile_properties = JSON.parse(File.read(File.join(__dir__, 'Podfile.properties.json'))) rescue {}

ENV['RCT_NEW_ARCH_ENABLED'] = podfile_properties['newArchEnabled'] == 'true' ? '1' : '0'
ENV['EX_DEV_CLIENT_NETWORK_INSPECTOR'] = podfile_properties['EX_DEV_CLIENT_NETWORK_INSPECTOR']

platform :ios, podfile_properties['ios.deploymentTarget'] || '13.4'
install! 'cocoapods',
  :deterministic_uuids => false

prepare_react_native_project!

# If you are using a `react-native-flipper` your iOS build will fail when `NO_FLIPPER=1` is set.
# because `react-native-flipper` depends on (FlipperKit,...), which will be excluded. To fix this,
# you can also exclude `react-native-flipper` in `react-native.config.js`
#
# ```js
# module.exports = {
#   dependencies: {
#     ...(process.env.NO_FLIPPER ? { 'react-native-flipper': { platforms: { ios: null } } } : {}),
#   }
# }
# ```
flipper_config = FlipperConfiguration.disabled
if ENV['NO_FLIPPER'] == '1' then
  # Explicitly disabled through environment variables
  flipper_config = FlipperConfiguration.disabled
elsif podfile_properties.key?('ios.flipper') then
  # Configure Flipper in Podfile.properties.json
  if podfile_properties['ios.flipper'] == 'true' then
    flipper_config = FlipperConfiguration.enabled(["Debug", "Release"])
  elsif podfile_properties['ios.flipper'] != 'false' then
    flipper_config = FlipperConfiguration.enabled(["Debug", "Release"], { 'Flipper' => podfile_properties['ios.flipper'] })
  end
end

target 'iosApp' do
  use_expo_modules!
  config = use_native_modules!

  use_frameworks! :linkage => podfile_properties['ios.useFrameworks'].to_sym if podfile_properties['ios.useFrameworks']
  use_frameworks! :linkage => ENV['USE_FRAMEWORKS'].to_sym if ENV['USE_FRAMEWORKS']

  use_react_native!(
    :path => config[:reactNativePath],
    :hermes_enabled => podfile_properties['expo.jsEngine'] == nil || podfile_properties['expo.jsEngine'] == 'hermes',
    # An absolute path to your application root.
    :app_path => "#{Pod::Config.instance.installation_root}/..",
    # Note that if you have use_frameworks! enabled, Flipper will not work if enabled
    :flipper_configuration => flipper_config
  )

  post_install do |installer|
    react_native_post_install(
      installer,
      config[:reactNativePath],
      :mac_catalyst_enabled => false
    )

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
````

- run the following command to install Pods, from **project** directory

```
npx pod-install ios-embed
```

- Update the `user script sandboxing` to `No` in build settings

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

- run the following command in **project** folder

```
npx react-native start
```

we can use bundle file, without using the above command

```
replace
  let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")!
with
  let jsCodeLocation = Bundle.main.url(forResource: "main", withExtension: "jsbundle")

```

##### Preview

<img src={IOSPreview} style={{ width:250, height:600}}/>
