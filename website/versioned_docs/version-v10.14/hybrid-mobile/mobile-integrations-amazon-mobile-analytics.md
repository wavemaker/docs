---
title: "Mobile Integrations - Amazon Mobile Analytics"
id: "mobile-integrations-amazon-mobile-analytics"
---
---

Amazon Mobile Analytics(AMA) is a service provided under the aegis of the AWS Mobile Services.  AMA gives complete details about the users, revenues, subscriptions, in-app behavior and more such details and allows you to view the charts in the mobile analytics console.  In this post, we will let you know how to integrate your WaveMaker mobile application with Amazon Mobile Analytics service and view all the statistics regarding your mobile application.

For this post, we will track analytics of a user previously authenticated using Amazon Cognito. This will illustrate tracking the use case of "Daily Active Users". Note that it is possible to use Mobile Analytics without Cognito - but this means we cannot track Daily Active Users and other user-specific metrics.

## Source code:

The code used in this example is available for download [here](https://gist.github.com/manishchaks/9464254c51a968dec96d325f982ba2ea).

## Steps to follow

1. Setup Amazon Cognito with WaveMaker as outlined in this post.
2. Navigate to [https://console.aws.amazon.com/mobileanalytics/home/#/overview?consoleState=wizard.createApp](https://www.google.com/url?q=https://console.aws.amazon.com/mobileanalytics/home/%23/overview?consoleState%3Dwizard.createApp&sa=D&ust=1468925908749000&usg=AFQjCNF6jmgevKZirX_BB6DyOkTL09pT7A)
3. Create a new app as shown
4. Setup your WaveMaker project as outlined in Amazon Cognito setup guide.
5. Download Amazon Mobile Analytics JS from [https://github.com/aws/aws-sdk-mobile-analytics-js](https://www.google.com/url?q=https://github.com/aws/aws-sdk-mobile-analytics-js&sa=D&ust=1468925908750000&usg=AFQjCNG59Cfff2_uJyOVaA5W8OHFrspkIQ) and place it in the web apps directory
6. Include the relevant files in index.html ( again, as done for Amazon Cognito)
7. It is now possible to use the Amazon JS SDK  and make Mobile Analytics API calls to push analytics data to the dashboard.
8. Run the app and then navigate to the [Amazon Mobile Analytics console](https://console.aws.amazon.com/mobileanalytics/home/#/overview) - you should see the analytics getting captured Note that it may take Amazon up to 60 minutes for its data to start showing up
9. Refer to the JS API documentation for things like custom events and sessions: [https://github.com/aws/aws-sdk-mobile-analytics-js/blob/master/README.md#additional-options](https://www.google.com/url?q=https://github.com/aws/aws-sdk-mobile-analytics-js/blob/master/README.md%23additional-options&sa=D&ust=1468925908751000&usg=AFQjCNEAfgoEnkHiUsWhzhoPuGgmMUH_yQ)
10. Fairly detailed analytics reports are available if the API is used properly

## Conclusion

Using the approach outlined above, any WaveMaker application can obtain analytics data for an application and pushed it via API calls to the Amazon Mobile Analytics dashboard.

## See Also

[Amazon SNS](/learn/hybrid-mobile/mobile-integrations-amazon-sns/)  
[Amazon Mobile Analytics](/learn/hybrid-mobile/mobile-integrations-amazon-mobile-analytics/)  
[Push Notifications](/learn/hybrid-mobile/use-push-notification-wm-mobile-app/)  
[Invoking Web App APIs in Mobile Apps](/learn/hybrid-mobile/invoking-web-app-apis-mobile-apps/)  
