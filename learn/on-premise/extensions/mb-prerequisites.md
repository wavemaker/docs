---
title: "MockingBird Prerequisites"
id: ""
sidebar_label: "What you'll need"
---
---

You can setup MockingBird on any K8s Cluster, but verified on GKE.

:::note
This document uses words like **VM**, **Nodes**, **Instance** to refer a machine.
:::

## MockingBird Setup Requirements

### Kubernetes Cluster
- K8s Cluster - v1.24.0 and above

### MockingBird Platform setup instance (JumpBox)

- JumpBox should be configures with Kubernetes Cluster access and all the kubectl, helm and docker commands must get run from the same machine.
- Make sure JumpBox in a secure zone.
- Here is the list of software packages to be installed at the JumpBox where K8s Cluster is accessible

<table>
<tbody>
	<tr><td>
	<strong>Software</strong>
	</td><td>
	<ul>
	<li>Kubctl v1.24.0 or higher</li>
	<li>Heml v3.8.0 or higher</li>
	<li>Docker 20.x or higher</li>
	</ul>
	</li>
	</td></tr>
</tbody>
</table>

### Persistent Volume creation

- Make sure following PVC's are ready before you start the setup

<table>
<tbody>
	<tr><td>
	<strong>Persistent Volume Claims</strong>
	</td><td>
	<ul>
	<li>pv-claim-k8s-mbe-redis-data</li>
	<li>pv-claim-k8s-mbe-swagger-json-data</li>
	<li>pv-claim-k8s-mbe-tomcat-logs-data</li>
	</ul>
	</li>
	</td></tr>
</tbody>
</table>

- If you are new to Kubernetes and not ready with above PVC's, refer this document [Volume Creation](/learn/on-premise/extensions/mb-persistentvolumes.md).

### Capacity Planning

Adding an instance to k8s workspace aids in the scalability of the mocking services.

### Deliverables 

WaveMaker team will share the following packages along with access keys. You should be ready by downloading below package and key files before starting the installation at JumpBox

- MockingBird Helm Package
- SHA1SUM file of MockingBird Helm Package
- Artifact Registry access key file

## IP Address and DNS Mapping

You will be needing IP Address for the following.

### IP Address

- One static IP for accessing the MockingBird platform machine from WaveMaker Platform network.

### DNS Mapping

Map a domain to the above IP for easy access.

| **Domain**              | **Domain URL**                | **Description**                                                                           |
| ---                     | ---                           | ---                                                                                       |
| MockingBird Platform    | `mockingbird.[mycompany].com`   | This domain will be used to access MockingBird Platform APIs by WME after integration   |

:::note
In the preceding table, `[mycompany]` is used as an example. You may have to replace `[mycompany]` with your appropriate domain name.
:::

### Network Communication

- Before you start installing MockingBird make sure WME setup is ready.
- Below diagram explain's the network Integration between the WaveMaker Platform Instance and MockingBird k8s Platform. Make sure MockingBird Platform domain is only accessible to WME Platform domain.

[![network-communication-between-instances](/learn/assets/wme-setup/network-communication-between-mbe-wme.jpg)](/learn/assets/wme-setup/network-communication-between-mbe-wme.jpg)
