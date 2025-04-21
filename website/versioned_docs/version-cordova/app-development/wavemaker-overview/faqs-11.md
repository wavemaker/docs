---
title: "FAQs of WaveMaker 11"
id: "faqs-11"
sidebar_label: "FAQs 11"
---
---

WaveMaker Studio is now available as WaveMaker 11 GA. Since the release, we have received many questions about the release. We have tried our best to cover some frequently asked questions here. If you still have more questions, write to us at support@wavemaker.com.

## General 

---

### What is Multi-version Studio?

Multiple versions of Studio in a single environment allow you to simultaneously build applications in either of the Studio versions, including WaveMaker 10.x and WaveMaker 11.x. Application cards in Studio show Platform Version.

![multi-version studio](/learn/assets/converts-into-two-project-cards.png)

### Why do we include Multi-versioned Studio?

With the WaveMaker 11 release, we moved to Java 11 from Java 8, which impacts your apps' CI/CD pipelines.

Therefore, your CI/CD infrastructure must be migrated to Java 11 to build and deploy WaveMaker 11 apps.

For this reason, we introduced a multi-version Studio to give you the time it may take from your end, giving you an explicit option to Migrate Apps to 11.x.

### Did WaveMaker stop supporting Cordova apps?

We Introduced React Native framework as part of the WaveMaker 11 release. However, please note that Web and Cordova Mobile frameworks are stable and working just like in the earlier versions and we continue to support them. 

### Can we start building Web and Cordova App in 11.x?

Yes. WaveMaker 11 is as stable as other releases of Web and Cordova mobile app development platforms.

### How can we migrate our projects to the 11.x version?

Follow this migration guide: 
https://docs.wavemaker.com/learn/how-tos/upgrade-guide-wavemaker-10-to-11

### Can multiple developers work on migration?

Yes. The migration project can be shared with contributors, and any of your team members can fix migration issues.
However, actions like **Start Migration** and **Finish Upgrade** can only be done by **Project Admins**.

## Projects and Applications

---

### Will the WaveMaker 11 release impact the existing projects?

No, it will not impact, but the projects will still run on Java 8. Migration has to be initiated explicitly. Your existing deployments, including Demo and Phase, will continue to work like before.

Follow the migration guide for more information.

### Which version project gets created when creating a new project? 

From WaveMaker 11 onwards, when you create a new project:

1. It creates a WaveMaker 11.x project by default.
2. Default Mobile Apps are React Native.
3. You can create Cordova-based apps by using the link in the project creation dialogue. 

### Can we create 10-version projects? 

No. You can use the existing WaveMaker 10.x apps but can't create a new 10.x app.

### What happens when you import WaveMaker 10.x application zip?

WaveMaker 10.x application imports as 10.x project only. Migration to 11.x has to be initiated explicitly. 


## Prefabs and Template Bundles and Project Shells

---

### Do we need to migrate Prefabs/Project Shell/Template Bundles?

Yes, just like any application. 

### Can I use WaveMaker 10.x published prefabs in 11.x applications?

Yes, WaveMaker 11 apps can consume 10.x prefabs, but not vice versa.

### Should I migrate Prefab projects first or applications?

We suggest migrating applications first and then Prefabs. This is because you can use 10.x prefabs in WaveMaker 11.x app projects.

### Naming versions when publishing a Prefab from an ongoing Migration project?

The Studio will prompt an incremental version always. So, we recommend starting with a new Major version for an ongoing migration project. 

For example, if 10.x latest published version is 1.6, we suggest using 2.0 when publishing from the ongoing migration project.

### Should you continue to publish Prefabs to the Team from 10.x Project while Migration is going on?

Yes, however, implicitly provide different versions for both 10.x and 11.x published Prefabs as specified in the [previous point](#naming-versions-when-publishing-a-prefab-from-an-ongoing-migration-project).

For example: if the latest published version of the 10.x app is 1.6, continue as 1.7 for 10.x Prefabs.

### How to use migrated Prefabs in the project?

A new version will be published in Teams.

- When opening a project, the dialogue will show a new version option to upgrade.
- Or, in Studio, go to **Prefabs** -> **Import** dialogue. 

## Project Branches

---

### What is the impact on Project Branches?

Nothing. 

- Project branches will remain on the same platform version, 10.x. 
- Migration can be initiated for the Master branch project only. 

:::note
Ensure merging all feature branches into master before initiating the project migration. 
:::

- Once the migration is completed, recreate project branches or merge branches outside Studio.

### I have the Prefab project branch for a hotfix. What happens to it?

Similar to applications, you can continue to patch it by pushing fixes from Studio. But, we recommended merging/recreating after the migration of the master Project.

## Deployments

---

### What happens to the existing deployments Demo/QA/External Cloud?

They will continue to work like before. The same will be connected after the migration is complete.

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