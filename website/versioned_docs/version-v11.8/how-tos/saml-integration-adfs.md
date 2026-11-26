---
title: "SAML Integration - ADFS"
id: "saml-integration-adfs"
---

**Active Directory **Federation Services (**ADFS**) is a software component developed by Microsoft that can be installed on Windows Server operating systems to provide users with single sign-on access to systems and applications located across organizational boundaries.

Active Directory Federation Services (AD FS) simplifies access to systems and applications using a claims-based access (CBA) authorization mechanism to maintain application security. AD FS supports Web single-sign-on (SSO) technologies that help information technology (IT) organizations collaborate across organizational boundaries.

AD FS is an identity access solution that provides browser-based clients (internal or external to your network) with seamless, "one prompt" access to one or more protected Internet-facing applications, even when the user accounts and applications are located in completely different networks or organizations.

## Pre-requisites

The testing was done with  ADFS 3.0 in Windows Server® 2012 R2.

1. You should have already installed AD CS - Certificate Service, AD DS - Domain Service, AD FS - Federated Service on Active Directory. 
2. You have the Metadata URL for the WaveMaker App: Steps to obtain the Metadata URL:
    1. You should have already created an app using WaveMaker integrated with SAML as security provider ([see here for more](/learn/app-development/app-security/saml-integration/#integration)).
    2. Configure ADFS Federation Metadata details in WaveMaker App. You can either use the URL or upload file. [![](/learn/assets/adfs_wm_meta1.png?v=20)](/learn/assets/adfs_wm_meta1.png?v=20)
    3. From Service Provider Configuration, generate Keystore. [![](/learn/assets/adfs_wm_meta2.png)](/learn/assets/adfs_wm_meta2.png)
    4. Preview the app and open the Security dialog again. Note the Metadata URL from the WaveMaker App: [![](/learn/assets/adfs_url.png)](/learn/assets/adfs_url.png)

Due to US export limitations, Java JDK comes with a limited set of cryptographic capabilities. Usage of the SAML Extension might require an installation of the Unlimited Strength Jurisdiction Policy Files which removes these limitations.

## Implementation Steps

(NOTE: The screenshots were current from AD FS at the time of documentation and they might differ from actual)

1. Launch Active Directory
2. Select AD FS from Server Manager AD FS
3. From Tools select AD FS Management [![adfs_1](/learn/assets/adfs_1.png)](/learn/assets/adfs_1.png)
4. In AD FS 2.0 Management Console select "Add Relying Party Trust" [![adfs_2](/learn/assets/adfs_2.png)](/learn/assets/adfs_2.png) [![adfs_3](/learn/assets/adfs_3.png)](/learn/assets/adfs_3.png)
5. Select "Import data about the relying party from a file" [![adfs_4](/learn/assets/adfs_4.png)](/learn/assets/adfs_4.png)
6. Select the metadata.xml file from the WaveMaker app as mentioned earlier in the prerequisites section (ignore any warning messages). [![adfs_5](/learn/assets/adfs_5.png)](/learn/assets/adfs_5.png) [![adfs_6](/learn/assets/adfs_6.png)](/learn/assets/adfs_6.png)
7. On the "Ready to Add Trust" make sure that tab endpoints contain multiple endpoint values. If not, verify that your metadata was generated with HTTPS protocol URLs. [![adfs_7](/learn/assets/adfs_7.png)](/learn/assets/adfs_7.png) [![adfs_8](/learn/assets/adfs_8.png)](/learn/assets/adfs_8.png)
8. Leave "Open the Edit Claim Rules dialog" checkbox checked and finish the wizard. [![adfs_9](/learn/assets/adfs_9.png)](/learn/assets/adfs_9.png)
9. Select "Add Rule", choose "Send LDAP Attributes as Claims" and press Next [![adfs_10](/learn/assets/adfs_10.png)](/learn/assets/adfs_10.png)
10. Add NameID as "Claim rule name", choose "Active Directory" as Attribute store, choose "SAM-Account-Name" as LDAP Attribute and "Name ID" as "Outgoing claim type", finish the wizard and confirm the claim rules window, in ADFS 3.0 you might need to configure the Name ID as a Pass Through claim - As we are using Spring SAML Security it expects the Name ID Parameter in the Spring SAML Response. [![adfs_11](/learn/assets/adfs_11.png)](/learn/assets/adfs_11.png)
11. Open the provider by double-clicking it, select tab Advanced and change "Secure hash algorithm" to SHA-1 [![adfs_12](/learn/assets/adfs_12.png)](/learn/assets/adfs_12.png)

## Preview

1. Now when you preview the WaveMaker app, you will be redirected to the ADFS login page.

## Deployment

Before deployment, ensure that you configure the deployment profile with the ADFS Server details.

1. Get the deployment URL from [Profile Configuration dialog](/learn/app-development/deployment/configuration-profiles/) [![](/learn/assets/adfs_wm_deploy.png)](/learn/assets/adfs_wm_deploy.png)
2. Configure Metadata in ADFS Server with this URL
3. Repeat the above steps (preview) with the new ADFS metadata details and deploy the app.

[App Security Cases](/learn/app-development/app-security/app-security/)

- [1. How to integrage SAML with OneLogin](/learn/how-tos/saml-integration-onelogin/)
- [2. How to integrage SAML with ADFS](/learn/how-tos/saml-integration-adfs/)
    - [i. Pre-requisites](#prereqs)
    - [ii. Implementation Steps](#steps)
    - [iii. Preview](#preview)
    - [iv. Deployment](#deploy)
