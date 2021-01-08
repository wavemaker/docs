---
title: "Understanding Scaling in WaveMaker Applications"
author: Swetha Kundaram
---

You have developed an exceptional application and when the demand for your application is increasing and you need to expand its accessibility, you should develop a plan to scale your application. Understanding how to scale an application means ensuring that your application can handle a larger number of users simultaneously.

What happens if you don't scale your application?

It is the point when an application can no longer handle additional requests effectively which will limit its scalability. This limit is reached when the resources run out, requiring more machines, or more capacity.

In this article, learn about scaling approaches and how WaveMaker scales an application.

<!-- truncate -->

## Understanding Scaling Approaches

Following are the two approaches for scaling an application.

1. Vertical Scaling
2. Horizontal Scaling


### Vertical Scaling

In simple terms, Vertical scaling means adding more resources to the server; for example, increasing the capacity of the CPU, RAM, and DISK space in a single machine to "scaling-up". Vertical scaling is limited to the capacity of a single machine. Therefore, scaling beyond that capacity often involves downtime when switching from a small machine to a bigger machine.

### Horizontal Scaling

Horizontal scaling means, it scales an application by adding more machines into the pool across the horizontal direction to "scale-out", and the scaling is based on partitioning the data. It replicates the application by growing the number of [nodes in the cluster](https://www.onixnet.com/insights/kubernetes-101-what-are-nodes-and-clusters#:~:text=Every%20cluster%20has%20one%20master,to%20be%20a%20single%20system.) by distributing the responsibilities of each node and providing additional end-points for client connections. 

### Which one is better for your application?

The decision depends on a number of factors. Is request volume steadily growing and/or is the current growth experiencing spikes that lead to service degradation. These types of considerations, coupled with an application’s unique make-up, need to be evaluated when determining the optimal scaling approach.

However, when you compare both approaches, scaling horizontally offers a benefit of elasticity. Instead of taking your server offline while you’re scaling up to a better one, you keep your existing pool of resources online while adding more to what you already have. This means, by adding more machines to the existing pool, you are not limited to the capacity of a single machine, and that makes it possible to scale your application with almost no-downtime and you do not get caught in resource-shortfall.

## WaveMaker's approach for Scaling Applications

Although horizontal scaling is the desirable approach for scaling an application, there are a few challenges that need to be addressed. Let's understand that first.

### How data partition can be a challenge in Horizontal scaling

The following image shows a deployment architecture of Horizontal scaling.

![Horizontal Scaling Deployment Architecture](/learn/assets/horizontal-scaling.png)

Since the data gets distributed among nodes and each node contains only a part of the data, the user session created by one node cannot be understood by the other node. When a user logins again, it would simply reject the request if it goes to another node.

To solve this problem, WaveMaker uses a distributed session registry. With this, user session created by one node is understood by the other node by persisting the user sessions in a distributed manner.

### Integration with Spring Session Module

To integrate an application with spring-session, WaveMaker has introduced spring-session-core as a runtime dependency. It works for all WaveMaker applications from the [release 10.6] along with MapSessionRepository as a Distributed Session Registry.

So, what does MapSessionRepository mean?



### Distributed Persistence of User Authentication Session Architecture looks

![Distributed Persistence of User Authentication Session](/learn/assets/session-persistence.png)






## Using REDIS as Distributed Session Registry



## Configure WaveMaker application

## Distributed Persistent of User Authentication sessions for WaveMaker app

In this post we will be looking at how we can scale wavemaker applications horizontally, specifically we will be looking at storing user authenticated sessions when the requests are served by different nodes using round-robin mechanism without using sticky sessions.

Since 10.6 wavemaker apps use spring-session-core libraries for session management. This module can offload the storage of the session state into external session stores. For example, Redis or a regular database. By default, in-memory map implementation works fine for a single node application. You can use other implementations as well such as redis, jdbc, mongodb, etc.



To solve this problem, WaveMaker has introduced Session Persistence. Using this feature, you can store sessions to handle many users.

You know that this is designed to specifically fit the role for your target market. Your next step is to solve what is fast becoming the happy problem of all growth-oriented companies: how to scale mobile app solutions in a way that really works.
