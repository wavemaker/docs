---
title: "Project User Management"
date: "2018-11-08"
---

Collaboration is allowed for WaveMaker project development. The owner of a project can add new members  (already registered with WaveMaker) to the project and assign roles to them. This document walks through the various roles and permissions allowed for the members of a project.

NOTE: Enterprise version handles RBAC support differently,  [here](/learn/app-development/wavemaker-overview/rapid-rbac-support/) for more details.

## Roles

The following roles are provided by default and cannot be customized:

- **Admin**: Project Admin is the actual owner of a specific Project and takes responsibility for the entire app development.
- **Default**: This is the default role when a user is assigned to a Project. This includes only view privileges.
- **:** Contributor is the co-developer of the specified Project. They have full access to app development functionality, with the following exceptions:
    - deploy the project,
    - delete the project,
    -  add members to the project,
    - remove existing users, and
    - push the project to an external Repo.

## Members

As the creator of a project, you are assigned the role of a Project Admin. You can assign users to the project using the **Member Details** option from the Project Listing. [![](../assets/Project-Details.png)](../assets/Project-Details.png)

[![](../assets/user_management_add.png)](../assets/user_management_add.png)

Project Roles can also be assigned or updated from the Project Workspace using the User Management dialog under Settings option. [![](../assets/user_management.png)](../assets/user_management.png) [![](../assets/user_management_assign.png)](../assets/user_management_assign.png)

Here is the list of roles and permissions that are provided:

Admin

- \- Create, Edit, Delete, and View
- Services - Import, Edit, Delete, and View
- Services - Import, Edit, Delete, and View
- Services - Import, Edit, Delete, and View
- Services - Import, Edit, Delete, and View
- Services - Create or Import, Edit, Delete, and View; Queries - Create, Edit, Delete, and View; Procedures - Create, Edit, Delete, and View.
- \- View, Import, and Change
- \- Import, and Delete
- \- View, and Import

- \- View, and Configure
- Designer - View, and Edit API's
- \- Pull & View Log, Push to VCS, Push to External Repository, and Sync Workspace
- \- Configure Profiles
- 18n - Configure Languages and Edit messages
- \- DB Console, and File Explorer
- Management - Release Management
- Actions - Export Project as Zip, Export Project as Shell, Export Project as Prefab, Export Project as Template Bundle, Update Sources, Enable Workspace Sync, Export Project as WAR, Deploy Project, Publish Prefab To EDN, Publish Prefab to Workspace, Publish Project Shell To EDN, Publish Project shell to Workspace, Publish Template Bundle To EDN, Publish Template Bundle To Workspace, View Settings, Configure Settings, View User Management, Configures User Permissions, Delete Project, and Publish Theme To EDN

- \- View
- \- View Databases, View Java Services, View REST Services, View SOAP Services, View Websocket Sevices, View API's

- Actions - View Settings, View User Management
- \- Pull & View Logs

- \- Create, Edit, Delete, and View
- Services - Import, Edit, Delete, and View
- Services - Import, Edit, Delete, and View
- Services - Import, Edit, Delete, and View
- Services - Import, Edit, Delete, and View
- Services - Create or Import, Edit, Delete, and View; Queries - Create, Edit, Delete, and View; Procedures - Create, Edit, Delete, and View.
- \- View, Import, and Change
- \- Import, and Delete
- \- View

- \- View, and Configure
- Designer - View, and Edit API's
- \- Pull & View Log, Push to VCS, and Sync Workspace
- \- Configure Profiles
- 18n - Configure Languages and Edit messages
- \- DB Console, and File Explorer
- Actions - View Settings, View User Management, Export Project as Zip, Export Project as Shell, Export Project as Prefab, Export Project as Template Bundle, Update Sources, Enable Workspace Sync, Export Project as WAR, Publish Prefab to Workspace, Publish Project shell to Workspace, Publish Template Bundle To Workspace

< WaveMaker Localization

1\. WaveMaker Overview

- 1.1 Platform Overview
    - [Modern Web Apps](/learn/app-development/wavemaker-overview/platform-overview/#modern-web-apps)
    - [App Architecture](/learn/app-development/wavemaker-overview/platform-overview/#app-architecture)
    - [App Building Process](/learn/app-development/wavemaker-overview/platform-overview/#app-building-process)
    - [Technology Stack](/learn/app-development/wavemaker-overview/platform-overview/#technology-stack)
    - [Material Design](/learn/app-development/wavemaker-overview/platform-overview/#material-design)
    - [Hybrid Mobile Apps](/learn/app-development/wavemaker-overview/platform-overview/#mobile-apps)
- 1.2 Product walk-through
    - [Getting Started](/learn/app-development/wavemaker-overview/product-walkthrough/#getting-started)
    - [Project Dashboard ](/learn/app-development/wavemaker-overview/product-walkthrough/#project-dashboard)
    - [ Project Workspace](/learn/app-development/wavemaker-overview/product-walkthrough/#workspace)
    - [Canvas](/learn/app-development/wavemaker-overview/product-walkthrough/#canvas)
    - [Project Settings](/learn/app-development/wavemaker-overview/product-walkthrough/#settings)
    - [Configuration Profiles](/learn/app-development/wavemaker-overview/product-walkthrough/#profiles)
- [1.3 Supported Technologies](/learn/app-development/wavemaker-overview/supported-technologies/)
- [1.4  Pre-requisites](/learn/app-development/wavemaker-overview/pre-requisites/)
- 1.5 Artifacts Repository
    - [Overview](/learn/app-development/wavemaker-overview/artifacts-repository/#)
    - [Publishing Mechanism](/learn/app-development/wavemaker-overview/artifacts-repository/#publishing)
    - [Flow (Enterpise version)](/learn/app-development/wavemaker-overview/artifacts-repository/#enterprise)
- 1.6 WaveMaker Localization
    - [Platform Localization](/learn/app-development/wavemaker-overview/localization/#platform_locale)
    - [Setting Language Preference](/learn/app-development/wavemaker-overview/localization/#setting)
    - [Adding Language Bundles](/learn/app-development/wavemaker-overview/localization/#adding)
    - [Build Platform](/learn/app-development/wavemaker-overview/localization/#build)
- [1.7 User Management](#)
    - [Member Roles](#roles)
    - [Add Members](#add)
    - [Permissions](#permissions)
