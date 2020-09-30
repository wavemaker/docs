---
title: "Import Connectors"
id: "connectors-import"
sidebar_label: "Import Connectors"
---
---

## Import a Connector into WaveMaker Studio

We need a connector zip to import into WaveMaker application. <br>
There are two ways to get the zip.
- Go to Releases section in the WaveMaker's Connectors Github account and get the latest released version. 
- After building connector you will be having a zip artifact in /dist/connector-name-version.zip. 

In WaveMaker studio, import connector zip in the import resource dialogimport resource allow you to import connector zip artifact.

[![lftr_sel](/learn/assets/connector/connector-import.png)](/learn/assets/connector/connector-import.png)

## Externalising connector properties
On successful import of connector into WaveMaker application, connector externalizable properties are automatically profiled in WaveMaker application profiles. Format of the connector profiled property is

```Connector.<<connectorId>>.<<configurationId>>.property=value```

- **connectorId**: name of the connector
- **configurationId**: you can import connector once and can create multiple instance of it. While creating multiple instances you have to provide configurationId of each instance. By default configurationId is “default”.

[![lftr_sel](/learn/assets/connector/connector-profiles.png)](/learn/assets/connector/connector-profiles.png)

## Use connector in Java service
Using a connector in java service is the same as using any spring bean. You can autowire connector in any java service and can be used in your APIs.

[![lftr_sel](/learn/assets/connector/connector-in-java-service.png)](/learn/assets/connector/connector-in-java-service.png)

## Multiple Instance of Connector
You can import a connector into the WaveMaker project once and create as many instances you need.
Such as, you can import mongodb connector once, and can be used for various mongodb databases by creating multiple instances of connector. 

Steps to create multiple instances of connector
**Step1**: Since each instance of connector will have its own properties. So end users need to add profile properties for new instances of connectors. In the following profile property, <<configurationname>> is the name of the new instance of connector. 

```Connector.<<connectorname>>.<<configurationId>>.property=value``
Add all profile properties in the above format. Such as adding new instance “salesmongodb” properties in the following screen

[![lftr_sel](/learn/assets/connector/connector-multi-instance-profile.png)](/learn/assets/connector/connector-multi-instance-profile.png)

**Step2**: Add placeholders of above new properties in app.properties

[![lftr_sel](/learn/assets/connector/connector-app-config.png)](/learn/assets/connector/connector-app-config.png)

**Step3**: Using new instance of connector in the java service

[![lftr_sel](/learn/assets/connector/connector-java-service-new-instance.png)](/learn/assets/connector/connector-java-service-new-instance.png)

You can create variables on top of java service to invoke java service from UI






