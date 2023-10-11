---
title: "WaveMaker 11"
id: "wavemaker-11"
sidebar_label: "WaveMaker 11"
---
---

You asked we delivered—a host of new features and enhancements in WaveMaker 11 - Beta to 11.4 General Availability (GA), released on 4th September 2023. Following 11 Beta, we closely engaged with our customers and developers in thoroughly collecting and meeting their feedback and ready with the update, 11.4. We believe the platform is rather stable to move to WaveMaker 11.x. The release includes improvements to the 11 Beta features and a few more upgrades overall.

:::important

In WaveMaker 11, many newer updates were released with more features and bug fixes. Read this document and follow the links to release information.

- [WaveMaker 11.3.3 - features added](/learn/wavemaker-release-notes/v11-3-6)
- [WaveMaker 11.3.3 - features added(beta)](/learn/wavemaker-release-notes/v11-3-3)
- [WaveMaker 11.3 - features added](/learn/wavemaker-release-notes/v11-3-0)
- [WaveMaker 11.2 - features added](/learn/wavemaker-release-notes/v11-2-0)
- [WaveMaker 11.1 - features added](/learn/wavemaker-release-notes/v11-1-0) 
- [WaveMaker 11.1.2 - features added](/learn/wavemaker-release-notes/v11-1-2) 
- [Overview WaveMaker Enterprise (WME) 11 releases, including featues and bug fixes](/learn/enterprise-release-notes#wavemaker-enterprise-v11x) 
- [Overview WaveMaker Online (WMO) 11 releases, including bug fixes](/learn/wavemaker-release-notes#wavemaker-online-v11x)
- [WaveMaker 11 beta](/learn/app-development/wavemaker-overview/wavemaker-11-beta)
:::

## Migration to 11: what to expect

The upgrade is not flagged as a risky migration. The upgrade process is designed to transit as smoothly as possible, so you can instantly benefit from all the new features we deliver in the [newer versions](/learn/wavemaker-release-notes#wavemaker-online-v11x) of the WaveMaker 11 Studio. It includes new and advanced React Native features, Prefab Marketplace, Mockingbird support, inter and intra-team collaboration tools library updates, including a Java update, needing an action to do.

### Java Update

The Java 11 version is one update among the WaveMaker Studio's [latest tech stack](/learn/wavemaker-release-notes#technology-stack). A small action is required from your end to complete the update, specifically, if you build and deploy your apps outside WaveMaker. For example, Tomcat. 

You must upgrade your build infrastructure and verify the deployment setup to support Java 11. For this reason, we introduced [parallel versioning of Studio](/learn/app-development/wavemaker-overview/wavemaker-11-beta#multi-version-studio) so you can test your application thoroughly. Learn more about upgrading deployment infrastructure before initiating the project migration to WaveMaker 11 or later. See the [migration guide](/learn/how-tos/upgrade-guide-wavemaker-10-to-11) for more information.

## Angular 12

Angular 12 includes JQuery library upgrades as a standard. In addition, it offers performance improvements, language services, and more. 

:::note
Note that the Angular 12 update addresses vulnerabilities. Updating to the latest version of WaveMaker Studio helps keep your application secure against critical security threats. 
:::

## Expo

Expo version upgrade from version 45 to 48 is a major upgrade in WaveMaker Studio. To know more, see

- [WaveMaker 11.2.2](https://docs.wavemaker.com/learn/wavemaker-release-notes/v11-2-2)
- [WaveMaker 11.3.6](https://docs.wavemaker.com/learn/wavemaker-release-notes/v11-3-6)

## Features of WaveMaker 11.1: GA

### React Native Studio

In WaveMaker 11, we have introduced all new and advanced React Native features in WaveMaker Studio. These features include app-loading animations, Third-party Plugin Integration,  SSL Pinning, improved inline styles, Audio support, and many more enhancements. Know more about our React Native Studio and get started with developing native applications by referring to our [React Native documentation](/learn/react-native/react-native).

### Other New Features of 11: GAs

Several other new features were added to WaveMaker Studio in 11 and later, including: 

- [MLTS Support](/learn/how-tos/configure-mtls-in-wmapp)
- [Azure Repos VCS Support](/learn/how-tos/azure-repos-vcs)
- [Added MongoDB Support in Session Persistence](/learn/app-development/app-security/session-persistence#mongo-db) for scaling your application horizontally.
- Sync Prefab, allowing you to keep the Prefab up to date even when re-importing a project from Zip.
- Introducing four types of [Wizard Template to Support Icons as Steps](learn/how-tos/wizard-layout).
- [Prefab Marketplace](/learn/app-development/custom-widgets/enterprise-marketplace/)
