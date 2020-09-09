---
title: "Default Pipelines in WMO"
id: ""
---
---

WaveMaker provide two phase-pipeline configuration for WMO users for deploying application. The phases include, **Demo** and **Live**. For deploying to a Demo phase, WaveMaker provisions instances by default. You just need to deploy the application using the [One-click deployment](/learn/app-development/deployment/one-click-deployment). For the **Live** phase, you have to provison your own Instances for deploying the application.

After deploying the appication to a **Demo** phase with One-click deployment, you can configure the **Live** phase by going to **[Managed Deployed Apps](/learn/app-development/deployment/manage-deployed-apps)**. 

![WMO Demo phase](/learn/assets/demo_phase_in_wmo.png)  

You can configure each stage with profile and other options for depoying applications. For more information, see [Profile Configurations](/learn/app-development/deployment/configuration-profiles).

For **Live** phase, you can configure with different major cloud providers. WaveMaker-supported providers are AWS, AZURE, GCP, and Digital Ocean kubernetes. Configure **Live** phase with any of the provider and push the application from Demo phase to the Live phase.

![WMO live phase providers](/learn/assets/wmo_live_phase_configure.png)

After pushing the application to the **Live** phase, it automatically builds and deploys in its respected cloud provider.
