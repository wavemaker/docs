---
title: "Integrating JUnit Tests for WaveMaker Application"
id: "integrating-junit-tests-for-wavemaker-application"
---
---

### Overview

JUnit is a unit testing framework for the Java programming language. JUnit has been important in the development of test-driven development. These tests are required whether imported services are working as expected or not, before proceeding to run/deployment of the application. This document demonstrates how to integrate JUnit tests in an application developed by WaveMaker RAD.

### Goals

1. Integrate JUnit tests in the WaveMaker application
2. Writing sample test cases for services.

### Prerequisites

1. IDE (IntelliJ IDEA, Eclipse)
2. WaveMaker Application
3. Git
4. Maven

## Integrating JUnit Tests into App

### Configuration

1. Export the WaveMaker application as a [zip file](/learn/app-development/dev-integration/import-export-update-apps#export-project).
2. Import this zip file into IDE (Use [WaveMaker workspace sync plugin](/learn/how-tos/synchronizing-wavemaker-apps-ides-beta)).
3. Add the following dependencies in pom.xml file under the dependencies tag.

```java 

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

4. Create a file with name project-springapp-test.xml in src/test/resources folder
5. Add below snippet to the file

```java

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
  <import resource="file:src/main/webapp/WEB-INF/project-springapp.xml"/>
</beans>
```

6. Go to folder src/test/java and create a package namely com/{appName}/test/core 
7. Add a file with name BaseTest.java
8. Add code snippet to the file

```java

package com.<appName>.test.core;

import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.GenericXmlWebContextLoader;
import org.springframework.test.context.web.WebAppConfiguration;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(loader = GenericXmlWebContextLoader.class,
        locations = "classpath:project-springapp-test.xml", initializers = com.wavemaker.runtime.security.DefaultBootStrapPropertySourceInitializer.class)
@WebAppConfiguration
public abstract class BaseTest {

}

```
### Writing Test Cases

9. Now start writing test classes under src/test/java package with a class extending BaseTest and with annotation @Test
10. Code snippet for a sample test 

```java
import com.<appName>.test.core.BaseTest;
import com.<appName>.myjavaservice.MyJavaService; 
import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class MyJavaServiceTest extends BaseTest {

    @Autowired
    private MyJavaService myJavaService; // MyJavaService is the Java Service added in app
    
    @Test
   public void getJsonData() {
       Object jsonData = myJavaService.returnJSONData();
       Assert.assertNotNull(jsonData);
   }
}
```

## See Also

[How to send emails using Java Service](/learn/how-tos/sending-email-using-java-service/)  
[How to implement forgot password feature using Java Service](/learn/how-tos/implementing-forgot-password-feature-using-java-service/)  
[How to schedule a Java Service](/learn/how-tos/scheduling-java-service/)  
[How to accomplish Pre-Post Processing for a DB Service APIs](/learn/how-tos/pre-post-processing-db-service-apis/)  
