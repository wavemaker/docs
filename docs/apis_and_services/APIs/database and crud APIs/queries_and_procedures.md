# Queries and Procedures

WaveMaker allows you to extend database access beyond automatically generated CRUD APIs by defining **custom queries** and **stored procedures**, which are exposed as REST APIs that your UI can consume.

### Query Editor

In the Database Designer, use the **Query tab** to build and save queries. You can write queries in either:

- **Native SQL** — Executes database-specific SQL directly  
- **Hibernate Query Language (HQL)** — Works on Java entity models rather than raw tables  

Saved queries automatically generate **paginated APIs**, including optional **Export APIs** (Excel/CSV).  

> **Limitation:** WaveMaker handles pagination internally, so `LIMIT` clauses in queries are not supported.

### Using Queries in Your App

After saving a query:

1. A REST API is auto-generated (viewable in **API Designer**)  
2. Create a **Database API variable** based on the query  
3. Bind the variable to a UI widget (e.g., Data Table) to display results  

Query parameters can be bound to UI controls to enable dynamic filtering.

### Stored Procedures

Stored procedures from your database can be imported and executed from WaveMaker:

- Each procedure becomes a REST API you can invoke  
- Supports **IN**, **OUT**, and **IN-OUT** parameters  
- Request and response **POJOs** are generated automatically  
- Procedure results can be bound to variables and UI widgets

### Generated Code Structure

For both queries and procedures:

- **Request/Response POJOs** for API input/output  
- **Service classes** like `QueryExecutorService` or `ProcedureExecutorService` for execution  
- **Controller classes** registering REST endpoints matching the service layer  

### How-to

1. **Create a Custom Query**
[Custom Query](#)

2. **Bind Query to UI**
[Bind Query](#)

3. **Create a Stored Procedure API**
[Stored Procedure](#)
  