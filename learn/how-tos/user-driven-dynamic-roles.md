---
title: "User-Driven Dynamic Roles"
id: ""
---
---

Role-based Access Control (RBAC) is essential to restrict end-users from accessing specific sources and actions, including Pages, Widgets, and Services. It is easy to manage application roles for small and single-page applications. However, complex applications can have over a hundred permissions, which is not quite simple. 

## Key RBAC Challenges

1. Generally, the roles are managed and assigned during the application design time on WaveMaker.
2. To add a new role to the application, the code needs to be ch  anged and re-deploy.
3. For instance, when working with large Enterprise applications, app administrators typically have to manage multiple app users and roles.

### How this document helps 

1. Handling complex application permissions by defining application roles dynamically without many code changes.
2. Helps developers design and manage the roles and allow role-based actions dynamically with a Proof of Concept (PoC).

## Implementation

To enable this approach in a WaveMaker application, add the following tables to the database.

### Add Tables to the DB Schema 

 1. Permissions - To hold the WaveMaker defined permissions
 2. Roles - To define the custom roles
 3. Rolemapping - Association between permissions and roles
 4. UserRoleMapping - Association between users and roles

[![pp_run](/learn/assets/dynamic-roles-1.png)](/learn/assets/dynamic-roles-1.png)

### Define WaveMaker Security

1. Go to Security → App Roles. Add the Permissions

[![pp_run](/learn/assets/dynamic-roles-security-1.png)](/learn/assets/dynamic-roles-security-1.png) 

2. Go to Security → Security Providers → Role Mapping section. Make sure to add the query according to the requirement. 

[![pp_run](/learn/assets/dynamic-roles-security-2.png)](/learn/assets/dynamic-roles-security-2.png) 
 
3. Assign permissions to Pages and Services. 


## Use Case

### Indentifying Problem

User roles on WaveMaker are tightly coupled with the Studio. It is not possible to add or remove permissions during runtime.

### Proposed Solution

Consider app roles on WaveMaker security as User Permissions (P1, P2) have an additional layer of roles (Role-A, Role-B). 

Using the following approach admin can manage role-permission mapping and user-role mapping.

1. The user can have one or more roles. 
2. Each role can have one or more permissions. 

[![pp_run](/learn/assets/dynamic-roles-2.png)](/learn/assets/dynamic-roles-2.png) 

### Steps to Follow

1. Design tables as described above.
2. Define permissions (P1, P2, P3, etc..) from the WaveMaker Security tab.
3. Assign the same permissions in the Permissions table.
4. Page/Service/Widget level security bindings can be done on WaveMaker Studio with defined permissions. 
5. Create a Page for User Role Management responsible for creating new roles. 
6. Enable role to permission mapping and assigning roles to the user.
7. Read the user roles and permissions on authentication success.
8. Set the permissions to the logged-in user object. 
9. Admin can change the role-permission mapping from the User Role Management page, which allows you to modify permissions to the respective user. 
10. If the application requires new permission, you can define it on the WaveMaker security tab. 
11. Insert the same permission on the Permissions table, and the admin can map the new permission on the User Role Management page.

### Example

1. Employee Portal is an application containing employee CRUD operations with different permissions. 

**Permissions:**

- EMPLOYEE_VIEW
- EMPLOYEE_EDIT
- EMPLOYEE_DELETE
- APP_ADMIN

2. Application admin can define the roles below and assign permissions to the respective roles.

**Roles:**

- Employee
- L1 Manager
- L2 Manager
- Admin


| Role | Privileges or Permissions |
| --- | ---- | 
| Employee | EMPLOYEE_VIEW |
| L1 Manager | EMPLOYEE_VIEW, EMPLOYEE_EDIT,<br> | 
| L2 Manager | EMPLOYEE_VIEW, EMPLOYEE_EDIT,<br> EMPLOYEE_DELETE | 
| Admin | EMPLOYEE_VIEW, EMPLOYEE_EDIT,<br> EMPLOYEE_DELETE, APP_ADMIN | 