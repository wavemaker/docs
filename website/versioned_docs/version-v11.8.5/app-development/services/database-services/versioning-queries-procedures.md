---
title: "Versioning of Queries and Procedures"
id: "versioning-queries-procedures"
sidebar_label: "Version Queries & Procedures"
---
---
In 8.4.1 release, WaveMaker has changed field naming strategy for result columns of queries and procedures. This has resulted in two versions of Queries and Procedures for backward compatibility:

- v1 for older/existing query/procedures and
- v2 for query/procedure created post-release 8.4.1

## Versions

Following is how WaveMaker implements these two versions:

- New service layer with suffix **_V1** is generated for all services having old query or procedures to handle backward compatibility due to method signature changes in the new service layer.  
    For example, `HrdbQueryExecutorService_V1` Changes:  

    - Old service always returned `Page<Object>` for select query. But new service returns `Page<<queryName>Response>`.
    - In old service, all parameters were configured as method arguments but in the new service, for **INSERT**/**UPDATE** parameters, are wrapped in Request class.

- The controller always uses latest service layer i.e `QueryExecutorService`.
- All existing Java services are migrated to use V1 service layer instead of the new service to handle backward compatibility.
    - In most of the cases existing Java, services will work as before but there might be a chance of `ClassCastExceptions due` to Runtime type casts i.e casting returned column value to the desired type.
    - To fix above-mentioned _ClassCastException_ we recommend migration of all existing Java services to use latest Query/Procedure Executor service instead of V1.

### Advantages 
Because of design time POJO generation, if any query/procedure meta is updated then the execution will fail at compile time rather than at Runtime. This will save a lot of testing and debug time.

You can easily read the response data with the help of POJO classes. All properties can be accessed using getters instead of map.get.s

## Migration to V2

Steps for manual Java Service Migration/Using latest Services

1. Inject query/procedure service class (i.e `Query/ProcedureExecutorService`) by using `@Autowired`.
2. For existing Java services, you can either modify the class name from `Query/ProcedureExecutorService_V1` to `Query/ProcedureExecutorService` or inject a new field.

Execute query/procedures in the same way as following:

- Response type changed to Page instead of `Page<Object>` for **SELECT** queries.
- Request type changed for INSERT/UPDATE queries to `<queryName>Request`.
- For **SELECT** queries Pageable argument moved to last.
- For Procedures return type changed to `<procedureName>Response` instead of `List<procedureNameResponse>`
- Request type changed for methods starting `create`, `add`, `build`, `edit`, `set`, `update` with `<procedureName>Request`.
