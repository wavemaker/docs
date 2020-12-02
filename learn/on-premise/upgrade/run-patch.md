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
- After completion of patch if docker has a old version please update the docker from [prerequisites](/learn/on-premise/aws/install-prerequisites).
- Execute the Following command for upgrade the Studio Workspace/AppDeploy Instances

```bash
    bash wme-installer.sh --upgrade-instances
```

- After it showing Completed, go to launchpad.
