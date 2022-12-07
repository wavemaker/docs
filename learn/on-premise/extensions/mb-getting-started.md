---
title: "WaveMaker MockingBird Setup Process"
id: ""
sidebar_label: "MockingBird Setup Process"
---
---

MockingBird is a Backend API Platform to WaveMaker platform to mock imported APIs from Studio. MockingBird to be installed on K8s Cluster, it can be hosted and managed by an organization on their own K8s Cluster

You can setup MockingBird on any K8s Cluster

This documentation describes the process for setting up MockingBird and integrate with WaveMaker Enterprise.

## MockingBird Platform setup Process

MockingBird setup requires you to follow the steps below. Once MockingBird setup is done there is one more step to integrate installed MockingBird 


### Step-1: Understand prerequisites

Understand and procure the [Prerequisites](/learn/on-premise/extensions/mb-prerequisites.md).

### Step-2: Choose an infrastructure provider

MockingBird platform can be setup at any of the following Kubernetes clusters

1. [GKE](https://cloud.google.com/learn/what-is-kubernetes)
2. [EKS](https://aws.amazon.com/eks/)
3. [AKS](https://learn.microsoft.com/en-us/azure/aks/)
4. [Minikube](https://minikube.sigs.k8s.io/docs/start/)

### Step-3: Install 

Start installing, using the HELM package [Install Helm](/learn/on-premise/extensions/mb-install.md).


### Step-4: Integrating with WME platform

Once MockingBird setup is successfully installed, follow these steps to integrate to WME Platform

Integrate above installed MockingBird platform with WME [Integrate](/learn/on-premise/extensions/mb-integrate.md).


