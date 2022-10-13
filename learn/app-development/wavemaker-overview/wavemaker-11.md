---
title: "WaveMaker 11"
id: "wavemaker-11"
sidebar_label: "WaveMaker 11"
---
---

You asked we delivered—a host of new features and enhancements in WaveMaker 11 — Beta to 11.1 General Availability (GA), released on 29th August 2022. Following 11 Beta, we closely engaged with our customers and developers in thoroughly collecting and meeting their feedback and ready with the update, 11.1. We believe the platform is rather stable to move to WaveMaker 11.1 or later. The release includes improvements to the 11 Beta features and a few more upgrades overall.

:::important
Since 11.1, newer updates were released with more features and bug fixes. Read this document and follow the links to release information.

- [WaveMaker 11.1 - features added](/learn/wavemaker-release-notes/v11-1-0) 
- [WaveMaker 11.1.2 - features added](/learn/wavemaker-release-notes/v11-1-2) 
- [Overview WaveMaker Enterprise (WME) 11 releases, including featues and bug fixes](/learn/enterprise-release-notes#wavemaker-enterprise-v11x) 
- [Overview WaveMaker Online (WMO) 11 releases, including bug fixes](/learn/wavemaker-release-notes#wavemaker-online-v11x)
- [WaveMaker 11 beta](/learn/app-development/wavemaker-overview/wavemaker-11-beta)
:::

## Migration to 11: what to expect

The upgrade is not flagged as a risky migration. There is minimal to no impact involved when migrating from WaveMaker 10 to WaveMaker 11.1 or later. The upgrade process is designed to transit as smoothly as possible, so you can instantly benefit from all the new features we deliver in the [newer versions](/learn/wavemaker-release-notes#wavemaker-online-v11x) of the WaveMaker 11 Studio. It includes library updates, including a Java update, needing an action to do.

### Java Update

The Java 11 version is one update among the WaveMaker Studio's [latest tech stack](/learn/wavemaker-release-notes#technology-stack). A small action is required from your end to complete the update, specifically if you build and deploy your apps outside WaveMaker. For example, Tomcat. 

You must upgrade your build infrastructure and verify the deployment setup to support Java 11. For this reason, we introduced [parallel versioning of Studio](/learn/app-development/wavemaker-overview/wavemaker-11-beta#multi-version-studio) so you can test your application thoroughly. Learn more about upgrading deployment infrastructure before initiating the project migration to WaveMaker 11 or later. See the [migration guide](/learn/how-tos/upgrade-guide-wavemaker-10-to-11) for more information.

## Angular 12

Angular 12 includes JQuery library upgrades as a standard. In addition, it offers performance improvements, language services, and more. 

:::note
Note that the Angular 12 update addresses vulnerabilities. Updating to the latest version of WaveMaker Studio helps keep your application secure against critical security threats. 
:::

## Features of WaveMaker 11.1: GA

### React Native Studio

In June, we introduced an all-new **React Native Studio** beta with essential features to launch native app development in WaveMaker. With the 11.1 release, the React Native Studio gets more updates, comes feature-packed and ready to consume for production with integrations, such as OpenID authentication and Expo plugin support, in addition to standard plugins, Form validation, Charts, and more. See our [React Native documentation](/learn/react-native/react-native) to start developing native applications in WaveMaker.

### Layout and Flex Layout Widgets

[Layout](/learn/app-development/widgets/container/layout) and [Flex Layout](/learn/app-development/widgets/container/flex-layout) widgets were first introduced for React Native apps. With the [11.1.2](/learn/wavemaker-release-notes/v11-1-2) update, we support **Layout** and **Flex Layout** widgets in Web and Cordova apps.

### Other New Features of 11.1: GAs

Several other new features were added to WaveMaker Studio in 11.1 and later, including: 

- [MLTS Support](/learn/how-tos/configure-mtls-in-wmapp)
- [Azure Repos VCS Support](/learn/how-tos/azure-repos-vcs)
- [Added MongoDB Support in Session Persistence](/learn/app-development/app-security/session-persistence#mongo-db) for scaling your application horizontally.
- Sync Prefab, allowing you to keep the Prefab up to date even when re-importing a project from Zip.
- Introducing four types of [Wizard Template to Support Icons as Steps](learn/how-tos/wizard-layout).

See the complete list of features in the [11.1 release notes](/learn/wavemaker-release-notes/v11-1-0).

## Recap - Features of [WaveMaker 11 Beta](/learn/app-development/wavemaker-overview/wavemaker-11-beta)

- [React Native Beta](/learn/app-development/wavemaker-overview/wavemaker-11-beta#introducing-react-native-in-wavemaker)
- [API Composer Toolkit](/learn/app-development/wavemaker-overview/wavemaker-11-beta#api-composer-toolkit)
- [API Mock Server](/learn/app-development/services/api-mock-server)
- Pagination for Imported APIs, including Offset and Curser types
- POM Hierarchy Remodeled to Inheritance Model
- Team for Enterprise as a standard
- [Upgrading SAML to the new library](/learn/app-development/wavemaker-overview/wavemaker-11-beta#upgrading-saml-to-new-library)

