---
title: "Default Pipelines in WMO"
id: "default-pipelines"
---
---

WaveMaker Online supports a two-phased pipeline configuration which includes **Demo** and **Live** phases. You can configure each phase with different [profile configuration settings](/learn/app-development/deployment/configuration-profiles).

## Deploy to Demo Phase

For deploying to a Demo phase, WaveMaker provisions instance by default. You just need to deploy the application using the [One-click deployment](/learn/app-development/deployment/one-click-deployment).

## Deploy to Live Phase

For the **Live** phase, you have to provision your own instances for deploying the application.

### Configuring Live Phase

After deploying the application to a **Demo** phase with [One-click deployment](/learn/app-development/deployment/one-click-deployment), you can configure the **Live** phase by going to **[Managed Deployed Apps](/learn/app-development/deployment/manage-deployed-apps)**.

![WMO Demo phase](/learn/assets/demo_phase_in_wmo.png)  

You can configure each stage with different profiles for deploying an application. For more information, see [Profile Configurations](/learn/app-development/deployment/configuration-profiles).

### Cloud Providers

For **Live** phase, you can configure with different major cloud providers.

- [AWS configuration](/learn/app-development/deployment/deployment-to-aws/)
- [Azure configuration](/learn/app-development/deployment/deployment-to-azure/)
- [Google Cloud configuration](/learn/app-development/deployment/deployment-google-cloud/)
- [Digital Ocean configuration](/learn/app-development/deployment/deployment-to-digital-ocean/)

After pushing the application to the **Live** phase, it automatically builds and deploys in its respected cloud provider.
