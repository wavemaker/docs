---
title: "User Driven Dynamic Roles"
id: ""
---
---



## Introduction
Role Based Access Control(RBAC) is very essential when it comes to restricting specific sources/actions (page/widget/services) to the end user. Using wavemaker it is easy to handle the application roles for small size/single page applications. But if we consider complex applications where we have 100+ permissions it is difficult.

### Key RBAC Challenges

 1. Generally, the roles are managed and assigned during the application design time on WaveMaker

 2. Any new role need to be added the application code needs to be changed and re-deploy

 3. For instance large enterprise applications where multiple app users and roles are to be managed by App Administrators.


  This document helps 

 1. How to handle complex application’s permissions by defining application roles dynamically without any major code changes.

 2. Helps developers design and manage the roles and how to perform role based actions dynamically with related Proof of Concept (PoC) 

Prerequisite
Add any prerequisites if any….
Implementation
To enable this into the WM application, the application needs to add a few tables to the database.

### Add Below tables to DB Schema 

   1. Permissions - To hold the WM defined permissions
   2. Roles - To define the custom roles.
   3. Rolemapping - Association between permissions and Roles.
   4. UserRoleMapping - Association between Users and Roles.

[![pp_run](/learn/assets/dynRoles_1.png)](/learn/assets/dynRoles_1.png)




### Define Wavemaker Security

   1. Go to Security → App Roles. Add the Permissions


[![pp_run](/learn/assets/dynRolesSecurity_1.png)](/learn/assets/dynRolesSecurity_1.png)   

  
   2. Go to Security → Security Providers option → Role Mapping section. Make sure to add the query according to the requirement. 


[![pp_run](/learn/assets/dynRolesSecurity_2.png)](/learn/assets/dynRolesSecurity_2.png)   
   
   3. Assign permissions to pages/services. 


### Sample Use Case

**Problem:** User Roles on wavemaker are tightly coupled with WM studio. If we want to add/remove permissions during run time it is not possible. 

**Proposed Solution**: Consider app roles on wavemaker security as User Permissions(P1,P2..) have an additional layer Roles(Role-A, Role-B..) so that user has one/more roles and each role has one/more permissions. Using this approach Admin can manage role-permission mapping as well as user-role mapping.


[![pp_run](/learn/assets/dynRoles_2.png)](/learn/assets/dynRoles_2.png)   


#### Steps to Follow

1. Design tables as described 
2. Define permissions(P1, P2, P3, etc.. ) in the wavemaker security tab.
3. Have the same permissions in the Permissions table.
4. Page/Service/Widget level security bindings can be done on WM studio with defined permissions. 
5. Create a page User Role Management, which is responsible for creating new roles, role to permission mapping and assigning roles to user
6. Read the user roles & permissions on authentication success and set the permissions to logged in user object. 
7. Admin can change the role-permission mapping from the User Role Management page so permissions can be modified to the respective user. 
8. If application requires new permission, we can define it on wavemaker security tab, insert the same permission on Permissions table and Admin can map the new permission on User Role Management page

### Example

1. Employee Portal is an application having employee CRUD operations with different permissions. 

**Permissions:**

- EMPLOYEE_VIEW
- EMPLOYEE_EDIT
- EMPLOYEE_DELETE
- APP_ADMIN


2. Application Admin can define below roles and assign permissions to the respective roles.

**Roles:**


- Employee
- L1 Manager
- L2 Manager
- Admin


| Role           | Privileges/Permissions |
| :---           |    :----              |  
| Employee       | EMPLOYEE_VIEW          |
| L1 Manager     | EMPLOYEE_VIEW, EMPLOYEE_EDIT,<br>                   | 
| L2 Manager     | EMPLOYEE_VIEW, EMPLOYEE_EDIT,<br> EMPLOYEE_DELETE   | 
| Admin     | EMPLOYEE_VIEW, EMPLOYEE_EDIT,<br> EMPLOYEE_DELETE, APP_ADMIN   | 
