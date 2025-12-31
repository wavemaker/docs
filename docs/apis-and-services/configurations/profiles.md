---
last_update: { author: "Priyanka Bhadri" }
---

# Configuration Profiles

Configuration Profiles in WaveMaker allow you to define environment-specific settings for your application, such as database connections, API endpoints, and other external service configurations. This ensures that the same application can run seamlessly across multiple environments (development, testing, staging, production) without changing the codebase.

---




## Key Concepts

- **Profile**: A named set of configuration values that correspond to a specific environment.
- **Environment Variables**: Values like URLs, credentials, and file paths that vary between environments.
- **Externalizable Properties**: Application properties that can be parameterized in configuration profiles for easy switching between environments.

By using configuration profiles, developers can easily deploy the same application to different environments while maintaining consistent behavior.

---

## Application Profiles

Every WaveMaker application includes at least two default profiles:

- **Development** – used by the Studio Run option
- **Deployment** – used when deploying the application

You can also create custom profiles for specific environments (such as QA or Production). Deployment Profiles determine which configuration values are applied when the application is deployed.

<!-- To edit deployment profiles, open **Settings → Config Profiles** in WaveMaker Studio. -->

## Creating Configuration Profiles

1. In WaveMaker Studio, navigate to **Settings → Profile Configuration**.
2. Click **New Profile** to create a new environment profile.
3. Provide a **Name** and configure properties such as:
   - Database connection strings
   - API URLs
   - Authentication credentials
   - Any other environment-specific parameters
4. Save the profile. You can create multiple profiles for different environments (e.g., Development, QA, Production).

![alt text](assets/configuration-profiles-dialog.png)

---

## Configuration Profile Settings

The Profile combines configuration values from underlying services and allows you to modify them for the target environment.

### Database Settings

- **Records per request**: Limit the number of rows returned by any database variable; this also applies to REST API responses.
- **Connection pool size**: Configure minimum and maximum database connection counts.

### REST Services

Modify settings related to REST services, including protocol (HTTP/HTTPS), host name, and application base path.

### SOAP Services

Adjust connection timeouts and other settings for SOAP services.

### WebSocket Settings

Configure WebSocket behavior and connection parameters.

## Security and Access Control

Deployment Profiles allow you to configure multiple security-related settings to control access, protect data, and enforce secure communication across environments.

### SSL/TLS Encryption

Configure secure communication between clients and the application:

- Enable HTTPS to encrypt data in transit
- Enforce SSL to ensure all requests are served only over secure connections

### X-Frame-Options

Control whether application pages can be embedded within `<iframe>` elements:

- **Deny** – Prevents the application from being displayed in any iframe
- **Same Origin** – Allows embedding only from the same origin
- **Allow From** – Allows embedding from specified sources

> **Note**  
> The **Allow From** option is automatically converted to a **Content Security Policy (CSP)** header for broader browser compatibility.

### Session & Token Authentication

Configure session management and API token behavior:

- **Session Management**
  - Session timeout configuration
  - Persistent login options

- **Token-Based Authentication**
  - Enable API tokens
  - Choose whether tokens are passed via HTTP headers or request parameters
  - Configure token validity duration (default: **1800 seconds**)

> **Note**  
> Only the token validity duration can be modified through the deployment profile. The token parameter name cannot be changed.

### CORS (Cross-Origin Resource Sharing)

Control cross-domain access to application resources:

- **Allow Credentials** – Specify whether cookies or authorization headers are allowed
- **Max Age** – Define how long preflight (OPTIONS) responses are cached
- **Path** – Restrict CORS settings to specific resource paths
- **Origins** – Specify the domains permitted to access application resources




### App Environment Properties

App Environment settings allow you to externalize custom application properties that may differ between environments. In the deployment profile, you can update existing property values but cannot add or delete properties.

### OAuth 2.0 Provider Settings

Deployment Profiles allow you to configure OAuth 2.0 provider details such as:

- Access Token URL
- Authorization URL
- Client ID
- Client Secret

For detailed information on setting up OAuth providers and managing profile-specific configurations, refer to the [Providers](../security/providers.md)

### Build Options

Build options are part of the deployment profile and determine how the application is packaged for deployment. Options include:

- **Angular Build** – Modern optimized build
- **WaveMaker Build** – Classic build process (deprecated)

These options affect bundling, optimization, and performance characteristics of the deployed app. For more details on build configurations and their impact on deployment, refer to the [Build Options](../../build-and-deploy/build/web/build-options.md).

## Using Configuration Profiles

- When deploying an application, you can select a specific profile to inject its values into the runtime environment.
- All externalizable properties referenced in the application will automatically pick up the values from the selected profile.
- This eliminates the need to modify the application code or rebuild the project for different environments.

---

## Summary

- **Consistency**: Ensures that the same application behaves consistently across environments.
- **Flexibility**: Easily switch between different environments without manual code changes.
- **Simplified Deployment**: Reduces deployment errors by centralizing environment-specific configurations.
- **Reusability**: Profiles can be reused across multiple applications within the same WaveMaker workspace.

This approach streamlines application deployment and environment management.

---

<!-- ## Example Use Case

Suppose your application interacts with a REST API and a database. Instead of hardcoding URLs or credentials:

- Create a **Development** profile with a local database and a test API endpoint.
- Create a **Production** profile with the live database and production API endpoint.
- When deploying, simply select the appropriate profile, and all services in your application will automatically connect to the correct endpoints. -->


