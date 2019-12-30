---
title: "Build Options for App Deployment"
id: "build-options-app-deployment"
---
---

From WaveMaker 10.0, you can choose from the new build options to deploy your app. The following are the two build options:

1. WaveMaker Build
2. Angular Build

### WaveMaker Build

This build option follows the classic wavemaker build process which was used in the earlier versions of WaveMaker; for example, WM 9.4.

### Angular Build

With WM 10.0, the projects will contain generated Angular 7 code. Thus, users can choose the Angular build option to deploy their project. The Angular build further supports the following two build modes:

1. Development mode
2. Production mode

**Development:** This mode will have a minimum build time for the compilation, but the optimization mode does not include in this build. Thus, the execution load depends on the client/browser, which makes the application heavier at the runtime.

**Production:** This mode takes longer than the **Development** mode as the compilation of templates, optimization mode, i.e., minification, uglification, dead code elimination/tree shaking, etc. handles during the build time. So the runtime performance will be superlatively better in this mode.

## Advantages of the Angular Build Option

**Angular Build** is a new build option that supports the Angular-generated project, and it offers several benefits over the classic **WaveMaker Build**. The Angular build option provides:

- Angular 7 CLI compatible build process.
- Reduced size of build output files.
- Optimized output with Dead Code Elimination/Tree shaking, Uglification, and minification.
- Reduction in Application & Page Load times as parsing & execution times are reduced.

## Locate Build Options

To access the build options, click the **Settings** icon and select the **Config Profile** option from the drop-down. See the image below: [![](/learn/assets/Config-profile.png)](/learn/assets/Config-profile.png)

The **Config Profiles** opens the **Profile Configuration** window. Go to the **Build Options** tab, as shown in the image below:

[![](/learn/assets/Locate-build-options.png)](/learn/assets/Locate-build-options.png)

The Build Options are Read-Only for ‘Development’ build profile of the WaveMaker build. For other profiles such as ‘Deployment’ or the custom ones, you can choose from the above-specified modes.

## File Explorer

With the Angular code generation in place, the users can see the generated code in parallel to their application development in the **File Explorer** Section. Further, the file explorer will have an additional folder called the ‘**generated-angular-app**’ folder at the root of the application folder structure.

The ‘**generated-angular-app**’ is Angular 7 compliant project structure of the WaveMaker application as shown in the image below. The content in this section is Read-only.

[![](/learn/assets/Build-start.png)](/learn/assets/Build-start.png)

## Deployment Flow Changes

The Deployment operation in the earlier version of WaveMaker was blocking users to further work on WM until the process completes. Thus, the users were not able to perform any operations at this stage. From WM 10.0, the flow does not block you to make an action. You can choose to ‘close’ the Deployment progress dialog and continue with operations if needed.

[![](/learn/assets/Deployment-flow-changes.png)](/learn/assets/Deployment-flow-changes.png)

The user keeps informed about the status of the deployment through the 'toaster UI'. If the user works on the same project, after the deployment, they get notified by an email.

The progress of the Deployment is indicated by the change of Deployment Icon on the header as shown below, and by clicking the icon, you can see an option to ‘Check Deployment Status’ by opening the dialog again.

[![](/learn/assets/Check-deployment-status-Click-e1554896395542.png)](/learn/assets/Check-deployment-status-Click-e1554896395542.png)

For the manual build, see [Building a War file from a WaveMaker Project](/learn/app-development/deployment/building-war-wavemaker-project/).

