---
title: Java Agent
last_update: { author: "Author Name" }
---


## Overview

The **wm_java_agent** is the backend execution agent responsible for custom Java development within the AIRA system. It implements business logic using WaveMaker’s supported backend stack, including Spring 6, Servlet 6, and XML-based configuration.

This agent works only with user-defined Java sources. It does not alter platform-generated services or framework-managed files. Its purpose is to extend backend behavior safely without violating WaveMaker’s code generation boundaries.



## Role in AIRA Architecture

The Java Agent operates as a specialized execution agent under the orchestration of the **wm_agent**.

It is invoked when a workflow requires backend logic that cannot be expressed through declarative configuration or existing services. While the Architect Agent explains how backend components should be designed and the wm_agent coordinates execution, the Java Agent is responsible for implementing approved backend logic in code.

This agent does not make architectural decisions and does not refactor existing system-generated services.



## Core Responsibilities

### Custom Business Logic Implementation

The Java Agent creates and updates custom Java services that encapsulate application-specific business logic. These services are authored using standard Spring patterns and follow WaveMaker’s conventions for service exposure and lifecycle management.

Public methods defined in these services are exposed as REST endpoints, while private methods are used strictly for internal logic and composition.

### Model Class Management

The agent creates and maintains Java model classes required by custom services. These models represent request payloads, response structures, and internal domain objects used by backend logic.

Model classes are designed to be explicit, stable, and compatible with WaveMaker’s serialization and binding mechanisms.

### Controlled Source File Access

The Java Agent works exclusively within user-defined source files located under `src/main/java`. All changes are scoped, intentional, and limited to files that are explicitly owned by the user.

Generated files and framework-managed directories are never modified.



## Execution Scope

The Java Agent operates strictly within the custom backend layer of a WaveMaker application.

It is authorized to create and update custom Java services, define model classes, and implement backend logic using Spring dependency injection and WaveMaker-supported conventions. Its scope does not extend to auto-generated services, platform internals, or runtime-managed artifacts.

All backend changes are additive and isolated from generated code.



## Context Handling and Data Flow

The Java Agent receives scoped backend instructions from the wm_agent, including required functionality, data models, and integration expectations.

It produces Java source files and service definitions that can be consumed by other agents, such as API binding or UI agents. Outputs are explicit and structured so that downstream agents can rely on them without inference.

If required context is missing or unclear, the agent does not assume intent and requests clarification before proceeding.



## Authority and Constraints

The Java Agent operates under strict backend safety constraints.

It is not permitted to modify auto-generated service files, including `RestService`, `SoapService`, `OpenAPIService`, or `DataService`. It cannot touch files located within the `services/` directory or any other framework-managed location.

The agent follows a strict “create new, do not modify generated” principle. All backend logic must be implemented through new or explicitly user-owned classes. Spring dependency injection must be used consistently, and all code must align with WaveMaker’s supported conventions.

These constraints exist to protect regeneration safety and long-term maintainability.



## Execution Flow (High-Level)

At a high level, the Java Agent is invoked after backend requirements have been clarified. It implements custom services and models within user-owned source locations and returns control to the wm_agent once code generation is complete.

The agent does not trigger deployment, regeneration, or runtime configuration changes.



## Design Invariants

The following conditions are always true for the Java Agent.

* All backend logic resides in user-defined Java files.
* Auto-generated services are never modified.
* New code is added without breaking regeneration safety.
* Spring dependency injection is used consistently.
* Backend changes remain isolated from UI and platform internals.

Violation of these invariants results in an invalid backend state.

