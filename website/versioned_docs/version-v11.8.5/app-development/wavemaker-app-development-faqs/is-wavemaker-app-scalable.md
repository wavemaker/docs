---
title: "Is WaveMaker App scalable in terms of usage?"
id: "is-wavemaker-app-scalable"
sidebar_label: "Is WaveMaker App scalable"
---
See the [FAQs](/learn/app-development/wavemaker-app-development-faqs) for WaveMaker app development.      

---

WaveMaker Apps are built to use stateless architectures making them ready for large scale container-based deployments. Large scale deployments needing high number concurrent requests and low response times can be achieved, by scaling apps to deploy on container based systems.

[![](/learn/assets/scal_graphic.png)](/learn/assets/scal_graphic.png)

WaveMaker App acts as a micro service with the REST APIs exposed and load-balanced when deployed on multiple containers. Since, there is no state associated on the server-side, the architecture allows for a high-scalable deployment with client-managed state (on the Angular side).

## See Also
[FAQs](/learn/app-development/wavemaker-app-development-faqs)  