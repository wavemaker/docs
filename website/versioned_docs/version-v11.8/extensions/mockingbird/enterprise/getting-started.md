---
title: "WaveMaker MockingBird Setup Process"
id: "getting-started"
sidebar_label: "Overview"
---
---

[MockingBird](/learn/app-development/services/mock-services/mock-imported-apis) is an extension that creates mocks for backend APIs in WaveMaker Studio. This documentation describes the process for setting up MockingBird and integrate it with WaveMaker Enterprise (WME).

:::note
MockingBird for WaveMaker Enterprise works on Kubernetes environment. Thus, related terminolgies are used in this series of documentation.
:::

- MockingBird Extension should be installed on K8s Cluster. It can be hosted and managed by an organization on their own K8s Cluster.

- You can setup MockingBird on any K8s Cluster.

## MockingBird Platform Setup Process

MockingBird setup requires you to follow the steps below.


### 1. Understanding and Setting up Prerequisites

Understand and procure the [Prerequisites](/learn/extensions/mockingbird/enterprise/prerequisites), including [Persisted Volume Creation](/learn/extensions/mockingbird/enterprise/persistent-volumes).

### 2. Install MockingBird Platform

Start installing [Helm Charts](/learn/extensions/mockingbird/enterprise/install).

### 3. Integrating with WME platform

Once MockingBird setup is successfully installed, follow these steps to integrate it with the WME Platform.

Integrate the above installed MockingBird extension with WME [Integrate](/learn/extensions/mockingbird/enterprise/integrate).


