---
title: Manage Prefabs
id: ""
---
---

[Prefabs](/learn/app-development/custom-widgets/prefabs-overview) have a workspace to develop and publish for other developers across the enterprise to import and use them.

In this document, learn how to

1. [Publish Prefab to Teams and Versioning](#publish-prefab-to-teams)
2. [Enable Prefab sharing across Team members](#prefab-administration)
3. [Import Prefab from WaveMaker Studio](#consuming-prefab-by-team-members)

## Publish Prefab to Teams

Publish a Prefab to enable team members to access from within WaveMaker Studio. Follow the steps below to achieve this.

1. [Create a Prefab](/learn/app-development/custom-widgets/creating-prefabs).
2. Once a Prefab is developed and ready to use, commit your changes and push them to VCS.
2. Go to **Publish** and click **To Team**. A dialog opens.

![publish to team](/learn/assets/prefab-publish-to-team.png)

### Versioning Prefab

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
6. **Tags**: Add tags to search Prefabs easily.

**Documentation**

7. **Properties**: It describes when you configure Config Profile Prefab properties.
8. **Methods**: 
9. **Events**: 

![](/learn/assets/publish-prefab.png)

**Summary**

Verify the details in the configuration summary of the Prefab and click **Publish**. The published Prefab will be queued for [approval by administrator](#prefab-administration). 

### Choose Version-specific Prefab

Update a Prefab used in your application to a specific version instead of straight upgrading to the latest one. There are two ways to update versions of a Prefab. 

1. A dialog appears on reload of a page or a project. Choose the **Version** specified in the list and click **Update** and **Continue**. Downgrading the Prefab from the current version is not supported.

![Prefab Verions update 1](/learn/assets/update-prefab-choose-version-on-page-load.png)

2. When an update is available for a Prefab used in your application, go to **Artifacts** and click **Prefabs**.

![locate prefab versions](/learn/assets/artifacts-prefabs.png)

- Go to the **Project Prefabs** tab. 
- Choose the version from the dropdown and click **Update**.

![Prefab Version update 2](/learn/assets/artifact-prefab-choose-version.png)

## Prefab Administration

1. Log in to the team portal as an administrator. 

![Prefabs administration](/learn/assets/admin-prefabs.png)

2. Go to **Manage Prefabs** and click **Pending Approvals**. A list of Prefabs displays that are ready for review.

![approve or reject](/learn/assets/approve-or-reject-prefab.png)

3. Select the Prefab to evaluate it. You can edit the Category, Tags, and more. 
4. Choose **Approve or Reject** the Prefab. 
4. When you reject, you can add remarks. 

:::note
When an Artifact is approved, all team members can view approved Artifacts in the approval tab of Team Prefabs. 
:::

## Consuming Prefab by Team Members

You can start using the Prefab in WaveMaker Studio once the admin approves the Prefab. However, you must import the approved Prefab from **Team Prefabs** to access it from the left nav Prefab section. 

- Go to **Artifacts** -> **Prefabs** -> **Team Prefabs**.

![locate prefab versions](/learn/assets/artifacts-prefabs.png)

- Select the Prefab and its version and click **Import**.

![import prefab](/learn/assets/import-prefab.png)

- **Project Prefabs** are Prefabs that are used in the project.
- **Team Prefabs** are the team-developed Prefab that only the team members of the authorized group can access and use. 
- **System Prefabs** are the default ones that come with WaveMaker.