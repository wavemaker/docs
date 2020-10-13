---
title: "Backup on AZURE"
id: ""
sidebar_label: "Backup on AZURE"
---
---


Stop WME VM and detach network interface [follow the steps given here](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface-vm#remove-a-network-interface-from-a-vm), make a note of interface ID.

Create [Snapshot](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/snapshot-copy-managed-disk) of /wm-data backup for platform instance,make sure to note snapshot ID.
