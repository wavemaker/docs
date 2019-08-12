---
title: "Build Options for App Deployment"
date: "2019-04-10"
---

From WaveMaker 10.0, you can choose from the new build options to deploy your app. The following are the two build options:

1. Build
2. Build

### Build

build option follows the classic wavemaker build process which was used in the earlier versions of WaveMaker; for example, WM 9.4.

### Build

With WM 10.0, the projects will contain generated Angular 7 code. Thus, users can choose the Angular build option to deploy their project. The Angular build further supports the following two build modes:

1.  mode
2.  mode

**:** This mode will have a minimum build time for the compilation, but the optimization mode does not include in this build. Thus, the execution load depends on the client/browser, which makes the application heavier at the runtime.

**:** This mode takes longer than the mode as the compilation of templates, optimization mode, i.e., minification, uglification, dead code elimination/tree shaking, etc. handles during the build time. So the runtime performance will be superlatively better in this mode.

## of the Angular Build Option

**Build** is a new build option that supports the Angular-generated project, and it offers several benefits over the classic **Build** The Angular build option provides:

- 7 CLI compatible build process.
- size of build output files.
- output with Dead Code Elimination/Tree shaking, Uglification, and minification.
- in Application & Page Load times as parsing & execution times are reduced.

## Build Options

access the build options, click the icon and select the **Profile** option from the drop-down. See the image below: [![](https://www.wavemaker.com../assets/Config-profile.png)](https://www.wavemaker.com../assets/Config-profile.png)

The **Config Profiles** the  **Configuration** window. Go to the **Options** tab, as shown in the image below:

[![](https://www.wavemaker.com../assets/Locate-build-options.png)](https://www.wavemaker.com../assets/Locate-build-options.png)

Build Options are Read-Only for ‘Development’ build profile of the WaveMaker build. For other profiles such as ‘Deployment’ or the custom ones, you can choose from the above-specified modes.

## Explorer

the Angular code generation in place, the users can see the generated code in parallel to their application development in the **Explorer** Section. Further, the file explorer will have an additional folder called the ‘**\-angular-app**’ folder at the root of the application folder structure.

‘**\-angular-app**’ is Angular 7 compliant project structure of the WaveMaker application as shown in the image below. The content in this section is Read-only.

[![](https://www.wavemaker.com../assets/Build-start.png)](https://www.wavemaker.com../assets/Build-start.png)

## Flow Changes

The Deployment operation in the earlier version of WaveMaker was blocking users to further work on WM until the process completes. Thus, the users were not able to perform any operations at this stage. From WM 10.0, the flow does not block you to make an action. You can choose to ‘close’ the Deployment progress dialog and continue with operations if needed.

[![](https://www.wavemaker.com../assets/Deployment-flow-changes.png)](https://www.wavemaker.com../assets/Deployment-flow-changes.png)

The user keeps informed about the status of the deployment through the 'toaster UI'. If the user works on the same project, after the deployment, they get notified by an email.

progress of the Deployment is indicated by the change of Deployment Icon on the header as shown below, and by clicking the icon, you can see an option to ‘Check Deployment Status’ by opening the dialog again.

[![](https://www.wavemaker.com../assets/Check-deployment-status-Click-e1554896395542.png)](https://www.wavemaker.com../assets/Check-deployment-status-Click-e1554896395542.png)

For the manual build, see  [a War file from a WaveMaker Project](/learn/app-development/deployment/building-war-wavemaker-project/)

- [Options](#build-options)
- [Build](#wavemaker-build)
- [Build](#angular-build)
    - [Mode](#development-mode)
    - [Mode](#production-mode)
- [of Angular Build](#advantages-of-angular-build)
- [Build Options](#locate-build-options)
- [Explorer](#file-explorer)
- [Deployment Flow](#deployment-flow)
