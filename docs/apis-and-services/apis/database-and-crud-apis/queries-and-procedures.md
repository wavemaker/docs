---
last_update: { author: "Priyanka Bhadri" }
---

# Queries and Procedures



WaveMaker supports creating **custom database queries** to address data access scenarios that are not covered by standard CRUD operations. Queries allow you to retrieve, filter, aggregate, and modify data across one or more database tables.

Each saved query is automatically exposed as a **REST API**, which can be consumed by application widgets, variables, or external clients.

---

## When to Use Queries

Use database queries in the following scenarios:

- When CRUD APIs do not meet the required data logic
- When joining multiple tables is required
- When aggregation or calculated fields are needed
- When data must be filtered dynamically at runtime
- When paginated or exportable result sets are required

---

## Creating Queries

Queries are created and managed from the **Query** tab in the **Database Designer**.

### Query Editor

The Query Editor provides the following capabilities:

- **IntelliSense support**  
  Press `Ctrl + Space` to view available tables, columns, and query suggestions.

- **Supported query languages**
  - **Native SQL** – database-specific SQL syntax
  - **HQL (Hibernate Query Language)** – entity-based, database-independent queries

- **Query parameters**
  - Named parameters can be defined
  - Parameters can be marked as required
  - Queries cannot be executed until all required parameters are provided

- **Execution requirement**
  - Queries must be executed successfully before the **Save** option is enabled

- **Query management**
  - Saved queries appear under **Database Resources**
  - Queries can be reopened and modified as needed

:::note
Queries must be executed successfully before they can be saved.
:::

---

## Choosing Between SQL and HQL

WaveMaker supports both Native SQL and HQL. Use the following guidelines to select the appropriate option:

| Scenario | Recommended Option |
|--------|-------------------|
| Database-specific features | Native SQL |
| Database-independent logic | HQL |
| Entity-based relationships | HQL |
| Complex joins or aggregations | Native SQL |

---

## Parameterized Queries

WaveMaker supports **named parameters** in queries using the `:` prefix. Parameters allow values to be supplied dynamically at runtime.

### Example

```sql
select d.NAME,
       sum(ENDDATE - STARTDATE) as days
from VACATION v, EMPLOYEE e, DEPARTMENT d
where e.EID = v.EMPID
  and e.DEPTID = d.DEPTID
  and d.DEPTID = :did
group by d.NAME
```

### Parameter Configuration

Each parameter must be assigned a data type.

Parameters can be bound to:

- Logged-in user properties
- Current date or time
- Other server-side values

UI widgets can pass values to query parameters through application variables.

---

## Generated REST APIs

When a query is saved, WaveMaker automatically exposes it as a REST API. These APIs can be consumed by application widgets, variables, or external clients.

### API Behavior

**SELECT queries**

- Exposed as paginated APIs by default
- Return a list of records with pagination metadata

**Single-record queries**

- If a query returns at most one row, set **Records → Single**
- The API returns a single object instead of a paginated response

**Export APIs**

- Generated for all paginated SELECT queries
- Support exporting results in Excel and CSV formats

### REST Operation Mapping

WaveMaker maps query types to HTTP methods as shown below:

| Query Type | HTTP Method |
|------------|-------------|
| SELECT     | GET         |
| INSERT     | POST        |
| UPDATE     | PUT         |
| DELETE     | DELETE      |

---

<!-- ## Using Queries in an Application

Query APIs can be consumed directly in the application UI using WaveMaker widgets.

### Steps

1. Drag a Data Table or another data-driven widget onto the page.
2. Set **Retrieve Data From → Services**.
3. A variable is created automatically.
4. Select **Database APIs** as the service type.
5. Choose the required query operation.
6. Configure pagination and display fields.
7. Run the application to view the results.

--- -->

## Query Architecture

When a query is saved, WaveMaker generates backend components that follow a layered architecture.

### Generated Models

**SELECT queries**

- Generate a response POJO named `<queryName>Response`
- Fields correspond to the query output columns

**INSERT and UPDATE queries**

- Generate request POJOs

**Model package location**

```
<service_package>.models.query
```

**HQL queries**

- If an HQL query returns an existing entity, the corresponding entity model may be reused

---

### Generated Services

A `QueryExecutorService` class is generated in:

```
<service_package>.service
```

For each query, an `execute<queryName>` method is generated:

- Accepts query parameters and `Pageable` for pagination
- Returns:
  - `<queryName>Response` for SELECT queries
  - `Page<<queryName>Response>` for paginated SELECT queries
  - `int` for INSERT, UPDATE, and DELETE queries

Export methods (`export<queryName>`) are generated for paginated SELECT queries.

---

### Generated Controllers

A `QueryExecutorController` class is generated in:

```
<service_package>.controller
```

Responsibilities include:

- Exposing REST endpoints for query execution
- Delegating query execution to the service layer
- Handling export API requests

---

## Notes and Limitations

- WaveMaker applies internal pagination
- SQL LIMIT clauses are not supported

When testing query APIs:

- Parameter names must match column names exactly
- Case sensitivity applies in filter queries
- Boolean filter values must be specified as:
  - `true` or `false`
  - Not `1` or `0`
- In the Test tab, ensure that the sample value for the `q` parameter is provided in the correct format.

 Example:
   ```text
name = 'Engineering'
```

---

## Summary
Database queries in WaveMaker enable implementing custom data access logic while automatically exposing that logic as REST APIs. These APIs can be integrated directly with UI components and backend services, providing flexibility beyond standard CRUD operations.