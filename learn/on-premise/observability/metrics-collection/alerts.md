---
title: "Alerts"
id: ""
sidebar_label: "Alerts"
---
---

WaveMaker uses the **Prometheus AlertManager** to listen on the data collected by *Prometheus* and fire an alert based on the query included in the
 alert.

### Accessing Alerts

The list of Alerts can be accessed form Prometheus UI by clicking on the "**Alerts**" button as shown in the below image

![Prometheus UI Alert Button](/learn/assets/wme-setup/wme-observability/prometheus/prometheus-alert-button-click.png)


### Available Alerts
Following are the list of alerts included in WaveMaker

| Alerts Name | Description |
| ----------- | ----------- |
| InstanceDown | Instance is down. |
| RootDiskSpaceFull | Root Disk space on an instance is full |
| PlatformDataDiskSpaceFull | Platform Disk space on an instance is full |
| ExternalInstanceDataDiskSpaceFull | External Instance (Backup Server) Disk space is full |
| RuntimeDiskSpaceFull | Volume mounted to a container is full |
| MemoryFull | Less Instance Memory is available |
| HighCPU | The CPU is used extensively |
| ContainerDown | The container is not sending health signals |
| UserContainerMemoryUsage | The User workspace container has Less Memory |
| AppContainerMemoryUsage | The User Application container has Less Memory |
| VcsPullFailed | A VCS pull operation Failed |
| VcsPushFailed | A VCS push operation Failed |
| TomcatDeploymentFailed | A Platform microservice has a deployment failure |
| JvmThreadsDeadlocked | JVM Deadlock on the Thread Level is detected |
| TaskIdleTimeout | The *task* of a *job* submitted to jobs-service has not been served by the worker. More workers are probably needed |
| TaskExecutionTimeout | The worker was unable to complete the *task* of a *job* submitted to jobs-service |
| ContainerActivationFailed | The Container Activation failed |
| ContainerPassivationFailed | The Container Passivation Failed|
| ContainerHibernationFailed | The Container Hibernation Failed|
| ContainerAllocationsFull | There is not enough space in platform for a new user Container Allocation |
| LongRunningUserAPICallDetected | An API call submitted by the user is taking a long time to process |
| LongRunningPlatformAPICallDetected | An intercommunication API call is taking a long time to process |
| PlatformBottleNeckDetected | A microservice has a lot pending API calls. This will slowdown the whole platform |
| TooManyExceptions | A huge number of exceptions are detected in a short period of time |
| TooManyUnseenExceptions | A huge number of new exceptions are detected in a short period of time |
| PlatformInstanceDown | An Instance in the Platform is not sending health signals |
| ProjectCreationFailed | A User could not create a project in Studio |
| ProjectImportFailed | A User could not import a project in Studio |
| ProjectOpeningFailed | A User project opening Failed |
| ProjectMigrationFailed | A User could not migrate his project successfully |

:::note
The Alerts listed above keep changing as new things are learnt and might vary over time
:::