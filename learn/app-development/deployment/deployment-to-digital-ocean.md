---
title: "Configuring Digital Ocean"
id: ""
sidebar_label: "Digital Ocean"
---
---

DigitalOcean Kubernetes (DOKS) is a DigitalOcean managed Kubernetes service that lets you deploy Kubernetes clusters without the complexities of handling the container infrastructures. 
For the other providers like AWS, Azure, and GoogleCloud, only VM based deployments are supported and in this case, the container-related infrastructures need to be managed and monitored continuously manually.

### What is managing container infrastructure, and why do users prefer Kubernetes deployments?
In modern architecture, there are multiple services that are delivered over the network via APIs (for ex: our WaveMaker platform requires and runs multiple services at a time). All these services are hosted on multiple servers and configurations in various locations all coordinating their actions via network communication. This kind of distributed architecture is useful for scaling up the services. 
Now let's say. at any given point of time, service A is trying to contact service B. However Service B is down due to some infrastructure-related issues.

## VM deployment
The communication between Service A and B will fail until a dev-ops member manually goes and fixes the cause for the Service B's container failure.  
The entries of the services and their endpoints is maintained in consul and need to be updated manually.

## Kubernetes deployment

Kubernetes automatically keeps performing a health check on all its containers and in case of any failure like this, it relaunches another container with the same configuration to prevent any service communication failures.
Also, Kubernetes maintains the details of the services and their endpoints in a registry and each time a container is relaunched and re-allocated, the endpoint for the service is automatically updated. 
Autoscaling is another feature that lets users scale their applications without a radical redesign of their existing systems.

Hence, through this integration, we will be enabling the end-users to perform deployment operations on their DigitalOcean Kubernetes clusters.

## Deployment flow

Accept the DigitalOcean account token for the user. For more information, see [How to Create a Personal Access Token](https://www.digitalocean.com/docs/apis-clis/api/create-personal-access-token/). For testing, use the following token below:

```
836ae5a604051f8303efed9f46cf7a22ac369c562b7b786efa67829643ad74a5
```

## Cluster Configuration

Here, the user will provide the necessary details needed to create a new cluster or use an existing one.

Below are the processes that can be performed by an end user:
Process 1: create a cluster in their digital ocean account and deploy an application onto it.
Process 2: Use an existing cluster and deploy an application onto it.


### Process 1: Creation of Cluster Process

We will accept a few basic properties needed to launch a cluster from the end-user like below:
1. Cluster Name
2. The region to launch the cluster in
3. Cluster Capacity using:
    - Cluster Node Size - This defines the type of memory, hard disk and CPU size that would be allocated to the cluster created.
    - Cluster Node Count - this determines the number of worker nodes to be launched with the above-chosen node size. The default value for this is set to 1.

### Process 2: Use an existing cluster:
The user can choose from a pre-populated list of clusters present in his/her account (these will be fetched based on the account token that the user will provide in Step #1)

## Registry Details

Kubernetes requires a set of manifest files to be generated for application deployment onto the cluster. Hence, for the application deployment process, we are depending on the Hyscale tool. Hyscale provides us with a declarative spec for Kubernetes abstraction and docker files are automatically generated, docker images are built and pushed to the docker registry details provided in this step, and the manifests are deployed to the Kubernetes cluster resulting in the final URL.

For each deployment, an image will be created by deploying the application WAR file on tomcat from the base tomcat image. This image is then pushed to the registry based on the details provided by the end-user. Below are the details accepted from the end-user:

1. Registry Url: Currently this is fixed to `registry.hub.docker.com` as we are supporting only the docker hub registry for now.
2. Username of Docker Hub account
3. Password of Docker Hub account
4. Repository Name: To enable only private push and access of images, we will be taking the repository name from the end-user. To create a private repo in docker Hub account, please follow the steps below:

https://docs.docker.com/docker-hub/repos/#private-repositories
 
You can create an account in Docker Hub by following the steps below:
https://hub.docker.com/signup
 
## Application Configuration

Here, the app-specific deployment details are taken from the end-user.

Below are the properties accepted as input from the end-user in this step:
1. Application Memory: This is the amount of memory that needs to be allocated to deployed application. In case of a new cluster created, this value should never exceed the memory specified in the node size.
 
2. Application Replica:
Scaling of an application is accomplished by changing the number of replicas in a Deployment.
This value determines the number of pods that must be running at any given point of time.
 
:::note
- We have just upgraded to hyscale 0.9.4 jar version this morning and few fixes specific to the jar are yet to be merged. I'll notify you once these changes are merged.
- Also, the current storage space is limited in the DigitalOcean account. Hence, in case you see deployments or cluster creations failing due to storage issues, please let me know, I'll clear up the existing clusters or namespaces in the DigitalOcean account. You should be able to observe the exact cause of the failures in the logs in such cases.
:::
