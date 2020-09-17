---
title: "Initialize Setup"
id: ""
sidebar_label: "Initialize Setup"
---
---

### Initialize the WME setup

- WaveMaker Platform needs users for ssh access between instances(Platform and Studioworkspace Instance, AppDeployment Instance) and also for creating Docker container in WME setup.
- After creating containers with user, will use the user for ssh from containers to platform instances.
- For above operations user can provide their own user with fine-grained access or Platform will create user called `wavemaker` with it auto-generated keys.
- If you want to provide your own user,create user with specified [prerequisites](../install-prerequisites.md) and user must and should have ssh access.
- After downloading and extracting the wme installer run the bash script which is displayed at the terminal. Command will looks like below.

    ```bash
       bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh
    ```

- When prompted, enter the interface name (e.g. eth0, ens5 etc) and confirms the IPAddress.
- Provide CIDR range as described in the prerequisites above.
- In WME setup process providing your own user select **`y`** option for **do you want to configure your own ssh keys** and then give username and path to ssh key.
- With this user and key, Platform should able to make ssh connection to StudioWorkspace Instance and App Deployment Instance.

  [![custom user setup initialization](/learn/assets/wme-setup/setup-with-custom-user.jpg)](/learn/assets/wme-setup/setup-with-custom-user.jpg)


- If you want go with `wavemaker` user for WME setup provide **`n`** option for **do you want to configure your own ssh keys**.
- Now the `wavemaker` user will use to communication between the Platform and Studioworkspace , APPDeployment Instances and for container creation process .

  [![privellaged user setup initialization](/learn/assets/wme-setup/wme-setup-with-privillaged-user.jpg)](/learn/assets/wme-setup/wme-setup-with-privillaged-user.jpg)

- After successful initialization, the script will display a URL to perform the rest of the WME setup.
- Go to  <http://Platform-Instance-IP:8080> as directed by the above command output to do the WME setup.
