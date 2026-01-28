---
title: Configure Pipeline in WME
id: configure-pipelines
last_update: { author: "WaveMaker" }
---
---

:::note
This documentation applies to WME users only.
:::

WaveMaker Enterprise supports a three-phased pipeline configuration, which includes **QA**, **Stage**, and **Live** phases. You can configure each phase with different profile configuration settings.

- Use the same steps to configure both Stage and Live phases.
- Add instances for Stage and Live phases _before_ configuration. For more information, see [Adding Instances](#).

## Deploy to QA Phase

By using one-click deployment, the application deploys to the QA phase by default. You should configure the release pipeline before deploying the application. For more information, see [Pipeline Configuraton](#) for App Deployment.


## Configure Stage and Live Phases

Before pushing the application to the next phase, you have to configure the phases in the Launchpad in the App Deployment section. WaveMaker supports all major cloud providers.

- [AWS configuration](../deploy-to-cloud-providers/deployment-to-aws.md)
- [Azure configuration](../deploy-to-cloud-providers/deployment-to-azure.md)
- [Google Cloud configuration](../deploy-to-cloud-providers/deployment-google-cloud.md)
- [Digital Ocean configuration](../deploy-to-cloud-providers/deployment-to-digital-ocean.md)

After configuring the phase, you push the application from one phase to another and configure each stage with profiles for deploying the application. For more information, see [Configuration Profiles](../configuration-profiles).

[![manage live app](./assets/img/manage_apps_live.png)](./assets/img/manage_apps_live.png)

Selecting *Provider* will initiate Live Pipeline setup and will auto-configure the phase and you can push the app to the Live phase.

## Push to Stage and Live

Once the app is tested and the live phase has been configured, you can push the app from QA to Stage to Live.

![WME phases](./assets/img/ptl_cloud_done.png)
