---
title: "Deprecation notice for Cordova project type"
author: Venugopal Jidigam
---
---

## Deprecation notice for Cordova project type

With the release of 11.6.0, we will start providing minimal support to Cordova projects. However, by June 2024 we will end our complete support for Cordova projects and users will not be provided with any new patches/updates in further releases.

### Background

WaveMaker’s support for developing mobile applications was launched in 2015 with Cordova as the underlying framework. But with multiple advancements, in 2022, we released support for creating React Native mobile applications.

#### Why React Native

With better performance and the latest technology, React Native stands as the first choice for application development. To understand more about how React Native is better than Cordova, see [React Native or Cordova](/learn/app-development/wavemaker-overview/react-native-and-cordova).


<!-- truncate -->

## What's Next

| Timeline | Description |
| --- | --- |
| Immediate effect | Users will not be able to create new Cordova projects but will be able to work on the existing projects. |
| Till 30 June 2024 | We will provide fixes if it resolves one of the following: <br/> - A newly identified security vulnerability, <br/> - A regression caused by a 3rd party change, such as a new mobile OS version. |
| Post June 2024 | Complete end of support. Users will not be able to open Cordova projects however, they will be provided an option to export projects. |


### What happens to the existing applications

Mobile applications that are already installed on devices will continue to run. This notice concerns WaveMaker’s usage to develop the application to add new features or change already built pages. There is no runtime impact.

### Migration Strategies

1. Recreate mobile application functionality in WaveMaker’s React Native project type.
2. [Setup the WaveMaker built web application to be a Progressive Web application](https://www.wavemaker.com/creating-progressive-web-applications-with-wavemaker/).

Please reach out to your customer success partner to talk about your migration approaches. We will be happy to help with this. 

We thank all the WaveMaker developers who have built mobile applications and are looking forward to serving you in the future.
