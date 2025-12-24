---
last_update: { author: "Priyanka Bhadri" }
---

# Working with Queries 

WaveMaker lets you build custom database queries and integrate them directly into your applications. Queries help you fetch, filter, or manipulate data across one or more tables — ideal for custom reports, dashboards, or dynamic UI behavior. Every query you save in WaveMaker is automatically exposed as a **REST API** that your UI layer can call. 

---

## Query Editor

Use the **Query tab** inside the **Database Designer** to write and manage your database queries.

- The editor supports **IntelliSense**, so pressing `Ctrl + Space` shows table and column suggestions. 
- You can write queries in either **Native SQL** or **Hibernate Query Language (HQL)**.
- Queries can include **parameters**, which can be marked as *required* — the associated app variable won’t run until all required values are provided. 
- After writing a query, you must **execute** it successfully before saving. Only then will the Save button become active. 
- Saved queries appear under **Database Resources** and can be reopened for edits. 

---

## Generated APIs

When you save a query, WaveMaker generates a **REST API** for it. 

- By default, a query yields a **paginated** API returning a list of records. 
- If your query returns at most a single row, you can set **Records → Single** to return just one object instead of pagination. 
- For every paginated query, WaveMaker also creates an **Export API** for downloading results as **Excel/CSV**.
---

## Types of Queries

WaveMaker supports two query types:

1. **Native SQL:** Direct database SQL, specific to your database’s dialect. 
2. **HQL (Hibernate Query Language):** A database-agnostic query language based on Java entities. 

---

## Using Queries in Your App

To use your query in the application:

1. Drag a **Data Table** (or another widget) onto your page. :contentReference
2. Set **Retrieve Data from → Services**. A new variable is created automatically. 
3. Select **Database APIs** as the service type and choose your query operation. 
4. Configure pagination and fields to display. 
5. Run the app to see results returned in the widget. 
---

## Parameterized Queries

Rather than hard-coding values, you can add **named parameters** to your SQL using the `:` prefix. 

Example:
```sql
select d.NAME,
       sum(ENDDATE - STARTDATE) as days
from VACATION v, EMPLOYEE e, DEPARTMENT d
where e.EID = v.EMPID
and e.DEPTID = d.DEPTID
and d.DEPTID = :did
group by d.NAME
```

When you add a parameter, specify its data type.

Parameters can be bound to server-side properties like:
- Logged-in User ID
- Current date
- Other server-side values

You can also bind values from UI widgets (e.g., a dropdown) by connecting query variables to widget data.

---

## REST Operation Types

WaveMaker maps query types to the appropriate HTTP methods:

| Query Type | HTTP Method |
|------------|-------------|
| SELECT | GET |
| INSERT | POST |
| UPDATE | PUT |
| DELETE | DELETE |

---

## Generated Code Structure

When a query is configured, WaveMaker auto-generates backend artifacts:

### Models

For each query:

- A **Request POJO** is created for INSERT/UPDATE queries
- A **Response POJO** is generated for SELECT queries
- Response classes include fields matching returned columns
- HQL queries may reuse existing model classes when possible

### Services

- A class called `QueryExecutorService` is generated under the database's service package
- Each query gets an `execute<QueryName>()` method
- SELECT queries return typed response objects (or paginated lists)
- Non-SELECT queries return an integer count of affected rows

### Controllers

- REST endpoints are exposed via a `QueryExecutorController`
- Method signatures in the controller mirror those in the service layer

---

## Notes and Limitations

- WaveMaker implements its own internal pagination, so using the **LIMIT** clause in queries is not supported
- When testing APIs, parameter names must match column names exactly (case matters) in filter queries
- Boolean values in query filters must be `true` or `false` (not 1/0)

---

## Summary

By following these steps, you can write powerful custom data logic directly in your database and expose it through auto-generated APIs — easily consumed by widgets and variables in your WaveMaker application.