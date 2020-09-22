---
title: "Building Connectors"
id: "connectors-building"
sidebar_label: "Building Connectors"
---
---

# Building Connector

This pages explains about how to build a connector and detail explination of the connector project & its structure

Connector project is basically a multi module spring based maven project which can be develop and build outside of WaveMaker studio.

## Prerequisites
1. Java 1.8 or above
2. Maven 3.1.0 or above
3. Any java editor such as Eclipse, Intelij..etc
4. Internet connection 

## Connector Archetype
WaveMaker introduced a maven based Connector Archetype to create a new connector. Connector project can be built in following steps

### Step1
Open maven setting xml file, you can find at  $M2_HOME/conf/settings. xml. Adding the following profile in the profiles section

```
<profile>
  <id>wmrepo</id>
    <repositories>
      <repository>
        <id>wavemaker-maven-repo</id>
        <name>wavemaker-maven-repo</name>
        <url>https://s3.amazonaws.com/maven.wavemaker.com/release</url>
      </repository>
    </repositories>
    <properties>
      <archetypeGroupId>com.wavemaker.connector</archetypeGroupId>
      <archetypeArtifactId>wavemaker-connector-archetype</archetypeArtifactId>
      <archetypeVersion>0.1</archetypeVersion>
     </properties>
</profile>
```

Activate above profile by adding following lines outside of profiles 

```
 <activeProfiles>
    <activeProfile>wmrepo</activeProfile>
 </activeProfiles>
```

### Step2
You can create connector project by using any of the following command.Go to your terminal and execute following command

```
1. mvn archetype: generate –DgroupId=<<groupId>> -DartifactId=<<artifactId>> -Dversion=<<version>>
```
```
2. mvn archetype:generate
```

In either of above approach,  you should provide following values 

```
<<groupId>> : 
group id of the connector project
<<artifactId>> : artifact id of connector project
<<version>> : version of connector project
```

Eg: In the following example we are going to create a mongodb connector using wavemaker-connector-archetyp
e
```
mvn archetype:generate –DgroupId=com.wavemaker.connector -DartifactId=mongodb -Dversion=1.0 
```

### Step3

Above archetype will execute interactively. As a result it will ask the end user to provide values for few properties and note these properties have default values if the user does not provide any value then default value will be considered.

- Define value for property 'package' <<groupId>>: :
- Define value for property 'connector-name' <<artifactId>>: :
- Define value for property 'connector-description': A simple connector <<connector-name>> that can be used in WaveMaker application: :
- Define value for property 'connector-java-class-name' WaveMaker<<connector-name>>Connector: : 

For the above properties will have default values such as 

**package:** default value is groupId given in mvn command
**connector-name:** default value is artifactId given in the mvn command
**connector-java-class-name:** default value is Wavemaker<<connectorName>>Connector

Eg.
[![lftr_sel](/learn/assets/connector/connector-archetype.png)](/learn/assets/connector/connector-archetype.png)

After providing above values, it asks your confirmation to create a connector. After confirming, connector project will be created. You can open connector project in any java editor such as Eclipse, IntelliJ..etc

Eg.
[![lftr_sel](/learn/assets/connector/connector-archetype-finish.png)](/learn/assets/connector/connector-archetype-finish.png)


## About Connector Project

Basically connector project contains three modules
1. **API module**: this module contains a connector interface and skeleton of connector APIs.
2. **Implementation module**: this module contains actual implementation of connector API.
3. **Packaging module**: this module will take care of packaging the connector and connector developers don't need to do any changes in this module.

[![lftr_sel](/learn/assets/connector/connector-module-base.png)](/learn/assets/connector/connector-module-base.png)

### API Module

In this module user are expected to write connector interfaces and this module contains

1. **Connector interface**: Connector is identified by an annotation “WMConnector”. Any interface which does have WMConnector annotation is considered a connector interface. In a connector project, you can have multiple interfaces with WMConnector annotations, however name value in the annotation should be the same.
2. **Connector metadata**: Metadata of a connector such as version, name, description and connector configuration class. 
Version: This is the connector version, for every build increase this version.WaveMaker allow upgrade of connector only when version is same or higher than existing version.
Connector configuration class: is the spring configuration class available in the implementation module, if you have any changes either class name or package name change, then you must update in this file.

[![lftr_sel](/learn/assets/connector/connector-api-module.png)](/learn/assets/connector/connector-api-module.png)

### Impl Module
In this module user are expected to write their implementation of connector interfaces and this module contains

1. **Implementation to connector Interface**: Actual implantation of connector interfaces.
2. **Spring configuration class**: Connector application is a spring based project and there will be spring configuration class where users can add their beans, component scans, properties loading. Etc
3. **Properties files**: There are two properties files in each connector project
- **connector-externalizable.properties**: These are properties which are externalized to WaveMaker application when this connector is imported. As a result values can be managed in the WaveMaker application.
- **connector-local.properties**: These properties will not be externalized to WaveMaker application and they are used only internally inside the connector project.
- **Custom properties files**: Connector Developer can have any no of properties files, however developer should add these properties file spring configuration class.
- **Note**: These custom properties files are not externalize to WaveMaker application.

4. **POM.xml**: User can add any maven dependencies based on the connector project requirement. However you have wavemaker-app-runtime as a bom dependency in connector parent pom, most of the artifacts are available as transitive dependencies in bom, so add transitive dependency in your API or IMPL module without declaring version.

:::Note
To see all the dependencies which are already available in wavemaker-app-runtime, you can either open wavemaker-app-runtime pom.xml by clicking on the dependency artifact or you can run following maven command to see all dependencies
:::

```
mvn dependency:tree
```

5. **Test cases**: There will be a test case for each connector interface, where users can add test cases, in addition test cases will have its own properties file and spring configuration class.

[![lftr_sel](/learn/assets/connector/connector-impl-testcases.png)](/learn/assets/connector/connector-impl-testcases.png)

### Packaging Module
This module is used for packaging the connector. There will be a plugin in the packaging module pom xml file, which is responsible for packaging of connector as a ZIP artifact. User is not supposed to do any changes in this module.

After connector development is done then it is time to build the connector. Use following command to build connector
```mvn clean install```
On successful build, under the connector project “dist” directory, a zip artifact will be available.

[![lftr_sel](/learn/assets/connector/connector-packaging-zip.png)](/learn/assets/connector/connector-packaging-zip.png)













