---
last_update: { author: "Priyanka Bhadri" }
---
# Profile Settings

A **Configuration Profile** brings together configuration values from various services and provides flexibility to customize application behavior based on the target environment, such as development, QA, or production.

---

## Database Configuration

This section allows you to configure the database datasource and manage connection behavior for the selected  profile. For demonstration purposes, we are using the sample HRDB database as a reference

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

This section allows you to configure how the application connects to REST endpoints and WebSockets by specifying the protocol, host, and application path. These settings define the base URLs used for all REST service and WebSocket calls within the selected deployment profile, ensuring consistent communication between the application and external services. 


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

Secure your application with configurable settings to protect data, manage access, and enforce safe communication across environments.

---

### SSL/TLS Encryption

Ensure all client-server communication is secure:

- **HTTPS**: Encrypt data in transit.
- **SSL Enforcement**: Serve all requests over secure connections only.

---

### X-Frame-Options

Control how your app can be embedded in `<iframe>` elements:

- **Deny** – Block all iframe embedding.
- **Same Origin** – Allow embedding only from the same origin.
- **Allow From** – Permit embedding from specific sources (converted automatically to CSP for browser compatibility).

---

<!-- ### Session and Token Management -->

### Session Management
- Configure **session timeout** (e.g., 30 minutes).  
- Enable **persistent login** (“Remember Me”) and set duration (e.g., 15 days).  
- Choose **session persistence type** (e.g., in-memory).

### Token-Based Authentication
- Enable **API tokens** for secure requests.  
- Token parameter name: **WM_AUTH_TOKEN**.  
- Configure **token validity** (default: 30 minutes).  

> **Note:** Only token validity can be modified; the token name is fixed.

---

### CORS (Cross-Origin Resource Sharing)

Control access to resources from different origins:

- Enable or disable CORS.  
- Specify **allowed hosts/origins**.  
- Enable **credentials** (cookies or authorization headers).  
- Configure **preflight cache duration (Max Age)**.  
- Restrict rules to specific **paths**.

---

### Truststore and Mutual TLS (mTLS)

Secure SSL connections and enable client authentication:

- **Truststore Type** – System (default Java truststore) or custom.  
- **Mutual TLS (mTLS)** – Enable client certificate-based authentication.  
- **Hostname Verification** – Verify the server’s hostname for trusted connections.


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
For more information, see [Providers](#).

---

## Build Options

Build options determine how the application is packaged during deployment:

- **Angular Build** – Modern, optimized build process (recommended)
- **WaveMaker Build** – Legacy build process (deprecated)

These options affect application bundling, optimization, and performance. For more details, see [Build Options](../../build-and-deploy/build/web/build-options.md).

---

## Application Configuration

This provides the deployment properties file, illustrating how it is generated and containing all application, database, REST API, security, and WebSocket configurations based on the provided settings. It serves as a complete reference to understand how various configurations are applied during deployment and how they affect the behavior of the application across different environments.

<details>
<summary>View Full Deployment Properties</summary>

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