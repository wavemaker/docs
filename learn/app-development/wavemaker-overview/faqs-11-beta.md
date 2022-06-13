---
title: "FAQs of WaveMaker 11 Beta"
id: ""
sidebar_label: "FAQs 11 Beta"
---
---

WaveMaker 11 is now available as WaveMaker 11 beta. Since the release, we have received many questions about the release and have tried our best to cover the most popular ones here. If you still have more questions, write to us at support@wavemaker.com.

## General 

### Why is WaveMaker 11 released as a Beta?

We Introduced React native Mobile Apps as part of this release.
 
- React Native is currently in an early stage, so we marked it as Beta
- However, please note that Web and Cordova Mobile are stable and working just like in the earlier versions. 

### What is Multi-version Studio?

Multiple versions of Studio in a single environment allow you to build applications in either of the Studio versions. This release provides the ability to build applications in 10.x and 11.x simultaneously. Application cards in Studio show Platform Version.

### Why do we include Multi-versioned Studio?

With this release, we moved to Java 11 from Java 8, which majorly impacts the CI/CD pipelines of your apps.

Therefore, your CI/CD infrastructure must be migrated to Java 11 to build and deploy WaveMaker 11 apps.

For this reason, we introduced a multi-version Studio to give you the time it may take from your end. So we are giving an explicit option to Migrate Apps to 11.x

### Can we start building Web and Cordova App in 11.x?

Yes, this release is as stable as other releases of web and Cordova mobile Apps.

### How can we migrate our projects to the 11.x version?

Follow this migration guide: 
https://docs.wavemaker.com/learn/how-tos/upgrade-guide-wavemaker-10-to-11

### Can multiple Developers work on migration?

Yes, the migration project can be shared with Contributors, and any of your team members can fix migration issues.
However, actions like **Start Migration** and **Finish Upgrade** can only be done by Project Admins.

### Projects/Applications

Will the WM 11 Beta release impact the existing projects?
No, it will not impact, and it will still run on Java 8.
Migration has to be initiated explicitly. Follow the migration guide for more information.
Your existing Deployments (Demo, Phase) will continue to work like before.

### Which version project gets created when creating a new project? 

From WaveMaker 11 beta, it creates an 11.x project by default.
Default Mobile Apps are React Native.
You can create Cordova-based apps by using the link in the project creation dialogue. 
### Can we create 10-version projects? 

No, you can use the existing 10.x apps, but you can’t create a new 10.x app.

### What happens when you import 10.x application zip?

10.x application will be imported as 10.x project only. Migration to 11.x has to be initiated explicitly. 

Prefabs/Templatebundles/Project Shells
Do we need to migrate Prefabs/Project Shell/Template Bundles?
Yes, just like any application. 

Can I use 10.x published prefabs in 11.x Applications?

Yes, 11.x apps can consume 10.x prefabs. But not vice versa.

Shall I migrate Prefab Projects first or applications?

We would suggest migrating applications first and then Prefabs. This is because you can use 10.x prefabs in 11.x app projects.