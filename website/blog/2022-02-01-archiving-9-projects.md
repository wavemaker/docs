---
title: "Archiving WaveMaker 9 Projects"
author: Swetha Kundaram
---
---

Earlier in this blog, we announced [ending support of WaveMaker 9 (WM) Projects](/learn/blog/2021/12/08/wavemaker9x-end-of-support). WaveMaker offered support to manage individual versions of your app with our multi-version control system so that you could simultaneously work on both WM 9 and WM 10 projects. One of the key differences between the WM 9 and WM 10 is moving from AngularJS to Angular 11. 

Angular laid its plan in January 2018 for the [final releases of AngularJS](https://docs.angularjs.org/misc/version-support-status) before entering long-term support (LTS) and extended the LTS due to the global pandemic until December 31, 2021. As we reach the end of life of AngularJS, we officially withdrew support of WM 9 projects starting **WM 10.12 release planned for February 2, 2022**. As a result, the existing WM 9 projects get archived.

<!--truncate-->

## WaveMaker Archived Apps

Typically, when [initiating project migration](/learn/how-tos/guide-to-upgrade-an-app-wavemaker-9x-to-wavemaker-10-0/#initiating-the-project-upgrade), you have two versions of the project in one folder containing WM 9 and WM 10 projects. 

The following diagram illustrates which projects move to the archived location. 

![](/learn/assets/wm9-projects-archive-architecture.png)

### Project Upgraded

**Case-1:** When you finish the upgrade process, the WM 9 project gets archived in that folder. In this case, the upgraded project, WM 10, remains in WaveMaker apps and has all functionality that a regular WaveMaker app has. The WM 9 version of the project moves to the archived location, which should be safe to delete. 

### Upgrade in Progress

**Case-2:** The projects that have just initiated the upgrade, move to the Archive location as individual projects of their own versions, such as WM 9 and WM 10 projects. These projects automatically move to the Archive location separately. To work on these projects, you can download the project as Zip and import; the project gets imported as a WM 10 version.

### Upgrade not Initiated

**Case-3:** The projects that have not yet initiated upgrading to WM 10 move to the Archived location as is. You can still import the project as zip and import to use its content.

## Accessing Archived Apps

In WaveMaker Studio, navigate to the topnav tabs displaying WaveMaker apps.

- Go to the **Archived Apps** tab. You can view all your archived apps here.

![screenshot showing how to locate](/learn/assets/wm9-archived-projects.png)

### Archived Actions

Archived apps are accessible with limited access. Allowed actions include:

- Download Project as Zip
- Delete Project

## WM 9 Project Deployments Not Supported

With WM 9 projects archived, deploying WM 9 apps are not supported anymore. WaveMaker will not display WM 9 projects in **Manage Deployed Apps**. All the details related to the project, including logs, releases, history, and app URLs, are removed. However, you can continue to access deployed apps on servers, such as AWS, Google, Azure.
