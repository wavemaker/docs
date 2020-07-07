---
title: "WaveMaker Enterprise Architecture"
id: ""
sidebar_label: "Architecture"
---
---

## StudioWorkspace

Each user gets a container for developing apps. Containers are used to isolate each user’s workspace from the other users.

## AppDeployments

When a WaveMaker app is deployed in WaveMaker Cloud, it allocates a separate container for each app. Thus, the deployed apps are independent of each other.

## Instances

### WaveMaker Platform Instance

WaveMaker On-Premise Platform consists of multiple internal services to run WaveMaker Studio, Cloud, VCS, and more. Each of these services runs in a separate [Docker Container](https://www.docker.com/resources/what-container) and services talk to each other via REST services.

![platform architecture](/learn/assets/wme-setup/platform-architecture.png)

<br>

Platform Containers work to make calls to the Docker engine to perform operations like starting a new user container, starting or stopping a container, and more.

![vm architecture](/learn/assets/vm_arch.png)

### StudioWorkspace Instance

You add capacity for the StudioWorkspace Instance.

### AppDeployment Instance

You add capacity for the AppDeployment Instance.

WME internally utilizes Docker containers to segregate and isolate the platform components and the developer workspace.