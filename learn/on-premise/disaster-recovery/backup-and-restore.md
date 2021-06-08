---
title: "Backup and Restore "
id: ""
sidebar_label: "Backup and Restore "
---
---

The following document will help an organization to take backup data at unplanned incidents and minimizing the effects of a disaster by restoring, so an organization will continue to operate or quickly resume key operations.

## Data Backup

- WaveMaker Platform Stores its state into the disk. WaveMaker Platform administrators can take backups of those disk/directories and can restore them to any previous state.
- WaveMaker uses separate dedicated directory `/wm-data` in WaveMaker Platform Instance for storing data and `/data` in Studio Workspace/AppDeploy Instances.
- create an AMI or use the latest AMI of WME Instance or VM for creating AMI for different cloud providers follow the below steps.

### AWS

- For create AMI of Instance in AWS cloud provider please refer [AMI creation in aws](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instances-and-amis.html).
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

- Launch the instance or VM with the same IP address with the latest AMI Image.

- Run the following command to start the WME setup process

```bash
    bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh --start
```

### Studio Workspace/AppDeploy Instances

- Launch the instance or VM with the same IP address with the latest AMI Image.

## Sync Studio Workspace/AppDeploy Instances

- Execute the following command in Platform Instance to sync the StudioWorkspace/AppDeploy Instances.

```bash
bash /usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh --upgrade-instances
```
