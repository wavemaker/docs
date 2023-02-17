---
title: "WME Run Patch"
id: "run-patch"
sidebar_label: "Run Patch"
---
---

## Running the Patch

- When upgrading from 10.7.x to 11.x.x user needs to download the required content for the migration process. **When the user has already upgraded to 11.x.x WME Version, in that case, there is no need to download migration tar**.

- To download migration tar which will be shared by the WaveMaker team, please run the following command.

```bash
    wget <WME-Migration-Link>
```

- Extract wme_migrations to /usr/local/content/wme/wme-installer/< version>/resources folder, for extract the content run the following command

```bash
    sudo tar xvf wme_migrations.tar -C /usr/local/content/wme/wme-installer/<version>/resources/
 ```

- Run the bash script for upgrading to the desired version.
```shell
    bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh
```

- To make https work, You need to add SSL certificates to Platform or router/dns level while configuring the setup using ConfigWizard after the Ugrade process completes in terminal, to add SSL certificates please refer [ssl configuration for platform](/learn/on-premise/configure/config-ssl).


[![upgrading-wme](/learn/assets/wme-setup/upgrade-wme-setup/wme-patch-process.png)](/learn/assets/wme-setup/upgrade-wme-setup/wme-patch-process.png)

- It takes 45-60 mins approximately. Please watch this terminal.

- After successful upgrade, the script will display a URL to perform the rest of the WME setup upgrade process.
- Go to http://Platform-Instance-IP:8080 as directed by the above command output to do the WME setup upgrade.

## Upgrade From the Configwizard

- Select the Required services to upgrade.

[![upgrade-services](/learn/assets/wme-setup/upgrade-wme-setup/upgrade-wme-services.png)](/learn/assets/wme-setup/upgrade-wme-setup/upgrade-wme-services.png)

- You can customize the WaveMaker studio and App Domain URLs.

[![upgrade-domain-urls](/learn/assets/wme-setup/upgrade-wme-setup/upgrade-domain-name.png)](/learn/assets/wme-setup/upgrade-wme-setup/upgrade-domain-name.png)


- From here, You can update the ssl certificates with the respective domain.

[![upgrade-ssl-certificate](/learn/assets/wme-setup/upgrade-wme-setup/upgrade-ssl-certs.png)](/learn/assets/wme-setup/upgrade-wme-setup/upgrade-ssl-certs.png)

- Update the Trust Store by selecting on Add New.

[![upgrade-trust-store](/learn/assets/wme-setup/upgrade-wme-setup/upgrade-import-ca.png)](/learn/assets/wme-setup/upgrade-wme-setup/upgrade-import-ca.png)

- Update the Maven and NPM reposiroty configuration files if any proceed to Upgrade the WaveMaker setup.

[![upgrade-repository-config](/learn/assets/wme-setup/upgrade-wme-setup/upgrade-repository-config.png)](/learn/assets/wme-setup/upgrade-wme-setup/upgrade-repository-config.png)

- - After completing the patch, go to Launchpad.

[![upgrade-setup](/learn/assets/wme-setup/upgrade-wme-setup/upgrade-setup.png)](/learn/assets/wme-setup/upgrade-wme-setup/upgrade-setup.png)

- Check all User WorkspaceInstance/AppDeployment Instances status in Launchpad.
- You can start working on Studio once the Instance status has started.
- If the Instance status UPGRADE_FAILED, then there might be chances of docker version mismatch. You can upgrade docker version using [Manual Docker Upgrade](/learn/on-premise/upgrade/docker-upgrade).
- Please upgrade the Docker version if it is older than 20.10.12 in your User WorkspaceInstance/AppDeployment Instances.

## Running the patch by skipping Gitlab Migration

- Whenever user using their own VCS and do not want to Upgrade the WME Gitlab, user can skip this step.
- To Upgrade the WME setup by skipping the Gitlab Migration , please use the below command.

```bash
    bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh --skip_gitlab
```    

## Running the UI Patch

- To run the UI upgrade in the WME setup, please use the below command.

```bash
    bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh --upgrade-studioui
``` 
