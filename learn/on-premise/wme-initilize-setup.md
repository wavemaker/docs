---
title: "Initialize Setup"
id: ""
sidebar_label: "Initialize Setup"
---
---

### Initialize the WME setup

- After downloading and extracting the wme installer run the bash script which is displayed at terminal. Command will looks like below.
    ```
       bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh
    ```
- When prompted, enter the interface name (e.g. eth0, ens5 etc) and confirms the IPAddress.
- Provide CIDR range as described in the prerequisites above.
- After successful initialization, the script will display a URL to perform the rest of the WME setup.
- Go to  http://<Platform-Instance-IP>:8080 as directed by the above command output to do the WME setup.
    <br/><br/>
    [![](/learn/assets/wme-setup/wavemaker-setup-intialization.jpg)](/learn/assets/wme-setup/wavemaker-setup-intialization.jpg)

