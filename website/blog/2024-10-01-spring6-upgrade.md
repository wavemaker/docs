---
title: "Upgrading to Spring 6: Effects on WaveMaker Applications"
author: "Praveen Chandra"
---
---

In our previous [post](/learn/blog/2024/09/24/javax-to-jakarta), we explored the importance of transitioning from the javax to jakarta namespace and why it is essential. Now, the next major step is upgrading the Servlet and Spring Framework used in WaveMaker applications.

This upgrade entails moving from **Servlet 4** to **Servlet 6** and **Spring 5** to **Spring 6**, ensuring that applications stay aligned with the latest web standards and development practices.

## Why Is the Servlet and Spring Upgrade Required?

As of **August 31, 2024 Spring 5** has reached its [end of life](https://spring.io/blog/2024/03/01/support-timeline-announcement-for-spring-framework-6-0-x-and-5-3-x). To stay up-to-date with the latest web standards and receive ongoing updates, upgrading to Spring 6 is crucial.

Spring 6 has been redesigned to support Jakarta EE, which in turn requires Servlet 6. Therefore upgrading to Spring 6 also **mandates** an upgrade to Servlet 6.

Additionally, Spring 6 requires [Java 17+](/learn/blog/2024/08/29/java-17-and-21-upgrade) and brings significant performance, compatibility, and security improvements. However, both Servlet 6 and Spring 6 are **not backward compatible**, so applications still using Servlet 4 and Spring 5 must be **upgraded**.

For a detailed list of changes refer to the official [Servlet 6](https://jakarta.ee/specifications/servlet/6.0/) and [Spring 6](https://github.com/spring-projects/spring-framework/wiki/What's-New-in-Spring-Framework-6.x) documentation.


## Additional Libraries to Upgrade

In addition to Servlet 6 and Spring 6, several key dependencies in WaveMaker applications will be updated to align with the latest standards:
- [Spring Security 6](https://docs.spring.io/spring-security/reference/index.html)
- [Hibernate 5 (Jakarta)](https://in.relation.to/2021/06/02/hibernate-orm-550-final-release/)
- [Hibernate Validator 8](https://docs.jboss.org/hibernate/stable/validator/reference/en-US/html_single/)


## How Does This Impact Existing WaveMaker Applications?

WaveMaker applications currently use Servlet 4 and Spring 5. When upgrading to Servlet 6 and Spring 6, several breaking changes will occur:

- **Namespace Change**: All code that references ```javax.*``` packages (e.g., ```javax.servlet```, ```javax.persistence etc```) will no longer work as these packages have been moved to ```jakarta.*```. This affects Java classes, libraries, and annotations used throughout the application
- **Custom Code Using Deprecated Servlet 4/Spring 5 Classes**: If your application’s custom code uses classes or methods that were deprecated in Servlet 4/Spring 5, they might have been removed. This could result in compilation or runtime errors. For example the ```CommonsMultipartFile``` class(based on Apache Commons FileUpload), previously used for file uploads in Spring 5, has been removed in Spring 6. The framework now uses the ```StandardMultipartFile```, which is based on the Jakarta Servlet API for handling multipart file uploads.
- **Third-Party Dependencies**: Dependencies that still rely on javax might break and may need to be upgraded.


## Are Your Current Web Servers Compatible?

Your current web servers are based on Servlet 4 and are **not compatible** with Servlet 6. Common web servers currently used with WaveMaker applications include:
- Tomcat 9.x
- Websphere 19.x+ 
- WildFly 15+
- WebLogic 14c+ 

To support the Servlet 6 upgrade, you will need to transition to web servers that are compatible with Servlet 6 and [Java 17/21](/learn/blog/2024/08/29/java-17-and-21-upgrade). Below are the minimum compatible versions: 
- **Tomcat 10.1+**
- **JBoss WildFly 27+**
- **IBM Websphere Liberty 23.0.0.9+**

## Next Steps?

:::impact
Beginning with our **11.9 release on October 21, 2024**, all new WaveMaker projects will use **Servlet 6** and **Spring 6**, and existing applications will be **migrated** automatically. However, some may still require manual intervention in specific use cases. 
:::

In upcoming posts, we’ll explore which parts of the migration are automated and what changes will need to be made manually.
