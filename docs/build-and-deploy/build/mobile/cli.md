---
last_update: { author: 'Vivek Raj' }
---

# CLI Builds

The `wm-reactnative-cli` builds React Native apps locally or in CI/CD pipelines. Provides full control over build environment and keeps certificates on local filesystem.

**GitHub:** [wavemaker/wm-reactnative-cli](https://github.com/wavemaker/wm-reactnative-cli)

---

## Installation

**Install globally:**

```bash
npm install -g @wavemaker/wm-reactnative-cli
```

**Verify:**

```bash
wm-reactnative --version
```

**Update:**

```bash
npm update -g @wavemaker/wm-reactnative-cli
```

---

## Prerequisites

### Universal

- **Node.js** 18.16.1+
- **Java JDK** 11
- **Maven** 3.8.6+ (for project export)

### Android

- **[Android Studio](https://developer.android.com/studio)** (provides SDK and tools)
- **Android SDK** Platform-specific versions
- **Environment variable:** `ANDROID_HOME` or `ANDROID_SDK_ROOT`

**Setup:**

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### iOS (macOS only)

- **macOS** operating system
- **[Xcode](https://developer.apple.com/xcode/)** latest stable version
- **Xcode Command Line Tools:** `xcode-select --install`
- **[CocoaPods](https://cocoapods.org/):** `sudo gem install cocoapods`

---

## Android Builds

### Debug Build

```bash
wm-reactnative build android "/path/to/react-native-zip"
```

**Output:** `app-debug.apk` (auto-generated debug keystore)

### Production Build

```bash
wm-reactnative build android "/path/to/react-native-zip" \
  --dest="/path/to/output" \
  --aKeyStore="/path/to/release.keystore" \
  --aStorePassword="keystore_password" \
  --aKeyAlias="key_alias" \
  --aKeyPassword="key_password" \
  --buildType="production"
```

**Parameters:**
- `--dest` – Output directory (optional)
- `--aKeyStore` – Keystore file path
- `--aStorePassword` – Keystore password
- `--aKeyAlias` – Key alias name
- `--aKeyPassword` – Key password
- `--buildType` – "production" for release builds

**Output:**
- **AAB:** `app-release.aab` (default for production)
- **APK:** `app-release.apk` (if AAB generation disabled)

### Build Duration

- First build: 15-30 minutes (downloads dependencies)
- Subsequent builds: 5-10 minutes (cached)

---

## iOS Builds

**macOS required.** iOS builds cannot run on Windows or Linux.

### Debug Build

```bash
wm-reactnative build ios "/path/to/react-native-zip" \
  --iCertificate="/path/to/development.p12" \
  --iCertificatePassword="p12_password" \
  --iProvisioningFile="/path/to/development.mobileprovision" \
  --iCodeSigningIdentity="iPhone Developer: Name (TeamID)"
```

**Output:** `app-debug.ipa`

### Production Build

```bash
wm-reactnative build ios "/path/to/react-native-zip" \
  --dest="/path/to/output" \
  --iCertificate="/path/to/distribution.p12" \
  --iCertificatePassword="p12_password" \
  --iProvisioningFile="/path/to/appstore.mobileprovision" \
  --iCodeSigningIdentity="iPhone Distribution: Company (TeamID)" \
  --buildType="production"
```

**Parameters:**
- `--iCertificate` – P12 certificate path
- `--iCertificatePassword` – P12 password
- `--iProvisioningFile` – Provisioning profile path
- `--iCodeSigningIdentity` – Certificate name from Keychain
- `--buildType` – "production" for release

**Find code signing identity:**

```bash
security find-identity -v -p codesigning
```

**Output:** `app-release.ipa`

### Build Duration

- First build: 20-40 minutes (CocoaPods install)
- Subsequent builds: 10-20 minutes (cached)

---

## Testing Builds

### Android

**Install via ADB:**

```bash
adb install /path/to/app-release.apk
```

**Direct installation:**

Transfer APK to device and install from file manager.

### iOS

**Install via Xcode:**

1. Connect device via USB
2. Xcode → Window → Devices and Simulators
3. Drag-and-drop IPA onto device

**Install via Apple Configurator 2:**

1. Download [Apple Configurator 2](https://apps.apple.com/app/apple-configurator-2/id1037126344)
2. Connect device
3. Drag IPA to Apps section

**TestFlight:**

Upload IPA to [App Store Connect](https://appstoreconnect.apple.com/) for beta testing.

---

## Troubleshooting

### Android

**ANDROID_HOME not set:**

```bash
export ANDROID_HOME=/path/to/android-sdk
```

**Gradle build failed:**

- Check Java version: `java -version` (requires Java 11)
- Clean cache: `./gradlew clean` in android directory

**Keystore errors:**

Verify keystore path and passwords:

```bash
keytool -list -v -keystore file.keystore
```

### iOS

**Xcode not found:**

```bash
sudo xcode-select --switch /Applications/Xcode.app
```

**Code signing failed:**

- Verify certificate imported to Keychain Access
- Check code signing identity matches certificate name
- Ensure provisioning profile includes certificate

**CocoaPods errors:**

```bash
# Update CocoaPods
sudo gem install cocoapods

# Clear cache
pod cache clean --all
```

---

## Summary

- **Install:** `npm install -g @wavemaker/wm-reactnative-cli`
- **Android:** Works on any OS, requires Android SDK
- **iOS:** Requires macOS, Xcode, CocoaPods
- **CI/CD:** Base64-encode certificates, store as secrets
- **Build times:** 15-30 min (first), 5-20 min (subsequent)

---

## Related Documentation

**Build Documentation:**
- [Overview](./overview) – Build methods comparison
- [AppChef](./appchef) – Cloud-based alternative
- [Expo Builds](./expo) – Expo EAS Build alternative
- [Configuration](./configuration) – App settings and certificates

**Publishing Documentation:**
- [Publishing Overview](../../publish/mobile/overview) – Distribution after building
- [Android Publishing](../../publish/mobile/android-publishing) – Upload AAB to Play Store
- [iOS Publishing](../../publish/mobile/ios-publishing) – Upload IPA to App Store
- [Certificates and Signing](../../publish/mobile/certificates-and-signing) – Certificate generation

**External Resources:**
- [wm-reactnative-cli GitHub](https://github.com/wavemaker/wm-reactnative-cli) – Official CLI repository
- [Android SDK Setup](https://developer.android.com/studio/intro/update#sdk-manager) – Android development environment
- [Xcode Installation](https://developer.apple.com/xcode/) – iOS development environment
- [CocoaPods](https://cocoapods.org/) – iOS dependency manager
