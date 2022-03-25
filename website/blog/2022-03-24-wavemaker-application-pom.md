---
title: "WaveMaker application pom.xml"
author: Praveen Chandra
---

Every generated WaveMaker application will have a pom.xml that has the build resources, filters, profiles, repositories, plugin management, dependencies along with customizations done by the user. The generated pom.xml is too verbose and contains a lot of information that is not needed by the application developer. It also contains the configurations that are needed only by the studio, not really by the application. So the current pom structure has been changed to inheritance model.
<!-- truncate -->

## Change in pom.xml Hierarchy

WaveMaker studio v11 onwards, we are introducing the parent pom to the generated application. That means every generated application must depend on this parent pom which contains all the generic build resources, filters, profiles ( the basic/must have profiles like development/production), repositories, plugin management. 

The parent pom again depends on another pom i.e wavemaker-app-dependencies pom which has all the app runtime dependencies along with their versions as properties.
The build-helper-maven-plugin is still in the application pom as it contains the list of services created in the application.

![pom-hierarchy](/learn/assets/pom-hierarchy.png)

This new model introduces less verbosity in the generated pom.xml and it is very clear/easy to understand for the developer that additional customization that are made in the pom.xml

Below is a default pom.xml that is generated when a WaveMaker project is created.

![default-pom](/learn/assets/default-pom.png)

**Note : The wavemaker-app-parent and wavemaker-app-dependencies pom are published to the maven repository with a new version whenever a new WaveMaker release is done.**

## Advantages of new pom structure

Below are the few advantages after adopting the new inheritance model for pom in WaveMaker applications.

### Less Verbose
    
All the WaveMaker related configuration is moved to the parent pom. So the generated pom is easy to understand/more readable and the developer can easily understand the custom configurations made by him/her.

### Upgrading without migrations

In the old structure any migrations made to the application will be visible to the user in their VCS but now since all the WaveMaker related configurations are done in parent pom there will be no confusion for the user. Only the WaveMaker studio version change will be visible in their VCS.

### Ease of Library version overrides

The application runtime libraries, database or security dependencies can easily be overrided by the user 
1. By adding the new version in the properties of application pom.xml

   Example to upgrade log4j version: 

   ![log4j-pom-example](/learn/assets/log4j-pom-example.png)

2. By passing the property during application build.
   
   Example : **mvn clean install -Dlog4j.version=2.17.2** 

## Impact on the user projects 

- Database and security dependencies will now have only the groupId, artifactId and the version is removed since it is inherited from the parent pom. If any user wants to change the version they can override the version by adding the required version in the properties.
- Any custom configurations made by the user will still be in the pom.xml after the upgrade.


Please refer to the below link for the complete documentation in detail.