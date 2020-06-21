---
title: "Deliver faster applications with WaveMaker!"
author: Subodh Kumar
---

Performance is key to the success of any application. Even though an app is feature-rich if it's not responsive to user actions it might lose its userbase. WaveMaker is a platform that treats performance as a prime deliverable to all the developed apps. With each release, WaveMaker introduces changes aiding in optimization to generated apps in terms of code, build & delivery. The optimizations are made available to the customers out of the box. It requires minimal or no changes to be done by low code developers while building an app in WaveMaker, thus easing the process of build faster apps.

<!-- truncate -->

As per the Google stats, BBC lost 10% of its users with each additional second the site took to load & Pinterest gained 15% users signup when the perceived load times were reduced to 40%. So, performance is one of the important factors to consider in app development. An app with good performance can help businesses in better signups, enhanced user engagement & result in improved sales conversions.

### Performance in WaveMaker

WaveMaker is a low code platform that continuously works on performance optimizations so that it helps customers to quickly build & ship apps with great performance. WaveMaker adapts the best practices that are evolving in the world of web applications and bring those to its customers & applications.

When a user requests for an app, the speed with which it loads & becomes responsive is a testimony to its performance. The loading speed is a function of below-listed factors,

* Bundle Size
* Network Quality
* Number of HTTP requests made
* API/Service response quality
* User perception of app readiness

WaveMaker generates Angular code for the applications, thus has the flexibility to leverage Angular build tools to optimize the application for better load times. Besides, if third party dependencies are required, modular libraries are preferred. WaveMaker component library of 100+ rich widgets. Still, the application build is only composed of components used. Below is the summary of optimizations that are delivered over past releases,

* Treeshaking/Dead Code Elimination, with the help of Angular Production Build & modular component library
* Lazy Loading of Routes & Components, so that user is served with just the required code
* Enable modern compression algorithms such as gzip & brotli for all the requests reducing the network load & time.

With the current release i.e., version 10.5, continuing its focus on performance, WaveMaker is pleased to announce support for deployment of frontend artifacts onto a Content Delivery Network, which can help in reducing the download time of static resources by ~30%.

### Content Delivery Network
A Content Delivery Network(CDN) is a set of the geographically distributed server which together enable fast, reliable & secure delivery of internet content including HTML, Javascript, Stylesheets, Images, etc., 

With CDN, the content is served from the CDN-server closest to the user location helping in faster load times. With caching & other optimizations CDN also reduces the amount of data origin servers must provide, thus reducing hosting costs. With its distributed nature CDN can ensure better availability and can handle failures better than any origin servers. With all these benefits CDN ensures consistent user experience for an app across the geographical location. The usage of CDN to manage traffic by major sites such as Facebook, Netflix, amazon validates its performance pitch.

To enable an application to make its artifacts served over CDN, the developer needs to handle additional operations such as,
* Configure the Origin source & Content Delivery Network
* Managing build artifacts with each release
* Cache invalidations to ensure the user is served latest response
* Additional operations based on CDN provider & more

But we wanted our low code developer to have access to all the CDN goodness very easily. So WaveMaker has made it available on click of a button, literally. With the current release, when the user deploys the WaveMaker app by clicking the "Deploy" button, it is deployed on AWS with CDN support without any additional configuration.

### CDN intergration with WaveMaker

Under the hood, WaveMaker handles all operations required for CDN deployment of apps as listed below,
* Build process is updated with artifacts generation for front-end only static assets such as javascript, CSS, etc.,
* Upload the static assets of the project to Amazon S3
* CloudFront which is AWS-CDN service provider configured with all the required properties.
* Updates the deployed project to serve static assets from Cloudfront CDN.

Thus ensuring the customers benefit from CDN advantages for every app developed with no additional effort.

However, for deploying onto production, the customers may prefer their cloud service provider with the help of CI, CD pipelines. The documentation for which will be available soon! In the subsequent releases, we will also support one-click deployment to deploy on customer cloud providers. 

### Results

Below are the stats from WaveMaker testing with CDN integration comparing the download times of static assets for some of the standard sized applications,

| Application | Without CDN | With CDN | Reduced Download Time |
|-------------|-------------|----------|-----------------------|
| Starter App | 4108ms      | 2496ms   |                   ~39%|
| WaveKart    | 3585ms      | 2531ms   |                   ~29%| 
| SalesVision | 3773ms      | 2617ms   |                   ~30%| 

As stated, improving performance is a continuous endeavor for WaveMaker & more optimizations will be delivered to the customers with each release. It will enable our customers to build & deliver faster apps for their users leading to successful collaboration.

Stay tuned for more.  Also please share your thoughts or feedback on the optimizations achieved or other approaches to improve the performance of WaveMaker apps to info@wavemaker.com