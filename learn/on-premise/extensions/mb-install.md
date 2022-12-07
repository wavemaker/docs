---
title: "Install MockingBird Platform"
id: ""
sidebar_label: "Install MockingBird Platform"
---
---

## Setting up cluster access at JumpBox

- Once K8s Cluster is ready verify configuration using following command at JumpBox

```bash
kubectl config view
```

```bash
kubectl version
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

- Create a new namespace 

```bash
kubectl create ns mockingbird
```

### Login to docker

- Login to docker with JSON Key provided by support

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

### Map domain to Reserve Static IP to

- Map Static IP to MockingBird Domain

