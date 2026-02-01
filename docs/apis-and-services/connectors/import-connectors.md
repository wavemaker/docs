---
last_update: { author: "Priyanka Bhadri" }
---

# Importing Connectors 

WaveMaker allows you to import Connector artifacts into your application so you can reuse integration logic created outside of your app. Connectors packaged as ZIP artifacts can be easily imported and configured, and then consumed using Java Services or Spring beans within your app.

## Import a Connector into WaveMaker Studio

To import a Connector into your WaveMaker application, you need the Connector ZIP file:

- Download the latest released Connector ZIP from the Marketplace [Connectors List](https://next-marketplace.onwavemaker.com/marketplaceartifacts/124)

- Or, if you built the Connector yourself, use the ZIP artifact located in the `dist/` directory of your Connector project (e.g., `Connector-name-version.zip`).



Once the zip is available, connectors can be added to an application through the **Import Resource** capability. The Connector ZIP file is selected from the local system and imported into the application, making the connector available for use across the project. Once imported, the connector can be configured and consumed like any other integrated service within the application.

After import, the Connector becomes available as a reusable backend component.

## Externalizing Connector Properties

When a Connector is successfully imported:

- Its externalizable properties are automatically profiled into your WaveMaker application's profiles.
- These properties can be configured per Connector instance.

The format for Connector profile properties is:

```
Connector.<<connectorId>>.<<configurationId>>.property=value
```

Where:

- **connectorId**: Name of the Connector
- **configurationId**: Identifier for a particular instance of the Connector (default is `default`)

By externalizing properties, you can manage credentials, endpoints, and configuration values through application profiles.

## Using a Connector in a Java Service

Once a Connector is imported:

- It behaves like any other Spring bean within your WaveMaker application.
- You can autowire the Connector inside a Java Service and use its APIs to invoke external systems.

**Example:**

```java
@Autowired
private YourConnector yourConnector;
```

This makes it straightforward to integrate Connector logic into your backend services and expose custom APIs.

## Creating Multiple Instances of a Connector

You can import a Connector once and create multiple instances with different configurations for different use cases (e.g., connecting to multiple databases or environments).

### Steps to Create Multiple Instances

#### 1. Add Profile Properties

Add profile entries for each Connector instance using the format:

```
Connector.<<connectorname>>.<<configurationId>>.property=value
```

**Example for a new instance named `salesmongodb`:**

```properties
Connector.mongodb.salesmongodb.host=...
Connector.mongodb.salesmongodb.port=...
```

#### 2. Add Property Placeholders

Add placeholders for the new configuration properties in your `app.properties` file.

#### 3. Use the New Connector Instance

In your Java Service, reference or autowire the specific Connector instance based on the profile configuration.

By following these steps, you can manage different Connector configurations independently within the same app.

## Summary

Importing Connectors in WaveMaker enables you to:

- Bring in packaged Connector artifacts as reusable integration modules.
- Externalize and profile configuration properties for flexible runtime use.
- Consume Connector functionality via Java Services.
- Create multiple Connector instances to support multiple environments or use cases.

This approach enhances modularity, reusability, and separation of integration logic from core application code.

## Related Documentation

- [Building a New Connector](./build-a-connector.md) - Learn how to create custom connectors
