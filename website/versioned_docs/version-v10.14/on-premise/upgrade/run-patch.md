---
title: "WME Run Patch"
id: "run-patch"
sidebar_label: "Run Patch"
---
---

## Running the Patch

- When upgrading from 10.x.x to 10.13.x user needs to download the required content for the migration process. **When the user has already upgraded to 10.7.x WME Version, in that case, there is no need to download migration tar**.

- To download migration tar please run the following command.

```bash
    wget https://s3.amazonaws.com/downloads.wavemaker.com/wme/wme.migration/wme_migrations.tar
```

- Extract wme_migrations.tar to /usr/local/content/wme/wme-installer/< version>/resources folder, for extract the content run the following command

```bash
    sudo tar xvf wme_migrations.tar -C /usr/local/content/wme/wme-installer/<version>/resources/
 ```

- Run the bash script for upgrading to the desired version.

```shell
    bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh
```

- To make https work, You need to add SSL certificates to Platform or router/dns level, to add SSL certificates please refer [ssl configuration for platform](/learn/on-premise/configure/config-ssl).
- To redirect HTTP traffics to HTTPS for accessing the platform use enable-ssl option while running installer, to run with enable-ssl option please use the following command.

```bash
    bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh --enable-ssl
```

- Enter config portal admin password to proceed with the process.

[![upgrading-wme](/learn/assets/wme-setup/upgrade-wme-setup/wme-patch-upgrade.jpg)](/learn/assets/wme-setup/upgrade-wme-setup/wme-patch-upgrade.jpg)

- It takes 45-60 mins approximately. Please watch this terminal.
- After completing the patch, go to Launchpad.
- Check all User WorkspaceInstance/AppDeployment Instances status in Launchpad.
- You can start working on Studio once the Instance status has started.
- If the Instance status UPGRADE_FAILED, then there might be chances of docker version mismatch. You can upgrade docker version using [Manual Docker Upgrade](/learn/on-premise/upgrade/docker-upgrade).
- Please upgrade the Docker version if it is older than 20.10.7 in your User WorkspaceInstance/AppDeployment Instances.

## Running the UI Patch

- To run the UI upgrade in the WME setup , please use the below command.

```bash
    bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh --upgrade-studioui
```
