---
title: "Restore on AZURE"
id: ""
sidebar_label: "Restore on AZURE"
---
---


Launch the machine with the same ip and Attach /wm-data disk which we detached from the previous WME instance.

SSH to instance and run below command for attaching the /wm-data volume,make sure that volume should not format.

```bash
    mount </wm-data disk> /wm-data
```

Add below entries in /etc/fstab file (Note: Make sure not to have duplicate entries with the same device names)

```bash
    <wm-data-disk> /wm-data      ext4     defaults,nofail    0    2
```

## Installing WME on New Instance

After the new instance is up, copy and extract deb installer using dpkg command.

```bash
dpkg -i <debfile>
```

Once deb installer is extracted, it shows main script which initializes setup. Run main script. 

```bash
bash /usr/local/content/wme/wme-installer/<installer-version>/wme-installer.sh```