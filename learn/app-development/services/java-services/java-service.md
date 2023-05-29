---
title: "Java Service"
id: "java-service"
---
---

## Overview

Java Services allow app developers to write custom business logic or enable integration with 3rd party libraries and tools and are deployed on the Server side. For every Java Service created in WaveMaker, its REST API contract is auto-generated and is ready for integration with front-end layer (web or mobile).

Variables are required to invoke Java Service methods, each Variable can be configured to take the necessary method parameters required as data inputs and return JSON response. Variables internally perform the necessary conversion to invoke the equivalent REST API endpoint/resource for the Java Service methods.

## Creating a Java Service

When you create a Java Service in WaveMaker, Java sample file is created. You can access this file from the _Java Services_ Resources. You can edit the file and even delete the service.

[![](/learn/assets/Java_services.png)](/learn/assets/Java_services.png)

A Java method can have input and output in the form of an individual or a set of parameters. These parameters can be of the following types: 

### Input parameters
Input parameters can be of the type:

- primitive objects,
- POJO classes,
- a collection of POJO classes and primitives,
- page
- Http servlet response/request which can be passed as URL-based header params or in the form of cookies
- a pageable object with values pertaining to the page to be retrieved, the size of each page and sort field name

### Output parameters
Output parameters can be of the type:

- primitive objects,
- POJO classes,
- a collection of POJO classes and primitives,
- page

## Java Services framework

Creating a Java Service generates multiple files, of which the following are of importance:

[![](/learn/assets/JS_files.png)](/learn/assets/JS_files.png)

### Spring Controller File 
MyJavaController.java, in this example - This file contains the details related to the Java Service. Public methods in the controller class are wrappers of the underlying Java Service code, acting as an endpoint which can be invoked as REST API. The methods can be hidden or exposed to the client using the directives: @HideFromClient and @ExposeToClient, respectively. Request JSON object from the invoking client is automatically converted to POJOs in the method parameter for POST/PUT/DELETE. Similarly, the response POJOs get converted to JSON object.

### API JSON File
`MyJavaService_API.json`, in this example - contains the file structure and details as used by the API Documentation. This is available only during the design time.

### Spring Bean Configuration File

`MyJavaService.spring.xml`, in this example - Bean classes for service/method lookup

## How to Print Logger Statement

**Required Import Statements:**

```Java

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

```

When a Java service is created, it by default has the logger statement in the Java code. But to print a logger statement in a log file, you can make any one of the following changes.

- Include `<logger name="PackageName.JavaServiceName" level="DEBUG"/>` in the `log4j2.xml` file.

[![](/learn/assets/log4j2-add-statement.png)](/learn/assets/log4j2-add-statement.png)

To know more about the `log4j2.xml` file, see [Enabling logs](https://docs.wavemaker.com/learn/app-development/dev-integration/chrome-developer-tool/#enabling-logs)

- Replace `logger.debug("Statement")` with `logger.info("Statement")` in the Java service.

[![](/learn/assets/logger.info-javaservice.png)](/learn/assets/logger.info-javaservice.png)

## Status Code

HTTP status code is received as a response that indicates if the HTTP request is successful. For example, `404` is a status code to show that the requested resource is unavailable but may be available in the future.

### To Set Custom Status Code in Java Service

In Java Service, you can customize the status code to be thrown as the response to any request.

**Required Import Statements:**

```Java

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

```

**Example to Set Status Code:**

```Java
public String sampleJavaOperation(String name, HttpServletRequest request, HttpServletResponse response) {
        logger.info("Starting sample operation with request url " + request.getRequestURL().toString());
        response.setStatus(400);
        return null;
}
```

### To Set Custom Error Message in Java Service

In Java Service, you can customize the error message to be displayed when the request fails.

**Required import statements:**

```Java
import com.wavemaker.commons.MessageResource; 
import com.wavemaker.commons.WMRuntimeException;

```

**Example to set error message:**

```Java

public User getUserById(Integer userid) 
{        
    try        
    {          
        User user = userService.getById(userid);         
        return user;                
        }        
        catch(Exception e)        
        {        
            //Customized error message.         
            throw new WMRuntimeException(MessageResource.create("MESSAGE_USER_NOT_FOUND"));        
            }     
}

```
