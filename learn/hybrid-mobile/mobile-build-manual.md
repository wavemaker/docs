---
title: "Mobile Build - Manual"
id: ""
---

The **Build** process for a mobile application can be performed through Automated Build process where you can generate .apk (Android application package) or .ipa file (iOS App Store package). Another way is to download Cordova/PhoneGap compatible .zip files to build systems manually for Android/iOS platforms.

WaveMaker Studio supports you to build mobile applications in the following ways:

- **[Build for Android](/learn/hybrid-mobile/mobile-build-android/)**: Through this build, you can generate APK files which can be signed and hosted on PlayStore.
- **[Send to PhoneGap](/learn/hybrid-mobile/mobile-build-phonegap/)**: Through this build, it provides you a complete package of building both apk/ipa files for Android and iOS platforms.
- **[Manual Build](#manual)**: Through this build, you can generate or download a .zip file which can be further developed to be hosted on any mobile platform.

# Manual Build - Cordova zip

If you want to customize build process you can issue Cordova/PhoneGap commands seamlessly for building artifacts.

To perform a Cordova Build, from the **Main Menu** of the Project Workspace, under **Export** option select **Download as Cordova Zip.** It opens the **Build Cordova Zip** window.

[![](/learn/assets/Cordova_Zip.png)](/learn/assets/Cordova_Zip.png)

Before clicking on Save/Build, you need to set the build properties: Refer to the properties section of [Android Build](#android) and [iOS  Build](/learn/docs/mobile-build/#iOS_Build).

[![](/learn/assets/Build_Cordova_Zip.png)](/learn/assets/Build_Cordova_Zip.png) To save the properties for future builds,  click **Save. **Click on **Build** to download the zip file.

1. Ensure that Cordova@8.0.0 is setup on your machine, [see here for details](https://cordova.apache.org/).
2. Extract the zip contents (say, CORDOVA\_PROJECT folder)
3. In the terminal, go to CORDOVA\_PROJECT (where the file was extracted to) directory and run the following commands:
    - **For Android**:
        
        $cordova platform add android@7.0.0
        
        The above command will add Android Platform to your project structure and also install all plugins that you specified in config.xml.
        
        $cordova build
        
        Once the build completes you can find the debug version of .apk in your platform/android/build/outputs/apk folder.
        - **For publishing to Play store**
            - You need a Keystore for signing your apk if you do not have the Keystore create one [following these instructions](http://docs.phonegap.com/phonegap-build/signing/android/#generating-a-private-key).
            - In CORDOVA\_PROJECT/platforms/android folder, create a file named "**release-signing.properties**" with following details:
                
                storeFile=<path to keystore file>
                storePassword=<your\_store\_password>
                storeType=<your\_store\_type> (eg JKS)
                keyAlias=<your\_key\_alias>
                keyPassword=<your\_key\_password>
                
            - Run the following command
                
                $cordova build --release
                
    - **For iOS** Run the following commands in your Mac:
        
        $cordova platform add ios
        $cordova build ios --device
        
        This will produce the .ipa file and you can install it on your iOS device using iTunes or XCode.
        - In XCode, go to Windows → Devices then add your .ipa file to the device. Open the project in Xcode and run the following command:
            
            open CORDOVA\_PROJECT/platforms/ios/\*.xcodeproj
            
        - Using Xcode, one can run the project in emulators or create a .ipa file to publish. [See here for more details](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/LaunchingYourApponDevices/LaunchingYourApponDevices.html).
        - To install the app on an iPhone, connect a device to the MacBook with USB cable.
        - Select that device in Xcode and click on run button. This will install the app on the device.

### **PhoneGap**

If you have PhoneGap installed in your system, it can allow both Cordova and PhoneGap commands to build apps.

For eg: You can issue PhoneGap commands like below:

$phonegap platform add ios
$phonegap build ios

Or you can safely issue Cordova commands as well.

$phonegap cordova platform add ios
$phonegap cordova build ios --device

B.3 Platform Installer

- 3.1 Test Run (Preview)
    - [i. App Preview](/learn/hybrid-mobile/test-run/#preview)
    - [iii. Debugging Mobile Apps](/learn/hybrid-mobile/debugging-mobile-apps/)
        - [○ on Android](/learn/hybrid-mobile/debugging-mobile-apps/#android)
        - [○ on iOS](/learn/hybrid-mobile/debugging-mobile-apps/#ios)
    - [iv. Testing using Wavelens](/learn/hybrid-mobile/testing-hybrid-mobile-apps-using-wavelens/)
- [3.2 Mobile Build](#)
    - [i. Android Build](/learn/hybrid-mobile/mobile-build/#android)
    - [ii. Send to PhoneGap](/learn/hybrid-mobile/mobile-build-phonegap/#phonegap)
    - [iii. Manual build - Using cordova zip](#)
