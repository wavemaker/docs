---
title: "SAML Integration - OneLogin"
id: ""
---

[™](https://www.onelogin.com/) is a cloud-based IAM vendor providing users a secure SSO portal to access all their cloud and on-prem applications from any device.

Following are the steps to Configure SAML with OneLogin:

1. Account with OneLogin and add an App
2. security for WaveMaker app using SAML and obtain Single Logout URL
3. OneLogin, using the above Single Lougout URL obtain the Issuer URL
4. the WaveMaker App security by setting the MetaData URL to the Issuer URL

Steps in OneLogin Integration:

1. an Account with OneLogin.
2. with the URL mentioned in activation email.
3. an App [![onelogin_1](../assets/onelogin_1.png)](../assets/onelogin_1.png)
4. on ADD APP button will take you to the following screen: [![onelogin_2](../assets/onelogin_2.png)](../assets/onelogin_2.png)
5. the one highlighted in the above screenshot leading to the info screen [![onelogin_3](../assets/onelogin_3.png)](../assets/onelogin_3.png)
6. a display name and proceed to configuration step [![onelogin_4](../assets/onelogin_4.png)](../assets/onelogin_4.png)
7. WaveMaker Security Page for SAML under Security Provider Info provide the following info
    1. the Metadata URL from the Security Provider Info and paste it in the Audience URL in One Login Configuration as shown above.
    2. the Audience URL from the Security Provider Info and paste it in the Recipient, ACS Consumer URL Validator and ACS Consumer URL in One Login Configuration as shown above.
    3. the Single Logout URL from the Security Provider Info to the Single Logout URL in One Login Configuration as shown above.
8. move to the SSO Page [![onelogin_5](../assets/onelogin_5.png)](../assets/onelogin_5.png)
9. the above page copy the Issuer URL (which is the Identity Provider Metadata URL).
10. Security Configuration:
    1. the URL Copied in the previous step in the MetaData URL Field and press Enter. This will automatically populate the endpoint URL.
    2. you Run the App you will get the Login UI screen of the IDP. [![onelogin_6](../assets/onelogin_6.png)](../assets/onelogin_6.png)
    3. and you will be directed to the landing page of your WaveMaker app [![onelogin_7](../assets/onelogin_7.png)](../assets/onelogin_7.png)

[Security Cases](/learn/app-development/app-security/app-security/)

- [1\. How to integrage SAML with OneLogin](/learn/how-tos/saml-integration-onelogin/)
- [2\. How to integrage SAML with ADFS](/learn/how-tos/saml-integration-adfs/)
