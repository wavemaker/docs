---
title: "Core and Implementation Projects"
id: "core-and-impl-projects"
sidebar_label: "Core and Implementation Projects"
---
---

WaveMaker is here with Core and Implementation (IMPL) projects where,

### Core Project

- Acts as the base with all the common functionalities. This allows multiple teams to work collectively on top of it.

### Implementation Project

- Created as child projects of the Core project to add more features or customizations. Changes made to the Core project can be pulled into the IMPL projects periodically, making reusability seamless and boosting team collaboration.

Core and IMPL projects primarily help in code reusability, maintenance, and steady upgrades.


:::note
[Core](#core-project) and [IMPL](#implementation-project) project creation is applicable for [Teams](/learn/teams/overview/) users only. This is enabled for WaveMaker Online teams only on demand.
:::

## Enabling Core and IMPL Project

[Core](#core-project) and [IMPL](#implementation-project) projects can be created by enabling the App Customization option for each user type in a team. Enabling App Customization is a restricted privilege, done by the [super admin](/learn/on-premise/configure/config-users-auth-providers/#make-user-as-a-super-admin) of the project.

Super admins can enable it in Teams Portal where they can view the Launch Pad option.

1. Go to Teams Portal > **Launch Pad** > Teams section to view the team details like Team Name, Created Date, Last Modified details, and configuration action items.

![Launch Pad](/learn/assets/core-impl-projects/launchpad.png)

2. In the **Teams** section, click the **key** icon under Actions to edit the permissions for team members.

![Action Icon](/learn/assets/core-impl-projects/teams-actions.png)

3. You get directed to **Manage Permissions** where you switch to **Product Role**. User roles and specific permissions are listed here for configuration.

![Product Role](/learn/assets/core-impl-projects/teams-product-role.png)

4. Go to each role, and enable **App Customization** allowing users to create [Core](#core-project) and [IMPL](#implementation-project) projects.

![App Customization](/learn/assets/core-impl-projects/role-app-customization.png)

## Publishing Core Project

You can create a [Core](#core-project) project that would become the foundation for the [IMPL](#implementation-project) projects. A Core project can be used across the teams by publishing it to Marketplace. Once published to Marketplace it will be visible in [ProjectsHub](/learn/blog/2024/03/04/wavemaker-11-6-release#introducing-projectshub) to all the teams in the environment.

1. In [ProjectsHub](/learn/blog/2024/03/04/wavemaker-11-6-release#introducing-projectshub), click **Create App**. 

![Create App](/learn/assets/core-impl-projects/create-app.png)

2. Create Application dialog opens with Web and Mobile as application creation options. Select the type of application and click **Create a blank project**. Click **Continue**.

![Create a blank project](/learn/assets/core-impl-projects/create-blank-project.png)

3. The next screen is Create application details, enter **Application name** and **Repo name**. Click **Continue**.

![Enter App Details](/learn/assets/core-impl-projects/enter-app-details.png)

4. Invite your team members is the next screen, add **Team Member email IDs** and **Assign roles** like Project Admin, and Contributor. Click **Create Application**.

![Team Members Roles](/learn/assets/core-impl-projects/add-team-members.png)

5. You get redirected to WaveMaker studio where you can click the **Publish** icon to publish the project as core.

![Publish as Core](/learn/assets/core-impl-projects/publish-as-core.png)

6. Publish Application To Teams As Core dialog opens. In the Information screen mainly enter the project **Category**, **New Version**, and **Change Log**. Click **Next**.

![Core App Publishing Details](/learn/assets/core-impl-projects/publish-details-core-app.png)

7. In the Configuration screen, add applicable **Tags** and click **Next**.

![Tags](/learn/assets/core-impl-projects/next-tag-publishing-core.png)

8. Verify the project details in the Summary screen and click **Publish**. This publishes the application in the Teams Portal > Core Apps section.

![Publishing App](/learn/assets/core-impl-projects/publish-core-summary.png)


## Creating Implementation Project

[IMPL](#implementation-project) project is created on top of the base [Core](#core-project) project with added features and customizations.

1. In the [ProjectsHub](/learn/blog/2024/03/04/wavemaker-11-6-release#introducing-projectshub), click **Create**.

![Create Application](/learn/assets/core-impl-projects/create-impl-app.png)

2. Create Application dialog opens with Web and Mobile as application creation options. Select the type of application then select **Create from Core**. Click **Continue**.

![Create Application](/learn/assets/core-impl-projects/create-impl-from-core.png)

3. In the next screen, Choose core & version, select a **Core application** on top of which the [IMPL](#implementation-project) project is created.

![Select Core App](/learn/assets/core-impl-projects/select-core-app.png)

4. Create application details is the third screen, enter the **Application Name** and click **Continue**.

![Enter IMPL Application Details](/learn/assets/core-impl-projects/enter-impl-app-details.png)

5. In the final screen, Invite your team members, add **Team Member email IDs** and **Assign roles** like Project Admin, and Contributor. Click **Create Application** to finish IMPL project creation.

![Add IMPL Members](/learn/assets/core-impl-projects/add-impl-members.png)


## Fetching Core upgrades in IMPL Project

The added advantage of using [Core](#core-project) and [IMPL](#implementation-project) projects is, you can always fetch the [Core](#core-project) upgrades in the [IMPL](#implementation-project) project without necessarily creating a new [IMPL](#implementation-project) project on top of the upgraded [Core](#core-project) project. Whenever the [Core](#core-project) is updated, [IMPL](#implementation-project) projects created on top of the specific [Core](#core-project) project get an upgrade icon to fetch the Core changes in [IMPL](#implementation-project) without causing any code breakage.

1. Once an updated [Core](#core-project) version is available, you can view an upgrade icon in the [IMPL](#implementation-project) project. Click the Upgrade icon to start fetching the Core application upgrades in the [IMPL](#implementation-project) application.

![Upgrade Icon IMPL](/learn/assets/core-impl-projects/upgrade-icon-impl.png)

2. The **Upgrade core** dialog opens where you can view the new features added in [Core](#core-project). Click **Upgrade** to create a temporary branch to contain Core upgrades.

![Upgrade Icon IMPL](/learn/assets/core-impl-projects/changes-upgrade-impl.png)

3. Now, go to [ProjectsHub](/learn/blog/2024/03/04/wavemaker-11-6-release#introducing-projectshub) and hover over the IMPL project to view and click the View branch & project details.

![Upgrade Icon IMPL](/learn/assets/core-impl-projects/view-branch-changes.png)

4. The Branch details of the [IMPL](#implementation-project) project pop up automatically where you can click **Open Branch in studio**. This opens the temporary branch containing upgrades fetched from the Core.

![Upgrade Icon IMPL](/learn/assets/core-impl-projects/open-changes-branch.png)

5. You get redirected to the **Merge Changes** screen where you can find [Core](#core-project) upgrade changes in **Review Merge**.

![Upgrade Icon IMPL](/learn/assets/core-impl-projects/merge-changes-screen.png)

6. You can view and resolve conflicts caused due to Core changes in **Resolve Conflicts**.

![Upgrade Icon IMPL](/learn/assets/core-impl-projects/resolve-conflicts-finish-merge.png)

7. Click **Finish Merge** to remove the temporary branch and merge the [Core](#core-project) changes in [IMPL](#implementation-project) project.

![Upgrade Icon IMPL](/learn/assets/core-impl-projects/finish-merge-changes-screen.png)

8. You can now view the **Finish Merge** dialog, and enter commit message for merge.

![Upgrade Icon IMPL](/learn/assets/core-impl-projects/finish-merge-dialog.png)

9. Once your branch is successfully merged, click **Go Back To Projects List**. This redirects you to Projectshub, where you can find the [IMPL](#implementation-project) with [Core](#core-project) upgrades.

![Upgrade Icon IMPL](/learn/assets/core-impl-projects/finish-merge-go-to-projects.png)
