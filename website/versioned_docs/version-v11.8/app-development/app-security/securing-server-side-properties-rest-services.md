---
title: "Securing Server Side and App Environment Properties in REST Services"
id: "securing-server-side-properties-rest-services"
sidebar_label: "Secure Server-side Properties"
---
---

When working with REST Services, it is essential to protect your API keys and passwords and ensure your app sensitive information hides from the UI and network calls. You can do this by using proxy server when configuring REST Services. For this, you should use App Environment Properties or Server Side Properties for Header and Query params.

## What are App Environment Properties and Server-Side Properties and how to use them?

App Environment properties and Server Side Properties are similar. However, Server Side Properties are implicit variable or standard WaveMaker variables. It contains dynamic information, for examples, current time, current date, a logged-in user’ data which changes based on the user. 

Whearas App Environment Properties are explicit variable. You create App Environment Properties once and you can use them any number of times across the project. Configure different values for different environments, and store API keys, passwords, imported services, and more. To learn how to create an App Environment Property, see [Using App Environment Properties](/learn/how-tos/using-app-environment-properties/).

:::important
When adding App Environment Properties, ensure to click the “+” button after each entry. When done, click the immediate “Save” button, followed by the next “Save” button of the Config Profile window.
:::

When you create App Environment Properties, they should appear in Web Services window under the Header and Query param types.

## Configuring Proxy Server

When configuring REST API, you add parameter name, data type and test value depending on the service requirements. To learn how to add REST services, see [Third Party REST Services](/learn/app-development/services/web-services/rest-services/). Following are the three types of Properties for using Header and Query params data types:

1. App Environment Properties
2. Server Side Properties
3. UI Type

After you add the Endpoint URL, to use the Proxy Server, slide the toggle to enable the Use Proxy setting. The Server Side Properties and App Environment Properties enforces you to use the Proxy server by default. This is to protect app sensitive information from viewing via network calls and UI. 

[![](/learn/assets/ServerSidePropertiesHeader.png)](/learn/assets/ServerSidePropertiesHeader.png)

[![](/learn/assets/ServerSidePropertiesQuery.png)](/learn/assets/ServerSidePropertiesQuery.png)

## How it impacts UI

When you add REST service and bind them with the Header and Query param, the param values could essentially carry app-sensitive data. It should be hidden from the UI and network calls. However, in the Variables dialog, you can view param data in the input fields. Thus, it allows you to bind the data to any widget or variable, and it can potentially make it viewable to the client-side environment. 

To hide the params data that passes to Variable and network call, you must enable the Proxy server. By doing this, the data transfers from a Proxy Server instead of making a direct call.

## Things to be aware of

- If you do not see any App Environment Properties in the Header Param or Query Param, you should add them. For more information, see [Adding App Environment Properties](/learn/how-tos/using-app-environment-properties/).
- Without enabling **Use Proxy**, you cannot set the properties to Server Side Properties or App Environment Properties.
- If you make any changes to the URL when configuring the web service, you should test it before you save the service. 
