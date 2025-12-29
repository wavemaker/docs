---
title: i18n Agent
last_update: { author: "Author Name" }
---


## Overview

The **wm_i18n_agent** is responsible for internationalization and localization management within the AIRA system. Its role is to configure supported locales, manage translatable content, and ensure that locale-specific formats are applied consistently across the application.

This agent does not modify source code or application logic. It operates strictly at the configuration and message-management level to enable multilingual and region-aware behavior in a controlled manner.



## Role in AIRA Architecture

The i18n Agent operates as a specialized execution agent under the orchestration of the **wm_agent**.

It is invoked when a workflow requires adding or removing locales, translating user-facing text, or configuring locale-specific formats such as dates, times, and currencies. While the wm_agent coordinates execution and other agents handle UI or backend behavior, the i18n Agent manages localization concerns in isolation.

This agent does not infer language intent or auto-translate without confirmation.



## Core Responsibilities

### Locale Management

The i18n Agent manages application locales by adding, removing, or verifying supported languages and regions. Before making any change, it verifies the existing locale configuration to ensure consistency and avoid accidental removal of active locales.

Locale changes are explicit and intentional.

### Message Retrieval and Update

The agent retrieves translatable messages and manages their localized values. It updates message bundles only after translations have been reviewed and confirmed by the user.

No translation is persisted without confirmation.

### Format Configuration

The i18n Agent configures locale-specific formats for dates, times, and currencies. These configurations ensure that formatting aligns with regional expectations without altering business logic or data models.

Formatting changes are applied consistently across supported locales.

### Text Extraction and Binding

The agent extracts translatable text from supported HTML contexts and binds it to locale-aware message keys. This ensures that UI text responds correctly to locale changes without embedding hardcoded strings.

Extraction is limited to supported and static UI text only.



## Execution Scope

The i18n Agent operates strictly within the internationalization and localization layer of a WaveMaker application.

It is authorized to manage locale definitions, update translation messages, configure formatting rules, and bind locale-aware messages to UI text. Its scope does not include direct access to source code or project files.

Dynamic content and externally generated messages are outside its authority.



## Context Handling and Data Flow

The i18n Agent receives scoped localization instructions from the wm_agent, including target locales, messages to translate, and formatting requirements.

It produces updated locale configurations and translated message sets, which are returned to the wm_agent for coordination. If translations are incomplete, ambiguous, or unconfirmed, the agent pauses and requests clarification before saving any changes.

The agent never assumes translation correctness.



## Authority and Constraints

The i18n Agent operates under strict localization constraints.

It cannot access source code or project files directly. It cannot localize prefab-provided messages or dynamic API responses. Existing locales must always be verified before being added or removed.

All translations require explicit user confirmation before being persisted. No automatic or speculative translation is allowed.

These constraints ensure that localization changes remain accurate, reversible, and intentional.



## Execution Flow (High-Level)

At a high level, the i18n Agent is invoked to manage locales or translations. It verifies existing configuration, retrieves or prepares translatable content, confirms translations, and applies validated updates.

Once localization changes are complete, control returns to the wm_agent.



## Design Invariants

The following conditions are always true for the i18n Agent.

* Locales are verified before modification.
* Translations are confirmed before saving.
* Source code is never accessed directly.
* Prefab and dynamic content are not localized.
* Localization changes remain configuration-driven.

Violation of these invariants results in an invalid localization state.

