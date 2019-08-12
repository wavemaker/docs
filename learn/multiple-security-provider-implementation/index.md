---
title: "Multiple Security Provider Implementation"
date: "2017-03-10"
---

The document provides an overview for implementing authentication for the application created in Studio using the Database as the security provider as well as using Google Oauth integration.

**settings to configure in Google Developer Console:**

1. into the Google Developer Console [://console.developers.google.com/](https://console.developers.google.com/)
2. a project in the google developer account.
3. the _Manager_ left nav, select the option and navigate to the “OAuth Consent screen” tab. Provide Product Name and save the settings.
4. to the tab, and create “ _client ID_” credentials for the project.
5. the Application type as application. Enter the _JavaScript Origin_ and _Redirect URIs_ An example of a sample redirect URI is as below:
    
    ://www.wavemakeronline.com/run-\[container-name\]/\[project-name\]/prefabs/GoogleOAuth/oAuthHandler/callback
    
    Note : In the above URL change the container name and your project name accordingly.
6. on Create. A _ID_ and _secret_ is issued for the specific client/user. Note down the client ID and secret as it will be used in the Studio application for further development purpose.

**to be made in the Studio application:**

1. a new application in Studio.
2. [Database](http://[supsystic-show-popup id=106]) to your app by **to Database** to import Sample  hrdb. You can choose to import any DB of your choice, ensure that there exists a table with Username/Role details.
3. page in the application to place the _OAuth prefab_ for login.(lets call the page as for reference in later points) : For the sake of convenience we have shown the use case with a different page for Google Login. You can implement these steps using the default Login page provided by WaveMaker.
4. and drop the Google OAuth prefab in this newly created page. For the prefab, specify the , , , parameters. Please note that the Scope is with reference to the google API being utilised for ex: email. The Page parameter is the name of the page in which the prefab is placed i.e., the current page itself ( page)
5. the page of the application and add a button widget below the button.
6. “ _Using Google_” as the of the widget. For the event of the button widget, choose the variable for the page in which the google oAuth prefab is placed i.e., page in the sample scenario.
7. the page, create a page level action with the access token received from the  prefab as input to the variable by binding it to the password field.
8. the _Load_ event of the google OAuth prefab, choose as operation. In the function generated in the script tab of the page, place the code snippet below:
    
    <GoogleOAuth\_prefab\_name>Load = function(widget) {
      	angular.$watch('accesstoken', function(newVal) {
            	if (newVal) {
                   	 Page.Variables.<login\_variable\_page\_level\_name>.invoke();
                	}
            });
      };
    
9. the _Explorer_ and locate file and add the below dependency for the **social google** in the dependencies tag.
    
    <dependency>
         <groupId>org.springframework.social</groupId>
         <artifactId>spring-social-google</artifactId>
         <version>1.0.0.RELEASE</version>
    </dependency>
    
10. [a query](http://[supsystic-show-popup id=117]) which retrieves the user details based on the logged in user name. This query will be later on autowired and used in the Java Service for authenticating the user if DB as security provider is used.
11. [a Java Service](http://[supsystic-show-popup id=119]) named MyAuthenticationManager.
12. the following import statements:
    
     javax.servlet.http.HttpServletRequest;
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
    
13. class definition is as follows:
    
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
            String securityProvider = httpServletRequest.getParameter("j\_username");
    
    //logic for the OAuth as the security provider
            if ("OAUTH".equals(securityProvider)) {
    //obtaining the token from Prefab
                String token = httpServletRequest.getParameter("j\_password"); 
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
                String username = httpServletRequest.getParameter("j\_username");
                String providedPassword = httpServletRequest.getParameter("j\_password");
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
    
14. [Dialog](http://[supsystic-show-popup id=111]) and choose the _Provider_ as Provide the _Name_ property as the package name of the java service created above. Save the settings.
15. the Application.
    1. login page appears, Login using the Login Page - admin/admin; you will see the Employee Data
    2. and Login using Google Button; Google Login Page shows up
