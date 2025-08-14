---
title: "WaveMaker Enterprise Setup on Hyper-V using VHD"
id: "launching-instances-in-hyper-v-vhd"
sidebar_label: "Prepare Infrastructure using VHD"
---
---

## Prerequisite

- VHD file shared by WaveMaker team
- Hyper-V with version 10.0.x on Windows 10 Pro
- Permissions to launch VM

:::note
This guide has written based on Hyper-V with version 10.0.x.
:::

## Launch Platform Instance

- Open  Hyper-V, Right-click on your Hyper-V host, click on New, Select virtual machine for creating a platform virtual machine.

[![selecting-the-vm-creation-in-hyperv](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/selecting-the-vm-creation-in-hyperv.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/selecting-the-vm-creation-in-hyperv.png)

- Click next on the wizard.

[![wizard](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/click-on-wizard.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/click-on-wizard.png)

- Provide name for the virtual machine and click on next.

[![providing name](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/providing-name.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/providing-name.png)

- Select the generation 1 option click on next.

[![selecting generation type](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/generation-type.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/generation-type.png)

- Enter the memory as 16000 MB. You can use the dynamic memory option as per the requirements and click next.

[![memory assign](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/assigning-memory.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/assigning-memory.png)

- Select the switch (Virtual Switch) for the connection and click next.

[![network configuration](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/configure-network.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/configure-network.png)
  
- Select Use an existing virtual hard disk option and browse to select the WME platform VM vhd from your local machine.

[![hard disk connection](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/virtual-harddisk-connnection.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/virtual-harddisk-connnection.png)

- Verify the summary page and click on finish.

[![verify the summary](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/verify-the-summary.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/verify-the-summary.png)

- Start and connect to the VM.

[![staring vm](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/start-and-connect-vm.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/start-and-connect-vm.png)
  
## Launch StudioWorkspace Instance / AppDeployment Instance

- Use same procedure for StudioWorkspace Instance / AppDeployment Instance.
- Use StudioWorkspace Instance / AppDeployment Instance VHD.

## Security and Networking

- Do one of the two things below.
  - All traffic opened between Platform Instance and StudioWorkspace Instance / AppDeployment Instance.
  - Configure security rules as per Prerequisites.
