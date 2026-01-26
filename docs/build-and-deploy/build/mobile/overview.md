---
last_update: { author: 'Vivek Raj' }
---

# Mobile Build Overview

WaveMaker enables building React Native mobile applications for iOS and Android through three methods: **[AppChef](./appchef)** (cloud GUI), **[wm-reactnative-cli](./cli)** (local/CI-CD), and **[Expo EAS Build](./expo)**. Each method generates signed APK, AAB, or IPA packages ready for testing or app store submission.

---

## Build Methods

### AppChef (Recommended for Quick Builds)

Cloud-based build service with web interface.

**Use when:**
- Quick builds without local setup
- No Android SDK or Xcode installed
- GUI-based workflow preferred
- Team testing with QR codes

**Limitations:**
- 25 apps maximum
- 10 builds per app
- Certificate upload required

Learn more: [AppChef](./appchef)

---

### wm-reactnative-cli (Recommended for CI/CD)

Command-line tool for local or CI/CD builds.

**Use when:**
- CI/CD pipeline integration needed
- Enterprise on-premise builds
- Certificate security critical
- Unlimited builds required

**Requirements:**
- Node.js 18.16.1, Java 11, Maven 3.8.6
- Android SDK (for Android)
- macOS + Xcode (for iOS)

Learn more: [CLI Builds](./cli)

---

### Expo EAS Build

Cloud builds using Expo infrastructure.

**Use when:**
- Expo ecosystem integration
- Custom native code with expo-dev-client
- Automated certificate management

**Pricing:**
- Free: 30 builds/month
- Production: $29/month (unlimited)

Learn more: [Expo Builds](./expo)

---

## Prerequisites

### For All Methods

**From WaveMaker Studio:**
- Export React Native zip from Studio
- Application configured (name, ID, version)

**Certificates:**

**Android:**
- Keystore file (`.keystore` or `.jks`)
- Keystore password, key alias, key password
- Generate: `keytool -genkey -v -keystore release.keystore`
- Learn more: [Android Keystore Generation](https://developer.android.com/studio/publish/app-signing#generate-key)

**iOS:**
- P12 certificate (Development or Distribution)
- Provisioning profile (`.mobileprovision`)
- Apple Developer account ($99/year)
- Learn more: [iOS Certificates](https://developer.apple.com/account/)

---

### Method-Specific Prerequisites

**AppChef:**
- Web browser only
- AppChef account (included with WaveMaker)

**CLI:**
- **Android:** [Android SDK](https://developer.android.com/studio), `ANDROID_HOME` variable
- **iOS:** macOS, [Xcode](https://developer.apple.com/xcode/), [CocoaPods](https://cocoapods.org/)
- Install CLI: `npm install -g @wavemaker/wm-reactnative-cli`

**Expo:**
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/): `npm install -g expo-cli`
- [EAS CLI](https://docs.expo.dev/build/introduction/): `npm install -g eas-cli`
- [Expo account](https://expo.dev/signup) (free or paid)

---

## Build Outputs

### Android

**APK (Android Package Kit):**
- Direct device installation
- Testing and internal distribution
- Single file for all devices

**AAB (Android App Bundle):**
- [Google Play Store](https://play.google.com/console) required format (new apps)
- Optimized, smaller downloads
- Cannot install directly

### iOS

**IPA (iOS App Store Package):**
- All distribution methods
- Provisioning profile determines installation:
  - **Development:** Registered devices only
  - **Ad Hoc:** Up to 100 registered devices
  - **App Store:** [App Store](https://appstoreconnect.apple.com/) distribution only
  - **Enterprise:** Unlimited devices (internal)

---

## Build Types

### Development Builds

**Purpose:** Testing, debugging, QA

**Android:**
- Debug keystore (auto-generated)
- APK output
- Installable via QR code

**iOS:**
- Development certificate required
- Device UUID registration required
- Development provisioning profile

### Production Builds

**Purpose:** App store submission

**Android:**
- Production keystore required
- AAB output (Play Store)
- Code signing with release certificate

**iOS:**
- Distribution certificate required
- App Store provisioning profile
- [TestFlight](https://developer.apple.com/testflight/) or direct [App Store](https://appstoreconnect.apple.com/) upload

---

## Comparison

| Feature | AppChef | CLI | Expo |
|---------|---------|-----|------|
| **Setup** | None | Node, Java, SDKs | Expo CLI |
| **Build location** | Cloud | Local/CI-CD | Cloud |
| **iOS builds** | Any OS | macOS only | Any OS |
| **Build limits** | 25 apps, 10 builds/app | Unlimited | 30/month (free) |
| **Cost** | Free | Free | Free/Paid |
| **QR codes** | Auto-generated | No | No |
| **CI/CD** | Limited | Excellent | Good |
| **Best for** | Quick testing | Production CI/CD | Expo ecosystem |

---

## Quick Start

**1. Export from Studio:**

File → Export → React Native Zip

**2. Choose build method and follow guide:**

- [AppChef Quick Start](./appchef#quick-start)
- [CLI Quick Start](./cli#quick-start)
- [Expo Quick Start](./expo#quick-start)

**3. Configure app details:**

- Application name, ID, version
- Platform settings
- Certificates

**4. Build and test:**

- Trigger build
- Download APK/AAB/IPA
- Install on devices or submit to stores

---

## Related Documentation

**Build Documentation:**
- [AppChef](./appchef) – Cloud-based builds with QR codes
- [CLI Builds](./cli) – Local/CI-CD builds with wm-reactnative-cli
- [Expo Builds](./expo) – Expo EAS Build integration
- [Configuration](./configuration) – App settings, permissions, plugins

**Publishing Documentation:**
- [Publishing Overview](../../publish/mobile/overview) – Distribution channels and workflow
- [Android Publishing](../../publish/mobile/android-publishing) – Google Play Store submission
- [iOS Publishing](../../publish/mobile/ios-publishing) – Apple App Store submission
- [Certificates and Signing](../../publish/mobile/certificates-and-signing) – Certificate management

**External Resources:**
- [WaveMaker Studio](https://www.wavemaker.com/) – Export React Native zip
- [AppChef](https://www.wavemakeronline.com/AppChef/#/Main) – Cloud build service
- [wm-reactnative-cli GitHub](https://github.com/wavemaker/wm-reactnative-cli) – CLI tool repository
- [Expo Documentation](https://docs.expo.dev/) – Expo ecosystem docs
