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
cat <Service-Account-File> | helm registry login -u _json_key_base64 --password-stdin https://us-east4-docker.pkg.dev
```

```bash
helm pull oci://us-east4-docker.pkg.dev/api-mock-server-332212/mockingbird/helm-charts/api-mock-server --version [MOCKINGBIRD-VERSION]
```


### Check sha1sum 

- Verify SHA1SUM of downloaded file with the SHA1SUM given by WaveMaker support

```bash
sha1sum api-mock-server-[MOCKINGBIRD-VERSION].tgz 
```

### Namespace creation

- Create a new namespace 

```bash
kubectl create ns mockingbird
```

### Login to docker

- Login to docker with JSON Key provided by WaveMaker support

```bash
cat <Service-Account> | docker login -u KEY-TYPE --password-stdin https://us-east4-docker.pkg.dev
```


### Create K8s secrets

- Create image pull secrets after replacing DIR-PATH-TO-CONFIG-JSON path, by default path is $HOME/.docker/config.json

```bash Command
kubectl create secret generic mb-image-pull-secret --from-file=.dockerconfigjson=[DIR-PATH-TO-CONFIG-JSON]/config.json --type=kubernetes.io/dockerconfigjson -n mockingbird
```

- Create SSL cert secret with CERT_PRIVATE_KEY_FILE and CERT_FILE replaced with path values.

```bash
kubectl create secret tls mb-ssl-secret --key ${CERT_PRIVATE_KEY_FILE} --cert ${CERT_FILE}
```
### Create ConfigMap

- Create ConfigMap for domain and Static IP by replacing [MOCKINGBIRD-DOMAIN] and [MOCKINGBIRD-STATIC-IP] with respective values

- Create mb-configmap.yaml file

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: mockingbird-cm
  namespace: mockingbird
data:
  domainName=[MOCKINGBIRD-DOMAIN]
  loadBalancerIP=[MOCKINGBIRD-STATIC-IP]
```

- Create the configmap with this command

```bash
kubectl apply -f mb-configmap.yaml  -n mockingbird
```

### Install Helm Chart

- Run helm command to install chart for MockingBird Platform by replacing HELM-PACKAGE and MOCKINGBIRD-DOMAIN

```bash 
helm install mockingbird [HELM-PACKAGE] -n mockingbird --set "global.domainName=[MOCKINGBIRD-DOMAIN]" --set "apimock-ingress-nginx.controller.service.loadBalancerIP=[MOCKINGBIRD-STATIC-IP]"
```  

### Map domain to Static IP reserved for MockingBird

- Map Static IP to MockingBird Domain

