---
title: "Accessing logged in user info using a java service"
id: ""
---
---

## Introduction

This document will go through the steps in getting the logged in user info details like Username and Userid and Ip Address and Browser name.

To write a handler for get the logged in user info implement the following steps.

### Step 1: Handler implementation class

Write a java handler class by implementing the existing handler Implemenation.

- Create a service in project src/main/java folder of the project Example: UserManagementApp/src/main/java/com/wavemaker/appscore/custom/handlers/CustomAuthenticationSuccessHandler.java 

[![](/learn/assets/Doc1.png)](/learn/assets/Doc1.png) 

Please refer the [documentation](/learn/app-development/services/3rd-party-libraries/#resource-files) to add the files in project.

### Step 2: Implement the Success Handler.
Implement the WMAuthenticationSuccessHandler interface and override the method onAuthenticationSuccess this method will be invoked for every successfull login

```java
public class CustomAuthenticationSuccessHandler implements WMAuthenticationSuccessHandler {
	
@Override
	public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
			WMAuthentication wmAuthentication) throws IOException, ServletException 
				{
				}
											}
		
```

- Using these method parameters HttpServletRequest,HttpServletResponse, WMAuthentication we can access the logged-in user informations like logged in username,browser name,ip addess as shown in following handler class and preapre a userMap.

 Note : Please create these classes in an IDE and copy it in path specified in the following screenshot, [see here to know how to work with IDE](/learn/app-development/dev-integration/extending-application-using-ides/). 

[![](/learn/assets/Doc1.png)](/learn/assets/Doc1.png) 

**CustomAuthenticationSuccessHandler.java

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

## Step 3: Declare this handler as a bean. 

- Now in **`project-user-spring.xml`** add the bean to declare the handler which user has defined.
```xml
 <bean class="com.wavemaker.appscore.custom.handlers.CustomAuthenticationSuccessHandler" id="customAuthenticationSuccessHandler/>
```

[![](/learn/assets/Doc4.png)](/learn/assets/Doc4.png)


### Step 4: 
 Now create a java service and write a simple method to access the userMap by importing the handler class as shown below and create a java service variable to access this service method to get the list of user details.

 **`GetUserInfoService.java` Imports** CustomAuthenticationSuccessHandler:

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

## See Also

[How to send emails using Java Service](/learn/how-tos/sending-email-using-java-service/)  
[How to implement forgot password feature using Java Service](/learn/how-tos/implementing-forgot-password-feature-using-java-service/)  
[How to access REST APIs from Java Service](/learn/how-tos/accessing-rest-apis-java-service/)  
[How to schedule a Java Service](/learn/how-tos/scheduling-java-service/)  
