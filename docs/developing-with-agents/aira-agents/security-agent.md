---
title: Security Agent
last_update: { author: "Swetha Kundaram" }
---

The **Security Agent** helps developers configure and manage application security in WaveMaker using simple, natural language requests. It enables authentication, authorization, and access control across pages, APIs, and databases without requiring deep platform-specific knowledge.

The agent works by applying predefined security configurations through WaveMaker’s backend. It does not invent security mechanisms or write custom security logic. Its role is to correctly apply available security options based on your requirements.

## What the Security Agent Is Used For

The Security Agent is designed to simplify common security setup tasks that developers typically find complex or error-prone. It allows you to enable authentication providers, control access to pages and APIs, configure CORS, and manage role-based access using conversational input instead of manual configuration.

Developers use the Security Agent to quickly secure applications while relying on WaveMaker’s built-in security framework rather than implementing security from scratch.

## Security Providers Supported

The Security Agent supports multiple authentication providers available in WaveMaker. You can enable any supported provider based on your application’s needs, including database-based authentication, Active Directory, OpenID, CAS, JWT, custom providers, and demo authentication. All standard providers are supported except SAML.

When configuring a provider, the agent asks for required details such as client IDs or secrets if they are missing. If some information is not provided, the agent may apply default values where appropriate and confirm assumptions with you.

## When to Use the Security Agent

Use the Security Agent when you want to enable or modify security settings in your application without manually navigating security configuration screens. It is especially useful when setting up authentication, securing pages or APIs, or applying role-based access rules.

You do not need detailed WaveMaker-specific knowledge to use this agent. However, a basic understanding of common security concepts such as authentication, authorization, CORS, XSS, and CSRF is helpful.

## How the Security Agent Works

When you describe a security requirement, the Security Agent interprets your request and applies the appropriate security configuration using WaveMaker’s existing security APIs. The actual enforcement of security happens in the backend through predefined mechanisms. The agent’s responsibility is limited to invoking the correct configuration actions.

The agent works best with clear and explicit inputs. For example, when securing pages, exact page names must be provided. The agent understands page names but does not analyze page content.


## Common Use Cases

The Security Agent can be used to configure single sign-on providers such as Google authentication by collecting required credentials like client ID and client secret. If details are missing, the agent follows up with clarifying questions before proceeding.

It can control page-level access by making specific pages publicly accessible or restricting them to authenticated users. Page names must be explicitly specified.

The agent can also configure CORS by enabling access for external domains when you describe the requirement in plain language, such as allowing another application to access your APIs, without requiring technical terminology.

For role-based access control, the Security Agent can apply roles to services, APIs, and prefabs. It works with existing roles or creates new roles after confirming with you. When securing APIs, descriptive API names can be used instead of full URL paths.


## What You’ll Get Back

After applying a security configuration, the Security Agent confirms the changes it has made. For ambiguous requests, it asks for clarification before proceeding. For actions that affect roles or access levels, it seeks explicit confirmation.

The agent relies on conversation history to maintain context, which can also be referenced later for documentation or review purposes.


## What the Security Agent Does Not Do

To set clear expectations, the Security Agent does not:

* Implement custom security logic outside supported providers
* Analyze page content or application behavior
* Replace WaveMaker’s built-in security mechanisms
* Eliminate the need for understanding basic security concepts

It configures security; it does not redesign it.


## How It Helps You as a Developer

By using the Security Agent, developers can secure applications faster and with fewer configuration errors. It reduces the need to understand platform-specific security setup while still giving control over authentication methods, access rules, and role management.

The agent allows you to focus on application functionality while ensuring that security is applied consistently and correctly.


## Summary

The Security Agent exists to answer one core question:

**“Can you help me configure security for my WaveMaker application?”**

If your goal is to enable authentication, control access, or apply security rules using simple, conversational input, the Security Agent is the right tool.
