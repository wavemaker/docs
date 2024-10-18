---
title: "Configuring Content-Security-Policy"
id: "configuring-content-security-policy"
---
---

Content Security Policy (CSP) is a computer security standard introduced to prevent cross-site scripting (XSS), clickjacking, and other code injection attacks resulting from executing malicious content in the trusted web page context.

## CSP Support in WaveMaker apps

From [WaveMaker 10.15.0](/learn/wavemaker-release-notes/v10-15-0) onwards, web apps built on WaveMaker support strict content-security-policy. 

1. The platform does not evaluate JavaScript during runtime out of the box. 
2. The platform does not include any inline script. 

As a result, you do not need to declare "unsafe-eval" and "unsafe-inline" keywords against the script-src directive. 

Similarly, no inline style tags are added by unknown providers. Thus, you do not need to declare the "unsafe-inline" keyword against the style-src directive.

:::note
Please note that the generated Angular app supports strict CSP. The preview app does not support strict CSP. Keywords like "unsafe-eval" and "unsafe-inline" are still required during Preview mode.
:::

## Enabling CSP in WaveMaker apps

WaveMaker apps support supplying CSP via HTTP response headers while serving the index.html file. You can configure it as part of the maven profile and have different policies for different profiles. This makes whitelisting resource providers easy and configurable as per the profile.

### Content Security Policy Properties

From WaveMaker 10.15 onwards, two new properties are introduced in the maven config profile to configure CSP.

- security.general.csp.enabled
- security.general.csp.policy

## Example Policy

To enable CSP for the deployment profile, perform the following steps:

1. Edit the deployment.properties file in the project as follows:

``` 
security.general.csp.enabled=true
security.general.csp.policy=script-src 'self'; style-src 'self' 'nonce-${NONCE_VALUE}'; default-src 'self'
```

2. In the index.html file, add a meta tag inside the head tag as follows:
```
<meta name="CSP-NONCE" content="${NONCE_VALUE}">
```
3. Deploy and test

:::note
The policy above is a sample one. You can provide your own policy against the property security.general.csp.policy
:::

## ${NONCE_VALUE}

### What is ${NONCE_VALUE}

If you notice, an additional keyword is mentioned against the style-src directive, nonce-${NONCE_VALUE}. This is a placeholder for the WaveMaker backend to generate a random nonce value and supply the same to the browser on every page refresh. Without this, widgets based on specific 3rd party libs like nvd3, ngx-bs, etc. will not work properly.

### How it works

WaveMaker runtime uses certain 3rd party open source libraries like ngx-bootstrap, nvd3, etc. These libraries add inline style tags, which the browser will block unless unsafe-inline is declared against the style-src directive in the CSP. If that is done, the web app becomes vulnerable to XSS attacks from unknown sources.

### Solution

To solve this issue, we use the concept of a nonce, where a random keyword is generated at the backend, which will be supplied to the browser in the CSP. Now, the browser will only allow those inline style tags with this nonce as an attribute. WaveMaker runtime supplies nonce to all its available 3rd party libs, thus, safely whitelisting inline styles added by these trusted sources. The meta tag with CSP-NONCE is required to read the nonce value by JS runtime.

## Exception Scenarios

By default, WaveMaker apps do not require special keywords like 'unsafe-eval' and 'unsafe-inline' for the script-src directive. But there are a few scenarios where the app will not work without these keywords. 

These are:

- When **Dynamic DataTable** is used, 'unsafe-eval' is required against the script-src directive.
- When **Dynamic form** is used, 'unsafe-eval' is required against the script-src directive.
- When the **Richtext editor** widget is used, 'unsafe-inline' is required against the style-src directive. This widget uses open source library summernote, which is heavily jQuery based and applies inline styles.