---
title: "Extract Package"
id: ""
sidebar_label: "Extract Package"
---
---

Assuming you have already downloaded the patch and kept inside user home folder of the platform Instance.

## Extract the package of the patch


- Execute the following command to untar the file.

```bash
    sudo mkdir -p  /usr/local/content/wme/wme-installer/<version>/
    sudo tar -xvf  <WME Patch Filename> -C /usr/local/content/wme/wme-installer/<version>/
    cd /usr/local/content/wme/wme-installer/<version>/
```