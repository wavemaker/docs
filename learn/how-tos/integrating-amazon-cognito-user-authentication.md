---
title: "Integrating Amazon Cognito for User Authentication"
id: ""
---

Amazon Cognito is a service that enables you to create unique identities for your users and authenticate them using either your own user pools or by using federated identity providers. Here we will see hot to create Cognito User Pool and implement custom authentication service in WaveMaker App using this user pool. [Know more about Amazon Cognito from here](http://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html).

**Steps involved:**

1. [Setting up Cognito user pools](#user-pools)
2. [Configuring Cognito JavaScript libraries in WaveMaker app](#js-libraries)
3. [Setting up registration page in WaveMaker app](#registration-page)
4. [Configuring Security in WaveMaker app](#security)
5. [Configuring login page in WaveMaker app](#login-page)
6. [Post-registration processing](#post-registration)

## Setting Up Cognito User Pools

1. Go to [Amazon Management Console](http://docs.aws.amazon.com/cognito/latest/developerguide/create-new-user-pool-console-quickstart.html)
2. [Configure the User Pool](http://docs.aws.amazon.com/cognito/latest/developerguide/create-new-user-pool-console-quickstart.html) as required
3. Note down the generated pool id and Pool ARN values [![](/learn/assets/AC_poolid.png)](/learn/assets/AC_poolid.png)
4. From the Apps tab, create an application with following configuration, make sure that “Generate Client Secret” is unchecked [![](/learn/assets/AC_poolapp.png)](/learn/assets/AC_poolapp.png)
5. Create the application and note down the App client ID [![](/learn/assets/AC_poolappid.png)](/learn/assets/AC_poolappid.png)

## Configuring JS Libraries in WaveMaker

### Download pre-requisite JS files

1. Download and include the Amazon Cognito AWS SDK for JavaScript from [/dist/aws-cognito-sdk.min.js](https://www.google.com/url?q=https://raw.githubusercontent.com/aws/amazon-cognito-identity-js/master/dist/aws-cognito-sdk.min.js&sa=D&ust=1468925290593000&usg=AFQjCNGLMjZo4eti_Wzn2l4WhlCcR7bcBg). Note that the Amazon Cognito AWS SDK for JavaScript is a slimmed down version of the AWS Javascript SDK namespaced as AWSCognito instead of AWS. It references only the Amazon Cognito Identity service. Similar to the AWS JavaScript SDK, the config.credentials property needs to be populated (either globally for AWSCognito or per-service).
2. Download and include the Amazon Cognito Identity SDK for JavaScript: [/dist/amazon-cognito-identity.min.js](https://www.google.com/url?q=https://raw.githubusercontent.com/aws/amazon-cognito-identity-js/master/dist/amazon-cognito-identity.min.js&sa=D&ust=1468925290594000&usg=AFQjCNFxiaU6Yz_8BK7LLmLMhQvAeARnBQ)
3. Include the JavaScript BN library for BigInteger computations: [JavaScript BN library](https://www.google.com/url?q=http://www-cs-students.stanford.edu/~tjw/jsbn/&sa=D&ust=1468925290595000&usg=AFQjCNG8j9Hh0HwnadDwv70tok9qHdAVLg)
4. Include the Stanford Javascript Crypto Library: [Stanford JavaScript Crypto Library](https://www.google.com/url?q=https://github.com/bitwiseshiftleft/sjcl&sa=D&ust=1468925290595000&usg=AFQjCNEUYM6T020E9xplhR74Hyf9vVS53A)
5. Download and include the AWS JavaScript SDK in order to use other AWS services. The SDK is necessary in order to use AWS.CognitoIdentityCredentials: [http://aws.amazon.com/sdk-for-browser/](https://www.google.com/url?q=http://aws.amazon.com/sdk-for-browser/&sa=D&ust=1468925290596000&usg=AFQjCNFGTz_PG5LIa51n0srR2fwaJc7gMQ)

### Upload JS files to WaveMaker:

1. Upload the JS files to WaveMaker. Go to [Import Resource](http://[supsystic-show-popup id=112]) and Upload the JS files downloaded in the previous section. The files should be uploaded to _project/src/main/webapp/_ directory.
2. From File Explorer, Navigate to _index.html_ and include the JS files manually (ensure the path is correct) [![](/learn/assets/AC_index.png)](/learn/assets/AC_index.png)

At this point, we’ve integrated the Amazon JavaScript SDK into our project.

## Getting started with User Registration

1. Create a New Page named “Registration”, using the  SignUp template and blank layout.
2. Add Form Fields as per your requirement(Phone Number, Email Id) required for user creation.
    1. Add On Click event for the “Create Account” button and include the following code in JS:
        
         Page.wmCreateAccountButtonClick = function($event, widget) {
                AWSCognito.config.region = 'us-east-1'; //This is required to derive the endpoint
        
                var poolData = {
                    UserPoolId: 'YOUR USER POOL ID',
                    ClientId: 'YOUR APP ID'
                };
                var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
        
                var attributeList = \[\];
        
                var dataEmail = {
                    Name: 'email',
                    Value: Page.Widgets.wmSignupEmail.datavalue
                };
                var dataPhoneNumber = {
                    Name: 'phone\_number',
                    Value: Page.Widgets.wmSignupPhone.datavalue
                };
                var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);
                var attributePhoneNumber = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataPhoneNumber);
        
                attributeList.push(attributeEmail);
                attributeList.push(attributePhoneNumber);
                userPool.signUp(Page.Widgets.wmSignupUsername.datavalue, 
                                Page.Widgets.wmSignupPassword.datavalue, attributeList, null, 
                  function(err, result) {
                    if (err) {
                        alert(err);
                        return;
                    }
                    var userData = {
                        Username: "fyugyug",
                        Pool: userPool
                    };
                    var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
                    cognitoUser = result.user;
                    //Handle for On success of Signup - Navigation to Page/Verify user Page
                    console.log('user name is ' + cognitoUser.getUsername());
                    alert('User Created ' + cognitoUser.getUsername());
                    Page.Variables.goToPage\_Login.navigate();
                });
            };
        
3. Additionally create a Navigation Action (goToPage\_Login) to navigate to Login page on successful creation of User. The below mentioned code has already been added in the On Success of SignUp. Page.Variables.goToPage\_Login.navigate();

## Configuring WaveMaker Security

We will implement a custom Authentication Service which will take the JWT access token , ID token and create a WMUser Object.

1. [Create a Java Service](http://[supsystic-show-popup id=119]) - CognitoUPoolLogin.
2. Add the import statements as follows
    
    import com.wavemaker.runtime.security.WMCustomAuthenticationManager;
    import com.wavemaker.runtime.security.WMUser;
    import com.wavemaker.runtime.security.AuthRequestContext;
    import java.util.Arrays;
    
    [![](/learn/assets/AC_js_import.png)](/learn/assets/AC_js_import.png)
3. Edit the code as follows
    
    @ExposeToClient
    public class CognitoUPoolLogin implements WMCustomAuthenticationManager {
    
        private static final Logger logger = LoggerFactory.getLogger(CognitoUPoolLogin.class);
    
        @Autowired
        private SecurityService securityService;
    
        /\*\*
         \* This is sample java operation that accepts an input from the caller and responds with "Hello".
         \*
         \* SecurityService that is Autowired will provide access to the security context of the caller. It has methods like isAuthenticated(),
         \* getUserName() and getUserId() etc which returns the information based on the caller context.
         \*
         \* Methods in this class can declare HttpServletRequest, HttpServletResponse as input parameters to access the
         \* caller's request/response objects respectively. These parameters will be injected when request is made (during API invocation).
         \*/
        @Override
        public WMUser authenticate(AuthRequestContext authRequestContext) {
            HttpServletRequest httpServletRequest = authRequestContext.getHttpServletRequest();
            boolean isSecurityUrl = httpServletRequest.getRequestURI().endsWith("j\_spring\_security\_check");
            WMUser user = null;
            String securityProvider = httpServletRequest.getParameter("j\_username");
            String token = httpServletRequest.getParameter("j\_password");
    
            if (isSecurityUrl && securityProvider != null && token != null) {
                user = new WMUser(securityProvider,token, Arrays.asList("user"));
            }
            return user;
        }
    }
    
    [![](/learn/assets/AC_js_code.png)](/learn/assets/AC_js_code.png)
4. [Configure the Security](http://[supsystic-show-popup id=111]) with provider as Custom and give the above Class Name

## Configuring Login Page

1. In the Login page, create [Login Action](http://[supsystic-show-popup id=105]), called _cognitoLogin_. Note we are using this action in the code snippet given below, if you are creating the action with a different name, you need to change the code accordingly.
2. Add On Click event to the Login Button
3. Add the Following code into the loginButtonClick function
    
     //Creating  authentication data object
     var authenticationData = {
                    Username: Page.Widgets.usernametext.datavalue,
                    Password: Page.Widgets.passwordtext.datavalue
                };
    // Creating the aws cognito autheticationDetails with the authetication object
                var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
                var poolData = {
                    UserPoolId: ‘YOUR USER POOL ID’,
                    ClientId: 'YOUR CLIENT ID'
                };
               //creating user pool object
     var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
                var userData = {
                    Username: Page.Widgets.usernametext.datavalue,
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
                        /\*Use the idToken for Logins Map when Federating User Pools with Cognito Identity or when passing through an Authorization Header to an API Gateway Authorizer\*/
                        console.log('idToken + ' + result.idToken.jwtToken);
                        Page.Variables.cognitoLogin.dataBinding.username = result.getAccessToken().getJwtToken();
                        Page.Variables.cognitoLogin.dataBinding.password = result.idToken.jwtToken;
                        Page.Variables.cognitoLogin.login();
                    },
    
                    onFailure: function(err) {
                        //Handle for Invalid User/Register User
                        alert(err);
                    },
                    newPasswordRequired: function() {
                        //Handle for New Password Required
                    }
    
                });
    
4. From the Settings dialog of the project, set the Landing page as Registration page and from the security dialog, set the permission for the Registrations page as Everyone. [![](/learn/assets/registration_security_permission1.png)](/learn/assets/registration_security_permission1.png)
5. The JWT- Access token,ID token will be available in the Logged In User Variable.

## Post-registration Process

1. On running the application, the Registration Page shows up. This page allows you to create a user who will be added to the user pool created. [![](/learn/assets/AC_loginpage.png)](/learn/assets/AC_loginpage.png)
2. After creating the account, Login page shows up. Verification of the user should be done by going to to the Amazon Cognito Create User Pool page and click on Users and Groups in the Left Navigation Pane. This will show you the all the Users added to the user pool. [![](/learn/assets/AC_loginuser.png)](/learn/assets/AC_loginuser.png) The user added should be confirmed by using the verification option chosen for verifying the user (EMail or Phone Number). [![](/learn/assets/AC_loginver.png)](/learn/assets/AC_loginver.png)
3. Once the user is confirmed, the user can login into the account. [![](/learn/assets/AC_login.png)](/learn/assets/AC_login.png)
