---
title: "Non Root WME Execution"
id: "non-root-execution"
sidebar_label: "Non Root WME Execution"
---
---

### If the ssh user has not privileges(root/sudo) and user doesn't have privileges for install/upgrade utility softwares (non-root user excution), Please follow below steps.

:::note 
   Excute the following steps after installing the pre-requisites only for the custom non-root user excution case in the platform instance.
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
    <user> ALL=(ALL) NOPASSWD: /bin/systemctl daemon-reload, /bin/systemctl restart docker, /bin/systemctl status docker, /bin/systemctl stop docker, /bin/systemctl start docker, /usr/sbin/service docker restart, /usr/sbin/service docker start, /usr/sbin/service docker stop, /usr/sbin/service docker status, /sbin/ip link set docker0 down, /sbin/ip link del dev docker0 type bridge, /usr/bin/chown
```

- Change permission of few directories to non-root user after docker installation/upgrade
  - Have to execute these commands as a privileged user.
  - Add user to the docker group.
  - Make a user the owner of the docker systemd process
  - data directory should be owned by the user.
  - Give permission for non-root user to manage docker services, system management, /wm-runtime and /wm-data directories after docker installation/upgrade.

  ```bash
  usermod -aG docker <user>
  chown -R <user>:<user> /usr/lib/systemd/system/
  chown -R <user>:<user> /etc/sysconfig/
  chown -R <user>:<user> /etc/systemd/system/
  chown -R <user>:<user> /wm-runtime
  chown -R <user>:<user> /wm-data
  ```

- Check user permissions for jq and python
   Make sure you are able to execute jq and python commands from the non-root user

:::note 
For external no new prerequisites required please follow steps mentioned in previous page itself
:::


#### Once This is done switch to your not root user where you can  execute the WaveMaker installer for fresh setup/patch 
