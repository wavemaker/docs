---
last_update: { author: 'Vivek Raj' }
---

# Publishing to Apple App Store

The [Apple App Store](https://appstoreconnect.apple.com/) is the primary public distribution channel for iOS applications, reaching hundreds of millions of iOS devices globally. Publishing WaveMaker React Native apps to the App Store requires downloading signed IPA files from [AppChef](../../build/mobile/appchef), an [Apple Developer Program](https://developer.apple.com/programs/) membership, and strict compliance with [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/).

App Store publishing enables global iOS reach, automatic updates, monetization through Apple's infrastructure, and access to [TestFlight](https://developer.apple.com/testflight/) for beta testing. The review process involves manual human review for all submissions, resulting in higher quality standards and longer approval times compared to Android.

---

## Building with WaveMaker for App Store

Before publishing to App Store, build your WaveMaker app using [AppChef](../../build/mobile/appchef).

**Build workflow:**

1. Export React Native zip from WaveMaker Studio (Build → Open AppChef or Manual Build)
2. Upload React Native zip to AppChef
3. Configure build type as **Production** (required for App Store)
4. Upload or select iOS certificate (P12 file) and App Store provisioning profile
5. Unlock certificate by providing P12 password (valid 24 hours)
6. Trigger build and wait for completion
7. Download signed IPA file from AppChef

AppChef signs the IPA with your distribution certificate and App Store provisioning profile. The IPA is ready for upload to App Store Connect via Transporter or Xcode.

**Testing before App Store submission:**

- Build with **Development** type and development certificate for AppChef QR code testing
- Upload IPA to TestFlight for beta testing before production submission
- Use Ad Hoc provisioning profile for direct installation on registered devices (100 max)

**Alternative build methods:**

- **[wm-reactnative-cli](../../build/mobile/cli):** Export project, build locally with `wm-reactnative-cli build ios --release`
- **[Expo EAS Build](../../build/mobile/expo):** Export as Expo project, build IPA using `eas build --platform ios`

---

## Prerequisites

Before publishing to the Apple App Store, specific requirements must be met.

**Apple Developer Program membership:**

- Annual fee of $99
- Apple ID required
- Identity verification and enrollment process
- Agreement to Apple Developer Program License Agreement
- Enroll at [developer.apple.com/programs](https://developer.apple.com/programs/)

**Application package:**

- Signed production IPA file
- Built with distribution certificate (not development certificate)
- Distribution provisioning profile embedded
- Version number and build number properly incremented
- Xcode-compatible format

**Code signing assets:**

- Distribution certificate (P12 format)
- App Store distribution provisioning profile
- Certificate must be valid (not expired)
- Provisioning profile must match bundle identifier

**Store listing assets:**

| Asset Type        | Requirements                                           |
| ----------------- | ------------------------------------------------------ |
| App icon          | 1024x1024 PNG (no transparency, no rounded corners)    |
| Screenshots       | iPhone (6.5", 5.5") and iPad (12.9", 2nd gen) required |
| App preview video | MP4 or M4V, 15-30 seconds (optional)                   |
| Description       | Maximum 4000 characters                                |
| Keywords          | Maximum 100 characters, comma-separated                |
| Support URL       | Active URL for user support                            |
| Marketing URL     | Promotional website (optional)                         |

**Compliance requirements:**

- Privacy policy URL (required if app collects data)
- Export compliance declaration (cryptography usage)
- Content rights confirmation
- Age rating questionnaire completion
- Data collection and privacy practices disclosure

---

## App Store Connect Overview

App Store Connect is Apple's platform for managing app submissions, TestFlight, and analytics.

**Core functionality:**

**My Apps:**

- App records and metadata management
- Version submission and review status
- TestFlight beta testing
- App analytics and sales reports

**Users and Access:**

- Team member roles and permissions
- TestFlight tester management
- Access control for sensitive operations

**Agreements, Tax, and Banking:**

- Legal agreements (updated periodically)
- Tax forms and banking information for paid apps
- Payment processing setup

**App submission workflow:**

- Create app record with bundle ID
- Configure app information and pricing
- Upload IPA via Xcode, Transporter, or command-line tools
- Submit for review
- Monitor review status and respond to feedback

---

## Submission Workflow

Publishing to the App Store follows a structured process from app creation to release.

**Create app record in App Store Connect:**

- Navigate to My Apps and create new app
- Provide app name (must be unique across App Store)
- Select bundle ID (must match IPA bundle identifier)
- Define SKU (internal tracking identifier)
- Choose primary language

**Configure app information:**

- Set privacy policy URL
- Select category (primary and optional secondary)
- Define age rating through questionnaire
- Provide app subtitle (short descriptive text)
- Add promotional text (updatable without new version)

**Prepare version information:**

- Set version number (user-facing, e.g., "1.0.0")
- Write release notes (what's new in this version)
- Upload screenshots for required device sizes
- Add app preview videos (optional but recommended)
- Provide description and keywords

**Upload IPA file:**

- Build IPA signed with distribution certificate
- Upload via Xcode (Organizer), Transporter app, or `xcrun altool`
- Wait for processing (Apple validates IPA structure)
- Select uploaded build in App Store Connect version

**Configure version details:**

- Build number shown after processing
- Set copyright information
- Configure app review information (demo account credentials if needed)
- Add version-specific release notes

**Submit for review:**

- Select whether to manually or automatically release after approval
- Add notes for reviewer (special instructions, test scenarios)
- Submit for App Store review
- Review begins (status: "Waiting for Review")

**Monitor review process:**

| Status                    | Meaning                                      |
| ------------------------- | -------------------------------------------- |
| Waiting for Review        | Queued for review assignment                 |
| In Review                 | Reviewer actively testing app                |
| Pending Developer Release | Approved, waiting for manual release trigger |
| Processing for App Store  | Approved, being prepared for release         |
| Ready for Sale            | Live on App Store                            |
| Rejected                  | Review found issues, see Resolution Center   |

**Handle review feedback:**

- Check Resolution Center for rejection reasons
- Address issues and resubmit (new build if code changes needed)
- Respond to reviewer questions or clarifications
- Appeal rejections if guidelines misapplied

**Release to users:**

- **Automatic release:** App goes live immediately after approval
- **Manual release:** Developer triggers release when ready
- Phased release option: Gradual rollout over 7 days (1%, 2%, 5%, 10%, 20%, 50%, 100%)

---

## Review Guidelines and Compliance

Apple enforces strict App Store Review Guidelines to maintain quality and user safety standards.

**Key guideline areas:**

**Safety:**

- Apps must not contain objectionable content
- No illegal, harmful, or dangerous content
- Appropriate content ratings required
- Parental controls for kids' apps

**Performance:**

- Apps must be complete and functional (no placeholders or "coming soon" features)
- No crashes, freezes, or significant bugs
- Must handle errors gracefully
- No broken links or incomplete features

**Business:**

- In-app purchases must use Apple's payment system (with limited exceptions)
- Subscription terms clearly communicated
- No misleading pricing or billing practices
- Free apps cannot require payment to function

**Design:**

- Must follow iOS Human Interface Guidelines
- Appropriate use of system features and APIs
- Proper handling of device capabilities
- Consistent UI/UX patterns

**Legal:**

- Compliance with all applicable laws
- Proper licensing for third-party content
- Privacy policy required for data collection
- COPPA compliance for children's apps

**Privacy:**

- Transparent data collection and usage
- Privacy nutrition labels (data types collected)
- User consent for tracking and data sharing
- Secure data transmission and storage

**Common rejection reasons:**

- **Incomplete functionality:** Features referenced but not implemented
- **Crashes or bugs:** App crashes during review testing
- **Guideline violations:** Content, design, or business model issues
- **Broken links:** Dead links in app or store listing
- **Privacy issues:** Missing privacy policy, undisclosed data collection
- **Metadata issues:** Screenshots don't match app, misleading descriptions
- **Improper API usage:** Using private APIs or misusing public APIs

---

## TestFlight Integration

TestFlight is Apple's built-in beta testing platform, tightly integrated with App Store Connect.

**What TestFlight provides:**

- Beta distribution to testers before public release
- Feedback collection from testers
- Crash report access
- Version management for test builds

**Two testing tracks:**

**Internal testing:**

- Up to 100 internal testers
- Testers must be added to App Store Connect team (member roles)
- No review required
- Instant availability after IPA upload
- Use for QA team, immediate testing, critical hotfix validation

**External testing:**

- Up to 10,000 external testers
- Testers invited via email or public link
- Beta App Review required (faster than full review)
- Public link can be shared broadly
- Use for wide beta testing, early adopters, feedback collection

**TestFlight workflow:**

1. Upload IPA to App Store Connect (same as production submission)
2. Add build to TestFlight (select uploaded build)
3. Add groups and invite testers (internal or external)
4. Submit for Beta App Review (external testing only)
5. Testers receive invitation and install TestFlight app
6. Testers install and test beta build
7. Collect feedback through TestFlight or external channels

**TestFlight limitations:**

- Beta builds expire after 90 days
- Testers must have TestFlight app installed
- External testing requires beta review (adds time)
- Limited to 10,000 external testers total

---

## Updates and Version Management

Updating published apps requires proper version management and follows the same review process as initial submission.

**Version number:**

- User-facing version string (e.g., "1.2.3")
- Displayed in App Store
- Follows semantic versioning recommended
- Configured in Xcode: `CFBundleShortVersionString`

**Build number:**

- Must be unique and increase with each upload
- Not user-visible
- Used by App Store Connect to distinguish builds
- Configured in Xcode: `CFBundleVersion`

**Update workflow:**

1. Increment version number and build number
2. Build and sign IPA with distribution certificate
3. Upload to App Store Connect
4. Create new version in My Apps
5. Update release notes (describe changes)
6. Submit for review
7. All updates go through full review process (even bug fixes)

**Update strategies:**

**Immediate release:**

- Select "Automatically release this version"
- App goes live immediately upon approval
- Use for critical fixes, time-sensitive updates

**Scheduled release:**

- Select "Manually release this version"
- Trigger release at chosen time after approval
- Use for coordinated launches, marketing timing

**Phased release:**

- Select "Release update over 7-day period using phased release"
- Automatic rollout: Day 1 (1%), Day 2 (2%), Day 3 (5%), Day 4 (10%), Day 5 (20%), Day 6 (50%), Day 7 (100%)
- Can pause if issues detected
- Can release to everyone immediately if no issues
- Use for major updates, risk mitigation

---

## Release Management

App Store Connect provides limited but effective release controls.

**Phased release controls:**

- **Pause phased release:** Stop delivering update to new users (existing downloaders keep update)
- **Release to everyone:** Accelerate to 100% immediately
- **Resume phased release:** Continue paused rollout

**Post-release monitoring:**

- Crash reports and diagnostics
- User ratings and reviews
- Download and sales statistics
- App Analytics (user engagement, retention, crashes)

**Responding to issues:**

- Cannot rollback released version (users who updated stay updated)
- Can pause phased release to limit impact
- Must submit new version to fix issues
- Communicate with users through app description updates or support channels

---

## App Rejection and Resolution

App Store rejections are common and require systematic resolution.

**Review rejection process:**

1. App status changes to "Rejected"
2. Resolution Center shows rejection reasons with guideline references
3. Developer reviews feedback and identifies issues
4. Developer addresses issues (code changes, metadata updates, clarifications)
5. Developer resubmits (new build if code changed, or same build with clarifications)

**Common rejection scenarios:**

**Guideline violations:**

- Review guideline reference provided
- Clear description of issue
- Requires code or content changes
- Resubmit with new build

**Metadata issues:**

- Incorrect or misleading screenshots
- Description doesn't match functionality
- Missing or inadequate privacy policy
- Update metadata in App Store Connect, resubmit

**Functionality issues:**

- App crashes during review
- Features don't work as described
- Requires code fixes and new build
- Consider TestFlight testing before resubmission

**Information requests:**

- Reviewer needs clarification or test credentials
- Respond via Resolution Center
- May not require new build
- Quick turnaround possible

**Appeal process:**

- If guideline interpretation disputed
- Submit appeal through App Review Board
- Provide detailed explanation and justification
- Resolution can take several days

---

## Summary

Key points about iOS publishing:

- **Platform** – Apple App Store for public iOS distribution
- **Requirements** – Developer Program ($99/year), signed IPA, distribution certificate, store assets
- **Review process** – Manual human review, 24-48 hours typical, strict guidelines
- **TestFlight** – Integrated beta testing (100 internal, 10,000 external testers)
- **Guidelines** – Comprehensive policies covering safety, performance, business, design, privacy
- **Updates** – All updates reviewed, version and build numbers must increment
- **Release options** – Automatic, manual, or phased (7-day rollout)
- **Rejections** – Common, systematic resolution through Resolution Center
- **Management** – Phased release controls, crash reports, analytics, ratings monitoring

---

## Related Documentation

**Build Documentation:**

- [Mobile Build Overview](../../build/mobile/overview) – Build methods comparison
- [AppChef Builds](../../build/mobile/appchef) – Cloud-based iOS builds with QR codes
- [CLI Builds](../../build/mobile/cli) – Local iOS builds with wm-reactnative-cli (macOS only)
- [Configuration](../../build/mobile/configuration) – iOS deployment target, capabilities, privacy

**Publishing Documentation:**

- [Publishing Overview](./overview) – Mobile publishing workflow
- [Android Publishing](./android-publishing) – Google Play Store submission
- [Certificates and Signing](./certificates-and-signing) – iOS certificates and provisioning profiles
- [Testing Distribution](./testing-distribution) – TestFlight beta testing
- [Enterprise Distribution](./enterprise-distribution) – Apple Enterprise Program

**External Resources:**

- [App Store Connect](https://appstoreconnect.apple.com/) – iOS app publishing platform
- [Apple Developer Portal](https://developer.apple.com/account/) – Certificates and provisioning profiles
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) – Submission requirements
- [TestFlight Documentation](https://developer.apple.com/testflight/) – Beta testing platform
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) – iOS design standards
