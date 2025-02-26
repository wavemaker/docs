---
title: "Accessing Logged-in User Details using Java Service"
id: "accessing-loggedin-user-information-using-a-java-service"
---
---

In this document, learn how to get the logged-in user information using a Java Service. You write a handler to get user information. For example, get the username, userID, IP address, and browser details. To do this, follow the steps described below.

## Step 1: Create a Java Handler in Source

Write a java handler class by using an existing handler.

Create a service in the `src/main/java` inside the handlers folder. For example, `UserManagementApp/src/main/java/com/wavemaker/appscore/custom/handlers/CustomAuthenticationSuccessHandler.java`

[![](/learn/assets/Doc1.png)](/learn/assets/Doc1.png) 

For more information to add files in a project, see [including resource files](/learn/app-development/services/3rd-party-libraries/#including-resource-files).

## Step 2: Implementing Success Handler

:::note
Create these classes in an IDE and copy it in the path specified in the above screenshot in the `CustomAuthenticationSuccessHandler.java` file. For more information, see [working with IDE](/learn/app-development/dev-integration/extending-application-using-ides/).
:::

- Implement `WMAuthenticationSuccessHandler` interface and override the method `onAuthenticationSuccess`. This method invokes on successful login.

```java
public class CustomAuthenticationSuccessHandler implements WMAuthenticationSuccessHandler {

@Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
    WMAuthentication wmAuthentication) throws IOException, ServletException
        {
        }
}
```

- Use the following method parameters, including `HttpServletRequest`, `HttpServletResponse`, `WMAuthentication`. It allows accessing the logged-in user information.
- Create a `userMap` to capture user information as shown in the example below.

:::tip
Follow the commented-sections in the `CustomAuthenticationSuccessHandler.java` file in the following example.
:::

### Example

**`CustomAuthenticationSuccessHandler.java`**

```java
package com.wavemaker.appscore.custom.handlers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import com.wavemaker.runtime.security.WMAuthentication;
import com.wavemaker.runtime.security.handler.WMAuthenticationSuccessHandler;
import java.util.*;


public class CustomAuthenticationSuccessHandler implements WMAuthenticationSuccessHandler {

	private static final Logger logger = LoggerFactory.getLogger(CustomAuthenticationSuccessHandler.class);
        
        //Created the useMap to capture the userinfo.
		public static final Map<String,String> userMap=new HashMap<String,String>();

@Override
	public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
			WMAuthentication wmAuthentication) throws IOException, ServletException {
		
		//Accessing the ip address and userid and username
		
		final String userId=wmAuthentication.getUserId();
        final String username=wmAuthentication.getPrincipal();
		final String ip=httpServletRequest.getRemoteAddr();
		
		//Process the browser info from the header using 'User-Agent'
        final String browserDetails = httpServletRequest.getHeader("User-Agent");
        final String user = browserDetails.toLowerCase();

        String browser = "";

        //===============Browser Name Processing===========================
        if (user.contains("msie")) {
            String substring = browserDetails.substring(browserDetails.indexOf("MSIE")).split(";")[0];
            browser = substring.split(" ")[0].replace("MSIE", "IE") + "-" + substring.split(" ")[1];
        } else if (user.contains("safari") && user.contains("version")) {
            browser = (browserDetails.substring(browserDetails.indexOf("Safari")).split(" ")[0]).split(
                    "/")[0] + "-" + (browserDetails.substring(
                    browserDetails.indexOf("Version")).split(" ")[0]).split("/")[1];
        } else if (user.contains("opr") || user.contains("opera")) {
            if (user.contains("opera"))
                browser = (browserDetails.substring(browserDetails.indexOf("Opera")).split(" ")[0]).split(
                        "/")[0] + "-" + (browserDetails.substring(
                        browserDetails.indexOf("Version")).split(" ")[0]).split("/")[1];
            else if (user.contains("opr"))
                browser = ((browserDetails.substring(browserDetails.indexOf("OPR")).split(" ")[0]).replace("/",
                                                                                                           "-")).replace(
                        "OPR", "Opera");
        } else if (user.contains("chrome")) {
            browser = (browserDetails.substring(browserDetails.indexOf("Chrome")).split(" ")[0]).replace("/", "-");
        } else if ((user.indexOf("mozilla/7.0") > -1) || (user.indexOf("netscape6") != -1) || (user.indexOf(
                "mozilla/4.7") != -1) || (user.indexOf("mozilla/4.78") != -1) || (user.indexOf(
                "mozilla/4.08") != -1) || (user.indexOf("mozilla/3") != -1)) {
            browser = "Netscape-?";

        } else if (user.contains("firefox")) {
            browser = (browserDetails.substring(browserDetails.indexOf("Firefox")).split(" ")[0]).replace("/", "-");
        } else if (user.contains("rv")) {
            browser = "IE";
        } else {
            browser = "UnKnown, More-Info: " + browserDetails;
        }
        //Preparing the userMap
        userMap.put("IP",ip);
        userMap.put("UserId",userId);
        userMap.put("Username",username);
        userMap.put("Browser",browser);
}
}
```

[![](/learn/assets/Doc3.png)](/learn/assets/Doc3.png)

## Step 3: Declaring Handler as Bean

In **`project-user-spring.xml`**, add the bean to declare the user-defined handler.

```xml
 <bean class="com.wavemaker.appscore.custom.handlers.CustomAuthenticationSuccessHandler" id="customAuthenticationSuccessHandler/>
```

[![](/learn/assets/Doc4.png)](/learn/assets/Doc4.png)


## Step 4: Create a Java Service

- Now create a java service and write a simple method to access the `userMap` by importing the handler class as shown below. 

### Example

- In this example, **`GetUserInfoService.java` Imports** CustomAuthenticationSuccessHandler.

```java

package com.test.getuserinfoservice;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;

import com.wavemaker.runtime.security.SecurityService;
import com.wavemaker.runtime.service.annotations.ExposeToClient;
import com.wavemaker.runtime.service.annotations.HideFromClient;
import com.wavemaker.appscore.custom.handlers.CustomAuthenticationSuccessHandler;
import java.util.*;
 
@ExposeToClient
public class GetUserInfoService {
    @Autowired
    private SecurityService securityService;
    @Autowired
    private CustomAuthenticationSuccessHandler useInfo;
public Map<String,String> getUserInfo()
{
        return useInfo.userMap;
}

}
```

- Create a [Java Service variable](/learn/app-development/services/java-services/variables) to access this service method to get the list of user details.

## See Also

[How to send emails using Java Service](/learn/how-tos/sending-email-using-java-service/)  
[How to implement forgot password feature using Java Service](/learn/how-tos/implementing-forgot-password-feature-using-java-service/)  
[How to access REST APIs from Java Service](/learn/how-tos/accessing-rest-apis-java-service/)  
[How to schedule a Java Service](/learn/how-tos/scheduling-java-service/)  
