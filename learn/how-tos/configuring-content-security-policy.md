---
title: "Configuring Content-Security-Policy"
id: ""
---
---

## Content-Security-Policy Introduction
Content Security Policy (CSP) is a computer security standard introduced to prevent cross-site scripting (XSS), clickjacking and other code injection attacks resulting from execution of malicious content in the trusted web page context.

## Content-Security-Policy support in WaveMaker apps
From WaveMaker 10.15 onwards, web apps built on WaveMaker support strict content-security-policy. Out of the box, the platform does not evaluate any JavaScript during the runtime, nor does it include any inline script. Thus, there is no need to declare “unsafe-eval” and “unsafe-inline” keywords against the script-src directive.
Similarly, there are no inline style tags getting added by unknown providers. Thus, no need to declare “unsafe-inline” keyword against the style-src directive.

:::note
Please note that strict CSP is supported by the generated Angular app. The preview app does not support strict CSP. Keywords like “unsafe-eval” and “unsafe-inline” are still required during preview mode.
:::

## How to enable CSP in WaveMaker apps
WaveMaker apps support supplying CSP via HTTP response headers while serving the index.html file. This can further be configured as part of the maven profile. You can have different policies for different profiles. This makes things like whitelisting resource providers easy and configurable per profile.

From WM 10.15 onwards, there are two new properties introduced in the maven config profile to configure CSP.
- security.general.csp.enabled
- security.general.csp.policy

## Example Policy
To enable CSP for the deployment profile, perform following steps:
- Edit the deployment.properties file in the project as follows:

``` 
security.general.csp.enabled=true
security.general.csp.policy=script-src 'self'; style-src 'self' 'nonce-${NONCE_VALUE}'; default-src 'self'
```
- In the index.html file, add a meta tag inside the head tag as follows:
```
<meta name="CSP-NONCE" content="${NONCE_VALUE}">
```
- Deploy & test

:::note
The policy above is a sample one. You can provide your own policy against the prop security.general.csp.policy
:::

## What is ${NONCE_VALUE}
If you notice there is an additional keyword mentioned against the style-src directive, nonce-${NONCE_VALUE}. This is a placeholder for WM backend to generate a random nonce value supply the same to the browser on every page refresh. Without this, widgets based on certain 3rd party libs like nvd3, ngx-bs, etc will not work properly.

WM runtime uses certain 3rd party open source libraries like ngx-bootstrap, nvd3, etc. These libraries add inline styles tags, which will be blocked by the browser unless unsafe-inline is declared against the style-src directive in the CSP. If that is done, the webapp becomes vulnerable to XSS attacks from unknown sources.

To solve this issue, we use the concept of nonce, where a random keyword generated at the backend will be supplied to the browser in the CSP. Now, the browser will allow only those inline style tags which have this nonce as an attribute. WM runtime supplies this nonce to all its known 3rd party libs, thus safely whitelisting inline styles added by these trusted sources. The meta tag with CSP-NONCE is required to read the nonce value by JS runtime.

## Exception Scenarios
By default, WaveMaker app does not require special keywords like 'unsafe-eval' and 'unsafe-inline' for script-src directive. But there are a few scenarios where app will not work without these keywords. These are:
- When **Dynamic datatable** is used, 'unsafe-eval' is required against the script-src directive.
- When **Dynamic form** is used, 'unsafe-eval' is required against the script-src directive.
- When **Richtext editor** widget is used, 'unsafe-inline' is required against the style-src directive. This widget uses open source library summernote, which is heavily jQuery based and applies inline styles.