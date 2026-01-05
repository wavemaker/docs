---
title: "Angular 15 is here - Action Needed"
author: Swetha Kundaram
---
---

WaveMaker Release 11.5 is scheduled for the 4th week of November 2023 and the release will include an update to Angular 15, as well as an upgrade to Node.js 18.16.1.! This is a significant upgrade that will help improve your application development experience and performance.

<!-- truncate -->

## Angular 15 New Features and Enhancements

|Current version|	Updating to|
|---|---|
|Angular 12.2.x	| 15.2.x |

Angular 12 to 15 includes a number of performance improvements, such as faster startup times and improved rendering performance, allowing the apps to be more responsive and provide a better user experience. Also, it improves the stability and reliability of Angular applications.

To learn more, see [Angular Version 15 - what's in the release](https://blog.angular.io/angular-v15-is-now-available-df7be7f2f4c8).

## Action Needed

Along with Angular upgrade we have upgraded the Node version to 18.16.x. Therefore, you are required to adjust the CI/CD pipeline accordingly. 

- Moving to Node.js 18.16.1

Node version should be greater than 18.16.1. The current version of the Node.js is 12.x.x 

:::note
We recommend adjusting CI/CD to ensure seamless integration with the new Node.js version. 
:::



