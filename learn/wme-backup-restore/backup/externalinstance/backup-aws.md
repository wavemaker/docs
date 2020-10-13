---
title: "Backup on AWS"
id: ""
sidebar_label: "Backup on AWS"
---
---


Stop WME  EC2 external instance and detach network interface [follow the steps given here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#detach_eni), make a note of interface ID or eni ID.

Create [Snapshot](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html) of /data backup for external instance,make sure to note snapshot ID.