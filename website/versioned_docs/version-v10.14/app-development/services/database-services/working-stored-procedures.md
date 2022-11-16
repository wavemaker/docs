---
title: "Working with Stored Procedures"
id: "working-stored-procedures"
---
---
There will be times when you want to display data from multiple tables or update/insert values into multiple tables. Queries and Stored Procedures come in handy in such instances. WaveMaker provides editors for Queries & Procedures for integrating them with the WaveMaker applications. Each query & procedure used in the WaveMaker application will be exposed as a REST API for the UI to consume and render the data.

A _stored procedure_ is a prepared SQL code that you save in your database so you can reuse the code over and over again.

Procedure tab from WaveMaker Database Designer can be used to execute procedures that are written in and imported from the database using the `call` command. Execute the procedure calls and save them for the usage within the app [by creating Variable using the generated APIs](/learn/app-development/variables/database-apis/).

[![](/learn/assets/db_procs.png)](/learn/assets/db_procs.png)

## Procedure Parameters

Calling Procedure will add the specified parameters. You can select the appropriate Parameter Type:

- IN for input parameter;
- OUT for output parameter; and
- IN-OUT for a combination parameter.

### Parameter Type

- You can specify the **data type** for each of the parameter. 

:::note
Some data types might be specific to the underlying database being implemented, for example, cursor data type is available only for Oracle database.
:::
- You can also set the parameter type as one of **Server Side Properties**.  
When you select this option while executing the procedure, the appropriate value is taken from the application rather than from user.   
 
Currently supported server defined properties are:
    - Logged in User Id
    - Logged in User Name
    - Current Date
    - Current Time
    - Current Date Time

- [See here on how Blob types are handled.](/learn/app-development/services/database-services/blob-support-queries-procedures/)
- Parameters can also be set to App Environment Properties which can be configured differently for different runtime environments ([know more](/learn/how-tos/using-app-environment-properties/))

### Defined & Undefined Cursors (Resultset)

Along with the configured OUT parameters, procedures can also return ResultSet (cursor), which is referred to as Undefined Cursor. When any procedure is returning Undefined Cursor, in Response an extra property is generated with name Content. A POJO also will be generated for that Response.

WaveMaker supports the execution of procedures/functions written using PL/SQL. You can find out more about [Stored Procedures here](http://www.oracle.com/technetwork/database/application-development/plsql/overview/index.html). In this section, we will be seeing how WaveMaker supports Stored Procedures with the help of an example. We are using a MySQL database.

There are two aspects to stored procedure usage - Creation and Invocation:

### Creation of procedures/functions

Procedure/Function needs to be created in the database itself. For MySQL DBs, you can use the **DB Shell** tab of [DB Tools](/learn/assets/db_tools.png). Any procedures you have in a database that you [import](/learn/assets/db_new.png) will be available for use.

1. The database we used contains an Employee table with Emp_ID, Name and City details. Here is the _Employee_ table that we have designed using the [DB Designer](/learn/assets/db_designer_schema.png). 

[![](/learn/assets/employee_schema.png)](/learn/assets/employee_schema.png)

2. The procedure entered in the DBShell under [DB Tools](/learn/assets/db_tools.png) would be:
   ``` 
    DELIMITER ;;
    CREATE PROCEDURE emp_in_out(IN in_city varchar(255), OUT total integer) 
      BEGIN SELECT COUNT(Emp_ID) 
            INTO total
            FROM Employee 
            WHERE City = in_city; 
      END;;
    DELIMITER ;
    ```
    A function would be:
    ```
    DELIMITER ;;
    CREATE FUNCTION emp_in_out(in_city varchar(255)) RETURNS integer 
      BEGIN DECLARE emp_tot INT;
            SELECT COUNT(Emp_ID) 
               INTO emp_tot
               FROM Employee 
               WHERE City = in_city; 
            RETURN emp_tot;
      END;;
    DELIMITER ;
    ```

### Invocation of procedures/functions from WaveMaker app

Procedures created in a DB can be accessed by creating a live service variable and associating it with the invocation of the procedure. Follow the steps given below to do the same: NOTE: This post explains the usage of stored procedures/functions in WaveMaker using the MySQL code. For the usage in different databases [check here](#db-specific-invocation).

1. In the **Database Designer,** select the **Procedure** tab, use the following code to invoke the above procedure.
    ```
    call emp_in_out(:city, :total)
    ```
    Use the following code to invoke the function:
    ```
    {{:total = call emp_in_out(:city)
    ```
2. Post 8.4.1 release, you can use CTRL+space to select from a list of Procedures available in the database.
3. This will add the parameters. Select the appropriate options - **IN** for input parameter; **out** for output parameter; and **in-out** for a combination parameter.
4. Specify the data type for each of the parameter.   
See [here](/learn/app-development/services/database-services/blob-support-queries-procedures/) for handling Blob types. 

:::note 
Some data types might be specific to the underlying database being implemented, for example, cursor data type is available only for Oracle database.
:::
5. **Save** the procedure.
6. [Create a variable](/learn/assets/var_sel.png) using the Database API generated on the save of the procedure. This variable will expose the parameters for binding. [More on Variable Creation](/learn/app-development/variables/database-apis/)
7. To use the Procedure, create a page with
    - an input text box - to accept the city name to be bound to the input parameter of the above procedure and
    - label to display the result.
8. The _in_ parameter is bound to the _datavalue_ property of the _text box_ from the **Variables** dialog
9. The _out_ parameter for display by binding to any widget property variable, here we are binding to the caption of a label.
10. Preview the app.

### DB specific invocation

- **MySQL/DB2** - the above documentation uses MySQL.
- **Oracle** - same as MySQL. In case, procedures are bundled in a package, need to prefix the package name to the proc_name.
- **PostgreSQL** - can be same as above or
    ```
    SELECT proc_name(:param_value1, :param_value2);
    ```
- **MSSQL & SQLServer**- Invoking Procedures:
    ```
    EXEC [Schema_name].[proc_name](:param_value1, :param_value2)
    ```
    Invoking Functions:
    ```
    Select * from function_name(:param_value1, :param_value2)
    ```

## Procedure Architecture

For all queries and procedures, there will be a Rest API generated with the Service layer. Along with the API, depending on the query or procedure type, request and response POJO classes are generated.

**Understanding generated Code** _File structure_ 

[![](/learn/assets/queryproc_files.png)](/learn/assets/queryproc_files.png)

### Models

Both _Request_ and _Response_ POJO classes are generated as: `<procedureName>Request/Response`

1. These classes are generated in a package: `<service_packagegt;.models.procedure`
2. Response classes generated for all procedures having at least one return property i.e OUT parameter or cursor.    

    **Example**:  
    a procedure with name `getEmployees` will generate `GetEmployeesResponse` class with the returned columns.

3. For Procedures not returning any properties, no POJO is generated, instead, Void is used as return type in the Service layer.

#### 4. For Procedures returning Cursor(s)
- For each cursor, new POJO class gets generated with name Response.  
 
**Example**:  
    procedure with name `getStudents` with cursor parameter `marks`, the POJO generated will be `GetStudentsResponseMarks`.  
     
    The generated type will be used in `<procedureResponse>` class with given property name. In the above-mentioned case, it will be marked with type `GetStudentsReponseMarks`.
- In the case of Undefined cursor returned i.e cursor not specified in parameters section.
    - using the field as `content` the POJO class will be generated as per the above case.  

    [![](/learn/assets/proc_cursor.png)](/learn/assets/proc_cursor.png)  

- Request classes will be generated for all procedures, with names starting `create`, `build`, `add`, `update`, `edit`, `set`.
    
### Services
    
This layer exposes the methods related to the configured query and procedures. Controller layer uses these methods to complete the user requests.

We recommend using methods from this layer in custom Java services.

- Class with name ProcedureExecutorService is generated in the .service package. For eg: for service hrdb, class name will be HrdbProcedureExecutorService.
- Method with name execute&lt;procedureName&gt; will be generated for all configured procedures.

:::important
- As mentioned in Models -> Procedures naming convention, if Request type generated for that procedure it will expected as argument otherwise all IN parameters expects as arguments.
- Response type will be &lt;procedureName&gt;Response. In case of procedure not returning any properties it uses Void
:::

[![](/learn/assets/proc_services.png)](/learn/assets/proc_services.png)

### Controller
    
- Controller class with name ProcedureExecutorController in package .controller.
- Rest API is generated for each configured query and procedure. Generated method signature will be same as service layer method signature.

[![](/learn/assets/proc_controller.png)](/learn/assets/proc_controller.png)
    
    