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
helm upgrade mockingbird [HELM-PATCH-PACKAGE] -n mockingbird -f one-time-setup-values.yaml
```  

### RoleBack MockingBird setup

- Here is the command to rollback previously installed patch/upgrade

```bash 
helm rollback mockingbird -n mockingbird
```  
