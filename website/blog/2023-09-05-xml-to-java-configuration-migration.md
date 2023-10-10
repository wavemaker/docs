---
title: "App Security Migration from XML to Java Configuration"
author: Praveen Chandra
---
---

WaveMaker app security configuration has now migrated from XML-based configuration to Java-based configuration. In earlier versions, the Java beans generated during any security change, using security dialog, used to get saved in the **project-security.xml** file. With this release, WaveMaker 11.4, **project-security.xml** and **securityService.properties** files will be removed from the project and the Java beans will be generated dynamically in the WaveMaker runtime.

:::note
Any custom beans related to security written in **project-user-spring.xml** will continue to work.
:::

<!-- truncate -->

## Why are we Migrating?

XML configuration beans are generated in design time when a security-related configuration is saved or updated from the Security dialog. By moving beans to the Java configuration there is no generation of XML files which helps in the following.

- [Switching security providers](/learn/how-tos/switch-security-provider-based-on-profile/) based on the profile i.e., users can set different security providers for the development profile and testing/production profile. To know more about profiles, see [Configuration Profiles](/learn/app-development/deployment/configuration-profiles/).
- XML changes are no longer visible in VCS as the security configurations are maintained in the WaveMaker app runtime. This avoids confusion as only user changes would be visible in the VCS.
- Any configuration changes/bug fixes in the future will not require any migrations in the user projects.
- In further releases, it would also help in supporting multiple security providers in the same profile in WaveMaker studio.

## Backward Compatibility

As a part of release 11.4, the following profile property names have been auto-migrated in the user projects. In case, the users have been using the below properties in any of their environments or build scripts, they need to perform the below changes.

|Old Property Name| New Property Name|
|----|----|
| security.providers | security.activeProviders |
| security.general.cors.{pathEntryName}.allowedOrigins | security.general.cors.pathEntries.{pathEntryName}.allowedOrigins |
| security.providers.ad.groupSearchDisabled | security.providers.ad.roleMappingEnabled |
| security.providers.ldap.groupSearchDisabled | security.providers.ldap.roleMappingEnabled |
