---
title: "Default Pipelines in WMO"
id: ""
---
---

wavemaker provide two phase pipeline configuration for WMO users for deploying application,the phases are Demo and Live.
for deploying in to Demo phase Wavemaker provisioned Instances by default for users.They just need to deploy the application using the [one click deployment](one-click-deployment.md).For the Live phase user has to provison their Instances for deploying the application.

After deploying the appication on Demo phase using one click deployment you can configure your Live phase by going to the Managed Deployed Apps .
[![WMO Demo phase](/learn/assets/demo_phase_in_wmo.png)](/learn/assets/demo_phase_in_wmo.png)

user can configure each stage with profile and other options for depoying applications.for more details visit [profile configurations](configuration-profiles.md)

Live phase user can configure with different major cloud providers for deploying application to the Live phase.
supported providers are AWS,AZUR,GCP and Digital ocean kubernetes.configure Live phase with any of the provider and push application from Demo to Live phase for deployment.

[![WMO live phase providers](/learn/assets/wmo_live_phase_configure.png)](/learn/assets/wmo_live_phase_configure.png)

After pushing application to the Live phase from Demo phase it automatically do build and deployment in respected cloud provider.
