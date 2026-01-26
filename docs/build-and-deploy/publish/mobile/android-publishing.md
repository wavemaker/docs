---
last_update: { author: 'Vivek Raj' }
---

# Publishing to Google Play Store

The [Google Play Store](https://play.google.com/console) is the primary public distribution channel for Android applications, reaching billions of devices worldwide. Publishing WaveMaker React Native apps to Play Store requires downloading signed AAB files from [AppChef](../../build/mobile/appchef), a [Google Play Console](https://play.google.com/console) account, and compliance with Play Store policies.

Play Store publishing enables global reach, automatic updates for users, monetization options, and access to Google's distribution infrastructure. The review process is largely automated with minimal manual review for most applications, resulting in faster approval compared to iOS.

---

## Building with WaveMaker for Play Store

Before publishing to Play Store, build your WaveMaker app using [AppChef](../../build/mobile/appchef).

**Build workflow:**

1. Export React Native zip from WaveMaker Studio (Build → Open AppChef or Manual Build)
2. Upload React Native zip to AppChef
3. Configure build type as **Production** (required for Play Store)
4. Upload or select Android keystore certificate
5. Unlock certificate by providing keystore password and key password (valid 24 hours)
6. Select Android package type as **AAB** (required for Play Store production)
7. Trigger build and wait for completion
8. Download signed AAB file from AppChef

AppChef automatically generates AAB (Android App Bundle) format for production builds, which is required by Play Store. For testing, you can build APK files and use AppChef QR codes for direct installation before Play Store submission.

**Alternative build methods:**

- **[wm-reactnative-cli](../../build/mobile/cli):** Export project, build locally with `wm-reactnative-cli build android --release`
- **[Expo EAS Build](../../build/mobile/expo):** Export as Expo project, build AAB using `eas build --platform android`

---

## Prerequisites

Before publishing to Google Play Store, specific requirements must be met.

**Google Play Console account:**

- One-time registration fee of $25
- Google account required
- Identity verification process
- Agreement to Google Play Developer Distribution Agreement
- Account setup at [play.google.com/console](https://play.google.com/console)

**Application package:**

- Signed production APK or AAB (Android App Bundle)
- Built with production keystore (not debug keystore)
- Version code higher than any previous release
- Target API level meeting Google's current requirements

**Store listing assets:**

| Asset Type        | Requirements                       |
| ----------------- | ---------------------------------- |
| App icon          | 512x512 PNG, 32-bit with alpha     |
| Feature graphic   | 1024x500 JPG or PNG                |
| Screenshots       | 2-8 images, phone and tablet sizes |
| Promotional video | YouTube URL (optional)             |
| Short description | Maximum 80 characters              |
| Full description  | Maximum 4000 characters            |

**Compliance requirements:**

- Content rating questionnaire completion
- Privacy policy URL (if app collects user data)
- Target audience and content declarations
- Data safety section completion (describes data collection and sharing)

---

## APK vs AAB

Google Play Store requires Android App Bundle (AAB) format for new apps since August 2021. Understanding the difference is essential for publishing.

**APK (Android Package Kit):**

- Traditional Android package format
- Contains all resources for all device configurations
- Larger file size (includes unused resources for specific devices)
- User downloads entire package regardless of device
- Still supported for existing apps and alternative distribution

**AAB (Android App Bundle):**

- Modern publishing format required by Play Store
- Publishing artifact, not installable file
- Google Play generates optimized APKs from AAB
- Device-specific APKs delivered to users (smaller downloads)
- Supports dynamic feature delivery and asset packs

**AAB advantages:**

| Benefit                | Description                                                     |
| ---------------------- | --------------------------------------------------------------- |
| Smaller downloads      | Users download only relevant architecture and density resources |
| Automatic optimization | Play Store generates device-specific APKs automatically         |
| Dynamic delivery       | Features can be downloaded on-demand, not at install time       |
| Asset packs            | Large assets delivered separately, reducing initial download    |

**Publishing requirement:** Upload AAB to Play Console. Play Store handles APK generation and signing for device delivery.

---

## Play Console Overview

Google Play Console is the dashboard for managing app releases, store listings, and analytics.

**Key sections:**

**Release management:**

- Multiple release tracks (Internal, Closed, Open, Production)
- Staged rollout controls
- Version history and rollback capabilities
- Release notes and change logs

**Store presence:**

- Store listing (text, images, videos)
- Pricing and distribution (countries, pricing tiers)
- Content rating and age restrictions
- Categories and tags

**App signing:**

- Play App Signing (Google manages signing keys)
- Upload key management
- Certificate SHA fingerprints

**User feedback:**

- Ratings and reviews
- Crash reports and ANR (Application Not Responding) data
- Pre-launch reports (automated testing)

---

## Release Tracks

Play Console provides multiple release tracks to support different testing and rollout strategies.

| Track                | Purpose              | Audience              | Review Required | Tester Limit |
| -------------------- | -------------------- | --------------------- | --------------- | ------------ |
| **Internal testing** | Quick validation, QA | Email list (internal) | No              | 100          |
| **Closed testing**   | Controlled beta      | Email list or opt-in  | Minimal         | Unlimited    |
| **Open testing**     | Public beta          | Anyone can join       | Yes             | Unlimited    |
| **Production**       | Public release       | All users             | Yes             | Unlimited    |

**Internal testing:**

- Fastest path to device installation
- Share APK/AAB with up to 100 internal testers
- No Google review process
- Immediate availability after upload
- Use for QA, smoke testing, internal validation

**Closed testing (Alpha/Beta):**

- Pre-release testing with controlled audience
- Create tester lists via email addresses or Google Groups
- Testers receive opt-in link
- Minimal automated review
- Use for beta programs, early adopters, feedback collection

**Open testing:**

- Public beta available to anyone
- Users discover via Play Store search or opt-in link
- Full review process (same as production)
- Use for wide beta testing before production launch
- Public visibility and feedback

**Production:**

- Final release to all users
- Full review and automated security scanning
- Visible in Play Store search and browsing
- Support for staged rollouts (gradual percentage-based release)

---

## App Signing by Google Play

Google Play offers to manage app signing keys, simplifying certificate management and enabling key recovery.

**Traditional signing model:**

- Developer signs APK/AAB with production keystore
- Developer uploads signed package to Play Console
- Developer maintains sole control of signing key
- **Risk:** Losing keystore prevents updating app forever

**Play App Signing model:**

- Developer signs APK/AAB with upload key (separate from app signing key)
- Developer uploads to Play Console
- Google re-signs with Google-managed app signing key for distribution
- Google stores app signing key securely
- **Benefit:** If upload key lost, Google can reset it; app updates still possible

**Recommendation:** Enable Play App Signing for all new apps. It provides:

- Key recovery if upload key lost
- Smaller APKs through Google's optimization
- Support for multiple signing keys (rotate upload keys)
- Enhanced security through Google's infrastructure

**Opting in:**

- Enabled during first app creation in Play Console
- Cannot be disabled once enabled
- Requires uploading app signing key or letting Google generate it

---

## Submission Workflow

The publishing workflow in Play Console follows a structured process from app creation to release.

**Create app in Play Console:**

- Define app name and default language
- Specify app or game category
- Select free or paid pricing model
- Complete developer account verification if required

**Set up store listing:**

- Write short description (80 characters) and full description (4000 characters)
- Upload app icon, feature graphic, and screenshots (phone/tablet/TV sizes)
- Add promotional video (YouTube URL, optional)
- Provide support email and privacy policy URL
- Select application category and tags

**Configure app access:**

- Declare if app requires login or special access
- Provide test credentials if app is login-restricted
- Enable or disable ads disclosure

**Complete content rating:**

- Fill out rating questionnaire (IARC system)
- Answer questions about violence, sexual content, language, etc.
- Receive ratings for different regions (ESRB, PEGI, USK, etc.)
- Ratings affect app visibility and age restrictions

**Set pricing and distribution:**

- Select available countries and regions
- Set pricing tiers (for paid apps)
- Configure in-app purchases or subscriptions
- Define device compatibility (phones, tablets, Wear OS, TV)

**Complete data safety section:**

- Declare what data the app collects
- Explain how data is used and shared
- Specify security practices (encryption, data deletion)
- Required even if app collects no data

**Upload production AAB:**

- Navigate to Production release track
- Upload signed AAB file
- Set version name and release notes
- Specify rollout percentage (staged rollout) or 100% (full release)

**Submit for review:**

- Review all sections for completeness
- Submit app for review
- Automated scanning checks for policy violations
- Manual review triggered if needed

**Monitor review status:**

- Review typically completes within hours to days
- Address any policy violations or issues flagged
- Respond to additional information requests

**Release to users:**

- Upon approval, release according to rollout plan
- Monitor crash reports and user feedback
- Adjust rollout percentage if issues detected

---

## Review Guidelines and Policies

Google Play enforces policies to ensure app quality, security, and user safety.

**Key policy areas:**

**Technical requirements:**

- App must target recent Android API level (updated annually)
- Must not crash or freeze
- Must handle configuration changes correctly
- Proper use of permissions (request only needed permissions)

**Content policies:**

- No prohibited content (illegal, harmful, deceptive)
- Accurate app description (no misleading claims)
- Functional completeness (no placeholder features)
- Proper content rating

**Security policies:**

- No malware or security vulnerabilities
- Proper data handling and encryption
- Transparent privacy practices
- No unauthorized access to user data or device features

**Intellectual property:**

- No trademark or copyright infringement
- Proper licensing for third-party content
- No impersonation of other apps or brands

**Rejection common reasons:**

- Crashes during automated testing
- Missing or incomplete privacy policy
- Inaccurate content rating
- Permissions requested without justification
- Misleading store listing or screenshots

**Resources:**

- [Google Play Developer Policy Center](https://play.google.com/about/developer-content-policy/)
- [Developer Program Policies](https://support.google.com/googleplay/android-developer/answer/9858738)

---

## Updates and Version Management

Publishing updates follows the same process as initial release, with version management critical for proper update delivery.

**Version code:**

- Integer value that must increase with each release
- Play Store uses version code to determine update eligibility
- Users on lower version codes receive update
- Configured in `build.gradle`: `versionCode`

**Version name:**

- User-facing version string (e.g., "1.2.3", "2.0.1")
- Displayed in Play Store listing
- Not used for update logic (version code determines updates)
- Configured in `build.gradle`: `versionName`

**Update workflow:**

1. Build new version with incremented version code
2. Sign with same keystore as original release (critical)
3. Upload to desired release track
4. Update release notes describing changes
5. Submit for review
6. Release to users

**Update strategies:**

**Immediate update:**

- Upload to Production track
- 100% rollout
- All users receive update immediately

**Staged rollout:**

- Upload to Production track
- Set rollout percentage (e.g., 10%, 25%, 50%)
- Monitor crash reports and ratings
- Increase percentage gradually
- Halt rollout if issues detected

**Phased testing:**

- Upload to Internal or Closed testing first
- Validate with testers
- Promote to Production after validation
- Reduces risk of widespread issues

---

## Release Management

Play Console provides tools to control release timing and monitor post-release health.

**Staged rollouts:**

- Release to percentage of users (10%, 25%, 50%, 100%)
- Monitor crash rates and user feedback
- Halt rollout if metrics degrade
- Resume or increase percentage once stable
- Complete rollout by reaching 100%

**Release controls:**

- **Pause release:** Stop new users from receiving update
- **Resume release:** Continue paused rollout
- **Increase rollout:** Expand to larger percentage
- **Halt release:** Stop rollout and investigate issues

**Post-release monitoring:**

- Crash rate and ANR rate metrics
- User ratings and reviews
- Install and uninstall rates
- Pre-launch report (automated testing results)

**Rollback considerations:**

- Cannot force users to downgrade
- Can publish new version to fix issues
- Can halt rollout to prevent wider impact
- Must monitor metrics proactively

---

## Summary

Key points about Android publishing:

- **Platform** – Google Play Store for public Android distribution
- **Requirements** – Play Console account ($25), signed AAB, store assets, compliance completion
- **Package format** – AAB required (replaced APK), optimized delivery, dynamic features
- **Release tracks** – Internal, Closed, Open, Production for staged testing and rollout
- **App signing** – Play App Signing recommended (Google manages keys, enables recovery)
- **Review process** – Automated + minimal manual, faster than iOS
- **Policies** – Technical requirements, content policies, security, privacy compliance
- **Updates** – Same workflow, version code must increase, staged rollouts supported
- **Management** – Staged rollouts, crash monitoring, halt/resume controls

---

## Related Documentation

**Build Documentation:**

- [Mobile Build Overview](../../build/mobile/overview) – Build methods comparison
- [AppChef Builds](../../build/mobile/appchef) – Cloud-based Android builds with QR codes
- [CLI Builds](../../build/mobile/cli) – Local Android builds with wm-reactnative-cli
- [Configuration](../../build/mobile/configuration) – Android SDK, permissions, signing

**Publishing Documentation:**

- [Publishing Overview](./overview) – Mobile publishing workflow
- [iOS Publishing](./ios-publishing) – Apple App Store submission
- [Certificates and Signing](./certificates-and-signing) – Android keystore generation and management
- [Testing Distribution](./testing-distribution) – Play Console testing tracks
- [Enterprise Distribution](./enterprise-distribution) – Managed Google Play (private apps)

**External Resources:**

- [Google Play Console](https://play.google.com/console) – Android app publishing platform
- [Google Play Developer Policies](https://play.google.com/about/developer-content-policy/) – Content and policy guidelines
- [Android Developer Guide](https://developer.android.com/distribute) – Distribution documentation
- [Play App Signing](https://support.google.com/googleplay/android-developer/answer/9842756) – Google-managed signing keys
