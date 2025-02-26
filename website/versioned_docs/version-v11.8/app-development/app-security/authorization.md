---
title: "Authorization"
id: "authorization"
---
---

**Authorization** is a process through which the access to various aspects of the app such as services, widgets, and functionality is restricted to the specified app roles.

Enabling authentication in an application makes all pages (except Common, Login) and services to be authenticated. Common and Login pages have permission set as ‘Everyone’ and this cannot be changed. For the other pages and services, WaveMaker allows you to control the application behavior based on the user's role. It is a three-step process of:

1. _defining the roles_,
2. _assigning these roles to users_ and then
3. _setting the access levels_ to various pages, services and widgets of the app.

## User Onboarding

In order to use Role-based Access Control, you must have configured Security Providers and Roles. The configuration for user details should be set.

[![](/learn/assets/sec_user_db.png)](/learn/assets/sec_user_db.png)

_Role Configuration_ can be Basic or Custom. In the case of **Basic**, a HQL query will be built by default in read-only mode. In case of **Custom**, you can change the query to suit the app needs. 

:::note
Here we are talking about the database-based role configuration. For other role providers like LDAP, AD etc., refer to the corresponding section in [Authentication document](/learn/app-development/app-security/authentication/).
:::

- In the case of **Basic Role Configuration**, set the _Role Column_ to the field within the user table where role information is stored. 

:::note
In case the role column is in a related table, use Custom query. 
:::

[![](/learn/assets/sec_user_db_role1.png)](/learn/assets/sec_user_db_role1.png)

- In the case of **Custom Role Configuration**, Query Type can be set to HQL or SQL. By default, HQL is selected and a default query is generated, which can be modified. 

:::note
The username and role can reside in separate tables and you can write a query to retrieve the information. **The parameter to the query LOGGED_IN_USERNAME needs to be retained as it is, WaveMaker stores the username details in this variable**. 
:::

[![](/learn/assets/sec_user_db_role2.png)](/learn/assets/sec_user_db_role2.png)

- As an example, if you select Database as Security Provider; sample hrdb as the Database; User as the Entity; Username, Userid and Password as themselves, then the sample query would be provided along with a text box to enter a sample value for username and test the query. 

[![](/learn/assets/sec_user_db_role3.png)](/learn/assets/sec_user_db_role3.png)

## App Roles

You need to add the roles that you want to use in your application as per the roles in the above-mentioned Security Providers and Roles in the **App Roles** tab. There are two App Roles - _admin_ and _user_ offered for all providers. They are for authorization and provided out of the box. Users can add/remove to suit their needs. Using the arrow keys, you can set the **role precedence** for multiple roles within an application. This is particularly useful when a single user has multiple roles with different overlapping functionality. For example, Manager has two roles – admin and user. And for admin the landing page is set as EmployeeDashboard, while user has the landing page as EmployeeProfile. Based on the role precedence the corresponding landing page takes priority, i.e., when Manager logs in, if admin role has higher precedence then EmployeeDashboard page is displayed, if user role has higher precedence then EmployeeProfile page is displayed.

[![](/learn/assets/sec_roles.png)](/learn/assets/sec_roles.png)

