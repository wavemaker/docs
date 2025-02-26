---
title: "What application architectures does WaveMaker Apps support?"
id: "wavemaker-application-architecture"
---
See the [FAQs](/learn/app-development/wavemaker-app-development-faqs) for WaveMaker app development.      

---

WaveMaker built applications use the modern application architectures such as:

## Micro Services enabled architecture
Micro Services enabled architecture allowing a large application to be built as smaller scalable services, which are integrated through REST APIs. WaveMaker applications use session-less architecture allowing them to be scaled up as the app needs or the number of users grow using docker containers [Micro Services](https://martinfowler.com/articles/microservices.html).

## Single Page Applications (SPA)
Single Page Applications (SPA) load a single HTML front-end with interaction built using JavaScript & AJAX. For more information, see [single page applications](https://msdn.microsoft.com/en-us/magazine/dn463786.aspx). Front-end is clearly separated from the back-end services using REST APIs. 

A typical application can be demarcated into three parts: 
- Client-side app component that works on the device used.
- Central/remote Server component that provides backend services.
- Both these components separated by well-defined REST API contract.

## React Native Mobile App

React Native for building mobile applications enables web developers to create native mobile applications for both iOS and Android from a single codebase. This integration simplifies the development process, allowing developers familiar with JavaScript to build high-quality mobile applications without needing extensive knowledge of platform-specific languages.

It provides the native wrapper to interact with the device capabilities and an installer for the device. WaveMaker developers build Mobile apps just the way they build web apps using drag-n-drop visual RAD approach and integrating the mobile front-end with the backend services using REST APIs.

## See Also
[FAQs](/learn/app-development/wavemaker-app-development-faqs)  

