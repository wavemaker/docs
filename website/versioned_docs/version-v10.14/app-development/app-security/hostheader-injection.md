---
title: "Prevent HostHeader Injection"
id: "hostheader-injection"
sidebar_label: "HostHeader Injection"
---
---

At WaveMaker, we continuously bring ways to make applications more secure by ensuring the way applications are built and that it stands a better chance of not being breached.

Handling HTTP host header in an unsafe way can lead to nasty host header attacks. These vulnerabilities typically occur due to our wrong assumption that the header is not user-controllable. We end up trusting Host headers, resulting in poor validation or escaping of values.

## Potential Risks

Typically, an attacker injects a harmful payload into host header, which can manipulate server-side behavior. Therefore, Host header attacks can lead to:

- Web-cache poisoning
- Password reset poisoning

For more information, see [OWASP in WaveMaker](/learn/app-development/app-security/owasp).

## Preventing HostHeader Injection

In reality, Hostheader is user-controllable and can be manipulated by using tools like Burp Proxy. Therefore, it is necessary to:

- Validate the Hostheader
- Whitelist permitted hostname or domains

## How WaveMaker Prevents HostHeader Injection

Hostnames are domain names through which you run your application. You can specify the Hostnames where the WaveMaker application is deployed to prevent HTTP Host header injection attacks. 

Here you can determine which Hostnames should be allowed. The platform will reject HTTP requests with different Host header values than the specified list. The default behavior is to allow any hostname if not configured.

## How to configure Allowed Hosts

In a WaveMaker application, the list of allowed Hostnames can be configured from **Security** -> **Safeguards** dialog, as shown below.

- In the Safeguards dialog, go to **Allowed Hosts** section,
- Add the permitted hostnames or domains in the **Hosts** field and click **Save**.

[![hostheader-injection](/learn/assets/allowed-hosts.png)](/learn/assets/allowed-hosts.png)

