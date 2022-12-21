---
title: "WaveMaker MockingBird Setup Process"
id: ""
sidebar_label: "MockingBird Setup Process"
---
---

MockingBird is a Backend API Platform for WaveMaker platform to work with API Mocking feature from Studio. This documentation describes the process for setting up MockingBird and integrate with WaveMaker Enterprise.

- MockingBird Platform to be installed on K8s Cluster, it can be hosted and managed by an organization on their own K8s Cluster

- You can setup MockingBird on any K8s Cluster

## MockingBird Platform setup Process

MockingBird setup requires you to follow the steps below.


### Step-1: Understand and setting up prerequisites

Understand and procure the [Prerequisites](/learn/on-premise/extensions/mb-prerequisites.md).

### Step-2: Choose an Kubernetes Cluster

MockingBird platform can be setup at any of the following Kubernetes clusters, but verified on GKE cluster.

1. [GKE](https://cloud.google.com/learn/what-is-kubernetes)
2. [EKS](https://aws.amazon.com/eks/)
3. [AKS](https://learn.microsoft.com/en-us/azure/aks/)

### Step-3: Install 

Start installing [Install Helm](/learn/on-premise/extensions/mb-install.md).


### Step-4: Integrating with WME platform

Once MockingBird setup is successfully installed, follow these steps to integrate to WME Platform

Integrate above installed MockingBird platform with WME [Integrate](/learn/on-premise/extensions/mb-integrate.md).


