---
title: "Announcement about Ending Support of WaveMaker 9.x Projects"
author: Swetha Kundaram
---

The End of Support (EOS) stage marks the official withdrawal of support for projects of WaveMaker 9.x versions. 

## What does the end of support for WaveMaker 9.x entail?

WaveMaker generates Angular code, as Angular marks the official withdrawal of previous Angular versions. WaveMaker will end support of WaveMaker 9.x projects by 31 Dec 2021. The update is primarily geared towards improving performance, security, and bug fixes. 

Suppose you are using 9.x projects. In that case, WaveMaker will automatically update to the latest version of WaveMaker. The update can break projects that contain custom JavaScript code because of the Angular update. 

Plan your WaveMaker 9 End of support. We have covered some essential FAQs to help you understand how you can migrate to the latest version of WaveMaker Studio.

Please note that following 31 Dec 2021, we shall not be supporting project migrations. Therefore, we recommend you plan to update your WaveMaker 9 projects to receive support before the established deadline.

<!-- truncate -->

## Why is WaveMaker ending support for the 9.x version?

End of previous version system means moving on to a newer and better system. Even though they are not entirely responsible for security vulnerabilities, they might impact stability and usability. Other updates address other bugs and issues. Even though they are not responsible for security vulnerabilities, they might impact the stability of the projects.

In addition to the recommended security updates, view the progress of WaveMaker Studio and what you've been missing.

![end of support](/learn/assets/end-of-support.png)

- Outdated application stack: AngularJS ends the support by 31 Dec 2021, including security issues. [Learn more about AngularJS version support status](https://docs.angularjs.org/misc/version-support-status)
- Latest angular stack Angular 10
- Several performance improvements
- Security vulnerabilities in the dependent third party libraries to reap the benefits of [up to date technology stack](/learn/wavemaker-release-notes#technology-stack)
- Support for new [compression technique](/learn/wavemaker-release-notes/v10-2-0#enhancements)
- Enabling [micro frontend enablement](/learn/wavemaker-release-notes/v10-5-0/#support-for-microfrontend-single-spa-framework)
- Wavemaker-generated code is now [Veracode certificated](weaving-security-into-low-code-development/)
- [ngx-bootstrap upgrade](/learn/wavemaker-release-notes/v10-4-0/#upgrade-to-latest-version-of-ngx---bootstrap) with enhanced features

### Other UI Enhancements

- Enhanced DSL APIs exposed on various widgets
- Advanced client-side and server-side validations on Form fields
- Custom Data Formatters for UI widgets
- Summary row in Datatable widget
- Ability to add multiple views in a prefab through partials
- Ability to provide widget level properties in a prefab
- Adding tablet view support to Mobile apps

## How do I know if I have WaveMaker 9.x apps?

When you launch WaveMaker Studio, you can see the orange bar at the top indicating you are using 9.x projects. 

When you start the project update, the project card converts into a folder. The folder contains all the versions of the app, including WM 9.x and WM 10.0. You can independently work on both versions.

![two versions of the project](/learn/assets/two-versions-9-10-apps.png)

For more information and a guide to update, see [Upgrading an App from WaveMaker 9.x to WaveMaker 10.0](/learn/how-tos/guide-to-upgrade-an-app-wavemaker-9x-to-wavemaker-10-0/).

## How WaveMaker will help with the update?

Updating Angular is not relatively straightforward. However, our developers at WaveMaker have worked hard to make it a little easier for you. When you initiate an update, WaveMaker takes care of the vast part behind the scenes. 

Even so, if you have included customizations, i.e., adding custom code, you'll have to check and accept changes manually by verifying every single customization that runs through the process. This approach is taken care of by the [inspection framework](/learn/app-development/dev-integration/inspection-framework/) that we explicitly developed to guide you through the migration process. Further to this, you can reach out to our support team for more assistance. 

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

For the detailed list of releases, including biweekly ones, see [WaveMaker Release Notes](/learn/wavemaker-release-notes).











