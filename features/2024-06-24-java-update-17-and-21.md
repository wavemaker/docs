---
title: "Support for Application Deployment with Java 17 and 21"
author: "Swetha Kundaram"
---
---

This blog post provides an important update for developers regarding the support for application deployments with Java 17 and 21. Starting with release 11.7.4, WaveMaker applications will now support deployment on web servers running Java 17 and Java 21, along with continued support for Java 11.

<!-- truncate -->

## Java 17 and 21 Deployment Support

While WaveMaker applications can now be deployed on web servers using Java 17 and Java 21, the features and syntax of these Java versions cannot be used as compilation still requires Java 11.

## What You Need to Do: Upgrade Your Deployment Container

To deploy applications with Java 17 or Java 21, you need to update the Java version within your deployment container.

## WaveMaker Online Users

If you're using Wavemaker Online (WMO), you don't need to worry about immediate impacts. By default, WMO uses Java 11, so there will be no immediate disruptions for current users. However, the applications can be deployed externally using Java 17 or Java 21.

## Frequently Asked Questions

#### Is upgrading to Java 17 or 21 mandatory?
No, upgrading is not mandatory.

#### Why the push for Java 17 and 21? 
Java 11 currently only has extended support. Libraries like Spring and other third-party libraries are actively being developed on Java 17 and above. From WaveMaker 12, we plan to move to Java 21 along with Spring and Hibernate upgrades.

#### Do I need to update my CI/CD pipeline?  
Yes, only if you want to deploy the application in Java 17 or Java 21.

#### Can I use Java 17 and 21 language features? 
No, only Java 11 language features and syntax can be used as code compilation requires Java 11.

#### Can I run Maven build using Java 17 and Java 21?  
Yes, Maven builds can be done using Java 17 and Java 21, but code compilation is done in Java 11.

#### Which web servers can the application be deployed?  
Any web servers that support Java 11/17/21 and Servlet 4.0, such as Apache Tomcat 9.x.