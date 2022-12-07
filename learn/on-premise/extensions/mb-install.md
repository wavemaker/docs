---
title: "Install MockingBird Platform"
id: ""
sidebar_label: "Install MockingBird Platform"
---
---

## Setting up cluster access at JumpBox

- Once K8s is ready verify K8s using following command

```bash
kubectl config view
```

## Download deliverables

- Downnload helm package shared by WaveMaker support team.

```bash
helm command //TODO
```


### Check sha1sum 
- Checksum(sha1sum) file for above helm package with sha1sum shared by WaveMaker support team.

```bash
sha1sum command //TODO
```

### Namespace creation

- Create a new namespace named(mockingbird) to deploy MockingBird APIs- 'mockingbird'

```bash
kubectl create ns mockingbird
```

### Login to docker

- Login to docker with JSON Key provided by support

```bash
//TODO command
```

### Create K8s secrets

- Create image pull secrets
```bash Command
kubectl create secret generic mb-image-pull-secret --from-file=.dockerconfigjson=[Directory-Path-to-CONFIG-JSON]/config.json --type=kubernetes.io/dockerconfigjson -n mockingbird
```

- Create SSL cert secret
  ```bash
    //TODO Command
  ```

#### Install Helm Chart

- Run helm command to install chart for MockingBird Platform

```bash 
	//TODO Helm command
  ```  

### Reserve Static IP to platform

- Map Static IP to your MockingBird Domain

```bash 
	//TODO Helm command
  ```  
