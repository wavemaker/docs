---
title: "WME Run Patch"
id: ""
sidebar_label: "Run Patch"
---
---

## Running the Patch

- Run the bash script for upgrading to the desired version.

```shell
bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh
```

- Enter config portal admin password to proceed with the process.

[![upgrading-wme](/learn/assets/wme-setup/upgrade-wme-setup/wme-patch-upgrade.jpg)](/learn/assets/wme-setup/upgrade-wme-setup/wme-patch-upgrade.jpg)

- It takes 45-60 mins approximately. Please watch this terminal.
- After completing the patch, go to Launchpad.
- Check all UserWorkspaceInstance/AppDeployment Instances status in Launchpad.
- You can start working on Studio once the Instance status has started.
- If the Instance status UPGRADE_FAILED, then there might be chances of docker version mismatch. You can upgrade docker version using [Manual Docker Upgrade](/learn/on-premise/upgrade/docker-upgrade).
- Please upgrade the Docker version if it is older than 19.03.13 in your UserWorkspaceInstance/AppDeployment Instances.
