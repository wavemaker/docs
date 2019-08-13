---
title: "WME Setup Guide – Configuration"
id: "wme-setup-guide-configuration"
---

This section walks you through  **WME** You should have completed [](/learn/installation/wme-setup-guide-launch-initialize/#launch-wme), [](/learn/installation/wme-setup-guide-launch-initialize/#initialize-wme) and  [up](/learn/installation/wme-setup-guide-access-setting/#setting-up-wme) of WME. These configurations are available from WaveMaker Launchpad.

## Users

Enterprise supports team collaboration. To this end you can add users to your developer network and they can in turn access WME. The number of users that can be added is limited by the terms in License and the Developer Capacity of WME. See here for [Capacity](/learn/installation/wme-setup-guide-adding-capacity/)

are the steps to add Users to the network by the Admin from **Launchpad**:

1. the left menu, click on **On-boarding** [![](../assets/WME_user1.png)](../assets/WME_user1.png)
2. the User On-boarding page, click **User. ** User window is displayed.
3. the , **Name**, **Name** and in their respective fields. [![](../assets/WME_user2.png)](../assets/WME_user2.png)
4. **User** Your user is now created.

## License

can upload WaveMaker License from **Launchpad**

[![](../assets/WME_license1.png)](../assets/WME_license1.png) It is a two-step process:

1. **Key bunch**: [![](../assets/WME_license1_2.png)](../assets/WME_license1_2.png)
2. **Keys**: [![](../assets/WME_license1_3.png)](../assets/WME_license1_3.png)

The terms of License include:

1. key, its status, and number
2. and expiration dates
3. maximum number of developers that can collaborate on the WME Studio platform
4. maximum number of nodes or apps that can be deployed to the WME Cloud

: To avail the full benefits of the License in terms of Developers and Nodes (Apps), instances need to be added appropriately. See [Capacity](/learn/installation/wme-setup-guide-adding-capacity/) for more details.

## External VCS

###### Applicable to WaveMaker Studio only

the course of app development, tracking code changes and synchronizing the changes, in case of collaborated development, is of the essence. WaveMaker provides Version Control Services for this purpose. By default, WaveMaker Studio comes with a version control system that runs within your VM based on Gitlab. You can choose to add an external repo of your choice.

1. Launchpad, go to **Repository** You will see the existing internal VCS server referred to as This points to the Gitlab based VCS installed within your WME VM as part of Studio. [![](../assets/WME_vcs1.png)](../assets/WME_vcs1.png)
2. you have an **repo** which you want to use for version control, you can add a new VCS configuration. Click **VCS Config** on the top right corner. Add VCS Configuration window is displayed. [![](../assets/WME_vcs2.png)](../assets/WME_vcs2.png)
3. can choose between GitLab or Bitbucket Enterprise version control systems. (Bitbucket option is available on WaveMaker ver 9.0.2 or higher).
4. the appropriate **URL, Username** and in the respective fields.
5. the box, if you want the new VCS server to be the default. : On selecting the Primary checkbox, the new VCS server becomes the default for all the projects that you create subsequently in Studio.
6. **and Add** The new VCS server is now configured.

: After you create a new VCS server and make it Primary if you wish to edit the projects from the old VCS server when you sync/push the changes they will be made to the old VCS server and not the new VCS server. Since the project references are to the old server, there is no relation with the new VCS server.

5: Adding Capacity to WME from Launchpad

- [1\. Getting Started](/learn/installation/wavemaker-enterprise-setup-guide/)
- [2\. Launching Instances](https://www.wavemaker.com/learn/installation/wme-setup-guide-launch-initialize/)
- [3\. Setting Up WME](/learn/installation/wme-setup-guide-access-setting/)
- [4\. Configuring WME](#)
    - [Adding Users](#adding-users)
    - [Uploading License](#uploading-license)
    - [External VCS Configuration](#adding-external-vcs)
- [5\. Adding Capacity](/learn/installation/wme-setup-guide-adding-capacity/)
- [6\. Maintaining WME](/learn/installation/wme-setup-guide-maintenance/)
- [7\. Upgrading WME](/learn/installation/wme-setup-guide-upgrading/)
