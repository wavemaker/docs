---
title: "MockingBird Prerequisites"
id: ""
sidebar_label: "What you'll need"
---
---

You can setup MockingBird on any K8s Cluster, but verified on EKS, AKS and GKE.

:::note
This document uses words like **VM**, **Nodes**, **Instance** to refer a machine.
:::

## MockingBird Setup System Requirements

K8s Cluster - v1.24.0 and above

MokingBird Helm Chart: v0.7.0 and above
GCR/GCP Artifact repo key shipped by support team
Domain name for MockingBird platform(mockingbird.<domainname>.com)
SSL Certificate for above MockingBird domain

### MockingBird Platform setup instance configuration(JumpBox)

<table><tbody><tr><td><strong>Memory</strong></td><td><ul><li>Minimum 2GB</li></ul></td></tr><tr><td><strong>CPU</strong></td><td><ul><li>1-cores, single CPU system</li></ul></td></tr><tr><td><strong>Hard Disk</strong></td><td><ul><li>Minimum&nbsp;50 GB to be allocated</li></td></tr><tr><td><strong>Host OS</strong></td><td><ul><li>Ubuntu 18.04.5/20.04.2.0 LTS;  RHEL 7.x/8.x</li><li>Kernel 4.4 or latter</li><li>Architecture x86</li></ul></td></tr>
<tr><td><strong>Software</strong></td><td><ul><li>Kubctl v1.24.0 or higher</li><li>Heml v3.8.0 or higher</li></ul></li></td></tr></tbody></table>

### MockingBird K8s Cluster Master & Worker nodes configuration

<table><tbody><tr><td><strong>Memory</strong></td><td><ul><li>Minimum 8GB RAM</li></ul></td></tr><tr><td><strong>CPU</strong></td><td><ul><li>2-cores, single CPU system</li></ul></td></tr><tr><td><strong>Hard Disk</strong></td><td><ul><li>Minimum&nbsp;200 GB to be allocated</li></ul></li></td></tr><tr><td><strong>Host OS</strong></td><td><ul><li>Ubuntu 18.04.5/20.04.2.0 LTS</li><li>Kernel 4.4 or 4.15</li><li>Architecture x86</li></ul></td></tr>
</ul></td></tr></tbody></table>

### Network Communication

- Below diagram explain the network communication between the WaveMaker Platform Instance and MockingBird k8s Platform integration.

[![network-communication-between-instances](/learn/assets/wme-setup/network-communication-between-mbe-wme.jpg)](/learn/assets/wme-setup/network-communication-between-mbe-wme.jpg)

### Capacity Planning

Adding an instance to k8s workspace aids in the scalability of the mocking services. 

### Helm Package 

WaveMaker team will share the following packages along with access keys. You should download the below package and be ready with keys before starting the installation at setup instance.

- Helm Package zip
- Checksum(sha1sum) file for above package.

## IP Addressing and DNS Mapping

You will be needing IP Addresses for the following.

### IP Address

- One static IP for accessing the MockingBird platform machine from WaveMaker Platform network.
- For all cloud managed K8s Cluster Static IP will be generated provided, access to K8s API's and after success helm setup generated Static IP can be picked up from console.
- The above static IP should be accessible on WME network, or

### DNS Mapping

Map a domain to the above IP for easy access.

| **Domain**              | **Domain URL**                | **Description**                                                                           |
| ---                     | ---                           | ---                                                                                       |
| MockingBird Platform    | `mockingbird.[mycompany].com`   | This domain will be used to access MockingBird Platform APIs by WME after integration   |

:::note
In the preceding table, `[mycompany]` is used as an example. You may have to replace `[mycompany]` with your appropriate domain name.
:::

