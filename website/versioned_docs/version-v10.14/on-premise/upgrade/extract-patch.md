---
title: "Extract Package"
id: "extract-patch"
sidebar_label: "Extract Package"
---
---

Assuming you have already downloaded the patch and kept inside user home folder of the platform Instance.

## Extract the package of the patch

### Ubuntu

- Execute the following command to extract Debian package.

```bash
dpkg -i  <WME Patch filename>
```

[![patch extraction](/learn/assets/wme-setup/upgrade-wme-setup/extract-the-patch-package.jpg)](/learn/assets/wme-setup/upgrade-wme-setup/extract-the-patch-package.jpg)

### RHEL

- Execute the following command to untar the file.

```bash
    sudo mkdir -p  /usr/local/content/wme/wme-installer/<version>/
    sudo tar -xvf  <WME Patch Filename> -C /usr/local/content/wme/wme-installer/<version>/
    cd /usr/local/content/wme/wme-installer/<version>/
```
