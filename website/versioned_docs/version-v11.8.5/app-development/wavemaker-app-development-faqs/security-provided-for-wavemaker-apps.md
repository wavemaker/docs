---
title: "What type of security is provided for WaveMaker Apps?"
id: "security-provided-for-wavemaker-apps"
sidebar_label: "Security Provided for WaveMaker Apps"
---
See the [FAQs](/learn/app-development/wavemaker-app-development-faqs) for WaveMaker app development.   

---
The WaveMaker security feature offers comprehensive security solutions to secure the apps developed. WaveMaker offers application level security and the two major areas are “Authentication, who has access and “Authorization”, who can access what. In practice, once WaveMaker security is enabled, both authentication and authorization are available to be taken advantage of and are intertwined.

By the process of “Onboarding,” end-users data is retrieved from various providers like DB, LDAP, AD or any custom provider. This data includes roles and role groups information. Then, Authentication is done based on user credentials, which are obtained from the security provider; and Authorization or role-based access control (RBAC) can be set up for various app resources such as widgets, pages, data, and APIs through configuration.

Apart from the above-mentioned security providers, WaveMaker supports Single Sign-On using Central Authentication Service (CAS), any Security Assertion Markup Language (SAML) 2.0 compliant provider and Token-based authentication for API requests. Cross-site Scripting (XSS) and Cross-Site Request Forgery (CSRF) attacks, listed on OWASP top 10 security, can also be prevented on WaveMaker Apps.

## See Also
[FAQs](/learn/app-development/wavemaker-app-development-faqs)  
[App Authentication](/learn/app-development/app-security/authentication/)  
[App Authorization](/learn/app-development/app-security/authorization/)  
[Single Sign-On using CAS](/learn/app-development/app-security/central-authentication-system/)  
[OWASP Support](/learn/app-development/app-security/owasp/)  
[SAML Integration](/learn/app-development/app-security/saml-integration/)  
[Token Based Authentication](/learn/app-development/app-security/token-based-authentication/)  

