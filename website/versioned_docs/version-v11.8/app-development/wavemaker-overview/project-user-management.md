---
title: "Project User Management"
id: "project-user-management"
---
---

Collaboration is allowed for WaveMaker project development. The owner of a project can add new members  (already registered with WaveMaker) to the project and assign roles to them. This document walks through the various roles and permissions allowed for the members of a project.

:::note
Enterprise version handles RBAC support differently. For more information, see [Rapid RBAC Support for Enterprise Version](/learn/app-development/wavemaker-overview/rapid-rbac-support/). 
:::

## Member Roles

The following roles are provided by default and cannot be customized:

- **Project Admin**: Project Admin is the actual owner of a specific Project and takes responsibility for the entire app development.
- **Default**: This is the default role when a user is assigned to a Project. This includes only view privileges.
- **Contributor:** Contributor is the co-developer of the specified Project. They have full access to app development functionality, with the following exceptions:
    - cannot deploy the project,
    - cannot delete the project,
    - cannot add members to the project,
    - cannot remove existing users, and
    - cannot push the project to an external Repo.

## Add Members

- As the creator of a project, you are assigned the role of a Project Admin. You can assign users to the project using the **Add Member Details** option from the Project Listing. 

[![](/learn/assets/Project-Details.png)](/learn/assets/Project-Details.png)

[![](/learn/assets/user_management_add.png)](/learn/assets/user_management_add.png)

- Project Roles can also be assigned or updated from the Project Workspace using the User Management dialog under Settings option. 

[![](/learn/assets/user_management.png)](/learn/assets/user_management.png)

[![](/learn/assets/user_management_assign.png)](/learn/assets/user_management_assign.png)

## Permissions

The list of roles and permissions are provided for project admin, default and contributors.  

### Project Admin

|Type | Permissions |
| --- | --- | 
|Pages |Create, Edit, Delete, and View |
|REST Services | Import, Edit, Delete, and View |
|SOAP Services | Import, Edit, Delete, and View |
|Websocket Services | Import, Edit, Delete, and View|
| Java Services | Import, Edit, Delete, and View |
| Database Services | Create or Import, Edit, Delete, and View;   Queries - Create, Edit, Delete, and View;   Procedures - Create, Edit, Delete, and View. |
| Themes | View, Import, and Change |
| Prefabs | Import, and Delete |
| Artifacts | View, and Import |
| Security | View, and Configure |
| API Designer | View, and Edit API's |
| VCS | Pull & View Log, Push to VCS, Push to External Repository, and Sync Workspace |
| Profiles | Configure Profiles |
| i18n | Configure Languages and Edit messages |
| Tools | DB Console, and File Explorer |
| Project Management | Release Management |
| Project Actions | Export Project as Zip, Export Project as Shell, Export Project as Prefab, Export Project as Template Bundle, Update Sources, Enable Workspace Sync, Export Project as WAR, Deploy Project, Publish Prefab To EDN, Publish Prefab to Workspace, Publish Project Shell To EDN, Publish Project shell to Workspace, Publish Template Bundle To EDN, Publish Template Bundle To Workspace, View Settings, Configure Settings, View User Management, Configures User Permissions, Delete Project, and Publish Theme To EDN|


### Default 

|Type | Permissions |
| --- | --- | 
| Pages | View |
| Services | View Databases, View Java Services, View REST Services, View SOAP Services, View Websocket Sevices, View API's | 
| Project Actions | View Settings, View User Management|
| VCS | Pull & View Logs|

### Contributor 

|Type | Permissions |
| --- | --- | 
| Pages | Create, Edit, Delete, and View |
| REST Services | Import, Edit, Delete, and View |
| SOAP Services | Import, Edit, Delete, and View |
| Websocket Services | Import, Edit, Delete, and View |
| Java Services | Import, Edit, Delete, and View |
| Database Services | Create or Import, Edit, Delete, and View;   Queries - Create, Edit, Delete, and View;  Procedures - Create, Edit, Delete, and View.|
| Themes | View, Import, and Change |
| Prefabs | Import, and Delete |
| Artifacts | View | 
| Security | View, and Configure |
| API Designer | View, and Edit API's |
| VCS | Pull & View Log, Push to VCS, and Sync Workspace |
| Profiles | Configure Profiles |
| i18n | Configure Languages and Edit messages |
| Tools | DB Console, and File Explorer |
| Project Actions | View Settings, View User Management, Export Project as Zip, Export Project as Shell, Export Project as Prefab, Export Project as Template Bundle, Update Sources, Enable Workspace Sync, Export Project as WAR, Publish Prefab to Workspace, Publish Project shell to Workspace, Publish Template Bundle To Workspace |

