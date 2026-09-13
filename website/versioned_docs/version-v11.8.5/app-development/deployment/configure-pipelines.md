---
title: "Configure Pipeline in WME"
id: "configure-pipelines"
---
---

:::note
This documentation applies to WME users only.
:::

WaveMaker Enterprise supports a three-phased pipeline configuration, which includes **QA**, **Stage**, and **Live** phases. You can configure each phase with different profile configuration settings.

- Use the same steps to configure both Stage and Live phases.
- Add instances for Stage and Live phases _before_ configuration. For more information, see [Adding Instances](/learn/on-premise/configure/add-apps-capacity).

## Deploy to QA Phase

By using one-click deployment, the application deploys to the QA phase by default. You should configure the release pipeline before deploying the application. For more information, see [Pipeline Configuraton](/learn/on-premise/configure/config-pipeline) for App Deployment.


## Configure Stage and Live Phases

Before pushing the application to the next phase, you have to configure the phases in the Launchpad in the App Deployment section. WaveMaker supports all major cloud providers.

- [AWS configuration](/learn/app-development/deployment/deployment-to-aws/)
- [Azure configuration](/learn/app-development/deployment/deployment-to-azure/)
- [Google Cloud configuration](/learn/app-development/deployment/deployment-google-cloud/)
- [Digital Ocean configuration](/learn/app-development/deployment/deployment-to-digital-ocean/)

After configuring the phase, you push the application from one phase to another and configure each stage with profiles for deploying the application. For more information, see [Configuration Profiles](/learn/app-development/deployment/configuration-profiles).

[![manage live app](/learn/assets/manage_apps_live.png)](/learn/assets/manage_apps_live.png)

Selecting *Provider* will initiate Live Pipeline setup and will auto-configure the phase and you can push the app to the Live phase.

## Push to Stage and Live

Once the app is tested and the live phase has been configured, you can push the app from QA to Stage to Live.

![WME phases](/learn/assets/ptl_cloud_done.png)
