---
title: "SSL Pinning (Beta)"
id: "ssl-pinning"
sidebar_label: "SSL Pinning (Beta)"
---
---

SSL-based security can be compromised if the root certificate on the user's device is compromised. To prevent data leaks in such cases, SSL pinning is employed. You can find more details in the case explained [here](../blog/2020/12/15/certificate-pinning).

In SSL pinning, the hash of the SSL public key is included in the mobile app. When making a call (such as XMLHttpRequest) to a remote server, the hash of the server's public key is verified against the hashes stored in the mobile app. Only if the hash is present, the call is allowed to proceed. In WaveMaker, SSL pinning is implemented using the React Native plugin called [react-native-ssl-public-key-pinning](https://github.com/frw/react-native-ssl-public-key-pinning).

## Setup

1. Open **Export React Native Dialog** and navigate to the SSL Pinning section.

![SSL Pinning section](/learn/assets/react-native-ssl-pinning/ssl-pinning.png)

2. Enable SSL Pinning, as shown below.

![Enable SSL Pinning](/learn/assets/react-native-ssl-pinning/enable-ssl-pinning.png)

3. Identify the domains that your app will access.
4. Include the hashes of the public keys for all the identified domains.

![Enable SSL Pinning](/learn/assets/react-native-ssl-pinning/ssl-pinning-add-domains.png)

5. Save and Build.

## How to get Hash of SSL Public Key from URL

1. Install [OpenSSL](https://www.openssl.org/source/).
2. Execute the following command. Replace **DOMAIN_NAME** with your target domain.

```
openssl s_client -connect DOMAIN_NAME:443 |\
openssl x509  -pubkey -noout |\
openssl pkey -pubin -outform der |\
openssl dgst -sha256 -binary |\
openssl enc -base64
```

3. Hash will be at the end of the output and is highlighted in yellow color.

:::note
Following is the command for `www.wavemaker.com` as reference. 
:::

![wavemaker hash](/learn/assets/react-native-ssl-pinning/hash-gen.png)

## Caution

In situations where the SSL public key expires and a new SSL certificate is deployed on the server, the SSL pinning mechanism can block all app-to-server calls since the new certificate doesn't match the one stored in the app. Consequently, the app becomes non-functional. To mitigate this issue, it is recommended to have multiple backup keys available. 

For more detailed information on this topic, please refer to [this document](https://github.com/datatheorem/TrustKit/blob/master/docs/getting-started.md#always-provide-at-least-one-backup-pin) authored by the Trust Kit library, which is internally utilized by WaveMaker.

## Additional Resources

- https://owasp.org/www-community/controls/Certificate_and_Public_Key_Pinning