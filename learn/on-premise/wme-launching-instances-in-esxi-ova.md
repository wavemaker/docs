---
title: "Launch Instances in Esxi using OVA"
id: ""
sidebar_label: "Launch Instances in Esxi using OVA"
---
---

### Launch instances in Esxi using OVA  
 **Prerequisite**
 - OVA file shared by WaveMaker team 
 - VMware ESXi version 6.5 or higher
 - Permision for launching OVA .
 
 **Steps**
 
- Login into VMware ESXi Server using  Server IP address and user credentials. 
- Select Create/Register VM for creating the new virtual machine
- Select creation type as deploy a virtual machine by from an ovf or ova file
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-ova/select-vm-creation-type.png)](/learn/assets/wme-setup/vm-creation-by-using-ova/select-vm-creation-type.png)

- Select ovf or ova file for VM would like to deploy
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-ova/selecting-the-ovf-template-for-deploy.png)](/learn/assets//wme-setup/vm-creation-by-using-ova/selecting-the-ovf-template-for-deploy.png)

- Select the database in which to store the configuration and disk files  
    <br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-ova/selecting-the-database-for-storage.png)](/learn/assets/wme-setup/vm-creation-by-using-ova/selecting-the-database-for-storage.png)

- Select deployment options like networks mappings, disk provisioning, etc.
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-ova/selecting-the-deployment-options-and-networking.png)](/learn/assets/wme-setup/vm-creation-by-using-ova/selecting-the-database-for-storage.png)

- Review your selected configuration and settings, then click on the finish for creating the virtual machine. 
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-ova/review-the-settings.png)](/learn/assets/wme-setup/vm-creation-by-using-ova/review-the-settings.png)

- Wait for few moments for complete successfully the creation of virtual machine
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-ova/created-vm-show-in-dashboard.png.png)](/learn/assets/wme-setup/vm-creation-by-using-ova/created-vm-show-in-dashboard.png)

