---
title: "WME Add Users and Authentication Provider"
id: ""
sidebar_label: "Users Onboarding"
---
---

Configure Users and Authentication Providers.

## Add Users from Launchpad

- Add from Users -> Add New User Section.
- Authentication will be taken care by Platform.

## Add Authentication Provider

- Add from User On-boarding -> Add Authorization Provider section.
- Authentication will be dedicated to SSO.
- User will get created by Platform automatically upon first login of any User.

The number of users that can be added is limited by the terms in License and the Developer Capacity of WME.

## Add Users

Following are the steps to add Users to the network by the SuperAdmin from WaveMaker Launchpad:

- Select Users on-boarding section at the left side of Launchpad.
- At users section select Add New User for creating the user.
- Create a user by providing basic details like name ,email and password.
- The User created here will consider as a Studio User who can Access to Studio. All Developers will come under this.


[![user creation](/learn/assets/wme-setup/configuring-wme/user-creation.png)](/learn/assets/wme-setup/configuring-wme/user-creation.png)


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
