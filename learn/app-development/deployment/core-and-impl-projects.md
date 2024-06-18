---
title: "Core and Implementation Projects"
id: "core-and-impl-projects"
sidebar_label: "Core and Implementation Projects"
---
---

WaveMaker is here with CORE and Implementation (IMPL) projects, where a CORE project acts as the base with all the common functionalities. This allows multiple teams to work collectively on top of it. 

IMPL projects are the ones created as child projects of the CORE project to add more features or customizations. Changes made to the CORE project can be pulled into the IMPL projects periodically, making reusability seamless and boosting team collaboration.


:::note
Core and IMPL project creation is applicable for Teams users only. This is enabled for WMO teams only on demand.
:::

## Enabling Core and IMPL Project

Enabling Core and IMPL project creation is a restricted privilege, done by the super admin of the project.

1. Go to **Launch Pad** > Teams section.

![Launch Pad](/learn/assets/core-impl-projects/launchpad.png)

2. In the **Teams** section, click the action icon to edit the permissions for team members.

![Action Icon](/learn/assets/core-impl-projects/teams-actions.png)

1. Switch to **Product Role** where each user role is listed.

![Product Role](/learn/assets/core-impl-projects/teams-product-role.png)

4. Go to each role, and enable **App Customization**.

![App Customization](/learn/assets/core-impl-projects/role-app-customization.png)

## Publishing CORE Project

You can create a CORE project that would become the foundation for the implementation projects. A Core project can be used across the teams by publishing it to Marketplace. Once published to Marketplace it will be visible in projectshub to all the teams in the environment.

1. In ProjectsHub, click **Create App**.

![Create App](/learn/assets/core-impl-projects/create-app.png)

2. Select the type of application then click **Create a blank project**. Click **Continue**.

![Create a blank project](/learn/assets/core-impl-projects/create-blank-project.png)

3. Enter **Application name** and **Repo name**. Click **Continue**.

![Enter App Details](/learn/assets/core-impl-projects/enter-app-details.png)

4. Add **Team Member email IDs** and **Assign roles** like Project Admin, and Contributor. Click **Create Application**.

![Team Members Roles](/learn/assets/core-impl-projects/add-team-members.png)

5. You get redirected to WaveMaker studio where you can click the **Publish** icon to publish the project as core.

![Publish as Core](/learn/assets/core-impl-projects/publish-as-core.png)

6. Mainly enter the project **Category**, **New Version**, and **Change Log**. Click **Next**.

![Core App Publishing Details](/learn/assets/core-impl-projects/publish-details-core-app.png)

7. Add applicable **Tags** and click **Next**.

![Tags](/learn/assets/core-impl-projects/next-tag-publishing-core.png)

8. Verify the project details and click **Publish**.

![Publishing App](/learn/assets/core-impl-projects/publish-core-summary.png)


## Creating Implementation Project

The IMPL project is created on top of the base CORE project with added features and customizations.

1. In the ProjectsHub, click **Create**.

![Create Application](/learn/assets/core-impl-projects/create-impl-app.png)

2. Select **Create from Core** and click **Continue**.

![Create Application](/learn/assets/core-impl-projects/create-impl-from-core.png)

3. Select a **Core application** on top of which the IMPL project is created.

![Select Core App](/learn/assets/core-impl-projects/select-core-app.png)

4. Enter the **Application Name** and click **Continue**.

![Enter IMPL Application Details](/learn/assets/core-impl-projects/enter-impl-app-details.png)

5. Add **Team Member email IDs** and **Assign roles** like Project Admin, and Contributor. Click **Create Application** to finish IMPL project creation.

![Add IMPL Members](/learn/assets/core-impl-projects/add-impl-members.png)


## Fetching CORE upgrades in IMPL Project

The added advantage of using CORE and IMPL projects is, that you can always fetch the CORE upgrades in the IMPL project without necessarily creating the IMPL project from scratch on top of the upgraded CORE project.

1. Once an updated CORE version is available, you can click on the upgrade icon in the IMPL project.
2. Choose the upgraded version and proceed. A temporary branch is created and can be found in **View brand and project details**.
3. You will be directed to a Merge Conflicts page where you can validate the changes and resolve conflicts.
4. Click on Finish Upgrade to remove the temporary branch and push the changes to the main branch. 