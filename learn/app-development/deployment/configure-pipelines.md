---
title: "Configure Pipeline in WME"
id: ""
---
---

:::note
This documentation applies to WME users only.
:::

WaveMaker Enterprise supports a three-phased pipeline configuration, which includes QA, Stage, and Live phases. You can configure each phase with different profile configuration settings.

By using one-click deployment, the application deploys to the QA phase by default. You should configure the release pipeline before deploying the application. For more information, see [Pipeline Configuraton](learn/on-premise/configure/config-pipeline) for App Deployment.

Before pushing the application to the next phase, you have to configure the phases in the Launchpad in the App Deployment section. This allows deploying an application to the Demo phase hosted in WaveMaker cloud. WaveMaker supports all major cloud providers. You can choose to deploy it to any cloud providers including AWS, Azure, GCP, Digital Ocean, and Kubernetes Services.

![WME cloud providers](/learn/assets/manage_apps_live.png)

After configuring the phase, you push the application from one phase to another for deploying application and configure each stage with profile and other options for depoying applications. For more information, see [Configuration Profiles](/learn/app-development/deployment/configuration-profiles)

![WME phases](/learn/assets/ptl_cloud_done.png)
