---
title: "Important Announcement about Angular 10 Update"
author: Swetha Kundaram
---

WaveMaker currently generates code based on Angular 9 for applications. With the announcement on ending support of Angular 9, we are upgrading to the next Angular version, 10.2.5. 

Consequently, we have developed a roadmap to update the platform with the **Release 10.9** scheduled for the 13th of September 2021, which includes the Angular 10 update. If you are a WaveMaker application developer who uses your own infrastructure to build and deploy the application, you need to read further.

This update requires you to take action, i.e., updating the Node and NPM versions. To avoid breaking changes, we have recommended the following steps described in this blog post. 

<!--truncate-->

:::note
Please note that this Angular update does not include Ivy Engine but covers some critical bug fixes. As part of the process, we continue to use View Engine and will move to use Ivy in the subsequent versions.
:::

## What's in the Update

This update impacts building WaveMaker apps using your own [CI/CD pipeline](/learn/app-development/deployment/deployment-overview) using the [Angular Build](/learn/app-development/deployment/build-options#angular-build). 

|Description| Current Version | Moving to|
|---|---|---|
|**Node** | 10.15 | 12.22.3 |
| **NPM**| 6.4 | 6.14.13 |

:::important
**Update Node JS Version**: Angular 10 requires Node JS version 12.22.3. So you must upgrade Node and NPM on your build infrastructure with the versions mentioned above.
:::

## How WaveMaker can Help

There are two ways to upgrade to your build system with Angular 10.

1. Download and install Node and NPM in the build system with the versions specified above.
2. Use resources provided by WaveMaker team.

### Using Docker Option

If you are using Docker images for building WaveMaker application, you can use them in the following ways:

- Using them from the public repo containing pre-built Docker image developed and published by WaveMaker.
- Using Docker files to build the Docker images. For more information, see [Build with Docker](/learn/app-development/deployment/build-with-docker). 

### Testing your Application

:::tip
To make the transition smooth, we can provide the beta link on demand to test your application. Please reach out to the [support team](mailto:support@wavemaker.com) for more details. 
:::

We recommend you test the application to see if the build is successful. For this, you must test the application using the [Angular Build](/learn/app-development/deployment/build-options#angular-build). If the build fails, we request you to contact our support team with logs. 
