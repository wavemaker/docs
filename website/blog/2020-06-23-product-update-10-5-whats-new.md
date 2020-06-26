---
title: "WaveMaker releases 10.5 version"
author: Swetha Kundaram
---

With working from home as a new normal, we have released yet another major update with some of the most interesting features in it. To learn about our detailed list of features and fixes, see [WaveMaker Release Notes 10.5](/learn/wavemaker-release-notes/v10-5-0).

As a modern development team, we are adapting to the latest technology trends. If there is something you feel WaveMaker should have, do let us know [here](mailto:info@wavemaker.com).

Now, let's jump straight to see what's new in this release!

<!-- truncate -->

## Deploying to CDN

***Well, speed matters!***

Ensuring a consistent user experience is important not just in terms of features and looks, but also in terms of speed. With our 10.5 update, we are all set to adapt CDN into WaveMaker. This allows WaveMaker apps to work together with geographically distributed servers that enable fast, reliable, and secure delivery of the content. Now, you can deploy your apps with CDN automatically. To read our developer blog, see [delivering your apps faster with WaveMaker](/learn/blog/2020/06/23/deliver-faster-applications-with-wavemaker).

## Custom Formatter

***Customize data more SPECIFIC to your audience!***

You can now write custom data formatter to convert data from services to a well-formatted data before showing it in the UI. You can control how you want to show data depending on the role, country, currency, and more. 

For example, John is a card-holder, he can view his card details without any restrictions, whereas the bank admin cannot see his complete **card number**, which is masked with specific characters as shown below.

![custom formatter](/learn/assets/custom-formatter.png)

To learn about the usage of this feature, see [Using Custom Formatter for masking sensitive data](/learn/how-tos/using-custom-formatter).

## Data Table Widget Summary Row

***If Data Table is your widget, this is for you!***

A table is considered as the most preferred method to represent data that talk! And having to do more with the Data Table adds so much value to it. And we are thrilled to add a summary row function, which helps you to calculate the summary with in-built javascript functions like sum, minimum, maximum, percent, and more.

![summary row function](/learn/assets/datatable_summaryrow4.png)

To learn more about how it works, check out the [Data Table summary row documentation](/learn/app-development/widgets/datalive/datatable/summary-row).

## Smart Widget Templates

***Just pick, click and apply away!***

For [Cards](/learn/app-development/widgets/datalive/cards), [List](/learn/app-development/widgets/datalive/list), and [Wizard](/learn/app-development/widgets/container/wizard) widgets, you can now quickly choose alternative UI representations while you can visually see the changes as you click on the template - just how the SmartArt works in PowerPoint. 

![widget template](/learn/assets/widget-template.gif)

For more information about applying a template as well as a layout from the canvas, see [Using Smart Template and Layout for Widgets](/learn/how-tos/widget-template-layout).

## Extended Micro-frontend Support

***Smaller apps are easy to develop, maintain and communicate with each other!***

In the last [update 10.4](/learn/wavemaker-release-notes/v10-4-0), we introduced support for building Micro-frontend applications. This architecture encourages the independent delivery of frontend applications with a Node-based CLI. A CLI helps to convert **[WaveMaker](https://www.wavemakeronline.com/login/login)** apps to **[Single-spa](https://single-spa.js.org/)** compatible app. This release includes the version update of `single-spa-angular` to 3.4  for better support of Angular 7 projects.

## Well, that's not it

Some of the critical bugs have been fixed in the release. See the list of [bug fixes here](/learn/wavemaker-release-notes/v10-5-0/).

And most importantly, [despite the lockdown, our team is staying agile and adapting](https://www.wavemaker.com/delivering-major-product-update-from-home/) to be able to deliver product updates. Stay safe and go ahead and create that application to digitise and create new efficiencies.
