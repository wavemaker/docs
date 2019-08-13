---
title: "WME Setup Guide – Maintenance"
id: "wme-setup-guide-maintenance"
---

This section provides instructions to maintain & troubleshoot your WaveMaker Enterprise (WME) installation.

## up WME

is recommended that regular & frequent backup snapshots of the WME Platform VM and External Instance VMs (if any) be taken onto a separate machine or to a separately backed up storage volume. Follow the links below for taking snapshots in VMware vSphere Client or Oracle VirtualBox or VMware Workstation Pro.

1. for backing up VM in VMware vSphere Client – [these steps](https://pubs.vmware.com/vsphere-51/index.jsp?topic=%2Fcom.vmware.vsphere.vm_admin.doc%2FGUID-878C36BA-6922-4269-8803-7FC419B947B7.html)
2. for backing up VM in Oracle VirtualBox – [these steps](https://www.virtualbox.org/manual/ch01.html#snapshots)
3. for backing up in VM in VMware Workstation Pro – [these steps](https://pubs.vmware.com/workstation-12/index.jsp#com.vmware.ws.using.doc/GUID-81701CA5-F1D4-47F2-8CC2-B47388AFF6C1.html)
4. for backing up EBS volumes in AWS – [these steps](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html)

It is also recommended that regular and frequent backups be taken of the host machine(s).

### WaveMaker Enterprise during Setup

launching WaveMaker, if setup fails:

1. a screenshot of the installation failure message.
2. the left panel, click Support Center and Download Logs. [![](../assets/WME_trouble.png)](../assets/WME_trouble.png)
3. the screenshot of the failure message along with the downloaded log file to [Support](mailto: support@wavemaker.com)

### WaveMaker Enterprise VM after Setup

WaveMaker Enterprise Setup Portal maybe used to check the status of services running in the VM, to perform stop/start operations on WME, or to perform a factory reset as per the instructions below

Checking your WaveMaker Enterprise Status:

1. Enterprise Setup Portal is accessible at `://[ip-of-vm]:8080`
2.  to Setup Portal with your admin credentials (provided at the time of admin user creation), to check your WME platform status.
3. you log in, you can see the status of all the services in Running state.

[![](../assets/WME_trouble1.png)](../assets/WME_trouble1.png)

## Services

Restarting WaveMaker Enterprise services should only be performed as a troubleshooting step when recommended by WaveMaker Support or when you require to restart your VM or host machine.

1. the Stop button to shut down WME.
2. you stop WME, you will not be able to access the WaveMaker platform (such as WaveMaker Studio and Launchpad).
3. until the status of all services has changed to Stopped and the Start button is visible.
4. on the Start button to restart the services and wait until the status of all services has changed to Running. You can now access the WaveMaker platform.

##  Platform Instance

In case you need to restart WME platform instance, follow the steps given below:

1. a backup of the platform instance. ( [here](#back-up))
2. the WaveMaker Enterprise Setup Portal at `://[ip-of-vm]:8080`
3.  to Setup Portal with your admin credentials (provided at the time of admin user creation) [![](../assets/WME_trouble1.png)](../assets/WME_trouble1.png)
4. the Stop button to shut down WME.
5. until the status of all services has changed to Stopped and the Start button is visible.
6. you can restart the platform instance.

## Reset

Performing a Factory Reset will delete all the users, projects and other data from your WaveMaker Enterprise VM and these cannot be recovered later. Factory Reset will bring the WME VM back to the last patched version (if previously patched) or to the initial version as at the time of the first installation. Factory Reset is a troubleshooting step that should be done only in consultation with WaveMaker Support. After the reset, you will need to re-initialize and setup WaveMaker Enterprise again. Before you do a Factory Reset:

- a [backup](#back-up) of the existing WME VM setup - Platform and External Instances (if any).
- all the projects and save the exported files to a different machine. After setting up the VM again, you may re-import the exported project files.

## Log Files

Post the launch of WME, in case you run into problems pertaining to running and deploying your apps, you can access the log files from the Launchpad Troubleshooting section:

- the logs tab, you can choose the service causing the error and download the corresponding logs.
- can contact WaveMaker Support and send them the requested log file.

[![](../assets/WME_logs2.png)](../assets/WME_logs2.png)

- [1\. Getting Started](/learn/installation/wavemaker-enterprise-setup-guide/)
- [2\. Launching Instances](https://www.wavemaker.com/learn/installation/wme-setup-guide-launch-initialize/)
- [3\. Setting Up WME](https://www.wavemaker.com/learn/installation/wme-setup-guide-access-setting/)
- [4\. Configuring WME](/learn/installation/wme-setup-guide-configuration/)
- [5\. Adding Capacity](/learn/installation/wme-setup-guide-adding-capacity/)
- [6\. Maintaining WME](#)
    - [Backing up WME](#back-up)
    - [Troubleshooting WME](#troubleshooting)
    - [Restarting Services](#restart)
    - [Restarting Platform Instance](#restart_platform)
    - [Factory Reset](#reset)
    - [Accessing Log Files](#log-files)
- [7\. Upgrading WME](/learn/installation/wme-setup-guide-upgrading/)
