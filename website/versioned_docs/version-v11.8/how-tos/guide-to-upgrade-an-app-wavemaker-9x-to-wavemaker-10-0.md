---
title: "Upgrading an App from WaveMaker 9.x to WaveMaker 10.0"
id: "guide-to-upgrade-an-app-wavemaker-9x-to-wavemaker-10-0"
---
---

This guide helps you upgrade your apps from WaveMaker 9 (WM 9.4) to WaveMaker 10 (WM 10.0). It describes the steps you should take to prepare and test your app for a version upgrade. With this upgrade, the WaveMaker app's code will be using the latest version of Angular 7. 

:::important

- WaveMaker 10 is a major release. In this platform version, the generated code moves from AngularJS to Angular 7.  If your application contains custom JavaScript code that depends on the features of AngularJS, you will need to change it to run your application in WaveMaker 10.
- Even after the WaveMaker 10 release, you can continue to develop and run your application on WM 9.4 while the upgrade to WM 10 is in progress.
- Approximately, there is a 6 months time limit to complete the project upgrade. If your app currently runs on WM 9.4 or lower versions, it is important that you start upgrading your project to WM 10.0, and have complete control over the upgrade process. If you do not upgrade your projects within the given 6 months period approx., the projects automatically upgrade to WM 10.0. Therefore, you could lose the opportunity to manage individual versions of your app with our multi-version control system.  
:::

:::note
Only the project owners can initiate the upgrade. The contributors cannot upgrade the project.
:::

## Project Upgrade Flow

With the WaveMaker 10.0 release, you will notice alerts on the project cards prompting you to upgrade your apps. When you begin the project upgrade, the project card converts into a folder. The folder contains all the versions of the app including WM 9.4 and WM 10.0. You can independently work on both versions. In WM 9.4, you can continue to make critical fixes supporting the application that is already released to your customers. At the same time in WM 10.0, you can test and work on the upgrade process. After doing all the necessary tests to verify your application features, you finish the upgrade by selecting the "Finish upgrade" option. Then the WaveMaker 9.4 version archives, and you start using WakeMaker 10.0.

[![](/learn/assets/wm10-upgrade-process.jpg)](/learn/assets/wm10-upgrade-process.jpg)

We recommend you to process the project upgrade as fast as possible not only to experience 3x faster load time but also to reduce repetition of production work after upgrading the app. The changes happening in WM 9.4 version during the upgrade process should be done again on WM 10.0 manually. Therefore, making minimum changes in WM 9.4 and active implementation of project upgrade helps the entire process to be much simpler and smoother.

### Handling custom code

One of the key differences between the WM 9.4 and WM 10.0 is moving from AngularJS to Angular 7. This transit does not necessarily mean rewriting the code all over again. WaveMaker has automated the process for you already. However, the custom code does not automatically upgrade. We have a code analysis and inspection tool that will find and flag unsupported methods in your application's custom code. From this, you can create a list of tasks your team has to handle for the upgrade to WM 10.0. Learn more about the [inspection framework](/learn/app-development/dev-integration/inspection-framework/).

## Getting Started with Upgrading an App

Initiate the project upgrade from the contextual menu placed on the project card.

#### Initiating the project upgrade

All the apps currently using the older platform versions will start displaying a label with an alert message "upgrade to WM 10.0.0" on the project card. Clicking on the upgrade to WM 10.0 will create a copy of your project.

- Select the project. 
- From the contextual menu, click **Upgrade to WM 10.0.0.**

[![](/learn/assets/Start_Upgrading_WM_10_RAD.png)](/learn/assets/Start_Upgrading_WM_10_RAD.png)

- You get a prompt message that an app **Version **is being created, click **Create**.  

[![](/learn/assets/UpgradeProjectPrompt_WM_10.png)](/learn/assets/UpgradeProjectPrompt_WM_10.png)

- In the **Manage Members** window, select _members_, and click **Done**.

The project card converts into a folder which holds two versions of the project including version 9.4 and version 10.0. 

[![](/learn/assets/Two_Versions_created_WM_9_and_WM_10_0.png)](/learn/assets/Two_Versions_created_WM_9_and_WM_10_0.png)

_Two copies of the project will be created - 9.4 branch and 10.0 branch. You can work on both versions simultaneously. _

### 9.4 version

- From the folder, open the app in 9.4 version. Here you can continue making critical fixes supporting your already released application version.

**NOTE:** The change made in the WM 9.4 version should be done again on WM 10.0 manually after the update.

### 10.0 version

- From the folder, open the app in WM 10.0 version.
- When prompted, **Update** action for each service type, and click **Continue**.

[![](/learn/assets/UpdatesAction_before_Accessing_WM_10.png)](/learn/assets/UpdatesAction_before_Accessing_WM_10.png)

- Click **Preview**in the WaveMaker Studio and verify if the project previews as expected.

Check for the custom JavaScript code by using the Inspection framework. You locate it from the more options menu as shown in the image below.

[![](/learn/assets/inspectionframeworklowcode.png)](/learn/assets/inspectionframeworklowcode.png)

In the **Preview **mode**,** check all the following:

1. Preview all the pages.
2. Test typical breakage cases.
3. Using the [inspection framework](/learn/app-development/dev-integration/inspection-framework/), check custom AngularJS code for the following:
    - Services
    - Directives
    - AngularJS provided service injections
4. Make sure that there are no console errors.
5. Follow your QA cycle.

:::note
If the preview fails, you must check the logs and try to fix the issue. If you cannot fix the issue, please contact support.
:::

Deploy the project and let QA team test the deployed app; run automation test scenarios if any.

