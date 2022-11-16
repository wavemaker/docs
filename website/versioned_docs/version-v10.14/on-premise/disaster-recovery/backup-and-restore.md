---
title: "Backup and Restore "
id: "backup-and-restore"
sidebar_label: "Backup and Restore "
---
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

- To launch WME Platform instance in AWS cloud environment please refer [WME Platform instance Infrastructure in AWS](/learn/on-premise/aws/wavemaker-enterprise-setup-on-aws).
  
#### AZURE

- To launch WME Platform virtual machines in AZURE cloud environmet please refer [WME Platform instance Infrastructure in AZURE](/learn/on-premise/azure/wavemaker-enterprise-setup-on-azure).
  
#### GCP

- To launch WME Platform virtual machines in GCP cloud environment please refer [WME Platform instance Infrastructure in GCP](/learn/on-premise/gcp/wavemaker-enterprise-setup-on-gcp).
  
#### VMWARE ESXI

- To create WME Platform virtual machines in VMware Esxi please refer [WME Platform instance Infrastructure in VMware Esxi](/learn/on-premise/vmware-esxi/wavemaker-enterprise-setup-on-vmware).

#### Hyper-V

- To create WME Platform virtual machines in Hyper-V please refer [WME Platform instance Infrastructure in Hyper-V](/learn/on-premise/hyper-v/wavemaker-enterprise-setup-on-hyperv).

#### Starting WME setup

- Run the following command to start the WME setup process

```bash
    bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh --start
```

### StudioWorkspace Instance / AppDeployment Instance

- Launch the instance or VM with the same IP address with the latest AMI Image.To create WME StudioWorkspace Instance / AppDeployment Instance in the different cloud and on-premise environments please follow the below steps

#### AWS

- To launch WME StudioWorkspace Instance / AppDeployment Instance in AWS cloud environment please refer [WME StudioWorkspace Instance / AppDeployment Instance Infrastructure in AWS](/learn/on-premise/aws/wavemaker-enterprise-setup-on-aws).
  
#### AZURE

- To launch WME StudioWorkspace Instance / AppDeployment Instance in AZURE cloud environmet please refer [WME StudioWorkspace Instance / AppDeployment Instance Infrastructure in AZURE](/learn/on-premise/azure/wavemaker-enterprise-setup-on-azure).
  
#### GCP

- To launch WME StudioWorkspace Instance / AppDeployment Instance in GCP cloud environment please refer [WME StudioWorkspace Instance / AppDeployment Instance Infrastructure in GCP](/learn/on-premise/gcp/wavemaker-enterprise-setup-on-gcp).
  
#### VMWARE ESXI

- To create WME StudioWorkspace Instance / AppDeployment Instance in VMware Esxi please refer [WME StudioWorkspace Instance / AppDeployment Instance Infrastructure in VMware Esxi](/learn/on-premise/vmware-esxi/wavemaker-enterprise-setup-on-vmware).

#### Hyper-V

- To create WME StudioWorkspace Instance / AppDeployment Instance in Hyper-V please refer [WME StudioWorkspace Instance / AppDeployment Instance Infrastructure in Hyper-V](/learn/on-premise/hyper-v/wavemaker-enterprise-setup-on-hyperv).

## Sync StudioWorkspace Instance / AppDeployment Instance

- Execute the following command in Platform Instance to sync the StudioWorkspace Instance / AppDeployment Instance.

```bash
bash /usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh --upgrade-instances
```
