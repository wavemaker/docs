---
title: WaveMaker Enterprise Setup Process
last_update: { author: "WaveMaker" }
id: getting-started
sidebar_label: WaveMaker Enterprise Setup Process
---
WaveMaker Enterprise (WME) is an on-premise offering of WaveMaker. WME can be installed on an on-premise/private, or public cloud. It can be hosted and managed by an organization on their own infrastructure.

You can setup WaveMaker Enterprise on any machine.

This document describes the process for setting up WaveMaker Enterprise in all major cloud providers and on-premise environments.

:::note
This document uses words like **VM**, **Instance** to refer a machine.
:::

The machine can be hosted on any cloud provider like Amazon Web Services EC2 (AWS), Google Cloud Provider (GCP), Microsoft Azure, or enterprise cloud, or bare-metal. All machines allocated to the WME Platform must not have any other process running in it.

## WaveMaker Enterprise Setup Process

WaveMaker Enterprise setup requires you to follow the steps below.

### Step-1: Understand prerequisites

Understand and procure the [Prerequisites](./prerequisites.md).

### Step-2: Choose an infrastructure provider

Choose a cloud provider from

1. [AWS](../installation/platforms/aws/launching-instances-in-aws.md)
2. [Azure](../installation/platforms/azure/launching-instances-in-azure.md)
3. GCP (Follow general prerequisites and installation steps)

Or, choose any on-premise virtualization providers from

1. [VMWare ESXi (OVA)](../installation/platforms/vmware-esxi/launching-instances-in-esxi-ova.md)
2. [VMWare ESXi (ISO)](../installation/platforms/vmware-esxi/launching-instances-in-esxi-iso.md)
3. [Hyper-V](../installation/platforms/hyperv/launching-instances-in-hyperv-vhd.md)

Or, you can choose bare-metal or any other option as well.

### Step-3: Choose the OS

Currently, WaveMaker supports the following Operating Systems.

- RHEL 7.x, RHEL 8.x, RHEL 9.x.
- Ubuntu 18.04, Ubuntu 20.04, Ubuntu 22.x.

### Step-4: Check for software requirements

Depending on the Operating System, you'll need to install additional software.

### Step-5: Install

Start installing, using the WME installer. You can follow the steps depending on the selected infrastructure provider specified in step-2.

### Step-6: Configure

Configuring the setup.
