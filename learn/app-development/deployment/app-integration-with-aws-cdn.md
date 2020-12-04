---
title: "Deploy static content to AWS CDN for WaveMaker Apps"
id: ""
sidebar_label: "App Integration with AWS CDN"
---
---

Content delivery network (CDN) service that securely delivers data to customers globally with low latency, high transfer speeds, all within a developer-friendly environment.

For Integrate WaveMaker apps with AWS CDN use the following steps

- [Create an Amazon S3 bucket](#create-an-amazon-s3-bucket)
- [Configure Origin Access Identity](#configure-origin-access-identity)
- [Create an Amazon CloudFront distribution](#create-an-amazon-cloudfront-distribution)
- [WaveMaker App Build Process for CDN support](#wavemaker-app-build-process-for-cdn-support)

## Create an Amazon S3 bucket

- Sign in to the AWS Management Console and open the [Amazon S3 console](https://console.aws.amazon.com/s3/.) .
- Choose Create bucket, Next Enter Bucket Name and Select the region for the bucket.
- In Bucket settings for Block Public Access, choose the Block Public Access settings that you want to apply to the bucket.
- Go to bucket properties, enable static website hosting.
[![static website enable](/learn/assets/wme-setup/s3-static-website-enable.png)](/learn/assets/wme-setup/s3-static-website-enable.png)

- If website content require CORS add CORS rules in the bucket permission section(optional).for more details visit [aws s3 cors](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html)

```json
CORS example
[
    {
        "AllowedHeaders": [
            "Authorization",
            "*"
        ],
        "AllowedMethods": [
            "GET",
            "POST",
            "HEAD"
        ],
        "AllowedOrigins": [
            "http://example.mydomain.com"
        ],
        "ExposeHeaders": [],
        "MaxAgeSeconds": 300000
    }
]
```

## Configure Origin Access Identity

- To restrict access to content that you serve from Amazon S3 buckets,Create a special CloudFront user called an origin access identity (OAI) and associate it with your distribution.
- Using Origin Access Identity users can only access files through CloudFront, not directly from the S3 bucket.
- Sign in to the AWS Management Console and open the [CloudFront console](https://console.aws.amazon.com/cloudfront/.), at security section select origin access identity and create Origin Access Identity by providing comment.

## Create an Amazon CloudFront distribution

- Sign in to the AWS Management Console and open the [CloudFront console](https://console.aws.amazon.com/cloudfront/.), select Create Distribution
- On the first page of the Create Distribution Wizard, in the `Web` section, choose Get Started.
- At Origin Domain Name select previously created S3 Bucket, if you want to store content in any specific directory provide an origin path.
- select restrict buckets access as `yes` and select previously created existing Identity.
- At Grant Read Permissions on Bucket select `yes` for update bucket policy ,it will provide read permission to the origin access identity when you create the distribution.
[![CDN origin settings](/learn/assets/wme-setup/cdn-origin-setting.png)](/learn/assets/wme-setup/cdn-origin-setting.png)

- Provide Cache behaviour configuration details
[![CDN cache behaviour](/learn/assets/wme-setup/cdn-cache-behaviour-settings.png)](/learn/assets/wme-setup/cdn-cache-behaviour-settings.png)

- At distribution settings select Default CloudFront certificate or import custom SSL certificate , then click on create distribution by providing required values for creation.
[![CDN distribution settings](/learn/assets/wme-setup/cdn-distribution-setting.png)](/learn/assets/wme-setup/cdn-distribution-setting.png)

- Wait for few minutes for create distribution and after creating distribution note down the domain name of CloudFront distribution.

## WaveMaker App Build Process for CDN support

- WaveMaker app is consiting of frontend artifacts (html,css,js,images etc) and backend artififacts (Java Classes). The following approach helps you in generating separate artifacts for a WaveMaker application. The frontend artifact (static content) can be uploaded to Cloudfront for CDN and backend can be deployed to any web server.
- To generate two different artifacts from WaveMaker application use below command. This command takes CDN_URL as input. Configure your CDN before executing this command.
- Refer [WaveMaker app build with maven](/learn/app-development/deployment/building-with-maven) for more details on WaveMaker app building.

```shell
mvn clean install -P<profile-name> -Dcdn-url=<CDN_URL>
```

```shell
mvn clean install -Pdeployment -Dcdn-url=https://mydomain.cloudfront.net/my_app>/1234/
```

- The above command will generate a new folder called **target** in the project sources & generates `project.war` file and `ui-artifacts.zip` file in it. The `ui-artifacts.zip` file have static files of the application, You need to unzip the file `ui-artifacts.zip` and upload it to Amazon S3 bucket that we created in the previous steps. Use the following commands for unzip and upload to S3.

- For unzip the file to a specific folder
  
```shell
unzip ui-artifacts.zip -d <my-static-content-folder>
```

- For upload files to AWS S3 bucket

```shell
aws s3 sync <my-static-content-folder>/ S3_BUCKET
```
