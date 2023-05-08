---
title: "Upgrade with Non Root WME Execution"
id: "upgrade-non-root-execution"
sidebar_label: "Upgrade Non Root WME Execution"
---
---

### If the ssh user has not privileges(root/sudo) and user doesn't have privileges for install/upgrade utility softwares (non-root user excution), Please follow below steps.

 
:::note
 Make sure for Patch case the  <bold>non-root-execution-user-name</bold> is same as previously executed platform user, by default it is wavemaker if no custom user is selected , if selected make sure to use that custom user for non-root execution.
:::

#### Platform Instance

- If the user given to the Platform who does not have privileged access, then provide the below permssions for the user on Platform Instance after installing the required softwares.

- Add below permissions in sudoers file

  - Open the sudoers file by either following
   
   ```bash
       visudo
   ```
  - or by using 

    ```bash
      vi /etc/sudoers
    ```

- Give permission to manage docker services, chown, and other required softwares in the sectio of "Allow root to run any commands anywhere" by adding the following content.

  ```bash
      <non-root-execution-user-name> ALL=(ALL) NOPASSWD: /bin/systemctl daemon-reload, /bin/systemctl restart docker, /bin/systemctl status docker, /bin/systemctl stop docker, /bin/systemctl start docker, /usr/sbin/service docker restart, /usr/sbin/service docker start, /usr/sbin/service docker stop, /usr/sbin/service docker status, /sbin/ip link set docker0 down, /sbin/ip link del dev docker0 type bridge, /usr/bin/chown
  ```
- Change permission of few directories to non-root user after docker installation/upgrade
  - Have to execute these commands as a privileged user.
  - Add user to the docker group.
  - Make a user the owner of the docker systemd process
  - data directory should be owned by the user.
  - Change permission of few directories to non-root user after docker installation/upgrade.

    ```bash
        chown -R <non-root-execution-user-name>:<non-root-execution-user-name> /usr/lib/systemd/system/
        chown -R <non-root-execution-user-name>:<non-root-execution-user-name> /etc/sysconfig/
        chown -R <non-root-execution-user-name>:<non-root-execution-user-name> /etc/systemd/system/
        chown -R <non-root-execution-user-name>:<non-root-execution-user-name> /wm-runtime/setup/setup-registry-server/registry/
    ```


- Check user permissions for jq and python
   Make sure you are able to execute jq and python commands from the non-root user

 
#### For external no new prerequisites required please follow old steps it self


#### Once This is done switch to your not root user where you can  execute the WaveMaker installer for fresh setup/patch 






