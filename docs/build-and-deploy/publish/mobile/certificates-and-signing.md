---
last_update: { author: 'Vivek Raj' }
---

# Code Signing and Certificates

Code signing is the process of digitally signing application packages with cryptographic certificates to verify developer identity and ensure application integrity. All mobile applications submitted to app stores or distributed through enterprise channels must be properly signed.

Code signing serves three critical purposes: it proves the application came from a verified developer, ensures the application has not been tampered with since signing, and enables platform security models to enforce permissions and entitlements.

---

## Certificates for WaveMaker Apps

WaveMaker apps built via AppChef require platform-specific certificates uploaded before builds can be triggered.

**Build methods and certificate usage:**

- **AppChef** – Upload certificates to AppChef, unlock with passwords (valid 24 hours), select during build configuration
- **wm-reactnative-cli** – Provide certificate paths and passwords via CLI parameters or environment variables
- **Expo EAS Build** – Configure certificates in `eas.json` or use Expo's automated certificate management

**Required certificates by platform:**

| Platform | Certificate Type   | File Format                | Required Credentials                       |
| -------- | ------------------ | -------------------------- | ------------------------------------------ |
| iOS      | P12 + Provisioning | `.p12`, `.mobileprovision` | P12 password                               |
| Android  | Keystore           | `.keystore`, `.jks`        | Keystore password, key alias, key password |

**AppChef certificate workflow:**

1. Export React Native zip from WaveMaker Studio
2. Upload React Native zip to AppChef
3. Upload iOS certificate (P12 + provisioning) and/or Android keystore
4. Unlock certificates by providing passwords (valid 24 hours)
5. Select certificates during build configuration
6. Download signed APK/AAB/IPA after successful build

AppChef automatically re-locks certificates after 24 hours for security. Passwords must be re-entered when building again or re-queuing builds.

---

## Why Code Signing Matters for Publishing

Publishing platforms enforce code signing to protect users and maintain ecosystem security.

**App store requirements:**

- **Apple App Store** – Rejects unsigned or improperly signed applications immediately
- **Google Play Store** – Requires valid signatures for all uploaded APK/AAB files
- **Enterprise distribution** – Requires appropriate enterprise certificates and profiles

**User trust and security:**

- Operating systems verify signatures before installation
- Users see verified developer information
- Tampered apps fail signature validation
- Updates must be signed with same certificate

**Publishing implications:**

- Cannot submit to stores without proper signing
- Certificate mismatches prevent app updates
- Lost certificates mean inability to update published apps
- Certificate expiration blocks new releases

---

## Platform Signing Models

iOS and Android implement fundamentally different code signing architectures.

**iOS signing model:**

- **Always required** – Even development and debug builds must be signed
- **Certificate + Provisioning Profile** – Two-layer security model
- **Apple verification** – All certificates issued and validated by Apple
- **Device restrictions** – Development profiles limit installation to registered devices
- **Strict validation** – Apps refuse to install with invalid signatures

**Android signing model:**

- **Optional for development** – Debug builds can use auto-generated debug certificates
- **Required for distribution** – All published apps must be signed with production keystore
- **Self-signed certificates** – Developers generate their own keystores
- **No device restrictions** – Certificates don't limit installation targets
- **Keystore ownership** – Developers maintain full control (unless using Play App Signing)

---

## Certificate Types by Distribution Channel

Different distribution channels require specific certificate types.

---

### iOS Certificates

iOS certificates must be generated through Apple Developer Portal and exported as P12 files for use in AppChef or other build tools.

**Generating iOS certificates for AppChef:**

1. **Create certificate signing request (CSR):**
   - Open Keychain Access (Mac) → Certificate Assistant → Request Certificate from Certificate Authority
   - Provide email and common name, save CSR to disk
   - Windows users: Use OpenSSL to generate CSR

2. **Generate certificate in Apple Developer Portal:**
   - Navigate to Certificates section
   - Select certificate type (Development or Distribution)
   - Upload CSR file
   - Download generated certificate (`.cer` file)

3. **Export to P12 format:**
   - **Mac:** Import `.cer` into Keychain Access, find private key, right-click → Export as `.p12`
   - **Windows:** Use OpenSSL to convert certificate and private key to P12 format
   - Set P12 password (required for AppChef unlock)

4. **Create provisioning profile:**
   - Navigate to Provisioning Profiles section in Apple Developer Portal
   - Select profile type (Development, Ad Hoc, App Store, or Enterprise)
   - Choose App ID and certificate
   - Register device UUIDs (Development/Ad Hoc only)
   - Download provisioning profile (`.mobileprovision`)

5. **Upload to AppChef:**
   - In AppChef build configuration, select iOS certificate option
   - Upload P12 file and provisioning profile
   - Provide P12 password to unlock (valid 24 hours)

**Development Certificate**

Used for testing and debugging on physical devices during development.

- **Purpose:** Install apps on registered development devices
- **Limitations:** Maximum 100 devices per membership year
- **Provisioning:** Requires development provisioning profile with device UUIDs
- **Validity:** 1 year
- **Usage:** Internal testing, debugging, QA validation

**Distribution Certificate**

Used for App Store submission and production release.

- **Purpose:** Sign apps for App Store distribution
- **Limitations:** None (any device can install from App Store)
- **Provisioning:** Requires App Store distribution provisioning profile
- **Validity:** 1 year
- **Usage:** Production releases, App Store submissions

**Enterprise Certificate**

Used for internal company distribution through Apple Developer Enterprise Program.

- **Purpose:** Distribute to company employees without App Store
- **Limitations:** Restricted to internal employee use only (strictly enforced)
- **Provisioning:** Requires enterprise provisioning profile (In-House)
- **Validity:** 1 year
- **Usage:** Internal business apps, proprietary tools, partner apps

**Ad Hoc Certificate**

Used for distributing to limited devices outside development.

- **Purpose:** Beta testing, UAT on specific devices
- **Limitations:** Maximum 100 devices per membership year
- **Provisioning:** Requires Ad Hoc provisioning profile with device UUIDs
- **Validity:** 1 year
- **Usage:** External beta testing, customer demos, stakeholder review

---

### Android Certificates

Android keystores can be self-generated using Java's `keytool` command for use in AppChef or other build tools.

**Generating Android keystore for AppChef:**

1. **Install Java Development Kit (JDK):**
   - Download and install JDK from Oracle or OpenJDK
   - Set `JAVA_HOME` environment variable

2. **Generate keystore using keytool:**

   ```bash
   keytool -genkey -v -keystore my-release-key.keystore \
     -alias my-key-alias \
     -keyalg RSA -keysize 2048 \
     -validity 10000
   ```

3. **Provide keystore information:**
   - Enter keystore password (protects keystore file)
   - Enter key password (protects individual key, can be same as keystore password)
   - Provide organization details (name, organizational unit, city, state, country)

4. **Secure keystore file:**
   - Keystore generated as `my-release-key.keystore` (or specified filename)
   - Document keystore password, key alias, and key password securely
   - Create encrypted backups immediately
   - **Critical:** Losing this keystore prevents updating published apps

5. **Upload to AppChef:**
   - In AppChef build configuration, select Android certificate option
   - Upload keystore file
   - Provide keystore password and key password to unlock (valid 24 hours)

**AppChef default debug certificate:**

- AppChef provides `_DEBUG` certificate for development builds
- Automatically available, no upload required
- Only supports Development build type
- Cannot be used for Play Store or production distribution

**Debug Keystore**

Used during development and internal testing.

- **Purpose:** Sign development builds for debugging
- **Characteristics:** Auto-generated, insecure, well-known credentials
- **Usage:** Local development, emulator testing
- **Publishing:** **Cannot** be used for Play Store or production distribution

**Production Keystore**

Used for all production and distribution builds.

- **Purpose:** Sign apps for Play Store, enterprise distribution, or any public release
- **Characteristics:** Developer-generated, secure, unique credentials
- **Format:** Java KeyStore (`.keystore` or `.jks` file)
- **Components:**
  - Keystore password (protects the keystore file)
  - Key alias (identifies specific key within keystore)
  - Key password (protects individual key)
- **Validity:** Recommended 25+ years (Android apps must be signed with same certificate for updates)
- **Critical:** Losing production keystore means **inability to update published apps**

---

## iOS Provisioning Profiles

Provisioning profiles link certificates, App IDs, and device identifiers, enabling iOS's multi-layer security model.

**What a provisioning profile contains:**

- **Certificate reference** – Which signing certificate is authorized
- **App ID** – Which application this profile applies to (bundle identifier)
- **Device UUIDs** – Which devices can install the app (development/Ad Hoc only)
- **Entitlements** – Capabilities the app can use (push notifications, iCloud, etc.)

**Profile types:**

| Profile Type          | Certificate Type | Device Restrictions          | Distribution Method           |
| --------------------- | ---------------- | ---------------------------- | ----------------------------- |
| Development           | Development      | Registered devices only      | Direct install, debugging     |
| Ad Hoc                | Distribution     | Up to 100 registered devices | Beta testing, demos           |
| App Store             | Distribution     | None                         | App Store submission          |
| Enterprise (In-House) | Enterprise       | None                         | Internal company distribution |

**How provisioning works:**

1. App bundle identifier must match profile's App ID
2. Signing certificate must be included in profile
3. Device UDID must be registered in profile (development/Ad Hoc only)
4. Profile embedded in IPA during signing
5. iOS validates all conditions before allowing installation

**Profile creation:**

- Created in Apple Developer Portal
- Downloaded as `.mobileprovision` file
- Provided during build/signing process
- Expires after 1 year (must renew)

---

## Certificate Lifecycle for Publishing

Certificates follow a specific lifecycle from generation through renewal.

**1. Generation**

Certificates are created once and reused across multiple builds and releases.

- **iOS:** Generated in Apple Developer Portal, exported as P12 file
- **Android:** Generated using `keytool` command, saved as keystore file

**2. Storage and Security**

Proper certificate storage is critical for publishing continuity.

- **Backup certificates immediately** – Losing certificates prevents app updates
- **Secure storage** – Use password managers, encrypted vaults, or secure key management systems
- **Never share** – Keystores and P12 files are private keys
- **Document passwords** – Store separately from certificate files
- **Version control exclusion** – Never commit certificates to repositories

**3. Usage During Publishing**

Certificates are used during the build process to sign application packages.

- Build tools (AppChef, wm-reactnative-cli) require certificates as input
- Signing happens during build, not during store upload
- Signed packages (APK/AAB/IPA) contain embedded signatures
- App stores verify signatures during submission

**4. Renewal and Expiration**

Certificates expire and must be renewed before expiration.

**iOS certificate renewal:**

- Certificates valid for 1 year
- Renew in Apple Developer Portal before expiration
- Apps signed with expired certificates rejected
- Existing published apps continue working (signature already embedded)
- New builds require renewed certificate

**Android keystore:**

- Recommended validity: 25+ years
- Self-managed expiration
- If using Play App Signing, Google manages renewal
- Lost keystores cannot be recreated (update apps impossible)

---

## Certificate Security Best Practices

Protecting signing certificates is essential for maintaining control over published applications.

**Backup strategy:**

- Store certificates in multiple secure locations
- Keep encrypted backups offline
- Document backup locations and access procedures
- Test backup restoration process

**Access control:**

- Limit certificate access to essential personnel
- Use role-based access in CI/CD systems
- Audit certificate usage regularly
- Rotate certificates if compromise suspected

**Build system integration:**

- Use secure environment variables for passwords
- Never hardcode credentials in build scripts
- Leverage CI/CD secret management (GitHub Secrets, Jenkins Credentials)
- Encrypt certificates in storage

**AppChef certificate management (WaveMaker):**

AppChef provides centralized certificate management for WaveMaker mobile app builds.

**Upload and storage:**

- Upload certificates through AppChef build configuration interface
- **iOS:** Upload P12 certificate file and provisioning profile (`.mobileprovision`)
- **Android:** Upload keystore file (`.keystore` or `.jks`)
- Certificates stored in encrypted format on AppChef servers
- Manage certificates via AppChef application menu (view, add, delete)

**Security model:**

- Passwords required to unlock certificates before builds
- **iOS:** P12 certificate password
- **Android:** Keystore password and key alias password
- 24-hour unlock window after password entry
- Automatic re-lock after 24 hours (password required again)
- Builds can only be triggered with unlocked certificates

**Certificate lifecycle in AppChef:**

1. Upload certificate via build configuration or certificate management UI
2. Provide password to unlock certificate (valid 24 hours)
3. Select certificate during build configuration
4. AppChef uses unlocked certificate to sign APK/AAB/IPA
5. Download signed package from successful build
6. Delete certificates from AppChef when no longer needed (cleanup)

**Re-queuing builds:**

- When re-queuing a build, unlock dialog appears if certificates are locked
- Enter passwords again to unlock certificates for new build
- Certificates remain selected from previous build configuration

---

## Publishing Without Proper Certificates

Attempting to publish without correct signing certificates results in immediate rejection.

**iOS submission failures:**

- Apps signed with development certificates rejected from App Store
- Expired certificates cause build failures
- Mismatched provisioning profiles prevent installation
- Invalid signatures detected before upload completes

**Android submission failures:**

- Unsigned APKs rejected by Play Console
- Debug-signed apps cannot be promoted to production
- Keystore mismatches prevent updating existing apps
- Invalid signatures detected during upload

**Enterprise distribution:**

- iOS: Apps signed with non-enterprise certificates fail on unregistered devices
- Android: Unsigned apps require user security override (not recommended)

---

## Summary

Key points about code signing and certificates for publishing:

- **Purpose** – Verify developer identity, ensure app integrity, enable platform security
- **Required for** – All app store submissions, enterprise distribution, production releases
- **iOS model** – Certificate + Provisioning Profile; always required, Apple-issued
- **Android model** – Keystore-based; required for distribution, self-managed
- **Profile types** – Development, Distribution, Ad Hoc, Enterprise (iOS); Debug, Production (Android)
- **Lifecycle** – Generate → Store securely → Use during builds → Renew before expiration
- **Critical** – Backup certificates; losing them prevents updating published apps
- **Security** – Store securely, never share, encrypt in CI/CD, exclude from version control
- **Publishing dependency** – Signing happens during build; certificates required before publishing

---

## Related Documentation

**Build Documentation:**

- [Mobile Build Overview](../../build/mobile/overview) – Build methods and certificate requirements
- [AppChef Builds](../../build/mobile/appchef) – Certificate upload and unlock workflow
- [CLI Builds](../../build/mobile/cli) – Certificate parameters for local builds
- [Configuration](../../build/mobile/configuration) – Android keystore and iOS provisioning setup

**Publishing Documentation:**

- [Publishing Overview](./overview) – Publishing workflow and certificate lifecycle
- [Android Publishing](./android-publishing) – Production keystores for Play Store
- [iOS Publishing](./ios-publishing) – Distribution certificates for App Store
- [Enterprise Distribution](./enterprise-distribution) – Enterprise certificates and In-House provisioning
- [Testing Distribution](./testing-distribution) – Development and Ad Hoc certificates

**External Resources:**

- [Apple Developer Portal](https://developer.apple.com/account/) – Generate iOS certificates and provisioning profiles
- [Android Keystore Documentation](https://developer.android.com/studio/publish/app-signing) – Generate Android keystores
- [iOS Certificate Types](https://developer.apple.com/support/certificates/) – Certificate type reference
- [Play App Signing](https://support.google.com/googleplay/android-developer/answer/9842756) – Google-managed certificate option
