---
title: "Mobile Integrations - Amazon SNS"
id: "mobile-integrations-amazon-sns"
---
---

Amazon SNS is an AWS service that is used to enable push notifications for mobile devices.  In this post, we will outline how to setup Amazon SNS with Google Cloud Messaging (GCM) and push messages to a device. In the end, this post will also show you how to integrate your WaveMaker mobile application with Amazon SNS service.

## Source code:

The code used in this example is available for download [here](https://gist.github.com/manishchaks/9464254c51a968dec96d325f982ba2ea).

## Prerequisites

1. Amazon SNS account
2. GCM account
3. Device ID of the android phone to which the push notification will be sent.
4. An application on the phone which will receive the notification

 

## Setup Amazon SNS with GCM and an Android device

1. Navigate to Amazon SNS console at [https://console.aws.amazon.com/sns/v2/home](https://www.google.com/url?q=https://console.aws.amazon.com/sns/v2/home&sa=D&ust=1468931595210000&usg=AFQjCNHHyxemR463akExnh_ricbnB__XnA)
2. Click on “Create topic” to give it a name
3. Save the new topic. It should appear in the list
4. Navigate to “Applications” and create a new application:. Choose “Google Cloud Messaging (GCM)” option. You will also need to provide your GCM API key
5. Select the newly created Application and click on “Create platform endpoint”.  You need to fill in your device’s token and a user-readable name
6. Once the application's endpoint is created, select your device and click “subscribe endpoint to topic”
7. Enter your Topic ARN. You can copy the ARN from the Topics section.

## Publishing a push notification to the device

1. Navigate to topics.
2. Select your topic and click “Publish to topic”
3. Give the message a subject and choose JSON format radio button. Click on “JSON message generator”
4. Type your message and click on “Generate JSON” message.
5. SNS will generate a JSON payload with message structure for all messaging platforms it supports. It is safe to ignore the other formats for now ( since we have not configured any services other than GCM). Take a note of the GCM message and click on Publish message when you’re ready to send the message
6. The message will appear as a Push Notification on your device

## Push message via SNS from WaveMaker

1. Setup the Amazon Javascript SDK in WaveMaker. Refer to the WaveMaker/Amazon Cognito blog post for details. The setup steps are common for all Amazon services.
2. In the  $scope.onPageReady = function() {} block, type the following code:![](https://lh4.googleusercontent.com/qx7OwuKbP-naEL7WPiNPbrr34JPQd0oUpPIc4f56rTAggYc9CV80iHjTZMei0pX5Ow9AOyiYEuM071SOisKaj1OK88TjsCwnl00XcRmkHMSNSasNDSz2yY85xD6m76qZEmMqQv5z)
3. You should receive a push notification on your device with the subject.

## Additional Information

1. All the setup steps outlined in this document ( setting up Topics, Subscriptions etc) can be done via Amazon SNS UI as well as the API
2. The official API reference is available at  [https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html](https://www.google.com/url?q=https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html&sa=D&ust=1468931595221000&usg=AFQjCNFCiVIre99EjDlqjtjfRFYG_wEp7w) and it is highly recommended to go through it.
3. A user can be restricted or allowed to post information to SNS via Amazon’s IAM policies. This is outlined at  [https://docs.aws.amazon.com/sns/latest/dg/UsingIAMwithSNS.html#d0e3147](https://www.google.com/url?q=https://docs.aws.amazon.com/sns/latest/dg/UsingIAMwithSNS.html%23d0e3147&sa=D&ust=1468931595222000&usg=AFQjCNFKQlEC8RQpMgbV_tPDJwYkntD8vA)
4. In this document, we dealt with the Amazon JavaScript SDK. It is also possible to accomplish all these steps using the Amazon Java SDK. The official documentation is at [https://docs.aws.amazon.com/sns/latest/dg/using-awssdkjava.html](https://www.google.com/url?q=https://docs.aws.amazon.com/sns/latest/dg/using-awssdkjava.html&sa=D&ust=1468931595224000&usg=AFQjCNFAQDjTUWQrBcZBOylrhlMU9g2bAw)

## See Also

[Amazon Mobile Analytics](/learn/hybrid-mobile/mobile-integrations-amazon-mobile-analytics/)  
[Push Notifications](/learn/hybrid-mobile/use-push-notification-wm-mobile-app/)  
[Invoking Web App APIs in Mobile Apps](/learn/hybrid-mobile/invoking-web-app-apis-mobile-apps/)  
