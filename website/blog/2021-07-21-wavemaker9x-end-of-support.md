---
title: "Annoucement about Ending Support of WaveMaker 9.x Projects"
author: Swetha Kundaram
---

The end of Support (EOS) stage marks the official withdrawal of support for projects of WaveMaker 9.x versions. 

## What does the end of support for WaveMaker 9.x entail?

WaveMaker will end support of WaveMaker 9.x projects by 31 Dec 2021, and this means if you are using 9.x projects, WaveMaker will automatically update to the latest version of WaveMaker. Please note that this update can break explicitly on projects that contain custom code. 

Following 31 Dec 2021, we shall not be supporting project migrations. Therefore, we highly recommend you update your projects to receive support before the established deadline.

<!-- truncate -->

## What does end of support mean for your customers?

The deployed apps will not be affected by the change to the end-users.

## How WaveMaker will help with the update?

Updating Angular is not relatively straightforward. However, our developers at WaveMaker have worked hard to make it a little easier for you. When you initiate an update, WaveMaker takes care of the vast part behind the scenes smoothly and effortlessly. 

Even so, if you have included customizations, i.e., adding custom code, you'll then have to check and accept changes manually by verifying every single customization that runs through the process. This approach is taken care of by the inspection framework that we explicitly developed to guide you through the migration process. Further to this, you can reach out to our support team for more assistance. 

## How do I know if I have WaveMaker 9.x apps?

When you launch WaveMaker Studio, you can see the orange bar at the top indicating you are using 9.x projects. 

When you start the project update, the project card converts into a folder. The folder contains all the versions of the app including WM 9.x and WM 10.0. You can independently work on both versions.

![two versions of project](/learn/assets/two-versions-9-10-apps.png)

For more information and a guide to update, see [Upgrading an App from WaveMaker 9.x to WaveMaker 10.0](/learn/how-tos/guide-to-upgrade-an-app-wavemaker-9x-to-wavemaker-10-0/).


## What happens if you do not upgrade to WaveMaker 10?

If you have already deployed the 9.x WaveMaker application, it will not be affected by the change. However, making alterations would no longer be possible for the app. 

### WaveMaker Online (WMO)

The application projects will automatically upgrade to the latest version of the Studio. 

### WaveMaker Enterprise (WME)

You will no longer receive support and we cannot offer licence extension.

## Why is WaveMaker ending support for the 9.x version?

- Outdated application stack: AngularJS has ended the support, including security issues (31 Dec 2021). https://docs.angularjs.org/misc/version-support-status
- Performance improvements: 
- Security vulnerabilities in the dependent third party libraries
- Enabling micro frontend enablement
- Support for new compression technique - https://docs.wavemaker.com/learn/wavemaker-release-notes/v10-2-0#enhancements
- Wavemaker-generated code is Veracode certificated.
- Latest angular stack, which is Angular 10

## What is changing? 

![end of support](/learn/assets/end-of-support.png)



