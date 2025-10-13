---
title: "Configuration Management"
id: "configuration-management"
---
---

## Introduction

Each service in a WaveMaker application externalizes its configuration properties through [Config Profiles](/learn/app-development/deployment/configuration-profiles/). This externalized configuration helps isolate the code from the configuration. Therefore, the application/service configuration can be updated without changing the code.

For example, the configuration of a DB service includes the hostname, DB credentials. In contrast, the configuration of a REST service can include hostname, context path, and more.

In this section, learn how you can externalize configuration through Config Profiles, which works out of the Maven Profile concept. You provide the configuration values during the application build time through the maven profile property, i.e., when generating the war file. For more information about managing the config profiles, see [Configuration Profiles](/learn/app-development/deployment/configuration-profiles/).

### Background

In a typical scenario, the users maintain multiple profiles, including Development, QA, Stage, and Production, containing different configuration values. You build a war file for the respective environment by passing the profile to use for the configuration values.

:::important
However, there are some concerns with this approach.

1. The war file has to be rebuilt for every environment using a different profile file.

2. The secrets, such as DB password, API keys, etc., are checked in the source code, which ideally should be managed only by Ops teams.
:::

## Configuration Profile Management

:::note
This is a new approach applicable from the [release 10.8.0](/learn/wavemaker-release-notes/v10.8.0).
:::

The new generation of DevOps follows the cloud-native strategy [12-factor app](https://12factor.net/) wherein the war file is built only once, called an immutable war file. The immutable war file does not have the configuration values packaged in it. Instead, they will have placeholders that should be provided at the time of deployment; this enables the use of Docker images and versioning them based on the application version. 

## Building an Immutable War

To build an immutable war file, you need the profile name to input the maven command, as shown below.

```
shell>mvn clean install -P<profile-name>
```

## Ways to Build an Immutable War

Here you have multiple options:

### Using an Existing Deployment Profile

Use an existing deployment profile, called Deployment. It is the default profile that comes with the application. You can use it to build the immutable war file. In this approach, the default values for all properties are already defined in the profile. These profiles will be used if the configuration values are not provided during the Deployment time. 

:::note
However, using this approach can leave users confused about whether configured values are picked up during the application start.
:::

### Create a New Immutable Profile

:::note
We recommended using this approach.
:::

Create a new profile called “immutable” and use it to build the war file. We recommend that you create a new profile and make the configuration values, including properties containing secrets information, empty in the profile file. This way, you control all the other non-secret configuration values through the profile and the secret values through Deployment.

### Using Custom Placeholders

You can use custom placeholders in the profile file. For example, if the profile property name is `DB.hrdb.password`, you can map the property name to your own custom property name such as `db_password`, you should mention the same as `${db_password}`. 

:::note
Assuing you are using the sample `HRDB` database in the following example.
:::

**Example**:

```
db.hrdb.password=${db_password}
```

When the application starts, the WaveMaker application will try to resolve the `db_password` by applying one of the options when deploying an Immutable war.

## Deploying an Immutable War

When the immutable war file gets deployed with placeholders, the placeholder values should be resolved to actual values. You can achieve this in multiple ways, as given below.

- Using Environment Properties
- Using System Properties
- Using Custom Property Sources

### Using Environment Properties

The configuration values for the property placeholders can be provided using the Operating System specific environment properties. This will override the property values already present in the war file. 

For example, if you want to set the database password through the environment property, you need to add the following property to the OS Environment.

```
db.<database-service-name>.password=<db-password>
```

For HRDB database:

```
db.hrdb.password=mypassword
```

:::important
The environment property names cannot contain a dot (“.”) in its name, and it should be full lower case or completely upper case. Hence you need to normalize the key before setting it on the environment. So It can be written as `db_hrdb_password`, or `DB_HRDB_PASSWORD`.
:::

So, it can be written as specified below:

For Windows:

```
SET hrdb.password=mypassword
```

For Linux:

```
EXPORT hrdb.password=mypassword
```

### Using System Properties

The configuration values for the property placeholders can be provided using the Java System properties using the “-Dkey=value” pairs. This will override the property values already present in the war file. 

For example, if you want to set the database password through the system property, you need to add the following property to the Java command of the respective web server.

```
-Ddb.<database-name>.password=<db-password>
```

For HRDB:

```
shell>java -Ddb.hrdb.password=mypassword <rest-of-command-for-web-server-start>
```

### Using Custom Property Sources

The use of Environment Properties or System Properties makes your war file immutable and can achieve compliance with 12-factor app deployment. However, it is not suitable for cases, particularly where you want to programmatically retrieve the configuration from external sources when the application starts.

## What's Not Supported by Environment Properties and System Properties

:::important
To address the following cases, WaveMaker introduced Custom Property Sources, such as [BootStrap Property Source](#bootstrap-property-source) and [Dynamic Property Source](#dynamic-property-source) explained in the next section.
:::

Note that Environment Properties and System Properties do not support the following cases.

### Configuration Managed in a Database 

In some cases, the developer wants to retrieve the configuration from a database and use it as an application configuration when the application starts.

### Configuration through an API 

In some cases, you may have to call an external API to retrieve the application's configuration.

### Encrypted Sensitive Information or Control via Encryption

In some cases, you want to decrypt the encrypted values provided via profile properties, environment variables, or system properties based on the customer's requirements.

### Controlling the Refreshing Properties

There are few properties that you would like to refresh periodically without redeploying the application.

### Contextual Configuration based on Logged-in User

When you want to add configuration based on the logged-in user's context, such as multi-tenancy, provide different configuration values based on the caller context.

## BootStrap Property Source

WaveMaker introduced a class called [AbstractBootstrapPropertySource](https://github.com/wavemaker/wavemaker-app-runtime-services/blob/master/wavemaker-app-runtime-core/src/main/java/com/wavemaker/runtime/core/props/AbstractBootstrapPropertySource.java) which should be extended and should provide the implementation for `getProperty()`.

### Sample Snippet

```java
public class MyAppBootstrapPropertySource extends AbstractBootstrapPropertySource {
@Override
public Object getProperty(String key) {
      if(key.equals(“hrdb.password”)) {
	//read the password from system properties and decrypt the value
	String encPassword = System.getProperty(“hrdb.password”);
            String password  = MyEncryptionUtils.decrypt(encPassword);
	return password;	
                  }
      return null; //return null if you cannot handle a property...
}
}
```

The name of the class should be added as context param to the `web.xml` file as given file:

```xml
    <context-param>
    <param-name>bootstrapPropertySource</param-name>
    <param-value>com.myapp.core.props.MyAppBootstrapPropertySource</param-value>
</context-param>
```

### Points to Note

1. When configured, this property source is registered as the first property source in the spring environment and this property source will be called during the bootstrap of the application.
2. The property source's `getProperty()` may be called multiple times for the same property key every time it uses it. Hence it would be best if you cached the properties in case the property values are retrieved using a database or an API request.
3. Since this property source is started or called even before spring context is initialized, you cannot use any spring beans inside this implementation.

## Dynamic Property Source

WaveMaker introduced another property source called Dynamic Property Source, which provides the configuration based on application runtime context such as Logged in user's context.

Dynamic Property Source is useful to multi-tenant applications where you want to route the user to different REST API servers based on the logged-in user's tenant or role. However, not all properties can be multi-tenantable. As of the [10.8 release](/learn/wavemaker-release-notes/v10.8.0), only the REST service-based properties can be provided through this property source.

You should extend the [AbstractDynamicPropertySource](https://github.com/wavemaker/wavemaker-app-runtime-services/blob/master/wavemaker-app-runtime-core/src/main/java/com/wavemaker/runtime/core/props/AbstractDynamicPropertySource.java) and provide the implementation for the `getProperty()` method as given below.

```java
public class MyAppDynamicPropertySource extends AbstractDynamicPropertySource {
@Autowired
private SecurityService securityService;

 @Override
public Object getProperty(String key) {
        if ("myRestService.host".equals(key) && securityService.isAuthenticated()) {
            String userName = securityService.getUserName();
            if ("user".equals(userName)) {
                return "dev.myappdomain.com";
            } else {
                return "prod.myappdomain.com";
            }
        }
        if ("app.environment.key1".equals(key)) {
            return "updateVal1";
        }
        return null;
}
}
```

:::note
In the above sample implementation, you override the property value for the keys `myRestService.host` and `app.environment.key1`. For other keys, it will fall back to other property sources defined in the environment.
:::

Define the bean `user-spring.xml` file as given below:

```java
<bean class=”my.app.package.MyAppDynamicPropertySource ” />
```

### Points to Note

1. When configured, this property source is registered as the first property source in the spring environment and this property source. 
2. The property source's `getProperty()` may be called multiple times for the same property key every time it uses it. Hence it would be best if you cached the properties in case the property values are retrieved using a database or an API request.
3. Since this property source starts after the spring context is initialized, you can Autowire any spring-managed beans and use them in your implementation.
4. Since this property source is started or called after the spring context is initialized, you will not be called for properties required in the Bootstrap process.

## Bootstrap vs Dynamic Property Source

Both the property sources will help in dynamically assigning the configuration values to the application. However, you need to understand the following differences.

1. Bootstrap should be used to pass the values required when the application starts. In contrast, the Dynamic property source should be used only when the configuration values could be different based on the caller context.
2. Both of these property sources can be invoked multiple times for the same property key. Hence you need to cache those values and use them in subsequent calls.
3. When both property sources are configured, the priority is given to the Dynamic Property Source, then the Bootstrap Property. Following that, precedence is given to the System and Environment Variables, respectively.
4. If the property source is unaware of the key, it should `return null` for the given property to check the property in the next available source, similar to the following order. 
    1. Dynamic Property Source
    2. BootStrap
    3. System Property
    4. Environment Variable.

## Consuming Properties in Java Services

In this section, you will understand how to use configuration properties in the application Java code. 

There are two ways to do it.

1. Using [@Value](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/beans/factory/annotation/Value.html) for fields is a convenient way to read configuration properties. These values are set during application bootstrap, so they cannot be used for reloadable or dynamic properties.

For example, if you need a configuration property to read numberOfWorkerThreads, it can be read using the code below.

```java
@Value(“app.environment.numberOfWorkerThreads”)
private int numberOfWorkerThreads;  // This value is not going to change even if the value is updated in the property sources
```

2. Using the [PropertyResolver](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/core/env/PropertyResolver.html) methods. PropertyResolver is the superclass of the environment.

For reloadable or dynamic properties supported using the above **bootstrapPropertySource** or **dynamicPropertySources**, the configuration property can be fetched every time on-demand using the `environment.getProperty` methods.

For example, reading from the [environment](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/core/env/Environment.html).

```java
@Autowired
Environment environment;

public void process() {
            String remoteHost = environment.getProperty(“app.environment.remoteHost”);
            Integer remotePort = environment.getProperty(“app.environment.remotePort”, Integer.class, 80);
            // ...
}
```
