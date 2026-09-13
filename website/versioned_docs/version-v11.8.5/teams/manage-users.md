---
title: Manage Users
id: "manage-users"
---
---

The **Manage Users** page lets you view and manage all users in your team. To add a new member to your team, search by email address or add members by entering the email address, whether they have a WaveMaker account or not. Those new to WaveMaker will receive an invite and get automatically added to your Team.

You can access the **Manage Users** page in the administration area by clicking the **Manage Users** entry from the left panel.

![Manage users](/learn/assets/TeamManageUsers.png)

## User Roles

A user's role in your team defines their level of access to your team, its settings, and resources. You can make people **Team Admin**, or **Studio Users** for your team. For security and usability, each feature of the Team is designed to be available to users based on the role assigned to the individual user.


## What user roles are available

* **Team Admin** can access and use all the features and resources of the Team, access **Team Portal**, manage projects, add/remove users, customize settings, change roles of team members etc in the Team. This role is the most powerful in the Team. Teams can have more than one team admin to avoid lapses in ownership.

The **Team Admin** can promote any member of the team to team admin.

* **Studio User** can access platform and collaborate on projects, deployments etc. This is the default role given to user and doesn't have access to Team portal.


From the user list, you can

* Create a user or add an existing user
* View or edit a user’s role  
* Block a user, to prevent users from logging in to your team
* Delete a user  

## Creating Users

As an admin user, you can create new users or add an existing user by clicking the **Add User** button.

![Add users](/learn/assets/TeamAddUserButton.png)

Below are fields required for adding an user in the Team

* **Email**
    
    Email of an user which will be used to login into the WaveMaker Team.

* **First Name**

   First name of an user to be displayed in user profile and used across Team.

* **Last Name**

   Last name of an user to be displayed in user profile and used across Team

* **Preferred Role**

   Defines the role assigned to user in the Team. It defines access to resources and features in the Team. It can be changed later. 

* **Password**

  Password of the new user which will be used to login into the WaveMaker Team. Team Admin have to share **Password** with the user explicitly. 

:::note
**Password** field will only be shown for users who do not have an existing account in WaveMaker.
:::

#### Adding a new user 

* It opens the **Add User to Team** form to enter the new user’s details.
* Provide a password that needs to be shared explicitly with the new user by Team admin.
* Click **Add** to complete the action.

![Add users](/learn/assets/TeamAddUserForm.png)

#### Adding an user who already has an account in WaveMaker 

* It opens the **Add User to Team** form to select the existing user.
* Auto fills the details of existing user
* Click **Add** to complete the action.

![Add users](/learn/assets/TeamAddUserForm2.png)

## Change User's Role

You can change a single user’s role by using the **Change Role** icon located on each row in the table.

![Add users](/learn/assets/TeamUserChangeRole.png)

## Block a User

Block a user account to limit or remove access to the team resources. When you block a user account, the account status moves from **Active** to **Blocked**. The blocked users can no longer have access to the team. When you unblock a previously blocked user account, the user will be able to access the resources which the user earlier had access to. If you're not sure of removing the user from Team and associated resources, you can **block** the user from accessing the account.

:::note
**Blocked** users will not be counted against the subscription.
:::

You can block or unblock a user by using the **Block/Unblock** icon located on each row in the table as shown in the image below.

![Add users](/learn/assets/TeamUserBlock.png)

## Remove or Delete a User

Deleting an account cannot be undone. After deleting an account, the user does not show on the **Users** page and would be removed from the resources which they were associated with. When you again add a previously-deleted user account, you'll need to reassign the resources to the user.

You can delete a user by using the **Delete** icon located on each row in the table.

![Add users](/learn/assets/TeamUserDelete.png)

:::note
If user to be deleted is the only owner in one or more projects, you must transfer ownership of those projects to another person.
:::


