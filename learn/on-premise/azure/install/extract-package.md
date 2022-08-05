---
title: "Extract Package"
id: ""
sidebar_label: "Extract Package"
---
---
 Assuming you already launched Platform Instance, downloaded required installer and kept the file in user home directory of platform machine.for launching Platform Instance visit [launch Platform Instance with this prerequisites](/learn/on-premise/prerequisites)

### Extract Package for WME installer

  - Execute the following command to untar the file and go extracted directory.

    ```bash
     sudo mkdir -p  /usr/local/content/wme/wme-installer/<version>/
     sudo tar -xvf  <WME-Installer-Filename> -C /usr/local/content/wme/wme-installer/<version>/
     cd /usr/local/content/wme/wme-installer/<version>/
     ```


[![extract package](/learn/assets/wme-setup/download-and-extract-package.png)](/learn/assets/wme-setup/download-and-extract-package.png)





