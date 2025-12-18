# AppChef & CLI Tools

Learn how to use AppChef and command-line tools for building and managing mobile applications.

## Overview
AppChef and CLI tools provide automated workflows for building, testing, and deploying mobile applications without manual intervention in IDEs.

## AppChef Platform

### What is AppChef?
AppChef is a cloud-based mobile app building and management platform that automates the build, test, and deployment process for mobile applications.

### Key Features
- **Cloud Builds** - Build apps without local setup
- **Automated Signing** - Manage certificates and profiles
- **Multi-platform** - iOS and Android support
- **Version Management** - Track and manage versions
- **Distribution** - Deploy to testers and stores
- **Build Monitoring** - Track build status and logs

### Getting Started

#### Account Setup
```bash
# Sign up for AppChef account
# https://appchef.example.com/signup

# Install AppChef CLI
npm install -g appchef-cli

# Login to AppChef
appchef login
```

#### Project Configuration
```json
// appchef.json
{
  "project": {
    "name": "MyMobileApp",
    "platforms": ["ios", "android"],
    "repository": "https://github.com/user/repo.git",
    "branch": "main"
  },
  "build": {
    "ios": {
      "scheme": "MyApp",
      "configuration": "Release",
      "exportMethod": "app-store"
    },
    "android": {
      "variant": "release",
      "gradleTask": "bundleRelease"
    }
  },
  "distribution": {
    "testflight": {
      "enabled": true,
      "groups": ["beta-testers"]
    },
    "playstore": {
      "enabled": true,
      "track": "internal"
    }
  }
}
```

### Building with AppChef

#### Trigger Build
```bash
# Build for iOS
appchef build --platform ios

# Build for Android
appchef build --platform android

# Build both platforms
appchef build --platform all

# Build with specific configuration
appchef build --platform ios --config Release
```

#### Monitor Build
```bash
# Check build status
appchef status <build-id>

# View build logs
appchef logs <build-id>

# List recent builds
appchef builds --limit 10
```

### Certificate Management

#### iOS Certificates
```bash
# Upload certificates
appchef certs:add --type distribution --cert cert.p12

# List certificates
appchef certs:list

# Update provisioning profile
appchef profiles:add --file profile.mobileprovision
```

#### Android Keystores
```bash
# Upload keystore
appchef keystore:add --file release.keystore

# Configure signing
appchef keystore:config \
  --alias my-key \
  --store-password $STORE_PASS \
  --key-password $KEY_PASS
```

## Command-Line Tools

### React Native CLI

#### Build Commands
```bash
# iOS development build
npx react-native run-ios

# iOS release build
npx react-native run-ios --configuration Release

# Android development build
npx react-native run-android

# Android release build
npx react-native run-android --variant=release

# Build for specific device
npx react-native run-ios --device "iPhone 13"
```

#### Release Build Scripts
```bash
# iOS release script
#!/bin/bash
cd ios
xcodebuild -workspace MyApp.xcworkspace \
  -scheme MyApp \
  -configuration Release \
  -archivePath build/MyApp.xcarchive \
  archive

xcodebuild -exportArchive \
  -archivePath build/MyApp.xcarchive \
  -exportPath build \
  -exportOptionsPlist ExportOptions.plist

# Android release script
#!/bin/bash
cd android
./gradlew bundleRelease
```

### Flutter CLI

#### Build Commands
```bash
# iOS build
flutter build ios --release

# iOS build with codesign
flutter build ios --release --no-codesign

# Android APK
flutter build apk --release

# Android App Bundle
flutter build appbundle --release

# Build with split per ABI
flutter build apk --split-per-abi

# Build for specific target
flutter build ios --release --flavor production
```

#### Build Configuration
```yaml
# pubspec.yaml
flutter:
  android:
    package: com.example.app
  ios:
    bundle-id: com.example.app

# Build with version
flutter build appbundle --build-name=1.0.0 --build-number=1
```

### Ionic CLI

#### Build Commands
```bash
# Build web assets
ionic build --prod

# Build iOS
ionic capacitor build ios --release

# Build Android
ionic capacitor build android --release

# Build with configuration
ionic build --prod --configuration=production
```

#### Capacitor Commands
```bash
# Add platforms
ionic capacitor add ios
ionic capacitor add android

# Sync web assets
ionic capacitor sync

# Open in IDE
ionic capacitor open ios
ionic capacitor open android
```

### Cordova CLI

#### Build Commands
```bash
# Add platforms
cordova platform add ios
cordova platform add android

# Build iOS
cordova build ios --release

# Build Android
cordova build android --release

# Build with device
cordova run ios --device

# Build with emulator
cordova emulate android
```

#### Build Configuration
```xml
<!-- config.xml -->
<widget id="com.example.app" version="1.0.0">
    <platform name="ios">
        <preference name="deployment-target" value="13.0"/>
    </platform>
    <platform name="android">
        <preference name="android-minSdkVersion" value="22"/>
        <preference name="android-targetSdkVersion" value="33"/>
    </platform>
</widget>
```

## Fastlane

### Installation
```bash
# Install Fastlane
sudo gem install fastlane

# Initialize in project
cd ios
fastlane init

cd ../android
fastlane init
```

### iOS Fastlane Configuration

#### Fastfile
```ruby
default_platform(:ios)

platform :ios do
  desc "Build and upload to TestFlight"
  lane :beta do
    increment_build_number
    build_app(
      scheme: "MyApp",
      export_method: "app-store"
    )
    upload_to_testflight(
      skip_waiting_for_build_processing: true
    )
  end

  desc "Deploy to App Store"
  lane :release do
    increment_build_number
    build_app(
      scheme: "MyApp",
      export_method: "app-store"
    )
    upload_to_app_store(
      submit_for_review: true,
      automatic_release: false
    )
  end

  desc "Take screenshots"
  lane :screenshots do
    capture_screenshots
    frame_screenshots
  end
end
```

### Android Fastlane Configuration

#### Fastfile
```ruby
default_platform(:android)

platform :android do
  desc "Build and upload to internal track"
  lane :beta do
    gradle(
      task: "bundle",
      build_type: "Release"
    )
    upload_to_play_store(
      track: "internal",
      skip_upload_metadata: true,
      skip_upload_images: true,
      skip_upload_screenshots: true
    )
  end

  desc "Deploy to production"
  lane :release do
    gradle(
      task: "bundle",
      build_type: "Release"
    )
    upload_to_play_store(
      track: "production",
      skip_upload_metadata: false
    )
  end

  desc "Increment version code"
  lane :bump_version do
    increment_version_code(
      gradle_file_path: "app/build.gradle"
    )
  end
end
```

### Running Fastlane
```bash
# iOS TestFlight
cd ios && fastlane beta

# iOS App Store
cd ios && fastlane release

# Android Internal Testing
cd android && fastlane beta

# Android Production
cd android && fastlane release
```

## Gradle Commands (Android)

### Build Commands
```bash
# Debug build
./gradlew assembleDebug

# Release build
./gradlew assembleRelease

# Build all variants
./gradlew assemble

# Generate AAB
./gradlew bundleRelease

# Clean build
./gradlew clean assembleRelease

# Build with specific flavor
./gradlew assembleProdRelease
```

### Testing Commands
```bash
# Run unit tests
./gradlew test

# Run instrumented tests
./gradlew connectedAndroidTest

# Generate test report
./gradlew testDebugUnitTest
```

## Xcodebuild Commands (iOS)

### Build Commands
```bash
# Build workspace
xcodebuild -workspace MyApp.xcworkspace \
  -scheme MyApp \
  -configuration Release \
  build

# Archive
xcodebuild -workspace MyApp.xcworkspace \
  -scheme MyApp \
  -configuration Release \
  -archivePath build/MyApp.xcarchive \
  archive

# Export IPA
xcodebuild -exportArchive \
  -archivePath build/MyApp.xcarchive \
  -exportPath build \
  -exportOptionsPlist ExportOptions.plist
```

### ExportOptions.plist
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>method</key>
    <string>app-store</string>
    <key>teamID</key>
    <string>YOUR_TEAM_ID</string>
    <key>uploadBitcode</key>
    <true/>
    <key>uploadSymbols</key>
    <true/>
</dict>
</plist>
```

## CI/CD Integration

### GitHub Actions
```yaml
name: Build Mobile App

on:
  push:
    branches: [main]

jobs:
  build-ios:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build iOS
        run: |
          cd ios
          fastlane beta

  build-android:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build Android
        run: |
          cd android
          fastlane beta
```

### Bitrise
```yaml
workflows:
  primary:
    steps:
    - activate-ssh-key@4: {}
    - git-clone@4: {}
    - install-missing-android-tools@2: {}
    - fastlane@2:
        inputs:
        - lane: beta
```

## Environment Management

### Environment Variables
```bash
# Set environment variables
export ANDROID_HOME=/path/to/android-sdk
export JAVA_HOME=/path/to/jdk

# iOS code signing
export MATCH_PASSWORD=$MATCH_PASSWORD
export FASTLANE_USER=$APPLE_ID
export FASTLANE_PASSWORD=$APPLE_PASSWORD

# Android signing
export KEYSTORE_PASSWORD=$KEYSTORE_PASS
export KEY_PASSWORD=$KEY_PASS
```

### .env Files
```bash
# .env.production
API_URL=https://api.production.com
ENV=production
ANALYTICS_KEY=prod_key_12345

# .env.staging
API_URL=https://api.staging.com
ENV=staging
ANALYTICS_KEY=staging_key_67890
```

## Best Practices

1. **Automate builds** with CI/CD
2. **Version control** build configurations
3. **Secure credentials** in CI/CD secrets
4. **Use Fastlane** for consistent builds
5. **Maintain separate** dev/staging/prod builds
6. **Test builds** before distribution
7. **Keep tools updated**
8. **Document build process**
9. **Monitor build times**
10. **Use caching** for faster builds

## Troubleshooting

### Common Issues

#### Code Signing Errors (iOS)
```bash
# Clean build
rm -rf ~/Library/Developer/Xcode/DerivedData

# Reset certificates
fastlane match nuke development
fastlane match nuke distribution
```

#### Gradle Build Failures (Android)
```bash
# Clean gradle cache
./gradlew clean
rm -rf ~/.gradle/caches

# Rebuild
./gradlew assembleRelease --stacktrace
```

## Related Documentation

- [Mobile Overview](./mobile_overview.md)
- [Public App Stores](./app_stores.md)
- [CI/CD Deployment](../Deployment-CI_CD/one_click_deployment.md)
