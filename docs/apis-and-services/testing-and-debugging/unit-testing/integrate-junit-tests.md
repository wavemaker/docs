---
last_update: { author: "Priyanka Bhadri" }
---

# Integrating JUnit Tests into a WaveMaker Application

WaveMaker allows you to integrate **JUnit tests** to validate your Java Services and other backend logic. The following steps outline how to set up and run JUnit tests within a WaveMaker project.

---

## Configuration

### 1. Export the Application

- Export your WaveMaker application as a ZIP file.

### 2. Import into IDE

- Import the exported ZIP into your IDE.
- If using Eclipse or IntelliJ, you can use the **WaveMaker Workspace Sync plugin** for seamless project synchronization.

### 3. Add Required Dependencies

Update the `pom.xml` file under the `<dependencies>` tag to include the following:

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>org.hamcrest</groupId>
    <artifactId>hamcrest-all</artifactId>
    <version>1.3</version>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>org.apache.tomcat</groupId>
    <artifactId>tomcat-el-api</artifactId>
    <version>8.5.35</version>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>org.apache.tomcat</groupId>
    <artifactId>tomcat-jasper-el</artifactId>
    <version>8.5.35</version>
    <scope>provided</scope>
</dependency>
```

### 4. Create Spring Test Configuration

Create a file named `project-springapp-test.xml` under `src/test/resources` with the following content:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
                      http://www.springframework.org/schema/beans/spring-beans.xsd">
  <import resource="file:src/main/webapp/WEB-INF/project-springapp.xml"/>
</beans>
```

### 5. Create Base Test Class

In `src/test/java`, create a package:

```
com.<appName>.test.core
```

Create a file `BaseTest.java` in this package:

```java
package com.<appName>.test.core;

import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.GenericXmlWebContextLoader;
import org.springframework.test.context.web.WebAppConfiguration;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(loader = GenericXmlWebContextLoader.class,
        locations = "classpath:project-springapp-test.xml",
        initializers = com.wavemaker.runtime.security.DefaultBootStrapPropertySourceInitializer.class)
@WebAppConfiguration
public abstract class BaseTest {
}
```

---

## Writing Test Cases

### Create Test Classes

- Place your test classes under `src/test/java`.
- Each test class should extend `BaseTest`.

### Add Test Methods

- Annotate test methods with `@Test` and use JUnit assertions to validate results.

### Example: Testing a Java Service

```java
import com.<appName>.test.core.BaseTest;
import com.<appName>.myjavaservice.MyJavaService;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class MyJavaServiceTest extends BaseTest {

    @Autowired
    private MyJavaService myJavaService; // Java Service to be tested

    @Test
    public void getJsonData() {
        Object jsonData = myJavaService.returnJSONData();
        Assert.assertNotNull(jsonData);
    }
}
```

This setup ensures your WaveMaker Java Services are properly loaded in a Spring test context, allowing you to run unit tests as part of your development workflow.
