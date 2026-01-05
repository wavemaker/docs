---
title: Marketplace Agent
last_update: { author: "Author Name" }
---

The Marketplace Agent discovers and installs reusable artifacts from the WaveMaker Marketplace. Its job is to safely bring external, prebuilt components into a project without breaking it.

The agent does not configure, customize, or refactor anything it installs. It only handles discovery, validation, and installation.

All changes flow through Studio APIs, consistent with other WaveMaker agents.

## Role in AIRA Architecture

The Marketplace Agent is a specialized execution agent. It runs under the orchestration of the `wm_agent`.

The `wm_agent` decides *when* a marketplace artifact is needed. The Marketplace Agent handles *how* that artifact is safely acquired. Once installation completes, control returns to the `wm_agent`. Other agents then bind, configure, or extend the installed artifact.

The Marketplace Agent never decides usage or behavior.

## How It Works  

The agent operates between the marketplace, Studio APIs, and GitHub.

- User Intent → wm_agent → Marketplace Agent
- Marketplace Agent → Studio APIs → Application
- GitHub → Artifact Versions → Marketplace Agent


GitHub remains the source of truth for artifact source and versions.  
The agent only installs approved, versioned artifacts.

## Supported Artifacts
  
The agent installs only supported artifact types.

- These include prefabs, connectors, and WMX components.  
- WMX components apply only to React Native projects.  
- Themes are explicitly excluded.

Unsupported artifact types are never installed.

## Core Responsibilities  

### Marketplace Discovery  

The agent searches and filters marketplace artifacts based on user intent and project context. Discovery is read-only and has no side effects.

If multiple artifacts match the request, the agent surfaces options. No installation happens during discovery.

### Artifact Installation

Installation occurs only after explicit confirmation. The agent installs the selected artifact through Studio APIs. The agent never installs artifacts automatically or speculatively.

### Compatibility Validation  

Before installation, the agent validates compatibility. Validation checks include project type, platform, and supported environment. If compatibility cannot be confirmed, installation stops.

This step prevents build-time and runtime failures.

## Execution Scope  

The Marketplace Agent operates only at the acquisition layer.

- It can browse marketplace listings, fetch metadata, validate compatibility, and install supported artifacts.  
- It cannot configure artifacts, modify application logic, or manage themes.

Anything beyond installation is handled by other agents.

## Context Handling and Data Flow  

The agent receives scoped instructions from the `wm_agent`. These instructions include artifact intent, project context, and install confirmation. The agent returns installation results and artifact references. If intent is unclear or compatibility cannot be determined, the agent pauses and requests clarification.

## Authority and Constraints  

The agent operates under strict constraints.

- It installs only supported artifact types.  
- Every installation requires explicit confirmation.  
- Compatibility validation is mandatory.

The agent does not infer suitability, bypass validation, or perform speculative installs.

These constraints are intentional and enforced.

## Execution Flow  

At a high level, the flow is linear and controlled.

1. The `wm_agent` identifies a need for a marketplace artifact.  
2. The Marketplace Agent discovers matching artifacts.  
3. Compatibility is validated against the project context.  
4. Explicit confirmation is obtained.  
5. The artifact is installed via Studio APIs.  
6. Control returns to the `wm_agent`.

The agent does not participate after installation.

## Non-Negotiable Rules

The following conditions are always true.

- Artifacts install only after explicit confirmation.  
- Compatibility is validated before installation.  
- Only supported artifact types are installed.  
- Discovery never causes side effects.  
- Installation is isolated from configuration and usage.

Breaking any invariant results in an unsafe state.
