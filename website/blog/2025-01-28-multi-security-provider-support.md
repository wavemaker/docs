---
title: "Introducing Multi Security Provider Support"
author: "Abhitej Konkimalla"
---
---

In today’s rapidly evolving digital landscape, security remains a cornerstone of application development. With the release of WaveMaker Studio 11.10, we are thrilled to introduce a game-changing feature—the ability to configure multiple security providers for your applications.
 
This feature empowers application developers to seamlessly enable and manage multiple security providers, offering greater flexibility and enhanced security for their applications.

## Why Multi Security Providers?

In an increasingly diverse tech ecosystem, users interact with applications through various authentication methods. Some organizations rely on traditional database-based authentication, while others prioritize enterprise-grade solutions like LDAP. Additionally, social logins such as Google and LinkedIn are becoming more popular for their ease of use.

With the new multi-security provider support, WaveMaker Studio empowers application developers to integrate and configure multiple authentication methods tailored to their application’s needs. This flexibility ensures enhanced security and a seamless user experience.

<!-- truncate -->

## Key Highlights of Multi Security Provider Support

### 1. Support for Multiple Authentication Providers

Developers can configure DB-based authentication, LDAP, and social logins (e.g., Google, LinkedIn) within a single application.
This flexibility allows applications to cater to different user bases with varying authentication preferences.

### 2. Dynamic Configuration

Enable or disable specific security providers based on the needs of your application.
Customize authentication flows to align with business requirements.

### 3. Seamless Integration

WaveMaker Studio simplifies the process of configuring multiple security providers through an intuitive UI.

Developers can easily manage and test different authentication mechanisms without complex coding or integrations.

### 4. Enhanced User Experience

Users can choose their preferred method of authentication, whether it’s a corporate LDAP login or a convenient social login.
Streamlined login processes ensure a secure yet frictionless experience.

## How Does It Work?

Configuring multiple authentication providers in WaveMaker Studio is straightforward. Here’s an overview of the process:

1. **Navigate to Security Settings**: Access the security settings in your WaveMaker Studio project.
2. **Add Authentication Providers**: Select and configure the desired providers (DB, LDAP, Google, LinkedIn, etc.).
3. **Configure Role Mappings**: Map the roles between the authentication providers & application roles.
4. **Test and Deploy**: Use the built-in testing tools to verify your configuration and deploy the application.

![Multi-Security Provider Blog](/learn/assets/multi-security-provider-blog.png)

For more detailed instructions, see [Multi-Security Provider Configuration](/learn/how-tos/multiple-security-provider-configuration) 

## Usecases

- **Enterprise Applications**: Integrate LDAP for employee authentication while offering social login options for external partners.

- **E-Commerce Platforms**: Provide customers with the choice of logging in using their email, Google account, or LinkedIn profile.

- **Educational Portals**: Support a mix of DB-based authentication for students and LDAP for faculty members.

## Building a Secure Future with WaveMaker Studio

The introduction of multi-security provider support underscores WaveMaker’s commitment to helping developers create robust, secure, and user-friendly applications. By supporting diverse authentication methods, we’re ensuring that your applications are ready to meet the demands of today’s users and enterprises.