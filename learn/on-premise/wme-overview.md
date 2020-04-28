---
title: "Welcome to WaveMaker Enterprise Guide"
id: ""
sidebar_label: "Enterprise Overview"
---
Find instructions to setup WaveMaker Enterprise, upgrade and manage the setup.

---
Before proceeding with the set-up, see what constitutes WaveMaker Enterprise (WME). WME platform is made up of the following three components:

#### Setup Wizard

A simple wizard application to setup WME on premise. 

#### WaveMaker Studio

A modern low-code platform for collaborative development of multi-device apps. 

#### WaveMaker Cloud

Consist of Containerized Cloud for User workspace and App Deployments isolation. Managed by Platform 

#### Launchpad

WaveMaker's administrative console where you can configure users, additional Studio/Cloud instances for scaling, configure external VCS, etc. Launchpad is automatically installed when you setup WaveMaker Enterprise .

#### Platform 

WaveMaker On-Premise Platform which consisting of multiple internal services needed to run the WME platform like Studio, Cloud, VCS etc.. Each of these services runs in a separate Docker Container. Services talk to each other via REST service. Platform Containers make calls to the Docker Engine for operations like starting a new user container, stopping / starting a container, and more.

#### User Workspace

Each user gets a container for developing apps. Containers are used to isolate each user’s workspace from other users. 

#### App Deployments

Each WaveMaker app that is deployed into the internal WaveMaker Cloud is allocated a separate container. Thus the deployed apps are also isolated from each other.

#### External Instances

Capacity added for User work space and App Deployments, we call it as External Instances.

Internally WME utilizes Docker containers to segregate and isolate the platform components and the developer workspace as depicted below: 

[![](/learn/assets/wme-setup/Platform-architecture.png)](/learn/assets/wme-setup/Platform-architecture.png)