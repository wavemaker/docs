---
title: "SSL Pinning (Beta)"
id: "ssl-pinning"
sidebar_label: "SSL Pinning (Beta)"
---
---

## Introduction

Security based on SSL mechanism, can be compromised if the root certificate on the User's device is compromised. When this happens, SSL pinning helps in preventing data leaks. For more details, please go through the [case explained here](../blog/2020/12/15/certificate-pinning).

In SSL pinning, hash of SSL public key is added in mobile app. When a call is made (like XMLHttpRequest) to remote server, hash of public key from server is checked against from the ones added in mobile app. If the hash is present, then only the call will be allowed. SSL pinning in WaveMaker is implemented with the use of a React Native plugin called [react-native-ssl-public-key-pinning](https://github.com/frw/react-native-ssl-public-key-pinning). 

## Setup

- Open **Export React Native Dialog** and navigate to SSL Pinning section.
![SSL Pinning section](/learn/assets/react-native-ssl-pinning/ssl-pinning.png)
- Turn on SSL Pinning.
![Enable SSL Pinning](/learn/assets/react-native-ssl-pinning/enable-ssl-pinning.png)
- Identify the domains that your app will access and add the hashes of public keys of all those domains should be added.
![Enable SSL Pinning](/learn/assets/react-native-ssl-pinning/ssl-pinning-add-domains.png)
- Save and Build.

## How to get hash of SSL public key from url
- Install [openssl](https://www.openssl.org/source/)
- Execute the following command. Replace **DOMAIN_NAME** with your target domain.
```
openssl s_client -connect DOMAIN_NAME:443 |\
openssl x509  -pubkey -noout |\
openssl pkey -pubin -outform der |\
openssl dgst -sha256 -binary |\
openssl enc -base64
```
- Hash will be at the end of output.

Following is the command for www.wavemaker.com. Hash is at the last and is highlighted in yellow color.

![wavemaker hash](/learn/assets/react-native-ssl-pinning/hash-gen.png)

## Caution

Let us suppose the SSL public key is expired after some period. A new SSL certificate is deployed on the server. As new one doesnot match with the ones in the app, SSL pinning mechanism will block all calls from app to the server. This makes the app not to function. So, it is advised to have multiple (backup) keys as well. Please read [this document](https://github.com/datatheorem/TrustKit/blob/master/docs/getting-started.md#always-provide-at-least-one-backup-pin) from the Trust Kit library author. Trust Kit library is used internally by WaveMaker.

## Additional Resources

- https://owasp.org/www-community/controls/Certificate_and_Public_Key_Pinning