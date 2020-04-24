---
title: "WaveMaker Integrates with DigitalOcean Kubernetes for App Deployments"
author: Sanjana Raheja
---

WaveMaker platform's one-click deploy feature now enables applications to be deployed to Kubernetes clusters on Digital Ocean cloud. 

You can configure the deployment topology as per your requirement and then with a single  button click, WaveMaker platform's deploy feature generates the docker files needed to build images, generates the K8S YAML files needed for deployment and triggers the K8S APIs for deployment. 
Customer's don't have to write even a single line of K8S YAML file!!

As we are aware, the Release Management Cycle for wavemaker apps offers a pre-defined set of App delivery phases which enables App progression through multiple phases like Demo, Stage and Live phase and let's you thoroughly verify your apps before taking them to the live environment.

To configure the Stage and Live phases, apart from the previously existing and supported cloud providers like Google Cloud Platform, Microsoft Azure and AWS, you can now choose to host your application on a DigitalOcean Kubernetes cluster, which is our latest cloud provider addition to the platform.

This is the first Kubernetes based cloud provider supported by the WaveMaker Platform !! 

Let us introduce you to the DigitalOcean Kubernetes cluster and walk you through the benefits of a Kubernetes based cloud provider and its deployments. 

<!-- truncate -->


### Introduction to DigitalOcean Kubernetes

[DigitalOcean Kubernetes (DOKS)](https://www.digitalocean.com/docs/kubernetes/) is a managed Kubernetes service that lets you deploy Kubernetes clusters without the complexities of handling the control plane and containerized infrastructure. Clusters are compatible with standard Kubernetes toolchains and integrate natively with DigitalOcean Load Balancers and block storage volumes.


### Why to choose Kubernetes based deployments?

Before getting to the "why", let's understand first what basically is a kubernetes based deployment?
To understand the scope of this, let us first go through and compare the different era's of app deployments:

**Traditional deployment era**: Every application was run on a physical server. Since no boundaries were defined for the applications in the physical server, there were instances when one application would take up all the resources resulting in all other applications to underpeform. Scaling of applications was difficult as resources were underutilized.

**Virtualized deployment era**: Virtualization being the solution for shortcomings of the traditional deployments, also provided security of application's information as the applications were isolated between the VMs.

**Container deployment era**: Containers, as we all know, are considered as lightweight systems as they are decoupled from the underlying infrastructure and at the same time have their own fileSystem, CPU, memory, process space etc. to maintain isolation between applications running.
Containerized based deployments became popular due to multiple benefits like resource isolation, resource utilization etc. 

[![screenshot](/learn/assets/Containerized_Deployment_DO_blog.png)](/learn/assets/Containerized_Deployment_DO_blog.png)

So then why do you need Kubernetes and what can be done with it?
<!-- truncate -->
Kubernetes deployments, you can say, are nothing but containerized deployments only with Kubernetes providing you with a framework to manage container resources, scaling and failover for your application.
For ex: if a container goes down, another container needs to start. Wouldn’t it be easier if this behavior was handled by a system? 
Kubernetes helps us with this process and many other features that are good for the infrastructures!

* Auto Scaling, 
* Self healing,
* Service Discovery,
* Storage orchestration
are few among the [features](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/#why-you-need-kubernetes-and-what-can-it-do) that the application developer receives on adapting to Kubernetes based cloud provider deployments.

So now that we understand the benefits of a Kubernetes based deployment, let us understand how WaveMaker platform simplifies the deployment process.

### What does an application developer need to deploy his app on DigitalOcean Cloud?
Well, to deploy your application on DigitalOcean cloud, all you would need is a [DigitalOcean account](https://www.digitalocean.com/).

There are two stages involved for setting up the live/stage phase of the release pipeline with the DigitalOcean cloud provider:
* Configuration of DigitalOcean cluster
* Deployment of application to DigitalOcean cluster

[![screenshot](/learn/assets/Supported_Cloud_Provider_DO.png)](/learn/assets/Supported_Cloud_Provider_DO.png)

### Configuration of DigitalOcean cluster

So, the application developer choses the DigitalOcean Provider from the list of providers and provides his DigitalOcean access token. 

To spin up a new cluster in his/her account, we ask the app developer for minimal configuration details like:
* cluster region, 
* cluster name and 
* cluster capacity. 

[![screenshot](/learn/assets/deploy_do_new_cluster.png)](/learn/assets/deploy_do_new_cluster.png)

All the app developer would have to do is provide three field's config values and the platform would automatically take care of spinning up a new cluster in his account. 

Also, the app developer can as well choose to use an existing cluster already present in his account.
[![screenshot](/learn/assets/deploy_do_existing_cluster.png)](/learn/assets/deploy_do_existing_cluster.png)

This cluster is then associated with the live/stage phase of the release pipeline.

### Deployment of application to DigitalOcean cluster
Once the live/stage phase of the release pipeline is associated with a cluster in DigitalOcean account, the app developer can now deploy his application to with a single **“Push”** button click from the Demo phase. 

[![screenshot](/learn/assets/Push_To_DO.png)](/learn/assets/Push_To_DO.png)

There is no need for the app developer to write K8S specific yaml files or build any app images!!

Platform automatically handles the generation of dockerfiles, building of docker image, generating the K8S manifest files and deploys the application to cluster using K8S API's.

Also, the app memory and number of pod replicas are completely configurable from UI by the app developer enabling him to take benefit of kubernetes features.
[![screenshot](/learn/assets/deploy_do_app_configuration.png)](/learn/assets/deploy_do_app_configuration.png)

The good part is the app developer need not wait for the cluster creation process or the app deployment process as these are executed as jobs and run in the background enabling app developer to continue with the development.

### What happens post the app is deployed?
Now post deployment, the app developer is returned with a Service URL which is the URL of the deployed application.

[![screenshot](/learn/assets/deploy_do_deployment.png)](/learn/assets/deploy_do_deployment.png)

Not only is the application deployed on a kubernetes cluster, but the platform also returns deployment specific information like
* namespace at which the application has been deployed, 
* the image used for the deployment process, 
* the cluster version and 
* worker node size being used etc. 

to the app developer to enable to debug the application deployment further using the kubectl commands for the associated kubernetes cluster or debug the image in the associated registry.

[![screenshot](/learn/assets/deploy_do_providerinfo1.png)](/learn/assets/deploy_do_providerinfo1.png)

[![screenshot](/learn/assets/deploy_do_providerinfo2.png)](/learn/assets/deploy_do_providerinfo2.png)

Go ahead and try out your app's first ever kubernetes deployment and let us know your experience!!

### References
* To know more about Kubernetes, please refer:
  https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/
* To know more about DigitalOcean Kubernetes, please refer
  https://www.digitalocean.com/docs/kubernetes/
* Detailed process for deploying a WaveMaker application on DigitalOcean cluster
  https://www.wavemaker.com/learn/app-development/deployment/deployment-to-digital-ocean









