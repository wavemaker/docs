---
title: "Configuring DigitalOcean Deployment"
id: ""
sidebar_label: "DigitalOcean"
---
---

DigitalOcean Kubernetes (DOKS) is a DigitalOcean managed Kubernetes service that lets you deploy Kubernetes clusters without the complexities of handling the container infrastructures. This is the first Kubernetes deployment provider supported by the WaveMaker platform.

Following are the few benefits of Kubernetes deployments:

- Auto Scaling
- Auto Recovery
- Service Discovery

WaveMaker allows you to deploy your app to your DigitalOcean account for Live phase(and Stage phase for WME users). [Know more about App Phases from here](/learn/app-development/deployment/release-management/).

To deploy your app to DigitalOcean account, you need to configure the Live phase(or Stage phase for WME).

:::note
This document covers the Live Phase configuration for your DigitalOcean account and is a part of the [Manage Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/)
:::

## Stages in DigitalOcean Deployment:

1. Configuration of DigitalOcean cluster
2. Deployment of application to DigitalOcean cluster

## Stage-1: Configuration of DigitalOcean cluster:

1. From Apps Portal, select the project.
2. Click Configure on the Live Phase option.
3. While configuring the Live phase choose to host your app on the DigitalOcean cloud provider. Post choosing the DigitalOcean cloud provider, you will observe a configuration dialog comprising of multiple steps. Let's talk in detail about each step below.

## 1. DigitalOcean account and cluster details

Enter your **DigitalOcean access token** to proceed with the configuration. For more information, see [How to Create a Personal Access Token](https://www.digitalocean.com/docs/apis-clis/api/create-personal-access-token/).

[![](/learn/assets/deploy_do_setup.png)](/learn/assets/deploy_do_setup.png)

Post providing your access token, you will be able to see options to configure a new cluster or use an existing cluster.

**Process 1: Creation of a cluster:**

[![](/learn/assets/deploy_do_new_cluster.png)](/learn/assets/deploy_do_new_cluster.png)

You need to provide the necessary details needed to launch a cluster:
1. Cluster Name
2. The region for launching the cluster
3. Cluster Capacity using:
    - Cluster Node Size - This defines the type of memory, hard disk and CPU size that you would want to allocate to the worker node created.
    - Cluster Node Count - This determines the number of worker nodes to be launched with the above chosen node size in the cluster. The default value for this is set to 1.

**Process 2: Use an existing cluster:**

[![](/learn/assets/deploy_do_existing_cluster.png)](/learn/assets/deploy_do_existing_cluster.png)

You can choose from a pre-populated list of clusters present in your account (these will be fetched based on the access token that you provide).

## 2. Registry Details

Since it is comprises of  Image based deployment, we will be needing your registry account details to push the application image to the registry and pull the same at the time of deployment of application to DigitalOcean cluster.

[![](/learn/assets/deploy_do_registry_details.png)](/learn/assets/deploy_do_registry_details.png)

1. Registry Url: Currently this is fixed to `registry.hub.docker.com` as we are supporting only the docker hub registry for now.
2. Username of Docker Hub account
3. Password of Docker Hub account
4. Repository Name: To enable only private push and access of images, you need to provide private repository name. To create a private repo in Docker Hub account, please follow the steps below:

    https://docs.docker.com/docker-hub/repos/#private-repositories
 
## 3. Application Configuration

You need to provide Application specific deployment configuration in this step.

[![](/learn/assets/deploy_do_app_configuration.png)](/learn/assets/deploy_do_app_configuration.png)

1. Application Replica: Scaling of an application is accomplished by changing the number of replicas in a Deployment.
    This value determines the number of pods that must be running within the worker nodes at any given point of time.

2. Application Memory: This is the amount of memory that needs to be allocated to deployed application. In case of a new cluster created, this value should never exceed the memory specified for the worker node size.

Once all the configuration details are provided across the steps, you can click on Configure button to trigger the cluster configuration process. 

In case you have configured a **new cluster**, the phase creation is initiated and you can track the progress of the cluster creation process under the jobs section of the respective project in Studio. 

[![](/learn/assets/deploy_do_configure_new_cluster.png)](/learn/assets/deploy_do_configure_new_cluster.png)

[![](/learn/assets/deploy_do_configuring.png)](/learn/assets/deploy_do_configuring.png)

[![](/learn/assets/deploy_do_jobs_cluster_configuration.png)](/learn/assets/deploy_do_jobs_cluster_configurtion.png)

On clicking on the "Configure" button, in case if you have chosen an **existing cluster**, the Live phase is associated with the cluster details chosen.

[![](/learn/assets/deploy_do_configure_existing_cluster.png)](/learn/assets/deploy_do_configure_existing_cluster.png)


## Stage-2: Deployment of application to DigitalOcean cluster:

Once the live phase configuration is completed, you can trigger the deployment to DigitalOcean cluster by clicking on push option present in the Demo phase.

We are depending on the **HyScale tool** for the deployment process.

[![](/learn/assets/deploy_do_cluster_configured.png)](/learn/assets/deploy_do_cluster_configured.png)

Once you click on the "Push" button, you will observe a [config profile window](/learn/app-development/deployment/configuration-profiles). Configure the details as per your requirement and click on "Next" and then "Push".

[![](/learn/assets/deploy_do_push_to_live.png)](/learn/assets/deploy_do_push_to_live.png)

[![](/learn/assets/deploy_do_deploying.png)](/learn/assets/deploy_do_deploying.png)

The deployment progress can be tracked in the Jobs section of the respective project as shown below.

[![](/learn/assets/deploy_do_jobs_deployment.png)](/learn/assets/deploy_do_jobs_deployment.png)

Post deployment is successful, you will be able to see options to view the deployment details or go to the deployed URL.

[![](/learn/assets/deploy_do_deployment.png)](/learn/assets/deploy_do_deployment.png)

On clicking of the "View Details" tab, you will be able to view the deployment and Live phase specific information like ImageName, the namespace at which the application is deployed, the default storage class and cluster details etc. You may then use these details to perform registry or cluster specific operation or debugging.

[![](/learn/assets/deploy_do_providerinfo1.png)](/learn/assets/deploy_do_providerinfo1.png)

[![](/learn/assets/deploy_do_providerinfo2.png)](/learn/assets/deploy_do_providerinfo2.png)
