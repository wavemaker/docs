---
title: "Passivate Containers"
id: ""
sidebar_label: "Passivate Containers"
---
---



## Passivate containers in StudioWorkspace/AppDeployment Instances from the launchpad

- In order to upgrade WME, it is mandatory to passivate the containers in StudioWorkspaceInstance and AppDeploymentInstance.
- If the user upgrading from WME 11.2.x to the latest version of WME , then there is **no need** to passivate the containers in StudioWorkspace/AppDeployment Instances.

### Upgrading from version 10.x.x to 11.x.x

- Following are the steps to passivate the containers before running patch.
 
  - After logging into launchpad in your WME setup go to the Developer Workspace/App Deployement Tab, and then go to the container as shown in the below image

  - Select the containers that are running, hibernate those containers one after the other by hitting the stop button as shown in the image below.
  
  [![stop_conainers](/learn/assets/wme-setup/upgrade-wme-setup/hibernate.png)](/learn/assets/wme-setup/upgrade-wme-setup/hibernate.png)

  - Select **confirm** to hibernate the container.

  [![confirm_hibernate](/learn/assets/wme-setup/upgrade-wme-setup/confirm-hibernation.png)](/learn/assets/wme-setup/upgrade-wme-setup/confirm-hibernation.png)

  - Wait till the state is changed to stop as shown in the image below. After the container state changes to stop, you can passivate them by hitting the passivate button.

  [![hibernated_container](/learn/assets/wme-setup/upgrade-wme-setup/containers-stop.png)](/learn/assets/wme-setup/upgrade-wme-setup/containers-stop.png)

  - Select **confirm** to passivate the container.

  [![passivate_container](/learn/assets/wme-setup/upgrade-wme-setup/passivate-confirmation.png)](/learn/assets/wme-setup/upgrade-wme-setup/passivate-confirmation.png)

  - **Alternatively**, you can passivate all the hibernated containers in one click. To do this, follow the steps provided below.
   
    - After **hibernate** all the containers, go to **Developer Capacity** and hit the **Passivate** button shown in the below image. This will passivate all the Hibernated containers in the Instance.

    [![instance_passivate](/learn/assets/wme-setup/upgrade-wme-setup/instance-passivate.png)](/learn/assets/wme-setup/upgrade-wme-setup/instance-passivate.png) 

    - Check the container status and wait till their state changes to **Passivated**.

    [![conatiners_passivated](/learn/assets/wme-setup/upgrade-wme-setup/containers-passivate.png)](/learn/assets/wme-setup/upgrade-wme-setup/containers-passivate.png)
   

### Upgrading WME 11.1.x to WME 11.2.x or higher   


- Following are the steps to passivate the containers before running patch.
 
  - After logging into launchpad in your WME setup go to the Developer Workspace Tab, and then go to the container as shown in the below image

  - Select the containers that are running, hibernate those containers one after the other by hitting the stop button as shown in the image below.
  
  [![stop_conainers](/learn/assets/wme-setup/upgrade-wme-setup/container-hibernate.png)](/learn/assets/wme-setup/upgrade-wme-setup/container-hibernate.png)

  - Select **confirm** to hibernate the container.

  [![confirm_hibernate](/learn/assets/wme-setup/upgrade-wme-setup/container-confirm-hibernation.png)](/learn/assets/wme-setup/upgrade-wme-setup/container-confirm-hibernation.png)

  - Wait till the state is changed to stop as shown in the image below. After the container state changes to stop, you can passivate them by hitting the passivate button.

  [![hibernated_container](/learn/assets/wme-setup/upgrade-wme-setup/passivate-containers-stop.png)](/learn/assets/wme-setup/upgrade-wme-setup/passivate-containers-stop.png)

  - Select **confirm** to passivate the container.

  [![passivate_container](/learn/assets/wme-setup/upgrade-wme-setup/passivate-confirmation.png)](/learn/assets/wme-setup/upgrade-wme-setup/passivate-confirmation.png)

  - **Alternatively**, you can passivate all the hibernated containers in one click. To do this, follow the steps provided below.
   
    - After **hibernate** all the containers, go to **Developer Capacity** and hit the **Passivate** button shown in the below image. This will passivate all the Hibernated containers in the Instance.

    [![instance_passivate](/learn/assets/wme-setup/upgrade-wme-setup/container-instance-passivated.png)](/learn/assets/wme-setup/upgrade-wme-setup/container-instance-passivated.png) 

    - Check the container status and wait till their state changes to **Passivated**.

    [![conatiners_passivated](/learn/assets/wme-setup/upgrade-wme-setup/container-passivated.png)](/learn/assets/wme-setup/upgrade-wme-setup/container-passivated.png)


- Do the same for rest of the StudioWorkspace/AppDeployment instances.
- After passivating all the containers in StudioWorkspace/AppDeployment instances, you can proceed with the patch.    