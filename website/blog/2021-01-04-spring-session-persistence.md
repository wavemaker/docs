---
title: "Scaling WaveMaker Application"
author: Swetha Kundaram
---

You have developed an exceptional application and you know that in coming-months many people are going to use it. That means, more traffic, and more customers. Your next step should be to develop a plan to scale your application. Understanding how to scale an application means ensuring that your application can handle a larger number of users.

In this article, learn about scaling approaches and how WaveMaker scales the application.

<!-- truncate -->

## Understanding Scaling Approaches

Following are the two approaches for scaling an application.

1. Vertical Scaling
2. Horizontal Scaling


### Vertical Scaling

In simpler terms, Vertical scaling means adding more resources to the server; for example, increasing the capacity of the CPU, RAM, and DISK space in a machine to increase its power. Vertical scaling is limited to the capacity of a single machine. Therefore, scaling beyond that capacity often involves downtime when switching from a small machine to a bigger machine.

### Horizontal Scaling

Horizontal scaling means, it scales an application by adding more machines into the pool across the horizontal direction, and the scaling is based on partitioning the data. It replicates the application by growing the number of [nodes in the cluster](https://www.onixnet.com/insights/kubernetes-101-what-are-nodes-and-clusters#:~:text=Every%20cluster%20has%20one%20master,to%20be%20a%20single%20system.) by distributing the responsibilities of each node and providing additional end-points for client connections. The following image shows the deployment architecture of Horizontal scaling.

![Horizontal Scaling Deployment Architecture](/learn/assets/horizontal-scaling.png)

### How distributing data among nodes can be a challenge

Since the data gets distributed among nodes and each node contains only a part of the data, the user session created by one node cannot be understood by the other node without persisting the user sessions in a distributed manner. It would simply reject the request when a user re-logins if the request goes to another node.

To solve this problem, WaveMaker uses distributed session registry.

## Integration with Spring Session Module

In order to integrate the wavemaker application to spring-session, we are introducing spring-session-core as runtime dependency for all WaveMaker applications since 10.6 along with MapSessionRepository as Distributed Session Registry


----

A major problem with Horizontal scaling is

One major problem which needs to be solved with horizontal scaling is that sessions should be persisted in a distributed system. Without persisting the user sessions in a distributed manner, the user session created by one node is not understood by other nodes and it rejects the request when the post login requests go to other nodes.
Horizontal scaling of WaveMaker application
Add the items that wm application is already taken care here...
Distributed Session Registry

## Integration with Spring Session Module

	In order to integrate the wavemaker application to spring-session, we are introducing spring-session-core as runtime dependency for all WaveMaker applications since 10.6 along with MapSessionRepository as Distributed Session Registry

## Using REDIS as Distributed Session Registry

## Configure WaveMaker application

## Distributed Persistent of User Authentication sessions for WaveMaker app

In this post we will be looking at how we can scale wavemaker applications horizontally, specifically we will be looking at storing user authenticated sessions when the requests are served by different nodes using round robin mechanism without using sticky sessions.

Since 10.6 wavemaker apps use spring-session-core libraries for session management. This module can offload the storage of the session state into external session stores (for example, Redis or a regular database). By default in memory map implementation is used which will work fine for a single node application. App developers can use other implementations as well such as redis, jdbc, mongodb, etc.
Distributed Persistence of User Authentication Session Architecture:

Image

To solve this problem, WaveMaker have introduced Session Persistence. Using this feature, you can store sessions to handle many users.



You know that it is designed to specifically fit the hole for your target market. Your next step is to solve what is fast becoming the happy problem of all growth-oriented companies: how to scale mobile app solutions in a way that really works.

Session persistence is a configuration where you can store sessions to handle a large number of requests. To address this, you should implement application scaling. There are two prominent ways the application can be scaled -  vertically or horizontally.






