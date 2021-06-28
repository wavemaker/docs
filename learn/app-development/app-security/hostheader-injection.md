---
title: "HostHeader Injection"
id: ""
---
---


## What is HostHeader Injection

Handling host header in an unsafe way leads to Host header attacks, here an attacker injects a harmful payload in to host header, Which can manipulate 
server-side behaviour

Host header attacks can lead to 
- Web-cache poisoning
- Password Reset Poisoning

## How to prevent HostHeader Injection

Host header is user controllable and can be manipulated by using tools like Burp Proxy.
- validate the host header
- whitelist permitted domains


## How WaveMaker Apps prevents HostHeader Injection

WaveMaker App users can configure HostNames which are domain names through which users run their application. Here users can determine which Hostname to be 
allowed, The default behaviour is to allow any hostname if not configured.

## How to configure Allowed Hosts 

The list of Host names to be allowed in application can be configured in Security -> safegaurds

[![hostheader-injection](/learn/assets/allowed-hosts.png)](/learn/assets/allowed-hosts.png)

