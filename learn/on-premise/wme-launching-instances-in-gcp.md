---
title: "Launch Instances in GCP"
id: ""
sidebar_label: "Launch Instances in GCP"
---
---

### Launch instances in GCP
 **Prerequisite**

 **Steps**  
 
- FIREWALL RULES FOR PLATFORM AND EXTERNAL INSTANCE
  - Create firewall rules for public access to the platform instance
    - Provide basic details , target , source details and TCP ports for creating public access firewall rule
  	   [![](/learn/assets/wme-setup/wme-setup-in-gcp/public-access-firewall.png)](/learn/assets/wme-setup/wme-setup-in-gcp/public-access-firewall.png)
  - Create a firewall rule for platform instance for access from the external instance
    - Provide basic details, target, source details and TCP ports for creating a public access firewall rule
  	   [![](/learn/assets/wme-setup/wme-setup-in-gcp/platform-firewall.png)](/learn/assets/wme-setup/wme-setup-in-gcp/platform-firewall.png)
  - Create firewall rule for external instance for access from the platform instance 
    - Provide basic details, target, source details and TCP ports for creating a public access firewall rule
  	   [![](/learn/assets/wme-setup/wme-setup-in-gcp/external-firewall.png)](/learn/assets/wme-setup/wme-setup-in-gcp/external-firewall.png)
- CREATE A PLATFORM INSTANCE
  - Select region , zone , machine configurations select ubuntu 16.04 operating system.
  	  [![](/learn/assets/wme-setup/wme-setup-in-gcp/instance-os.png)](/learn/assets/wme-setup/wme-setup-in-gcp/instance-os.png)
  - provide ssh key details in security for accessing the instance and create disks for wm-data and wm-runtime with 150 and 50 GiB
  	  [![](/learn/assets/wme-setup/wme-setup-in-gcp/platform-disks.png)](/learn/assets/wme-setup/wme-setup-in-gcp/platform-disks.png)
  - At network section provide respected network tags of your firewall rules and create instance.
  	  [![](/learn/assets/wme-setup/wme-setup-in-gcp/platform-network-details.png)](/learn/assets/wme-setup/wme-setup-in-gcp/platform-network-details.png)
- CREATE EXTERNAL INSTANCE
  - Select region, zone, machine configurations select ubuntu 16.04 operating system.
      [![](/learn/assets/wme-setup/wme-setup-in-gcp/instance-os.png)](/learn/assets/wme-setup/wme-setup-in-gcp/instance-os.png)
  - provide ssh key details in security for accessing the instance and create disks for external instance
  	  [![](/learn/assets/wme-setup/wme-setup-in-gcp/external-disk.png)](/learn/assets/wme-setup/wme-setup-in-gcp/external-disk.png)
  - At network section provide respected network tags of your firewall rules and create instance.
  	  [![](/learn/assets/wme-setup/wme-setup-in-gcp/external-network-details.png)](/learn/assets/wme-setup/wme-setup-in-gcp/external-network-details.png)
- MOUNTING DISKS IN VIRTUAL MACHINES
  - Ssh into the platform virtual machine and check the available block devices by command lsblk. create a filesystem for disks for example by using the command mkfs -t ext4 /dev/sdc and mount the disks for example by using the command mount /dev/sdc /wm-runtime/ .
  	  [![](/learn/assets/wme-setup/wme-setup-in-gcp/mounting-volumes.png)](/learn/assets/wme-setup/wme-setup-in-gcp/mounting-volumes.png)
  - Check the mounted disks and do fstab.in fstab, we can provide information about the mount and automatically mounted files with during boot. take UUID of disks for identification by using the command blkid.entry the  UUID of the disks in fstab
	  [![](/learn/assets/wme-setup/wme-setup-in-gcp/fstab.png)](/learn/assets/wme-setup/wme-setup-in-gcp/fstab.png)

