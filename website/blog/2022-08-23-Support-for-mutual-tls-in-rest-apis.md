---
title: "WaveMaker support for Mutual TLS in REST API’s"
author: Praveen Chandra
---
---

TLS is an encryption protocol which encrypts all the information that is being communicated between the client and the server. Mutual TLS is an additional configuration in which the server and client authenticate each other and then only the connection is established. This blog explains in detail on what is MTLS and why is it used?

<!-- truncate -->

## Mutual TLS
Mutual TLS is a configuration in which the client authenticates the server and then the server also authenticates the client and if both are authenticated then only the SSL connection is established. 

![Mutual-TLS](/learn/assets/mutual-tls.png)

1. Client connects to the server to initiate a SSL connection.

2. Server presents it certificate to the client.

3. Client authenticates the server's certificate from its truststore and can also verify the hostname (Optional).

4. Client presents it certificate to the server.

5. Server authenticates the client certificate.

6. Symmetric session keys are created and SSL connection is established.

7. The client and server exchange information in a secured connection.

### Server Authentication

Server presents its certificate to the client and the client authenticates it. Client authenticates the server's certificate using its truststore. TrustStore is used to store certificates from Certified Authorities (CA) that authenticates the certificate presented by the server in an SSL connection. If the server is using a self signed certificate then a custom truststore needs to be generated with server's certificate and configure it in the client. 
The client then can use this custom truststore to authenticate the server's certificate and then proceed to further steps in initiating the SSL connection.

### Client Authentication

Client presents its certificate to the server and the server authenticates it. Server authenticates the client using the keystore configured using client key and certificate. When the server authenticates the client then it proceeds to the further steps in initiating the SSL connection. If the client authentication is also enabled along with the server authentication then it indicates that the SSL connection is configured with mutual TLS.

## Why Mutual TLS is used?

TLS protocol by default only proves the identity of the server to the client but the server cannot authenticate the client. MTLS provides an additional layer of security in which the server should authenticate the client and prevent unauthorized access. 

## Configure Mutual TLS in a webserver

MTLS is part of the TLS standard and any web server that uses TLS to secure its connection should be capable of mutual authentication. In order to implement mutual authentication, the server needs to specifically ask the client for its certificate. Web servers are not configured to do this by default.
Refer [tomcat documentation](https://tomcat.apache.org/tomcat-9.0-doc/ssl-howto.html) to configure MTLS.

## WaveMaker support for MTLS in REST API's

WaveMaker now supports mutual TLS in REST API's or imported API's using swagger by configuring few properties in the application. Refer to the how-to doc to [Configure MTLS in WaveMaker application](/learn/how-tos/configure-mtls-in-wmapp).