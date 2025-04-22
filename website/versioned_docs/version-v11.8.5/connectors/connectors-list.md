---
title: "Connectors List"
id: "connectors-list"
sidebar_label: "List of Connectors"
---
---

Below are the Connectors developed by WaveMaker Team and are open-sourced.

Search the full list of Connectors in WaveMaker's Github account https://github.com/wavemaker/?q=connector&type=&language=.  

## Email Connector

Email Connector provides simplified APIs to integrate with any E-mail service provider. It provides methods for sending a plain text message, parameterized/templatized messages and also enables sending messages with attachments.

This Email Connector is hosted at https://github.com/wavemaker/email-connector

[Click here to see How-to use this Connector in WaveMaker App](/learn/how-tos/sending-email-using-java-service#docsNav).

## Jasper Reports Connector

Jasper Reports (https://community.jaspersoft.com/) is an open-source java reporting engine that enables Java developers to add reporting capabilities to their applications. Jasper Studio lets you build reports from various data sources, configure the look and feel of the report, and export the reports as xml files (called jrxmls).  

Jasper Reports Connector provides APIs to execute the jasper reports and export the report as PDF using the jasper templates (jrxmls). The WaveMaker application can invoke Connector by passing the required data source and parameter values and export it to various formats such as Html, PDF and Word doc.

The Connector is hosted at: https://github.com/wavemaker/jasper-reports-connector

[Click here to see How-to use this Connector in WaveMaker  App](/learn/how-tos/generate-pdf-file-using-jasper-reports)


## Excel Connector

Excel Connector provides APIs to parse the Excel file. Below, see How-to use this Connectors with tabular structures and return the table data as Java objects. The return response can be directly mapped to entity classes that enable it to easily persist the entities into database tables directly.

The Connector sources are hosted at: https://github.com/wavemaker/excel-connector

[Click here to see How-to use this Connector in WaveMaker App](/learn/how-tos/insert-data-from-excel)

## Azure File Storage Connector

Azure File storage (https://azure.microsoft.com/en-in/services/storage/files/) Connector provides simplified APIs to work with azure file storage to store and retrieve files from Azure Storage Service. Using this Connector, one can build the Upload, Download, List and Delete operations of files in Azure storage.

The Connector sources are hosted at: https://github.com/wavemaker/azure-file-storage-connector

[Click here to see How-to use this Connector in WaveMaker App](/learn/how-tos/azure-file-storage-connector)

## Camunda Connector

Camunda BPM is a lightweight, opensource platform for Business Process Management. Camunda is used primarily to automate Business Process WorkFlows and Decision Modeling into the applications.

This Connector will provide an easy API to interact with the Camunda business processes to invoke and get the status of those processes. This Connector will enable WaveMaker developers to integrate workflows and decision modeling in their application.

The Connector is hosted at: https://github.com/wavemaker/camunda-connector

## AWS S3 Connector

AWS S3 Connector provides simplified APIs to work with AWS S3 storage to store and retrieve files from it. Using this Connector, one can build the Upload, Download, List and Delete operations of files in S3.

The Connector sources are hosted at: https://github.com/wavemaker/aws-s3-connector

## MongoDB Connector

MongoDB is an open-source document database which means it stores the data in JSON-like documents and it is the leading NoSQL database. MongoDB is a cross-platform, document-oriented database that provides, high performance, high availability, and easy scalability. MongoDB works on the concept of collection and document.

The MongoDB Connector provides APIs to perform CRUD (Create, Read, Update, List) operations on the MongoDB documents.

The Connector sources is hosted at: https://github.com/wavemaker/mongodb-connector


## Kafka Connector

Apache Kafka (https://kafka.apache.org/) is an open-source, distributed publish-subscribe messaging system. Kafka is a fast, scalable, durable, fault-tolerant, and distributed messaging system by design. It was originally developed by LinkedIn, later, it became a part of the Apache project.

This Connector works as both Publisher and Subscriber for the messages. Using this Connector, you can send messages to Kafka Queue and also register a callback listener to receive messages from a Kafka Queue as and when a new message is published.

The Connector sources are found at: https://github.com/wavemaker/kafka-connector

## AWS Lambda Connector

With AWS Lambda, you can run code without provisioning or managing servers. You pay only for the compute time that you consume—there’s no charge when your code isn’t running. You can run code for virtually any type of application or backend service—all with zero administration. Just upload your code and Lambda takes care of everything required to run and scale your code with high availability. You can set up your code to automatically trigger from other AWS services or call it directly from any web or mobile app.

This Connector enables you to invoke the lambda function from a WaveMaker application.

The Connector sources are hosted at: https://github.com/wavemaker/aws-lambda-connector


## AWS SNS Connector

Amazon Simple Notification Service (Amazon SNS) is a web service that coordinates and manages the delivery or sending of messages to subscribing endpoints or clients. In Amazon SNS, there are two types of clients—publishers and subscribers—also referred to as producers and consumers. Publishers communicate asynchronously with subscribers by producing and sending a message to a topic. Subscribers (that is, web servers, email addresses, Amazon SQS queues, AWS Lambda functions) consume or receive the messages.
The AWS SNS Connector enables you to add Push Notifications capability to WaveMaker web and mobile applications. It leverages SNS service and uses the FCM (Firebase Cloud Messaging) to send the notification to Web Browsers, Android and iOS Devices.

The Connector sources are found at: https://github.com/wavemaker/aws-sns-connector

## Twilio Connector

Twilio is a cloud based communication platform which performs communication functions using its API's. Twilio lets you receive SMS, MMS, WhatsApp, Voice messages or even respond to the messages and many more services.

This connector exposes API's to send messages to and receive messages from Twilio using WaveMaker application.

The Connector sources are found at: https://github.com/wavemaker/twilio-connector

[Click here to see How-to use this Connector in WaveMaker  App](/learn/how-tos/twilio-connector)

## Google Cloud File Storage Connector

Cloud Storage is a flexible, scalable, and durable storage option for your virtual machine instances. Google Cloud File Storage Connector provides simplified APIs to work with google cloud file storage to store and retrieve files from Cloud Storage buckets. Using this Connector, one can  Upload, Download, List and Delete operations of files in Google cloud storage. This connector exposes api to interact with Google cloud file storage from WaveMaker application. 

The Connector sources are found at: https://github.com/wavemaker/google-cloud-file-storage-connector
