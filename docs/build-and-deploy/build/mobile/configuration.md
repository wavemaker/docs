---
last_update: { author: 'Vivek Raj' }
---

# Configuration

Mobile app configuration includes application identity, platform settings, permissions, plugins, and security. Configure in WaveMaker Studio before exporting React Native zip.

---

## Application Information

### Application Name

User-visible name displayed on device home screen and app stores.

**Recommendations:**
- 10-30 characters
- Title Case
- Match branding

### Application ID (Bundle Identifier)

Unique identifier in reverse domain format: `com.company.appname`

**Critical:**
- Must be globally unique
- Cannot change after app store publication
- Used for certificates and signing
- Lowercase, numbers, underscores only

**Examples:**
- `com.wavemaker.salesapp`
- `org.company.inventory`

### Version Information

**Version Number:** User-visible (e.g., `1.0.0`)
- Format: `MAJOR.MINOR.PATCH`
- Semantic versioning

**Version Code/Build Number:** Internal integer
- Android: Version Code (e.g., 1, 2, 3)
- iOS: Build Number (e.g., "1", "2")
- Must increment with every release

---

## Android Settings

### SDK Versions

**Target SDK:** API 34+ (Android 14) recommended
- Google Play requirement
- Determines available features

**Minimum SDK:** API 21+ (covers 99% of devices)
- Lower = wider compatibility
- Higher = newer features

**Check distribution:** [Android Studio Dashboard](https://developer.android.com/about/dashboards)

### Permissions

**Common permissions:**

```xml
<!-- Network -->
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

<!-- Camera and media -->
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />

<!-- Location -->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

<!-- Notifications (Android 13+) -->
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
```

**Permission types:**
- **Normal:** Auto-granted (internet, network state)
- **Dangerous:** Require runtime approval (camera, location)

Configure in Studio → Project Settings → Mobile Settings → Android

### App Signing

**Debug keystore:** Auto-generated for development

**Production keystore:** Required for Play Store

Generate:
```bash
keytool -genkey -v -keystore release.keystore \
  -alias release-key -keyalg RSA -keysize 2048 -validity 10000
```

**Critical:** Backup keystore securely. Cannot update published apps if lost.

### Build Output

- **APK:** Direct installation, testing
- **AAB:** Play Store required (new apps since August 2021)

---

## iOS Settings

### Deployment Target

Minimum iOS version: iOS 13.0+ recommended (95% coverage)

**Check distribution:** [Apple iOS Statistics](https://developer.apple.com/support/app-store/)

### Device Support

- **iPhone only:** Phone-specific apps
- **iPad only:** Tablet-optimized apps
- **Universal:** Both (recommended for maximum reach)

### Capabilities (Entitlements)

Enable in [Apple Developer Portal](https://developer.apple.com/account/) → App ID:

- Push Notifications
- In-App Purchase
- iCloud
- Apple Pay
- HealthKit
- Sign in with Apple

Regenerate provisioning profiles after enabling capabilities.

### Privacy Permissions

Required usage descriptions in `Info.plist`:

```xml
<!-- Camera -->
<key>NSCameraUsageDescription</key>
<string>This app requires camera access to take photos.</string>

<!-- Location -->
<key>NSLocationWhenInUseUsageDescription</key>
<string>This app uses your location to show nearby places.</string>

<!-- Photos -->
<key>NSPhotoLibraryUsageDescription</key>
<string>This app needs access to your photos.</string>

<!-- Microphone -->
<key>NSMicrophoneUsageDescription</key>
<string>This app requires microphone access for recording.</string>
```

**App Store requirement:** Clear, specific explanations. Generic descriptions cause rejection.

### URL Schemes

**Custom URL schemes:** `myapp://path`

```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>myapp</string>
        </array>
    </dict>
</array>
```

**Universal Links:** `https://example.com/path` (preferred, more secure)

Requires `apple-app-site-association` file on web server.

---

## Cordova Plugins

Plugins provide native device functionality to React Native apps.

### Pre-Configured Plugins

WaveMaker includes:
- **cordova-plugin-camera** – Camera and photo library access
- **cordova-plugin-geolocation** – GPS location
- **cordova-plugin-file** – File system access
- **cordova-plugin-network-information** – Network status
- **cordova-plugin-device** – Device information
- **cordova-plugin-statusbar** – Status bar control

### Adding Custom Plugins

**In WaveMaker Studio:**

1. Project Settings → Mobile Settings → Plugins
2. Add plugin by npm package name or Git URL
3. Configure plugin variables if required
4. Export React Native zip

**Popular third-party plugins:**
- **phonegap-plugin-push** – Push notifications
- **phonegap-plugin-barcodescanner** – QR/barcode scanning
- **cordova-sqlite-storage** – Local database
- **cordova-plugin-inappbrowser** – In-app browser

**Plugin search:** [Cordova Plugins](https://cordova.apache.org/plugins/)

### Plugin Compatibility

- Not all Cordova plugins work with React Native architecture
- Test plugins after integration
- Check plugin documentation for React Native support

---

## Domain Whitelisting

Controls external domain access for security.

### Whitelist Types

**Network requests (API calls):**

```xml
<access origin="https://api.company.com" />
<access origin="https://*.example.com" />
```

**Navigation (OAuth, redirects):**

```xml
<allow-navigation href="https://accounts.google.com/*" />
```

**Intents (Android - external apps):**

```xml
<allow-intent href="https://*/*" />
<allow-intent href="tel:*" />
<allow-intent href="mailto:*" />
```

### Common Scenarios

**Backend API:**
```xml
<access origin="https://api.company.com" />
<allow-navigation href="https://api.company.com/*" />
```

**OAuth providers:**
```xml
<access origin="https://accounts.google.com" />
<allow-navigation href="https://accounts.google.com/*" />
```

**CDN resources:**
```xml
<access origin="https://cdn.company.com" />
```

### Platform-Specific Security

**iOS App Transport Security (ATS):**

HTTPS enforced by default. Allow HTTP only for specific domains:

```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSExceptionDomains</key>
    <dict>
        <key>example.com</key>
        <dict>
            <key>NSExceptionAllowsInsecureHTTPLoads</key>
            <true/>
        </dict>
    </dict>
</dict>
```

**Android Network Security:**

Android 9+ blocks HTTP by default. Configure `network_security_config.xml`:

```xml
<network-security-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">example.com</domain>
    </domain-config>
</network-security-config>
```

**Best practice:** Always use HTTPS for production APIs.

---

## Summary

**Application Info:**
- Application ID permanent after publication
- Version number and code must increment

**Android:**
- Target SDK 34+, Minimum SDK 21+
- Permissions: Normal (auto) vs Dangerous (runtime)
- Backup production keystore securely

**iOS:**
- Deployment target iOS 13.0+
- Enable capabilities in Apple Developer Portal
- Privacy descriptions required

**Plugins:**
- Pre-configured plugins included
- Add custom plugins via npm or Git
- Test compatibility with React Native

**Whitelisting:**
- Network requests, navigation, intents
- Platform-specific security (ATS, Network Security Config)
- Always use HTTPS for production

---

## Related Documentation

**Build Documentation:**
- [Overview](./overview) – Build methods comparison
- [AppChef](./appchef) – Upload certificates to cloud builds
- [CLI](./cli) – Provide certificates to local builds
- [Expo Builds](./expo) – Configure certificates in EAS

**Publishing Documentation:**
- [Publishing Overview](../../publish/mobile/overview) – App ID and version management
- [Certificates and Signing](../../publish/mobile/certificates-and-signing) – Certificate generation and management
- [Android Publishing](../../publish/mobile/android-publishing) – Play Store app configuration
- [iOS Publishing](../../publish/mobile/ios-publishing) – App Store capabilities and privacy

**External Resources:**
- [Android Developer Guide](https://developer.android.com/guide) – Android platform documentation
- [iOS Developer Guide](https://developer.apple.com/documentation/) – iOS platform documentation
- [Cordova Plugins](https://cordova.apache.org/plugins/) – Available plugins directory
- [Android Permissions](https://developer.android.com/guide/topics/permissions/overview) – Permission system
- [iOS Privacy Manifest](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files) – Privacy requirements
