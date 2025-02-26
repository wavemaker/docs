---
title: "Core Overview"
id: "core-overview"
sidebar_label: "core overview"
---
---

Core Project can be defined as a base application that contains basic functionalities that can be later used to create child applications on top of the base core application. It is similar to Project shell that is already supported in WaveMaker but offers some extended features like easy upgrade of the core application at any point of the development of the child application and so on.

To understand the differences between Project shell and Core project

|Project Shell|Core Project|
|-----|-----|
| Shell is a normal zip file. | Core is a project source code available as a compressed git bare file saved as an artifact. |
| It is one time creation and any new versions published in the shell cannot be consumed by existing projects created on top of older versions of project shell. | The changes are pushed to the VCS repo and can be imported to be merged in other projects. |

## Why Core project?

- Reduced efforts in creating redundant functionalities for multiple applications.
- Periodic updates in child applications can be achieved easily.
- Provides a platform for customization while creating a child application on top of core project.
- During upgrades the previous version actions are recorded and get auto populated in subsequent updates.
- Core project can be used across multiple teams via the global marketplace.


## Example of Core project

If we have a banking core application that consists of basic functionalities like credit field and debit field details, card details, security system to secure user details and so on that can be used in every banking application, can be published as a core application.

## Creation of  Core project

We create a simple project in WaveMaker studio that is later published as a core application if it comprises the basic and common functions that can be later used as a base application.

1. Create a new project with project shell as the base application.
2. Once the project is ready, publish it as a core application.
3. Go to the Teamportal and view the project in Approval pending section under Core applications.
4. After Admin approves the project to be published as Core, the project gets listed in the studio as core application.

## Accessing Core project

Once created and published, core project can be accessed by all the members of the team. To make it globally accessible, it is required to be published to the marketplace where it can be used by multiple teams.

1. Create a new project with project shell as the base application.
2. Once the project is ready, publish it as a core application.
3. In Teamportal, after the admin approval, the project is ready to be accessed within the team members.
4. If the project is published to Marketplace, it is ready to be accessed across multiple teams.
5. Go to Core Projects in studio, to use the project as base application for other implementation applications through the studio.

## Teamportal Management

1. Create a new project with project shell as the base application.
2. Once the project is ready, publish it as a core application.
3. In Teamportal, go to Approval pending section under Core Applications.
4. After the admin approves the core project, it gets listed in the Approved Application section.
5. Go to Core Projects in Studio to access the core application.

## Core Conflict Management

1. Create a core project and publish the project to be used as base application.
2. Create an implementation project on top of the core project.
3. Update the changes in core application and publish the changes.
4. Once the core is upgraded, implementation project developed on top of it can import the core changes and be upgraded.
5. When upgrading the implementation project, we see a duplicate project created for the implementation project in the same folder as implementation project.
6. The duplicate project contains the changes of the core that need to be merged.
   a. In the duplicate project, we can view the Merge changes window to review and resolve the conflicts.
   b. In Review Merge, we can view the complete list of changes including the conflicts.
   c. In Resolve Conflicts, we can apply any of the following to resolve the conflict.
     1. Apply Core: This directly writes the changes made in Core project onto the implementation project.
     2. Apply Ours: This does not apply the changes made in core.
     3. Merge inner files: This allows user to take the file level decision to apply the core or local changes. This option is applicable only to the folder level changes.
     4. Auto resolve changes: this is applicable in WM files which cannot have user level changes. In this case, this applies the changes made in the implementation project. This is a default  option applicable only for the changes that can be automerged.
     5. Resolve Conflicts: It redirects to the window to view the conflicts and apply the necessary changes i.e. Apply core changes or Apply local/our changes. 
  d. Once the conflicts are resolved, apply the changes and finish the merge.
7. Go to the studio, pull the latest changes pushed into the project from VCS.
8. The implementation project version in upgraded to the latest version based on the core upgrade.