# Mobile App Build & Publish Overview

Comprehensive guide to building and publishing mobile applications for iOS and Android platforms.

## Overview
This guide covers the complete process of building, testing, and publishing mobile applications to app stores and enterprise distribution channels.

## Mobile App Types

### Native Applications
- **iOS** - Swift or Objective-C
- **Android** - Kotlin or Java
- Full platform integration
- Best performance
- Platform-specific development

### Hybrid Applications
- **Cordova/PhoneGap** - Web technologies in native wrapper
- **Ionic** - Angular/React/Vue with Capacitor
- Single codebase
- Web technologies (HTML, CSS, JS)
- Access to native features via plugins

### Cross-Platform Applications
- **React Native** - JavaScript with native components
- **Flutter** - Dart with custom rendering
- **Xamarin** - C# with .NET
- Single codebase
- Near-native performance
- Shared business logic

## Build Process

### Development Build
- Debug mode enabled
- Development certificates
- Fast iteration
- Simulator/Emulator compatible
- Debug symbols included

### Staging/Beta Build
- Beta testing version
- TestFlight (iOS) / Internal Testing (Android)
- Limited distribution
- Crash reporting enabled
- Analytics enabled

### Production Build
- Optimized and minified
- Production certificates
- App Store ready
- Full features enabled
- Maximum performance

## Platform-Specific Requirements

### iOS Requirements

#### Development Setup
- macOS machine
- Xcode (latest version)
- Apple Developer Account ($99/year)
- iOS device for testing
- Provisioning profiles
- Certificates

#### Build Configuration
```json
{
  "ios": {
    "bundleIdentifier": "com.example.app",
    "buildNumber": "1",
    "version": "1.0.0",
    "supportsTablet": true,
    "infoPlist": {
      "NSCameraUsageDescription": "App needs camera access"
    }
  }
}
```

### Android Requirements

#### Development Setup
- Android Studio
- Java Development Kit (JDK)
- Android SDK
- Google Play Developer Account ($25 one-time)
- Android device/emulator

#### Build Configuration
```gradle
android {
    compileSdkVersion 33
    defaultConfig {
        applicationId "com.example.app"
        minSdkVersion 21
        targetSdkVersion 33
        versionCode 1
        versionName "1.0.0"
    }
    buildTypes {
        release {
            minifyEnabled true
            shrinkResources true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt')
        }
    }
}
```

## Code Signing

### iOS Code Signing

#### Certificates
- **Development Certificate** - Local testing
- **Distribution Certificate** - App Store deployment
- **Ad Hoc Certificate** - Limited device distribution
- **Enterprise Certificate** - Internal distribution

#### Provisioning Profiles
- Development profile
- Ad Hoc profile
- App Store profile
- Enterprise profile

#### Automatic Signing
```swift
// Xcode automatically manages signing
// Enable in project settings:
// Signing & Capabilities → Automatically manage signing
```

### Android Code Signing

#### Keystore Creation
```bash
keytool -genkey -v -keystore my-release-key.keystore \
  -alias my-key-alias \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000
```

#### Signing Configuration
```gradle
android {
    signingConfigs {
        release {
            storeFile file("my-release-key.keystore")
            storePassword System.getenv("KEYSTORE_PASSWORD")
            keyAlias "my-key-alias"
            keyPassword System.getenv("KEY_PASSWORD")
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
```

## Build Tools & Frameworks

### React Native
```bash
# iOS build
npx react-native run-ios --configuration Release

# Android build
npx react-native run-android --variant=release

# Generate APK
cd android && ./gradlew assembleRelease

# Generate AAB (Android App Bundle)
cd android && ./gradlew bundleRelease
```

### Flutter
```bash
# iOS build
flutter build ios --release

# Android APK
flutter build apk --release

# Android App Bundle
flutter build appbundle --release

# Build for specific architecture
flutter build apk --split-per-abi
```

### Ionic/Capacitor
```bash
# Build web assets
ionic build --prod

# Add platforms
ionic cap add ios
ionic cap add android

# Build iOS
ionic cap build ios

# Build Android
ionic cap build android
```

### Xamarin
```bash
# iOS build
msbuild MyApp.iOS.csproj /t:Build /p:Configuration=Release

# Android build
msbuild MyApp.Android.csproj /t:SignAndroidPackage /p:Configuration=Release
```

## App Store Submission

### iOS - App Store Connect

#### Prerequisites
- Valid Apple Developer account
- App Store distribution certificate
- App Store provisioning profile
- App screenshots
- App description and metadata

#### Submission Process
1. Create app record in App Store Connect
2. Build and archive in Xcode
3. Upload to App Store Connect
4. Fill in app information
5. Submit for review
6. Wait for approval (1-3 days typically)

#### App Store Guidelines
- Follow Human Interface Guidelines
- No private APIs
- Proper use of user data
- Clear purpose for permissions
- Age-appropriate content

### Android - Google Play Console

#### Prerequisites
- Google Play Developer account
- Signed APK or AAB
- App screenshots
- Privacy policy URL
- Content rating

#### Submission Process
1. Create app in Play Console
2. Upload APK/AAB
3. Fill in store listing
4. Set content rating
5. Set pricing and distribution
6. Submit for review
7. Wait for approval (few hours to days)

#### Play Store Guidelines
- Follow Material Design guidelines
- Proper permission usage
- Clear privacy policy
- Safe and secure content
- No prohibited content

## Beta Testing

### iOS - TestFlight

#### Setup
```bash
# Upload build to App Store Connect
# Build is automatically available in TestFlight

# Internal testing (up to 100 users)
# No review required

# External testing (up to 10,000 users)
# Requires Apple review
```

#### Distribution
- Send TestFlight invite links
- Users install TestFlight app
- Beta builds expire after 90 days
- Collect feedback and crash reports

### Android - Internal/Closed Testing

#### Setup
1. Upload APK/AAB to Play Console
2. Create test track (Internal/Closed/Open)
3. Add testers (email list or Google Group)
4. Share opt-in URL with testers

#### Testing Tracks
- **Internal Testing** - Quick sharing (up to 100 users)
- **Closed Testing** - Targeted testing
- **Open Testing** - Public beta
- **Production** - Full release

## App Updates

### Version Management

#### Semantic Versioning
```
MAJOR.MINOR.PATCH
Example: 2.3.1

MAJOR: Breaking changes
MINOR: New features
PATCH: Bug fixes
```

#### iOS Versioning
```
Version: 1.2.3 (user-facing)
Build: 123 (incremental, must increase)
```

#### Android Versioning
```
versionName: "1.2.3" (user-facing)
versionCode: 123 (incremental, must increase)
```

### Update Distribution

#### Forced Updates
```javascript
// Check version on app start
const currentVersion = "1.2.3";
const minimumVersion = await fetchMinimumVersion();

if (compareVersions(currentVersion, minimumVersion) < 0) {
  showForceUpdateDialog();
}
```

#### Over-The-Air (OTA) Updates
- CodePush (React Native)
- Expo Updates
- AppCenter CodePush
- Hot updates for JS/assets only

## Performance Optimization

### Build Optimization

#### iOS
- Enable Bitcode
- Optimize Swift compilation
- Strip debug symbols
- Use App Thinning

#### Android
- Enable ProGuard/R8
- Enable resource shrinking
- Use App Bundle
- Optimize images

### Bundle Size Reduction
```bash
# Analyze bundle size
# iOS
xcrun xcodebuild -showBuildSettings

# Android
./gradlew assembleRelease --scan

# React Native bundle analyzer
npx react-native-bundle-visualizer
```

## Continuous Integration

### Fastlane
```ruby
# Fastfile
lane :ios_release do
  increment_build_number
  build_app(scheme: "MyApp")
  upload_to_testflight
end

lane :android_release do
  gradle(task: "bundleRelease")
  upload_to_play_store
end
```

### CI/CD Platforms
- GitHub Actions
- Bitrise
- CircleCI
- Azure DevOps
- GitLab CI/CD
- Jenkins

## Monitoring & Analytics

### Crash Reporting
- Firebase Crashlytics
- Sentry
- Bugsnag
- AppCenter

### Analytics
- Firebase Analytics
- Google Analytics
- Mixpanel
- Amplitude

### Performance Monitoring
- Firebase Performance
- New Relic Mobile
- AppDynamics

## Enterprise Distribution

### iOS Enterprise Program
- $299/year
- Internal distribution only
- No App Store review
- Distribution via MDM or direct download

### Android Enterprise
- Managed Google Play
- Private apps
- Distribution to managed devices
- EMM/MDM integration

## Best Practices

1. **Automate builds** with CI/CD
2. **Test on real devices** before release
3. **Maintain version history** and changelogs
4. **Monitor crashes** and fix promptly
5. **Respond to reviews** professionally
6. **Keep dependencies updated**
7. **Follow platform guidelines** strictly
8. **Test across device sizes** and OS versions
9. **Implement proper error handling**
10. **Plan release schedule** and communicate

## Related Documentation

- [AppChef & CLI](./appchef_cli.md)
- [Public App Stores](./app_stores.md)
- [CI/CD Deployment](../Deployment-CI_CD/one_click_deployment.md)
