---
title: "Core and Implementation Projects"
id: "core-and-implementation-projects"
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
[Core](#core-project) and [IMPL](#implementation-project) project creation is applicable for [Teams](/learn/teams/overview/) users only. This is enabled for WaveMaker Online (WMO) teams only on demand.
:::

## Example

To understand working of [Core](#core-project) and [IMPL](#implementation-project), you can refer to the example where the core application is designed to start with onboarding a user and creating an account. Later credit and debit transactions through physical or virtual cards are enabled to make any purchase.

![Core Application Flow](/learn/assets/core-impl-projects/core-app-example.png)

After publishing Core application, you can proceed with IMPL creation on top of the Core application and modify the flow so that purchases use a beneficiary account for credit and debit transactions instead of physical or virtual cards.

![IMPL Application Flow](/learn/assets/core-impl-projects/impl-app-example.png)

## Enabling Core and IMPL Project

[Core](#core-project) and [IMPL](#implementation-project) projects can be created by enabling the App Customization option for each user type in a team. Enabling App Customization is a restricted privilege, done by the [super admin](/learn/on-premise/configure/config-users-auth-providers/#make-user-as-a-super-admin) of the project.

Super admins can enable it in Team Portal where they can view the Launch Pad option.

1. Go to Team Portal > **Launch Pad** > Teams section to view the team details like Team Name, Created Date, Last Modified details, and configuration action items.
2. In the **Teams** section, click the **key** icon under Actions to edit the permissions for team members.
3. You get directed to **Manage Permissions** where you switch to **Product Role**. User roles and specific permissions are listed here for configuration. Click **Edit**.
4. Go to each role, and enable **App Customization** allowing users to create [Core](#core-project) and [IMPL](#implementation-project) projects. Click **Save**.


<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/cZGMPNxPBHpH7theP4MUQK" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>


## Publishing Core Project

You can create a [Core](#core-project) project that would become the foundation for the [IMPL](#implementation-project) projects. It includes three major steps to get started with using Core Application.

- [Creating Core Project](#creating-core-project)
- [Publishing Core Project](#publishing-core-project-to-teams-portal)
- [Approving Core Application](#approving-core-application)

A Core project can be used across the teams by publishing it to Marketplace. Once published to Marketplace it will be visible in [ProjectsHub](/learn/blog/2024/03/04/wavemaker-11-6-release#introducing-projectshub) to all the teams in the environment.

### Creating Core Project

You can create a blank project with fundamental functionalities to become the base for the [IMPL](#implementation-project) projects.

1. In [ProjectsHub](/learn/blog/2024/03/04/wavemaker-11-6-release#introducing-projectshub), click **Create App**. 
2. Create Application dialog opens with Web and Mobile as application creation options. Select the type of application and click **Create a blank project**. Click **Continue**.
3. The next screen is Create application details, enter **Application name** and **Repo name**. Click **Continue**.
4. Invite your team members is the next screen, add **Team Member email IDs** and **Assign roles** like Project Admin, and Contributor. Click **Create Application**.

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/qhHNiVTfdocbg6q8Kvpp2P"   frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

### Publishing Core Project to Team Portal

Once created, the project is published as [Core](#core-project) for the team members to access the application.

1. You get redirected to WaveMaker studio where you can click the **Publish** icon to publish the project as core.
2. Publish Application To Teams As Core dialog opens. In the Information screen mainly enter the project **Category**, **New Version**, and **Change Log**. Click **Next**.
3. In the Configuration screen, add applicable **Tags** and click **Next**.
4. Verify the project details in the Summary screen and click **Publish**. This publishes the application in the Team Portal.

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/oiE4gVf12URpJZUXQeMJou" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

### Approving Core Application

The projects can only be published as [Core](#core-project) after approval. Once approved, the [Core](#core-project) project can be viewed and accessed by team members.

1.  Go to Team Portal > Core Apps, verify the provided information, and click **Approve**.
2. You get redirected to the **Approve core application** dialog where you add the Remarks and click **Confirm**. You can go to ProjectsHub to find the published Core application.

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/v7D6QffZiHVVJiTcPXGnQf" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

## Creating Implementation Project

[IMPL](#implementation-project) project is created on top of the base [Core](#core-project) project with added features and customizations.

1. In the [ProjectsHub](/learn/blog/2024/03/04/wavemaker-11-6-release#introducing-projectshub), click **Create**.
2. Create Application dialog opens with Web and Mobile as application creation options. Select the type of application then select **Create from Core**. Click **Continue**.
3. In the next screen, Choose core & version, select a **Core application** on top of which the [IMPL](#implementation-project) project is created.
4. Create application details is the third screen, enter the **Application Name** and click **Continue**.
5. In the final screen, Invite your team members, add **Team Member email IDs** and **Assign roles** like Project Admin, and Contributor. Click **Create Application** to finish IMPL project creation.

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/8k3NEKSEU3sNSDWWzp2ebR" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

## Linking Existing IMPL Project to Core

You can now link the previously created project, referred to as the IMPL project, to any base project, referred to as the Core project. You can analyze the existing project and link it to the suitable Core project.

:::note

Applicable for the Teams users who already use this flow outside WaveMaker Studio. Super admin is required to enable **Link To Core** permission for the team members in Launch Pad.

:::

1. Go to [ProjectsHub](/learn/blog/2024/03/04/wavemaker-11-6-release#introducing-projectshub) and hover over the existing project that can be considered as IMPL.
2. Click **View branch & project details** to open App overview.
3. Go to the Menu icon and click **Link_to_core App** to view the list of Core applications.
4. You land on the **Link project to core** dialog. Select suitable Core application and version details. Click Save to assign Core Application to the IMPL application.

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/8SbofTp2ZjpwZZwn45ZACZ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>


## Fetching Core Upgrades in IMPL Project

The added advantage of using [Core](#core-project) and [IMPL](#implementation-project) projects is, you can always fetch the [Core](#core-project) upgrades in the [IMPL](#implementation-project) project without necessarily creating a new [IMPL](#implementation-project) project with the upgraded [Core](#core-project) project. Whenever the [Core](#core-project) is updated, [IMPL](#implementation-project) projects created on top of the specific [Core](#core-project) project get an upgrade icon to fetch the Core changes in [IMPL](#implementation-project) without causing any code breakage.

You can implement this using two steps
- [Creating branch with changes](#creating-branch-with-changes)
- [Merging upgrade changes](#merging-upgrade-changes)

### Creating Branch with Changes

While fetching the Core changes to IMPL, a temporary branch gets created to contain all the upgrade changes. 

1. Once an updated [Core](#core-project) version is available, you can view an upgrade icon in the [IMPL](#implementation-project) project. Click the Upgrade icon to start fetching the Core application upgrades in the [IMPL](#implementation-project) application.
2. The **Upgrade core** dialog opens where you can view the new features added in [Core](#core-project). Click **Upgrade** to create a temporary branch to contain Core upgrades.
3. Now, go to [ProjectsHub](/learn/blog/2024/03/04/wavemaker-11-6-release#introducing-projectshub) and hover over the IMPL project to view and click the **View branch & project details**.
4. The Branch details of the [IMPL](#implementation-project) project pop up automatically where you can click **Open Branch in studio**. This opens the temporary branch containing upgrades fetched from the Core.

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/tR8TZpe3TuFh8BbXksh8zk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

### Merging Upgrade Changes

After the temporary branch creation, the upgraded changes are reviewed and the conflicts are resolved. 

1. You get redirected to the **Merge Changes** screen where you can find [Core](#core-project) upgrade changes in **Review Merge**.
2. You can view and resolve conflicts caused due to Core changes in **Resolve Conflicts**.
3. Click **Finish Merge** to remove the temporary branch and merge the [Core](#core-project) changes in [IMPL](#implementation-project) project.
4. You can now view the **Finish Merge** dialog, and enter commit message for merge.
5. Once your branch is successfully merged, click **Go Back To Projects List**. This redirects you to Projectshub, where you can find the [IMPL](#implementation-project) with [Core](#core-project) upgrades.

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/ifoHi4hWZUyKqu68X7c8Uo"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

## Publishing Core Prefab Project

Prefab can also be published as a Core Prefab project with base properties. This allows the creation of Implementation (IMPL) Prefab with required customization on top of Core Prefab project. To make the Prefab a Core Project that can be accessed by every team member, you need to

- [Publishing Prefab to Team](#publishing-prefab-to-team)
- [Approving Prefab as Core](#approving-prefab-as-core)

:::note

Users can publish a Prefab as Core along with the Prefab artifact during the approval process. There is no separate option available to publish from the Prefab Project.

:::

### Publishing Prefab to Team

It is necessary to publish the Prefab as a Core Project for you to use it as a foundation for IMPL Prefab projects.

1. Go to Prefabs and click **Open in Studio**. This opens the Prefab project in studio.
2. Click the **Publish** icon and select **To Team** to publish the Prefab project to a specific team.
3. Publish Prefab To Team dialog opens. In the Information screen mainly enter the Prefab **Category**, **New Version**, and **Change Log**. Click **Next**.
4. In the Configuration screen, add applicable **Tags** and click **Next**.
5. Verify the project details in the Summary screen and click **Publish**. This publishes the Prefab to the Team Portal.

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/ngJxr1TTeBhTj8XZRX3kqq"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

### Approving Prefab as Core

You can view a **Prefab as Core** toggle that publishes the Prefab Core Project and Prefab artifact. You can next approve the publication and make it accessible for team members to create IMPL Prefab project on top of it. 


:::note
Upon disabling the **Prefab as Core** toggle, you approve publishing the Prefab artifact that does not support the creation of IMPL Prefabs on top of the Prefab artifact. To know more on how to publish Prefab as an artifact, see [Publish Prefab to Team](/learn/app-development/custom-widgets/creating-prefabs/#publish-prefab-to-team).
:::

1. Go to Team Portal > Prefab Artifacts to view the list of Prefabs to be approved for publication.
2. Select the Prefab that redirects you to **testPrefabCore** dialog.
3. Enable **Prefab as Core** toggle to publish the Prefab Core Project.
4. Verify the provided information, and click **Approve**.
5. You get redirected to the **Approve Prefab** dialog where you add the Remarks and click **Confirm**. You can go to ProjectsHub > Prefabs section to find the published Core Prefab Project.

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/sKpgTKyRUehY25xtoCk2pH"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

## Creating Implementation Prefab Project

Similar to IMPL application, you can create IMPL Prefab project. This would include additional customizations on top of the existing Core Prefab project.

1. In the [ProjectsHub](/learn/blog/2024/03/04/wavemaker-11-6-release#introducing-projectshub), go to Prefabs and click **Create**.
2. Create Application dialog opens with Web and Mobile as application creation options. Select the type of application then select **Create from Core**. Click **Continue**.
3. In the next screen, Choose core & version, select a **Core application** on top of which the [IMPL](#implementation-project) project is created.
4. Create application details is the third screen, enter the **Application Name** and click **Continue**.
5. In the final screen, Invite your team members, add **Team Member email IDs** and **Assign roles** like Project Admin, and Contributor. Click **Create Application** to finish IMPL project creation.

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/scBQDWpWUq8G9ry9JnuovF"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

:::note
Fetching Core Prefab project upgrades in the IMPL Prefab project involves the same steps as [fetching Core application upgrades in the IMPL application](#fetching-core-upgrades-in-impl-project).
:::