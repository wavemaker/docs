---
last_update: { author: "Priyanka Bhadri" }
---

# Queries

WaveMaker supports creating **custom database queries** to address data access scenarios that are not covered by standard CRUD operations. Queries allow you to retrieve, filter, aggregate, and modify data across one or more database tables.

Each saved query is automatically exposed as a **REST API**, which can be consumed by application components, variables, or external clients.

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


Queries are created and managed from the **Query** tab in the **[Database Explorer](../../../studio/workspaces/database-explorer.mdx)**. When creating queries, the editor provides several capabilities:

- **IntelliSense support** – press `Ctrl + Space` to view available tables, columns, and query suggestions.  
- **Supported query languages**:  
  - **Native SQL** – database-specific SQL syntax  
  - **HQL (Hibernate Query Language)** – entity-based, database-independent queries  
- **Query parameters** – named parameters can be defined, marked as required, and queries cannot be executed until all required parameters are provided.  

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
       sum(END_DATE - START_DATE) as days
from VACATION v, EMPLOYEE e, DEPARTMENT d
where e.EMP_ID = v.EMP_ID
  and e.DEPT_ID = d.DEPT_ID
  and d.DEPT_ID = :did
group by d.NAME
```

### Parameter Configuration

Each parameter must be assigned a data type.

Parameters can be bound to:

- Logged-in User ID
- Logged-in User Name
- Current Date
- Current Time
- Current Date and Time

Parameters can also be bound to **App Environment Properties**, enabling different values to be supplied based on the deployment environment (development, testing, production).

UI components can pass values to query parameters through application variables.

---

## Generated REST APIs

When a query is saved, WaveMaker automatically exposes it as a REST API. These APIs can be consumed by Wavemaker components, variables, or external clients.

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

When a query is saved in WaveMaker, the platform generates backend code that follows a layered architecture.

These artifacts are placed under the corresponding Database Service package and are organized into **models**, **services**, and **controllers**.

The structure shown below illustrates how query-related artifacts are generated and grouped within a Database Service.

### Generated Project Structure


```text
services/
└── hrdb/                             # Main HR database service
    ├── designtime/                   
    └── src/
        └── com/
            └── myapp/
                └── hrdb/
                    ├── controller/     # REST controllers for query execution
                    │   └── QueryExecutionController.java
                    │
                    ├── models/         # Generated POJOs
                    │   └── query/
                    │       └── <QueryName>Response.java
                    │
                    └── service/        # Query execution services
                        ├── HrdbQueryExecutorService.java
                        └── HrdbQueryExecutorServiceImpl.java
```


Any query created and saved in this Database Service is mapped into the models, service, and controller layers shown above.

### How Queries Map to This Structure

Any query—whether written in Native SQL or HQL—is automatically mapped into this architecture when saved:

- **Query output** → `models.query`
- **Execution logic** → `service`
- **REST exposure** → `controller`

This ensures consistent API generation, clean separation of concerns, and predictable backend behavior for all database queries.

### Generated Models

For SELECT queries, WaveMaker generates a response POJO  `<QueryName>Response`  `<service_package>.models.query` , with fields corresponding to the query output columns.
Both Request and Response POJO classes are generated as: `<queryName>Request/Response`

For INSERT and UPDATE queries, request POJOs are generated.

For HQL queries, if the query returns an existing entity, the corresponding entity model may be reused.


---

### Generated Services


WaveMaker generates a dedicated Query Execution Service responsible for executing all saved queries in `<service_package>.service`. The following service interface and implementation are generated:


- `<DatabaseName>QueryExecutorService` 
- `<DatabaseName>QueryExecutorServiceImpl`

For every saved query, the following methods are generated:

**Execution method:** `execute<QueryName>`

- Accepts query parameters and `Pageable` for pagination
- Returns:
  - `<queryName>Response` for SELECT queries
  - `Page<<queryName>Response>` for paginated SELECT queries
  - `int` for INSERT, UPDATE, and DELETE queries

**Export method:** `export<QueryName>`

- Generated for paginated SELECT queries
- Enables data export to Excel or CSV formats

---

### Generated Controllers

A `QueryExecutorController` class is generated in `<service_package>.controller`

**Responsibilities:**

- Exposing REST endpoints for query execution
- Delegating query execution to the service layer
- Handling export REST APIs to download results as Excel or CSV files

---

## Notes and Limitations

**Pagination:**

- WaveMaker applies internal pagination automatically
- SQL `LIMIT` clauses are not supported

**When testing query APIs:**

- Parameter names must match column names exactly
- Case sensitivity applies in filter queries
- Boolean filter values must be specified as `true` or `false` (not `1` or `0`)
- In the **Test** tab, ensure that the sample value for the `q` parameter is provided in the correct format

**Example:**

```text
name = 'Engineering'
```

---



## Summary

Database queries in WaveMaker enable implementing custom data access logic while automatically exposing that logic as **REST APIs**.

**Key capabilities:**

- **Custom data access** beyond standard CRUD operations
- **Automatic REST API generation** for all saved queries
- **Direct integration** with UI components and backend services
- **Layered architecture** with models, services, and controllers
- **Export functionality** for paginated queries

This approach provides flexibility and power while maintaining low-code productivity.

## How-To Guides

Learn more about working with databases and queries through these practical guides:

- [Working with Dynamic Query Clauses](/docs/guide/migrated-docs/queries-dynamic-clause) - Build flexible queries with runtime conditions


---