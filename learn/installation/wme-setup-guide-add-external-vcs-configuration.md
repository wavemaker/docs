---
title: "WME Setup Guide – Add external VCS Configuration"
id: ""
sidebar_label: "Add external VCS Configuration"
---
---

## Applicable to WaveMaker Studio alone

When multiple developers are sharing the development base, tracking code changes and synchronizing the changes is of essence. WaveMaker provides Version Control Services for this purpose. By default, WaveMaker Studio comes with a version control system that runs within your VM based on Gitlab. You can choose to add an external repo of your choice.

1. From Launchpad, go to **Code Repository**. You will see the existing internal VCS server referred to as `vcs.wmenterprise.com`. This points to the Gitlab based VCS installed within your WME VM as part of Studio. 

[![](/learn/assets/WME_vcs1.png)](/learn/assets/WME_vcs1.png)

2. If you have an **external repo** which you want to use for version control, you can add a new VCS configuration. Click **Add VCS Config** on the top right corner. Add VCS Configuration window is displayed. 

[![](/learn/assets/WME_vcs2.png)](/learn/assets/WME_vcs2.png)

3. Enter the appropriate **Gitlab Base URL, Username** and **Password** in the respective fields.
4. Check the **Primary** box, if you want the new VCS server to be default. 

:::note
On selecting the Primary checkbox, the new VCS server becomes the default for all the projects that you create subsequently in Studio.
:::

5. Click **Test and Add**. The new VCS server is now configured.

:::note
After you create a new VCS server and make it Primary, if you wish to edit the projects from the old VCS server, when you sync/push the changes they will be made to the old VCS server and not the new VCS server. Since the references of the project are to the old server, there is no relation with the new VCS server.
:::
