---
title: "Launch Instances in Esxi using OVA"
id: ""
sidebar_label: "Launch Instances in Esxi using OVA"
---
---

### Launch Instances in Esxi using OVA  
 **Prerequisites**
 - Platform OVA file shared by WaveMaker team
 - External Instance OVA file shared by WaveMaker team  
 - VMware ESXi version 6.5 or higher
 - Permission for launching OVA.
  Note: This guide has written based on Esxi version 6.5.

 **Launch Platform Instance**
 
- Login into VMware ESXi Server using  Server IP address and user credentials. 
- Select Create/Register VM for creating the new virtual machine
- Select creation type as deploy a virtual machine by from an OVF or OVA file
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-ova/select-vm-creation-type.png)](/learn/assets/wme-setup/vm-creation-by-using-ova/select-vm-creation-type.png)

- Select OVF or OVA file for VM would like to deploy. User Platform Instance OVA.
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
    
### Launch External Instance 
- Use same procedure for External Instance(StudioWorkspace Instance / AppDeployment Instance)- Use External Instance OVA.

### Security and Networking.
- Do one of the two things below. 
    - All trafic opened between Platform Instance and External Instances.
    - Configure security rules as per Prerequisites.