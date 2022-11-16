---
title: Manage Prefabs
id: "manage-prefabs"
---
---

[Prefabs](/learn/app-development/custom-widgets/prefabs-overview) have a workspace to develop and publish for other developers across the enterprise to import and use them.

In this document, learn how to

1. [Publish Prefab to Teams](#publish-prefab-to-teams)
2. [Versioning Prefab](#versioning-prefab)
3. [Prefab Administration](#prefab-administration)
4. [Using Prefab by Team Members](#using-prefab-by-team-members)
5. [Using Version-specific Prefab](#using-version-specific-prefab)

## Publish Prefab to Teams

Publish a Prefab to enable team members to access from within WaveMaker Studio. Follow the steps below to achieve this.

1. [Create a Prefab](/learn/app-development/custom-widgets/creating-prefabs).
2. Once a Prefab is developed and ready to use, commit your changes and push them to VCS.
2. Go to **Publish** and click **To Team**. A dialog opens.

![publish to team](/learn/assets/prefab-publish-to-team.png)

## Versioning Prefab

Set the following properties in the **Publish Prefab to Team** dialog.

![](/learn/assets/publish-to-team-version.png)

**Information**

1. **Category**: Choose from the dropdown, or create a new category.
2. **New Version**: Provide incrementing version number by checking the **Current Version** details. You can include major and minor Prefab version releases.
3. **Change Log**: Add the Prefab changes log details.
4. **Dependant Artifacts**: When you use a Prefab in another Prefab, this property fills automatically.

![](/learn/assets/manage-prefabs-add-tags.png)

**Configuration**

5. **Metadata**: Displays current WaveMaker platform version details.
6. **Tags**: Add tags to enable Prefab search optimization.

**Documentation**

7. **Properties**: [Configure Properties](/learn/app-development/custom-widgets/creating-prefabs#properties) of the Prefab from **Settings** -> **Config Profile**.
8. **Methods**: [Configure Methods](/learn/app-development/custom-widgets/creating-prefabs#methods) of the Prefab from **Settings** -> **Config Profile**.
9. **Events**: [Configure Events](/learn/app-development/custom-widgets/creating-prefabs#events) of the Prefab from **Settings** -> **Config Profile**.

![](/learn/assets/publish-prefab.png)

**Summary**

Verify the details in the configuration summary of the Prefab and click **Publish**. The published Prefab will be queued for [approval by administrator](#prefab-administration). 

## Prefab Administration

Enable Prefab sharing across Team members.

- Log in to the Team Portal as an administrator.

![Prefabs administration](/learn/assets/admin-prefabs.png)

- Go to **Manage Prefabs** and click **Pending Approvals**. A list of Prefabs displays that are ready for review.

### Approve Prefab

- Select the Prefab to evaluate it. You can edit the Category, Tags, and more. 

![approve prefab](/learn/assets/approve-prefab.png)

- Click **Approve**. 

![prefab approved](/learn/assets/prefab-approved.png)

- You can view the approved ones under the **Approved Prefabs** tab.

:::note
When a Prefab is approved, the team members can view approved Prefabs in the **[Team Prefabs](/learn/teams/manage-prefabs#using-prefab-by-team-members)** tab. Team members can start using them.
:::

### Reject Prefab

- When you **Reject**, you can add remarks. 

![reject prefab](/learn/assets/reject-prefab.png)

- You can view the unapproved Prefabs under the **Rejected** tab.

![rejected prefabs](/learn/assets/prefab-rejected.png)

## Using Prefab by Team Members

You can start using approved Prefabs in WaveMaker Studio. However, you must import the approved Prefab from **Team Prefabs** to access it from the left nav section of **Widgets and Prefabs**. 

- Go to **Artifacts** -> **Prefabs** -> **Team Prefabs**.

![locate prefab versions](/learn/assets/artifacts-prefabs.png)

- Select the Prefab and its version and click **Import**.

![import prefab](/learn/assets/import-prefab.png)

- **Project Prefabs** are Prefabs that are used in the project.
- **Team Prefabs** are the team-developed Prefab that only the team members of the authorized group can access and use. 
- **System Prefabs** are the default ones that come with WaveMaker.

## Using Version-specific Prefab

Update a Prefab used in your application to a specific version instead of straight upgrading to the latest one. There are two ways to update versions of a Prefab. 

1. A dialog appears on reload of a page or a project. Choose the **Version** specified in the list and click **Update** and **Continue**. Downgrading the Prefab from the current version is not supported.

![Prefab Verions update 1](/learn/assets/update-prefab-choose-version-on-page-load.png)

2. When an update is available for a Prefab used in your application, go to **Artifacts** and click **Prefabs**.

![locate prefab versions](/learn/assets/artifacts-prefabs.png)

- Go to the **Project Prefabs** tab. 
- Choose the version from the dropdown and click **Update**.

![Prefab Version update 2](/learn/assets/artifact-prefab-choose-version.png)