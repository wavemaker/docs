---
title: "WaveMaker Enterprise Upgrade"
id: ""
sidebar_label: "Upgrade Overview"
---
---

This document provides the instructions to install the WME setup to upgrade the current WaveMaker Enterprise version or to apply a patch for enhancing or optimizing the performance of the installed WME.

The following table is the compatibility matrix for upgrading the WME:

::: note
The following list provides the currently supported versions for WME patching. Kindly contact our WaveMaker support team if you did not find the right version.
:::

| **WME Patch release** | **Supported WME versions** |
| --- | --- |
| v10.0.3 | v9.3.x or higher |
| v9.4.0 |  v9.2.0 or higher |
| v9.3.0.1 |  v9.0.x or higher |

## Patch Inventory

Following are the patch files you will need in order to install the patch on WME setup running on your host machine.

- WME patch file and its corresponding checksum (sha1sum) file.
- WME base ova or WME base AMI if you want to launch instances with WaveMaker base image formats.
- License Key (.zip format) issued by WaveMaker.

::: note
Links for WME Patch and the corresponding checksum (sha1sum) files will be provided to you by the WaveMaker team through an email. You need to download the files before starting the installation.
:::


## Prerequisites

Following are the prerequisites for applying the patch on WME:

- While applying the patches, the WME and services should be in the running state.
- Ensure that users are not accessing the platform when applying either of the patches.
- Before applying the patches, take a snapshot/backup of the virtual machine’s current state. 
- While applying the patch, the deployed apps are not accessible. 
