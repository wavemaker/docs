---
title: "Upgrade Prerequisites"
id: "upgrade-prerequisites"
sidebar_label: "Upgrade Prerequisites"
---
---


## Prerequisites

Following are the prerequisites for applying the patch on WME:

- While applying the patches, the WME and services should be in the running state.
- Ensure that users are not accessing the platform when applying either of the patches.
- Before applying the patches, take a snapshot/backup of the virtual machine’s current state.
- While applying the patch, the deployed apps are not accessible.
- All the containers should be passivated. 


## WME Setup System Requirements

WaveMaker Enterprise can be installed on any machine with the below requirements. Before you start upgrading the WaveMaker Enterprise, here is a list of minimum and recommended system requirements for each type of Instance.

### WME Platform Instance

<table>
  <tbody>
    <tr>
      <td>
        <strong>Memory</strong>
      </td>
      <td>
        <ul>
          <li>Minimum 32GB</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <strong>CPU</strong>
      </td>
      <td>
        <ul>
          <li>8-cores, single CPU system</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Hard Disk</strong>
      </td>
      <td>
        <ul>
          <li>Minimum&nbsp;350 GB to be allocated</li>
          <li>In case of volumes we recommend 3 disks </li>
              <li>/&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 100 GB</li>
              <li>/wm-data&nbsp; &nbsp; &nbsp; &nbsp; 150 GB</li>
              <li>/wm-runtime&nbsp; &nbsp;100 GB</li>
            </ul>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Host OS</strong>
      </td>
      <td>
        <ul>
          <li>Ubuntu 18.04.5/20.04.2.0 LTS; RHEL 7.x/8.x</li>
          <li>Kernel 4.4 or latter</li>
          <li>Architecture x86</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Software</strong>
      </td>
      <td>
        <ul>
          <li>docker 20.10.12 (supports for WME platform versions 11.2.x)</li>
          <li>docker 23.0.1 (supports for WME platform versions 11.3.x)</li>
          <li>python 3.5 or higher</li>
          <li>wget</li>
          <li>container-selinux-2.107-1.el7.noarch.rpm(Only for RHEL7)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Network</strong>
      </td>
      <td>
        <ul>
          <li>Static IP with valid DNS</li>
          <li>Ports 80, 443, 8080, 22(for ssh) to developer network range</li>
          <li>Ports to be opened on Platform Instance for Access from StudioWorkspace Instance / AppDeployment Instance </li>
              <li>Ports : 5000, 8500, 22, 8081, 2200, 8100, 9200, 8000-8020</li>
            </ul>
      </td>
    </tr>
  </tbody>
</table>


### WME StudioWorkspace Instance and AppDeployment Instance

<table>
  <tbody>
    <tr>
      <td>
        <strong>Memory</strong>
      </td>
      <td>
        <ul>
          <li>Minimum 16GB</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <strong>CPU</strong>
      </td>
      <td>
        <ul>
          <li>4-cores, single CPU system</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Hard Disk</strong>
      </td>
      <td>
        <ul>
          <li>Minimum&nbsp;200 GB to be allocated</li>
          <li>In case of volumes we recommend 3 disks </li>
              <li>/&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 50 GB</li>
              <li>/data&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 150 GB</li>
            </ul>
          </td>
    </tr>
    <tr>
      <td>
        <strong>Host OS</strong>
      </td>
      <td>
        <ul>
          <li>Ubuntu 18.04.5/20.04.2.0 LTS; RHEL 7.x, 8.x</li>
          <li>Kernel 4.4 or 4.15</li>
          <li>Architecture x86</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Software</strong>
      </td>
      <td>
        <ul>
          <li>docker 20.10.12 (supports for WME platform versions 11.2.x)</li>
          <li>docker 23.0.1 (supports for WME platform versions 11.3.x)</li>
          <li>python 3.5 or higher</li>
          <li>wget</li>
          <li>container-selinux-2.107-1.el7.noarch.rpm(only for RHEL7)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Network</strong>
      </td>
      <td>
        <ul>
          <li>Static IP</li>
          <li>Ports to be Opened on StudioWorkspace Instance / AppDeployment Instance for Access from Platform Instance </li>
              <li>Ports: 22, 2375, 80, 5000, <strong>8100</strong>, 9101, 9102, 9100, 9404,2200-2299, 8001-8099, 3300-3399, 9500-9599 </li>
            </ul>
      </td>
    </tr>
  </tbody>
</table>


:::note
To upgrade form 10.13.x to 11.x or higer version, you must open the port **8100** on the StudioWorkspace Instance.
:::


***you can go with next steps by validating the above prerequesties.***  
