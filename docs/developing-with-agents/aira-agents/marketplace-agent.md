---
title: Marketplace Agent
sidebar_label: Marketplace Agent
last_update: { author: 'Vivek Raj' }
---

# Marketplace Agent


The **Marketplace Agent** enables developers to discover and install reusable artifacts from the [WaveMaker Marketplace](https://marketplace.wavemaker.com/) directly into their application projects. It functions as a controlled integration layer between the centralized artifact repository and project codebase.

Reusing artifacts helps teams build faster, maintain consistency, and rely on well-tested components. The agent automates the discovery-to-installation workflow while enforcing compatibility checks, version validation, and explicit developer approval. Its scope is limited to artifact acquisition only; configuration, binding, and runtime usage are handled separately.

All installation operations flow through Platform MCPs, maintaining consistency with WaveMaker platform behavior and ensuring proper audit trails.

---

## What is a Marketplace Artifact?

**Marketplace artifacts** are versioned, reusable components published to the WaveMaker Marketplace. These artifacts encapsulate proven functionality that developers incorporate into projects without rebuilding from scratch.

Artifacts can be Prefabs (UI components), Connectors (backend integrations), WMX Components (Light weight React Native components), and Design Systems (design tokens).

Each artifact includes:

- **Metadata** – Describes capabilities, dependencies, and usage requirements
- **Version information** – Follows semantic versioning (`MAJOR.MINOR.PATCH`)
- **Installation package** – Pre-built archive for direct installation
- **Source code** – Hosted on GitHub for reference and contribution

The Marketplace API provides discovery and installation metadata. GitHub hosts the source code and build artifacts.

---

## Role in AIRA Architecture

The Marketplace Agent operates as a **specialized execution agent** within the AIRA orchestration framework. It runs under the coordination of the WaveMaker Agent (`wm_agent`), which handles high-level intent resolution and agent delegation.

**Responsibility boundaries:**

- **WaveMaker Agent** – Determines _when_ a marketplace artifact is needed based on user intent and project context
- **Marketplace Agent** – Handles _how_ that artifact is safely acquired and installed
- **Other agents** – Configure, bind, and utilize the installed artifact post-installation

The Marketplace Agent never decides usage patterns or application behavior. Upon completing installation, control returns to `wm_agent` for downstream orchestration.

---

## Supported Artifact Types

The Marketplace Agent handles four categories of artifacts, each serving distinct purposes within the WaveMaker ecosystem.

**Prefabs** – Reusable UI components that encapsulate markup, styles, scripts, and data bindings. Supported in Web and Mobile projects. Prefabs abstract full UI workflow along with API integration(if needed) into portable, drag-and-drop components.

**Connectors** – Spring-based Java modules for external system integration. Supported in all WaveMaker projects. Connectors expose external services such as Twilio, AWS, Stripe.. as injectable Spring beans, requiring configuration through externalizable properties.

```java
@Autowired
private TwilioConnector twilioConnector;
```

**WMX Components** – React Native components for mobile applications. Supported only in React Native projects. WMX components integrate directly into the React Native rendering pipeline as npm packages.

**Design Systems** – Design token packages containing foundational styling definitions. Supported in all WaveMaker projects. Design systems ensure visual consistency through typography, color palettes, and spacing scales.

---

## How the Agent Works with MCP

The Marketplace Agent communicates with the **WaveMaker Marketplace** through the **Model Context Protocol (MCP)**. MCP enables structured, bidirectional communication between the agent and marketplace services.

The agent uses MCP tools to:

- **Discover artifacts** – Retrieve the complete marketplace catalog or filter by artifact type
- **Fetch metadata** – Get detailed information about specific artifacts including installation URLs
- **Trigger installations** – Execute artifact installation via Platform APIs
- **Query installed artifacts** – List what's already installed in the current project

The MCP server handles API authentication, response normalization, and error translation, allowing the agent to focus on validation and orchestration logic.

---

## Core Responsibilities

### Marketplace Discovery

The agent searches and filters marketplace artifacts based on user intent and project context. Discovery is read-only and has no side effects.

If multiple artifacts match the request, the agent surfaces options. No installation happens during discovery.

**Disambiguation behavior:**

- Presents matching artifacts grouped by type
- Displays compatibility status for each option against current project
- Shows download counts, descriptions, and artifact IDs
- Waits for explicit user selection before proceeding

### Artifact Installation

Installation occurs only after explicit confirmation. The agent installs the selected artifact through Platform APIs. The agent never installs artifacts automatically or speculatively.

**Installation flow:**

1. Agent connects to Marketplace MCP for artifact details
2. Marketplace MCP returns metadata including artifact distribution download URL
3. Agent downloads the artifact package
4. Agent uploads package to appropriate Studio import endpoint
5. Studio processes and integrates artifact into project structure

### Compatibility Validation

Before installation, the agent validates compatibility. Validation checks include project type, platform, and supported environment. If compatibility cannot be confirmed, installation stops.

**Validation failure handling:**

When validation fails:

1. Installation halts immediately—no partial installs occur
2. Specific failure reason is reported to the user
3. Project structure remains unmodified

This fail-fast approach prevents build-time and runtime failures.

---

## Execution Scope

The Marketplace Agent operates exclusively at the acquisition layer.

**Within scope:**

- Browse marketplace listings
- Fetch artifact metadata
- Validate compatibility constraints
- Request installation confirmation
- Execute installation via Studio APIs
- Report installation results

**Outside scope:**

- Configure installed artifacts
- Modify application logic
- Make behavioral decisions about artifact usage
- Perform speculative or automatic installs

Anything beyond acquisition falls to other agents in the orchestration chain.

---

## Context Handling

The agent receives scoped instructions from `wm_agent` containing:

- **Artifact intent** – What the user wants to accomplish
- **Project context** – Project type, platform, installed dependencies
- **Confirmation state** – Whether user has approved installation

The agent returns:

- **Installation results** – Success/failure status with details
- **Artifact references** – Identifiers for installed components
- **Clarification requests** – When intent is ambiguous or compatibility unclear

If the agent cannot determine intent or compatibility with confidence, it pauses and requests clarification rather than proceeding speculatively.

---

## Execution Flow

At a high level, the flow is linear and controlled.

1. The `wm_agent` identifies a need for a marketplace artifact
2. The Marketplace Agent discovers matching artifacts via MCP tools
3. Compatibility is validated against the project context
4. Explicit confirmation is obtained from the user
5. The artifact is installed via Studio APIs
6. Control returns to the `wm_agent`

The agent does not participate after installation completes.

---

## Related Documentation

- [Prefabs (Web)](#) – Creating and using reusable UI components for web
- [Prefabs (Mobile)](../../user-interfaces/mobile/enterprise-capabilities/prefabs) – Creating and using reusable UI components for mobile
- [Connectors Architecture](../../apis-and-services/connectors/architecture) – Understanding connector structure and integration
- [Building Connectors](../../apis-and-services/connectors/build-a-connector) – Creating custom external service integrations
- [Design Tokens](../../design-system/concepts/design-token-architecture) – Design system fundamentals and styling consistency
- [WMX Agent](./wmx-agent) – WMX component management and React Native integration
- [WaveMaker Agent](./wavemaker-agent) – Main orchestration agent and intent resolution
