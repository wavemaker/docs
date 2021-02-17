---
title: "Integrate OTP (One-Time Passcode) Verification with WaveMaker App"
id: "twilio-otp-integration"
---
---

Security for applications and phone verification is a simple way to secure your application and help prevent bot accounts. Sending a one-time password to a user's phone to validate tells that they have access the app is a common security tool used when people sign up for application or give you their phone number for the first time.

This document will let you build one-time passcode (OTP) experience using SMS, voice or email with twilio-connector during authentication.

## How it works

During login authentication,

1. User enters the application credentials
2. Once the credentials are valid, OTP validation is required
1. User enters their phone number or email to receive OTP.
2. App generates an authentication token(OTP)
3. App sends the token via selected channel(SMS, Voice or Email) to the user
4. User enters the correct token
5. App verifies the token

Once the token is matched, the login for the application is successful.

## Integrating OTP into App

### Step1: Enable Authentication
1. Enable Security in WaveMaker app [Check here](/learn/app-development/app-security/app-security)

2. Write Success handler on authentication success [Check here](/learn/how-tos/customizing-post-authentication-handlers).

In this handler, add an attribute to check verify OTP validation is pending state while redirecting to pages after success authentication.

**Example:**
```Java
@Override
public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, WMAuthentication authentication) {
    //Adding attribute to check otp verification is pending or not.
    authentication.addAttribute("otpverification", "pending", Attribute.AttributeScope.ALL);
}
```
Add the bean in **project-user-spring.xml**.
```Java
<bean id="customAuthenticationSuccessHandler" class="com.security.service.handler.CustomAuthenticationSuccessHandler"/>
```

### Step2: Import Twilio-connector and Access API's

Check how to integrate twilio-connector and access API's into your app from [Check here](/learn/how-tos/twilio-connector)

Create JavaService and integrate twilio one-time passcode API's in the application [Check here](/learn/how-tos/twilio-connector#implementing-otp)

Once the OTP is validated, change the *securityInfo.userAttribute*(added in *Step1* in security success handler) value to *success* from *pending*.

```Java
public boolean validateOTP(String phoneNumber, String otpCode) {
    VerificationResult result = twilioConnector.verifyOTP(phoneNumber, otpCode);
    //Updating the added otpverification attribute to success once OTP is valid.
    if(result.isValid()){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        WMAuthentication wmAuthentication = (WMAuthentication) authentication;
        wmAuthentication.addAttribute("otpverification", "success", Attribute.AttributeScope.ALL);
    }
    return result.isValid();
}
```

### Step3: Integrate OTP into the application

1. To prevent the user from navigating to *OTPPage* instead of user landing page after successful authentication without OTP verification, add a filter to check if the *securityInfo.userAttribute.otpverification* added is still pending. If yes then redirect to *OTPPage*.

```Java
public class OTPFilter implements Filter {

    private static final Logger logger = LoggerFactory.getLogger(OTPFilter.class);

    protected FilterConfig config;

    private final List<String> pageNames = Arrays.asList("header", "topnav", "footer", "leftnav", "rightnav");

    @Autowired
    private SecurityService securityService;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        logger.info("----------Initialize filter: {}", getClass().getSimpleName());
        this.config = filterConfig;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        String requestURI = httpRequest.getRequestURI();

        if (requestURI.contains("/pages/")
                && securityService.getAllAttributes().get("otpverification").equals("pending")){
            String url = httpRequest.getRequestURI();
            String pageName = url.substring(url.indexOf("/pages/") + 7, url.indexOf("/page.min.json"));
            if (!pageName.equals("OTPPage") && !pageNames.contains(pageName)) {
                logger.info("----OTP Verification is pending so redirecting to OTPPage-------");
                url = url.replace(pageName, "OTPPage");
                httpResponse.sendRedirect(url);
            } else {
                chain.doFilter(httpRequest, httpResponse);
            }
        } else {
            chain.doFilter(httpRequest, httpResponse);
        }
    }

    @Override
    public void destroy() {
        logger.info("Destroy filter: {}", getClass().getSimpleName());
    }

```
Add the bean in **project-user-spring.xml** file.

**Example:**
```Java
<bean id="otpFilter" name="otpFilter" class="com.security.service.filter.OTPFilter"/>
```
Also add below Custom Filter in **general-options.json** file.
```Java
"customFilterList": [
		{
			"name": "otpFilter",
			"ref": "otpFilter",
			"position": "LAST"
		}
	]
```
Once this filter is added in **general-options.json** file, open security dialog and click on save. Once the save is clicked platform will automatically add below code in **project-security.xml** file.
```Java
<security:custom-filter position="LAST" ref="otpFilter"/>
```

:::note
If you donot want to open and save the security settings then add the above code in **project-security.xml** below the default **security:custom-filter**.
:::

2. Create Variable for the JavaService methods written in **Step2**(both *sendOTP* and *validateOTP* API's using twilio-connector).

3. Create and design an **OTPPage** to send OTP to the device or email. 

[![](/learn/assets/connector/otppage.png)](/learn/assets/connector/otppage.png)

In the above image, *Send OTP* button triggeres the *sendOTP* variable created. Bind the variable data parameters in the variable dialog. OnSuccess of this variable open the dialog to accept OTP.

:::example
Below code helps you to open the ValidateOTP dialog only when sendOTP response is true.
```js
Page.sendOTPCodeonSuccess = function(variable, data) {
    //If the variable response is success then opening the OTP verification dialog.
    if (data.value) {
        Page.Widgets.dialog1.open();
    } else {
        App.Actions.appNotification.setMessage("Enter valid PhoneNumber");
        App.Actions.appNotification.invoke();
    }
};
```
:::

Also Design the dialog to accept OTP code and validate the OTP.

[![](/learn/assets/connector/otpvalid.png)](/learn/assets/connector/otpvalid.png)

In the above image, *Validate OTP* button triggeres the *validateOTP* variable created. Bind the variable data parameters in the variable dialog. OnSuccess of this variable close the dialog and check the *securityInfo.userAttributes.otpverification* if value is *success* then navigate to landing page.

:::example

Below code helps you to close the ValidateOTP dialog and check the userAttribute, if success then navigates to the landing page.
```js
Page.validateOTPonSuccess = function(variable, data) {
    if (data.value) {
        Page.Widgets.dialog1.close();  //Close validate OTP dialog
        //Invoking the security service getSecurityInfo variable and verifying the userAttribute
        Page.Variables.getSecurityInfo.invoke({}, function(data) {
            if (data.userInfo.userAttributes.otpverification == "success") {
                //Reload the page once OTP is validated which will go to the landing page.
                location.reload();      
            }
        });
    } else {
        App.Actions.appNotification.setMessage("Enter valid OTP");
        App.Actions.appNotification.invoke();
    }
};
```
:::

4. Now preview the app, enter login credentials in *Login* page. Once authentication is successful, it will be redirected to *OTPPage*. Enter phoneNumber or email and select the channel and then click on *Send OTP* button. A dialog will be popped up to validate OTP. Once OTP is validated you will be redirected to user landing page.