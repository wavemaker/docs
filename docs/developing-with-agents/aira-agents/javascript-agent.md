---
title: JavaScript Agent
last_update: { author: "Author Name" }
---


## Overview

The **wm_js_agent** is the JavaScript execution agent within the AIRA system. Its responsibility is to generate and integrate JavaScript that extends or customizes behavior at the page or application level while remaining fully compliant with WaveMaker’s execution model.

This agent works strictly within the boundaries of existing UI structure and variables. It does not introduce new UI elements, alter markup, or redefine application structure. Its purpose is to attach behavior, not to reshape the interface.

## Role in AIRA Architecture

The JavaScript Agent operates as a specialized execution agent under the orchestration of the **wm_agent**.

It is invoked when a workflow requires behavior that cannot be expressed purely through declarative bindings or configuration. While the Prism UI Expert Agent defines structure and bindings, the JavaScript Agent adds controlled procedural behavior where explicitly required.

This agent does not make architectural or UI decisions. It implements behavior that has already been approved at the planning or design level.


## Core Responsibilities

### WaveMaker-Compliant JavaScript Generation

The JavaScript Agent generates JavaScript functions and event handlers that conform to WaveMaker’s supported execution patterns. All generated code respects the framework’s lifecycle rules and integration points.

The agent does not introduce framework-agnostic or browser-specific shortcuts. Its output is designed to coexist safely with WaveMaker’s runtime.

### Event and Behavior Binding

The agent attaches JavaScript to existing events such as widget actions, variable lifecycle callbacks, or application-level hooks. This includes updating handlers like `onSuccess`, `onError`, and similar event-driven entry points.

The agent does not create new variables or redefine existing ones. It only binds behavior to what already exists.

### Project Integration

Generated JavaScript is integrated into the project in the appropriate location based on scope, such as page-level or app-level scripts. The agent ensures that integration respects WaveMaker’s loading and execution order.

For React Native projects, the agent may add or update Expo plugin references when explicitly required and supported.

### Context-Driven Code Access

The JavaScript Agent operates on a strictly contextual basis. It inspects or references only the specific parts of the project that are required for the requested behavior.

Unrelated files, variables, or structures are never touched.

## Execution Scope

The JavaScript Agent operates exclusively within the JavaScript behavior layer of a WaveMaker project.

It is authorized to generate JavaScript functions, attach event handlers, bind event attributes in existing page markup, update variable lifecycle callbacks, and manage supported Expo plugin references in React Native contexts.

Its scope does not include UI structure, widget configuration, variable creation, or backend logic.

## Context Handling and Data Flow

The JavaScript Agent receives scoped instructions from the wm_agent, typically including target pages, variables, widgets, and the events to which behavior should be attached.

The agent produces JavaScript code and updated event bindings. These outputs are returned to the wm_agent to support coordination and downstream validation.

If required context is missing or ambiguous, the agent does not infer intent. It pauses and requests clarification before proceeding.


## Authority and Constraints

The JavaScript Agent operates under strict technical constraints.

It may only use verified WaveMaker widget and variable capabilities. It cannot add, remove, or alter widgets or markup structure, and it cannot create or delete variables. Its role is limited to attaching behavior to existing constructs.

The agent must not use JavaScript promises when working with WaveMaker service invokes. All service interactions must follow the callback or event-based patterns supported by the platform.

It must respect DOM loading and lifecycle rules, particularly when interacting with dialogs, tabs, wizards, or other dynamically loaded components.

These constraints ensure that generated JavaScript remains safe, predictable, and compatible with WaveMaker’s runtime.


## Execution Flow (High-Level)

At a high level, the JavaScript Agent is invoked after the relevant UI structure and variables already exist. It generates and attaches JavaScript behavior to specific events, integrates that code into the project at the appropriate scope, and returns control to the wm_agent.

The agent never initiates structural changes and never executes logic outside its assigned behavioral scope.



## Design Invariants

The following conditions are always true for the JavaScript Agent.

* The agent modifies behavior, not structure.
* JavaScript is generated only for existing pages, widgets, and variables.
* All service interactions follow WaveMaker-supported callback or event patterns.
* DOM lifecycle rules are respected at all times.
* Code changes are localized and context-driven.

If any of these invariants are violated, the resulting behavior is considered invalid.

