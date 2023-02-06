---
title: "Fluentd Tags"
id: "fluentd"
sidebar_label: "fluentd tags"
---
---

## Introduction

Fluentd is an open source data collector, which lets you unify the data collection and consumption for a better use and understanding of data.

- Every Event that gets into Fluent Bit gets assigned a Tag. 
- This tag is an internal string that is used in a later stage by the Router to decide which Filter or Output phase it must go through.
- Most of the tags are assigned manually in the configuration. If a tag is not specified, Fluent Bit will assign the name of the Input plugin instance from where that Event was generated from

### Fluentd Tags

The required logs can be get by applying appropriate tag. The below tables list out the most frequently used tags in WaveMaker.

#### LB Tags

| Fluentd Tag      | Description |
| ----------- | ----------- | 
| `lb` | All application loged in kong  | 
| `lbaccess` | Access Logs loged in kong  | 
 
#### STUDIO Tags

| Fluentd Tag      | Description |
| ----------- | ----------- | 
| `file-service` | Application logs loged in file-services | 
| `file-service-access` | Localhost access logs loged in file-services |
| `marketplace` | Application logs loged in marketplace | 
| `marketplace-access` | Localhost access logs loged in marketplace | 
| `studio` | Application logs loged in studio  | 
| `studio-access` | Localhost access logs loged in studio  | 
| `oom` | OOM logs logged in all studio |

#### JOBS - WORKER TAGS

| Fluentd Tag      | Description |
| ----------- | ----------- | 
| `apkgeneratoraccess` | APK generator access logs logged in jobworker | 
| `jobs-worker` | Aplication worker logs logged in jobworker  | 
| `jobsk8access` | Job Kubernetees access logs logged in jobworker | 
| `jobsphaseconfigaccess` | Job phaseconfig access logs logged in jobworker | 
| `mavenlogs` | Maven build logs logged in jobworker  |
  

#### USER TAGS

| Fluentd Tag      | Description |
| ----------- | ----------- | 
| `catalina` | Catalina logs logged in all user containers  | 
| `localhost` | Localhost  logs loged in all user container |
| `localhostaccess` | Localhost access logs loged in all user containers |
| `manager` | Manager logs logged in all user containers | 
| `remote-studio` | Aplication worker logs logged in remote-studio  | 
| `supported-remote-studio` | Aplication worker logs logged in supported-remote-studio  | 
| `supported-remote-studio-access` | Localhost access logs loged in supported-remote-studio | 
| `remote-studio-access` | Localhost access logs loged in remote-studio | 
| `pm2` | All saaslogs loged in pm2  | 
| `user` | Appilication logs logged in all user containers | 
| `oom` | OOM logs logged in all user containers |
| `kernelkill` | Kill logs that the kernal process given by the oom |

#### APPS TAGS

| Fluentd Tag      | Description |
| ----------- | ----------- | 
| `appcatalina` | Catalina logs logged in all app containers  | 
| `appmanager` | Manager logs logged in all app containers  | 
| `applocalhost` | Localhost logs logged in all app containers | 
| `applocalhostaccess` | Localhost access logs logged in all app containers | 
| `oom` | OOM logs logged in all app containers  | 
| `kernelkill` | Kill logs that the kernal process given by the oom | 

#### PLATFORM TAGS

| Fluentd Tag      | Description |
| ----------- | ----------- | 
| `container-services` | Application logs logged in container-services | 
| `container-services-audit` | Audit logs logged in container-services | 
| `container-servicescatalina` | Catalina logs logged in container-services | 
| `container-servicesmanager` | Manager logs logged in container-services  |
| `container-serviceslocalhost` | Localhost logs logged in container-services  | 
| `container-servicesaccess` | Localhost access logs logged in container-services |
| `developer-cloud` | All logs logged in developer-cloud | 
| `deployment-cloudaccess` | Localhost access logs logged in deployment-cloud  |
| `developer-cloud-audit` | Audit logs in logged in developer-cloud  | 
| `developer-cloudcatalina` | Catalina logs logged in developer-cloud | 
| `developer-cloudmanager` | Manager logs logged in developer-cloud  | 
| `developer-cloudlocalhost` | Localhost logs logged in developer-cloud| 
| `developer-cloudaccess` | Localhost access logs logged in developer-cloud  | 
| `deployment-cloud` | All logs logged in deployment-cloud | 
| `deployment-cloudcatalina` | Catalina logs logged in deployment-cloud  | 
| `deployment-cloudmanager` | Manager logs logged in deployment-cloud | 
| `deployment-cloudlocalhost` | Localhost logs logged in deployment-cloud | 
| `edn-services` | Application logs logged in edn-services | 
| `edn-services-audit` | Application logs logged in edn-services-audit  | 
| `edncatalina` | Catalina logs logged in edn-services | 
| `ednmanager` | Manager logs logged in edn-services | 
| `ednlocalhost` | Application logs logged in ednlocalhost  | 
| `ednaccess` | Application logs logged in ednaccess | 
| `errorpages-access` | Server logs logged in errorpages | 
| `jobs-service-access` | Localhost access logs logged in jobs-service  | 
| `jobs-service` | Application logs logged in jobs-service  | 
| `license` | Application logs logged in license | 
| `login` | Application logs logged in login  | 
| `login-audit` | Application logs logged in login-audit | 
| `logincatalina` | Catalina logs logged in login  | 
| `loginmanager` | Manager logs logged in login   | 
| `loginlocalhost` | Locahost logs logged in login  | 
| `loginaccess` | Locahost access logs logged in login  | 
| `mail` | Application logs logged in mail  | 
| `subscription-servicescatalina` | Catalina logs logged in subscription-services | 
| `subscription-servicesmanager` | Manager logs logged in subscription-services  | 
| `subscription-serviceslocalhost` | Localhost logs logged in subscription-services | 
| `subscription-servicesaccess` | Localhost access logs logged in subscription-services  | 
| `subscription-services` | Application logs logged in subscription-services | 
| `subscription-services-audit` | Audit logs logged in subscription-services-audit |