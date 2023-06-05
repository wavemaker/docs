---
title: "Set Custom Status Code and Custom Error Message in Java Service"
id: "custom-status-code-error-message-java-service"
---
---

Java Services provide code customization of an application. These customizations help to meet specific requirements, integrate well with external systems, and extend the application's capabilities. Below are the steps to set a customized status code and error message.

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
