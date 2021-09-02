---
title: "Important Announcement about Angular 10 Update"
author: Swetha Kundaram
---

WaveMaker currently generates code based on Angular 9 for applications. With the announcement on the ending support of Angular 9, we are upgrading to the next Angular version 10.2.5.  WaveMaker plans to release another major update on the 6th of September 2021, including the Angular 10 update. If you are a WaveMaker application developer who uses your own infrastrucutre to build and deploy the application, you need to read this note.

<!--truncate-->

:::note
Please note that this Angular update does not include Ivy Engine but covers some critical bug fixes. As part of the process, we continue to use View Engine and will move to using Ivy in the subsequent versions.
:::

## What's in the Update

|Description| Current Version | Moving to|
|---|---|---|
|**Node** | 10.15 | 12.22.3 |
| **NPM**| 6.4 | 6.14.13 |


:::important
**Update Node JS Version**: Angular 10 requires Node JS version 12.2.0 or higher. Therefore, you must update the Node version from 10 to 12 to avoid any breaking of code.
:::

## How WaveMaker can Help

There are two ways to upgrade to Angular 10.

1. Download and install in the build system
2. Use Docker images

### Docker Images

 If you are using Docker images, you can do them in the following two ways:

- Using them from the public repo containing pre-built Docker image developed by wavemaker
- Using Docker files to build the docker images. Follow this document for more details. 

:::tip
We can share the beta link to test your application before the update. Please reach out to our [support team](mailto:support@wavemaker.com) for more information. 
:::

### Testing your Application

We recommend you test the application to see if the build is successful. For this, you must:

- Test Angular build

If the build fails, we request you to contact our support team with logs. 
