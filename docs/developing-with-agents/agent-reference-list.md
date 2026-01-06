---
title: AIRA Agents
last_update: { author: "Swetha Kundaram" }
---


| Agent Name            | Documentation                    | What this agent does (in plain terms)                                                                                                                         |
|-----------------------|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **wm_agent**          | [Planner Agent](/docs/developing-with-agents/aira-agents/wavemaker-agent)         | . Orchestrates the entire AIRA workflow—breaks requests into tasks, delegates to agents, manages sessions, and tracks execution without doing any actual work. |
| **wm_architect**      | [Architect Agent](/docs/developing-with-agents/aira-agents/architect-agent)   | Architect agent. Provides architectural guidance and documentation-backed advice. Helps decide *how* things should be built without executing or modifying anything. |
| **wm_ui_expert_prism**| [Prism UI Agent](/docs/developing-with-agents/aira-agents/prism-ui-expert-agent)    | Prism UI expert agent. Builds and updates WaveMaker UI using declarative Prism markup, bindings, and design tokens. Handles pages, partials, and UI structure only. |
| **wm_js_agent**       | [JavaScript-agent](/docs/developing-with-agents/aira-agents/javascript-agent)  | JavaScript agent. Adds WaveMaker-compliant JavaScript behavior to existing UI and variables. Attaches logic without changing structure or using unsupported patterns. |
| **wm_theme_agent**    | [Theme Agent](/docs/developing-with-agents/aira-agents/theme-agent)     | Theme agent. Manages global design tokens and theme variants (Material 3). Controls colors, typography, spacing, and light/dark overrides centrally. |
| **wm_java_agent**     | [Java Agent](/docs/developing-with-agents/aira-agents/java-agent)       | Java agent. Implements custom backend business logic using Java and Spring. Works only with user-defined code and never modifies generated services. |
| **wm_database_agent** | [Database Agent](/docs/developing-with-agents/aira-agents/database-agent)    | Database agent. Safely inspects databases and manages Query Services. Validates SQL and queries without changing schemas or making assumptions. |
| **wm_api_agent**      | [API Agent](/docs/developing-with-agents/aira-agents/api-agent)        | API agent. Imports and manages external API services (OpenAPI, Swagger, Postman). Handles lifecycle and authentication without binding or execution. |
| **wm_marketplace_agent** | [Marketplace Agent](/docs/developing-with-agents/aira-agents/marketplace-agent) | Marketplace agent. Discovers and installs WaveMaker Marketplace artifacts like prefabs and connectors after validating compatibility and user consent. |
| **wm_api_binding_agent** | [API Binding Agent](/docs/developing-with-agents/aira-agents/api-binding-agent) | API Binding agent. Autonomously binds UI widgets to APIs using a deterministic MCP workflow. No JavaScript, no heuristics, no manual shortcuts. |
| **wm_security_agent** | [Security Agent](/docs/developing-with-agents/aira-agents/security-agent)   | Security agent. Configures authentication, RBAC, endpoint access, and security protections in a validation-first, confirmation-driven manner. |
| **wm_i18n_agent**     | [i18n Agent](/docs/developing-with-agents/aira-agents/i18n-agent)      | i18n agent. Manages locales, translations, and regional formats. Handles localization safely without touching code or dynamic content. |
| **wm_vcs_agent**      | [VCS Agent](/docs/developing-with-agents/aira-agents/vcs-agent)        | VCS agent. Handles Git-based version control actions like status checks, branching, commits, and pushes with strong intent validation. |
| **wm_rescue_agent**   | [Rescue Agent](/docs/developing-with-agents/aira-agents/rescue-agent)      | Rescue agent. Diagnoses incidents using logs, identifies root causes, and coordinates safe remediation with rollback guidance and escalation paths. |



