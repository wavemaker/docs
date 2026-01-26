---
last_update: { author: 'Vivek Raj' }
---

# Testing and Beta Distribution

Testing distribution enables developers to validate applications with real users on physical devices before public release. Beta testing channels provide controlled distribution to testers, collect feedback, identify issues, and reduce risk of releasing buggy or problematic applications to production users.

Unlike public app store releases or enterprise distribution, testing channels offer rapid iteration, smaller audience exposure, and mechanisms for collecting feedback without affecting production app ratings or reviews.

---

## Why Test Before Public Release

Pre-release testing catches issues that automated testing and development testing may miss.

**Risk mitigation:**

- Identify crashes on specific device models or OS versions
- Detect usability issues in real-world usage patterns
- Validate performance across network conditions and device capabilities
- Catch edge cases missed during development

**Feedback collection:**

- Gather user opinions on new features
- Identify confusing UI or workflows
- Collect feature requests and improvement suggestions
- Validate assumptions about user behavior

**Platform validation:**

- Test on devices not available to development team
- Verify behavior across device manufacturers and configurations
- Validate localization and internationalization
- Ensure accessibility features work correctly

**Store readiness:**

- Practice submission process with test builds
- Identify metadata or screenshot issues
- Test update mechanisms
- Validate compliance with store policies before production review

---

## Testing Distribution Channels

Multiple channels enable different testing strategies and audience sizes.

---

## AppChef Direct Testing (WaveMaker)

AppChef provides QR code-based direct installation for rapid testing of WaveMaker React Native apps without app store submission.

**What AppChef provides:**

- QR code generation after successful build
- Direct APK/IPA installation on test devices
- No app store accounts or review required
- Immediate testing after build completion
- Support for both development and production builds

**How it works:**

1. Build app in AppChef (development or production build type)
2. After successful build, AppChef generates QR codes for Android and iOS
3. Testers scan QR code with device camera
4. **Android:** Downloads APK directly, install after enabling "Unknown sources"
5. **iOS:** Requires Ad Hoc provisioning profile with device UUIDs registered, downloads and installs IPA
6. App installs directly without Play Store or App Store

**When to use AppChef QR codes:**

- Internal QA testing and validation
- Quick stakeholder demos and reviews
- Rapid iteration during development
- Testing before submitting to TestFlight or Play testing tracks
- Bypassing app store review for internal builds

**Limitations:**

- **Android:** Requires "Install from unknown sources" security setting
- **iOS:** Requires Ad Hoc profile with registered device UUIDs (100 devices max per year)
- No automatic update mechanism (must rebuild and re-scan QR code)
- QR codes tied to specific build (new build generates new QR code)

**Advantages over store-based testing:**

- Instant availability (no review delays)
- No tester limits for Android (iOS limited by Ad Hoc profile)
- No separate testing app required (TestFlight/Firebase Tester not needed)
- Complete control over distribution
- Free (no additional services required)

---

## TestFlight (iOS)

TestFlight is Apple's official beta testing platform, tightly integrated with App Store Connect. It provides the only approved method for distributing iOS apps to external testers without device UUID registration.

**What TestFlight provides:**

- Beta distribution before App Store submission
- Integrated feedback collection
- Crash report access
- Build expiration management (90-day limit)
- Tester management and invitations

**Two testing tracks:**

---

### Internal Testing

Rapid testing with internal team members for immediate validation.

**Characteristics:**

| Aspect             | Details                                                                                |
| ------------------ | -------------------------------------------------------------------------------------- |
| Tester limit       | 100 internal testers                                                                   |
| Tester requirement | Must have App Store Connect access (Admin, Developer, Marketing, or App Manager roles) |
| Review required    | No                                                                                     |
| Availability       | Instant after IPA upload and processing                                                |
| Use case           | QA team, immediate smoke testing, critical hotfix validation                           |

**Workflow:**

1. Upload IPA to App Store Connect
2. Select build in TestFlight section
3. Add internal testers (must have App Store Connect roles)
4. Testers receive notification via TestFlight app
5. Install and test immediately

**Advantages:**

- No review delay (instant availability)
- Quick iteration cycles
- Suitable for pre-beta validation
- Integrated with development workflow

**Limitations:**

- Small tester pool (100 max)
- Testers must have App Store Connect access (security consideration)
- Not suitable for external stakeholders or customers

---

### External Testing

Wide beta testing with external users before public App Store release.

**Characteristics:**

| Aspect             | Details                                                           |
| ------------------ | ----------------------------------------------------------------- |
| Tester limit       | 10,000 external testers                                           |
| Tester requirement | Email address or public link                                      |
| Review required    | Yes (Beta App Review, faster than full review)                    |
| Availability       | After beta review approval (typically hours to 1 day)             |
| Use case           | Beta programs, early adopters, customer feedback, wide validation |

**Workflow:**

1. Upload IPA to App Store Connect
2. Select build in TestFlight section
3. Create testing group(s)
4. Add testers via email or generate public link
5. Submit for Beta App Review
6. After approval, testers receive invitations
7. Testers install TestFlight app and accept invitation
8. Install beta build and provide feedback

**Advantages:**

- Large tester pool (10,000)
- Public link sharing (no email collection required)
- Realistic production-like testing
- Feedback collection through TestFlight

**Limitations:**

- Beta review required (adds time)
- 10,000 tester limit (cannot exceed)
- Builds expire after 90 days (must upload new builds)

**TestFlight app requirement:**

- Testers must install TestFlight app from App Store
- TestFlight manages beta build installation and updates
- Provides feedback mechanism and crash reporting
- Notifies testers of new beta versions

---

## Google Play Testing Tracks

Google Play Console provides multiple testing tracks with different visibility and review requirements.

---

### Internal Testing Track

Fastest validation path for Android applications.

**Characteristics:**

| Aspect             | Details                                              |
| ------------------ | ---------------------------------------------------- |
| Tester limit       | 100 testers                                          |
| Tester requirement | Email addresses (Google accounts)                    |
| Review required    | No                                                   |
| Availability       | Instant after upload                                 |
| Use case           | QA validation, smoke testing, immediate verification |

**Workflow:**

1. Upload signed APK or AAB to Play Console
2. Navigate to Internal testing track
3. Create release and upload build
4. Create tester email list
5. Share opt-in URL with testers
6. Testers access via Play Store (appears in "My apps")

**Advantages:**

- No review process (instant availability)
- Fast iteration for QA
- Uses Play Store installation (familiar to users)
- Crash reports available in Play Console

---

### Closed Testing (Alpha/Beta)

Controlled beta testing with specific user groups or open opt-in links.

**Characteristics:**

| Aspect             | Details                                          |
| ------------------ | ------------------------------------------------ |
| Tester limit       | Unlimited                                        |
| Tester requirement | Email list, Google Group, or opt-in link         |
| Review required    | Minimal automated review                         |
| Availability       | Hours after upload typically                     |
| Use case           | Beta programs, early access, feedback collection |

**Tester management options:**

**Email lists:**

- Add tester email addresses directly in Play Console
- Testers receive email invitation
- Install via Play Store

**Google Groups:**

- Create Google Group with beta testers
- Add group to closed testing track
- Group membership determines access

**Opt-in links:**

- Generate shareable link
- Anyone with link can join testing program
- No pre-approval required
- Testers opt in via link, then install from Play Store

**Workflow:**

1. Upload APK/AAB to Play Console
2. Navigate to Closed testing track
3. Create release
4. Define tester lists or generate opt-in link
5. Submit for review (automated, minimal)
6. Share with testers after approval
7. Testers install from Play Store

---

### Open Testing

Public beta available to anyone, visible in Play Store.

**Characteristics:**

| Aspect             | Details                                     |
| ------------------ | ------------------------------------------- |
| Tester limit       | Unlimited                                   |
| Tester requirement | None (public opt-in)                        |
| Review required    | Yes (full review, same as production)       |
| Availability       | After review approval                       |
| Use case           | Public beta, wide testing before production |

**Key differences from production:**

- Marked as "Early Access" in Play Store
- Users explicitly opt in to beta
- Can provide feedback through special beta feedback form
- Separate from production version (users can switch between beta and production)

**When to use:**

- Wide beta testing before production launch
- Gathering public feedback
- Building early adopter community
- Testing with diverse user base

---

## Firebase App Distribution

Firebase App Distribution is Google's cross-platform beta distribution solution, supporting both iOS and Android.

**What it provides:**

- Unified platform for iOS and Android beta distribution
- Alternative to TestFlight (iOS) and Play Console testing (Android)
- Integrated with Firebase ecosystem (Crashlytics, Analytics, Performance)
- Independent of app stores (pre-release or alongside store testing)

**Key features:**

**Cross-platform support:**

- Distribute both iOS and Android builds from single dashboard
- Unified tester management across platforms
- Consistent experience for multi-platform testing

**Tester management:**

- Invite testers via email
- Group management for different tester cohorts
- Testers install Firebase App Tester app (iOS/Android)
- Receive notifications of new builds

**Feedback collection:**

- In-app feedback SDK integration
- Screenshot annotations and bug reporting
- Crash reporting through Crashlytics
- Custom event tracking

**Release management:**

- Upload IPA or APK directly
- Distribute to specific groups
- Release notes for each build
- Track installation and feedback

**When to use Firebase App Distribution:**

- Need unified iOS + Android beta distribution
- Want deeper Firebase integration (Crashlytics, Analytics)
- Prefer more control than Play Console testing tracks
- Distributing pre-alpha builds before store submission
- Need rich feedback and crash reporting integration

**Requirements:**

- Firebase project setup
- Firebase App Tester app on tester devices
- Signed APK (Android) or IPA (iOS)
- iOS: Still requires provisioning profile (Ad Hoc or Enterprise)

---

## Direct Installation Methods

Direct installation enables testing without app stores or testing platforms.

---

### iOS Ad Hoc Distribution

Distributing to up to 100 specific devices without App Store or TestFlight.

**Requirements:**

- Ad Hoc provisioning profile
- Device UUIDs registered in Apple Developer Portal
- Distribution certificate
- Signed IPA file

**Distribution methods:**

- QR codes (from AppChef or build tools)
- Direct download links (HTTPS hosted IPA)
- Email attachments
- AirDrop
- Xcode installation via USB

**Installation process:**

1. Tester receives IPA or download link
2. Device UDID must be registered in provisioning profile
3. Tester installs (via QR scan, link, or Xcode)
4. iOS verifies device UDID against profile
5. Installation proceeds if validated

**Advantages:**

- No TestFlight requirement
- Full control over distribution
- No 90-day expiration
- Suitable for customer demos, stakeholder reviews

**Limitations:**

- Maximum 100 devices per membership year
- Must collect and register device UUIDs
- Manual distribution process
- No automatic updates

---

### Android Direct Installation

Installing APK files directly without Play Store.

**Requirements:**

- Signed APK (debug or production keystore)
- Enable "Install from unknown sources" on device
- Distribution method (QR, link, email, USB)

**Distribution methods:**

**QR codes:**

- Generate from AppChef or build tools
- Tester scans QR code
- Downloads and installs APK
- Quick for on-site testing

**Download links:**

- Host APK on web server (HTTPS)
- Share link with testers
- Tester downloads and installs
- Suitable for remote testing

**USB installation (ADB):**

```bash
adb install app-debug.apk
```

- Direct installation via USB
- Requires ADB (Android Debug Bridge)
- Suitable for QA with USB access

**Advantages:**

- No Play Console account required
- No review process
- Fast iteration
- Works for early alpha builds

**Disadvantages:**

- Requires security setting change ("unknown sources")
- No automatic updates
- Manual distribution tracking
- Security risk if APK source untrusted

---

## Testing Best Practices

Effective beta testing requires structured approach and clear objectives.

**Start small, expand gradually:**

1. **Internal testing** (QA team, 10-50 testers) – Basic functionality and crash validation
2. **Closed beta** (trusted users, 50-500 testers) – Feature validation and usability feedback
3. **Open beta** (public, 500+ testers) – Wide device coverage and real-world usage
4. **Production release** – After confidence built through testing stages

**Collect actionable feedback:**

- Integrate in-app feedback mechanisms
- Use crash reporting (Firebase Crashlytics, Sentry)
- Monitor analytics (user flows, feature usage)
- Survey testers for qualitative feedback
- Track metrics (crash-free rate, session duration, retention)

**Version management:**

- Use clear version numbering for beta builds (e.g., "1.0.0-beta.1")
- Provide detailed release notes for each beta version
- Track which issues fixed in which beta version
- Maintain changelog for testers

**Tester communication:**

- Set expectations (testing timeline, feedback methods)
- Provide clear testing instructions
- Acknowledge feedback and communicate fixes
- Notify of new beta versions and changes

**Iterate based on feedback:**

- Fix critical crashes immediately
- Address usability issues before expanding tester base
- Validate fixes with same testers
- Don't rush to production before confidence established

**Monitor metrics:**

| Metric                    | Target               | Action if Degraded            |
| ------------------------- | -------------------- | ----------------------------- |
| Crash-free rate           | >99%                 | Fix crashes before expanding  |
| Average session duration  | Baseline established | Investigate engagement issues |
| Feedback response rate    | Track participation  | Engage silent testers         |
| Installation success rate | >95%                 | Check compatibility issues    |

---

## Testing to Production Workflow

Structured path from alpha testing to production release.

**1. Internal testing phase:**

- Duration: 1-2 weeks
- Audience: QA team, developers
- Goal: Validate core functionality, catch obvious bugs
- Exit criteria: No critical crashes, basic features working

**2. Closed beta phase:**

- Duration: 2-4 weeks
- Audience: Trusted users, early adopters, select customers
- Goal: Feature validation, usability feedback, device compatibility
- Exit criteria: Crash-free rate >99%, major features validated, positive feedback

**3. Open beta phase (optional):**

- Duration: 2-4 weeks
- Audience: Public opt-in
- Goal: Wide device coverage, real-world usage patterns, stress testing
- Exit criteria: No new critical issues, metrics stable, feedback positive

**4. Production release:**

- Audience: All users
- Strategy: Phased rollout (start 10%, scale to 100%)
- Monitoring: Intensive crash and rating monitoring
- Rollback plan: Prepared fix if critical issues emerge

**Promotion between tracks:**

- Android: Can promote builds between tracks in Play Console
- iOS: Must upload new builds to production (cannot promote TestFlight builds)

---

## Summary

Key points about testing and beta distribution:

- **Purpose** – Validate applications with real users before public release
- **Risk reduction** – Catch crashes, bugs, usability issues in controlled environment
- **iOS options** – TestFlight (100 internal, 10,000 external), Ad Hoc (100 devices)
- **Android options** – Play Console tracks (Internal, Closed, Open), Firebase, direct APK
- **Firebase** – Cross-platform alternative, integrated crash reporting and analytics
- **Direct methods** – Ad Hoc (iOS), APK sideloading (Android), QR codes
- **Best practices** – Start small, iterate, monitor metrics, collect feedback
- **Workflow** – Internal → Closed beta → Open beta → Production
- **Exit criteria** – Crash-free rate, positive feedback, metrics stable

---

## Related Documentation

**Build Documentation:**

- [Mobile Build Overview](../../build/mobile/overview) – Build methods for testing
- [AppChef Builds](../../build/mobile/appchef) – QR codes for direct testing
- [CLI Builds](../../build/mobile/cli) – Build test packages locally

**Publishing Documentation:**

- [Publishing Overview](./overview) – Testing as part of publishing workflow
- [iOS Publishing](./ios-publishing) – TestFlight integration with App Store
- [Android Publishing](./android-publishing) – Play Console testing tracks
- [Certificates and Signing](./certificates-and-signing) – Development and Ad Hoc certificates
- [Enterprise Distribution](./enterprise-distribution) – Internal testing channels

**External Resources:**

- [TestFlight](https://developer.apple.com/testflight/) – Apple's beta testing platform
- [Google Play Console Testing](https://support.google.com/googleplay/android-developer/answer/9845334) – Play Store testing tracks
- [Firebase App Distribution](https://firebase.google.com/docs/app-distribution) – Cross-platform beta distribution
- [Apple Configurator 2](https://apps.apple.com/app/apple-configurator-2/id1037126344) – iOS device management tool
