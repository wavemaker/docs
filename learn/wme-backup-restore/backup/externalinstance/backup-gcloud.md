---
title: "Backup on GCLOUD"
id: ""
sidebar_label: "Backup on GCLOUD"
---
---


Stop WME VM and detach ip address [follow the steps given here](https://cloud.google.com/compute/docs/ip-addresses/reserve-static-internal-ip-address#deleting_a_static_internal_ip_address), make a note of ip address.

Create [Snapshot](https://cloud.google.com/compute/docs/disks/create-snapshots#create_zonal_snapshot) of /data backup for external instance,make sure to note snapshot ID.