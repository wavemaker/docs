---
last_update: { author: 'Vivek Raj' }
---

# AppChef

AppChef is WaveMaker's cloud-based mobile build service that generates signed APK, AAB, and IPA files through a web interface. No local Android SDK or Xcode installation required.

**Access AppChef:** [https://www.wavemakeronline.com/AppChef/#/Main](https://www.wavemakeronline.com/AppChef/#/Main)

---

## Quick Start

**1. Upload React Native zip**

- Login to AppChef
- Click **Upload Build** or drag-and-drop zip file
- Wait for upload to complete

**2. Configure app information**

- **Application Name:** User-visible app name
- **Application ID:** `com.company.appname` (permanent)
- **Version:** `1.0.0` format
- **Developer details:** Name, email, website

**3. Select build type**

- **Development:** Testing, internal QA (Android: debug keystore, iOS: development cert)
- **Production:** App store submission (production certificates required)

**4. Configure certificates**

**Android:**
- Select `_DEBUG` (development) or upload production keystore
- For production: Upload `.keystore` file, enter passwords and alias

**iOS:**
- Upload P12 certificate (`.p12`) and provisioning profile (`.mobileprovision`)
- Enter P12 password
- Unlock certificate (24-hour window)

**5. Build**

- Click **Build** button
- Build queues on cloud servers
- Monitor status: Queued → Processing → Success/Failed
- Download APK/AAB/IPA from MyApps dashboard

---

## Android Builds

### Debug Builds

**`_DEBUG` certificate:**
- Built-in, auto-selected for development builds
- No upload required
- Generates `app-debug.apk`
- Cannot be used for Play Store

**Output:** APK only (direct installation)

### Production Builds

**Keystore required:**

Generate keystore:
```bash
keytool -genkey -v -keystore release.keystore \
  -alias release-key -keyalg RSA -keysize 2048 -validity 10000
```

Upload to AppChef:
- Keystore file path
- Keystore password
- Key alias
- Key password

**Output:**
- **AAB** (default): [Play Store](https://play.google.com/console) submission
- **APK** (optional): Direct installation, testing

**Change output format:** Android Package dropdown → Select APK or AAB

### QR Code Installation (Android)

APK builds automatically generate QR codes:

1. Scan QR code with Android device
2. Download APK
3. Enable "Install from unknown sources"
4. Install app

**Note:** AAB builds do not generate QR codes (Play Store only)

---

## iOS Builds

### Certificate Requirements

**Always required:**
- P12 certificate (`.p12`)
- Provisioning profile (`.mobileprovision`)

**Certificate types:**

| Type | Usage | Profile Type |
|------|-------|--------------|
| Development | Testing on registered devices | Development |
| Distribution | App Store, TestFlight, Ad Hoc | App Store, Ad Hoc, Enterprise |

### Certificate Upload

1. Click **+** next to iOS Certificate dropdown
2. Upload P12 certificate file
3. Upload provisioning profile
4. Enter certificate name
5. Enter P12 password
6. Click upload

### Certificate Unlock

Certificates lock after 24 hours:

1. Select certificate from dropdown
2. Enter P12 password in unlock dialog
3. Certificate unlocked for 24 hours
4. Re-enter password after expiration

### Provisioning Profiles

**Profile types:**

| Profile | Certificate | Device Limit | Distribution |
|---------|-------------|--------------|--------------|
| Development | Development | 100 registered | Direct install, debugging |
| Ad Hoc | Distribution | 100 registered | Beta testing |
| App Store | Distribution | Unlimited | App Store only |
| Enterprise | Enterprise | Unlimited | Internal company |

**Device UUID registration:**
- Development and Ad Hoc require device UUID in profile
- Get UUID: Settings → General → About → tap serial number
- Register in [Apple Developer Portal](https://developer.apple.com/account/)
- Regenerate profile after adding devices

### QR Code Installation (iOS)

IPA builds with Development or Ad Hoc profiles generate QR codes:

1. Scan QR code with iOS device
2. Tap "Install" in Safari
3. Trust developer certificate: Settings → General → VPN & Device Management
4. Launch app

**Limitations:**
- Device UUID must be in provisioning profile
- App Store profiles generate QR codes but won't install
- Enterprise profiles work on any device

---

## Managing Builds

### MyApps Dashboard

Access after login:
- Application cards with latest build status
- QR codes in top-right corner
- Click card for build history

### Build Actions

**Download logs:**
- Available for all build statuses
- Essential for troubleshooting failed builds

**Download artifact:**
- Available for successful builds only
- Click platform icon (Android/iOS) to download

**Re-queue:**
- Rebuild with same configuration
- Certificate unlock required if locked
- Useful for testing reproducibility

**Cancel:**
- Available during Queued or early Processing
- Cannot reverse cancellation

**Delete:**
- Remove build from history
- Permanent deletion
- Free space for new builds

### Build Limits

- **25 applications** maximum per account
- **10 builds per application**
- Delete old builds to create new ones
- Delete applications to free slots

---

## Troubleshooting

### Build Stuck in Queued

**Wait:** 10-15 minutes for queue processing

**If persistent:** Cancel and re-queue after 30 minutes

### Build Failed

1. Download build log
2. Search for "ERROR" or "FAILED"
3. Common issues:
   - **Certificate errors:** Check validity, passwords, profile match
   - **Compilation errors:** Fix code in WaveMaker Studio
   - **Dependency errors:** Check package compatibility
4. Fix issue and rebuild

### Android: Cannot Install APK

- Enable "Install from unknown sources"
- Settings → Apps → Special access → Install unknown apps

### iOS: Cannot Install IPA

**"Unable to Install App":**
- Verify device UUID registered in provisioning profile
- Check profile hasn't expired
- Use Development or Ad Hoc profile (not App Store)

**"Untrusted Enterprise Developer":**
- Settings → General → VPN & Device Management
- Trust developer profile

### QR Code Won't Scan

- Ensure high-resolution QR code image
- Good lighting conditions
- Try different QR scanner app

---

## Best Practices

**Certificates:**
- Generate and export P12 certificates early
- Document passwords securely
- Backup keystore and P12 files (critical)
- Set renewal reminders (annual)

**Build workflow:**
1. Development builds for testing and QA
2. Production builds for app store submission
3. Download artifacts before deleting builds
4. Archive important builds externally

**Version management:**
- Increment version number for each release
- Increment version code/build number for every build
- Document version history

---

## Summary

- **Access:** [AppChef](https://www.wavemakeronline.com/AppChef/#/Main)
- **Android:** `_DEBUG` (development) or production keystore, APK/AAB output
- **iOS:** P12 + provisioning profile required, IPA output
- **QR codes:** Auto-generated for APK and IPA (Development/Ad Hoc)
- **Limits:** 25 apps, 10 builds per app
- **Certificate unlock:** 24-hour window, automatic re-lock

---

## Related Documentation

**Build Documentation:**
- [Overview](./overview) – Mobile build methods comparison
- [CLI Builds](./cli) – Local command-line builds alternative
- [Expo Builds](./expo) – Expo EAS Build alternative
- [Configuration](./configuration) – App settings and certificates

**Publishing Documentation:**
- [Publishing Overview](../../publish/mobile/overview) – Distribution workflow after building
- [Android Publishing](../../publish/mobile/android-publishing) – Play Store submission with AAB
- [iOS Publishing](../../publish/mobile/ios-publishing) – App Store submission with IPA
- [Certificates and Signing](../../publish/mobile/certificates-and-signing) – Certificate upload and management

**External Resources:**
- [AppChef Platform](https://www.wavemakeronline.com/AppChef/#/Main) – Cloud build service
- [Android Keystore Guide](https://developer.android.com/studio/publish/app-signing#generate-key) – Generate Android certificates
- [iOS Certificate Guide](https://developer.apple.com/account/) – Generate iOS certificates
