---
title: "WME Add Users and Authentication Provider"
id: "config-users-auth-providers"
sidebar_label: "Users Onboarding"
---
---

Configure Users and Authentication Providers.

## Add User from the Launchpad

- Add from User -> Add New User Section.
- Add User to Specific Team from Launchpad Teams section
- Authentication will be taken care by Platform.

## Add Authentication Provider

- Add from User On-boarding -> Add Authorization Provider section.
- Authentication will be dedicated to SSO.
- User will be part of Default/First Team automatically.
- You can Add/Remove from the Teams as needed.
- User will get created by Platform automatically upon first login of any User.

The number of users that can be added is limited by the terms in License and the Developer Capacity of WME.

## Add Users

Following are the steps to add Users to the network by the SuperAdmin from WaveMaker Launchpad:

- Select Users on-boarding section at the left side of Launchpad.
- At users section select Add New User for creating the user.
- Create a user by providing basic details like name ,email and password.
- The User created here will consider as a Studio User who can Access to Studio. All Developers will come under this.


[![user creation](/learn/assets/wme-setup/configuring-wme/user-creation.png)](/learn/assets/wme-setup/configuring-wme/user-creation.png)


## Map the User to the Teams

The User should be mapped with a respective team to access the studio. Following are the steps to Map user to the teams from the WaveMaker Launchpad:

- Navigate to the Teams section and Select the required team that user need to be added.
- Select the **Add Member** and give their Email id which provided while adding the user from the  Users section.

 [![teams](/learn/assets/wme-setup/configuring-wme/teams.png)](/learn/assets/wme-setup/configuring-wme/user-creation.png)

- Select the Role and proceed with Adding.

 [![add member](/learn/assets/wme-setup/configuring-wme/add-team-member.png)](/learn/assets/wme-setup/configuring-wme/add-team-member.png)

 The user can now able to access the studio after being mapped in the teams.

## Make User as a Super Admin

- A Super Admin is a User who can Access the Launchpad and Studio.
- You can only Create a Super Admin from the existing Users.
- To Make an User as a Super Admin, select Add Super Admin from the users on-boarding section.
- Make the user as a Super Admin here by Selecting them and by Selecting on Map Users to Role.


[![Super Admin creation](/learn/assets/wme-setup/configuring-wme/super-admin.png)](/learn/assets/wme-setup/configuring-wme/super-admin.png)


## Configure Authentication Providers

- Supported Protocols
  - OpenIdConnect
  - CAS
  - LDAP
- Select the Add Configuration option at user Identity Providers section.
- Select type of provider and Provide name and fill the required fields respect to that provider.
- Make Default after adding it.

[![authentication provider](/learn/assets/wme-setup/configuring-wme/adding-authorization-provider.png)](/learn/assets/wme-setup/configuring-wme/adding-authorization-provider.png)

### Restricting Login for all users

For WaveMaker enterprise customers that are performing platform maintenance this option can be used to restrict access to WaveMaker until the maintenance has finished successfully. Once enabled, all active users get logged out of the platform within three minutes except the current admin.  

[![Login restriction](/learn/assets/wme-setup/configuring-wme/RestrictingLoginAllUsers.png)](/learn/assets/wme-setup/configuring-wme/RestrictingLoginAllUsers.png)

### Steps to Restrict Users

1. Go to **Launchpad**.
2. Go to **Identity Providers**.
3. Enable **Restrict Login for all users** option and click on **Confirm**.

