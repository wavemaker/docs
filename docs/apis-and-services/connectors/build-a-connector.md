---
last_update: { author: "Priyanka Bhadri" }
---

# Build a new Connector 

WaveMaker Connectors are reusable, Spring-based Java modules that enable integration with external systems and services. A Connector encapsulates integration logic and exposes it as a reusable SDK that can be imported and used across multiple WaveMaker applications.

A Connector project is developed as a multi-module Maven project and packaged as a ZIP artifact that can be imported into WaveMaker Studio.

## Prerequisites

Before building a custom Connector, ensure the following are available:

- Java 1.8 or later
- Maven 3.1.0 or later
- A Java IDE (Eclipse, IntelliJ IDEA, etc.)
- Internet access for downloading Maven dependencies and archetypes

## Creating a Connector Project

WaveMaker provides a Maven archetype to generate the base structure of a Connector project.

### Step 1: Configure Maven Settings

Open the Maven settings.xml file located at:

```
$M2_HOME/conf/settings.xml
```

Add the following profile inside the `<profiles>` section:

```xml
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

Activate the profile by adding:

```xml
<activeProfiles>
  <activeProfile>wmrepo</activeProfile>
</activeProfiles>
```

### Step 2: Generate the Connector Project

Run the following command in a terminal:

```bash
mvn archetype:generate
```

You will be prompted to provide:

- groupId
- artifactId
- version
- Connector name
- Connector description
- Java class name

Accept the defaults or customize them as required. Maven generates the Connector project with a standard structure.

## Connector Project Structure

A WaveMaker Connector project consists of three main Maven modules:

```
connector-root
├── connector-api
├── connector-impl
└── connector-dist
```

### API Module

The API module defines the public interface of the Connector.

**Responsibilities:**

- Declare Connector interfaces
- Define metadata such as name, version, and description
- Mark Connector interfaces using `@WMConnector`

Only interfaces annotated with `@WMConnector` are recognized as valid Connectors by WaveMaker.

### Implementation Module

The Implementation module contains the actual integration logic.

**Responsibilities:**

- Implement Connector interfaces
- Configure Spring beans
- Load and manage properties
- Add third-party dependencies

**Configuration Files:**

- `connector-externalizable.properties`
  Properties exposed to WaveMaker applications after import

- `connector-local.properties`
  Properties used only within the Connector project

- Additional custom property files (optional)

**Dependencies:**

- Add required dependencies in `pom.xml`
- Common libraries are already available via WaveMaker's runtime BOM

**Testing:**

- Unit tests can be added for Connector APIs
- Each test can have its own configuration and properties

### Packaging Module

The Packaging module is responsible for creating the distributable ZIP file.

**Responsibilities:**

- Package API and implementation modules
- Bundle configuration and metadata
- Produce a ZIP artifact compatible with WaveMaker Studio

No manual changes are typically required in this module.

## Building the Connector

To build and package the Connector, run:

```bash
mvn clean install
```

After a successful build, the Connector ZIP file is generated in the `dist/` directory.

This ZIP file can be imported directly into a WaveMaker application.

## Using the Connector in a WaveMaker Application

Once imported into a WaveMaker project:

- Externalizable properties appear as configurable profiles
- The Connector is available as a Spring bean
- Connector APIs can be autowired and invoked from Java Services
- Multiple Connectors can coexist within the same application

## Summary

Building a custom Connector in WaveMaker involves:

1. Creating a Maven-based project using the Connector archetype
2. Defining Connector APIs and metadata
3. Implementing integration logic using Java and Spring
4. Packaging the Connector as a ZIP artifact
5. Importing and consuming the Connector within WaveMaker applications

This approach ensures reusable, maintainable, and extensible integrations while giving developers full control over backend logic and dependencies.
