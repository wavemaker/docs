---
title: "Configure MTLS in WaveMaker Application"
id: "configure-mtls-in-wmapp"
sidebar_label: "Configuring MTLS"
---
---

WaveMaker supports importing [REST API](/learn/app-development/services/web-services/rest-services) as a Service which you can bind it to a widget in the UI (User Interface). When the REST API is hit in the design time or runtime, an SSL (Secure Sockets Layer) connection is established between the client and server. When this communication takes place, the sensitive information is encrypted.

You can also configure the SSL connection to enable server and client authentication, which is Mutual TLS. You can achieve this in WaveMaker applications now.

MTLS (Mutual Transport Layer Security) configuration can be done at the application level. Therefore, it applies to all the Rest Services that are imported and yet to be imported. Also, it applies to the APIs that you have imported using Swagger. 

:::note
MTLS configuration applies only to the REST APIs with proxy enabled, as the backend receives the request only when the proxy is enabled.
:::

## Server Authentication

You can find the properties to configure server authentication as shown below in the Profile properties.

```
security.general.truststore.config=SYSTEM_ONLY
security.general.truststore.file=
security.general.truststore.fileType=
security.general.truststore.password=
```
## Truststore Configuration

### SYSTEM_ONLY

Default java trust store is used. It does not require any additional Truststore file.

### APPLICATION_ONLY

The custom Truststore is used. It requires a trust store file, file type, and password of the Truststore. If the Truststore is in the classpath prefix **classpath:** or if it is in a system file directory prefix **file:** 

### APPLICATION_AND_SYSTEM

Both custom and default Java Truststore are used here.

### NO_CHECK

There is no server authentication enabled here.

If Truststore configuration is set as `NO_CHECK` or `SYSTEM_ONLY`, the truststore file is not required. If the truststore configuration is set as `APPLICATION_ONLY` or `APPLICATION_AND_SYSTEM`, then it requires the truststore file, the file type, and truststore password.

## Client Authentication

The properties to configure client authentication can be found in the **Profile** properties, as shown below.

```
security.general.mtls.enabled=false
security.general.mtls.keystore.file=
security.general.mtls.keystore.fileType=
security.general.mtls.keystore.password=
```

If MTLS enabled is false, the client authentication is disabled. If it is true, it requires the Keystore file, file type, and Keystore password.

The Truststore or Keystore can be uploaded into the `src/main/resources` directory using the import resource option, as shown below.

![Import-Resource](/learn/assets/import-resource.png)

:::note
If the Keystore or Truststore is in the classpath prefix **classpath:** or if it is in a system file directory prefix **file:** to the file property as shown below:

```
security.general.truststore.file=classpath:truststore.jks
security.general.truststore.fileType=JKS
security.general.mtls.keystore.file=classpath:keystore.p12
security.general.mtls.keystore.fileType=PKCS12
```
Both Keystore and Truststore file types can be JKS, PKCS12, or any other supported file types.
:::

## Hostname Verification

Hostname verification matches the hostname that the client is trying to connect to and the hostname that is present in the certificate provided by the server.
The SSL connection is established only if the hostname matches. By default, hostname verification is true and can be disabled in the profile properties.

Below is the property to configure hostname verification.

```
security.general.client.ssl.hostNameVerification.enabled=true
```