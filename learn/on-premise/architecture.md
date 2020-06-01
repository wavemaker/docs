---
title: "WaveMaker Enterprise Architecture"
id: ""
sidebar_label: "About Enterprise"
---
---

## Enterprise Components

WaveMaker Enterprise consists of the following four components.

### Config Portal

A Config Portal is a simple wizard application to setup WME on on-premise environment.

### Launchpad

Launchpad is a WaveMaker's administrative console where you can configure users, additional Studio/Cloud instances for scaling, configure external VCS, etc. Launchpad is automatically installed when you setup WaveMaker Enterprise.

### WaveMaker Studio

A modern low-code platform for collaborative development of multi-device apps.

### WaveMaker Cloud

Consist of Containerized Cloud for User workspace and App Deployments isolation. Managed by Platform.


## WaveMaker Enterprise Architecture

### 1. Platform

WaveMaker On-Premise Platform which consisting of multiple internal services needed to run the WME platform like Studio, Cloud, VCS etc.. Each of these services runs in a separate Docker Container. Services talk to each other via REST service. Platform Containers make calls to the Docker Engine for operations like starting a new user container, stopping / starting a container, and more.

### 2. User Workspace

Each user gets a container for developing apps. Containers are used to isolate each user’s workspace from other users.

### 3. App Deployments

Each WaveMaker app that is deployed into the internal WaveMaker Cloud is allocated a separate container. Thus the deployed apps are also isolated from each other.

### 4. External Instances

Capacity added for User Workspace and App Deployments, we call it as External Instances.

Internally WME utilizes Docker containers to segregate and isolate the platform components and the developer workspace as depicted below.

[![platform architecture](/learn/assets/wme-setup/platform-architecture.png)](/learn/assets/wme-setup/platform-architecture.png)

## WaveMaker Enterprise Roles and their activities

### Setup Admin

- Procure Required Infrastructure and Other Prerequisites
- Setup WaveMaker Enterprise
- Create SuperAdmin
- Manages the setup and upgrades

### Super Admin

- Onboarding Users
- Adding VCS to WaveMaker Enterprise Platform
- Add Instances
- Configure Pipelines

### Enterprise Admin

- Project Management
- Artifact Management

### Studio User

- Developer who builds WaveMaker apps using Studio
