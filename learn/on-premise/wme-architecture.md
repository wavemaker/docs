---
title: "WaveMaker Enterprise Architecture"
id: ""
sidebar_label: "Architecture"
---

Before proceeding with the set-up, see what constitutes WaveMaker Enterprise (WME).

## WaveMaker Enterprise Components

### 1. Config Portal

A simple wizard application to setup WME on premise.

### 2. Launchpad

WaveMaker's administrative console where you can configure users, additional Studio/Cloud instances for scaling, configure external VCS, etc. Launchpad is automatically installed when you setup WaveMaker Enterprise .

### 3. WaveMaker Studio

A modern low-code platform for collaborative development of multi-device apps.

### 4. WaveMaker Cloud

Consist of Containerized Cloud for User workspace and App Deployments isolation. Managed by Platform .

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

## Release Policy

WaveMaker releases its enterprise version once stabilized on WaveMaker Online Platform.

[Check out full list of releases here.](/learn/wavemaker-release-notes#current-release-details)
