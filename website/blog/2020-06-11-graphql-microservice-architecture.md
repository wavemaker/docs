---
title: "GraphQL in a Micro Services Architecture"
author: Vibhu Singhal
---

Today it is becoming more and more common to break down a monolithic architecture into micro services, thereby you get many small APIs that work independently. In micro services architecture, a bunch of services are broken down into independent smaller services which expose standard REST APIs to interact with.
<!-- truncate -->
They come with obvious advantages as these micro services are:
- Highly maintainable and testable
- Loosely coupled
- Independently deployable
- Organized around business capabilities
- Owned by a small team

Although micro services make it easy for the services to be micromanaged by individual owners, it poses a challenge to the consumer of these APIs. For example a front end app that wants data which may be served at different micro services, the client has to make an API call to each microservice and combine the data to finally consume it in the UI elements. There is also the problem of over fetching and under fetching with these APIs. There could be certain fields in the data from one API, which the UI client may not even need, but still a bloated data is fetched.

## GraphQL in a micro service architecture

In order to solve this problem, the framework that is being widely used these days is GraphQL. One way to look at it is that GraphQL can be leveraged as an API gateway for interacting with multiple micro services, each dedicated to a single resource type while living alongside standard REST routes.

GraphQL and micro services are a perfect fit, because GraphQL hides the fact that you have a microservice architecture from the clients. From a backend perspective, you want to split everything into micro services, but from a frontend perspective, you would like all your data to come from a single API. GraphQL lets you split up your backend into micro services, while still providing a single API to all your application, and allowing joins across data from different services.

![GraphQL_MicroServices_Architecture](/learn/assets/GraphQL_MicroServices_Architecture.png)

## What is GraphQL

GraphQL is an API that was invented and open sourced by Facebook as a better replacement for REST. It can be understood as Query language for APIs, which enables declarative data fetching by exposing a single endpoint and responds to queries. In REST, there is always a dedicated endpoint for each type of request and can't be customized. In GraphQL, the client decides what data they need and that's the reason the client sends a query (payload) to the server and the server sends the data back as per the query request. There is where they get the name GraphQL GraphQL is, in many ways, one of the more powerful tools an API provider has in terms of providing singular endpoints to the consumer and controlling data flow.

Here is an example of a query in GraphQL and the corresponding data fetched by the API:
![GraphQL_MicroServices_Architecture](/learn/assets/GraphQL_Example.png)

## Type system in GraphQL
GraphQL’s powerful expressive ability mainly comes from its complete type system. Unlike REST, it regards all resources in the entire Web service as a connected graph, rather than a resource island, which can be accessed when accessing any resource. Access other resources through connections between resources.  

## Authentication and Authorization with GraphQL

Authentication and authorization are other issues that need to be considered when using GraphQL. Do we process them before or after the GraphQL parsing process?
To answer this question, you can think of GraphQL as a DSL (Domain Specific Language) on top of your own backend data acquisition logic. We just need to think of it as an intermediate layer that can be placed between the client and our actual data service (or multiple services).
Then consider authentication and authorization as another layer. GraphQL is not useful in the actual implementation of authentication or authorization logic because it does not mean it. However, if we want to place these layers behind GraphQL, we can use GraphQL to pass the access token between the client and Auth API. This is very similar to the way we authenticate and authorize via the RESTful API.

## Conclusion

GraphQL is really good at describing schemas but also stitch together different APIs and the end result is something that's really useful for someone building an app as querying for data will be very simple. Different APIs is exactly what we have when we have a micro services architecture. Using GraphQL on top of it all means we can reap the benefits from our chosen architecture at the same time as an App can get exactly the data it needs.

## References
