---
title: "Shrinking and Obfuscating Android APK builds"
id: "shrinking-obfuscating-android-apk-builds"
sidebar_label: "Shrinking and Obfuscating Android APK"
---
---

When building Android APKs, it's advisable to tailor the build based on CPU architecture, shrink resources, and obfuscate 
the code for several reasons, each related to improving the user experience and protecting the application.

Tailoring a build to a specific CPU architecture, such as ARM or x86, ensures that the application takes full advantage 
of the unique instruction sets and capabilities of that architecture, leading to enhanced performance. This approach 
also reduces the APK file size because it excludes unnecessary code meant for other architectures, ensuring the app is 
not bloated with irrelevant binary code. This is particularly important since some devices only support specific 
architectures, and your app could be unusable on these devices if not built accordingly.

Resource shrinking plays a crucial role in minimizing the APK size by eliminating unused resources like redundant images
, layouts, and string files. A smaller APK is more likely to be downloaded, especially in areas where internet 
connectivity is limited or expensive, thereby improving user acquisition rates. It also benefits the end user by 
consuming less storage space on their device and potentially leads to quicker app startup times.

Lastly, code obfuscation, through tools such as ProGuard or R8, is a critical security measure. It makes the reverse 
engineering of the APK much more difficult, thereby protecting the app from potential piracy, cloning, or misuse. 
This is not just a measure to secure the app from external threats but also to safeguard the intellectual property 
within the code. Additionally, obfuscation often removes unused code (dead code elimination), which contributes further 
to reducing the APK's footprint.

In this How-to series we’ll walk you through the steps to enable these build options in your WaveMaker App.

## Shrink Resources

The `shrinkResources` flag is used to enable or disable resource shrinking during the build process. This flag 
helps reduce the size of your app's APK (Android Package file) by removing unused resources from the APK. 
These resources can include images, layouts, drawables, and other assets that are not referenced in your app code.

Here's how to use the `shrinkResources` flag in app's `android/app/build.gradle` file:

```javascript

buildTypes {
        release {
            minifyEnabled enableProguardInReleaseBuilds
  	      shrinkResources true
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    }

```

Resource shrinking is particularly useful for optimizing your app's size, which is important for reducing the download 
size for users and improving overall performance. It can significantly reduce the size of your APK by removing assets 
that are not needed, such as unused images, layouts, or even specific language resources if you have multiple language support.


## Build App Based on CPU architecture

The `enableSeparateBuildPerCPUArchitecture` is a Gradle property that you can use to configure your build process to 
generate separate APKs (Android Package files) for different CPU architectures. This can be useful for optimizing app's 
size and performance on specific devices.

You can enable enableSeparateBuildCPUArchitechure in app’s `android/app/build.gradle` file.

```javascript

def enableSeparateBuildPerCPUArchitecture = true

 splits {
        abi {
            reset()
            enable enableSeparateBuildPerCPUArchitecture
        }
    }

```

## Obfuscation

In Android development, ProGuard is a popular tool used for obfuscating code. Proguard is a Java bytecode optimizer and 
obfuscator that come bundled with the Android Gradle Plugin. It helps in reducing the size of the app and obfuscating 
the code to make it harder for reverse engineers to understand. 

You can enable `Proguard/R8` in  app's `android/app/build.gradle` file:

```javascript

def enableProguardInReleaseBuilds = true

  buildTypes {
        release {
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    }

```


