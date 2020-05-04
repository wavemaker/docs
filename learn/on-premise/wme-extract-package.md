---
title: "Extract Package"
id: ""
sidebar_label: "Extract Package"
---
---
 Assuming you already downloaded required installer and kept the file in user home directory of platform machine.

### Extract Package for WME installer

- #### Ubuntu 
  - Install debian package using following command.
    ```
     dpkg -i  <WME-Installer-Filename>
     ```
    [![](/learn/assets/wme-setup/download-and-extract-package.jpg)](/learn/assets/wme-setup/download-and-extract-package.jpg)


- #### RHEL
  - Execute the following command to untar the file and go extracted directory.
    ```
     tar -xvf  <WME-Installer-Filename>
     cd /usr/local/content/wme/
     ```