---
title: "Obfuscating, Shrink and optimize"
id: "obfuscating-shrink-optimize"
sidebar_label: "Obfuscating, Shrink and optimize"
---
---

Optimizing and obfuscating an Android app is an essential part of the development process to improve performance, reduce the app's size, and enhance security.

## Use Proguard/R8

Obfuscation is a technique used in software development to make the source code or binaries of a program more difficult to understand or reverse engineer. It's commonly employed in various contexts, including Android app development, to enhance security and protect intellectual property. Obfuscation is especially useful for protecting sensitive algorithms, API keys, and proprietary code. In Android development, ProGuard and R8 are popular tools for obfuscating code.

Proguard and R8 are Java bytecode optimizers and obfuscators that come bundled with the Android Gradle Plugin. They help in reducing the size of the app and obfuscating the code to make it harder for reverse engineers to understand. You can enable `Proguard/R8` in  app's `android/app/build.gradle` file:

```javascript

def enableProguardInReleaseBuilds = true

  buildTypes {
        release {
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    }

```

## Build App Based on CPU architecture

In Android app development, the `enableSeparateBuildPerCPUArchitecture` is a Gradle property that you can use to configure your build process to generate separate APKs (Android Package files) for different CPU architectures. This can be useful for optimizing app's size and performance on specific devices. 

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

## Shrink Resources 

In Android app development, the `shrinkResources` flag is used to enable or disable resource shrinking during the build process. Resource shrinking is a technique that helps reduce the size of your app's APK (Android Package file) by removing unused resources from the APK. These resources can include images, layouts, drawables, and other assets that are not referenced in your app code.

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

Resource shrinking is particularly useful for optimizing your app's size, which is important for reducing the download size for users and improving overall performance. It can significantly reduce the size of your APK by removing assets that are not needed, such as unused images, layouts, or even specific language resources if you have multiple language support.
