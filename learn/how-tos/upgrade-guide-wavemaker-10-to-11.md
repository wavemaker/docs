---
title: "Updating an App from WaveMaker 10 WaveMaker 11"
id: "upgrade-guide-wavemaker-10-to-11"
sidebar_label: "Upgrade Guide 11"
---
---

This guide helps you follow step-by-step instructions for upgrading your projects to WaveMaker 11 beta. Follow these steps carefully and ensure you test the project thoroughly to complete the version upgrade. After finishing the upgrade, access all the amazing tools and features of WaveMaker 11 beta. See [WaveMaker 11 Beta Features](/learn/app-development/wavemaker-overview/wavemaker-11-beta) to learn what's new.

When you log in to WaveMaker Studio, you will see the following prompt welcoming you to WaveMaker 11.

![WaveMaker 11 beta](/learn/assets/wavemaker-11-beta.png)

## Project Upgrade Flow

The project dashboard alerts you that a newer version, WaveMaker 11, is available and will prepare you for the upgrade. 

:::note
Only the project owners can initiate the upgrade, and the contributors do not have permission to upgrade the project.
:::

:::important
We are providing approximately three months to complete the project update. If your app currently runs on WaveMaker 10 or lower versions, you must start updating your project to WaveMaker 11. This also allows you to take complete control of the upgrade process. 

If you do not update your projects within the given three months, the projects automatically upgrade to WM 11.0, and the older version projects move to the archived location. Therefore, you could lose the opportunity to manage individual versions of your app with our multi-version studio.
:::

## Initiate Project Upgrade

At each phase, follow the step-by-step instructions described in this guide.

- Go to the project dashboard page.
- Navigate to the three dots of the project card and click **Upgrade to WM 11.0.1**.

![](/learn/assets/initiate-project-upgrade.png)

Immediately, you will see the following [contextual help guide](#in-studio-upgrade-help) that illustrates the upgrade flow and checklist.

## In-studio Upgrade Help

Use the right arrow to go through the illustrative help guide, and keep a note of the checklist before going to the next steps. See the image below and follow the orange tag.

### Start Upgrade

![](/learn/assets/help-start-upgrade.png)

Before you start upgrading the project, ensure you: 

- Test and Preview the app before upgrading to WaveMaker 11.
- Push any uncommitted changes to VCS.

:::note
Testing at this stage helps isolate issues specific to WaveMaker 10 and resolve them before moving on to WaveMaker 11 version. 
:::

- Acknowledge and click **Proceed** at the end. 

This step initiates upgrading the project to WaveMaker 11, and you will notice two project cards.

## Multi-version Studio

The project card converts into a folder that contains two versions of the same project, including versions 10 and 11.

![](/learn/assets/converts-into-two-project-cards.png)

1. **WaveMaker 11**
2. **WaveMaker 10**

While the WaveMaker 11 project is a work in progress, you can continue developing and running your application on WaveMaker 10 simultaneously.

## WaveMaker 11

From this project card, you will access the app in the WaveMaker 11 version of the project. 

![](/learn/assets/project-card-wavemaker-11.png)

### Upgrade Deployment Infrastructure

Follow this checklist to complete the infrastructure upgrade. It applies if you take the source code and deploy it into your own infrastructure.

:::warning
Action required: update infrastructure from Java 8 to Java 11 if you use your own CI-CD pipeline. 
:::

#### Steps

1. Upgrade the build infrastructure to support Java 11 instead of Java 8.
2. Similarly, update deployment setup to use Java 11 and web server supporting Servlet 4.0, such as Tomcat 9. 

![](/learn/assets/help-upgrade-deployment-infra.png)

### Verify Functionality

At this stage, verify the Java 11 upgrade by testing your application thoroughly. 

![](/learn/assets/help-verify-functionality.png)

### Deploy and Test Application

To test the app, go to **Preview** and verify the functionality of features released, and check for all the following:

1. Preview all the pages.
2. Test typical breakage cases.
3. Using the inspection framework, run checks and ensure there are no console errors.
4. Follow your QA cycle. Deploy the project and let your QA team test the deployed app; run automation test scenarios, if any.

If the Preview fails, you must check the logs and fix any issues. Contact support if needed.

### Finish Upgrade

![](/learn/assets/help-finish-upgrade.png)

After testing your application, complete the following checklist. 

- Push all your updates to the VCS, including your team members' changes. 
- Click **Proceed**.

![](/learn/assets/push-to-vcs-upgrade.png)

- Click **Finish Upgrade**.

![](/learn/assets/finish-upgrade-wavemaker-11.png)

## WaveMaker 10

From the project card, you will access the app in WaveMaker 10. You can continue making critical fixes supporting your released application running in WaveMaker 10.

![](/learn/assets/project-card-wavemaker-10.png)

### To do

When working in Multi-version Studio, any changes you're making in the WaveMaker 10 project should be redone on WaveMaker 11 manually after the project upgrade.

## Upgrade Complete

![](/learn/assets/help-upgrade-complete.png)

### Archived Projects

Once you complete the upgrading of the project, WaveMaker 10 project gets archived. If needed, you can access and download the older projects from the **Archived Apps** tab.

![](/learn/assets/upgraded-project-archived.png)