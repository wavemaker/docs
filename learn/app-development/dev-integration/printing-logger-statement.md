---
title: "Print Logger Statement"
id: "print-logger-statement"
---
---

Logs are statements written to record events or any activity in an application. Logs help in debugging, monitoring, and analyzing the behavior of an application or system.

## How to Print Logger Statement

### Prerequisites

Below are the prerequisites to print a logger statement in Java service.

**Required Import Statements:**

```Java

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

```

**Required logger declaration:**

```Java
private static final Logger logger = LoggerFactory.getLogger(MyJavaService.class);
```

[![](/learn/assets/logger-declaration.png)](/learn/assets/logger-declaration.png)

### Printing Logger Statement

When a Java service is created, it by default has the logger statement in the Java code. But to print a logger statement in a log file, you can make any one of the following changes.

- Include `<logger name="PackageName.JavaServiceName" level="DEBUG"/>` in the `log4j2.xml` file.

[![](/learn/assets/log4j2-add-statement.png)](/learn/assets/log4j2-add-statement.png)

To know more about the `log4j2.xml` file, see [Enabling logs](https://docs.wavemaker.com/learn/app-development/dev-integration/chrome-developer-tool/#enabling-logs)

- Replace `logger.debug("Statement")` with `logger.info("Statement")` in the Java service.

[![](/learn/assets/logger.info-javaservice.png)](/learn/assets/logger.info-javaservice.png)
