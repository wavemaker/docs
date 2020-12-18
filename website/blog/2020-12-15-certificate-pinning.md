---
title: "Certificate Pinning Case Study"
author: "Radhakrishnan Asokan"
---

A case study on certificate pinning

<!--truncate-->



### Introduction

<!-- In HTTPS handshake,Browser requests Certificate Authority (CA) to validate the certificate provided by a server. If CA or Root certificate is compromised, then client may face man the middle (MTM) attacks. To protect its users from this vulnerability, an app can employ SSL pinning technique. -->

In HTTPS handshake, Server responds with public certificate issued by Certificate Authority (CA) to establish connection. If CA or Root certificate was compromised and issues certificates without domain owners consent, then client may face man in the middle (MTM) attacks. To protect users from this vulnerability, an app can employ SSL pinning.


<!-- Certificate pinning is an additional layer of security which protects communication between client and server, The Standard HTTPS verifies whether the connection is secure but It cannot verify whether we are communicating with the actual server or an intercepted server. -->

![MITM](/learn/assets/mitmdiagram.png)


#### What Certificate Pinning offers
Standard HTTPS checks only whether the connection is secure. Along with the HTTPS, we use certificate pinning which will verify whether we are communicating with the actual server.

The application will have the pinned certificates which are pre-defined known certificates. During all the communication between the client and server, we will expect server's certificate should match with any one of the pinned certificates, If it doesn't match we will terminate the communication.

![MITM](/learn/assets/nomitmdiagram.png)


#### Advantages of Certificate Pinning
* Certificate Pinning protects data tampering even if user installs a malicious CA with/without knowing.
* If trusted certificate authority gets compromised due to a security [vulnerability](https://en.wikipedia.org/wiki/Certificate_authority#CA_compromise) our application will not get affected.


#### Web Certificate Pinning
Web Certificate Pinning is a dynamic pinning, Certificates are pinned during the initial connection establishment, It was [introduced](https://developer.mozilla.org/en-US/docs/Web/HTTP/Public_Key_Pinning) in 2015, Soon after in 2018 it was deprecated, Mainly due to it created new set of vulnerabilities than resolving the actual [problem](https://scotthelme.co.uk/using-security-features-to-do-bad-things/).

#### Mobile Certificate Pinning
Mobile certificate pinning is a static pinning, In which certificate will be bundled within the app during release and expected to deploy a new release on certificate expiry.


### Problem associated with Certificate Pinning
Security reachers had [warned](https://scotthelme.co.uk/im-giving-up-on-hpkp/) risk on using HTTP Certificate Pinning.

* If the key was accidentally deleted / stolen / hacked, We will face serious application down time [issues](https://www.smashingmagazine.com/be-afraid-of-public-key-pinning/).
* Domain hijacking - On Domain hijacking we will lose control of certificates, Hijacker can mishandle our certificates.

### What's next ?
[Certificate Transparency(CT)](http://www.certificate-transparency.org/what-is-ct) was introduced in 2018 after deprecation of Web Certificate Pinning, CT is an open source framework for monitoring and auditing certificates,

This standard creates a public logger which records all the issued certificates by the trusted CA, We can monitor these logger to detect mistakenly issued certificates, compromised CA and CA dishonesty.

CT in [OpenSSL](http://www.certificate-transparency.org/certificate-transparency-in-openssl), whenever connection is initiated, SSL certificates's timestamp will be used to fetch the certificate from the CT log and compared to establish the connection.


### Conclusion
Though CT is different from certificate pinning, It will effectively replace the certificate pinning without compromising the quality of service.

we are always open to adapt latest technology trends. If there is anything in your mind that WaveMaker should have, do let us know [here](mailto:info@wavemaker.com).


