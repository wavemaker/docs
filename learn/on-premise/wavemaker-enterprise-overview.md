---
title: "Welcome to WaveMaker Enterprise Guide"
id: ""
sidebar_label: "Enterprise Overview"
---
Find instructions to setup WaveMaker Enterprise using the WME Installer and WME Setup Portal.

---
Before proceeding with the set-up, see what constitutes WaveMaker Enterprise (WME). WME platform is made up of the following three components:

### WaveMaker Studio

A modern low-code platform for collaborative development of multi-device apps.

### WaveMaker Cloud

A container based platform for app deployments within a private cloud.

### Launchpad

WaveMaker's administrative console where you can configure users, additional Studio/Cloud instances for scaling, configure external VCS, etc. Launchpad is automatically installed when you setup WaveMaker Enterprise .

Internally WME utilizes Docker containers to segregate and isolate the platform components and the developer workspace as depicted below: 

[![](/learn/assets/vm_arch.png)](/learn/assets/vm_arch.png)

## Platform Containers

Platform Containers consisting of multiple internal services needed to run the WME platform like Studio, Cloud, VCS etc.. Each of these services runs in a separate Docker Container. Services talk to each other via REST service. Platform Containers make calls to the Docker Engine for operations like starting a new user container, stopping / starting a container, and more.

## User Containers

Each user gets a container for developing apps. Containers are used to isolate each user’s workspace from other users.

## App Containers

Each WaveMaker app that is deployed into the internal WaveMaker Cloud is allocated a separate container. Thus the deployed apps are also isolated from each other.