---
title: "How does WaveMaker support Micro-Services enabled architecture?"
id: "micro-services-enabled-architecture"
sidebar_label: "Micro-Services enabled architecture"
---
See the [FAQs](/learn/app-development/wavemaker-app-development-faqs) for WaveMaker app development.      

---
[![](/learn/assets/services_concept.png)](/learn/assets/services_concept.png)

To support micro-services architecture, WaveMaker uses an API-driven app development approach wherein REST APIs are auto-generated for the application. Every backend services such as Database Entity, Queries or Custom Java code, that is integrated into an application generates REST APIs. Some of these APIs are available for further customization based on the app integration needs.

Custom queries, procedures, and Java Services can be used to extend the app functionality. For all these services, REST API is auto-generated using Spring-REST/Swagger.

UI components via Variables interact with REST API layer to access these services.

## See Also
[FAQs](/learn/app-development/wavemaker-app-development-faqs)  
[API Designer](/learn/app-development/services/api-designer/api/)  