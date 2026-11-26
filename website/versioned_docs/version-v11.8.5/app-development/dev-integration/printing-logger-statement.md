---
title: "Printing Logger Statement in Java Service using SLF4J"
id: "printing-logger-statement"
sidebar_label: "Print Logger Statement"
---
---

Logs are statements written to record events or any activity in an application. Logs help in debugging, monitoring, and analyzing the behavior of an application or system.

The SLF4J (Simple Logging Facade for Java) logging framework, with its simple and consistent API, provides a flexible and efficient way to print logger statements in Java services. It acts as a facade, allowing developers to choose from various logging implementations (example: Logback, Log4j2) without modifying the application's code. This decoupling ensures portability and simplifies the process of switching or configuring logging frameworks based on specific requirements or deployment environments.

Below are the steps to print logger statements in a Java service using the SLF4J logging framework. 

## Import the Necessary Classes

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
```

## Declare Logger Object in Java Service

```java
private static final Logger logger = LoggerFactory.getLogger(MyJavaService.class);
```

[![](/learn/assets/logger-declaration.png)](/learn/assets/logger-declaration.png)


## Ways to Print Logger Statement

When a Java service is created, it by default has the logger statement in the Java code. But to print a logger statement in a log file, you can make any one of the following changes.

### 1. Update the log4j2.xml file

- Open the `log4j2.xml` file.
- Include the following line, replacing `PackageName.JavaServiceName` with the actual package name and Java service name:

```xml
<logger name="PackageName.JavaServiceName" level="DEBUG"/>
```

[![](/learn/assets/log4j2-add-statement.png)](/learn/assets/log4j2-add-statement.png)

- This will configure the logger to print Debug-level statements for the specified Java service.

To know more about the `log4j2.xml` file, see [Enabling logs](/learn/app-development/dev-integration/chrome-developer-tool/#enabling-logs).

### 2. Modify the logger statement in Java service


- Find the existing logger statement in your Java service, such as `logger.debug("Statement")`.
- Replace `debug` with `info` to change the log level from DEBUG to INFO.
- This change aligns with the root level specified in the `log4j2.xml` file, which is set to INFO by default in WaveMaker's generated `log4j2.xml`.

```java
logger.info("Statement");
```

[![](/learn/assets/logger.info-javaservice.png)](/learn/assets/logger.info-javaservice.png)

To know more about **Log4j2** and Log levels, see [Log4j2](https://logging.apache.org/log4j/2.x/index.html).

