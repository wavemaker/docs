---
title: "Azure OAuth Prefab Integration"
id: ""
---

## Introduction

OAuth 2.0 is an authorization framework, which is updated after the original OAuth protocol created in 2006. OAuth 2.0 is a standard protocol, which provides delegated secured access for web, mobile, and desktop applications. To know more about the working of WaveMaker OAuth Prefabs [click here](/learn/app-development/widgets/prefab/oauth-prefabs/).

## Azure OAuth in WaveMaker

In order to use the **Azure** OAuth prefab, please follow the below steps:

Disclaimer: The screenshots from the Azure website were current at the time of writing this document, the actual screens might differ.

## Pre-requisites

1. Azure Active Directory Setup
2. Azure App Registration Portal
3. Graph API Access

## Azure Portal Configuration 

1. Log on to [https://portal.azure.com](https://portal.azure.com) and enter your credentials. You will be redirectd to  **Azure Portal Home** page.
2. Search for **App Registrations** on the top navigation bar and click on it. 

[![](/learn/assets/azure_oauth_appreg.png)](/learn/assets/azure_oauth_appreg.png)

3. On the app registrations screen, click on **New Registration** and provide the app name, account type and redirect URI

[![](/learn/assets/azure_oauth_new_appreg.png)](/learn/assets/azure_oauth_new_appreg.png)

4. In the left panel of the under App Registration click on **Certificates & secrets** then **Creare New client secret** and copy the secret value.

[![](/learn/assets/azure_oauth_client_secret.png)](/learn/assets/azure_oauth_client_secret.png)

5. In the left panel of the under App Registration click on **API Permissions** and add permission Microsoft Graph ->  Directory.AccessAsUser.All

6. In the left panel of the under App Registration click on **Authentication** and add redirect URIs as below 

   - <YOUR_APP_URL>/services/azureOAuthHandler/callback
   - <YOUR_APP_URL>/prefabs/AzureOAuth/azureOAuthHandler/callback

[![](/learn/assets/azure_oauth_redirecturi.png)](/learn/assets/azure_oauth_redirecturi.png)   



## Azure OAuth Prefab Properties

| Attribute Name      | Attribute Type | Description | Remarks/sample values  |
|---------------------|----------------|-------------|------------------------|
| loginmode           | UI             | Inbound parameter This property sets the login mode, auto login or manual login | auto/manual|
| buttoncaption       | UI             | Inbound parameter                                                               | Login With Azure|
|                     |                | This property sets the caption onto the azure login button.                     |                                                                     |
| buttonclass         | UI             | Inbound parameter                                                               | btn-primary                                                         |
|                     |                | This property sets the custom class onto the azure login button                 |                                                                     |
| loginsuccessmessage | UI             | Inbound parameter                                                               | Azure Login Success                                                 |
|                     |                | This property will set the text for the toaster after successful authorization  |                                                                     |
| accesstoken         | UI             | Outbound parameter                                                              |                                                                     |
|                     |                | Access Token from Azure                                                         |                                                                     |
| callbackurl         | UI             | Outbound parameter                                                              |                                                                     |
|                     |                | Callback url                                                                    |                                                                     |
| authorizationheader | UI             | Outbound parameter                                                              |                                                                     |
|                     |                | Authorization header to pass on along with request                              |                                                                     |
| Appid               | Server         | Application ID of azure registered application                                  |                                                                     |
| Secret              | Server         | Secret of azure registered application                                          |                                                                     |
| Page                | Server         | Landing page after login                                                        | Main                                                                |
| Scope               | Server         | Scopes required to access/retrieve data of user                                 | openid                                                              |
| AuthReqURL          | Server         | Authentication request URL                                                      | https://login.microsoftonline.com/TENNANTID/oauth2/v2.0/authorize |
| TokenReqURL         | Server         | Access token request URL                                                        | https://login.microsoftonline.com/TENNANTID/oauth2/v2.0/token     |





## Usage Example

### UI Configuration

1. Download the prefab from git repository  [Azure OAuth Prefab](https://github.com/nageshl/prefab-azureoauth) and import it as a prefab on your wavemaker studio. 

2. Drag and drop the Azure OAuth Prefab

[![](/learn/assets/azure_oauth_studio_1.png)](/learn/assets/azure_oauth_studio_1.png)

3. Set Login Mode 

    - Auto - Auto Login right after initialization 
    - Manual - On Click of Prefab Login Button

4. Set Server properties

    - Scope - openid
    - AppID - Application ID from azure registered application
    - Secret - Client secret to the respective application
    - AuthReqURL - Authentication Request URL 
    - TokenReqURL - Token Request URL


[![](/learn/assets/azure_oauth_studio_2.png)](/learn/assets/azure_oauth_studio_2.png)



5. Azure OAuth prefab -> Events -> Onaccesstokenfetch 

    It is a callback action on successful fetch of accesstoken, Invoke login variable, with j_username as ‘ADAUTH’ and j_password as accesstoken (outbound param).

        Page.AzureOAuth2Accesstokenfetch = function($event, $data) {
            App.Actions.loginAction.dataBinding.j_username = "ADAUTH";
            App.Actions.loginAction.dataBinding.j_password = $data.accesstoken;
            App.Actions.loginAction.invoke();
        };

### Server Side Configuration
1. Create a java service MyAuthenticationManager by implementing WMCustomAuthenticationManager interface.

        import javax.servlet.http.HttpServletRequest;
        import org.slf4j.Logger;
        import org.slf4j.LoggerFactory;
        import org.springframework.beans.factory.annotation.Autowired;
        import com.wavemaker.runtime.security.SecurityService;
        import com.wavemaker.runtime.service.annotations.ExposeToClient;
        import com.wavemaker.runtime.service.annotations.HideFromClient;
        import java.io.IOException;
        import java.net.HttpURLConnection;
        import java.net.URL;
        import java.util.Arrays;
        import java.util.HashMap;
        import java.util.List;
        import java.util.Map;
        import java.util.Set;
        import java.util.HashSet;
        import com.wavemaker.runtime.security.AuthRequestContext;
        import com.wavemaker.runtime.security.WMCustomAuthenticationManager;
        import com.wavemaker.runtime.security.WMUser;
        import org.json.JSONArray;
        import org.json.JSONObject;
        import org.json.JSONException;
        import java.io.InputStreamReader;
        import java.io.BufferedReader;
    
    Override authenticate method as below

        @Override
            public WMUser authenticate(AuthRequestContext authRequestContext) {
                HttpServletRequest httpServletRequest = authRequestContext.getHttpServletRequest();

                //setting the logged in user object to null initially
                WMUser user = null;

                //checking for the security provider type i.e., whether it is OAuth or DB provider
                String securityProvider = httpServletRequest.getParameter("j_username");

                //logic for the OAuth as the security provider
                if ("ADAUTH".equals(securityProvider)) {

                    logger.info("ADAUTH LOGIN FLOW - STARTS");
                    //obtaining the token from Prefab
                    String token = httpServletRequest.getParameter("j_password"); 
                    if (token == null) {
                        return null;
                    }
                    logger.info(" --------- ADAUTH Token is "+token);
                    try {
                        JSONObject userInfo = getUserInfoFromGraph(token);
                        logger.info("AZURE AUTH "+userInfo);
                        String username = new JSONObject(userInfo.getString("responseMsg")).optString("userPrincipalName");
                        logger.info("AZURE AUTH - userPrincipalName "+username);				
                        user = new WMUser(username, Arrays.asList("DEFAULT")); 
                        user.setUserId(token);    // set user id for WM user
                    } catch (Exception e) {
                        logger.error("ADAUTH LOGIN - Failed to authenticate", e);
                        //				throw e;
                    }
                    logger.info("ADAUTH LOGIN FLOW - STARTS");
                }

                else {
                    logger.error("ADAUTH LOGIN - Username must be ADAUTH");
                    //			throw new Exception("Username must be ADAUTH");
                }
                // returning the logged in user object
                return user;

            }


            private JSONObject getUserInfoFromGraph(String accessToken) throws Exception {
                // Microsoft Graph user endpoint
                URL url = new URL("https://graph.microsoft.com/v1.0/me");
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();

                // Set the appropriate header fields in the request header.
                conn.setRequestProperty("Authorization", "Bearer " + accessToken);
                conn.setRequestProperty("Accept", "application/json");

                String response = getResponseStringFromConn(conn);

                int responseCode = conn.getResponseCode();
                if(responseCode != HttpURLConnection.HTTP_OK) {
                    throw new IOException(response);
                }

                JSONObject responseObject = processResponse(responseCode, response);
                return responseObject;
            }


            private String getResponseStringFromConn(HttpURLConnection conn) throws IOException {

                BufferedReader reader;
                if (conn.getResponseCode() == HttpURLConnection.HTTP_OK) {
                    reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                } else {
                    reader = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
                }
                StringBuilder stringBuilder= new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) {
                    stringBuilder.append(line);
                }

                return stringBuilder.toString();
            }

            private JSONObject processResponse(int responseCode, String response) throws JSONException {

                JSONObject responseJson = new JSONObject();
                responseJson.put("responseCode", responseCode);

                if (response.equalsIgnoreCase("")) {
                    responseJson.put("responseMsg", "");
                } else {
                    responseJson.put("responseMsg", new JSONObject(response));
                }
                return responseJson;
            }

2. Enable custom security provider and provide the class name as below along with package name

[![](/learn/assets/azure_oauth_security.png)](/learn/assets/azure_oauth_security.png)


### Login Flow

1. Preview wavemaker application 

[![](/learn/assets/azure_oauth_login_screen.png)](/learn/assets/azure_oauth_login_screen.png)

2. Click on Login with Azure Oauth, it will be redirected to microsoft login, provide username & password

[![](/learn/assets/azure_oauth_login_ms.png)](/learn/assets/azure_oauth_login_ms.png)

3. Read & Provide User consent to the Application 

[![](/learn/assets/azure_oauth_login_ms_consent.png)](/learn/assets/azure_oauth_login_ms_consent.png)


4. Once consent is accepted, the user will be logged in and redirected to the application.


## See Also

[How custom authentication works](/learn/app-development/app-security/authentication#custom/)  
[Wavemaker OAuth Prefabs](/learn/learn/app-development/widgets/prefab/oauth-prefabs)  