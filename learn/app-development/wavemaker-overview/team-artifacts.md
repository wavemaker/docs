---
title: Team Artifacts
id: ""
---
---

Artifact Repository is a collection of artifacts or resources used across the application development lifecycle in WaveMaker. Quickly discover and explore artifacts available in the developer network. These artifacts include:

- **Prefabs**
- **Project Shell**
- **Template Bundles**
- **Themes**

Artifacts have a workspace to develop and publish for other developers across the enterprise to import and use them.

In this document, learn how to

1. [Publish Artifacts to Teams and Versioning](#publish-artifacts-to-teams)
2. [Enable Artifact sharing across Team members](#artifact-administration)
3. [Import Artifact from WaveMaker Studio](#consuming-artifact-by-team-members)

## Publish Artifacts to Teams

You can publish Artifacts to Teams, including Prefabs, Themes, Template Bundles, and Project Shells.

:::note
This document uses a Prefab to show how you can publish a Prefab to Teams. 
:::

Publish an Artifact, i.e., Prefab, to enable team members to access from within WaveMaker Studio. Once a Prefab is developed and ready to use, follow the steps below:

### Versioning Prefab

1. Commit your changes and push them to VCS.
2. In the dialog, set the properties version name.
3. Click **Publish to Teams**.
4. The published Artifact will be queued for approval.

## Artifact Administration

1. Log in to the team portal as an administrator. 
2. Go to **Manage Prefabs** -> **Pending approvals** -> **Approve or Reject**. 
3. To reject, you can add remarks. 

:::note
When an Artifact is approved, all team members can view approved Artifacts in the approval tab of Team Prefabs. 
:::

## Consuming Artifact by Team Members

You can start using the Prefab in WaveMaker Studio once the admin approves the Artifact (Prefab). However, you must import the approved Prefab from **Team Prefabs** to access from the Widgets/Prefab section.  

1. Go to **Artifacts** -> **Project Prefabs** -> **Team prefabs**.

:::note 
- **Project Prefabs** are Prefabs that are used in the project.
- **Team Prefabs** are the team-developed Prefab that only the team members of the authorized group can access and use. 
- **System prefabs** are the default ones that come with WaveMaker.
:::

### Choose Version-specific Prefab

Update a Prefab in your application to a specific version instead of upgrading to the latest one. There are two ways to update versions of a Prefab. 

1. A new dialog appears on reload of a project. You can select the Update Version to any specified versions in the list except lowering versions.
2. When an update is available for a Prefab used in your application, go to **Artifacts dialog** -> **Project Prefabs** and update to the available version from the dropdown. 