---
title: "Multiple Security Provider Implementation"
id: "multiple-security-provider-implementation"
---
---
The document provides an overview for implementing authentication for the application created in Studio using the Database as the security provider as well as using Google Oauth integration.

## App settings to configure in Google Developer Console

1. Login into the Google Developer Console [https://console.developers.google.com/](https://console.developers.google.com/)
2. Create a project in the google developer account.
3. From the _API Manager_ left nav, select the _Credentials_ option and navigate to the “OAuth Consent screen” tab. Provide Product Name and save the settings.
4. Navigate to the _Credentials_ tab, and create “_oAuth client ID_” credentials for the project.
5. Choose the Application type as _Web_ application. Enter the _Authorized JavaScript Origin_ and _Authorized Redirect URIs_. An example of a sample redirect URI is as below:
    
```
https://www.wavemakeronline.com/run-[container-name]/[project-name]/prefabs/GoogleOAuth/oAuthHandler/callback
```
    
:::note
In the above URL change the container name and your project name accordingly.
:::

6. Click on Create. A _client ID_ and _client secret_ is issued for the specific client/user. Note down the client ID and secret as it will be used in the Studio application for further development purpose.

## Configurations to be made in the Studio application

1. Create a new application in Studio.
2. [Add Database](/learn/app-development/services/database-services/working-with-databases/) to your app by **Connect to Database** to import Sample  hrdb. You can choose to import any DB of your choice, ensure that there exists a table with Username/Role details.
3. Create _New_ page in the application to place the _Google OAuth prefab_ for login.(lets call the page as _GoogleLogin_ for reference in later points) **NOTE**: For the sake of convenience we have shown the use case with a different page for Google Login. You can implement these steps using the default Login page provided by WaveMaker.
4. Drag and drop the Google OAuth prefab in this newly created page. For the prefab, specify the _Secret_, _Scope_, _Appid_, _Page_ parameters. Please note that the Scope is with reference to the google API being utilised for ex: email. The Page parameter is the name of the page in which the _googleOAuth_ prefab is placed i.e., the current page itself (_GoogleLogin_ page)
5. Open the _Login_ page of the application and add a button widget below the _Login_ button.
6. Provide “_Login Using Google_” as the _caption_ of the _button_ widget. For the _onClick_ event of the button widget, choose the _Navigation_ variable for the page in which the google oAuth prefab is placed i.e., _GoogleLogin_ page in the sample scenario.
7. In the _GoogleLogin_ page, create a page level _Login_ action with the access token received from the _googleOAuth_ prefab as input to the variable by binding it to the password field.
8. For the _on Load_ event of the google OAuth prefab, choose _JavaScript_ as operation. In the function generated in the script tab of the page, place the code snippet below:

```js    
Page.<GoogleOAuth_prefab_name>Load = function(widget) {
    angular.$watch('accesstoken', function(newVal) {
            if (newVal) {
                    Page.Variables.<login_variable_page_level_name>.invoke();
                }
        });
    };
``` 
9. Open the _File Explorer_ and locate _pom.xml_ file and add the below dependency for the **spring social google** in the dependencies tag.

```xml
<dependency>
        <groupId>org.springframework.social</groupId>
        <artifactId>spring-social-google</artifactId>
        <version>1.0.0.RELEASE</version>
</dependency>
```    
10. [Create a query](/learn/app-development/services/database-services/working-with-queries) which retrieves the user details based on the logged in user name. This query will be later on autowired and used in the Java Service for authenticating the user if DB as security provider is used.
11. [Create a Java Service](/learn/app-development/services/java-services/java-service/) named MyAuthenticationManager.
12. Add the following import statements:

```java
import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import com.wavemaker.runtime.security.SecurityService;
import com.wavemaker.runtime.service.annotations.ExposeToClient;
import com.wavemaker.runtime.service.annotations.HideFromClient;
import javax.servlet.http.HttpServletRequest;
import com.wavemaker.runtime.security.SecurityService;
import com.wavemaker.runtime.service.annotations.ExposeToClient;
import com.wavemaker.runtime.service.annotations.HideFromClient;
import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import com.wavemaker.runtime.security.WMCustomAuthenticationManager;
import com.wavemaker.runtime.security.WMUser;
import org.springframework.social.google.api.Google;
import org.springframework.social.google.api.impl.GoogleTemplate;
import org.springframework.social.google.api.plus.Person;
import com.wavemaker.runtime.security.AuthRequestContext;
import org.springframework.data.domain.Page;
import com.hrdb.service.HrdbQueryExecutorService;
```    
13. The class definition is as follows:
    
```java
//implementing the custom authentication Manager Class
    @ExposeToClient
public class MyAuthenticationManager implements WMCustomAuthenticationManager {

private static final Logger logger = LoggerFactory.getLogger(MyAuthenticationManager.class);

    @Autowired
    private SecurityService securityService;

//autowiring the entity query executor for retrieving the logged in user details
    @Autowired
    private HrdbQueryExecutorService hrdbQueryExecutorService;

    // overridding the authenticate method of custom authentication manager class
    @Override
    public WMUser authenticate(AuthRequestContext authRequestContext) {
        HttpServletRequest httpServletRequest = authRequestContext.getHttpServletRequest();

//setting the logged in user object to null initially
        WMUser user = null;

//checking for the security provider type i.e., whether it is OAuth or DB provider
        String securityProvider = httpServletRequest.getParameter("j_username");

//logic for the OAuth as the security provider
        if ("OAUTH".equals(securityProvider)) {
//obtaining the token from Prefab
            String token = httpServletRequest.getParameter("j_password"); 
            if (token == null) {
                return null;
            }
            logger.info(" --------- Token is "+token);
            try {
        //passing the token to Google
                Google google = new GoogleTemplate(token); 
                Person person = google.plusOperations().getGoogleProfile();
                logger.info("----------------- -- - --- -----------"+ person.getDisplayName());
//creating the WMUSer i.e., logged in user object
                user = new WMUser(token, person.getDisplayName(), Arrays.asList("user"));             } catch (Exception e) {
                logger.error("Failed to authenticate", e);
                throw e;
            }
        } else {
//logic for the DB as security provider
            String username = httpServletRequest.getParameter("j_username");
            String providedPassword = httpServletRequest.getParameter("j_password");
//references the query created to obtain logged in user details           
    List<Object> userObjects = hrdbQueryExecutorService.executeGetUserByName(null, username).getContent();
            if (userObjects == null || userObjects.size() != 1 ) {
                return null;
            }
            Map userObject = (Map) userObjects.iterator().next();
            String actualPassword = (String) userObject.get("PASSWORD");
            if (providedPassword.equals(actualPassword)) {
                user = new WMUser(username, username, Arrays.asList("user"));
            }
        }
// returning the logged in user object
        return user;
    }

}
```

14. Open [Security Dialog](/learn/app-development/app-security/app-security) and choose the _Security Provider_ as _custom_. Provide the _Class Name_ property as the package name of the `MyAuthenticationManager` java service created above. Save the settings.
15. Run the Application.
    1. The login page appears, Login using the Login Page - admin/admin; you will see the Employee Data
    2. Logout and Login using Google Button; Google Login Page shows up
