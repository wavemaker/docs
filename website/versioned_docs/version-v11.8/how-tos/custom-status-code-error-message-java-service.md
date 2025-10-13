---
title: "Set Custom Status Code and Custom Error Message in Java Service"
id: "custom-status-code-error-message-java-service"
---
---

Java Services provide code customization of an application. These customizations help to meet specific requirements, integrate well with external systems, and extend the application's capabilities. Below are the steps to set a customized status code and error message.

## Set Custom Status Code in Java Service

In Java Service, you can customize the status code to be thrown as the response to any request. This can be useful in scenarios where you want to explicitly set a specific status code to indicate a particular condition or result. 

### Import the Necessary Classes

To set a custom status code, you will need to import the `javax.servlet.http.HttpServletResponse` class. In the Java service method, you can include this object as a parameter along with the `HttpServletRequest` object.

```java
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
```

### Example to Set Status Code

In this example, we can modify the response properties by using the **`HttpServletResponse`** object.

```java
public String sampleJavaOperation(String name, HttpServletRequest request, HttpServletResponse response) {
        logger.info("Starting sample operation with request url " + request.getRequestURL().toString());
        response.setStatus(400);
        return null;
}
```

In the above example, the `response.setStatus(400)` statement sets the HTTP status code of the response to 400, indicating a Bad Request. You can replace `400` with any desired HTTP status code based on your requirements.

By setting the status code in this way, you can control the response behavior and provide appropriate status information to the client or caller.

## Set Custom Error Message in Java Service

In Java Service, you can customize the error message to be displayed when the request fails. This can be done by using the `WMRuntimeException` class along with the `MessageResource` class to create and throw a customized exception.

### Import the Necessary Classes

In the Java service method, you can handle exceptions and throw a `WMRuntimeException` with a customized error message. The `MessageResource.create()` method allows you to create a message resource with the desired error message.

To set a custom error message, import the following classes:

```java
import com.wavemaker.commons.MessageResource;
import com.wavemaker.commons.WMRuntimeException;
```

### Example to Set Custom Error Message

Here's an example that demonstrates how to set a custom error message:

```java
public User getUserById(Integer userId) {
    try {
        User user = userService.getById(userId);
        return user;
    } catch (Exception e) {
        // Customized error message
        throw new WMRuntimeException(MessageResource.create("MESSAGE_USER_NOT_FOUND"));
    }
}
```

If an exception occurs while retrieving a user by their ID, a `WMRuntimeException` will be thrown with the error message specified by the `MESSAGE_USER_NOT_FOUND` key. You can replace `"MESSAGE_USER_NOT_FOUND"` with any desired message key or directly provide the error message as a string.

By customizing the error message in this way, you can provide more meaningful and informative error messages to clients or callers when requests fail.