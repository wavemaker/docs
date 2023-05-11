---
title: "Connect to MySQL database using SSL"
id: "mysql-connection-using-ssl"
---
---

## Introduction

The document provides steps for connecting to a MySQL database using SSL in WaveMaker. MySQL supports both server and client authentication and to establish the connection few properties should be added to the JDBC URL.

## Prerequisites

- MySQL database with SSL enabled
- Truststore ( Required if server authentication is enabled)
- Client Keystore ( Required if client authentication is enabled)


## Steps to Connect to MySQL using SSL

1. Navigate to the Database section, import a database and before test connection click on advanced settings and edit the Connection(JDBC) URL as shown below.

[![](/learn/assets/advanced-settings.png)](/learn/assets/advanced-settings.png)

Below is the sample JDBC URL with SSL properties.

```
jdbc:mysql://host:3306/{dbname}?useUnicode=yes&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull&sslMode={sslMode}
&trustCertificateKeyStoreUrl={truststore}
&trustCertificateKeyStorePassword={truststore-password}
&clientCertificateKeyStoreUrl={client-keystore}
&clientCertificateKeyStorePassword={client-keystore-password}
```

#### Connect to PostgreSQL using SSL

If you want to connect to PostgreSQL database using SSL, follow the same steps specified for [MySQL](#steps-to-connect-to-mysql-using-ssl). Change the JDBC URL as mentioned below.


```url
jdbc:postgresql://host:3306/{dbname}?useUnicode=yes&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull&sslMode={sslMode}
&trustCertificateKeyStoreUrl={truststore}
&trustCertificateKeyStorePassword={truststore-password}
&clientCertificateKeyStoreUrl={client-keystore}
&sslfactory=org.postgresql.ssl.SingleCertValidatingFactory
&clientCertificateKeyStorePassword={client-keystore-password}
```

### SSL Mode

MySQL provides 5 options for configuring SSL as shown below

- **DISABLED**
    
Creates connection without SSL.

- **PREFERRED**

Tries to connect using SSL, if the database does not support SSL it connects with a regular connection.

- **REQUIRED**

Tries to connect using SSL, if the database does not support SSL connection is not established. Certificate Authority(CA) and hostname are not verified here.

- **VERIFY_CA**

Always connect with SSL. Verifies CA, but allows connection even if Hostname does not match.

- **VERIFY_IDENTITY**

Always connect with SSL. Verifies both CA and Hostname.

### Trust certificate KeyStore (Server authentication)

To verify the server certificate the connector needs to read the certificate. To achieve this create a custom trust store with the certificate.

- Upload the trust store file into `src/main/resources`.
- If the trust store is uploaded into the classpath prefix **classpath:** in the keystore url.
- If the trust store is in a system directory prefix **file:** in the keystore url.

**Example :** trustCertificateKeyStoreUrl=classpath:truststore.jks

If the trust store file is uploaded, the connector also requires a trust store  password. Add trustCertificateKeyStorePassword property along with the password to the JDBC URL.

### Client certificate KeyStore (Client authentication)

Client authentication requires a client key store using which server authenticates the client and verifies the certificate. To achieve this create a custom key store with the client certificate.

- Upload the key store file into src/main/resources.
- If the trust store is uploaded into the classpath prefix **classpath:** in the keystore url.
- If the trust store is in some system directory prefix **file:** in the keystore url.

**Example :** clientCertificateKeyStoreUrl=classpath:client-keystore.p12

If the key store file is uploaded, the connector also requires a key store  password. Add clientCertificateKeyStorePassword property along with the password to the JDBC URL.

If the database is already imported click on advanced settings in the database section and edit the JDBC URL and save the details.

:::note
The JDBC properties mentioned above are for MySQL version 8.0.30. If you are using a different version please refer to the MySQL documentation for the properties. 
Please refer [MySQL documentation](https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-using-ssl.html) to enable SSL, generate truststore and keystore.
:::