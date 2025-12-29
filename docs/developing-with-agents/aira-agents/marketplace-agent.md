---
title: Marketplace Agent
last_update: { author: "Author Name" }
---

## Overview

The **wm_marketplace_agent** is responsible for discovering and installing artifacts from the WaveMaker Marketplace. Its role is to safely introduce external, prebuilt components into a project while ensuring compatibility and avoiding unsupported or destructive changes.

This agent does not configure, customize, or refactor installed artifacts. It focuses strictly on discovery, validation, and installation.



## Role in AIRA Architecture

The Marketplace Agent operates as a specialized execution agent under the orchestration of the **wm_agent**.

It is invoked when a workflow requires reusable functionality that already exists in the WaveMaker Marketplace, such as prefabs, connectors, or WMX components. While the wm_agent coordinates execution and other agents integrate or bind installed artifacts, the Marketplace Agent handles the acquisition step.

This agent does not decide *how* an artifact is used. It only ensures that the correct artifact is installed safely.



## Core Responsibilities

### Marketplace Discovery and Search

The Marketplace Agent browses, searches, and filters WaveMaker Marketplace artifacts based on user intent and project context. It helps identify suitable artifacts and resolves ambiguity when multiple artifacts appear to match a request.

Artifact selection is explicit and deliberate. No installation occurs as a side effect of discovery.

### Artifact Installation

The agent installs supported marketplace artifacts into the project. This includes prefabs, connectors, and WMX components, with WMX components being applicable only to React Native projects.

Installation is performed only after compatibility has been validated and explicit confirmation has been obtained.

### Compatibility Validation

Before installation, the Marketplace Agent validates that the selected artifact is compatible with the current project type, platform, and environment. If compatibility cannot be confirmed, installation does not proceed.

This validation step protects the project from runtime or build-time failures.



## Execution Scope

The Marketplace Agent operates strictly within the marketplace discovery and installation layer.

It is authorized to browse marketplace listings, retrieve artifact metadata, validate compatibility, and install supported artifact types. Its scope does not include configuring artifacts, modifying application logic, or managing themes.

Unsupported artifact types are never installed.



## Context Handling and Data Flow

The Marketplace Agent receives scoped instructions from the wm_agent, including artifact intent, project context, and confirmation to install.

It produces installation results and artifact references that are passed back to the wm_agent. Downstream agents may then configure or bind the installed artifacts as needed.

If artifact intent is ambiguous or compatibility is unclear, the agent pauses and requests clarification.



## Authority and Constraints

The Marketplace Agent operates under strict installation constraints.

It cannot install themes or unsupported artifact types. Every installation requires explicit user confirmation, and compatibility must be validated before any artifact is added to the project.

The agent does not bypass validation, infer suitability, or install artifacts speculatively.

These constraints ensure that marketplace usage remains safe, intentional, and reversible.



## Execution Flow (High-Level)

At a high level, the Marketplace Agent is invoked to locate and install a marketplace artifact. It identifies suitable options, validates compatibility, confirms intent, and performs installation. Once complete, control returns to the wm_agent.

The agent does not participate in post-install configuration or usage.



## Design Invariants

The following conditions are always true for the Marketplace Agent.

* Artifacts are installed only after explicit confirmation.
* Compatibility is validated before installation.
* Only supported artifact types are installed.
* Marketplace discovery does not trigger side effects.
* Installation is isolated from configuration and usage.

Violation of these invariants results in an unsafe installation state.