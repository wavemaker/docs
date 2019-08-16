---
title: "Mobile Integrations - Amazon SNS"
id: ""
---

SNS is an AWS service that is used to enable push notifications for mobile devices.  In this post, we will outline how to setup Amazon SNS with Google Cloud Messaging (GCM) and push messages to a device. In the end, this post will also show you how to integrate your WaveMaker mobile application with Amazon SNS service.

##  Source code:

The code used in this example is available for download[](https://gist.github.com/manishchaks/9464254c51a968dec96d325f982ba2ea)

1. SNS account
2. account
3. ID of the android phone to which the push notification will be sent.
4. application on the phone which will receive the notification

 

# Amazon SNS with GCM and an Android device

1. to Amazon SNS console at [://console.aws.amazon.com/sns/v2/home](https://www.google.com/url?q=https://console.aws.amazon.com/sns/v2/home&sa=D&ust=1468931595210000&usg=AFQjCNHHyxemR463akExnh_ricbnB__XnA)
2. on “Create topic” to give it a name
3. the new topic. It should appear in the list
4. to “Applications” and create a new application:. Choose “Google Cloud Messaging (GCM)” option. You will also need to provide your GCM API key
5. the newly created Application and click on “Create platform endpoint”.  You need to fill in your device’s token and a user-readable name
6. the application's endpoint is created, select your device and click “subscribe endpoint to topic”
7. your Topic ARN. You can copy the ARN from the Topics section.

# a push notification to the device

1. to topics.
2. your topic and click “Publish to topic”
3. the message a subject and choose JSON format radio button. Click on “JSON message generator”
4. your message and click on “Generate JSON” message.
5. will generate a JSON payload with message structure for all messaging platforms it supports. It is safe to ignore the other formats for now ( since we have not configured any services other than GCM). Take a note of the GCM message and click on Publish message when you’re ready to send the message
6. message will appear as a Push Notification on your device

# message via SNS from WaveMaker

1. the Amazon Javascript SDK in WaveMaker. Refer to the WaveMaker/Amazon Cognito blog post for details. The setup steps are common for all Amazon services.
2. the  $scope.onPageReady = function() {} block, type the following code:![](https://lh4.googleusercontent.com/qx7OwuKbP-naEL7WPiNPbrr34JPQd0oUpPIc4f56rTAggYc9CV80iHjTZMei0pX5Ow9AOyiYEuM071SOisKaj1OK88TjsCwnl00XcRmkHMSNSasNDSz2yY85xD6m76qZEmMqQv5z)
3. should receive a push notification on your device with the subject.

# Information

1. the setup steps outlined in this document ( setting up Topics, Subscriptions etc) can be done via Amazon SNS UI as well as the API
2. official API reference is available at  [://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html](https://www.google.com/url?q=https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html&sa=D&ust=1468931595221000&usg=AFQjCNFCiVIre99EjDlqjtjfRFYG_wEp7w) and it is highly recommended to go through it.
3. user can be restricted or allowed to post information to SNS via Amazon’s IAM policies. This is outlined at  [://docs.aws.amazon.com/sns/latest/dg/UsingIAMwithSNS.html#d0e3147](https://www.google.com/url?q=https://docs.aws.amazon.com/sns/latest/dg/UsingIAMwithSNS.html%23d0e3147&sa=D&ust=1468931595222000&usg=AFQjCNFKQlEC8RQpMgbV_tPDJwYkntD8vA)
4. this document, we dealt with the Amazon JavaScript SDK. It is also possible to accomplish all these steps using the Amazon Java SDK. The official documentation is at [://docs.aws.amazon.com/sns/latest/dg/using-awssdkjava.html](https://www.google.com/url?q=https://docs.aws.amazon.com/sns/latest/dg/using-awssdkjava.html&sa=D&ust=1468931595224000&usg=AFQjCNFAQDjTUWQrBcZBOylrhlMU9g2bAw)

4 Mobile Integrations

- [4.1 Amazon SNS](/learn/hybrid-mobile/mobile-integrations-amazon-sns/)
- [4.2 Amazon Mobile Analytics](/learn/hybrid-mobile/mobile-integrations-amazon-mobile-analytics/)
- [4.3 Push Notifications](/learn/hybrid-mobile/use-push-notification-wm-mobile-app/)
- [4.4 Invoking Web App APIs in Mobile Apps](/learn/mobile-app-development/invoking-web-app-apis-mobile-apps/)
