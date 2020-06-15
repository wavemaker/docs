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

## Problems in a micro service architecture

Although micro services make it easy for the services to be micromanaged by individual owners, it poses a challenge to the consumer of these APIs. For example a front end app that wants data which may be served at different micro services, the client has to make an API call to each microservice and combine the data to finally consume it in the UI elements. There is also the problem of over fetching and under fetching with these APIs. There could be certain fields in the data from one API, which the UI client may not even need, but still a bloated data is fetched.

Let's consider a simple example of a bookstore app with just two entities, a `Book` and an `Author`. Each entity is maintained by an individual microservice.

![MicroServices_Architecture Example](/learn/assets/GraphQL_Example.png)

In order to display details of a book, minimum two API calls are required to be made, one to get Book info and one to get the respective Author info.
Similarly, to display an Author details with all the Books written by them, two API calls are required to be made, one to get Author info and one to get the list of books for that author.

This approach has visible issues such as:
- multiple API calls required to be made to get relevant data, resulting into chattiness between client and server
- this makes the app brittle and multiple calls slow down the app
- since each micro service is now exposed to the client, all of them have to be made secure

## GraphQL in a micro service architecture

In order to solve this problem, the framework that is being widely used these days is GraphQL. One way to look at it is that GraphQL can be leveraged as an API gateway for interacting with multiple micro services, each dedicated to a single resource type while living alongside standard REST routes.

GraphQL and micro services are a perfect fit, because GraphQL hides the fact that you have a microservice architecture from the clients. From a backend perspective, you want to split everything into micro services, but from a frontend perspective, you would like all your data to come from a single API. GraphQL lets you split up your backend into micro services, while still providing a single API to all your application, and allowing joins across data from different services.

If the bookstore scenario discussed above is implemented with a GraphQL middleware, the architecture would look something like below:
![GraphQL_MicroServices_Architecture](/learn/assets/GraphQL_MicroServices_Architecture.png)

## What is GraphQL

GraphQL is an API that was invented and open sourced by Facebook as a better replacement for REST. It can be understood as Query language for APIs, which enables declarative data fetching by exposing a single endpoint and responds to queries. In REST, there is always a dedicated endpoint for each type of request and can't be customized. In GraphQL, the client decides what data they need and that's the reason the client sends a query (payload) to the server and the server sends the data back as per the query request. There is where they get the name GraphQL GraphQL is, in many ways, one of the more powerful tools an API provider has in terms of providing singular endpoints to the consumer and controlling data flow.

Here is an example of a query to fetch an `Author` by `id`:

![Bookstore Query Example](/learn/assets/GraphQL_Query_Bookstore_Example.png)

## Type system in GraphQL
GraphQL’s powerful expressive ability mainly comes from its complete type system. Unlike REST, it regards all resources in the entire Web service as a connected graph, rather than a resource island, which can be accessed when accessing any resource. Access other resources through connections between resources.

The bookstore schema graph would look something like below:

![GraphQL Schema Example](/learn/assets/GraphQL_Schema_Example.png)

## Wiring data with a GraphQL query
GraphQL can simply be treated as the middleware of a back end system. Hence, it is very easy to plug it in with existing systems. For example, in NodeJS implementation of GraphQL, data against a query can be fetched via a `resolve` function, that simply returns a promise. The logic to query the data (e.g. calling an existing REST API) can be written in this resolve function.

For our bookstore app, the NodeJS implementation to fetch `Author` details by id would look something like below. Note the `resolve` function. Data here is fetched from a MongoDB model.
```
    author: {
        type: AuthorType,
        args: {id: {type: GraphQLID}},
        resolve(parent, args) {
            // fetch author by id from MongoDB
            return AuthorModel.findById(args.id);
        }
    }
```
Similarly, while defining the `Author` schema type object, the logic to fetch all `Books` under the author can be wired as below. Again, notice the resolve function.
```
const AuthorType = new GraphQLObjectType({
	name: 'Author',
	fields: () => ({
		id		: {type: GraphQLID}, 
		name	: {type: GraphQLString},
		age		: {type: GraphQLInt},
		books 	: {
			type: new GraphQLList(BookType),
			resolve(parent, args){
				return BookModel.find({authorid: parent.id})
			}
		}
	})
})
```

## Authentication and Authorization with GraphQL

Authentication and authorization are other issues that need to be considered when using GraphQL. Do we process them before or after the GraphQL parsing process?
To answer this question, you can think of GraphQL as a DSL (Domain Specific Language) on top of your own backend data acquisition logic. We just need to think of it as an intermediate layer that can be placed between the client and our actual data service (or multiple services).
Then consider authentication and authorization as another layer. GraphQL is not useful in the actual implementation of authentication or authorization logic because it does not mean it. However, if we want to place these layers behind GraphQL, we can use GraphQL to pass the access token between the client and Auth API. This is very similar to the way we authenticate and authorize via the RESTful API.

## Integrating with a WaveMaker App

The GraphQL implementation (irrespective of the language implemented in) exposes a REST endpoint which is always a POST call with the query as request body. Now, this GraphQL endpoint can be imported into a WaveMaker app like any other REST API through the REST API import interface in WaveMaker studio. Once imported, UI can be built while binding to the GraphQL data in the form of a service variable without writing any code on the UI.
Follow the document on [working with REST APIs in a WaveMaker app](/learn/app-development/services/web-services/rest-services).



## Conclusion

GraphQL is really good at describing schemas but also stitch together different APIs and the end result is something that's really useful for someone building an app as querying for data will be very simple. Different APIs is exactly what we have when we have a micro services architecture. Using GraphQL on top of it all means we can reap the benefits from our chosen architecture at the same time as an App can get exactly the data it needs.

