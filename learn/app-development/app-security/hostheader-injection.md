---
title: "Prevent HostHeader Injection"
id: ""
sidebar_label: "HostHeader Injection"
---
---

At WaveMaker, we continuously bring ways to make applications more secure by ensuring the way applications are built and that it stands a better chance of not being breached.

Handling HTTP host header in an unsafe way can lead to nasty host header attacks. These vulnerabilities typically occur due to our wrong assumption that the header is not user-controllable. We end up trusting Host headers, resulting in poor validation or escaping of values.

## Potential Risks

Typically, attacker injects a harmful payload in to host header, which can manipulate server-side behaviour. Therefore, Host header attacks can lead to:

- Web-cache poisoning
- Password reset poisoning

## Preventing HostHeader Injection

In reality, Host header is user controllable and can be manipulated by using tools like Burp Proxy. Therefore, it is substantial to:

- Validate the Hostheader
- Whitelist permitted domains

## How WaveMaker Prevents HostHeader Injection

You can specify the Hostnames where the WaveMaker application is deployed to prevent HTTP Host header injection attacks. 

Hostnames are domain names through which users run their application. Here users can determine which Hostnames should be allowed. The platform will reject HTTP requests with different Host header values than the specified list. The default behaviour is to allow any hostname if not configured.

## How to configure Allowed Hosts

In WaveMaker application, the list of allowed Hostnames can be configured from **Security** -> **Safegaurds** dialog, as shown below.

[![hostheader-injection](/learn/assets/allowed-hosts.png)](/learn/assets/allowed-hosts.png)

