---
title: "Artifacts Repository"
id: "artifacts-repository"
---
---

**Artifact Repository** is a collection of artifacts or resources used across application development lifecycle in WaveMaker platform. It allows for easy exploration and discovery of Artifacts available to the developer network. These artifacts include:

- **Prefabs**: Prefabs are a collection of one or more widgets that are bound to APIs or services.
- **Project Shell**: Project Shell is an app with functionality that is common to multiple apps across the enterprise. This can be used as a starting point in app development.
- **Template Bundles**: A template bundle is a collection of templates - a re-usable arrangement of one or more widgets in the page content that together capture the purpose of the page.
- **Themes**: Themes are style elements which work at the widget or UI component level. Themes help provide a consistent look and feel to your application.

Each of the above artifacts has a workspace to develop the artifact and then publish it for other developers across the enterprise to import/use them.

## Artifact Publishing Mechanism

There are three ways in which an Artifact can be published:

1. **Publish to Project**: This will allow the artifact developer to send it to a specific project for testing purposes.
2. **Publish to EDN** (only for enterprise version): To make the artifact available for the entire enterprise for all applications to use, it needs to be published to EDN. After publishing, EDN Admin or Product Owner approves the artifact for use within the enterprise.
3. **Publish to Workspace** (only for non-enterprise version): Once tested and verified, it can be used for any project under development. This is done by publishing the artifact to artifact developer's workspace and made available for any project he/she is currently working on.

Each of the Artifact has a slightly different publishing flow as described in the sections for [Prefab](#prefab-publishing), [Project Shell](#project-shell-publishing), [Template Bundle](#template-bundle-publishing) and [Themes](#theme-publishing).

In the enterprise version of WaveMaker Publishing mechanism helps collaboration among enterprise users.  Find more from here.

Once published the artifacts can be viewed from the Artifacts dialog.

[![](/learn/assets/artifactAccess.png)](/learn/assets/artifactAccess.png)

[![](/learn/assets/Artifacts_list_ws.png)](/learn/assets/Artifacts_list_ws.png)

## Prefab Publishing

Prefab is developed from the Project Workspace, similar to any other app development, and then made available to other developers. [![](/learn/assets/prefab_publish-1.png)](/learn/assets/prefab_publish-1.png) Publishing states for a Prefab include:

- **Publish to EDN** (only for enterprise version) – Approval by EDN Admin. Once approved, Prefab has to be explicitly be imported for use within an application.
- **Publish to Workspace** (only for non-enterprise version) - Once published to workspace the Prefab will implicitly be available for use across all projects within the developer's workspace.
- **Publish to Project** (both enterprise and non-enterprise versions)– This will result in the Prefab appearing in the specified project with a MOD  tag. This can be used for testing purposes before publishing the Prefab.

For more information, see [Creating and Publishing Prefabs](/learn/app-development/custom-widgets/creating-prefabs/).

## Project Shell Publishing

Project shell is created by the App Owner from the Studio workspace, by exporting the project being developed as a shell.

[![](/learn/assets/Publish_shell.png)](/learn/assets/Publish_shell.png)

### Export Project As Shell

Export Project As Shell behaves differently for the enterprise and non-enterprise versions:

- **Enterprise version**: Once the developer exports a project as Shell to EDN, they will be prompted to enter the publishing information, see [artifact features](#artifact-features) for more information. The EDN Admin has to [approve or reject](#artifact-states) the Shell as with any other Artifact. Once approved, developers can select the Shell when creating new projects.

- **Non-enterprise version**: Export Project as Shell to Workspace will allow the developer to select the Shell when creating new projects within their workspace.

For more information, see [Creating and Publishing Project Shell](/learn/app-development/ui-design/project-shells/).

## Template Bundle Publishing

Template Bundle can be created from the Project Workspace using from the Template Bundles tab. Publishing Template Bundles process is different for the enterprise and non-enterprise versions:

- **Enterprise version**: Once developed Template Bundles can be Published to EDN. 

[![](/learn/assets/Publish_template.png)](/learn/assets/Publish_template.png) 

The developer will be prompted to enter the publishing information, , see [artifact features](#artifact-features) for more information. The EDN Admin has to [approve or reject](#artifact-states) the Shell as with any other Artifact. Once approved, the Template Bundle will appear in the Page Creation dialog for selection by the developers.
- **Non-enterprise version**: The developer needs to Export the Template Bundle as ZIP and then IMPORT it to any app within their Dashboard. 

[![](/learn/assets/Publish_template_WS.png)](/learn/assets/Publish_template_WS.png)

To know more about creating and publishing Template Bundles, [click here](/learn/app-development/ui-design/page-concepts/page-templates/)

## Theme Publishing

Themes can be built by setting up WaveMaker Theme Repository and using Grunt commands.

- **Enterprise Version**: Themes can be published using the Export -> Theme to EDN option: 

[![](/learn/assets/Theme_publish.png)](/learn/assets/Theme_publish.png)

- **Non-enterprise Version**: There is no Theme publish option for non-enterprise version, the theme zip file generated needs to be imported from the Themes dialog.

To know more about creating and publishing Themes, [click here](/learn/app-development/ui-design/themes/)

# Artifact flow in Enterprise version

> (ONLY for Enterprise version)

The following sections are for Enterprise version of WaveMaker.

---

## Artifact States

When publishing to EDN Artifact goes through several stages: 

[![](/learn/assets/artifactPublishing.png)](/learn/assets/artifactPublishing.png)

- **In Development**: Developer is working on it. No one else has access. Could be a new artifact or a new version of the existing artifact.
- **UnPublished**: Developer applied for approval and it is awaiting action from EDN admin.
- **Rejected**: Rejected by the EDN Admin, the developer can rectify/modify the artifact and re-publish it.
- **Approved**: Once approved by the EDN Admin, the artifact is available in the artifact repository.

[![](/learn/assets/Artifacts_pending.png)](/learn/assets/Artifacts_pending.png)

## Artifact Features

Each artifact needs the following information for proper tracking and identification from within the repository: 

[![](/learn/assets/artifactRepository.png)](/learn/assets/artifactRepository.png)

- **Tag**: this will be useful for searching. Each artifact can have multiple tags.
- **Category**: this will be used for grouping purpose. Categories are typically defined by EDN Admin and developers associate the artifact with a given category at the time of publishing. The category can be selected from the available list or a new category can be entered. New category needs to be approved by the EDN admin.
- **Version Number**: Each artifact is associated with a version (automatic versioning) at the time of the publishing process.
- **Change Log**: These include the comments that the developer needs to add before publishing the artifact.

## Artifact Publish Process

Artifact Publishing involves the following steps:

1. **Publish Info**: This requires the Developer to enter the Category, Version, and Change Log. In case this Artifact uses or has a dependency on other Artifacts (for example, Project Shell using a Prefab), the dependencies are listed here. 

[![](/learn/assets/prefab_publish1.png)](/learn/assets/prefab_publish1.png)

2. **Config**: Here the developer can add Tags to aid in the discovery process of the Artifact. It also lists the Metadata like the Platform version it was developed on etc., this information is generated by the platform by default. 

[![](/learn/assets/prefab_publish2.png)](/learn/assets/prefab_publish2.png)

3. **Documentation** (only for Prefabs): This is populated automatically by the platform, from the Configuration Settings entered at the time of the Prefab development. Any changes to this need to be done at the Prefab development time. 

[![](/learn/assets/prefab_publish3.png)](/learn/assets/prefab_publish3.png)

4. **Summary**: Verify the details before proceeding with publishing. 

[![](/learn/assets/prefab_publish4.png)](/learn/assets/prefab_publish4.png)

## Published Artifacts and Updates

Once published the artifacts can be viewed from the Artifacts dialog.

[![](/learn/assets/artifactAccess.png)](/learn/assets/artifactAccess.png)

### Artifacts Dialog

Artifacts dialog will list all the Artifacts available with details like

- **Basic** with the category, publisher, changelog, tags, dependency information and metadata information
- **Version History**, and
- **Documentation.**

Prefabs can be imported from this dialog. Other Artifacts are available for use as soon as EDN Admin approves the Artifact.

### Artifact Updates

Every time there is a change or modification in an Artifact, it needs to be Published again with a changed Version number. When a developer opens a project using that updated Artifact, Artifact updates are prompted. The developer can choose to update, revert (in case artifact is being downgraded) or ignore. Alternatively, notifications will be pushed for the developer within Studio to take an action on artifact upgrades.

[![](/learn/assets/Artifacts_list.png)](/learn/assets/Artifacts_list.png)

## Artifact Management

Artifact Management involves two aspects:

- **Pre-development**: this involves defining the Categories, Custom Metadata and Import of Artifacts. These activities are accessed from Launchpad by Super Admin.
- **Post-development**: this involves reviewing, approving/rejecting and export of Artifacts. These activities are accessed from EDN by Enterprise Admin.

**Launchpad** allows a super admin with the following functionality and permissions.

### Import Artifact

Artifacts imported here will be available enterprise-wide. 

[![](/learn/assets/Artifacts_import.png)](/learn/assets/Artifacts_import.png)

### Custom Metadata

This information is used to identify Artifacts based upon say the platform version and so on. Define the Key-value pairs and add. All Artifacts developed will get this data attached. 

[![](/learn/assets/Artifacts_metadata.png)](/learn/assets/Artifacts_metadata.png)

### Categories

These are used by the Artifact developer to aid in grouping the Artifacts. 

[![](/learn/assets/Artifacts_categories.png)](/learn/assets/Artifacts_categories.png)



**EDN** allows management of Artifacts by the Enterprise Admin. The Artifacts can be filtered by:

- **Publisher** - There are two ways an Artifact is created:
    - The default Artifacts as provided by the **System**, or
    - Artifacts created and published by **Users**
- **Types** - As mentioned earlier the different Artifact types include: Project Shell, Prefab, Template Bundle or Themes
- **Categories** - As defined by the publisher at the time of developing and/or publishing the Artifacts.

[![](/learn/assets/Artifacts_dashboard.png)](/learn/assets/Artifacts_dashboard.png) 

### Export Artifact

1. Artifacts can be selected for **Export**.
2. You can set the Filter criterion and only the Artifacts meeting the filter requirements will be selected for Export.
3. You will be prompted for a Package name, a default package name will be generated.
4. The selected Artifacts will be bundled into a zip file with the given package name.

[![](/learn/assets/Artifacts_export.png)](/learn/assets/Artifacts_export.png)

### Approval Queue

This will list all the Artifacts Pending Approvals and Rejected. 

[![](/learn/assets/Artifacts_pending.png)](/learn/assets/Artifacts_pending.png) 

Artifacts Pending Approval can be selected, reviewed, and approved or rejected. For both Approve and Reject, the reason can be entered under Remarks. This will be appended to the Version History and in case of rejection, the developer can act upon it accordingly. 

[![](/learn/assets/Artifacts_action.png)](/learn/assets/Artifacts_action.png)

