---
title: "Switching Security Providers based on Profile"
id: "switch-security-provider-based-on-profile"
sidebar_label: "Switching Security Providers based on Profile"
---

WaveMaker supports many security providers which can be enabled from the Security dialog.
You can now switch between the security providers based on the profile that is being used to build the application. To learn more about profiles, see [Configuration Profiles](/learn/app-development/deployment/configuration-profiles/).

For example, the Development profile can have Demo security and other profiles can have SAML as the security provider. This feature is now supported in the studio as WaveMaker application security configuration has been migrated from XML-based configuration to Java-based configuration. To know more, see [Migration from XML to Java Configuration](/learn/blog/2023-09-05-xml-to-java-configuration-migration.md).

## Switching Security Provider

1. Configure the security provider from the Security dialog. To know more, see [Selecting Security Providers](/learn/app-development/app-security/authentication/#selecting-security-providers).
 
:::note

The Security provider has to be configured at least once so that the required profile properties for the providers can be generated.

:::

2. Once the security providers are configured, navigate to the file explorer and open the profile property file.
3. Every profile property file has `security.activeProviders` property that takes the provider name as input and sets it as the security provider for the profile.

[![security.activeProviders](/learn/assets/security-active-providers.png)](/learn/assets/security-active-providers.png)

:::note

The acceptable values for the `security.activeProviders` property in WaveMaker Studio are given below.

| Security Provider <br/>Name | Security.activeProviders <br/>Value |
| ----- | ------ |
|Demo|DEMO|
|Database|DATABASE|
|Open ID|OPENID|
|Active Directory|AD|
|LDAP|LDAP|
|CAS|CAS|
|SAML|SAML|
|Custom Security|CUSTOM|

:::

