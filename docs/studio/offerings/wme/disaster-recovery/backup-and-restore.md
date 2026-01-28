---
title: Backup and Restore 
last_update: { author: "WaveMaker" }
id: backup-and-restore
sidebar_label: Backup and Restore 
---
The following document will help an organization to take backup data at unplanned incidents and minimizing the effects of a disaster by restoring, so an organization will continue to operate or quickly resume key operations. Make sure the organization has use the same IP address as previous WME Instances for new WME Instances.

## Data Backup

- WaveMaker Platform Stores its state into the disk. WaveMaker Platform administrators can take backups of those disk/directories and can restore them to any previous state.
- WaveMaker uses separate dedicated directory `/wm-data` in WaveMaker Platform Instance for storing data and `/data` in StudioWorkspace Instance / AppDeployment Instance.
- Create an AMI or use the latest AMI of WME Instance or VM for creating AMI for different cloud providers follow the below steps.
- We move all the data to Platform Instance(/wm-data dir or volume) so that backup will be easier. No need to take backups of any (volume/dir) in any of StudioWorkspace Instance / AppDeployment Instance.

### AWS

- To create AMI of Instance in AWS cloud provider please refer [AMI creation in aws](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instances-and-amis.html).
- Stop WME EC2 instance and detach eth1 network interface [follow the steps given here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#detach_eni), make a note of interface ID or ENI ID
  
### Azure

- For creating an Image of Instance in AZURE cloud provider please refer [Image creation in azure](https://docs.microsoft.com/en-us/azure/virtual-machines/image-version-vm-cli).
- Stop WME VM and detach network interface [follow the steps given here](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface-vm#remove-a-network-interface-from-a-vm), make a note of interface ID.

### GCP

- For creating an Image of Instance in GCP cloud provider please refer [Image creation in GCP](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images).
- Stop WME VM aESXietach IP address [follow the steps given here](https://cloud.google.com/compute/docs/ip-addresses/reserve-static-internal-ip-address#deleting_a_static_internal_ip_address), make a note of interface ID.

### VMWARE ESXi

- For creating a snapshot of VM in VMware please refer [snapshot creation in vmware](https://www.vmware.com/support/ws5/doc/ws_preserve_sshot_taking.html).
  
### Hyper-V

- for creating a snapshot of VM in Hyper-V please refer [snapshot creation in Hyper-V](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/checkpoints)

## WME Instances Creation

### Platform Instance

- Launch the instance or VM with the same IP address with the latest AMI Image. To create WME Platform Instance in the different cloud and on-premise environments please follow the below steps.

#### AWS

- To launch WME Platform instance in AWS cloud environment please refer [WME Platform instance Infrastructure in AWS](../installation/platforms/aws/launching-instances-in-aws.md).
  
#### AZURE

- To launch WME Platform virtual machines in AZURE cloud environmet please refer [WME Platform instance Infrastructure in AZURE](../installation/platforms/azure/launching-instances-in-azure.md).
  
#### GCP

- To launch WME Platform virtual machines in GCP cloud environment, follow the general [Prerequisites](/docs/studio/offerings/wme/getting-started/prerequisites) and installation steps.

#### VMWARE ESXI

- To create WME Platform virtual machines in VMware Esxi please refer [WME Platform instance Infrastructure in VMware Esxi](../installation/platforms/vmware-esxi/launching-instances-in-esxi-ova.md).

#### Hyper-V

- To create WME Platform virtual machines in Hyper-V please refer [WME Platform instance Infrastructure in Hyper-V](../installation/platforms/hyperv/launching-instances-in-hyperv-vhd.md).

#### Starting WME setup

- Following are the steps to start the WME setup process from the configwizard

  - **CW Portal**

    - Log in to the CW portal, after login in home page you can see the settings icon and under **configuration** at the bottom, you can see **Danger Zone**
    - You can start by hitting **start** button as shown in the image below, hit the button to start the WME setup

    [![cw_start](./assets/images/cw-stop.png)](./assets/images/cw-stop.png)

### StudioWorkspace Instance / AppDeployment Instance

- Launch the instance or VM with the same IP address with the latest AMI Image.To create WME StudioWorkspace Instance / AppDeployment Instance in the different cloud and on-premise environments please follow the below steps

#### AWS

- To launch WME StudioWorkspace Instance / AppDeployment Instance in AWS cloud environment please refer [WME StudioWorkspace Instance / AppDeployment Instance Infrastructure in AWS](../installation/platforms/aws/launching-instances-in-aws.md).
  
#### AZURE

- To launch WME StudioWorkspace Instance / AppDeployment Instance in AZURE cloud environmet please refer [WME StudioWorkspace Instance / AppDeployment Instance Infrastructure in AZURE](../installation/platforms/azure/launching-instances-in-azure.md).
  
#### GCP

- To launch WME Platform virtual machines in GCP cloud environment, follow the general [Prerequisites](/docs/studio/offerings/wme/getting-started/prerequisites) and installation steps.

#### VMWARE ESXI

- To create WME StudioWorkspace Instance / AppDeployment Instance in VMware Esxi please refer [WME StudioWorkspace Instance / AppDeployment Instance Infrastructure in VMware Esxi](../installation/platforms/vmware-esxi/launching-instances-in-esxi-ova.md).

#### Hyper-V

- To create WME StudioWorkspace Instance / AppDeployment Instance in Hyper-V please refer [WME StudioWorkspace Instance / AppDeployment Instance Infrastructure in Hyper-V](../installation/platforms/hyperv/launching-instances-in-hyperv-vhd.md).

## Sync StudioWorkspace Instance / AppDeployment Instance


- You can do this from the Launchpad.

- To Apply, go to the Launchpad and Navigate to the Developer Workspace or App Deployements.
- On the Capacity, you can see the Workspace/AppDeploy Instance details. On the Icons Shown, you can find the sync option.

  [![Sync_and_patch](./assets/images/sync-and-patch.png)](./assets/images/sync-and-patch.png)
