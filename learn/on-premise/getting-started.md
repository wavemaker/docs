---
title: "Wavemaker Enterprise Setup Process"
id: ""
sidebar_label: "Getting started"
---
---

Wavemaker Enterprise (WME) is a on-premise offering of Wavemaker. WME can be installed on an on-premise/private or public cloud. It can be hosted and managed by an organization on their own infrastructure.

:::note
This document describes the process for setting up Wavemaker Enterprise in all major cloud providers and on-premise environments.
:::

## Wavemaker Enterprise setup process

For setting up Wavemaker Enterprise in different environments, you would need system prerequisites for hardware capabilities, network, and security management. The following hardware requirements are for approximation; these may vary depending on the number of developers and apps.

### Three Machines

1. **Platform Instance**: 16 GB RAM,  4 Core CPU,  300 GB disk
2. **Studio External Instance**: 16 GB RAM,  4 Core CPU,  300 GB disk
3. **QA Apps External Instance**: 16 GB RAM,  4 Core CPU,  150 GB disk

For more information on prerequisites, see [Wavemaker Enterprise Prerequisites](/learn/on-premise/prerequisites).

:::important
You can discuss your needs on hardware allocation before starting the setup.
:::

## Choosing the Environment

For setting up WME, it supports on-premise/private or public cloud. Launching instances process is preparing infrastructure for WME.

1. [Amazon Web Services (AWS)](/learn/on-premise/launching-instances-in-aws)
2. [Microsoft Azure](/learn/on-premise/launching-instances-in-azure)
3. [Microsoft Azure VHD](/learn/on-premise/launching-instances-in-azure-vhd)
4. [Google Cloud Platform (GCP)](/learn/on-premise/launching-instances-in-gcp)
5. [VMware ESXi using ISO](/learn/on-premise/launching-instances-in-esxi-iso)
6. [VMware ESXi using OVA](/learn/on-premise/launching-instances-in-esxi-ova)
7. [Hyper-V using VHD](/learn/on-premise/launching-instances-in-hyper-v-vhd)

- ### Installing Software for the OS

    For setting up Wavemaker Enterprise in different environments, some prerequisite software should be installed in the Instance. Also, based on the operating system the prerequisites will be changed.

    For more information, see [Prerequisites for Operating System](/learn/on-premise/install-prerequisites).

- ### Files needed

  - **Launching Platform Instance**: Download the `WME-installer-10.3.1.ee.8273.ova`  and copy it to a location where you can launch instances using this OVA.
  - **Launching External Instances**: Download the`WME-ExternalInstance-v24.ova`  and copy it to a location where you can launch instances using this OVA.
  - Trial license.
  - Those files are required only when launching instances from Hyper V and VMware Esxi server.wavemaker team will provide those files

:::note
Wavemaker team will send the trial license link soon before the setup when customer contact.
:::

## Installing WME on the Environment

WME Installation describes the process from Downloading the WME installer to Applying the license to the WME.
The WME installer is a file it consists of required software packages and files to setup WME on the environment.

For Installing Wavemaker Enterprise in your environments, use the following workflow.

1. [Download the WME Installer](/learn/on-premise/download-copy-installer)
2. [Extracting the Installer package](/learn/on-premise/extract-package)
3. [Initialize the WME setup](/learn/on-premise/initilize-setup)
4. [Setup using the config portal](/learn/on-premise/setup-using-cw)
5. [Applying the license to the WME](/learn/on-premise/apply-license)

## Configuring WME using the Launchpad

After Installing the WME in environment we can configure the WME for administration and authorization by providing the information of admin password ,user mail, password for user and domains with enterprise name

1. [Configure Users and Authentication Providers](/learn/on-premise/config-users-auth-providers)
2. [Configure VCS](/learn/on-premise/config-vcs)
3. [Adding Instance to Developers Workspace](/learn/on-premise/add-dev-capacity)
4. [Adding Instance to App Deployments](/learn/on-premise/add-apps-capacity)
5. [Configure pipeline](/learn/on-premise/config-pipeline)

## Permissions

You should ensure that you have the right permissions to import ova and launch machines.

## Accessibility

- Domain Names which should be mapped to Platform machine IP in your DNS.  
 For example:

```example
wme.dpo.com,  wm-apps.dpo.com
```

- You can skip domain name mapping. In such cases, developers should map it in the `/etc/host` file.
- All the three machines should have static IP addresses, this means that the IP address should not change when you reboot.

## VCS (Advanced)

- If you would like to host source code in your own VCS, then you may have to provide details during the setup, such as username, password, access token of the VCS. Currently, we support Bitbucket, Gitlab, Github. Wavemaker ships with Gitlab as Default VCS.
- Wavemaker ships DB based authentication as default. You can configure your own SSO for the platform. Currently, we support OpenID Connect, LDPA, CAS protocols.

## The Process

When you have all the prerequisites ready. The setup may take 60-90 minutes approximately.

### Steps

---

#### Step-1: Prepare Infrastructure

#### Step-2: SSH to the platform instance

#### Step-3: Start the setup process

#### Step-4: Access URL `http://<platformIP>:8080/`

#### Step-5: Complete the guided setup on setup wizard

#### Step-6: Upload license

#### Step-7: Add external instances from launchpad

#### Step-8: Add external VCS (Advanced)

## What's next

[Get started with Wavemaker Studio](/learn/documentation-reference)
