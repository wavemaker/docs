---
title: "Deprecation notice for Cordova project type"
author: Prasanth Reddy
---
---

Cordova is open source framework that is used to develop cross platform applications using web technologies. React Native is one of the latest UI framework used to develop native mobile applications. It provides better perfomance and user interface that makes it a preferrable technology over Cordova, to create applications. 

<!-- truncate -->

## Deprecation notice for Cordova project type

WaveMaker’s support for developing mobile applications was launched in 2015 with Cordova as the underlying framework. Since then, we have added many features across multiple releases enabling customers to build mobile applications. In 2022, we released support for creating React Native mobile applications. The capabilities in React Native project type now match that of Cordova. We continue to innovate the developer experience by adding new features as well. Refer to this link for the most up-to-date comparison.

In order for us to serve our customers better, we would like to move our mobile focus to React Native only. Consequently, we are now announcing our plans to discontinue support for Cordova.

| Support stage | Timing | Details |
| ------ | ------ | ------ |
| Active | Till March 2023 | New projects can only be created in Active stage. Once Active stage ends new projects cannot be created. Regularly scheduled updates and patches are released. |
| Long Term (LTS) | March 2023 - March 2024 | New projects cannot be created in Cordova once Active ends, and it is LTS phase. Only critical fixes and security patches are released. |
| Unsupported | April 2024 onwards | Projects will only be opened in read-only mode. |


### LTS Fixes

A fix is considered for an LTS version if it resolves one of:

* A newly identified security vulnerability,
* A regression, since the start of LTS, caused by a 3rd party change, such as a new mobile OS version.

### What happens to the existing applications

Mobile applications that are already installed on devices will continue to run, even after the LTS period. This notice concerns WaveMaker’s usage to develop the application to add new features or change already built pages. There is no runtime impact.

### Migration Strategies

1. Recreate mobile application functionality in WaveMaker’s React Native project type.
2. [Setup the WaveMaker built web application to be a Progressive Web application](https://www.wavemaker.com/creating-progressive-web-applications-with-wavemaker/).

Please reach out to your customer success partner to talk about your migration approaches. We will be happy to help with this. 

We thank all the WaveMaker developers who have built mobile applications and are looking forward to serving you in the future.
