---
title: "Wavemaker Enterprise Setup Process"
id: ""
sidebar_label: "Enterprise Setup Process"
---
---

Wavemaker Enterprise (WME) is a on-premise offering of Wavemaker. WME can be installed on an on-premise/private or public cloud. It can be hosted and managed by an organization on their own infrastructure.

:::note
This document describes the process for setting up Wavemaker Enterprise in all major cloud providers and on-premise environments.
:::

You can setup WaveMaker Enterprise on any machine.

This document uses words like **VM**, **Instance** to refer a machine.

The machine can be hosted on any cloud provider(like AWS EC2, GCP, Azure .etc) or enterprise cloud or baremetal. All machine allocated to WME  platform should not have any other running process.

## Wavemaker Enterprise setup process

The complete Wavemaker Enterprise setup involve below steps

1. Understand and Procure [Prerequisites](/learn/on-premise/prerequisites)  
2. Choose Infrastructure Provider
   - Setup can be done on any cloud provider like AWS EC2, GCP, Azure .etc.
   - Setup can be done any on-premise virtualization providers like VMWare Esxi, Hyper-V etc.
   - Baremetal or any other.
3. Choose Operating system. We support
   - RHEL 7.x, RHEL 8.x
   - Ubuntu 16.04.
3. Installing Additional Softwares based on Operating System.
4. Installing WaveMakerEnterprise using WME installer.
5. Configuring setup. 