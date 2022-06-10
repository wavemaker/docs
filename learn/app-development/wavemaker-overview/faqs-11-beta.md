---
title: "FAQs of WaveMaker 11 Beta"
id: ""
sidebar_label: "FAQs 11 Beta"
---
---

WaveMaker 11 becomes available in the Studio since WaveMaker 11 beta release. Since the release, many of our customer have frequestly asked the following questions, which can answer some of your quries related to the release. If you cannot find an answer to question, write to us at support@wavemaker.com.

## General 

### Why is WaveMaker 11 Release a BETA?

We Introduced React native Mobile Apps as part of this release.
 
- React Native is in an early stage, so we marked it as Beta
- However, please note that Web and Cordova Mobile are stable and working just like in the earlier versions. 

### What is Multi-version Studio?
Multiple versions of Studio in a single environment that supports applications to be built in either of the studio versions.
This release provides the ability to build applications in 10.x and 11.x.
Application cards in Studio will show Platform Version.

### Why do we include Multi-versioned Studio?

With this Release we moved to Java11(from Java8) which Impacts CI/CD pipelines of your Apps.
Your CI/CD infrastructure has to be migrated to Java11 to build and deploy WaveMaker 11 APPS.
So as it may take time from your end, so we are giving explicit option to Migrate Apps to 11.x

### Can we start building Web and Cordova App in 11.x?

Yes, this release is as stable as other releases for web and Cordova mobile Apps.

### How can we migrate our projects to the 11.x version?
Follow migration guide 
https://docs.wavemaker.com/learn/how-tos/upgrade-guide-wavemaker-10-to-11
Can multiple Developers work on Migration ?
Yes, the Migration Project can be shared with Contributors.
So anyone can fix migration issues
Start Migration, Finish Upgrade actions can only be done by Project Admins.

Projects/Applications
Will the WM 11 Beta release impact the existing projects ?
No, it will not impact and also it will still be running on java 8.
Migration has to be Initiated explicitly, Follow migration guide for more information.
Your existing Deployments(Demo Phase) will continue to work as it is.

What version of the project would get created when we create a new Project. 
It creates the 11.x Project by default.
Default Mobile Apps are React native.
Can create Cordova based Apps by using links in project Create dialogue. 
Will we be able to create 10 version projects? 
No, you can use existing 10.x Apps, but can’t create new 10.x Apps.
What happens if we import 10.x application zip ?
10.x application will be imported as 10.x only.
Migration to 11.x has to be initiated explicitly 
Prefabs/Templatebundles/Project Shells
Do we need to migrate Prefabs/Project Shell/Template Bundles ?
Yes, much like Applications. 
Can I use 10.x published  prefabs in 11.x Applications ?
Yes, 11.x apps can consume 10.x prefabs.  But not vice versa.
Shall I migrate Prefab Projects first or Applications ?
We would suggest migrating Applications first, then Prefabs. As you can use 10.x prefabs in 11.x Projects
What Version Should I Use When Publishing a Prefab from an OnGoing Migration Project ?
Studio will prompt an Incremental version always
We would recommend starting with a fresh Major version.
Ex: if 10.x latest published version is 1.6, then use 2.0 as version while Publishing from ongoing Migration project.
Should we continue to publish Prefabs to the Team from 10.x Project while Migration is going on ?
Yes, as said in above point implicitly provide different versions for Both 10.x and 11.x published Prefabs/
Ex: Continue 1.7 for 10.x prefabs.
What is the process of consuming migrated Prefabs into Project ?
A new version will be published into Teams.
Project Opening Dialogue will show a new version option to upgrade.
Or Inside Studio, Prefabs Import Dialogue.	



Project Branches
What is Impact to Project Branches ?
Nothing. Project Branches will continue to stay on the Same Platform Version(10.x). 
Migration can be Initiated for Master Branch Project Only. 
Ensure Merging all feature branches into master before Initiating Migration. 
Once Migration Completed, recreate project Branches or merge branches outside Studio.
I have Prefab Project Branch for hotfix, what happens to it
Similar to Applications, you can continue to patch it by pushing fixes from Studio.
But as we recommended above, merge/recreate after migration of master Project.

Deployments
What happens to existing deployments(Demo/QA/External Cloud) ?
They will continue to work as it is.
The same will be connected post migration completed.
Can I deploy an application to Demo/A Phase during Migration ?
Yes, that helps in Integration testing.
Do we need to make any changes to our deployment lifecycle or CICD pipeline.?
No changes needed for 10.x applications. 
11.x applications have to use Java11 and Servlet 4.0(Tomcat 9 etc) in their CI/CD environment.
Both Build and Runtime Environments have to be changed.
I have Deployed my application into AWS/GCP/Azure from Appsportal ? What happens to it ?
It will continue to work. You can patch by  pursuing fixes to the 10.x project.
When the migration complets, It will connect to the same Instance. 
Support and GA
How long will support be provided for 10 projects? Will the projects be migrated directly to 11
If you do not update your projects within the given three months, the projects automatically upgrade to WM 11.0, and the older version projects move to the archived location. Therefore, you could lose the opportunity to manage individual versions of your app with our multi-version studio.
   
When is the GA release expected? And what would be the key features as part of the GA Release


