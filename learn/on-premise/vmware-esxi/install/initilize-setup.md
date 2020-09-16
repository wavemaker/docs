---
title: "Initialize Setup"
id: ""
sidebar_label: "Initialize Setup"
---
---

### Initialize the WME setup

- After downloading and extracting the wme installer run the bash script which is displayed at terminal. Command will looks like below.

    ```bash
       bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh
    ```

- When prompted, enter the interface name (e.g. eth0, ens5 etc) and confirms the IPAddress.
- Provide CIDR range as described in the prerequisites above.
- After successful initialization, the script will display a URL to perform the rest of the WME setup.
- Go to  <http://Platform-Instance-IP:8080> as directed by the above command output to do the WME setup.

    [![setup initialization](/learn/assets/wme-setup/wavemaker-setup-initialization.jpg)](/learn/assets/wme-setup/wavemaker-setup-initialization.jpg)

- From WME version 10.5.1 version users can use their own user for communication between Platform, Studio Workspace and Appdeployment Instances.for use custom user for communication and operations do [prerequisites](../install-prerequisites.md) as per given steps.
- For using custom user for WME setup user need to provide username which is configured and a private key for validation, by providing **y** option for **do you want to configure your own ssh keys**.
  
  [![custom user setup initialization](/learn/assets/wme-setup/setup-with-custom-user.jpg)](/learn/assets/wme-setup/setup-with-custom-user.jpg)

- If you don't want yo use custom user for WME setup provide **n** option for **do you want to configure your own ssh keys**.

  [![privellaged user setup initialization](/learn/assets/wme-setup/wme-setup-with-privillaged-user.jpg)](/learn/assets/wme-setup/wme-setup-with-privillaged-user.jpg)

