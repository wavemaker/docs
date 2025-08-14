---
title: "Non Root WME Execution"
id: "non-root-execution"
sidebar_label: "Non Root WME Execution"
---
---

### If the ssh user does not have privileges(root/sudo), Please follow below steps.


#### Platform Instance

- Please add below content in sudoers file so that the non-root-user can excute the commands mentioned in the below content as a previliged user. 

```bash
sudo echo "<non-root-execution-user-name> ALL=(ALL) NOPASSWD: /bin/systemctl daemon-reload, /bin/systemctl restart docker, /bin/systemctl status docker, /bin/systemctl stop docker, /bin/systemctl start docker, /usr/sbin/service docker restart, /usr/sbin/service docker start, /usr/sbin/service docker stop, /usr/sbin/service docker status, /sbin/ip link set docker0 down, /sbin/ip link del dev docker0 type bridge, /usr/bin/chown" >> /etc/sudoers
```

#### For an Example

```bash
sudo echo "non-root-username ALL=(ALL) NOPASSWD: /bin/systemctl daemon-reload, /bin/systemctl restart docker, /bin/systemctl status docker, /bin/systemctl stop docker, /bin/systemctl start docker, /usr/sbin/service docker restart, /usr/sbin/service docker start, /usr/sbin/service docker stop, /usr/sbin/service docker status, /sbin/ip link set docker0 down, /sbin/ip link del dev docker0 type bridge, /usr/bin/chown" >> /etc/sudoers
```

- Change permission for few directories to non-root user after docker installation/upgrade

  ```bash
  sudo usermod -aG docker <user>
  sudo chown -R <non-root-execution-user-name>:<non-root-execution-user-name> /usr/lib/systemd/system
  sudo chown -R <non-root-execution-user-name>:<non-root-execution-user-name> /etc/sysconfig
  sudo chown -R <non-root-execution-user-name>:<non-root-execution-user-name> /etc/systemd/system
  sudo chown -R <non-root-execution-user-name>:<non-root-execution-user-name> /wm-runtime
  sudo chown -R <non-root-execution-user-name>:<non-root-execution-user-name> /wm-data
  ```


- Check user permissions for jq and python. Make sure you are able to execute jq and python commands from the non-root user

:::note 
For external no new prerequisites required please follow steps mentioned in previous page itself
:::


#### Once This is done switch to your not root user where you can  execute the WaveMaker installation for fresh setup/patch 
