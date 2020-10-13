---
title: "Restore on AWS"
id: ""
sidebar_label: "Restore on AWS"
---
---


Launch the instance with the same ip and Attach /data volume which we detached from the previous WME instance.

SSH to an external instance and run below command for attaching the /data volume,make sure that volume should not format.

```bash
    mount </data disk> /data
```
Add below entries in /etc/fstab file (Note: Make sure not to have duplicate entries with the same device names)

```bash
<data-disk> /data      ext4     defaults,nofail    0    2
```

SSH to an platform instance and run below command 

```bash
bash /usr/local/content/wme/wme-installer/<installer-version>/wme-installer.sh --upgrade-instances```

