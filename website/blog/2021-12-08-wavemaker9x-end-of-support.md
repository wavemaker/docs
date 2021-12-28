---
title: "Ending Support of WaveMaker 9 Projects"
author: Swetha Kundaram
---

The End of Support (EOS) stage marks the official withdrawal of support for WaveMaker 9.x projects. 

WaveMaker app development generates Angular code, as Angular marks the official withdrawal of the previous Angular versions, including AngularJS and Angular 1.x. Therefore, WaveMaker will be ending the support of WaveMaker 9.x projects that use AngularJS and Angular 1.x by 31 Jan 2022, as [Angular announced](https://docs.angularjs.org/misc/version-support-status). The update is primarily focused on improving performance, security, and bug fixes.

We have covered some essential FAQs to help you understand how you can migrate to the latest version of WaveMaker Studio.

<!-- truncate -->

## What does the end of support for WaveMaker 9.x entail? 

Suppose you are using 9.x projects. In that case, WaveMaker will automatically update to the latest version of WaveMaker. The update can break applications that contain custom JavaScript code because of the Angular breaking changes. We have created a guide to help you update to the current version used by WaveMaker, Angular 10.

Please note that following 31 Jan 2022, we will not be supporting project migrations. Therefore, we recommend you plan to update your WaveMaker 9 projects to receive support before the established deadline for a smooth migration process.

## Why is WaveMaker ending support for the 9.x version?

End of previous version system means moving on to newer and better systems. Even though some updates are not entirely responsible for security vulnerabilities, they might impact stability and usability. Other updates address bug fixes and customer-requested features.

View the progress of WaveMaker features and fixes in Studio.

![end of support](/learn/assets/end-of-support.png)

**A glimpse of the updates**:

- Outdated application stack: AngularJS ends the support by 31 Jan 2022, including security issues. [Learn more about AngularJS version support status](https://docs.angularjs.org/misc/version-support-status)
- Latest angular stack Angular 10
- Several performance improvements
- Security vulnerabilities in the dependent third party libraries to get the benefits of [up to date technology stack](/learn/wavemaker-release-notes#technology-stack)
- Support for new [compression technique](/learn/wavemaker-release-notes/v10-2-0#enhancements)
- Enabling [micro frontend enablement](/learn/wavemaker-release-notes/v10-5-0/#support-for-microfrontend-single-spa-framework)
- Wavemaker-generated code is now [Veracode certificated](weaving-security-into-low-code-development/)
- [ngx-bootstrap upgrade](/learn/wavemaker-release-notes/v10-4-0/#upgrade-to-latest-version-of-ngx---bootstrap) with enhanced features

**Some Examples of UI Enhancements**:

- Enhanced DSL APIs exposed on various widgets
- Advanced client-side and server-side validations on Form fields
- Custom Data Formatters for UI widgets
- Summary row in Datatable widget
- Ability to add multiple views in a prefab through partials
- Ability to provide widget level properties in a prefab
- Adding tablet view support to Mobile apps

And so much more. Read [WaveMaker release notes](/learn/wavemaker-release-notes) to understand the features and fixes better.

## How do I know if I have WaveMaker 9.x apps?

When you launch WaveMaker Studio, you can see the orange bar at the top indicating that you are using 9.x projects. 

When you start the project update, the project card converts into a folder. The folder contains all the versions of the app, including WM 9.x and WM 10.0. You can independently work on both versions.

![two versions of the project](/learn/assets/two-versions-9-10-apps.png)

For more information and a guide to update, see [Upgrading an App from WaveMaker 9.x to WaveMaker 10.0](/learn/how-tos/guide-to-upgrade-an-app-wavemaker-9x-to-wavemaker-10-0/).

## How WaveMaker will help you with the update?

Updating Angular is not relatively straightforward. However, our developers at WaveMaker have made it a little easier for you. When you initiate an update, WaveMaker takes care of the major part behind the scenes. 

Even so, if you have included customizations, i.e., adding custom JavaScript code, you'll have to check and accept changes manually by verifying every single customization that runs through the process. This approach is taken care of by the [inspection framework](/learn/app-development/dev-integration/inspection-framework/) that we explicitly developed to guide you through the migration process. Further to this, you can reach out to our support team for more assistance. 

## What does end of support mean for your customers?

The deployed apps will not be affected by the change to the end-users.

## What happens if you do not upgrade to WaveMaker 10?

If you have already deployed the 9.x WaveMaker applications, the change will not affect it. However, making alterations would no longer be possible for the app. 

### WaveMaker Online (WMO)

The application projects will automatically upgrade to the latest version of the Studio. 

### WaveMaker Enterprise (WME)

You will no longer receive support, and we cannot offer the license extension.

## WaveMaker 10 Releases

- [WaveMaker 10 Preview](/learn/wavemaker-release-notes/v10-0-preview)
- [WaveMaker 10.GA](/learn/wavemaker-release-notes/v10-0-ga)
- [WaveMaker 10.1](/learn/wavemaker-release-notes/v10-1-0)
- [WaveMaker 10.2](/learn/wavemaker-release-notes/v10-2-0)
- [WaveMaker 10.3](/learn/wavemaker-release-notes/v10-3-0)
- [WaveMaker 10.4](/learn/wavemaker-release-notes/v10-4-0)
- [WaveMaker 10.5](/learn/wavemaker-release-notes/v10-5-0)
- [WaveMaker 10.6](/learn/wavemaker-release-notes/v10-6-0)
- [WaveMaker 10.7](/learn/wavemaker-release-notes/v10-7-0)
- [WaveMaker 10.8](/learn/wavemaker-release-notes/v10-8-0)
- [WaveMaker 10.9](/learn/wavemaker-release-notes/v10-9-0)
- [WaveMaker 10.10](/learn/wavemaker-release-notes/v10-10-0)
- [WM 10.10.3 - Log4j2 Dependency Vulnerability](/learn/wavemaker-release-notes/v10-10-3)

For the detailed list of releases, including biweekly ones, see [WaveMaker Release Notes](/learn/wavemaker-release-notes).