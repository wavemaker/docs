---
title: "Announcement about Angular 11 Update"
author: Swetha Kundaram
---
---

WaveMaker generates code for applications based on Angular. As part of the continuous improvement efforts, we upgrade WaveMaker to the next major Angular version, 11, in the **release 10.11**, scheduled for the second week of January 2022. 

| Current version | Updating to | 
|---|---|
| Angular 10.2.5 | 11.2.14 |

To learn more, see [Angular Version 11 - what's in the release](https://blog.angular.io/version-11-of-angular-now-available-74721b7952f7).

<!--truncate-->

:::note
Angular 10 is scheduled to end its support by 24th Dec 2021. For more information, see [Angular Support Details](https://angular.io/guide/releases#support-policy-and-schedule).
:::

### Testing Apps on WaveMaker 10.11 Beta

:::note
Applies to WaveMaker Online (WMO) and WaveMaker Enterprise (WME) users.
:::

We invite you to test your applications on the WaveMaker 10.11 beta before officially releasing the 10.11 version. This service is exclusively provided on request. Please get in touch with our [support](mailto:support@wavemaker.com) team to access the WaveMaker 10.11 beta service.

The areas change in WaveMaker has been with how lazy loading of JS artifacts work. Our QA team has tested this area, and the release candidate build is now deployed on staging. While testing your applications, pay closer attention to the areas of your application that may be using [Prefabs](/learn/app-development/custom-widgets/creating-prefabs) and [Partials](/learn/app-development/ui-design/page-concepts/partial-pages) in particular. 

#### To do

- [ ] Run and test applications containing Prefabs
- [ ] Run and test applications containing Partials

### What's Deprecated?

Support of IE 9 and 10 was deprecated in Angular 10 and removed entirely in Angular 11. 

:::note
This Angular update does not include Ivy Engine but covers critical bug fixes and performance improvements. As part of the process, we continue to use View Engine and will move to use Ivy in the subsequent major release.
:::
