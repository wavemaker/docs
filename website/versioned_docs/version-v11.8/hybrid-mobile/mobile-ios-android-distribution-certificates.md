---
title: "Generating iOS and Android Distribution Certificates"
id: "mobile-ios-android-distribution-certificates"
sidebar_label: "Generating iOS and Android Distribution Certificates"
---
---

## Overview

In order to submit your apps to the app stores, they need to be signed. iOS apps must be signed with a Developer Certificate to be built at all, they must be
 signed with a Distribution Certificate to be submitted to the App store. Android apps can be built and run without signing during development, but must be signed for distribution. This process varies across platforms, see the individual platform for details.

## iOS

A Certificate and Mobile Provisioning file required to build your iOS apps, and in order to obtain these, a membership in the Apple Developer Program is
 required. During development, you will use a Development certificate which will allow you to install your iOS apps on a pre-selected set of specific
  devices (identified by their UUID). Once you're ready to publish, you'll sign the application with a Distribution certificate.


- [Creating key on Mac](#generating-p12-certificate-using-mac)
- [Creating key on Windows](#generating-p12-certificate-using-windows)
- [Register Devices](#register-devices)
- [Create Provisioning Profile](#create-provisioning-profile)

### Generating p12 certificate using Mac

You'll first need to obtain an Apple Developer Certificate. See apple documentation for this.

Next you'll export it to the P12 keystore format. To do this on Mac OS:

1. Open the Keychain Access application (in the Applications/Utilities folder).

2. If you have not already added the certificate to Keychain, select File > Import. Then navigate to the certificate file (the .cer file) you obtained from
 Apple.
 
3. Choose the Keys category in Keychain Access.

4. Choose the private key associated with your iPhone Development Certificate. The private key is identified by the iPhone Developer, public certificate that
 is paired with it.
 
5. Right-Click the iPhone Developer certificate and select, Export "iPhone Developer: Name.."

    ![mobile-build-app-signing-keychain-export](/learn/assets/mobile-build-app-signing-keychain-export.png)

6. Save the keystore in the Personal Information Exchange (.p12) file format.

7. You will be prompted to create a password that is used when you use the keystore to sign applications or transfer the key and certificate in this keystore to another keystore.

    ![mobile-build-app-signing-keychain-password](/learn/assets/mobile-build-app-signing-keychain-password.png)


### Generating p12 certificate using Windows

Convert an Apple developer certificate to a p12 file on Windows

To develop apps via Build, you must use a p12 certificate file. You generate this certificate based on the Apple iPhone developer certificate file you receive
 from Apple.

1. Download and install [OpenSSL](http://slproweb.com/products/Win32OpenSSL.html)

2. Convert the developer certificate file you receive from Apple into a PEM certificate file. To do this, run the following command-line statement from the
 [OpenSSL](http://slproweb.com/products/Win32OpenSSL.html) bin directory:

   ```openssl x509 -in developer_identity.cer -inform DER -out developer_identity.pem -outform PEM ```
 
3. If you are using the private key from the keychain on a Mac computer, convert it into a PEM key:

   ``` openssl pkcs12 -nocerts -in mykey.p12 -out mykey.pem```

4. You can now generate a valid P12 file, based on the key and the PEM version of the iPhone developer certificate:

   ``` openssl pkcs12 -export -inkey mykey.key -in developer_identity.pem -out iphone_dev.p12 ```

### Register devices

1. Visit [Apple Developer Portal](https://developer.apple.com/).

2. Go to the Device section. Under Manage tab, provide Device Name and Device UDID (40 hex characters).

3. Create Provisioning Profile

### Create Provisioning Profile

1. Visit [Apple Developer Portal](https://developer.apple.com/).

2. Go to the Provisioning section. Create a new profile under the Development tab.

3. Fill the form with Profile Name, Certificates (as per .cer above), App ID and your development device.

## Android
### Generating a private key

1. [Download and install Java](https://www.java.com/en/download/).

2. [Set Java_Home directory](https://docs.oracle.com/cd/E19182-01/820-7851/inst_cli_jdk_javahome_t/index.html).

3. Open the command prompt (cmd.exe) as an Administrator, then Run the following command:

   ```$ keytool -genkey -v -keystore [keystore_name].keystore -alias [alias_name] -keyalg RSA -keysize 2048 -validity 10000 ```
 
4. Keytool will ask for keystore password. Enter password and confirm:

    ![mobile-build-app-signing-android-keystore-pass](/learn/assets/mobile-build-app-signing-android-keystore-pass.png)

5. Next, keytool will ask for additional information. Supply appropriately:

    ![mobile-build-app-signing-additional-info](/learn/assets/mobile-build-app-signing-additional-info.png)

6. Next, keytool will ask password for Alias. Return if it's the same as keystore password. Othewise enter password and confirm:

    ![mobile-build-app-signing-alias-password](/learn/assets/mobile-build-app-signing-alias-password.png)

7. Your signing key is now ready to submit:

    ![mobile-build-app-signing-keystore-ready](/learn/assets/mobile-build-app-signing-keystore-ready.png)











