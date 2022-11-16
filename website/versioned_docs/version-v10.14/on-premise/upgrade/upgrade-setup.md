---
title: "WaveMaker Enterprise Upgrade"
id: "upgrade-setup"
sidebar_label: "Upgrade Overview"
---
---

This document provides the instructions install a patch to upgrade the current WaveMaker Enterprise version for enhancing features or optimizing the performance of the installed WME.

The following table is the compatibility matrix for upgrading the WME:

::: note

The following list provides the currently supported versions for WME patching. Kindly contact our WaveMaker support team if you did not find the right version.

[Check out full list of releases here.](/learn/wavemaker-release-notes#current-release-details)
:::

| **WME Patch release** | **Supported WME versions** |
| --- | --- |
| v10.13.x |  v10.6.x or higher |
| v10.11.x |  v10.6.x or higher |
| v10.10.x |  v10.6.x or higher |
| v10.9.x  |  v10.6.x or higher |
| v10.8.x  |  v10.6.x or higher |
| v10.7.x  |  v10.6.x or higher |
| v10.6.x  |  v10.5.3 or higher |
| v10.5.3  |  v10.x.x or higher |
| v10.4.2  |  v10.x.x or higher |
| v10.3.1  |  v9.3.x or higher  |
| v10.0.3  |  v9.3.x or higher  |
| v9.4.0   |  v9.2.0 or higher |
| v9.3.0.1 |  v9.0.x or higher |

## Patch Inventory

Following are the patch files you will need in order to install the patch on the WME setup running on your host machine.

- **Ubuntu**
  - patch file in deb format
  - corresponding checksum (sha1sum) files
- **RHEL**
  - patch file in tar format.
  - corresponding checksum (sha1sum) files

::: note
Links for WME Patch and the corresponding checksum (sha1sum) files will be provided to you by the WaveMaker team through an email. You need to download the files before starting the installation.
:::

## Prerequisites

Following are the prerequisites for applying the patch on WME:

- While applying the patches, the WME and services should be in the running state.
- Ensure that users are not accessing the platform when applying either of the patches.
- Before applying the patches, take a snapshot/backup of the virtual machine’s current state.
- While applying the patch, the deployed apps are not accessible.
