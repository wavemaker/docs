---
title: Theme Agent
last_update: { author: "Swetha Kundaram" }
---


## Overview

The **wm_theme_agent** is responsible for managing theme customization and design tokens within the AIRA system. Its focus is on maintaining a consistent, token-driven design system aligned with WaveMaker’s Material 3 theming model.

This agent operates at the theme and design-token level only. It does not create UI structure or apply per-page styling. Its role is to define and evolve the global design language that other agents consume.



## Role in AIRA Architecture

The Theme Agent operates as a specialized execution agent under the orchestration of the **wm_agent**.

It is invoked when a workflow requires changes to the global visual system, such as adjusting colors, typography, spacing, or component-level design behavior. While the Prism UI Expert Agent applies variants and consumes tokens at the UI level, the Theme Agent defines the tokens and variants themselves.

The Theme Agent is not invoked for UI-level styling tasks that belong to the Prism UI Expert Agent.


## Core Responsibilities

### Design Token Management

The Theme Agent creates and updates global design tokens that define the application’s visual language. These tokens cover areas such as color, typography, spacing, radius, border styles, opacity, iconography, and elevation.

Token changes are made deliberately and consistently to ensure that visual updates propagate predictably across the application.

### Component Variant Definition

The agent defines and modifies component variants that are driven by design tokens. These variants describe stylistic differences at the component level without embedding styling directly into UI markup.

Variants are designed to be reusable and compatible with WaveMaker’s theming system.

### Theme Overrides and Modes

The Theme Agent generates and maintains theme overrides, including support for light and dark modes. These overrides adjust token values and variant behavior without duplicating or fragmenting the design system.

The agent ensures that mode-specific overrides remain aligned with the base theme structure.

## Execution Scope

The Theme Agent operates strictly within the theme and design-token layer of a WaveMaker project.

It is authorized to create and update global design tokens, define or modify component variants, and generate theme overrides for different modes. All changes are expressed through WaveMaker’s theme configuration and JSON-based theming model.

The agent does not apply styles directly to UI elements and does not interact with page or widget markup.


## Context Handling and Data Flow

The Theme Agent receives scoped theming instructions from the wm_agent, such as desired visual changes, mode requirements, or design system updates.

It produces updated theme definitions and token values that are consumed by UI agents. Outputs are structured and explicit so that downstream agents can apply them without interpretation.

If required tokens or variants already exist, the agent reuses them rather than introducing duplicates.

## Authority and Constraints

The Theme Agent operates under strict theming constraints.

It follows a find-first, create-last approach when working with design tokens. Existing tokens are reused or updated before new tokens are introduced. All theme changes adhere strictly to WaveMaker’s JSON schema.

The agent is not invoked when the overall task requires UI construction or variant application at the page level. In such cases, responsibility belongs to the Prism UI Expert Agent, which has dedicated tools for applying variants to UI elements.

These constraints prevent theme fragmentation and ensure a single, coherent design system.


## Execution Flow (High-Level)

At a high level, the Theme Agent is invoked when global visual changes are required. It updates design tokens or variants, generates any necessary theme overrides, and returns the updated theme configuration to the wm_agent.

UI agents then consume these tokens and variants as part of their own execution.


## Design Invariants

The following conditions are always true for the Theme Agent.

* All styling is driven through design tokens.
* Existing tokens are preferred over creating new ones.
* Theme changes follow WaveMaker’s JSON schema.
* UI structure and markup are never modified.
* Theme logic remains centralized and reusable.

Violation of these invariants results in an inconsistent or fragmented design system.

