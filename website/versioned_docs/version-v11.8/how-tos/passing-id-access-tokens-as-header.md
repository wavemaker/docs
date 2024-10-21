---
title: "How to Pass Logged-In User ID/Access Tokens as Header"
id: "passing-id-access-tokens-as-header"
---

WaveMaker applications with OpenID as the security provider will store your ID token and access token as **Server** attributes during the authentication process to log into the application. These attributes can be accessed from the SecurityService getAllAttributes method.

You can get the ID token or the access token of the currently logged-in user and pass them as a Bearer token in the Authorization header using an HTTP request processor.

:::note

Server attributes are the custom attributes that are visible only to the server.

:::

## To Pass Logged-in User ID or Access Token as Header

1. Create a custom Java class that extends **AbstractHttpRequestProcessor** and add the following code. Click Save.

```java

package com.wavemaker;


import com.wavemaker.commons.auth.openId.OpenIdConstants;
import com.wavemaker.runtime.rest.model.HttpRequestDetails;
import com.wavemaker.runtime.rest.processor.request.AbstractHttpRequestProcessor;
import com.wavemaker.runtime.rest.processor.request.HttpRequestProcessorContext;
import com.wavemaker.runtime.security.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;


import java.util.ArrayList;
import java.util.Collections;


public class PassBearerHeaderRequestProcessor extends AbstractHttpRequestProcessor {


   @Autowired
   private SecurityService securityService;


   @Override
   protected void doProcess(HttpRequestProcessorContext httpRequestProcessorContext) {
       if (securityService.isAuthenticated() && isBearerTokenHeaderRequired(httpRequestProcessorContext.getHttpRequestDetails().getEndpointAddress())) {
           Object idTokenValue = securityService.getAllAttributes().get(OpenIdConstants.ID_TOKEN_VALUE);
           Object accessTokenValue = securityService.getAllAttributes().get(OpenIdConstants.ACCESS_TOKEN_VALUE);
//Pass id token or access token based on the requirement.
           if (idTokenValue != null) {
               HttpRequestDetails httpRequestDetails = httpRequestProcessorContext.getHttpRequestDetails();
               HttpHeaders httpRequestHeaders = httpRequestDetails.getHeaders();
               httpRequestHeaders.put("Authorization", new ArrayList<>(Collections.singleton("Bearer " + idTokenValue)));
           }
       }
   }


   private boolean isBearerTokenHeaderRequired(String url) {
       //Return true if the endpoint requires a Bearer token as header.
   }
}

```

2. Navigate to File Explorer and upload the class into src/main/java into the required package. Once uploaded, click Cancel.

[![](/learn/assets/upload_src_main_java.png)](/learn/assets/upload_src_main_java.png)

3. Go to the **project-rest-runtime-config.xml** and add **PassBearerHeaderRequestProcessor** in the **httpRequestProcessorList** as a bean. Add the below-provided bean class and click save.

```xml

               <bean class="com.wavemaker.PassBearerHeaderRequestProcessor">
                   <property name="enabled" value="true"/>
               </bean>
          
```

[![](/learn/assets/project_rest_runtime_config_added_bean_class_save.png)](/learn/assets/project_rest_runtime_config_added_bean_class_save.png)

4. The above steps pass the currently logged-in user’s ID token or access token as a Bearer token in the Authorization header.

:::note

The ID and access token expiry time might differ from the WaveMaker application session time, so even if the user session is valid the token might have expired.

:::


