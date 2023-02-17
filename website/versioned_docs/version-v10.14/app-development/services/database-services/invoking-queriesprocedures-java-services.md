---
title: "Invoking Queries/Procedures from Java Services"
id: "invoking-queriesprocedures-java-services"
sidebar_label: "Queries & Procedures - Java Services"
---
---
As mentioned in previous documents, there will be a service method generated for each query and procedure. See here for [query service methods](/learn/app-development/services/database-services/working-with-queries/#query-architecture) and [procedure service methods](/learn/app-development/services/database-services/working-stored-procedures/#procedure-architecture). We can use these methods to invoke those in java services.

## Autowiring of Services
You can inject query and procedure services using spring dependency injection.

Example:
```
@Autowired
private HrdbQueryExecutorService queryExecutor;
```
## Invocation of Services
As specified each query and procedure have a method in the service layer. You can call these methods to execute the query or procedure.

[![](/learn/assets/queryproc_java.png)](/learn/assets/queryproc_java.png)

## Securing Query/Procedure APIs

There are two ways to configure API visibility:

### Security
You can configure API permissions from Security dialog. Here you can configure which user can access a particular API depending on User Roles.

[![](/learn/assets/queryproc_security.png)](/learn/assets/queryproc_security.png) 

### API Designer
From API Designer you can configure API visibility by changing Visibility options.

[![](/learn/assets/queryproc_api.png)](/learn/assets/queryproc_api.png)

