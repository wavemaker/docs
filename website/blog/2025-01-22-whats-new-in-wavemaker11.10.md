---
title: "Keeping You Ahead: WaveMaker Upgrades to Angular v18 and Node v22"
author: "Venugopal Jidigam"
---
---

WaveMaker Studio 11.10 brings a range of powerful new features, design capabilities, stack upgrades, and enhancements to improve your app development experience. With this release, we’re introducing groundbreaking capabilities like Exporting Prefab as Web Component for building framework agnostic components, and a Project Migration Report, while also upgrading our technology stack to ensure your applications remain modern, secure, and future-proof.

This release also focuses on future-proofing your applications with upgrades to Angular 18 for Web Applications and Expo 52 for hybrid mobile applications, ensuring they remain secure, performant, and aligned with the latest industry standards.

Additionally, we’ve made several enhancements and restructured Docker configurations to improve maintainability. Alongside these updates, we’ve resolved numerous bugs to ensure a smoother development experience.

<!-- truncate -->

## Key Features

### Introducing Framework-Agnostic Prefabs - Available on Request

With the latest release, WaveMaker Studio takes modular development to the next level by enabling Prefabs to be exposed as web components. This groundbreaking enhancement allows you to build reusable components once in WaveMaker and use them across various UI frameworks, including React, Vue.js, and more. Prefabs are no longer limited to WaveMaker applications; they are now truly universal, empowering developers to seamlessly integrate them into their preferred tech stack. Build once, use anywhere! 

### Project Migration Report

The latest release brings the Project Migration Report feature, designed to simplify tracking changes during migrations. This report provides a detailed summary of all modifications made within a project during the migration process, ensuring transparency and making it easier to assess the impact of updates. Stay informed and confidently manage your project upgrades!

Read more details in the [Inside the Migration: Introducing the Project Migration Report blog](/learn/blog/2025/01/02/migration-report/).

### Support for Multi-Security Providers

This release introduces support for configuring multiple security providers within a single application. Developers can now enable diverse authentication methods, such as username/password login alongside OAuth-based protocols like Google Sign-In. This flexibility enhances user experience by allowing seamless integration of multiple login options in your applications.


## Technology Stack Upgrades

### 1. Angular Upgrade to v18 and Node to v22

To ensure your applications remain secure and performant, WaveMaker applications are now upgraded to use Angular v18 versions along with Node v22.

- **Angular 18** (upgraded from 17, which reaches end of life on May 15, 2025).
- **Node.js 22** (upgraded from Node.js 18).

These upgrades bring the latest features and security enhancements to your applications. To keep yourself ready for the upgrade, we recommend that you upgrade your build environment (CI/CD pipelines) for Node version from 18.16.1 to 22.11.0. Check out the detailed [blog](/learn/blog/2025/01/06/angular-node-upgrades/).

:::note
The Node upgrade applies only to Web applications, while React Native applications will continue using Node version 18.
:::

### 2. Updated Database Versions Supported

WaveMaker now supports the latest database server versions, phasing out deprecated ones in alignment with industry best practices. Below is the list of database servers with their deprecated versions and the newly supported versions:

| Database Provider  | Deprecated Version  |     Supported Versions |
| :----------------  | :-----------------  |  :---------------- |
| MySQL              | 5.7                 | 8.0, 8.4, 9.1      |
| PostgresSQL        | 9.6                 | 13.18, 17.0        |
| Microsoft SQL Server    | 2017           | 2019, 2022         |
|Oracle              | 12c                 | 19c, 23c           |
| IBM DB2            | 11.1                | 11.5               |

Look into out [blog post](/learn/blog/2025/01/07/database-version-updates/) for futher details.
 
### 3. Expo 52 Upgrade

Starting January 27, 2025, Expo 52 will be available in React Native Studio, introducing improved tools, debugging enhancements, automation testing support, and compatibility with React Native 0.76.

For more details, see the [Expo 52 Blog](/learn/blog/2024/12/16/expo-52-react-native-update/).

## Key Enhancements

**Droppable Footer for Wizard**: Users can now easily drop widgets into the wizard's action section. Earlier wizard actions like Next, Previous, Done, etc. were fixed and not editable like WaveMaker widgets. Now, users can configure, style, or add new actions based on their requirements
**Restructured Dockerfiles**: Streamlined Dockerfiles for CI/CD of WaveMaker Applications. Have a look at the [Optimized WaveMaker App Builds & Deployments with Docker Images blog](/learn/blog/2025/01/17/specialized-docker-images/).

## Notable Bug Fixes

WaveMaker 11.10 addresses various bugs reported in previous versions. Check out the [upcoming release notes](/learn/wavemaker-release-notes/v11-10-0/) for the complete list of fixes. 


## Conclusion

WaveMaker Studio 11.10 is a significant update designed to enhance productivity, simplify migrations, and future-proof your applications. With features like Exporting prefab as a Web Component, and Angular/Node upgrades, this release empowers developers and designers alike to build modern, enterprise-grade applications.
