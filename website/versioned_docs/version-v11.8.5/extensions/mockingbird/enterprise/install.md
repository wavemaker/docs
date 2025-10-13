---
title: "Install MockingBird Platform"
id: "install"
sidebar_label: "Install"
---
---

## Setting up cluster access at JumpBox

- Once K8s Cluster is ready, verify K8s access using the following command

```bash
kubectl config view
```
- Cross-verify both K8s server and Kubctl versions using the following command

```bash
kubectl version
```

### Namespace Creation

- Create a new namespace 

```bash
kubectl create ns mockingbird
```

## Download deliverables

- Download the helm package from the link shared by WaveMaker support team.

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

### Login to Docker/Podman

- Login to docker with JSON Key provided by WaveMaker support

```bash
cat <Service-Account> | docker login -u _json_key_base64 --password-stdin https://us-east4-docker.pkg.dev
```
- Login to podman with JSON Key provided by WaveMaker support

```bash
cat <Service-Account> | podman login -u _json_key_base64 --password-stdin us-east4-docker.pkg.dev
```

### Create K8s Secrets

- Using kubectl with docker login create image pull secrets after replacing DIR-PATH-TO-CONFIG-JSON path. By default, the path is $HOME/.docker/config.json

```bash Command
kubectl create secret generic mb-image-pull-secret --from-file=.dockerconfigjson=[DIR-PATH-TO-CONFIG-JSON]/config.json --type=kubernetes.io/dockerconfigjson -n mockingbird
```
- Using oc with podman login create image pull secrets after replacing DIR-PATH-TO-AUTH-JSON path. By default, the path is /run/user/$UID/containers/auth.json

```bash Command
oc create secret generic mb-image-pull-secret --from-file=.dockerconfigjson=[DIR-PATH-TO-AUTH-JSON]/auth.json --type=kubernetes.io/dockerconfigjson -n mockingbird
```

- Using kubectl create SSL cert secret with CERT_PRIVATE_KEY_FILE and CERT_FILE replaced with path values.

```bash
kubectl create secret tls mb-ssl-secret --key ${CERT_PRIVATE_KEY_FILE} --cert ${CERT_FILE} -n mockingbird
```
- Using oc create SSL cert secret with CERT_PRIVATE_KEY_FILE and CERT_FILE replaced with path values.

```bash
oc create secret tls mb-ssl-secret --key ${CERT_PRIVATE_KEY_FILE} --cert ${CERT_FILE} -n mockingbird
```

### Create One time Setup Values YAML

- Create values yaml file with this code snippet by replacing these placeholders with proper values [MOCKINGBIRD-DOMAIN] and [MOCKINGBIRD-STATIC-IP]

one-time-setup-values.yaml

```yaml
global:
  domainName: [MOCKINGBIRD-DOMAIN]
apimock-ingress-nginx:
  controller:
    service:
      loadBalancerIP: [MOCKINGBIRD-STATIC-IP]
```
- If deploying to openshift cluster then a property 'openshift: "true"' in one-time-setup-values.yaml

one-time-setup-values.yaml

```yaml
global:
  domainName: [MOCKINGBIRD-DOMAIN]
  openshift: "true"
apimock-ingress-nginx:
  controller:
    service:
      loadBalancerIP: [MOCKINGBIRD-STATIC-IP]
```

### Install Helm Chart

- Run helm command to install chart for MockingBird Platform by replacing HELM-PACKAGE and MOCKINGBIRD-DOMAIN

```bash 
helm install mockingbird [HELM-PACKAGE] -n mockingbird -f one-time-setup-values.yaml
```  

### Map Domain to Static IP Reserved for MockingBird

- Map Static IP to MockingBird Domain

