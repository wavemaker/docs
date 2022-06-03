---
title: "Updating an App from WaveMaker 10 WaveMaker 11"
id: ""
sidebar_label: "Upgrade Guide 11 beta"
---
---

This guide helps you follow step-by-step instructions and prerequisites for upgrading your projects to WaveMaker 11 beta. Follow these steps carefully and ensure you test the project thoroughly to complete the version upgrade. After finishing the upgrade, access all the amazing tools and features of WaveMaker 11 beta. See [WaveMaker 11 Beta Features](/learn/app-development/wavemaker-overview/wavemaker-11-beta) to learn what's new.

When you log in to WaveMaker Studio, you can see the following prompt. Acknowledge it, and you're ready to go.

![WaveMaker 11 beta](/learn/assets/wavemaker-11-beta.png)

## Project Upgrade Flow

The project dashboard displays notes and prompts to indicate that a newer version, WaveMaker 11, is available and will prepare you for the upgrade. Here is an example to help you complete a project update.

:::note
Only the project owners can initiate the upgrade, and the contributors do not have permission to upgrade the project.
:::

- Navigate to the three dots of the project card and click **Upgrade to WM 11.0.1**.

![](/learn/assets/initiate-project-upgrade.png)

## In-studio Help

Immediately, you will see the following contextual help guide that illustrates the upgrade flow and checklist. 

- Use the right arrow to go through the contextual help guide, and be aware of the checklist before going to the next steps. See the image below and follow the orange tag.

### Start Upgrade

![](/learn/assets/help-start-upgrade.png)

## Checks to complete

At each phase, you are instructed to complete the specified actions as a to-do list. As a standard, do the following steps that WaveMaker always suggests (steps 1 and 3). However, there is an important update about Java 11 - needing an extra step to do when building apps outside WaveMaker. 

1. Ensure you push the changes to VCS.
2. Update build infrastructure and deployment setup to support Java 11.
3. Test your project thoroughly. 

:::note
With WaveMaker 11 beta, one of the critical changes is the Java 11 update. It requires you to take action at the build and deployment phase. Here, you must update the build infrastructure and deployment setup to use Java 11.
:::

### Upgrade Deployment Infrastructure

![](/learn/assets/help-upgrade-deployment-infra.png)

### Verify Functionality

![](/learn/assets/help-verify-functionality.png)

### Finish Upgrade

![](/learn/assets/help-finish-upgrade.png)

### Upgrade Complete

![](/learn/assets/help-upgrade-complete.png)

- Acknowledge and click **Proceed**. 

This step initiates upgrading the project to WaveMaker 11, and you will notice two project cards.

## Multi-version Studio

The project card converts into a folder that contains two versions of the same project, including versions 10 and 11.

![](/learn/assets/converts-into-two-project-cards.png)

1. **WaveMaker 11**
2. **WaveMaker 10**

While WaveMaker 11 project is a work in progress. So, while this is in progress, you can continue developing and running your application on WaveMaker 10. Meaning, you can work on both versions simultaneously.

## WaveMaker 11

From this project card, you will access the app in WaveMaker 11 version of the project. To test the app, click **Preview** and verify if the project previews as expected. 

### Testing

In the Preview mode, check for all the following:

1. Preview all the pages.
2. Test typical breakage cases.
3. Using the inspection framework, run checks and make sure there are no console errors.
4. Follow your QA cycle. Deploy the project and let your QA team test the deployed app; run automation test scenarios if any.

If the preview fails, you must check the logs and fix any issues. Contact support if needed.

## WaveMaker 10

From the project card, you will access the app in 10 version. You can continue making critical fixes supporting your already released application version.

### To do

The change you're making in the WM 10 version should be done again on WM 11 manually after you finish upgrading the project.



:::important
We are providing approximately three months time to complete the project update. If your app currently runs on WM 10 or lower versions, you must start updating your project to WaveMaker 11. This also allows you to take complete control of the upgrade process. 

If you do not update your projects within the given three months, the projects automatically upgrade to WM 11.0. Therefore, you could lose the opportunity to manage individual versions of your app with our multi-version control system.
:::

