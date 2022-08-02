---
title: "Configuration Profiles"
id: "configuration-profiles"
---
---

**Configuration Profiles** allow you to run the same application under different environments with different settings, and this configuration information is stored in the form of profiles. 

If you need to configure a profile to provide lots of custom settings to suit third-party tools, services, network settings, or certificates, you can do it with the help of **Config Profiles**. This is in line with _[Maven Configuration Profiles](https://maven.apache.org/guides/mini/guide-building-for-different-environments.html)_. The profile can be accessed from the **Settings** option as shown in the image below.

[![config settings](/learn/assets/config_settings.png)](/learn/assets/config_settings.png)

You can configure Database, REST Servers, and more. By default, two profiles are generated for every application.

1. **Development**, which is used with the **Run** option,
2. **Deployment**, which is used with the **Deploy** option,
3. Or, Create a new **Custom** environment.

:::note
Before you select the environment, you should set the build option mode. For more information, see [Build Options in WaveMaker](/learn/app-development-deployment/build-options).
:::

## Development Configuration Profile

The **Development Configuration Profiles,** used with the **Run** option, are not editable. The values are set from the configuration of the underlying services at the time of import/creation. If you want to change these values, go the respective service configuration dialog and make the changes.

[![](/learn/assets/config_dev.png)](/learn/assets/config_dev.png)

- Under Security tab, Configuration SSL is disabled by default.
- There is no provision to configure X-Frame options. It is by default set to “Same Origin”.
- The App Environment properties can be added, deleted or modified. When you click on Save button, the properties get synchronized with all the profiles. For more information, see [Using App Environment Property](/learn/how-tos/using-app-environment-properties/).

## Deployment Configuration Profile

The **Deployment Configuration Profiles,** used with the **Deploy** option, are editable. The values are set from the configuration of the underlying services at the time of import/creation. You can change them according to the Deployment Environment settings.

[![config deploy](/learn/assets/config_deploy.png)](/learn/assets/config_deploy.png)

For more information, see [Deployment Profile](/learn/app-development/deployment/deployment-profile).

## Prefab Configuration Profile

If your app is using Prefab which has services imported, you can configure the same here. Same as with the app profiles, only Deployment Profile is configurable. Also, for Prefabs, you cannot change the Security settings.

[![config prefab](/learn/assets/config_prefab.png)](/learn/assets/config_prefab.png)

## Creating Configuration Profile

You can choose to **add different configuration profiles** as per the need of the application. These profiles can be deleted.

:::note
This custom profile can be used when exporting the project as a WAR file.
:::

[![config custom](/learn/assets/config_custom.png)](/learn/assets/config_custom.png)

## See Also

[One-Click Deployment](/learn/app-development/deployment/one-click-deployment)  
[Building a War file from a WaveMaker Project](/learn/app-development/deployment/building-with-maven)