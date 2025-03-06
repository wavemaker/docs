---
title: "SAML Integration - Okta"
id: "saml-integration-okta"
---

Okta is a cloud-based identity and access management (IAM) platform that helps organizations securely manage user authentication and authorization. In this document, we discuss the steps to configure SAML using Okta with Wavemaker Application.

1. Choose the Security Provider as SAML in Wavemaker Application.

![samlOkta_1](/learn/assets/samlOkta_1.png)


2. Login to your Okta Admin Account. Go to applications tab.

![samlOkta_2](/learn/assets/samlOkta_2.png)


3. Create an application in Okta to configure with WM App. 

![samlOkta_3](/learn/assets/samlOkta_3.png)


4. Select SAML from the options and click on next.

![samlOkta_4](/learn/assets/samlOkta_4.png)


5. Provide a name to the application in okta and click on next.

![samlOkta_5](/learn/assets/samlOkta_5.png)


6. Now, copy the SSO, Audience urls from the Service Provider in Wavemaker.

![samlOkta_6](/learn/assets/samlOkta_6.png)


7. Paste the copied urls in okta accordingly and click on next.

![samlOkta_7](/learn/assets/samlOkta_7.png)

***Note***: For Additional Security, you can upload signature certificate by clicking on 'Show Advance Settings' if required.


8. Choose the app as internal or external as per your requirement.

![samlOkta_8](/learn/assets/samlOkta_8.png)


9. In this case we are choosing as an internal app and then click on finish.

![samlOkta_9](/learn/assets/samlOkta_9.png)


10. After finishing, it will provide metadata URL. Copy the metadata url.

![samlOkta_10](/learn/assets/samlOkta_10.png)


11. Now, paste the metadata URL in wavemaker App and click on Load.

![samlOkta_11](/learn/assets/samlOkta_11.png)


12. Now enter keystore as alias and your required password and click on Save.

![samlOkta_12](/learn/assets/samlOkta_12.png)

 
13. Now, create users in okta to whom you wants to give access to the application.

![samlOkta_13](/learn/assets/samlOkta_13.png)


14. After creating users, you need to assign the application to the users.

![samlOkta_14](/learn/assets/samlOkta_14.png).


Done. Now, preview the application and log in with the assigned user credentials. Upon successful login it will redirects to the authorized page. 


The above provided steps is for development level. You can apply the same for deployment/live phases. The only thing you should concern about the SSO, Audience URL's. You need to change the urls according to the domain wherever you are deploying. For more clarity please refer to [SAML Integration](/learn/app-development/app-security/saml-integration/) and for more detailed guidance on SAML integration in Okta, refer to the official Okta documentation:
[Okta SAML Integration](https://help.okta.com/oie/en-us/content/topics/apps/apps_app_integration_wizard_saml.htm) Guide to integrate according to your requirement.
