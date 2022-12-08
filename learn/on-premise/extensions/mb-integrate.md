---
title: "Integrate MockingBird Platform with WME"
id: ""
sidebar_label: "Integrate MockingBird Platform with WME"
---
---

## Integration requirements

Integrate Mockingbird with WME Platform

- Make sure MockingBird domain is accessible with in developers and WME networks by running given command. Replace [WHITELIST-IP-RANGE] property with concern network CIDR ranges
- Example ["1.2.3.4/32", "1.2.3.5/24"]

```bash
apimock-ingress-nginx.controller.service.loadBalancerSourceRanges: [WHITELIST-IP-RANGE] --reuse-values
```  
