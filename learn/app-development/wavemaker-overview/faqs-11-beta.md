---
title: "FAQs of WaveMaker 11 Beta"
id: ""
sidebar_label: "FAQs 11 Beta"
---
---

WaveMaker 11 is now available as WaveMaker 11 beta. Since the release, we have received many questions about the release and have tried our best to cover the most popular ones here. If you still have more questions, write to us at support@wavemaker.com.

## General 

---

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

## Projects and Applications

---

Will the WM 11 Beta release impact the existing projects?
No, it will not impact, and it will still run on Java 8.
Migration has to be initiated explicitly. Follow the migration guide for more information.
Your existing Deployments (Demo, Phase) will continue to work like before.

### Which version project gets created when creating a new project? 

From WaveMaker 11 beta, it creates an 11.x project by default.
Default Mobile Apps are React Native.
You can create Cordova-based apps by using the link in the project creation dialogue. 
### Can we create 10-version projects? 

No, you can use the existing 10.x apps, but you can't create a new 10.x app.

### What happens when you import 10.x application zip?

10.x application imports as 10.x project only. Migration to 11.x has to be initiated explicitly. 


## Prefabs and Template Bundles and Project Shells

---

### Do we need to migrate Prefabs/Project Shell/Template Bundles?

Yes, just like any application. 

### Can I use 10.x published prefabs in 11.x Applications?

Yes, 11.x apps can consume 10.x prefabs. But not vice versa.

### Should I migrate Prefab Projects first or applications?

We would suggest migrating applications first and then Prefabs. This is because you can use 10.x prefabs in 11.x app projects.

### What version should I use when Publishing a Prefab from an ongoing Migration Project?

The Studio will prompt an incremental version always. Plus, we recommend starting with a new Major version. 

For example, if 10.x latest published version is 1.6, we suggest using 2.0 when publishing from the ongoing Migration project.

### Should you continue to publish Prefabs to the Team from 10.x Project while Migration is going on?

Yes, however, implicitly provide different versions for both 10.x and 11.x published Prefabs as specified in the [above point]().

For example: if the latest published version of 10.x app is 1.6, continue as 1.7 for 10.x Prefabs.

### What is the process of consuming migrated Prefabs into the project?

A new version will be published in Teams.

Project Opening Dialogue will show a new version option to upgrade.
Or, in Studio, go to **Prefabs** -> **Import** dialogue. 

## Project Branches

---

### What is the Impact on Project Branches?

Nothing. Project branches will remain on the same platform version (10.x). 
Migration can be initiated for the Master branch project only. 
Ensure merging all feature branches into master before initiating the project migration. 

Once the migration is completed, recreate project branches or merge branches outside Studio.

### I have the Prefab project branch for a hotfix. What happens to it?

Similar to Applications, you can continue to patch it by pushing fixes from Studio. But, as we recommended above, merge/recreate after migration of master Project.

## Deployments

---

### What happens to the existing deployments (Demo/QA/External Cloud)?
They will continue to work like before. The same will be connected post-migration completed.

### Can I deploy an application to Demo/A Phase during migration?

Yes, that helps in integration testing.

### Should you make any changes to the deployment lifecycle or CI-CD pipeline?

No changes are needed for 10.x applications. 

However, 11.x applications must use Java 11 and Servlet 4.0 (Tomcat 9, etc.) in their CI/CD environment.

Therefore, both build and runtime environments must be changed.

### I have deployed my application into AWS/GCP/Azure from Appsportal. What happens to it?

It will continue to work. You can patch by pursuing fixes to the 10.x project. When the migration completes, it will connect to the same Instance. 

## Support and GA

---

### How long you'd get support for 10.x projects? Will the projects be migrated to 11 automatically?

If you do not update your projects within the given three months, the projects automatically upgrade to WM 11.0, and the older version projects move to the archived location. Therefore, you could lose the opportunity to manage individual versions of your app with our multi-version Studio.