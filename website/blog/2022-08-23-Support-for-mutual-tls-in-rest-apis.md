---
title: "Mutual TLS Support in REST APIs"
author: Praveen Chandra
---
---

TLS (Transport Layer Security) is an encryption protocol that encrypts all the information communicated between the client and the server. Mutual TLS is an additional configuration in which the server and client authenticate each other, and only then is the connection established. This blog explains in detail what MTLS (Mutual Transport Layer Security) is and why it is used.

:::note
WaveMaker supports MTLS from WaveMaker 11 GA onwards. For more information, see how to [Configure MTLS in WaveMaker application](/learn/how-tos/configure-mtls-in-wmapp).
:::

<!-- truncate -->

## Mutual TLS

Mutual TLS is a configuration in which the client authenticates the server first, and then the server authenticates the client as well. The SSL connection gets established if both client and server are authenticated successfully. 

![Mutual-TLS](/learn/assets/mutual-tls.png)

1. Client connects to the server to initiate an SSL connection.

2. Server presents its certificate to the client.

3. The client authenticates the server's certificate from its truststore and can verify the hostname (Optional).

4. Client presents its certificate to the server.

5. Server authenticates the client certificate.

6. Symmetric session keys are created, and an SSL connection gets established.

7. The client and server exchange information in a secure connection.

### Server Authentication

The server presents its certificate to the client, and the client authenticates it. The client authenticates the server's certificate using its truststore. TrustStore is used to store certificates from Certified Authorities (CA) that authenticate the certificate presented by the server in an SSL connection. If the server is using a self-signed certificate, then a custom truststore needs to be generated with the server's certificate, and you must configure it in the client. 

The client can then use this custom truststore to authenticate the server's certificate and proceed to further steps in initiating the SSL connection.

### Client Authentication

The client presents its certificate to the server, and the server authenticates it. The server authenticates the client using the Keystore configured using the client key and certificate. When the server authenticates the client, then it proceeds to the further steps in initiating the SSL connection. When the client authentication is enabled along with the server authentication, it indicates that the SSL connection is configured with mutual TLS.

## Why is Mutual TLS used?

Typically, TLS protocol only proves the server's identity to the client, but the server cannot authenticate the client. MTLS provides an additional layer of security in which the server should authenticate the client and prevent unauthorized access. 

## Configure Mutual TLS in a Webserver

MTLS is part of the TLS standard, and any web server that uses TLS to secure its connection should be capable of mutual authentication. In order to implement mutual authentication, the server needs to ask the client for its certificate specifically. Web servers are not configured to do this by default. For more information, see [tomcat documentation](https://tomcat.apache.org/tomcat-9.0-doc/ssl-howto.html) to configure MTLS.

## WaveMaker MTLS Support in REST APIs

WaveMaker now supports mutual TLS in REST APIs or imported APIs using Swagger by configuring a few properties in the application. See [Configure MTLS in WaveMaker application](/learn/how-tos/configure-mtls-in-wmapp) for more details.