---
title: "WME Setup Guide - Custom Apps Capacity"
id: "wme-setup-guide-custom-apps-capacity"
---

###### Applicable to WaveMaker Cloud alone

you have installed WM cloud separately, it provides the ability to deploy and orchestrate custom based container app environments. Adding an instance provides additional capacity for the creation of container based app-environments. To add instances, you must first launch an additional VM using the WME External Instance Image/AMI. The download links for WME External Instance Image/AMI and the corresponding checksum file (where applicable) will be provided to you by the WaveMaker team through an email communication.

1. an additional VM instance with the downloaded WME External Instance image/AMI.
2. the VM instance is in running state, you can add the instance from **Portal** by selecting **Capacity** on the left and navigating to the tab.
3. the Shard (by default a demo Shard will be created, see the next section to add Shards) to which instance needs to be added and click **Instance** [![](../assets/WME_instance1.png)](../assets/WME_instance1.png)
4. the **Name** and **Address** of the new VM Instance (: The IP address should be the IP address of the external instance just launched using the WME External Instance Image and NOT that of the WME Platform VM)
    
    1. **Port** is selected as 22 by default
    2. the credentials in the **Details** section (credentials will be shared with you by the WaveMaker team).
    3. to verify the authentication details.
    
    [![](../assets/WME_instance2.png)](../assets/WME_instance2.png)
5. **Instance** Your instance is now added.
6. the instance is added, it will be in CONFIGURING state and the instance will be setup in the background. This may take a couple of minutes
7. this is done, the instance will be ready for use when the state changes to STARTED.

#### Additional Shards

A Shard is a logical grouping or pool of machine instances for purpose of categorization. A logical grouping can help manage and separate different groups of app-environments. For instance, an enterprise can create different shards for development, testing, staging and production. Or different shards can also be created for separating external cloud provider instances from on-premise instances.

By default, a Cloud Demo Shard is created but you could add additional Shards

1. **Portal** select  **Capacity** on the left and navigate to the tab.
2. add Shard, click **Shard** button [![](../assets/WME_shard1.png)](../assets/WME_shard1.png)
3. a and , the Base URL will be generated. [![](../assets/WME_shard2.png)](../assets/WME_shard2.png)
4. the first Instance to the Shard. An instance has to be created, as specified in the previous section. An Instance already added to a Shard cannot be added to another Shard. [![](../assets/WME_shard3.png)](../assets/WME_shard3.png)

- [1\. Getting Started](/learn/installation/wavemaker-enterprise-setup-guide/)
- [2\. Launching & Initializing WME](/learn/installation/wme-setup-guide-launch-initialize/)
- [3\. Setting Up WME](/learn/installation/wme-setup-guide-access-setting/)
- [4\. Configuring WME](/learn/installation/wme-setup-guide-configuration/)
    - [Adding Users](/learn/installation/wme-setup-guide-configuration/#adding-users)
    - [Uploading License](/learn/installation/wme-setup-guide-configuration/#uploading-license)
    - [External VCS Configuration](/learn/installation/wme-setup-guide-add-external-vcs-configuration/)
    - [Development & Deployment Capacity](/learn/installation/wme-setup-guide-increasing-development-deployment-capacity/)
    - [Custom Apps Capacity](#)
- [5\. Maintaining WME](/learn/installation/wme-setup-guide-maintenance/)
- [6\. Upgrading WME](/learn/installation/wme-setup-guide-upgrading/)
