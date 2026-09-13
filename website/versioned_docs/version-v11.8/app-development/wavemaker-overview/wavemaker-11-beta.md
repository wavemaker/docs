---
title: "WaveMaker 11 Beta"
id: "wavemaker-11-beta"
sidebar_label: "11 beta"
---
---

:::note
This document contains information about WaveMaker 11 Beta. We provided fixes and improvements to the features since we released 11 Beta—now outdated. Follow our [release notes page](/learn/wavemaker-release-notes) for up-to-date information. Learn more about [WaveMaker 11.1](/learn/wavemaker-release-notes/v11-1-0) (latest).
:::

We are back with a new release, and we can't wait to share all the great features and updates waiting for you in WaveMaker 11 beta.

With every new release, our goal is consistent. It is to simplify the low-code platform to bring app ideas to life faster. While we are at it, we continue to provide a broad canvas to customize app components and services that are completely reusable at their core—and take advantage of several open-source integrations on our way. Let's see what we got this year.

WaveMaker 11 beta release features significant advancements shaping the practicality of the low-code development for mobile consumers in a big way. And we covered you with extensive tooling capabilities, keeping the low code roots in mind.

![React Native Studio](/learn/assets/react-native-studio.png)

## Introducing React Native in WaveMaker

We introduce React Native, a new platform for developing native apps, including iOS and Android app development, all within WaveMaker Studio. The best part is that it requires almost no learning curve if you are already a WaveMaker developer. It offers platform-specific versions of components so that a single codebase can share code across Android and iOS stores. [Read more](/learn/react-native/react-native-overview).

![react native project creation](/learn/assets/react-native-project-creation.png)

### Cordova Support Continues

Although our emphasis at this point is to prioritize React Native, even so, we do not plan to deprecate Cordova anytime sooner. We will continue to support Cordova app development and provide an up-to-date tech stack whenever a new update is available. 

## New Flex Layout Widget

We are persistent in producing rich studio tools that enable you to design great-looking apps using our new Linearlayout Flex widget. This widget allows you to display data in list format, giving developers complete control of vertical and horizontal layout adjustments. This feature is exclusive to React Native users for now. 

![flex widget](/learn/assets/flex-layout-widget.gif)

## Java 11 Update

The Java 11 version updates the tech stack but brings a few break changes and version bumps. If you build and deploy apps outside WaveMaker, you must upgrade your build infrastructure and verify the deployment setup to support Java 11. For this reason, we introduced parallel versioning of Studio so you can test your application before you upgrade to WaveMaker 11 beta. Learn more about [upgrading deployment infrastructure](/learn/how-tos/upgrade-guide-wavemaker-10-to-11#upgrade-deployment-infrastructure) before you upgrade to WaveMaker 11. 

## Upgrading SAML to new Library

All WaveMaker projects using SAML (saml2-core) as a security provider have reached their end of life and, therefore, will be migrated to a new version of SAML (saml2-service-provider). The new library saml2-service-provider is a part of spring security which was not the case for saml2-core. 

:::note
**To do**:
After upgrading to WaveMaker 11 using saml2-service-provider, the users will have to update the new URLs in their respective security providers. For example, Okta, One login, and more. For more information, see [Configure IdP](/learn/app-development/app-security/saml-integration/#configure-idp-with-wavemaker-application) and [Deployment of Application Configured with SAML](/learn/app-development/app-security/saml-integration/#deployment-of-application-that-is-configured-with-saml)
:::

## API Composer Toolkit

API composer toolkit can be your playground to compose an object using multiple API endpoints. This means you can combine many REST APIs in Java Service and write custom business logic that you can use as a variable and bind to any UI widget. 

![](/learn/assets/api-composer.png)

## API Mock Server

API Mock Server is our own WaveMaker Studio extension. It simulates a backend API with responses that are close to accurate, which are useful for developing the UI design even if you do not have a backend service ready to consume. This is great for the app designing phase, while the backend team can develop the APIs simultaneously. For more information, see [API Mock Server](/learn/app-development/services/api-mock-server).

## Pagination for Imported APIs

WaveMaker now supports server-side pagination out of the box when importing API with pagination. It works seamlessly with all widgets, including tables, lists, searches, etc. You can configure these pagination parameters while importing the API. 

## Multi-version Studio

We bring in parallel versioning of Studio to help perform project migration smoothly at your convenience. With Multi-version Studio, the project card converts into a folder that contains two versions of the same project, including versions 10 and 11. You can work on both versions of the projects, meaning you can push your critical planned fixes on WaveMaker 10 while planning your upgrade to WaveMaker 11 in its project cards, respectively. 

![multi-version studio](/learn/assets/multi-version-studio.png)

For more information, see [Updating an App from WaveMaker 10 WaveMaker 11](/learn/how-tos/upgrade-guide-wavemaker-10-to-11).

## POM Hierarchy Remodeled to Inheritance Model

A generated WaveMaker application encloses a pom.xml containing build resources, such as filters, profiles, repositories, plugin management, dependencies, and user customizations. The pom structure has been remodeled to inherit from the parent pom, making it easy to read the code. 

## Teams for Enterprise

Teams is a collaborative development environment, which comes as a standard for WaveMaker Enterprise users. Manage projects, roles, code repositories, add or remove team members, grant permissions, and more using [Teams Portal](/learn/teams/overview). 