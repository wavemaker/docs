---
title: "WaveMaker platform integrates DigitalOcean Kubernetes cloud provider for app deployments"
author: Sanjana Raheja
---

As a part of the Release Management Cycle for wavemaker apps, WaveMaker Platform offers a pre-defined set of App delivery phases which enables App progression through multiple phases like Demo, Stage and Live phase. 
WaveMaker now supports app deployments to a DigitalOcean kubernetes cluster for Live/Stage phases. 
DigitalOcean Kubernetes is the first supported kubernetes cloud provider for app deployments by the WaveMaker platform.

<!-- truncate -->


### Introduction to DigitalOcean Kubernetes

DigitalOcean Kubernetes (DOKS) is a managed Kubernetes service that lets you deploy Kubernetes clusters without the complexities of handling the control plane and containerized infrastructure. Clusters are compatible with standard Kubernetes toolchains and integrate natively with DigitalOcean Load Balancers and block storage volumes.

Auto Scaling, Auto Recovery and Service Discovery are among the few advantages that the application developer receives on adapting to Kubernetes based cloud provider deployments.

### Stages involved
There are two stages involved for setting up the live/stage phase of the release pipeline with the DigitalOcean cloud provider:
* Configuration of DigitalOcean cluster
* Deployment of application to DigitalOcean cluster

[![screenshot](/learn/assets/Supported_Cloud_Provider_DO.png)](/learn/assets/Supported_Cloud_Provider_DO.png)

### Configuration of DigitalOcean cluster

As a part of the configuration phase, the application developer will be able to create a new kubernetes cluster in his/her DigitalOcean account by providing minimal cluster specific configuration information.
The information would contain details like the 
* cluster region, 
* cluster name and 
* cluster capacity. 

[![screenshot](/learn/assets/deploy_do_new_cluster.png)](/learn/assets/deploy_do_new_cluster.png)

Using the cluster information entered by the application developer, we spin up a cluster in their respective DigitalOcean account with the specified configuration. 
This cluster is then associated with the live/stage phase of the release pipeline.

Also, if the application developer already has a cluster spinned up in his/her DigitalOcean account and would like to use the existing infrastructure for his app deployment, he can simply go ahead and associate the phase with the required cluster.

[![screenshot](/learn/assets/deploy_do_existing_cluster.png)](/learn/assets/deploy_do_existing_cluster.png)

### Deployment of application to DigitalOcean cluster
Once the live/stage phase of the release pipeline is associated with a cluster in DigitalOcean account, the application developer can go ahead and deploy the application on the DigitalOcean cluster by simply clicking on the “Push” button from the Demo phase. 

[![screenshot](/learn/assets/Push_To_DO.png)](/learn/assets/Push_To_DO.png)

Few points to note here are:
* The application deployment here is an image based deployment 
* We are internally depending on the Hyscale tool to abstract the entire deployment process for us(which involves generation of dockerfiles, building of docker image, generating the kubernetes manifest files and deployment to kubernetes cluster using apis).

On successful deployment of the application onto the cluster, a Service URL is returned back to the application developer which is the URL of the deployed application.

Apart from the Service URL, there is application deployment specific information also available post deployment like 
* namespace at which the application has been deployed, 
* the image used for the deployment process, 
* the cluster version and 
* worker node size being used etc. 
The application developer can use these details to debug the application deployment further using the kubectl commands for his kubernetes cluster or debug the image in the associated registry.

### References
* To know more about DigitalOcean Kubernetes, please refer
  https://www.digitalocean.com/docs/kubernetes/
* Detailed process for deploying a WaveMaker application on DigitalOcean cluster
  https://www.wavemaker.com/learn/app-development/deployment/deployment-to-digital-ocean









