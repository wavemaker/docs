---
title: "WaveMaker Enterprise Architecture"
id: "architecture"
sidebar_label: "Architecture"
---
---

## Instances

Instances are like host computers where you can do so much more than just storing and managing data to run the WaveMaker Enterprise (WME) infrastructure. There are three types of instances in WME.

### WaveMaker Platform Instance

WaveMaker On-Premise Platform consists of multiple internal services to run WaveMaker Studio, Cloud, VCS, and more. Each of these services runs in a separate [Docker Container](https://www.docker.com/resources/what-container) and services talk to each other via REST services.

![platform architecture](/learn/assets/wme-setup/platform-architecture.png)

 

Platform Containers work to make calls to the Docker engine to perform operations like starting a new user container, starting or stopping a container, and more.

![vm architecture](/learn/assets/vm_arch.png)

### StudioWorkspace Instance

Each user gets a container for developing apps. Containers are used to isolate each user’s workspace from the other users.

You add capacity for the StudioWorkspace Instance.

### AppDeployments Instance

When a WaveMaker app is deployed in WaveMaker Cloud, it allocates a separate container for each app. Thus, the deployed apps are independent of each other.

You add capacity for the AppDeployment Instance.

:::note
WME internally utilizes Docker containers to segregate and isolate the platform components and the developer workspace.
:::