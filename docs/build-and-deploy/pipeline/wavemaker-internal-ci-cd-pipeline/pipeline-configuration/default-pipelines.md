---
title: Default Pipelines in WMO
id: default-pipelines
last_update: { author: "WaveMaker" }
---
---

WaveMaker Online supports a two-phased pipeline configuration which includes **Demo** and **Live** phases. You can configure each phase with different [profile configuration settings](../configuration-profiles).

## Deploy to Demo Phase

For deploying to a Demo phase, WaveMaker provisions instance by default. You just need to deploy the application using the [One-click deployment](#).

## Deploy to Live Phase

For the **Live** phase, you have to provision your own instances for deploying the application.

### Configuring Live Phase

After deploying the application to a **Demo** phase with [One-click deployment](#), you can configure the **Live** phase by going to **[Managed Deployed Apps](../manage-deployed-apps)**.

![WMO Demo phase](./assets/img/demo_phase_in_wmo.png)  

You can configure each stage with different profiles for deploying an application. For more information, see [Profile Configurations](../configuration-profiles).

### Cloud Providers

For **Live** phase, you can configure with different major cloud providers.

- [AWS configuration](../deploy-to-cloud-providers/deployment-to-aws/)
- [Azure configuration](../deploy-to-cloud-providers/deployment-to-azure/)
- [Google Cloud configuration](../deploy-to-cloud-providers/deployment-google-cloud/)
- [Digital Ocean configuration](../deploy-to-cloud-providers/deployment-to-digital-ocean/)

After pushing the application to the **Live** phase, it automatically builds and deploys in its respected cloud provider.
