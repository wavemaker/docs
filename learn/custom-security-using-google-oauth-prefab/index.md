---
title: "Custom Security using Google OAuth Prefab"
id: "custom-security-using-google-oauth-prefab"
---

In this section we will be seeing how to validate Google Login using Custom Security within WaveMaker App and to access Gmail API. Steps to attain this include:

1. OAuth Prefab for Google to get the access token for the Google user to access Google API – Gmail API
2. validate the login through Google, a Java Service will be created which will override WMCustomAuthenticationManager
3. access token from OAuth prefab will be used as an id in the WMUser object returned by the Java Service.

We have used the following Java code to accomplish this.

- in file
    
    <dependency>
                <groupId>org.springframework.social</groupId>
                <artifactId>spring-social-google</artifactId>
                <version>1.0.0.RELEASE</version>
    </dependency>
    
- of Java Service – class definition:
    
     com.customsecurityhowto.myauthenticationmanager;
    import javax.servlet.http.HttpServletRequest;
    import org.slf4j.Logger;
    import org.slf4j.LoggerFactory;
    import org.springframework.beans.factory.annotation.Autowired;
    import com.wavemaker.runtime.security.SecurityService;
    import com.wavemaker.runtime.service.annotations.ExposeToClient;
    import com.wavemaker.runtime.service.annotations.HideFromClient;
    import javax.servlet.http.HttpServletRequest;
    import java.util.Arrays;
    import com.wavemaker.runtime.security.WMCustomAuthenticationManager;
    import com.wavemaker.runtime.security.WMUser;
    import org.springframework.social.google.api.Google;
    import org.springframework.social.google.api.impl.GoogleTemplate;
    import org.springframework.social.google.api.plus.Person;
    import com.wavemaker.runtime.security.AuthRequestContext;
    
- Class – Method Definition :
    
    @ExposeToClient
    public class MyAuthenticationManager implements WMCustomAuthenticationManager {
        private static final Logger logger = LoggerFactory.getLogger(MyAuthenticationManager.class);
        @Autowired
          private SecurityService securityService;
          private static final String GOOGLE = "google”;
        @Override
         public WMUser authenticate(AuthRequestContext authRequestContext) {
            HttpServletRequest httpServletRequest = authRequestContext.getHttpServletRequest();
            boolean isSecurityUrl = httpServletRequest.getRequestURI().endsWith("j\_spring\_security\_check");
            WMUser user = null;
            //String securityProvider = httpServletRequest.getParameter("j\_username");
            String token = httpServletRequest.getParameter("j\_password"); //getting the token from Prefab
            logger.info(" --------- Token is "+token);
            if (isSecurityUrl && token != null) {
                   Google google = new GoogleTemplate(token); //passing the token to Google
                   Person person = google.plusOperations().getGoogleProfile();
                   logger.info("----------------- -- - --- -----------"+ person.getDisplayName());
                   user = new WMUser(token, person.getDisplayName(), Arrays.asList("user")); // returning the logged in user object    
            }
            return user;
        }}
    
- Load JavaScript for Google Prefab
    
    1Load = function (widget) {
        angular.$watch('accesstoken', function (newVal) {
            if (newVal) {
                Page.Actions.googleLoginVar.invoke();
            }
        });
    

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTo_CJ89BLzR9PRTdaB-ezz595YdJ6eswAl1_b5l2ZyFDJUC1AhJjf9AMypd62cdg4M-XQGe7dbP7O7/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" width="708" height="560" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
