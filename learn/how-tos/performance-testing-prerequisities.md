---
title: "Prerequisites for peformance testing on WM apps"
id: ""
---
---

## Introduction

This document will provide the guidelines for testing the performance of WaveMaker applications.


### Using Angular Production Build

The preferred build for testing WM apps is 'Angular Production'. The build includes compilation of templates, optimization mode, i.e., minification, uglification, dead code elimination/tree shaking are handled during the build time. So the runtime performance will be superlatively better in this mode.

### Deploying static content to CDN

The frontend code of any WaveMaker application can be configured to deploy onto a CDN. This improves the end user experience of the WaveMaker application because of dramatic gains made in the page load times. Please refer the [document](/learn/app-development/deployment/app-integration-with-aws-cdn) to deploy static content to AWS CDN.

### Testing the application using various machines

Configuring load testing tools on multiple machines rather to a single machine will provide better results avoiding any irregularities. This would also help in better analyzing and performance measuring. 

## See Also

[Deploy static content to Azure CDN](/learn/app-development/deployment/app-integration-with-azure-cdn)  
[Build Options for App Deployment](/learn/app-development/deployment/build-options)