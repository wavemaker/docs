---
last_update: { author: "Priyanka Bhadri" }
---
# Profile Settings

A Configuration Profile acts as a centralized mechanism to aggregate configuration values from multiple services and system components within a WaveMaker application. It brings together settings related to the application, databases, REST APIs, security, and other integrations into a single, logical profile.

Configuration Profiles enable environment-specific customization of application behavior. By defining separate profiles for environments such as Development, QA, and Production, the same application codebase can be deployed across different environments with varying configurations, without requiring code changes.

Each profile resolves its values from the base application properties and environment-specific deployment properties, ensuring consistency while allowing overrides where necessary. This approach simplifies configuration management, reduces deployment errors, and provides greater control over how the application behaves in different runtime environments.

---

## Database Configuration

This section provides an overview on configuring the database datasource and control connection behavior for a selected configuration profile. It defines how the application connects to the database, manages connection pooling, and limits the amount of data returned per request.

For demonstration purposes, the sample HRDB database is used as a reference. The same configuration approach applies to any other supported database.

The settings below allow you to:



 - Specify database connection details such as the JDBC URL and credentials.

 - Control connection pooling to optimize performance and resource usage.

 - Limit the number of records returned per database query or REST API response.

<!-- - **Records per request** – Defines the maximum number of rows returned by any database variable. This limit also applies to REST API responses.
- **Connection pool size** – Specifies the minimum and maximum number of database connections maintained by the application. -->
<!--  -->
<!-- ### Datasource Configuration -->

| Setting | Description | Example / Value |
|-------|-------------|-----------------|
| Datasource Managed By | Determines how the datasource is managed | WaveMaker / JNDI |
| Connection URL | JDBC URL used to connect to the database | `jdbc:hsqldb:file:{WebAppRoot}/WEB-INF/data/hrdb` |
| Username | Database user for authentication | `sa` |
| Password | Password for the database user | `********` |
| Default Schema Name | Default schema used for queries | `PUBLIC` |
| Minimum Pool Size | Minimum number of active connections | `2` |
| Maximum Pool Size | Maximum number of active connections | `4` |
| Records per request | Maximum rows returned per database query and REST response | `100` |



---

## REST Service and WebSocket Configuration

This section provides an overview of how the application connects to REST services and WebSocket endpoints for a selected deployment profile. It defines the base URL components—such as protocol, host, and application path—that are used to construct all REST API and WebSocket requests.

By centralizing these settings, you can ensure consistent communication with backend services and easily switch between different environments ( development, staging, or production) without changing application code.

| Setting | Value |
|--------|-------|
| Service Name | `wavemakeronline` |
| Protocol | `https` |
| Host | `cloud.wavemakeronline.com` |
| Application Path | `/pk9yct3s6nqt/MyApp/services` |

**Base URL**

```text
https://cloud.wavemakeronline.com/pk9yct3s6nqt/MyApp/services
```

Updating these values allows you to switch REST endpoints across environments without modifying application code.


---

<!-- 
## WebSocket Settings

Define WebSocket behavior, including connection parameters and runtime characteristics.

--- -->

## Security and Access Control

This section allows you to secure your application by configuring settings that protect sensitive data, control user access, and enforce safe communication across environments. These controls help ensure that application interactions remain authenticated, encrypted, and compliant with security best practices.


### SSL/TLS Encryption

Use SSL/TLS settings to secure communication between the client and server.

- **HTTPS**  
  Encrypts all data transmitted between users and the application, preventing interception and tampering.

- **SSL Enforcement**  
  Ensures that all incoming requests are served only over secure HTTPS connections.


### X-Frame-Options

Controls whether the application can be embedded inside `<iframe>` elements, helping protect against clickjacking attacks.

- **Deny**  
  Prevents the application from being embedded in any iframe.

- **Same Origin**  
  Allows embedding only when the request originates from the same domain.

- **Allow From**  
  Allows embedding from specified sources. For browser compatibility, this is automatically converted into Content Security Policy (CSP) rules.



### Session Management

Configure how user sessions are created, maintained, and expired.

- Define **Session Timeout** to automatically log users out after inactivity (for example, 30 minutes).
- Enable **Persistent Login ("Remember Me")** to allow users to remain logged in for a configured duration (for example, 15 days).
- Select **Session Persistence Type**, such as in-memory storage, to determine how session data is maintained.



### Token-Based Authentication

Enable token-based authentication for secure API access.

- Supports **API Tokens** for validating client requests.
- The token parameter name is fixed as **WM_AUTH_TOKEN**.
- Configure **Token Validity** to control how long a token remains active (default: 30 minutes).

> **Note:** Only the token validity duration can be modified. The token parameter name remains constant.



### CORS (Cross-Origin Resource Sharing)

Controls how resources are accessed from different domains or origins.

- Enable or disable CORS support.
- Specify **Allowed Origins/Hosts** to restrict access.
- Enable **Credentials Support** to allow cookies and authorization headers.
- Configure **Preflight Cache Duration (Max Age)** to reduce repeated validation requests.
- Restrict CORS rules to specific application paths if required.


### Truststore and Mutual TLS (mTLS)

Configure trust and certificate-based authentication for secure SSL communication.

- **Truststore Type**  
  Choose between the default system (Java truststore) or a custom truststore.

- **Mutual TLS (mTLS)**  
  Enables two-way SSL authentication where both client and server verify each other using certificates.

- **Hostname Verification**  
  Validates the server hostname to prevent spoofing and ensure trusted connections.

---



## App Environment Properties

App Environment Properties allow you to externalize custom application settings that can vary across environments. Within a deployment profile, you can update the values of existing properties, but you cannot add or remove properties.


| Key | Value |
|-----|-------|
| *Property Key* | *Property Value* |

---



## OAuth 2.0 Provider Settings

OAuth 2.0 provider details can be configured to secure API requests.

- **Access Token URL**: Endpoint to request an access token.
- **Authorization URL**: Endpoint where users log in and authorize your app.
- **Client ID**: Unique identifier for your application.
- **Client Secret**: Confidential key to authenticate your app.
- **Scopes (optional)**: Permissions requested by your app.
- **Redirect URI**: URL where the provider sends the authorization code.

These settings can be configured per environment (development, staging, production) to ensure secure authentication.


---

## Build Options

Build options determine how the application is packaged during deployment:

- **Angular Build** – Modern, optimized build process (recommended)
- **WaveMaker Build** – Legacy build process (deprecated)

These options affect application bundling, optimization, and performance. For more details, see [Build Options](../../build-and-deploy/build/web/build-options.md).

---

## Application Configuration

All common configuration values are defined in `configurable.properties`. This file acts as the central source of truth for the application and includes configurations related to the application setup, database connections, REST API integrations, security settings, and WebSocket configurations.

Environment-specific values are defined separately under the deployment directory, for example in `deployment/development.properties`. These files override or extend the base properties defined in `configurable.properties` to tailor the application behavior for a specific environment such as Development, QA, or Production.

The generated properties file serves as a complete reference that reflects all configured settings. It provides visibility into how application-level and environment-specific configurations are applied during deployment and how they influence the runtime behavior of the application across different environments.

<details>
<summary>View Full App Properties</summary>

```properties
# Application URLs
app.apiUrl=
app.cdnUrl=

# UI Build Configuration
app.build.ui.mode=${build.ui.mode}
app.build.ui.ng.config=${build.ui.ng.config}
app.build.ui.spa.enabled=true
build.ui.mode=wm
build.ui.ng.config=--c=production
build.ui.node.args=--max-old-space-size=1024

# Prefabs & Proxy
app.prefabs.lazyInit=true
app.proxy.enabled=false
app.proxy.host=
app.proxy.port=
app.proxy.username=
app.proxy.password=
app.proxy.urls.include=
app.proxy.urls.exclude=

# Web Compression
app.web.compression.enabled=true
app.web.compression.minsize=65536
app.web.compression.mimetypes.includePatterns=*/*
app.web.compression.mimetypes.excludePatterns=image/*

# Database Configuration (hrdb)
db.hrdb.dataSourceType=WM_MANAGED_DATASOURCE
db.hrdb.driverClass=org.hsqldb.jdbcDriver
db.hrdb.url=jdbc:hsqldb:file:{WebAppRoot}/WEB-INF/data/hrdb;shutdown=true;ifexists=true;hsqldb.lock_file=false;
db.hrdb.username=sa
db.hrdb.password=********
db.hrdb.schemaName=PUBLIC
db.hrdb.hbm2ddl=none
db.hrdb.minPoolSize=2
db.hrdb.maxPoolSize=4
db.hrdb.maxPageSize=100
db.hrdb.transactionTimeout=30
db.hrdb.jndiName=

# REST Service Configuration
rest.wavemakeronline.scheme=https
rest.wavemakeronline.host=https://cloud.wavemakeronline.com
rest.wavemakeronline.basepath=/pk9yct3s6nqt/MyApp/services

# Security Configuration
security.enabled=true
security.activeProviders=DATABASE


# CORS Settings
security.general.cors.enabled=false
security.general.cors.allowCredentials=false
security.general.cors.maxAge=1600
security.general.cors.pathEntries.root.allowedOrigins=*


# Content Security Policy (CSP)
security.general.csp.enabled=false
security.general.csp.policy=


# Frame Options
security.general.frameOptions.enabled=true
security.general.frameOptions.mode=SAMEORIGIN
security.general.frameOptions.allowFromUrl=


# SSL/TLS
security.general.ssl.enabled=false
security.general.ssl.port=443


# Mutual TLS (mTLS)
security.general.mtls.enabled=false
security.general.truststore.config=SYSTEM_ONLY


# XSS Protection
security.general.xss.enabled=true
security.general.xss.sanitizationLayer=OUTPUT
security.general.xss.dataBackwardCompatibility=false


# XSRF Protection
security.general.xsrf.enabled=true


# Session Configuration
security.general.session.timeout=30
security.session.persistence.type=in-memory

# Remember Me
security.general.rememberMe.enabled=true
security.general.rememberMe.timeOut=1296000


# Token-Based Authentication
security.general.tokenService.enabled=true
security.general.tokenService.parameter=WM_AUTH_TOKEN
security.general.tokenService.tokenValiditySeconds=1800

# WebSocket Configuration
websocket.websocket.basepath=
websocket.websocket.host=echo.websocket.org
websocket.websocket.scheme=wss
```

</details>