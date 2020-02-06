---
title: "WME Setup Guide – Add external VCS Configuration"
id: ""
sidebar_label: "Add external VCS Configuration"
---
---

When multiple developers are sharing the development base, tracking code changes and synchronizing the changes is of essence. WaveMaker provides Version Control Services for this purpose. By default, WaveMaker Studio comes with a version control system that runs within your VM based on Gitlab. You can choose to add an external repo of your choice.

1. From Launchpad, go to **Code Repository**. It displays the list of configured VCS servers. 

2. If you have an **external repo** which you want to use for version control, you can add a new VCS repository. You can choose from the VCS Providers, including **GitLab, Bitbucket** and **GitHub**. 
3. Click **Add VCS Repository** as shown in the screenshot below. 

[![](/learn/assets/WME_vcs1.png)](/learn/assets/WME_vcs1.png)

   - When you click **Add VCS Repository**, the following dialog opens.


[![](/learn/assets/WME_vcs_gitlab.png)](/learn/assets/WME_vcs_gitlab.png)
 
[![](/learn/assets/WME_vcs_bitbucket.png)](/learn/assets/WME_vcs_gitlab.png)
 
4. Select any VCS provider and enter the appropriate details, including **Base URL, Username** and **Password/Access token** in the respective fields.

:::note
Online and Enterprise accounts are supported for GitHub provider, whereas for GitLab and Bitbucket, only Enterprise accounts are supported. 
:::

[![](/learn/assets/WME_vcs_github1.png)](/learn/assets/WME_vcs_github1.png)
  
5. Click **Add**. The new VCS server gets configured.

:::note 
On selecting **Make Default**, the new VCS server becomes the default provider for all the projects you create subsequently in Studio. As shown in the screen below. 
:::

[![](/learn/assets/WME_vcs_make_default.png)](/learn/assets/WME_vcs_make_default.png)

:::note 
After you create a new VCS server and make it Default, if you wish to edit the projects from the old VCS server, when you sync/push the changes they will be made to the old VCS server and not to the new VCS server. Since the references of the project are to the old server, there is no relation with the new VCS server.
:::
