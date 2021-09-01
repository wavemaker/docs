---
title: "Important Announcement about Angular 10 Update"
author: Swetha Kundaram
---

WaveMaker currently uses Angular 9 for building applications. With the announcement on ending support of Angular 9, we move forward by taking small steps to update to the next Angular version 10. For this, WaveMaker has developed an approach to update the platform. WaveMaker plans to release another major update on the 6th of September 2021 that includes the Angular 10 update. Therefore, to avoid any breaking of code, we have recommended the following approach. 

<!--truncate-->

:::note
Please note that this Angular update does not include Ivy Engine but covers some critical bug fixes. As part of the process, we continue to use View Engine to move forward.
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

There are two to ways upgrade to Angular 10.

- Download and install in the build system
- Use the Docker image that WaveMaker provides

### Docker Images

If you are using Docker image, WaveMaker can provide two Docker images to ease the process.

- Node update image
- Node update plus WaveMaker dependencies

:::tip
We can share the staging link to test your application before the update. Please reach out to our [support team](mailto:support@wavemaker.com) for more details. 
:::