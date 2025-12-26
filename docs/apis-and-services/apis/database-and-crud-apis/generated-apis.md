---
last_update: { author: "Priyanka Bhadri" }
---

# Generated APIs

WaveMaker provides an API-driven approach, automatically generating REST APIs for Database Services, Java Services, and Security Services. The **API Designer** allows you to explore, manage, and test these APIs within the WaveMaker Studio.

---

## 1. API Designer

The **API Designer** is the central interface for managing all service APIs in your application. It provides:

- **API Exploration**: View all available APIs, their endpoints, and metadata.
- **Testing**: Test API calls directly within WaveMaker Studio without external tools.
- **Customization**: Modify Java Service APIs and control which endpoints are exposed.

All APIs—whether from Database Services or custom Java Services—can be viewed and configured here.

![alt text](assets/api-designer-overview.png)

---

## 2. Database APIs

WaveMaker generates multiple REST APIs for each database entity to support data management, querying, aggregation, export, and relationship handling. Below is an overview of the commonly generated APIs and their purpose.

### Key Features

- **CRUD Operations**: Create, Read, Update, and Delete records in tables.
- **Query & Procedure Access**: Expose custom queries and stored procedures as REST endpoints.
- **Design-time Control**: Use API Designer to configure request/response formats and endpoint visibility.
- **Security Integration**: Enforces authentication and authorization rules automatically.

### CRUD and Count Operations

WaveMaker Database APIs automatically expose CRUD operations for every table in your Database Service, along with a **Count** operation to efficiently determine the number of records in a table.

![alt text](assets/database-api-workflow.png)

## Create APIs

### `create<Entity>`

- Creates a new record in the database.
- Accepts entity data in the request body.
- Returns the newly created record along with its unique identifier.

**Example Use Case:**  
Creating a new entry through a form submission or an onboarding workflow.

---

## Read APIs

### `get<Entity>`

- Retrieves a single record using its primary key.
- Returns the complete details of the entity.

### `getBy<UniqueField>`

- Fetches a record using a unique column other than the primary key.
- Useful when business-specific identifiers are used instead of system-generated IDs.

### `find<Entities>`

- Retrieves a collection of records.
- Supports pagination, sorting, and optional query-based filtering.

**Example Use Case:**  
Displaying records in a table, list, or grid view.

---

## Update APIs

### `edit<Entity>`

- Updates an existing record by replacing all fields.
- Uses the HTTP `PUT` method.

### `patch<Entity>`

- Partially updates an existing record.
- Only the fields provided in the request are modified.
- Uses the HTTP `PATCH` method.

**Example Use Case:**  
Editing entity details or updating a limited set of attributes.

---

## Delete APIs

### `delete<Entity>`

- Deletes a record using its primary key.
- Ensures database constraints and referential integrity are maintained.

**Example Use Case:**  
Removing obsolete, duplicate, or invalid records.

---

## Count APIs

### `count<Entities>`

- Returns the total number of records for an entity.
- Supports optional filter conditions to count only matching records.
- Commonly used to support pagination and summary statistics.

---

## Filter APIs

### `filter<Entities>`

- Retrieves records based on dynamic filter criteria.
- Enables advanced searching without the need for custom queries.
- Can be combined with pagination and sorting.

**Example Use Case:**  
Search screens, filtered views, and conditional data retrieval.

---

## Aggregation APIs

### `get<Entity>AggregatedValues`

- Performs aggregation operations on entity data.
- Supports aggregation functions such as `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX`.
- Allows grouping by one or more fields.
- Accepts filter criteria to scope aggregation results.

**Example Use Case:**  
Dashboards, analytics widgets, and summary reports.

---

## Association APIs

### `findAssociated<RelatedEntities>`

- Retrieves records associated with a given entity based on defined relationships.
- Automatically manages joins and foreign key mappings.

**Example Use Case:**  
Displaying related or dependent records linked to a parent entity.

---

## Export APIs

### `export<Entities>`

- Exports entity records in a supported file format.
- Supports filters, sorting, and selective field export.

### `export<Entities>AndGetURL`

- Executes export operations asynchronously.
- Returns a downloadable URL, suitable for large datasets.

**Example Use Case:**  
Generating reports, performing audits, or sharing data externally.


**Notes:**
- All operations enforce authentication and authorization automatically.
- Input validation, error handling, and standardized responses are managed by WaveMaker.
- CRUD and Count operations can be combined with custom queries and stored procedures for advanced workflows.



**Explanation:**

1. **Database Service**: Represents your database tables, queries, and stored procedures.
2. **Generated REST API**: WaveMaker exposes these as secure endpoints supporting CRUD and custom operations.
3. **Clients / Modules**: Consume APIs without direct database access, while respecting security and authorization rules.


---


## 3. Benefits

- **Rapid Development**: No manual coding needed to expose database functionality.
- **Consistency**: Standardized REST endpoints for all Database Services.
- **Security**: Automatically inherits the app’s authentication and authorization settings.
- **Extensibility**: APIs can be customized using Java Services or additional logic.


## 4. Summary

WaveMaker automatically generates a comprehensive set of APIs that cover:

- Full CRUD lifecycle
- Partial and complete updates
- Filtering and counting
- Aggregation and analytics
- Relationship navigation
- Data export capabilities

These APIs are fully secured, configurable through the API Designer, and ready for consumption by internal modules or external clients—eliminating the need for manual REST API development.
