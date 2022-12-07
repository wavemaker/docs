---
title: "Integrate MockingBird Platform with WME"
id: ""
sidebar_label: "Integrate MockingBird Platform with WME"
---
---

## Upgrade and Rollback MockingBird setup

### Upgrade MockingBird Platform

- Here is the command to upgrade mockingbird platform with patch release or with a new release
- Replace [HELM-PATCH-PACKAGE] with the helm package name of new release or patch release after download

```bash 
helm upgrade mockingbird [HELM-PATCH-PACKAGE] -n mockingbird --reuse-values"
```  

### RoleBack MockingBird setup

- Here is the command to rollback previously installed patch/upgrade

```bash 
helm rollback mockingbird [HELM-PATCH-PACKAGE] -n mockingbird --reuse-values //TODO verify rollback command
```  
