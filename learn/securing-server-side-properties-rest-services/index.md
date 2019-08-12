---
title: "Securing Server Side Properties in REST Services"
date: "2019-07-18"
---

working with REST Services, it is imperative to secure your API keys and passwords and ensure your app sensitive information hides from the UI and network calls. The following are three types of Properties for Header and Query params when configuring REST Services; they are:

1. Type
2. Side Properties
3. Environment Properties

all the types, the Server Side Properties and App Environment Properties enforces you to use a Proxy server. This is to hide API keys and passwords from viewing via network calls and UI.[![](https://www.wavemaker.com../assets/ServerSidePropertiesHeader.png)](https://www.wavemaker.com../assets/ServerSidePropertiesHeader.png)[![](https://www.wavemaker.com../assets/ServerSidePropertiesQuery.png)](https://www.wavemaker.com../assets/ServerSidePropertiesQuery.png)

## it works

, for REST Services, you use API keys. You set API keys and passwords in Header and Query params. These params could carry app-sensitive data, and it should be hidden from the UI. However, in the Variables dialog for the REST Services, you can view param data in the input fields. Thus, it allows you to bind the data to any widget or variable, and it can potentially make it viewable to the client-side environment.

hide the params data that passes to Variable and network call, you must enable the Proxy server. To do this, when configuring REST Services, choose either Server Side Properties or App Environment Properties instead of UI type in the Header params and Query params. By doing this, you hide the API keys, passwords for the service as they transfer from a Proxy Server instead of making a direct call.

### is UI Type?

using the UI type, you get the flexibility to enable or disable Proxy. However, depending on Target APIs, you require to enable Use Proxy for cross-origin resource sharing. For such cases, the UI type would best serve the purpose.

###  are Server-Side Properties

Side Properties are fixed variables. It contains dynamic information, for examples, current time, current date, a logged-in user' data which changes based on the user.  

###  are App Environment Properties?

Environment properties are the same as Server Side Properties. However, they are constants. You create App Environment Properties once and you can use them any number of times for backend services. You can configure different values for different environments, and store API keys, passwords, and more. For more information, see [App Environment Properties](https://www.wavemaker.com/learn/how-tos/using-app-environment-properties/) 

### to add App Environment Properties?

add App Environment Properties, go to Config Profile from the Settings icon, and go to the App Environment tab and start entering the property values in the Key and Value sections.

: When adding App Environment Properties, ensure to click the "+" button after each entry. When done, click the immediate "Save" button, followed by the next "Save" button of the Config Profile window to save the data successfully. Further, refresh the page to reflect the changes on the Web Services window.

## to be aware of

- you do not see any App Environment Properties in the Header Param or Query Param, you should add them. For more information, see  [App Environment Properties](https://www.wavemaker.com/learn/how-tos/using-app-environment-properties/)
- enabling **Proxy**, you cannot set the properties to Server Side Properties or App Environment Properties.
-  you make any changes to the URL when configuring the web service, you should test it before you save the service. 

- [it works](#how-it-works)
- [Type](#ui-type)
- [are Server-Side Properties](#server-side)
- [are App Environment Properties](#app-env)
- [to add Environment Properties](#adding-app-env)
- [to be aware of](#to-know)
