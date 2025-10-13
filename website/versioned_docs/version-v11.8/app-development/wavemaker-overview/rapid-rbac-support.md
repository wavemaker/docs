---
title: "Rapid RBAC Support (Enterprise Version)"
id: "rapid-rbac-support"
---

##### Enterprise Version post 10.0 release

When multiple developers across the team are collaborating on large development projects, establishing a clear set of access control policies helps in effectively managing the deliverables. RBAC policies safeguard a specific set of project resources from being modified and from any unwanted/unapproved set of changes creeping into the development project.

**Role-based access control (RBAC)** for Rapid, enables certain roles to access specific features of the product. WaveMaker Platform when setup within an enterprise is managed by 2 different types of roles:

1. **Product Roles**: IT-centric roles managing the setup, infrastructure & integrated services required by the platform;
2. **Project Roles**: Developers & project leaders who are involved in the application development using the platform.

## Product Roles

**Product Roles** are defined by the Product for administration and managing the platform functions within an organization. The following are the specific roles that are provided by default under the “Product Roles” category (these roles cannot be modified):

- _Super Admin_: : This role is the higher-order role in the organization that assumes all the functions that can be performed in the platform after setting up. Has total control over the administration, infrastructure, projects, user and role management.
- _Enterprise Admin_: This role presides over all the administrative functions related to projects, project membership, artefact approval, etc.
- _Studio User_: User is the developer or the project administrator who works on the development projects and has access to Studio for app building. Product User when given access to a created project, or when added to an existing project can play one of the project roles assigned to. Project roles are specific to the app development life-cycle and are managed by the Project Admin.

## Product Role Policies

- Product Roles are pre-defined by the product and cannot be customized.
- Super Admin can create or assign another user to become a Super Admin.
- Super Admin creates or assigns a user to be the Enterprise Admin and IT Admin.
- There can be multiple Enterprise Admins for a given enterprise within the product setup. However, an Enterprise Admin cannot create another Enterprise Admin.
- Enterprise Admin can do the following role assignments:
    - Assign Project Admin to a project,
    - Revoke Admin access to a project for a specific user,
    - Remove membership for a user from a project.
- Only an Enterprise Admin can create a project and assign a Project Admin.
- Studio Users cannot create projects
- Studio Users can become part of the project with the associated Project Roles assigned by the Project Admin.

## Project Roles

There are several roles involved in the app development process, each of these roles are categorized based on the functions they perform in the app development lifecycle. The following roles are provided by default and cannot be customized:

- **Project Admin**: Project Admin is the actual owner of a specific Project and takes responsibility for the entire app development.
- **Default**: This is the default role when a user is assigned to a Project. This includes only view privileges.

Apart from these, roles can be created and defined as per the enterprise needs. These Roles are customizable and custom role definitions can be created with specific permissions by the product roles.

**Permission Types**: There are 3-levels of Permission sets that are provided to manage access control for various roles involved in the development process:

- **Studio permissions**: Studio Permissions are top-level permissions that are not specific to any app or project being developed. These permissions are applicable to the Studio-level actions across all Project types.
- **Project permissions**: Project Permissions are project-level permissions that are not specific to any resource or resource type. These permissions are applicable to actions that are performed in the workspace of an active project. Project Permissions specific to a Project are configured by the Project Owner.
- **Project resource permissions**: Project Resource Permissions are resource-level permissions, that are assigned specifically to a resource such as a Page, Database, Web Service etc. These permissions are applicable to all actions performed on the specific resource. Project Resource Permissions are configured within the project workspace by Project Owner.

[![](/learn/assets/RBAC.png)](/learn/assets/RBAC.png)

## Implementation

As mentioned earlier, default roles are set by the Platform. Of these roles, some can be customized. Here is the list of roles and permissions that are provided: The following roles CANNOT be customized:

| Role | Permissions |
| --- | --- |
| Project Admin | - All Studio Permissions |
| Default | - Pages - Create, Edit, Delete, and View <br/>- Services - View Databases, View Java Services, View REST Services, View SOAP Services, View Websocket Sevices, View API's, <br/>- View Settings, <br/>- View User Management |

## Role Creation and Assignment

Studio Permissions and Project Permissions across all apps in Studio, are configured in the Launchpad, by the product Admin. Since these are not resource-dependent, they are independently configured for roles available.

Project Resource Permissions are project specific and are configured by the Project Admin for the specific project from the User Management Settings menu.

In the following sections, we will discuss both in detail.

### Studio and Project Permissions

**Launchpad** **Role Definitions**: Roles can be created from the Role Definition tab of the User On-boarding section of Launchpad. As mentioned earlier the Product Roles are pre-defined with permissions set and they cannot be modified. [![](/learn/assets/product_roles.png)](/learn/assets/product_roles.png) Project Roles come with a pre-defined roles of Project Admin, Project Developer and Default. [![](/learn/assets/project_roles.png)](/learn/assets/project_roles.png) Custom Project Roles can be created and Permissions allocated to them as per the requirements. [![](/learn/assets/project_roles_custom.png)](/learn/assets/project_roles_custom.png) From the Role Mapping tab users can be assigned to Super Admin, Enterprise Admin and Studio User. [![](/learn/assets/role_mapping.png)](/learn/assets/role_mapping.png) [![](/learn/assets/role_mapping2.png)](/learn/assets/role_mapping2.png)

### Project Resource Permissions

**Project Role Assignment**: Once the Project Roles are defined, they need to be assigned to Studio Users for specific projects. Project Admin will log to Rapid and assign users usin the **Add Member Details** option. [![](/learn/assets/Project-Details.png)](/learn/assets/Project-Details.png) [![](/learn/assets/project_roles_assign.png)](/learn/assets/project_roles_assign.png) Project Roles can be updated from the Project Workspace using the User Management dialog under Settings option. [![](/learn/assets/user_management.png)](/learn/assets/user_management.png) [![](/learn/assets/project_roles_update.png)](/learn/assets/project_roles_update.png)

### Project Admin

By default, only Project Admin can create projects and members added will be assigned the Default role and any other role assigned to them. Project Admin can be changed by EDN Admin from the EDN page.

1. Login to EDN.
2. Select the Project tab.
3. Search and open the Project for which the admin role has to be changed.
4. EDN Admin can - Revoke Admin, Make Admin or delete the user. 

---

## Permissions

As mentioned earlier, two default roles are set by the Platform. You can add roles and assign permissions based upon app requirements. The following is a list of permissions that can be set:

| Category | Permissions |
| --- | --- |
| Pages |Create, Edit, Delete and View |
| Database Services |   Create/Import      , Edit      , Delete    and View  |
| Database - Queries |  Create Queries  , Edit Queries  , Delete Queries adn View Queries  |
| Database - Procedures | <br/>- Create Procedures <br/>- Edit Procedures <br/>- Delete Procedures <br/>- View Procedures|
| Java Service | - Create Java Service <br/>- Edit Java Service <br/>- Delete Java Service <br/>- View Java Service |
| REST Service | - Import REST Service <br/>- Edit REST Service  <br/>- Delete REST Service <br/>- View REST Service|
| SOAP Service | - Import SOAP Service <br/>- Edit SOAP Service <br/>- Delete SOAP Service <br/>- View SOAP Service |
| Web Socket Service | - Import Web Socket Service <br/>- Edit Web Socket Service <br/>- Delete Web Socket Service <br/>- View Web Socket Service |
| API Designer |  - Edit API Designer <br/>- View API Designer |
| Security Service |  - Configure Security Service |

| Category | Permissions |
| --- | --- |
| i18n | - Configure Languages <br/>- Delete Language <br/>- View i18n <br/>- Edit Messages |
| VCS | - Push, Pull, and View Log <br/>- Pull & View Log - Push <br/>- Push to External Repo |
| Prefabs | - Import Prefab <br/>- Delete Prefab |
| Tools | - DB Console <br/>- File Explorer |
| Profiles | - Configure Profiles |
| Artifacts |  - Import Artifacts <br/>- View Artifacts |
| Themes | - Import Themes <br/>- Change Themes <br/>- View Themes |
| Mobile | - Export as Cordova zip <br/>- Send to PhoneGap <br/>- Build for Android |

| Category | Permissions |
| --- | --- |
| Project Actions | - Export Project as Zip <br/>- Export Project as Shell <br/>- Export Project as Prefab <br/>- Export Project as Template Bundle <br/>- Update Sources <br/>- Enable Workspace Sync |
| | - Export Project as WAR <br/>- Deploy Project <br/>- Publish Prefab To EDN <br/>- Publish Prefab to Workspace <br/>- Publish Project Shell To EDN <br/>- Publish Project shell to Workspace |
| | - View Settings <br/>- Configure Settings |
| | - View User Management <br/>- Configures User Permissions |
