---
title: API Agent
last_update: { author: "Swetha Kundaram" }
---


## Overview

The **wm_api_agent** is responsible for managing external API services within the AIRA system. Its role is to import, configure, and maintain API integrations in a controlled and traceable manner using WaveMaker’s supported service models.

This agent focuses on API definition and lifecycle management. It does not bind APIs to UI elements, execute API calls, or implement business logic. Its responsibility is to ensure that API services are correctly defined, versioned, and safely updated.



## Role in AIRA Architecture

The API Agent operates as a specialized execution agent under the orchestration of the **wm_agent**.

It is invoked when a workflow requires importing new APIs, updating existing service definitions, or managing API configuration details such as endpoints, proxies, or authentication settings. While the Architect Agent may guide API design choices and the wm_agent coordinates execution, the API Agent performs the concrete service-level operations.

This agent does not consume APIs or attach them to application logic. That responsibility belongs to downstream agents.



## Core Responsibilities

### API Service Import and Configuration

The API Agent imports API services using supported formats such as OpenAPI, Swagger, and Postman collections. It ensures that imported services conform to WaveMaker’s service model and are correctly represented within the project.

During import, the agent configures service metadata, endpoints, and supported operations without altering platform-defined defaults.

### Service Lifecycle Management

The agent manages the full lifecycle of API services, including creation, update, reimport, and deletion. It retrieves existing service definitions before applying any modification to ensure that changes are deliberate and scoped.

Reimports and updates are handled cautiously to avoid unintended overwrites or breaking changes.

### Authentication and Proxy Configuration

The API Agent configures supported authentication mechanisms such as OAuth and manages proxy-related settings where applicable. These configurations are applied only within the boundaries of existing service definitions and platform support.

The agent does not invent or redefine authentication models.



## Execution Scope

The API Agent operates strictly within the API service definition layer of a WaveMaker application.

It is authorized to import and manage REST-based API services, configure endpoints, manage service metadata, and apply supported authentication and proxy settings. Its scope does not include websocket services, UI binding, runtime invocation, or backend business logic.

All actions are confined to API service configuration artifacts.



## Context Handling and Data Flow

The API Agent receives explicit instructions from the wm_agent, including API sources, formats, update intent, and confirmation to proceed. It does not infer whether a service should be replaced, updated, or preserved.

The agent produces updated API service definitions and metadata, which are returned to the wm_agent for coordination with other agents such as binding or UI layers.

If existing service information is unavailable or unclear, the agent pauses and requests clarification before making any changes.



## Authority and Constraints

The API Agent operates under strict change-control constraints.

It requires explicit user confirmation before importing, updating, reimporting, or deleting API services. Existing service definitions must always be retrieved and inspected before modification.

The agent cannot import or update websocket-based services. It cannot change existing Swagger security definitions or OAuth provider identifiers. Authentication configuration is limited to supported adjustments that do not alter established provider identities.

These constraints ensure that API integrations remain stable, auditable, and predictable.



## Execution Flow (High-Level)

At a high level, the API Agent is invoked to manage API services. It retrieves existing definitions, validates the requested operation, applies controlled changes, and returns the updated service state to the wm_agent.

The agent does not trigger API consumption or execution.



## Design Invariants

The following conditions are always true for the API Agent.

* API services are modified only with explicit confirmation.
* Existing service definitions are retrieved before any change.
* Unsupported service types are never imported.
* Authentication identities are not altered.
* API management is isolated from UI and execution logic.

If any of these invariants are violated, the API service state is considered unsafe.

