---
title: "Extract Package"
id: ""
sidebar_label: "Extract Package"
---
---
 Assuming you already launched Platform Instance, downloaded required installer and kept the file in user home directory of platform machine.for launching Platform Instance visit [launch Platform Instance with this prerequisites](wme-prerequisites.md)

### Extract Package for WME installer

- #### Ubuntu

  - Install debian package using following command.

    ```bash
     dpkg -i  <WME-Installer-Filename>
     ```

    [![extract package](/learn/assets/wme-setup/download-and-extract-package.jpg)](/learn/assets/wme-setup/download-and-extract-package.jpg)

- #### RHEL

  - Execute the following command to untar the file and go extracted directory.

    ```bash
     tar -xvf  <WME-Installer-Filename>
     cd /usr/local/content/wme/
     ```
