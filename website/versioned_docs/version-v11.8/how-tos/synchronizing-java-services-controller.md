---
title: "Synchronizing Java Services Controller"
id: "synchronizing-java-services-controller"
---
---

Create Java Services in IDE using few simple commands. Instead of creating a java service in Studio workspace and pull changes into IDE, you can use the commands descibed in this document to create Java Service directly from IDE. This automatically creates a Java Service in the Studio workspace. 

## Creating a new Java Service

For creating a new java service, use any of the following commands.

### Using parameters

In the following lines of code, `serviceClassName` is your service name, and `packageName` is your package name for your service.

```
mvn wavemaker-studio:create-javaservice -DserviceId={serviceClassName}
-Dpackage={packageName}
```

:::note
`serviceClassName` should be a valid Java identifier and should not contain any special characters.
:::

### Without Parameters

If you do not provide parameters in the command, you will be prompted to enter the service name and package name.

```
mvn wavemaker-studio:create-javaservice
```

## Pull Created Java Services from Studio to IDE

To get the created service changes from the studio to IDE, use the `autoPull` parameter, or pull via `workspace sync plugin pull`.




:::important
By default `-DautoPull` parameter value is set to true.

If the value is set to true, changes from Studio workspace to IDE will be pulled automatically. If the value is set to false, use `workspace sync plugin pull` to pull the changes to IDE.

These changes include newly created Java Service and may also contain other studio changes.
:::

If we do not want to get the changes automatically, specify the parameter value as false, as shown in the code below.

```
mvn wavemaker-studio:create-javaservice -DserviceId={serviceClassName} 
-Dpackage={packageName} -DautoPull=false
```

## Compile Existing Services

For re-generating the controller for the existing services, or services that are modified in IDE, use the following command.

```
mvn compile
```