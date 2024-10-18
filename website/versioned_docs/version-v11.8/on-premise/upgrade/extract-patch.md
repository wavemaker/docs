---
title: "Extract Package"
id: "extract-patch"
sidebar_label: "Extract Package"
---
---

Assuming you have already downloaded the patch and kept inside user home folder of the platform Instance.

## Extract the package of the patch


- Execute the following commands to untar the file.

    - Make a WME installation directory in the platform. 

    ```bash
        sudo mkdir -p  /usr/local/content/wme/wme-installer/<version>/
    ```

    - Extract the Patch packgae file which is already downloaded and kept inside the home folder into the installation directory.

    ```bash
        sudo tar -xvf  <WME Patch Filename> -C /usr/local/content/wme/wme-installer/<version>//
    ```