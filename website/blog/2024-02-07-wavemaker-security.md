---
title: "WaveMaker Security"
author: Ritupurna Lenka
---
---

WaveMaker is dedicated to furnishing a secure environment for developing applications. It encompasses integrated features, strategies, and extensive security configuration to manage security within the application. Applications created in WaveMaker are inherently secured and ready for immediate use upon completion of development. 
The approach taken by WaveMaker involves regular monitoring and updates, staying abreast of the latest security patches and enhancements for the libraries in use. This proactive stance contributes to the creation of a fortified development environment, where the foundation of applications is built upon secure and resilient libraries. Developers working within the WaveMaker ecosystem can thus have confidence that the underlying components are thoroughly vetted, adhering to the highest security standards and significantly reducing the likelihood of vulnerabilities affecting the final application.

<!-- truncate -->

## Authentication and Authorization

WaveMaker offers several authentication and authorization mechanisms to validate the identity of the application users and apply necessary restrictions based on the user role.

### Authentication

Authentication mechanisms help in verifying the identity of users or entities attempting to access an application. These security configurations provide a robust framework for secure single sign-on, and protection against various threats like Identity Spoofing, Session Hijacking, Credential thefts, and many user identity-related risks.
- OpenID
- LDAP
- Database
- Active Directory
- SAML
- CAS

### Authorization

Authorization mechanisms help in controlling access to specific features, functionalities, or data within an application. With this, users with appropriate privileges and permissions can perform certain actions or access certain functionalities. Without these, the application is open to issues like Data Exposure, Privilege Escalation, Cross-User Data Leakage, and Overexposure of APIs.

#### Role-Based Access Control

Role-Based Access Control (RBAC) can be set up for various app resources such as widgets, pages, data, and APIs through configuration.
- API Access
- Page Access
- Widget Access

## Safeguarding the Application

### Web Application Vulnerability

#### OWASP Top 10

With user-customizable security policies, WaveMaker wipes out the security issues presented in OWASP's Top 10 vulnerabilities.  This is to build assurance with the users that the developed application has no risk associated with code execution, unauthorized data access, data breaches, cross-origin attacks, clickjacking, insecure communication, and unauthorized database manipulation while abiding by the security standards.

Below are the protective measures for securing against the OWASP vulnerabilities.
- XSS
- SSL
- CORS and X-Frame
- SQL Injection

#### Third-party Dependent Libraries

WaveMaker's use of SONARQUBE represents a proactive approach to ensure the integrity and security of its software applications. SONARQUBE serves as a crucial component in the software development lifecycle, providing a comprehensive analysis of code quality, bug identification, and security vulnerabilities.

The frequent evaluation allows the development team to catch potential issues early in the development process, preventing the accumulation of technical debt and enhancing the overall stability of the software. Moreover, the upgrade policy implemented by WaveMaker further enhances the security posture of the software.

In summary, the integration of SONARQUBE into WaveMaker's development process exemplifies a commitment to code quality, security, and continuous improvement.

## Our Commitment to Application Security

WaveMaker stands as a secure platform to build applications by becoming the first Java low-code platform to achieve Veracode certification that ensures that the first-party code is assessed, and remediation guidance is provided.

As believed, with WaveMaker you can focus on your application while the security is taken care of by WaveMaker.

