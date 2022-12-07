---
title: "Install MockingBird Platform"
id: ""
sidebar_label: "Install MockingBird Platform"
---
---

## Setting up cluster access at JumpBox

- Once K8s Cluster is ready verify configuration using the given command

```bash
kubectl config view
```
- Cross verify both K8s server and Kubctl versions with this command

```bash
kubectl version
```

## Download deliverables

- Downnload helm package from the given link shared by WaveMaker support team.

```bash
helm command //TODO
```


### Check sha1sum 

- Verify SHA1SUM of downloaded file with the SHA1SUM given by WaveMaker support

```bash
sha1sum command //TODO
```

### Namespace creation

- Create a new namespace 

```bash
kubectl create ns mockingbird
```

### Login to docker

- Login to docker with JSON Key provided by WaveMaker support

```bash
//TODO command
```

### Create K8s secrets

- Create image pull secrets after replacing Directory-Path-to-CONFIG-JSON path //TODO
```bash Command
kubectl create secret generic mb-image-pull-secret --from-file=.dockerconfigjson=[Directory-Path-to-CONFIG-JSON]/config.json --type=kubernetes.io/dockerconfigjson -n mockingbird
```

- Create SSL cert secret with CERT_PRIVATE_KEY_FILE and CERT_FILE replaced with path values.
```bash
kubectl create secret tls mb-ssl-secret --key ${CERT_PRIVATE_KEY_FILE} --cert ${CERT_FILE}
```

#### Install Helm Chart

- Run helm command to install chart for MockingBird Platform by replacing HELM-PACKAGE and MOCKINGBIRD-DOMAIN

```bash 
helm install mockingbird [HELM-PACKAGE] -n mockingbird --set "global.domainName=[MOCKINGBIRD-DOMAIN]" --set "apimock-ingress-nginx.controller.service.loadBalancerIP=[MOCKINGBIRD-STATIC-IP]"
```  

### Map domain to Static IP reserved for MockingBird

- Map Static IP to MockingBird Domain

