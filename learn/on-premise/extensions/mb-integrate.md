---
title: "Integrate MockingBird Platform with WME"
id: ""
sidebar_label: "Integrate MockingBird Platform with WME"
---
---

## Integration requirements

Integrate Mockingbird with WME Platform

- Make sure WME setup IP are ready which are to be while listed at MockingBird Proxy to access to API from WME Pltform, before you run the command replace [WHITELIST-IP-RANGE] with proper IP/IP range values

```bash
helm upgrade mockingbird [HELM-PACKAGE] -n mockingbird --set "apimock-orchestration.ingress.annotations.nginx.ingress.kubernetes.io/whitelist-source-range=[WHITELIST-IP-RANGE]" --reuse-values
```  
