---
title: "WME Add Users and Authentication Provider"
id: "config-users-auth-providers"
sidebar_label: "Users Onboarding"
---
---

Configure Users and Authentication Providers. There are two ways to onboard users.

## Add Users from Launchpad

- Add from User On-boarding -> Create User Section.
- Authentication will be taken care by Platform.

## Add Authentication Provider

- Add from User On-boarding -> Add Authorization Provider section.
- Authentication will be dedicated to SSO.
- User will get created by Platform automatically upon first login of any User.

The number of users that can be added is limited by the terms in License and the Developer Capacity of WME.

## Add Users

Following are the steps to add Users to the network by the SuperAdmin from WaveMaker Launchpad:

- Select User on-boarding section at the left side of Launchpad.
- At users section select Create User for creating the user.
- Create a user by providing basic details like name ,email and password and select the prefer role for a user.
- Roles
- Super Admin - Access to Launchpad, Enterprise Network, Studio.
- Enterprise Admin - Access to Enterprise Network and Studio.
- Studio User - Access to Studio. All Developers will come under this.

[![user creation](/learn/assets/wme-setup/configuring-wme/user-creation.png)](/learn/assets/wme-setup/configuring-wme/user-creation.png)

## Configure Authentication Providers

- Supported Protocols
- LDAP
- CAS
- OpenIdConnect
- Select the Add Authorization Provider option at user on-boarding section.
- Provide name and select type of provider and fill the required fields respect to that provider.
- Make Default after adding it.

[![authentication provider](/learn/assets/wme-setup/configuring-wme/adding-authorization-provider.png)](/learn/assets/wme-setup/configuring-wme/adding-authorization-provider.png)
