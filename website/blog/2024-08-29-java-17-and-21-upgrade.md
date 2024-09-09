---
title: "Java Upgrade: 17 or 21?"
author: "Krishna Rao Chintu"
---
---

As Java 11 Long Term Support (LTS) is reaching its end of life in October 2024, it's necessary to upgrade the Java version used by our platform and generated applications. To ensure continued support, we need to adopt the next LTS versions, Java 17 and Java 21.

## Recent Changes

We recently added support for Java Runtime, **[v11.7.4](/learn/wavemaker-release-notes/v11-7-4)**, released on July 1, 2024, allowing generated applications to run on either Java 17 or Java 21, depending on customer needs. However, this support is limited to runtime and does not extend to compile-time. This means that the generated applications must still be compiled with Java 11, and cannot be compiled with any higher version yet.

<!-- truncate -->

## Customer Feedback

During our planning process and to better understand our customers' needs, we conducted a survey. As expected, there was no consensus—each customer has unique requirements; preferences regarding Java version upgrades. 

Some customers expressed a preference to stay on Java 17 because their internal libraries used in WaveMaker applications are not yet compatible with Java 21. However, they recognize the need to upgrade to Java 21 eventually.

Some customers were eager to adopt the latest version, to be ahead of the curve and plans to shift directly to Java 21.

> If we were to upgrade to Java 17 by default, it might not meet the needs of all customers. Therefore, we've decided to give customers the flexibility to choose the Java version that best suits their specific requirements.

## Our Solution

In response to these varying needs, we've decided to offer our customers complete flexibility in choosing the Java version. We plan to support Java 17, Java 21, and future versions (including Java 25 when available) in our platform. Customers will have the option to choose the Java version for each project individually. Starting with our **11.9 release on October 21, 2024**, all new projects will default to Java 17. However, customers can easily switch to Java 21 (or future versions like Java 25) through the Project Settings dialog if desired. This flexibility empowers our customers to tailor their environments to their specific needs.

## What this means for you

:::impact
Starting with the 11.9 release (as planned on October 21, 2024), please ensure that you update your build system and deployment environment so they are compatible with Java 17 for both compiling and running applications, which will be the default starting with the 11.9 release. If you prefer to use Java 21, you can easily make the switch.
:::

By providing this flexibility, we're committed to supporting our customers' evolving needs and ensuring the continued success of our platform. For more information or to address any concerns, please reach out to our [support team](mailto:support@wavemaker.com).





