---
last_update: { author: "Priyanka Bhadri" }
---

# Working with Stored Procedures

In enterprise applications, business logic often resides inside the database in the form of **stored procedures**. These procedures encapsulate complex operations involving multiple tables, validations, or transactional logic. WaveMaker enables seamless integration of stored procedures by automatically exposing them as **REST APIs** that can be consumed by the application UI.

---

## What Is a Stored Procedure?

A **stored procedure** is a reusable SQL program stored and executed within the database. Instead of embedding complex SQL logic in the application layer, stored procedures allow developers to centralize logic at the database level and invoke it whenever required.

---

## Stored Procedure Support in WaveMaker

WaveMaker provides built-in support for working with stored procedures through the **Database Designer**.

Using the **Procedure editor**, developers can:
- Execute existing database procedures using the appropriate SQL syntax
- Define procedure parameters and their directions
- Automatically generate REST APIs for each procedure

Once saved, every stored procedure becomes a callable **Database API**, which can be easily bound to UI components using variables.

---

## Creating and Using a Stored Procedure

### Step 1: Create the Procedure in the Database
Stored procedures must already exist in the database. They can be created using native database tools such as:
- MySQL Workbench
- Oracle SQL Developer
- SQL Server Management Studio

---

### Step 2: Define the Procedure in WaveMaker
1. Open the **Database Designer**
2. Navigate to the **Procedures** tab
3. Add a new procedure using the database-specific syntax
4. Configure input and output parameters
5. Save the procedure

WaveMaker automatically generates the backend artifacts.

---

## Procedure Parameters

Stored procedures can accept and return values using parameters. WaveMaker supports the following parameter types:

| Parameter Type | Description |
|---------------|------------|
| **IN** | Accepts input values |
| **OUT** | Returns output values |
| **IN-OUT** | Used for both input and output |

Each parameter must be assigned a valid database data type. Some databases (such as Oracle) also support **cursor types** for returning result sets.

---

## Server-Side Parameters

WaveMaker allows stored procedure parameters to be populated automatically using server-side values, such as:
- Logged-in user ID
- Logged-in user name
- Current date, time, or timestamp

These values are resolved at runtime and do not require user input from the UI.

---

## Handling Result Sets and Cursors

When a stored procedure returns a result set:
- WaveMaker adds a `content` property to the API response
- A corresponding **POJO (Java model class)** is generated to represent the result structure

This enables type-safe access to returned data within the application.

---

## Database-Specific Procedure Syntax

Different databases use different syntax for invoking stored procedures:

### MySQL / DB2
```sql
CALL procedure_name(:param1, :param2);
```

### Oracle
```sql
CALL procedure_name(:param1, :param2);
```

If the procedure belongs to a package, prefix it with the package name.

### PostgreSQL
```sql
SELECT procedure_name(:param1, :param2);
```

### SQL Server (MSSQL)
```sql
EXEC schema_name.procedure_name :param1, :param2;
```

---

## Backend Code Generation

When a stored procedure is saved in WaveMaker, the platform automatically generates:

### 1. REST API

A REST endpoint is created for the procedure, allowing it to be invoked over HTTP.

### 2. Model Classes

Java POJOs are generated based on:

- Input parameters
- Output parameters
- Result sets (if any)

### 3. Service Layer

A `ProcedureExecutorService` class is created with a method named:

```java
execute<ProcedureName>()
```

### 4. Controller Layer

A REST controller exposes the service method, making the procedure accessible to the UI.

---

## Using Stored Procedures in the UI

To consume a stored procedure in the application:

1. Create a **Variable** bound to the generated Database API
2. Map input parameters to UI widgets (text boxes, dropdowns, etc.)
3. Bind output values to labels, tables, or charts
4. Invoke the API using events such as button clicks or page load

---

## Key Benefits

- Centralized business logic at the database layer
- Automatic REST API generation
- Strongly typed Java models
- Easy UI binding with variables
- Supports enterprise-grade database workflows

---

## Summary

WaveMaker simplifies working with stored procedures by converting them into fully functional REST services. This approach enables developers to leverage existing database logic while maintaining a clean separation between database, backend services, and UI layers.