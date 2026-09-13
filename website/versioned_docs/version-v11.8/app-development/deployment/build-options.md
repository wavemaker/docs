---
title: "Build Options for App Deployment"
id: "build-options"
sidebar_label: "Build Options"
---
---

Build options are a part of configure profile settings. You can choose from the following build options to deploy your app. There are two build options you can choose from.

1. Angular Build
2. WaveMaker Build (deprecated)

## Angular Build

With [WM 10.0](/learn/wavemaker-release-notes/v10-0-ga), the projects will contain generated Angular 7 code. Thus, you can choose the Angular build option to deploy your project. The Angular build further supports the following two build modes.

1. Development mode
2. Production mode

### Development

This mode will have a minimum build time for the compilation, but the optimization mode does not include in this build. Thus, the execution load depends on the client/browser, which makes the application heavier at the runtime.

### Production

This mode takes longer than the **Development** mode as the compilation of templates, optimization mode, i.e., minification, uglification, dead code elimination/tree shaking, etc. handles during the build time. So the runtime performance will be superlatively better in this mode.

## Choosing Angular Build Option

**Angular Build** supports the Angular-generated project, and it offers several benefits over the classic **WaveMaker Build**. The Angular build option provides:

- Angular 7 CLI compatible build process.
- Reduced size of build output files.
- Optimized output with Dead Code Elimination/Tree shaking, Uglification, and minification.
- Reduction in Application & Page Load times as parsing & execution times are reduced.

## Setting Build Option

To access the build options, click the **Settings** icon and select the **Config Profile** option from the drop-down. See the image below.

[![config profile](/learn/assets/Config-profile.png)](/learn/assets/Config-profile.png)

The **Config Profiles** opens the **Profile Configuration** window. Go to the **Build Options** tab, as shown in the image below:

[![build options](/learn/assets/Locate-build-options.png)](/learn/assets/Locate-build-options.png)

The Build Options are Read-Only for ‘Development’ build profile of the WaveMaker build. For other profiles such as ‘Deployment’ or the custom ones, you can choose from the above-specified modes.

## WaveMaker Build (deprecated)

This build option follows the classic WaveMaker build process which was used in the earlier versions of WaveMaker; for example, WM 9.4. WaveMaker build follows Maven build process. For more information, see [WaveMaker profiles](/learn/app-development/deployment/configuration-profiles#development-configuration-profile)

## See Also

[One-Click Deployment](/learn/app-development/deployment/one-click-deployment)  
[Building a War file from a WaveMaker Project](/learn/app-development/deployment/building-with-maven)
