---
title: "WaveMaker application pom.xml"
author: Praveen Chandra
---


WaveMaker application encloses a pom.xml. It maintains the build resources, including filters, profiles, repositories, plugin management, dependencies, and user customizations. 

You would have to edit pom.xml when changing the dependency versions or add custom configurations for immediate fixes when needed. When you keep adding these configurations, it lengthens the generated pom.xml with the details of the application configurations and the Studio configurations that the developers only sometimes need access to. For this reason, the pom structure has been remodeled to inherit from the parent pom, making it easy to read and manage the code. 

<!-- truncate -->

## Hierarchy with a Parent pom

We introduce the parent pom to the generated application. 

Every generated application must depend on this parent pom, which contains all the generic build resources, filters, profiles, and essential profiles like development/production, repositories, and plugin management. 

The parent pom furthermore depends on another pom, i.e., the wavemaker-app-dependencies pom, with all the app runtime dependencies and their versions as properties. The build-helper-maven-plugin is still in the application pom as it contains the list of services created in the application.

![pom-hierarchy](/learn/assets/pom-hierarchy.png)

This model introduces less verbosity in the generated pom.xml, making it clear and concise for developers to understand, and can easily add further customization to the pom.xml.

Below is a default pom.xml generated when a WaveMaker project is created.

![default-pom](/learn/assets/default-pom.png)

:::note
The wavemaker-app-parent and wavemaker-app-dependencies pom are published to the maven repository with a new version whenever WaveMaker releases a new version.
:::

## Advantages of New Pom Structure

Below are a few advantages of adapting to the new inheritance model of pom.

### Less Verbose
 
All the WaveMaker-related configuration is moved to the parent pom. So the generated pom is more readable, and the developer can easily understand the custom configurations.

### Upgrading without Migrations

In the previous structure, any migrations made to the application would be visible to the user in their VCS. But, since all the WaveMaker-related configurations are maintained in the parent pom, it avoids confusion, and only the WaveMaker Studio version changes would be visible in the VCS.	

### Ease of Library Version Overrides

Users can easily override the application runtime libraries, databases, or security dependencies.

1. By adding the new version in the properties of the application's pom.xml

 Example of upgrading log4j version: 

 ![log4j-pom-example](/learn/assets/log4j-pom-example.png)

2. Bypassing the property during application build.
 
 Example : **mvn clean install -Dlog4j.version=2.17.2** 

## Impact on Users Project

- Database and Security dependencies will now have only the groupId, and artifactId. The version has been removed since it is inherited from the parent pom. If you want to change the version, you can override it by adding the version details in the properties.
- Any custom configurations you made will still be in the pom.xml after the upgrade.


