---
title: "Initialize Setup"
id: ""
sidebar_label: "Initialize Setup"
---
---

## Setup Initizlization Process

- You should have access to ssh to create a Docker container in a WME setup, and to communicate with instances including Platform, Studioworkspace, and AppDeployment.
- You can create your own user with fine-grained access or WaveMaker will create a user called `wavemaker` with its auto-generated keys.
- If you want to provide your own user, create a user with specified [prerequisites](/learn/on-premise/install-prerequisites) and ensure that the user has ssh access.

## Running WME Installer

- After downloading and extracting the WME installer, run the bash script which is displayed at the terminal as shown in the command below.

```bash
bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh
```

- When prompted, enter the interface name. For example, eth0, ens5; and confirm the IP Address.
- Provide the CIDR (Classless Inter-Domain Routing) range; CIDR is a network range allocation to a particular network address; it will tell you how many network IP addresses are available in a given network.

## Creating Own User

For providing your own user in WME setup, follow the steps below:

- When prompted for **do you want to configure your own ssh keys**, select **`y`** and provide a username and a path to the ssh key.
- With this user and key, the platform can make ssh connection to StudioWorkspace Instance and AppDeployment Instance.

[![custom user setup initialization](/learn/assets/wme-setup/setup-with-custom-user.jpg)](/learn/assets/wme-setup/setup-with-custom-user.jpg)

## WaveMaker User

For WaveMaker user, follow the steps below:

- When prompted for **do you want to configure your own ssh keys**, select the **`n`** option.
- Now the `wavemaker` user will use to communicate between the Platform, Studioworkspace, and AppDeployment Instances and for the container creation process.

[![privellaged user setup initialization](/learn/assets/wme-setup/wme-setup-with-privillaged-user.jpg)](/learn/assets/wme-setup/wme-setup-with-privillaged-user.jpg)


## Container creation

- Using the `wme-install.sh` will create containers automatically.
- After successful initialization, the script will display a URL to perform the rest of the WME setup.
- Go to  <http://Platform-Instance-IP:8080> as directed by the above command output to do the WME setup.
