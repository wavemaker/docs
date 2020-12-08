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
- After completion of patch if docker version is older than 19.03.13 in UserWorkspaceInstance/AppDeployment Instance, then upgade the docker from [Docker Upgrade](/learn/on-premise/upgrade/docker-upgrade).
- Execute the Following command for upgrade the Studio Workspace/AppDeploy Instances.

```bash
    bash wme-installer.sh --upgrade-instances
```

- After it showing Completed, go to launchpad.
