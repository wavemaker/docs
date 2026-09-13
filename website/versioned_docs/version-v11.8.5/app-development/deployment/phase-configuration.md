---
title: "Phase configurations"
id: "phase-configuration"
---
---

WaveMaker supports two phases for WMO and three phases for WME customers. One-click deployment by default deploys to Demo or QA phase. To deploy an application on different phases, you should push the application from one phase to the other phase. For pushing the application to the next phase, you have to configure the phases. Firstly, you should select a cloud provider and configure that for each phase.

:::note
Before configuring the phases, you should configure the pipeline. For WMO, see [WMO default pipeline configuration](/learn/app-development/deployment/default-pipelines). For WME, see [WME pipeline configurations](/learn/app-development/deployment/configure-pipelines).
:::

## Configure Phases

During the process of pushing from one phase to the other phase, you can configure different Databases for different phases and also configure Rest, Soap, and Web socket services as shown in the image below.

[![phase Database configurations](/learn/assets/ptl_configure.png)](/learn/assets/ptl_configure.png).

## Phases Configuration Profile

You can enable and disable SSL configuration at the security settings page and also configure necessary security options. Additionally, you can configure Outh2, App Environment, and Build options. For more information, see [Configuration Profiles](/learn/app-development/deployment/configuration-profiles) and [Deployment Profile](/learn/app-development/deployment/deployment-profile).

[![phase security configurations](/learn/assets/phase-security-config.png)](/learn/assets/phase-security-config.png).

:::tip
You can also mention the version number and release notes for tracking purposes.  
:::

[![versioning](/learn/assets/ptl_version.png)](/learn/assets/ptl_version.png)

For more information, see [Manage Deployed Apps](/learn/app-development/deployment/manage-deployed-apps).


