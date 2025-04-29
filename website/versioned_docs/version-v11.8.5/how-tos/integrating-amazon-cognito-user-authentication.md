---
title: "Integrating Amazon Cognito for User Authentication"
id: "integrating-amazon-cognito-user-authentication"
---
---

Amazon Cognito is a service that enables you to create unique identities for your users and authenticate them using either your own user pools or by using federated identity providers. Here we will see hot to create Cognito User Pool and implement custom authentication service in WaveMaker App using this user pool. [Know more about Amazon Cognito from here](http://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html).



## Setting Up Cognito User Pools

1. Go to [Amazon Management Console](http://docs.aws.amazon.com/cognito/latest/developerguide/create-new-user-pool-console-quickstart.html)
2. [Configure the User Pool](http://docs.aws.amazon.com/cognito/latest/developerguide/create-new-user-pool-console-quickstart.html) as required
3. Note down the generated pool id and Pool ARN values 

[![](/learn/assets/AC_poolid.png)](/learn/assets/AC_poolid.png)

4. From the Apps tab, create an application with following configuration, make sure that “Generate Client Secret” is unchecked [![](/learn/assets/AC_poolapp.png)](/learn/assets/AC_poolapp.png)
5. Create the application and note down the App client ID 

## Configuring JS Libraries in WaveMaker

### Download pre-requisite JS files

Download and include the following:  

- Amazon Cognito AWS SDK for JavaScript files here: [aws-cognito-sdk.zip](/learn/assets/aws-supported-js-files.zip) 

:::note
The Amazon Cognito AWS SDK for JavaScript is a slimmed down version of the AWS Javascript SDK namespaced as AWSCognito instead of AWS. It references only the Amazon Cognito Identity service. Similar to the AWS JavaScript SDK, the config.credentials property needs to be populated (either globally for AWSCognito or per-service).
:::

### Upload JS files to WaveMaker

1. Upload the JS files to WaveMaker. Go to [Import Resource](/learn/app-development/services/3rd-party-libraries) and Upload the JS files downloaded in the previous section. The files should be uploaded to `project/src/main/webapp/` directory.
2. From File Explorer, Navigate to `index.html` and include the JS files manually. 

:::important
Ensure the path is correct. 
:::


At this point, we’ve integrated the Amazon JavaScript SDK into our project.

## Getting started with User Registration

1. Create a New Page named “Registration”, using the  Sign-up template and blank layout.
2. Add Form Fields as per your requirement. For example, contant, email ID, and more, required for creating a user. 
3. Add **On Click** event for the “Create Account” button and include the following code in JS:

```js
Page.button4Click = function($event, widget) {
    AWSCognito.config.region = 'ap-southeast-2';
    // AWSCognito.config.credentials = new AWS.CognitoIdentityCredentials({
    //     IdentityPoolId: '...'
    // });

    // AWSCognito.config.region = 'ap-southeast-2'; //This is required to derive the endpoint
    var poolData = {
        UserPoolId: '{user pool id}',
        ClientId: '{clientid}'
    };

    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
    var attributeList = [];
    var dataEmail = {
        Name: 'email',
        Value: Page.Widgets.email.datavalue
    };


    var dataPhoneNumber = {
        Name: 'phone_number',
        Value: Page.Widgets.phone.datavalue
    };

    var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);
    var attributePhoneNumber = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataPhoneNumber);
    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    userPool.signUp(Page.Widgets.username.datavalue, Page.Widgets.password.datavalue, attributeList, null,
        function(err, result) {
            if (err) {
                alert(err);
                return;
            }
            var userData = {
                Username: "sample",
                Pool: userPool
            };

            var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
            cognitoUser = result.user;
            //Handle for On success of Signup - Navigation to Page/Verify user Page
            console.log('user name is ' + cognitoUser.getUsername());
            alert('User Created ' + cognitoUser.getUsername());
            Page.Actions.goToPage_Login.invoke();
        });
};
```

4. Additionally create a **Navigation Action** (`goToPage_Login`) to navigate to Login page on successfully creating a User. The below mentioned code has already been added in the **On Success** for SignUp. 
```
Page.Variables.goToPage_Login.navigate();
```
## Configuring WaveMaker Security

Implement a custom Authentication Service which will take the JWT access token , ID token and create a WMUser Object.

1. [Create a Java Service](/learn/app-development/services/java-services/java-service/) - CognitoUPoolLogin.
2. Add the import statements as following.

```js
import com.wavemaker.runtime.security.WMCustomAuthenticationManager;
import com.wavemaker.runtime.security.WMUser;
import com.wavemaker.runtime.security.AuthRequestContext;
import java.util.Arrays;
```
[![](/learn/assets/AC_js_import.png)](/learn/assets/AC_js_import.png)

3. Edit the code as following.

```js
import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;

import com.wavemaker.runtime.security.AuthRequestContext;
import com.wavemaker.runtime.security.WMCustomAuthenticationManager;
import com.wavemaker.runtime.security.WMUser;

import org.springframework.security.core.AuthenticationException;
import javax.servlet.http.*;
import java.util.*;
public class CognitoUPoolLogin implements WMCustomAuthenticationManager {

 private static final Logger logger=LoggerFactory.getLogger(CognitoUPoolLogin.class);

 public WMUser authenticate(AuthRequestContext authRequestContext) throws AuthenticationException {
       HttpServletRequest httpServletRequest = authRequestContext.getHttpServletRequest();
     boolean isSecurityUrl = httpServletRequest.getRequestURI().endsWith("j_spring_security_check");
     WMUser user = null;
     String securityProvider = httpServletRequest.getParameter("j_username");
     String token = httpServletRequest.getParameter("j_password");

     if (isSecurityUrl && securityProvider != null && token != null) {
         user = new WMUser(securityProvider,token, Arrays.asList("user"));
     }
     return user;
    }
}

```

[![](/learn/assets/AC_js_code.png)](/learn/assets/AC_js_code.png)

4. [Configure the Security](/learn/app-development/app-security/app-security) with provider as Custom and give the above Class Name.

## Configuring Login Page

1. In the Login page, create [Login Action](/learn/assets/var_sel.png), called `cognitoLogin`. 

:::note
Note we are using this action in the code snippet given below, if you are creating the action with a different name, you need to change the code accordingly.
:::

2. Add **On Click** event to the Login Button.
3. Add the Following code into the `loginButtonClick` function.

```js
     Page.loginButtonClick = function($event, widget) {
    //Creating authentication data object 
    var authenticationData = {
        Username: Page.Widgets.j_username.datavalue,
        Password: Page.Widgets.j_password.datavalue
    };
    // Creating the aws cognito autheticationDetails with the authetication object
    var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
    var poolData = {
        UserPoolId: '{user pool id}',
        ClientId: '{client id}'
    };
    //creating user pool object 
    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
    var userData = {
        Username: Page.Widgets.j_username.datavalue,
        Pool: userPool
    };
    var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);

    //handle the new password 
    function newPasswordRequired() {
        //Write logic here 
        alert("New Password Required");
        AWS.config.region = 'us-east-1';
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-east-1:0bf0ab2c-c013-4617-be40-e587d29a1c49'
        });
    }

    //Calling aws to authenticate the user passing the details
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function(result) {
            console.log('access token + ' + result.getAccessToken().getJwtToken());
            /*Use the idToken for Logins Map when Federating User Pools with Cognito Identity or when passing through an Authorization Header to an API Gateway Authorizer*/
            console.log('idToken + ' + result.idToken.jwtToken);
            console.log(Page)            
            Page.Actions.cognitoLogin.dataBinding.j_username = result.getAccessToken().getJwtToken();
            Page.Actions.cognitoLogin.dataBinding.j_password = result.idToken.jwtToken;
            Page.Actions.cognitoLogin.login();
        },

        onFailure: function(err) {
            //Handle for Invalid User/Register User
            alert(err);
        },
        newPasswordRequired: function() {
            //Handle for New Password Required
        }

    });
};
```
    
4. From the Settings dialog of the project, set the Landing page as Registration page and from the security dialog, set the permission for the Registrations page as Everyone. 

[![](/learn/assets/registration_security_permission1.png)](/learn/assets/registration_security_permission1.png)

5. The JWT - Access token, ID token will be available in the Logged In User Variable.

## Post-registration Process

1. On running the application, the Registration Page shows up. This page allows you to create a user who will be added to the user pool created. 

[![](/learn/assets/AC_loginpage.png)](/learn/assets/AC_loginpage.png)

2. After creating the account, Login page shows up. Verification of the user should be done by going to to the Amazon Cognito Create User Pool page and click on Users and Groups in the Left Navigation Pane. This will show you the all the Users added to the user pool. 

[![](/learn/assets/AC_loginuser.png)](/learn/assets/AC_loginuser.png) 

The user added should be confirmed by using the verification option chosen for verifying the user (EMail or Phone Number). 

[![](/learn/assets/AC_loginver.png)](/learn/assets/AC_loginver.png)

3. Once the user is confirmed, the user can login into the account. 

[![](/learn/assets/AC_login.png)](/learn/assets/AC_login.png)
