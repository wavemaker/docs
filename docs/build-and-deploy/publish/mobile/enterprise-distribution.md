---
last_update: { author: 'Vivek Raj' }
---

# Enterprise Distribution

Enterprise distribution enables organizations to distribute mobile applications internally without publishing to public app stores. This approach is designed for proprietary business applications, internal tools, and apps that serve employees or authorized partners rather than general consumers.

Enterprise distribution bypasses public app store review processes, enables faster deployment cycles, and maintains complete control over app access and distribution. However, it requires different developer program memberships, comes with strict usage restrictions, and lacks the infrastructure benefits of public app stores.

---

## Building with WaveMaker for Enterprise Distribution

WaveMaker apps can be built for enterprise distribution using AppChef or alternative build methods with appropriate enterprise certificates.

**Build workflow for iOS enterprise distribution:**

1. Obtain Apple Developer Enterprise Program membership ($299/year)
2. Generate enterprise certificate (In-House distribution) in Apple Developer Portal
3. Create In-House provisioning profile (no device UUID restrictions)
4. Export enterprise certificate as P12 file
5. Export React Native zip from WaveMaker Studio
6. Upload React Native zip to AppChef
7. Upload enterprise P12 certificate and In-House provisioning profile
8. Unlock certificate with P12 password (valid 24 hours)
9. Select build type (Development or Production)
10. Trigger build and download signed IPA

**Build workflow for Android enterprise distribution:**

1. Generate production keystore using `keytool` command
2. Export React Native zip from WaveMaker Studio
3. Upload React Native zip to AppChef
4. Upload Android keystore certificate
5. Unlock certificate with keystore password and key password (valid 24 hours)
6. Select build type and package format (APK for direct install, AAB for Managed Play)
7. Trigger build and download signed APK/AAB

**Alternative build methods:**

- **[wm-reactnative-cli](../../build/mobile/cli)** – Build locally with enterprise certificates via CLI parameters
- **[Expo EAS Build](../../build/mobile/expo)** – Configure EAS with enterprise credentials for automated builds

**AppChef for enterprise testing:**

AppChef QR codes support rapid enterprise distribution for internal testing before broader deployment via MDM or web distribution.

---

## When to Use Enterprise Distribution

Enterprise distribution serves specific organizational and application requirements.

**Appropriate use cases:**

- **Internal business applications** – CRM systems, inventory management, field service tools used only by employees
- **Proprietary tools** – Applications containing confidential business logic, trade secrets, or proprietary algorithms
- **Non-consumer apps** – Apps that don't fit consumer app store models (specialized workflows, enterprise data access)
- **Faster deployment cycles** – Apps requiring frequent updates without app store review delays
- **Restricted access** – Apps for partners, contractors, or authorized third parties only
- **Policy compliance** – Apps that violate public store policies but serve legitimate enterprise purposes

**Not appropriate for:**

- Consumer-facing applications
- Apps intended for general public
- Monetization through app store mechanisms
- Apps seeking wide distribution or discoverability

---

## iOS Enterprise Distribution

Apple's Enterprise Program enables internal distribution of iOS applications to organization employees without App Store submission.

**Apple Developer Enterprise Program:**

- **Cost:** $299/year (separate from standard $99 Developer Program)
- **Eligibility:** Organizations with 100+ employees
- **Purpose:** Internal employee use only (strictly enforced)
- **Verification:** Requires DUNS number and entity verification
- **Enrollment:** Separate application process at [developer.apple.com/programs/enterprise](https://developer.apple.com/programs/enterprise/)

**Enterprise certificates and provisioning:**

- **Enterprise certificate** – Used to sign apps for in-house distribution
- **In-House provisioning profile** – No device UUID restrictions (unlike development profiles)
- **Bundle identifier** – Must use enterprise team's identifier
- **Validity:** Certificate and profiles expire annually, must be renewed

**Distribution methods:**

**Web-based distribution (Over-The-Air):**

- Host IPA file on HTTPS web server
- Create manifest plist file describing app
- Provide HTML download page with `itms-services://` URL
- Users tap link to install directly from browser
- No App Store or TestFlight required
- AppChef-generated QR codes can serve as quick OTA distribution links for testing

**Mobile Device Management (MDM):**

- Distribute through MDM platforms (Jamf, Microsoft Intune, VMware Workspace ONE)
- Push apps to managed devices automatically
- Enforce installation policies
- Track deployment status
- Centralized app lifecycle management

**Enterprise app catalogs:**

- Internal app store interfaces
- Self-service installation for employees
- App discovery and version management
- Integration with identity providers

**Restrictions and compliance:**

**Strict usage rules:**

- **Internal use only** – Apps distributed only to company employees
- **No public distribution** – Cannot distribute to customers, consumers, or general public
- **No monetization** – Cannot charge for enterprise apps
- **No App Store submission** – Cannot publish enterprise-signed apps to App Store

**Apple enforcement:**

- Periodic audits of enterprise certificate usage
- Violations result in certificate revocation
- Revocation affects all apps signed with that certificate
- Reinstating revoked certificates is difficult or impossible

**Infamous misuse:** Consumer apps distributed via enterprise certificates (violates terms, results in revocation)

---

## Android Enterprise Distribution

Android offers more flexible enterprise distribution options, ranging from Google-managed solutions to direct APK distribution.

---

### Managed Google Play (Private Apps)

Google's official enterprise distribution solution for Android applications.

**What it is:**

- Private Play Store apps visible only to organization members
- Managed through Google Play Console
- Distributed via Managed Google Play on enrolled devices
- Requires Google Workspace or Cloud Identity

**How it works:**

- Create private app in Play Console
- Upload signed APK/AAB
- Set visibility to organization only
- Deploy through Enterprise Mobility Management (EMM) console
- Employees access via Managed Google Play on work profile

**Advantages:**

- Uses Google Play infrastructure (updates, installation)
- Centralized management and reporting
- No sideloading or security overrides required
- Supports work profile separation (Android Enterprise)

**Requirements:**

- Google Workspace or Cloud Identity account
- EMM solution configured (Workspace, third-party MDM)
- Android Enterprise enrolled devices

---

### Direct APK Distribution

Distributing APK files directly to devices without Play Store or managed solutions.

**Methods:**

- Host APK on internal web server (HTTPS)
- Email APK files to users
- Share via file sharing services
- QR codes linking to APK download

**User installation process:**

- Download APK to device
- Enable "Install from unknown sources" in device settings
- Tap APK file to install
- Accept security warnings

**Security considerations:**

- Requires users to lower device security settings
- No automatic updates (must redistribute manually)
- No signature verification by Play Store
- Higher risk of tampered or malicious APKs if distribution unsecured

**When to use:**

- Small internal deployments
- Organizations without EMM infrastructure
- Testing scenarios where managed Play not available
- Not recommended for security-sensitive apps

---

### Enterprise Mobility Management (EMM) Platforms

EMM and MDM platforms provide centralized mobile device and application management for enterprises.

**Popular EMM platforms:**

- **Microsoft Intune** – Integrated with Microsoft 365 and Azure AD
- **VMware Workspace ONE** – Unified endpoint management
- **MobileIron** – Enterprise mobility and security
- **Jamf** – Apple device management (macOS, iOS, iPadOS)
- **Google Workspace** – Android Enterprise management

**EMM capabilities:**

- **App distribution** – Push apps to enrolled devices
- **Policy enforcement** – Control app permissions, data sharing, screenshots
- **Device management** – Remote wipe, lock, configuration
- **App configuration** – Distribute app-specific settings and configurations
- **Security controls** – VPN, encryption, compliance validation

**Publishing through EMM:**

1. Build and sign app (enterprise certificates for iOS, production keystore for Android)
2. Upload app to EMM console
3. Configure app policies and access rules
4. Assign to user groups or devices
5. EMM pushes app to target devices
6. Updates deployed through same mechanism

**Advantages over direct distribution:**

- Centralized control and visibility
- Automatic updates possible
- Policy-based access control
- Audit trails and compliance reporting
- No user security overrides needed (for managed Play)

---

## Enterprise Distribution Considerations

Enterprise distribution introduces different responsibilities and trade-offs compared to public app stores.

**App updates:**

- **No automatic infrastructure** – Must manage update distribution manually (unless using EMM)
- **User notification** – Responsible for informing users about available updates
- **Testing burden** – No app store review safety net; must ensure quality internally
- **Version fragmentation** – Users may run different versions unless enforcement in place

**Support and feedback:**

- **No store reviews** – No public feedback mechanism
- **Support channels** – Must provide internal support infrastructure (helpdesk, documentation)
- **Issue tracking** – Implement internal crash reporting (Firebase Crashlytics, Sentry)
- **Analytics** – Integrate custom analytics (no app store dashboards)

**Security and compliance:**

- **Certificate management** – Must secure enterprise certificates carefully
- **Distribution security** – Ensure HTTPS for downloads, validate integrity
- **Compliance audits** – Maintain usage compliance to avoid certificate revocation
- **Access control** – Implement proper authentication and authorization for app access

**Cost considerations:**

- **iOS:** $299/year Enterprise Program membership (higher than standard program)
- **Android:** Free (direct APK) or EMM platform costs (Managed Play)
- **Infrastructure:** Hosting costs (web servers, MDM platforms)
- **Support:** Internal support resources required

---

## Choosing Between Enterprise and Public Stores

Decision factors for enterprise distribution vs. public app store publishing.

**Choose enterprise distribution when:**

| Reason            | Explanation                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| Internal use only | App serves company employees or authorized partners exclusively             |
| Proprietary logic | Contains trade secrets, confidential algorithms, or sensitive business data |
| Faster updates    | Need rapid deployment without multi-day app store reviews                   |
| Policy conflicts  | Legitimate business app that violates consumer app store policies           |
| Access control    | Requires enterprise authentication and authorization systems                |

**Choose public app stores when:**

| Reason            | Explanation                                                    |
| ----------------- | -------------------------------------------------------------- |
| General consumers | App targets public users or customer base                      |
| Discoverability   | Need app store search, browsing, and recommendation algorithms |
| Infrastructure    | Leverage app store update delivery, crash reporting, analytics |
| Credibility       | App store presence adds legitimacy and trust for users         |
| Monetization      | In-app purchases or paid app revenue through store mechanisms  |

**Hybrid approach possible:**

- Publish different apps to different channels (consumer app to stores, internal tools via enterprise)
- Use TestFlight/Play testing for external beta while maintaining enterprise internal apps
- Not possible to use same app in both channels (different signing requirements)

---

## Summary

Key points about enterprise distribution:

- **Purpose** – Distribute mobile apps internally without public app store submission
- **Use cases** – Internal business apps, proprietary tools, faster deployment needs
- **iOS** – Apple Enterprise Program ($299/year), In-House provisioning, OTA or MDM distribution
- **Android** – Managed Google Play (private apps) or direct APK distribution
- **Restrictions** – iOS strictly internal use; violations result in certificate revocation
- **Distribution** – Web-based (HTTPS), MDM/EMM platforms, enterprise app catalogs
- **Updates** – Manual management required unless using EMM
- **Trade-offs** – Faster deployment vs. loss of app store infrastructure
- **Security** – Must secure certificates, distribution channels, and access control

---

## Related Documentation

**Build Documentation:**

- [Mobile Build Overview](../../build/mobile/overview) – Build methods for enterprise apps
- [AppChef Builds](../../build/mobile/appchef) – Upload enterprise certificates to AppChef
- [CLI Builds](../../build/mobile/cli) – Build with enterprise certificates locally
- [Configuration](../../build/mobile/configuration) – Enterprise app configuration

**Publishing Documentation:**

- [Publishing Overview](./overview) – Distribution channel comparison
- [Certificates and Signing](./certificates-and-signing) – Enterprise certificate generation and management
- [iOS Publishing](./ios-publishing) – Public App Store alternative
- [Android Publishing](./android-publishing) – Public Play Store alternative
- [Testing Distribution](./testing-distribution) – Internal testing before enterprise deployment

**External Resources:**

- [Apple Developer Enterprise Program](https://developer.apple.com/programs/enterprise/) – iOS enterprise enrollment
- [Managed Google Play](https://support.google.com/googleplay/work/answer/6145139) – Android private apps
- [Microsoft Intune](https://www.microsoft.com/en-us/security/business/microsoft-intune) – EMM platform
- [VMware Workspace ONE](https://www.vmware.com/products/workspace-one.html) – EMM platform
- [Jamf](https://www.jamf.com/) – Apple device management
