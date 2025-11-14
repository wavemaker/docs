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

| Fluentd Tag      | Description | Log Files |
| ----------- | ----------- | ----------- |
| `lb` | All application loged in kong  | /var/log/kong/wmkong.log |
| `lbaccess` | Access Logs loged in kong  | /var/log/kong/wmkong-access.log |
 
#### STUDIO Tags

| Fluentd Tag      | Description | Log Files |
| ----------- | ----------- | ----------- | 
| `file-service` | Application logs loged in file-services | /var/log/file-service/app/file-service.log|
| `file-service-access` | Localhost access logs loged in file-services | /var/log/file-service/server/localhost_access_log.{yyyy-mm-dd}.txt |
| `marketplace` | Application logs loged in marketplace | /var/log/marketplace/app/mp.log |
| `marketplace-access` | Localhost access logs loged in marketplace | /var/log/marketplace/server/localhost_access_log.{yyyy-mm-dd}.txt |
| `studio` | Application logs loged in studio  | /var/log/studio/app/studio-services.log |
| `studio-access` | Localhost access logs loged in studio  | /var/log/studio/server/localhost_access_log..{yyyy-mm-dd}.txt |
| `oom` | OOM logs logged in all studio | /var/log/marketplace/server/java-oom.log | 

#### JOBS - WORKER TAGS

| Fluentd Tag      | Description | Log Files |
| ----------- | ----------- | ----------- |
| `apkgeneratoraccess` | APK generator access logs logged in jobworker | 
| `jobs-worker` | Aplication worker logs logged in jobworker  | - /var/log/wm-jobs-worker/app/worker.log <br /> - /var/log/wm-apk-generator/app/worker.log <br /> - /var/log/wm-jobs-k8sdeploy-worker/app/worker.log <br /> - /var/log/wm-jobs-phaseconfig-worker/app/worker.log<br /> - /var/log/wm-jobs-worker2/app/worker.log| 
| `jobsk8access` | Job Kubernetees access logs logged in jobworker | 
| `jobsphaseconfigaccess` | Job phaseconfig access logs logged in jobworker | 
| `mavenlogs` | Maven build logs logged in jobworker  | - /var/log/wm-jobs-worker/app/build-job-logs/<build_id>.log <br /> - /var/log/wm-jobs-worker2/app/build-job-logs/<build_id>.log |
  

#### USER TAGS

| Fluentd Tag      | Description | Log Files |
| ----------- | ----------- | ----------- | 
| `catalina` | Catalina logs logged in all user containers  | 
| `localhost` | Localhost  logs loged in all user container |
| `localhostaccess` | Localhost access logs loged in all user containers |
| `manager` | Manager logs logged in all user containers | 
| `remote-studio` | Aplication worker logs logged in remote-studio  | /var/saaslogs/remote-studio/app/wm-rs-{release-version}.log |
| `supported-remote-studio` | Aplication worker logs logged in supported-remote-studio  | /var/saaslogs/supported-remote-studio/app/wm-rs-{release-version}.log |
| `supported-remote-studio-access` | Localhost access logs loged in supported-remote-studio | /var/saaslogs/supported-remote-studio/server/localhost_access_log.{yyyy-mm-dd}.txt |
| `remote-studio-access` | Localhost access logs loged in remote-studio | /var/saaslogs/remote-studio/server/localhost_access_log.{yyyy-mm-dd}.txt |
| `pm2` | All saaslogs loged in pm2  | /var/saaslogs/pm2/web.log |
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

| Fluentd Tag      | Description | Log Files |
| ----------- | ----------- | ----------- |
| `container-services` | Application logs logged in container-services | - /var/log/container-services/app/container-services.log <br /> - /var/log/container-services/app/container-services-crons/cloud_composition_cron.log <br /> - /var/log/container-services/app/container-services-crons/cloud_composition_patch_cron.log <br /> - /var/log/container-services/app/container-services-crons/cloud_instance_cron.log <br /> - /var/log/container-services/app/container-services-crons/cloud_passivation_cron.log <br /> - /var/log/container-services/app/container-services-crons/instance_health_cron.log <br /> - /var/log/container-services/app/container-services-crons/instance_sync_cron.log <br /> - /var/log/container-services/app/container-services-crons/instance_validation_cron.log <br /> |
| `container-services-audit` | Audit logs logged in container-services | /var/log/container-services/app/container-services-audit.log |
| `container-services-catalina` | Catalina logs logged in container-services | /var/log/container-services/server/catalina.{yyyy-mm-dd}.log |
| `container-servicesmanager` | Manager logs logged in container-services  |
| `container-services-localhost` | Localhost logs logged in container-services  | /var/log/container-services/server/localhost.{yyyy-mm-dd}.log |
| `container-services-access` | Localhost access logs logged in container-services | /var/log/container-services/server/localhost_access_log.{yyyy-mm-dd}.txt |
| `developer-cloud` | All logs logged in developer-cloud | - /var/log/developer-cloud/app/developer-cloud.log <br /> - /var/log/developer-cloud/app/developer-cloud-crons/cloud_last_access_cron.log <br /> - /var/log/developer-cloud/app/developer-cloud-crons/cloud_last_access_listener.log <br /> - /var/log/developer-cloud/app/developer-cloud-crons/auto_hibernate_cron.log <br /> - /var/log/developer-cloud/app/developer-cloud-crons/cloud_action_cron.log <br /> |
| `deployment-cloud-access` | Localhost access logs logged in deployment-cloud  | /var/log/deployment-cloud/server/localhost_access_log.{yyyy-mm-dd}.txt |
| `developer-cloud-audit` | Audit logs in logged in developer-cloud  | /var/log/developer-cloud/app/developer-cloud-audit.log |
| `developer-cloud-catalina` | Catalina logs logged in developer-cloud | /var/log/developer-cloud/server/catalina.{yyyy-mm-dd}.log |
| `developer-cloudmanager` | Manager logs logged in developer-cloud  | 
| `developer-cloud-localhost` | Localhost logs logged in developer-cloud| /var/log/developer-cloud/server/localhost.{yyyy-mm-dd}.log |
| `developer-cloud-access` | Localhost access logs logged in developer-cloud  | /var/log/developer-cloud/server/localhost_access_log.{yyyy-mm-dd}.txt |
| `deployment-cloud` | All logs logged in deployment-cloud | - /var/log/deployment-cloud/app/deployment-cloud.log <br /> - /var/log/deployment-cloud/app/deployment-cloud-crons/auto_hibernate_cron.log <br /> - /var/log/deployment-cloud/app/deployment-cloud-crons/cloud_last_access_cron.log <br /> - /var/log/deployment-cloud/app/deployment-cloud-crons/build-update-task_cron.log <br /> |
| `deployment-cloud-audit` | Audit logs in logged in deployment-cloud  | /var/log/deployment-cloud/app/deployment-cloud-audit.log |
| `deployment-cloud-catalina` | Catalina logs logged in deployment-cloud  | /var/log/deployment-cloud/server/catalina.{yyyy-mm-dd}.log |
| `deployment-cloudmanager` | Manager logs logged in deployment-cloud | 
| `deployment-cloud-localhost` | Localhost logs logged in deployment-cloud | /var/log/deployment-cloud/server/localhost.{yyyy-mm-dd}.log |
| `edn-services` | Application logs logged in edn-services | /var/log/edn-services/app/edn-services.log |
| `edn-services-audit` | Application logs logged in edn-services-audit  | /var/log/edn-services/app/edn-services-audit.log |
| `edn-catalina` | Catalina logs logged in edn-services | /var/log/edn-services/server/catalina.{yyyy-mm-dd}.log |
| `ednmanager` | Manager logs logged in edn-services | 
| `edn-localhost` | Application logs logged in ednlocalhost  | /var/log/edn-services/server/localhost.{yyyy-mm-dd}.log |
| `edn-access` | Application logs logged in ednaccess | /var/log/edn-services/server/localhost_access_log.{yyyy-mm-dd}.txt |
| `errorpages-access` | Server logs logged in errorpages | 
| `jobs-service-access` | Localhost access logs logged in jobs-service  | /var/log/jobs-service/server/localhost_access_log.{yyyy-mm-dd}.txt |
| `jobs-service` | Application logs logged in jobs-service  | /var/log/jobs-service/app/jobs-service.log |
| `license` | Application logs logged in license | /var/log/login/app/license.log
| `login` | Application logs logged in login  | /var/log/login/app/login.log
| `login-audit` | Application logs logged in login-audit | /var/log/login/app/login-audit.log |
| `login-catalina` | Catalina logs logged in login  | /var/log/login/server/catalina.{yyyy-mm-dd}.log |
| `loginmanager` | Manager logs logged in login   | 
| `login-localhost` | Locahost logs logged in login  | /var/log/login/server/localhost.{yyyy-mm-dd}.log |
| `login-access` | Locahost access logs logged in login  | /var/log/login/server/localhost_access_log.{yyyy-mm-dd}.txt |
| `mail` | Application logs logged in mail  | /var/log/login/app/mail.log |
| `subscription-services-catalina` | Catalina logs logged in subscription-services | /var/log/subscription-services/server/catalina.{yyyy-mm-dd}.log | 
| `subscription-servicesmanager` | Manager logs logged in subscription-services  | 
| `subscription-services-localhost` | Localhost logs logged in subscription-services | /var/log/subscription-services/server/localhost.{yyyy-mm-dd}.log |
| `subscription-services-access` | Localhost access logs logged in subscription-services  | /var/log/subscription-services/server/localhost_access_log.{yyyy-mm-dd}.txt |
| `subscription-services` | Application logs logged in subscription-services | /var/log/subscription-services/app/subscription-services.log |
| `subscription-services-audit` | Audit logs logged in subscription-services-audit |