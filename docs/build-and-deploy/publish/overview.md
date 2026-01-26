---
last_update: { author: 'Vivek Raj' }
---

# Publishing Overview

Publishing is the process of distributing applications to end users. WaveMaker supports publishing to multiple platforms and distribution channels, each with specific requirements and workflows.

---

## Publishing Tracks

WaveMaker applications can be published through different channels depending on platform and distribution needs.

**Web Applications** – Deployed to web servers and cloud platforms for browser-based access. Web publishing involves deploying WAR files, Docker containers, or static builds to hosting infrastructure.

**Mobile Applications** – Distributed to iOS and Android devices through app stores, enterprise channels, or testing platforms. Mobile publishing requires platform-specific builds, code signing, and compliance with store guidelines.

---

## Mobile Publishing

Mobile publishing encompasses distributing React Native applications to end users' devices. Distribution channels include public app stores, enterprise distribution, and testing platforms.

**Key distribution channels:**

- **Google Play Store** – Primary distribution for Android applications
- **Apple App Store** – Primary distribution for iOS applications
- **Enterprise distribution** – Internal company distribution without public stores
- **Testing channels** – TestFlight, Firebase App Distribution, direct installation for beta testing

Mobile publishing requires:

- Built and signed application packages (APK/AAB for Android, IPA for iOS)
- Platform-specific developer accounts
- Code signing certificates and provisioning profiles
- Store assets (screenshots, descriptions, metadata)

**Platform differences:**

| Aspect                 | Android (Play Store)        | iOS (App Store)      |
| ---------------------- | --------------------------- | -------------------- |
| Developer account cost | $25 one-time                | $99/year             |
| Package format         | APK or AAB                  | IPA                  |
| Review process         | Hours to days               | 24-48 hours typical  |
| Update flexibility     | Faster approval             | All updates reviewed |
| Testing platform       | Play Console testing tracks | TestFlight           |

---

## Summary

Key points about publishing:

- **Purpose** – Distribute applications to end users through appropriate channels
- **Web publishing** – Server deployment, containerization, cloud platforms
- **Mobile publishing** – App stores, enterprise distribution, testing channels
- **Requirements** – Built applications, platform accounts, signing certificates, store assets
- **Platform-specific** – iOS and Android have different processes and requirements

---

## Related Documentation

- [Mobile Publishing Overview](./mobile/overview) – Mobile app distribution channels and workflows
- [Building Mobile Apps](../build/mobile/overview) – Creating APK and IPA files for distribution
