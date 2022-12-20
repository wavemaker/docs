---
title: "Integrate MockingBird Platform with WME"
id: ""
---
---

## Integration requirements

### Integrate Mockingbird with WME Platform

- Make sure MockingBird domain is accessible with in developers and WME networks by running given command. Replace [WHITELIST-IP-RANGE] property with concern network CIDR ranges
- Example ["1.2.3.4/32", "1.2.3.5/24"]

```bash
apimock-ingress-nginx.controller.service.loadBalancerSourceRanges: [WHITELIST-IP-RANGE]
```  

### Pairing up WME Platform and MockingBird Platform

- Here is the command to run from WME Pltform instance to integrate both the platforms

```bash
bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh --register_mocking_bird
```  

![mb](/learn/assets/consul_mb_props.png)](/learn/assets/consul_mb_props.png)

### Enable Mocking feature from WME Platform Launchpad team portal

1) Go to http://PLATFORM_DOMAIN/launchpad, select the "Teams" tab on the right nav and click on the permissions icon for the team that you want to enable APIMock server access as shown in the below screen.

![mb](/learn/assets/launchpad_mb_permission.png)](/learn/assets/launchpad_mb_permission.png)

2) Select the project role for which the API Mock Server feature need to be enabled.

![mb](/learn/assets/launchpad_mb_enable.png)](/learn/assets/launchpad_mb_enable.png)

3) Save the above changes as shown below.

![mb](/learn/assets/launchpad_mb_save.png)](/learn/assets/launchpad_mb_save.png)


