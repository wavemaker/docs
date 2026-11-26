---
title: "Custom Security using Google OAuth Prefab"
id: "custom-security-using-google-oauth-prefab"
---
---

In this section, we will be seeing how to validate Google Login using Custom Security within WaveMaker App and to access Gmail API. Steps to attain this include:

1. Using OAuth Prefab for Google to get the access token for the Google user to access Google API – oauth2 API.
2. Use the spring-social-google dependency from spring framework.
3. To validate the login through Google, a Java Service will be created which will override WMCustomAuthenticationManager
4. The access token from the OAuth prefab will be used as an id in the WMUser object returned by the Java Service.

We have used the following Java code to accomplish this.

- Dependency in _pom.xml_ file

```xml
<dependency>
    <groupId>com.github.spring-social</groupId>
    <artifactId>spring-social-google</artifactId>
    <version>1.1.3</version>
</dependency>
<dependency>
    <groupId>org.springframework.social</groupId>
    <artifactId>spring-social-web</artifactId>
    <version>1.1.6.RELEASE</version>
</dependency>
<dependency>
    <groupId>org.springframework.social</groupId>
    <artifactId>spring-social-core</artifactId>
    <version>1.1.6.RELEASE</version>
</dependency>
```
    
- Imports of Java Service – class definition:

```java
package com.customsecurityhowto.myauthenticationmanager;
import com.wavemaker.runtime.security.AuthRequestContext;
import com.wavemaker.runtime.security.SecurityService;
import com.wavemaker.runtime.security.WMCustomAuthenticationManager;
import com.wavemaker.runtime.security.WMUser;
import com.wavemaker.runtime.service.annotations.ExposeToClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.social.google.api.Google;
import org.springframework.social.google.api.impl.GoogleTemplate;
import org.springframework.social.google.api.oauth2.UserInfo;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;   
```


    
- Java Class – Method Definition:

```java
@ExposeToClient
public class MyAuthenticationManager implements WMCustomAuthenticationManager {
    private static final Logger logger = LoggerFactory.getLogger(MyAuthenticationManager.class);
    @Autowired
    private SecurityService securityService;
    private static final String GOOGLE = "google”;
    @Override
    public WMUser authenticate(AuthRequestContext authRequestContext) {
        HttpServletRequest httpServletRequest = authRequestContext.getHttpServletRequest();
        // Here we check id requested URI is for Spring security check 
        boolean isSecurityUrl = httpServletRequest.getRequestURI().endsWith("j_spring_security_check");
        WMUser user = null;
        // Token retrieved from Google is used as password in spring security framework
        String token = httpServletRequest.getParameter("j_password"); //getting the token from Prefab
        logger.info(" --------- Token from Google is is "+token);
        if (isSecurityUrl && token != null) {
                Google google = new GoogleTemplate(token); //passing the token to Google
                UserInfo person = google.oauth2Operations().getUserinfo();
                logger.info("Google Person email" + person.getEmail());
                username= person.getEmail();                    
                user = new WMUser(person.getEmail(), roles);  // returning the logged in user object
                user.setUserId(token);    // set user id for WM user
        }
        return user;
    }}
```

- Create an action Login variable. In our example we have named it "**googleLoginAction**". In the JavaScript Onaccesstokenfetch event for Google Prefab, add the JS snippet below:

```js
Page.GoogleOAuth1Accesstokenfetch = function($event, $data) {
    console.log($data);
    Page.Actions.googleLoginAction.invoke();
};
```

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTo_CJ89BLzR9PRTdaB-ezz595YdJ6eswAl1_b5l2ZyFDJUC1AhJjf9AMypd62cdg4M-XQGe7dbP7O7/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" width="708" height="560" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
