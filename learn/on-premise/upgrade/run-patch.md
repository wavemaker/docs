---
title: "WME Run Patch"
id: ""
sidebar_label: "Run Patch"
---
---

## Running the Patch

- Run the bash script for upgrading to desired version.

```shell
bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh
```

- Enter config portal admin password for proceeding with the process.

[![upgrading-wme](/learn/assets/wme-setup/upgrade-wme-setup/wme-patch-upgrade.jpg)](/learn/assets/wme-setup/upgrade-wme-setup/wme-patch-upgrade.jpg)

- It takes 45-60 mins approximately. Please watch this terminal.
- After it showing Completed, go to Launchpad. 
- Check all UserWorkspaceInstance/AppDeployment Instances Status in Launchpad. 
- You can start working on Studio Once Instance Status came to STARTED. 
- If Instance Status is UPGRADE_FAILED then there might be chances of docker version mismatch.  You can upgrade docker version using [Docker Upgrade Link](/learn/on-premise/upgrade/docker-upgrade). 
- Please upgrade docker version if it is older than 19.03.13 in your UserWorkspaceInstance/AppDeployment Instances.
