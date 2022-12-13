---
title: "Integrate MockingBird Platform with WME"
id: ""
sidebar_label: "Integrate MockingBird Platform with WME"
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

[Console](/learn/on-premise/extensions/mb-wme-consul-integration.md)

### Enable Mocking feature from WME Platform Launchpad team portal

- //TODO add steps