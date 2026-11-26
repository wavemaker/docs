---
title: "How are the application stack upgrades done?"
id: "application-stack-upgrades"
sidebar_label: "Application Stack Upgrades"
---
See the [FAQs](/learn/app-development/wavemaker-app-development-faqs) for WaveMaker app development.      

---

WaveMaker platform is frequently updated to incorporate the latest developments in the underlying technology stack such as Spring, Hibernate, Angular etc. WaveMaker Apps are automatically upgraded by the platform to the latest version of the stacks that the platform ships. This is a major advantage for developers, as they do not have to make any changes in the applications manually.

Deployed apps will not be affected by platform upgrades, and in case the deployed app needs to be upgraded as well, then it can be re-deployed.   How does a WaveMaker App compare with traditionally built app?

The benefits of Rapid Application Development have a direct bearing on the cost and schedule of enterprise application development. In fact, organizations that used WaveMaker RAD Platform have experienced:

- 67% faster application development than traditional software delivery
- 80% lesser coding required compared to traditional software development
- 75% lower maintenance costs than traditional software life cycle

[![](/learn/assets/rad_benefits.png)](/learn/assets/rad_benefits.png)

The following chart depicts performance comparison of an app built following the RAD approach using WaveMaker and a traditionally built app using AngularJS framework. The functionality of the app is designed to load several database records from a backend service, exposed as REST API to the UI layer, where the UI layer renders these records using widgets such as list, image, label, panel etc.

[![](/learn/assets/perf_graph.png)](/learn/assets/perf_graph.png)

Metrics such as page load time, memory consumed on the client side, page interaction response times and the number of backend service calls are plotted. As indicated in the figure above, the delta is very minimal and the application built with WaveMaker performs at par on all counts in comparison to the app built traditionally.   

## See Also
[FAQs](/learn/app-development/wavemaker-app-development-faqs)  