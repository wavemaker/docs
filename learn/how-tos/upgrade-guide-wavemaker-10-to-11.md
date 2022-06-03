---
title: "Updating an App from WaveMaker 10 WaveMaker 11"
id: ""
sidebar_label: "Upgrade Guide 11 beta"
---
---

This guide helps you follow step-by-step instructions and prerequisites for upgrading your projects to WaveMaker 11 beta. Follow these steps carefully and ensure you test the project thoroughly to complete the version upgrade. After finishing the upgrade, access all the amazing tools and features of WaveMaker 11 beta. See [WaveMaker 11 Beta Features](/learn/app-development/wavemaker-overview/wavemaker-11-beta) to learn what's new.

When you log in to WaveMaker Studio 11 beta, you can see the following prompt. Acknowledge it, and you're ready to use WaveMaker 11 beta Studio.

![WaveMaker 11 beta](/learn/assets/wavemaker-11-beta.png)

## Project Upgrade Flow

The project dashboard displays several notes and prompts to indicate that a newer version, WaveMaker 11, is available and will prepare you for the upgrade. Here is an example to help you complete a project update.

:::note
Only the project owners can initiate the upgrade, and the contributors do not have permission to upgrade the project.
:::

1. Navigate to the three dots of the project card and click **Upgrade to WM 11.0.1**.

![](/learn/assets/initiate-project-upgrade.png)

Immediately, you will see the following contextual help guide that illustrates the upgrade flow. 

2. Keep clicking the right arrow to go through the contextual help guide, and be aware of the steps involved before going to the next steps. See the image below and follow the orange tag.

![](/learn/assets/help-start-upgrade.png)

At each phase, you are instructed to complete the specified actions as a to-do list. As a standard, do the following steps. However, there is an important update about Java 11 needing action. 

1. Ensure you push the changes to VCS.
2. Update build infrastructure and deployment setup to support Java 11.
3. Test your project thoroughly. 

:::note
With WaveMaker 11 beta, one of the critical changes is the Java 11 update. It requires you to take action at the deployment phase. Here, you must update the build infrastructure and deployment setup to use Java 11, especially when building apps outside WaveMaker.
:::

![](/learn/assets/help-upgrade-deployment-infra.png)

![](/learn/assets/help-verify-functionality.png)

![](/learn/assets/help-finish-upgrade.png)

![](/learn/assets/help-upgrade-complete.png)

3. Acknowledge and click **Proceed**. 

This step initiates upgrading the project to WaveMaker 11, and you will notice two project cards.

1. **WaveMaker 11**
2. **WaveMaker 10**

**WaveMaker 11** project is a work in progress. So, while this is in progress, you can continue developing and running your application on **WaveMaker 10**. 

![](/learn/assets/converts-into-two-project-cards.png)


:::important
We offer approximately three months time period to complete the project update. If your app currently runs on WM 10 or lower versions, you must start updating your project to WaveMaker 11. This also allows you to take complete control of the upgrade process. 

If you do not update your projects within the given three months, the projects automatically upgrade to WM 11.0. Therefore, you could lose the opportunity to manage individual versions of your app with our multi-version control system.
:::