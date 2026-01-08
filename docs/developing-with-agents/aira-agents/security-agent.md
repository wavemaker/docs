---
title: Security Agent
last_update: { author: "Swetha Kundaram" }
---


## Overview

The **wm_security_agent** is responsible for configuring application security within the AIRA system. Its scope includes authentication setup, role-based access control, endpoint protection, and security hardening at the application level.

This agent does not implement business logic and does not execute runtime behavior. Its role is to define, validate, and apply security configuration in a controlled and auditable manner.

Security changes made by this agent are intentional, explicit, and conservative by design.


## Role in AIRA Architecture

The Security Agent operates as a specialized execution agent under the orchestration of the **wm_agent**.

It is invoked when a workflow requires changes to authentication, authorization, or security enforcement. While the Architect Agent may guide security design and the wm_agent coordinates execution, the Security Agent performs the concrete configuration of security controls.

This agent does not infer security intent. It applies only what has been explicitly requested and confirmed.


## Core Responsibilities

### Authentication Configuration

The Security Agent configures supported authentication providers, including database-based authentication, LDAP, and custom authentication mechanisms. It ensures that provider configuration is valid, consistent, and aligned with WaveMaker’s security model.

Authentication setup is performed cautiously and validated before being applied.

### Role and Access Management

The agent manages roles, landing pages, and role-based access control rules. It defines which users can access which parts of the application and under what conditions.

Role changes are scoped and deliberate to avoid accidental privilege escalation or access loss.

### Security Hardening and Protection

The Security Agent configures application-level security protections such as CSRF, CORS, XSS prevention, SSL enforcement, content security policies, mutual TLS, and custom security filters where supported.

These protections are applied as configuration, not code, and are validated before activation.

### Endpoint Access Control

The agent modifies endpoint-level access permissions to enforce authentication and authorization rules. Endpoint protection is applied consistently across services and validated against existing roles and providers.



## Execution Scope

The Security Agent operates strictly within the application security configuration layer.

It works with design-time security files located under `services/securityService/designtime`. Its authority includes configuring authentication providers, managing roles, defining landing behavior, and enforcing access control policies.

It does not modify application logic, UI behavior, or backend service implementation.


## Context Handling and Data Flow

The Security Agent receives explicit security instructions from the wm_agent, including the desired authentication model, role definitions, and protection requirements.

It validates the requested configuration against platform capabilities and existing security state before applying changes. Outputs consist of updated security configuration artifacts, which are returned to the wm_agent for coordination.

If intent is unclear or confirmation is missing, the agent stops and requests clarification.



## Authority and Constraints

The Security Agent operates under strict security constraints.

It cannot configure SAML-based authentication. All changes require explicit user confirmation before application. The agent follows a validation-first approach, ensuring that configurations are internally consistent and supported before they are persisted.

All operations are confined to design-time security configuration files. Runtime behavior is not altered directly.

These constraints exist to prevent accidental lockouts, broken authentication flows, or insecure configurations.



## Execution Flow (High-Level)

At a high level, the Security Agent is invoked to apply or modify security configuration. It validates the requested changes, applies them to design-time security artifacts, and returns control to the wm_agent once configuration is complete.

The agent does not deploy, execute, or test runtime authentication flows.



## Design Invariants

The following conditions are always true for the Security Agent.

* Security changes require explicit confirmation.
* Configuration is validated before being applied.
* Unsupported authentication methods are never configured.
* Security logic is defined through configuration, not code.
* All changes are confined to design-time security artifacts.

Violation of these invariants results in an unsafe or invalid security state.



