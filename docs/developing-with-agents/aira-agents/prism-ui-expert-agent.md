---
title: Prism UI Expert Agent
last_update: { author: "Swetha Kundaram" }
---


## Overview

The **wm_ui_expert_prism** is the UI construction agent in the AIRA system. Its responsibility is to generate and maintain declarative user interfaces using WaveMaker’s Prism-based low-code framework.

This agent focuses exclusively on UI structure, markup, bindings, and styling through design tokens. It translates intent, specifications, or visual references into valid WaveMaker UI definitions without performing any backend or business-logic execution.

The Prism UI Expert Agent builds interface layers precisely and predictably, without improvisation or side effects.

## Role in AIRA Architecture

The Prism UI Expert Agent operates as a specialized execution agent under the orchestration of the **wm_agent**.

It is invoked when a workflow requires creation or modification of pages, partials, or UI-level behavior. While the wm_agent controls when and why UI work happens, the Prism UI Expert Agent controls how that UI is expressed within WaveMaker’s declarative model.

This agent does not make architectural decisions. It implements UI decisions that have already been validated or approved upstream.


## Core Responsibilities

### Declarative UI Generation

The Prism UI Expert Agent generates valid WaveMaker XML markup for pages and partials. It follows the declarative low-code model strictly, ensuring that generated UI definitions are compatible with WaveMaker’s runtime and tooling.

UI generation includes page structure, widget hierarchy, layout composition, and lifecycle-aware definitions.

### Page and Partial Lifecycle Management

The agent manages the lifecycle of UI artifacts such as pages and partials. This includes creating new UI assets, updating existing ones, renaming or removing them when explicitly instructed, and ensuring that changes remain localized and non-destructive.

It does not refactor unrelated UI components or restructure the application outside the defined scope.

### Variables, Bindings, and Actions

The Prism UI Expert Agent defines UI-level variables, data bindings, and action flows required for the interface to function. These bindings are declarative and aligned with WaveMaker’s supported interaction model.

The agent does not embed business logic. It connects UI elements to existing APIs, variables, or events as instructed.

### Token-Based Styling

All styling applied by the agent is driven by design tokens and theme variants. The agent uses WaveMaker’s theming system to ensure consistency, maintainability, and compatibility with design system controls.

Inline CSS or ad-hoc styling is never introduced.

### Visual and Intent-Based UI Generation

The Prism UI Expert Agent can generate UI from screenshots, images, API specifications, or high-level user intent. In these cases, it focuses on structural accuracy and semantic mapping rather than pixel-perfect reproduction.

When images are involved, interpretation is constrained to UI structure and layout only, never speculative behavior.


## Execution Scope

The Prism UI Expert Agent operates strictly within the UI layer of a WaveMaker application.

It is authorized to create, update, rename, or delete pages and partials, generate valid WaveMaker XML markup, define UI variables and bindings, and apply theme-based styling. Its scope ends at the UI boundary and does not extend into backend services, database logic, or security configuration.

All edits performed by the agent are localized and non-destructive by design.


## Context Handling and Data Flow

The Prism UI Expert Agent receives scoped UI instructions from the wm_agent. These instructions may include user intent, API specifications, design references, screenshots, or existing UI identifiers.

The agent produces UI artifacts and structured outputs such as page names, widget identifiers, and binding references. These outputs are passed back to the wm_agent to support downstream coordination.

The agent does not assume missing context. If required metadata or references are unavailable, it requests clarification before proceeding.


## Authority and Constraints

The Prism UI Expert Agent operates under strict technical and structural constraints.

It is permitted to use only verified WaveMaker widget metadata, including officially supported properties, methods, and events. It generates UI definitions exclusively through declarative markup and design token-based styling.

It is not permitted to fabricate widget metadata, introduce unsupported properties, alter unrelated code or structures, or use inline CSS. All edits must be non-destructive and confined to the explicitly targeted UI assets.

These constraints ensure UI correctness, maintainability, and compatibility with WaveMaker tooling.


## Execution Flow (High-Level)

At a high level, the Prism UI Expert Agent is invoked after UI intent has been clarified. It translates that intent into declarative UI artifacts, applies bindings and styling, and returns structured results to the wm_agent.

Once UI generation is complete, further coordination and execution decisions remain with the wm_agent.


## Design Invariants

The following conditions are always true for the Prism UI Expert Agent.

* The agent operates only within the UI layer.
* All UI definitions are declarative and WaveMaker-compliant.
* Only verified widget metadata is used.
* Styling is applied exclusively through design tokens.
* UI edits are localized and non-destructive.

If any of these invariants are violated, the resulting UI state is considered invalid.

