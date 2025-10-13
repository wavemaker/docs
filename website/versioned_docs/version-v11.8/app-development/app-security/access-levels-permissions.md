---
title: "Access Levels & Permissions"
id: "access-levels-permissions"
---
---

Once you have added the roles, you can set up the **permissions**. Permissions is a mix of Authentication and Authorization. The Authentication options are _Everyone_ and _Authenticated_. If the developer chooses “Everyone”, then it's not covered under WaveMaker security. “Authenticated” secures the resource/service.

Permissions can be set to three levels:

### 1. Everyone
Access is granted to all users irrespective of whether they are logged in or not. This setting would be used for an About or Contact Us pages which can be viewed by anyone.
### 2. Authenticated
Access is granted only to users who are logged in, for example, the logout button.
### 3. Authorization 
Once the `resource/service` is authenticated, then you can choose the level of “visibility”, i.e Authorization. You can choose roles which can have exclusive access to this `resource/service`. By default, all `resources/services` are “Authenticated” and are accessible to all once authenticated. 

[![](/learn/assets/sec_perm_web.png)](/learn/assets/sec_perm_web.png)  

## Setting Permissions

Users can set permissions for web resources, services, and Prefabs.

### Web resources
These are pages created in WaveMaker.

### Services
Selecting **Services** option will list all the services used by your application. Services include java services, database, web services created for consumption. Each service exposes various end points for setting permissions. For example, permissions can be set for the Java service and methods; web service end points; database, table or end-points.

### Prefabs 
Permissions can be set for **Prefabs** incorporated within the app. Permissions set to a particular prefab will cascade onto all services invoked inside that Prefab.

:::note
The permission level follows a hierarchical structure. Child level inherits from the parent if no permission is set. 
:::

## Examples
Let us look at how the security permissions work at various levels. 

- Consider in the Sample `hrdb`, each entity is exposed as a controller i.e. it has User, Vacation, Department, Employee controllers. At each table-level there are multiple operations defined. For example, User controller has operations ‘getUser’, ‘deleteUser’, ‘editUser’, and more. Once authentication is enabled at the service level, hrdb is set to be authenticated. If permission is set to the respective controller, then it will be retrieved, else it inherits parent permission of ‘hrdb’. 

- Similarly, for operations, if some permission is set, it will be retrieved, else it inherits from its parent ‘User’, else then from its parent ‘hrdb’ permission will be inherited. 

- Changing permission for the parent will affect only the children which do not have specific permissions set, permissions set to children will be retained."

Let us look at some cases

### Example 1
```
hrdb - ‘Authenticated’
```
**Result**: Every controller and their operations are ‘Authenticated’ inherited from hrdb.

### Example 2
```
hrdb - ‘Authenticated’  
```
```
Changed: User permitted to ‘Admin, User’ and User operation ‘editUser’ permitted to ‘Admin’ 
```
**Result**: Only ‘editUser’ operation in User controller has permission ‘Admin’ and all other operations has permission ‘Admin, User’ inherited from its parent controller ‘User’. Rest of the controllers (Employee, Vacation etc) remain to be ‘Authenticated’ inherited from hrdb.

### Example 3
```
User - ‘Admin, User’; User operation ‘editUser’ -- ‘Admin’ but hrdb permission set to ‘Everyone’ 
```
**Result**: User controller ’editUser’ operation will have ‘Admin’ and rest of their operations has permissions ‘Admin, User’ inheriting from User. Rest of the controllers (Employee, Vacation etc) will have permission ‘Everyone’ inheriting from hrdb.

### Example 4
```
hrdb - ‘Everyone’, User operation ‘editUser’ permitted to ‘Admin’, User permission set to ‘Authenticated’ 
```
**Result**: User controller ’editUser’ operation will have permission to ‘Admin’ and rest of the User operations have permissions ‘Authenticated’ inherited from User. Rest of the controllers (Employee, Vacation etc) will have permission ‘Everyone’ inherited from hrdb.

## Role Based Access to Widgets

Once you create roles in a project, you can enable **role-based access** for a widget.

1. Select the widget in the **Design** mode.
2. Click on the **Security** tab on the **Properties Panel**.
3. You will find that the _Widget Access_ property is set with the User Role Group as _Everyone_ by default.    
You can set the User Role Group as:  
    - **Everyone** - access is granted to all users irrespective of whether they are logged in or not. This setting would be used for an About or Contact Us pages which can be viewed by anyone.
    - **Anonymous** - access is granted only to users who are not logged in. An example would be the login button on the About page
    - **Authenticated** - access is granted only to users who are logged in. For example the logout button.
    - Further authenticated access can be **Role-based** ie for a particular User Role as defined in the App Role section.

4. Select a **User Role** to make the selected widget visible to users with this role.  

[![](/learn/assets/sec_widgets.png)](/learn/assets/sec_widgets.png)
