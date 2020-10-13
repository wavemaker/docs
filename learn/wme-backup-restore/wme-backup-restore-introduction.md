---
title: "WME-Backup-Restore"
id: "wme-backup-restore-introduction"
sidebar_label: "Introduction"
---
---
## Introduction

WaveMaker uses separate dedicated directory for storing data, which is easy to take backup and restore

## When recovery needs
Platform instance is crashed and unable to access the WaveMaker
External instance is crashed, able to access WaveMaker and the Studio Workspace Failing

For Platform instance WaveMaker uses /wm-data directory for storing data, we suggest separate volume/disk for /wm-data directory.

For External instances WaveMaker uses /data directory for storing data,we suggest separate volume/disk for /data directory.


## When to restore
Disaster recovery
Upgrading platform version
Changing the instance with same version

The below image shows the disks of the Platform and External Instance

![backup and restore](/learn/assets/platform.png)

![backup and restore](/learn/assets/external.png)