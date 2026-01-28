---
title: WaveMaker Enterprise Setup on Hyper-V using VHD
last_update: { author: "WaveMaker" }
id: launching-instances-in-hyper-v-vhd
sidebar_label: Prepare Infrastructure using VHD
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

[![selecting-the-vm-creation-in-hyperv](./assets/images/selecting-the-vm-creation-in-hyperv.png)](./assets/images/selecting-the-vm-creation-in-hyperv.png)

- Click next on the wizard.

[![wizard](./assets/images/click-on-wizard.png)](./assets/images/click-on-wizard.png)

- Provide name for the virtual machine and click on next.

[![providing name](./assets/images/providing-name.png)](./assets/images/providing-name.png)

- Select the generation 1 option click on next.

[![selecting generation type](./assets/images/generation-type.png)](./assets/images/generation-type.png)

- Enter the memory as 16000 MB. You can use the dynamic memory option as per the requirements and click next.

[![memory assign](./assets/images/assigning-memory.png)](./assets/images/assigning-memory.png)

- Select the switch (Virtual Switch) for the connection and click next.

[![network configuration](./assets/images/configure-network.png)](./assets/images/configure-network.png)
  
- Select Use an existing virtual hard disk option and browse to select the WME platform VM vhd from your local machine.

[![hard disk connection](./assets/images/virtual-harddisk-connnection.png)](./assets/images/virtual-harddisk-connnection.png)

- Verify the summary page and click on finish.

[![verify the summary](./assets/images/verify-the-summary.png)](./assets/images/verify-the-summary.png)

- Start and connect to the VM.

[![staring vm](./assets/images/start-and-connect-vm.png)](./assets/images/start-and-connect-vm.png)
  
## Launch StudioWorkspace Instance / AppDeployment Instance

- Use same procedure for StudioWorkspace Instance / AppDeployment Instance.
- Use StudioWorkspace Instance / AppDeployment Instance VHD.

## Security and Networking

- Do one of the two things below.
  - All traffic opened between Platform Instance and StudioWorkspace Instance / AppDeployment Instance.
  - Configure security rules as per Prerequisites.
