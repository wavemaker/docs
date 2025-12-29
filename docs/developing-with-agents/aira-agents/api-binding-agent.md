---
title: API Binding Agent
last_update: { author: "Author Name" }
---


## Overview

The **wm_api_binding_agent** is responsible for autonomously binding UI widgets to API services within the AIRA system. Its purpose is to connect existing UI elements to service endpoints using a deterministic, tool-driven workflow without introducing manual logic or procedural code.

This agent does not generate JavaScript and does not rely on ad-hoc workarounds. It operates entirely through a structured, multi-step binding process to ensure correctness, repeatability, and safety.



## Role in AIRA Architecture

The API Binding Agent operates as a specialized execution agent under the orchestration of the **wm_agent**.

It is invoked after API services and UI elements already exist. While the API Agent manages service definitions and the Prism UI Expert Agent creates UI structure, the API Binding Agent is responsible for connecting the two through validated bindings.

This agent does not design APIs or UI. It performs binding only when prerequisites are already satisfied.



## Core Responsibilities

### Autonomous Widget-to-API Binding

The API Binding Agent performs widget-to-API binding using a fixed, autonomous workflow. This workflow follows a predefined, seven-step MCP (Model Context Protocol) process that governs discovery, validation, and binding.

The agent does not pause for intermediate confirmations and does not require manual intervention once invoked.

### Service Variable Management

As part of the binding process, the agent creates or updates service variables required to connect UI widgets to API endpoints. These variables are managed declaratively and remain consistent with WaveMaker’s binding model.

Variable creation is scoped strictly to what is required for binding and does not introduce unrelated state.

### Markup-Level Binding Updates

The agent updates page markup to attach bindings between widgets and service variables. These updates are declarative and localized, ensuring that UI structure remains unchanged while behavior is connected.

Bindings are applied only where validation has succeeded.



## Execution Scope

The API Binding Agent operates strictly within the binding layer between UI and API services.

It is authorized to discover service endpoints, validate compatibility with target widgets, manage service variables, and update page markup with bindings. Its scope does not include JavaScript generation, UI restructuring, API modification, or backend logic.

All operations are performed through supported MCP functions.



## Context Handling and Data Flow

The API Binding Agent receives scoped instructions from the wm_agent, including target pages, widgets, and API services. It relies entirely on available tooling and validated metadata to perform bindings.

The agent produces updated bindings and service variable references, which are returned to the wm_agent for coordination. If required tools fail or necessary metadata is unavailable, the agent does not fabricate bindings or attempt fallback logic.

In such cases, execution stops and control returns to the coordinating agent.



## Authority and Constraints

The API Binding Agent operates under strict operational constraints.

It does not generate JavaScript and does not introduce manual workarounds. It does not prompt for intermediate confirmations and runs fully autonomously once invoked. All actions are performed strictly through MCP functions, without bypasses or custom logic.

If the binding workflow cannot be completed using supported tools, the agent fails fast and reports the issue instead of guessing or approximating behavior.

These constraints ensure that bindings remain reliable and tool-verifiable.



## Execution Flow (High-Level)

At a high level, the API Binding Agent is invoked after UI and API prerequisites are satisfied. It discovers relevant endpoints, validates widget compatibility, manages required service variables, and applies bindings through declarative markup updates.

Once binding is complete or fails safely, control returns to the wm_agent.



## Design Invariants

The following conditions are always true for the API Binding Agent.

* All bindings are created through MCP functions.
* No JavaScript is generated.
* No manual or heuristic binding logic is introduced.
* Binding runs autonomously without intermediate prompts.
* Failed tooling results in safe termination, not fabricated output.

Violation of these invariants results in an invalid binding state.

