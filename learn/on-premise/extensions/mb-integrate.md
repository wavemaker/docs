---
title: "Integrate MockingBird Platform with WME"
id: ""
sidebar_label: "Integrate MockingBird Platform with WME"
---
---

## Integration requirements

Integrate Mockingbird with WME Platform

- Make sure WME setup IP/IP's are whitelisted at MockingBird by running given command. Replace [WHITELIST-IP-RANGE]proper IP/IP's

```bash
helm upgrade mockingbird [HELM-PACKAGE] -n mockingbird --set "apimock-orchestration.ingress.annotations.nginx.ingress.kubernetes.io/whitelist-source-range=[WHITELIST-IP-RANGE]" --reuse-values
```  
