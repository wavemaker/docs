---
title: "Configure MTLS in WaveMaker application"
id: "configure-mtls-in-wmapp"
---
---

WaveMaker supports importing REST API as a service which can be used to bind it to a widget in the UI. When the REST API is hit in the design time or runtime, a SSL connection is established between the client and server where the communication takes place in which the sensitive information is encrypted.
The SSL connection can also be configured to enable server and client authentication which is mutual TLS. This can now be achieved in WaveMaker.

MTLS configuration is done at the application level, so it applies to all the rest services imported, new rest services that are yet to be imported and the API’s that are imported using swagger. MTLS configuration applies only to the REST API’s with proxy enabled as the backend receives the request only when proxy is enabled.

### Server Authentication

The properties to configure server authentication as shown below can be found in the profile properties.

```
security.general.truststore.config=SYSTEM_ONLY
security.general.truststore.file=
security.general.truststore.fileType=
security.general.truststore.password=
```

#### Truststore Configuration

- **SYSTEM_ONLY** 

    Default java trust store is used. Does not require any additional truststore file.
- **APPLICATION_ONLY**

    The custom truststore is used. It requires a trust store file, file type and password of the truststore. If the truststore is in the classpath prefix **classpath:** or if it is in a system file directory prefix **file:** 
- **APPLICATION_AND_SYSTEM**

    Both custom and default java truststore are used here.
- **NO_CHECK**

    There is no server authentication enabled here.

If truststore configuration is set as NO_CHECK or SYSTEM_ONLY truststore file is not required. If truststore configuration is set as APPLICATION_ONLY or APPLICATION_AND_SYSTEM then it requires the truststore file, file type and truststore password.

### Client Authentication

The properties to configure client authentication as shown below can be found in the profile properties.

```
security.general.mtls.enabled=false
security.general.mtls.keystore.file=
security.general.mtls.keystore.fileType=
security.general.mtls.keystore.password=
```

If mtls enabled is false then the client authentication is disabled. If it is true then it requires the keystore file, file type and keystore password.

The truststore or keystore can be uploaded into the src/main/resources directory using the import resource option as shown below.

![Import-Resource](/learn/assets/import-resource.png)

:::note
If the keystore or truststore is in the classpath prefix **classpath:** or if it is in a system file directory prefix **file:** to the file property as shown below 
```
security.general.truststore.file=classpath:truststore.jks
security.general.truststore.fileType=JKS
security.general.mtls.keystore.file=classpath:keystore.p12
security.general.mtls.keystore.fileType=PKCS12
```
In both keystore and truststore file types can be JKS, PKCS12 etc or any other supported file types.
:::

## Hostname Verification

Hostname verification matches the hostname that client is trying to connect and the hostname that is present in the certificate provided by the server.
The SSL connection is established only if the hostname matches. By default hostname verification is true and can be disabled in the profile properties.

Below is the property to configure hostname verification.
```
security.general.client.ssl.hostNameVerification.enabled=true
```