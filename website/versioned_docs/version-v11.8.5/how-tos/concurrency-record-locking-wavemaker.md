---
title: "Concurrency and Record Locking in WaveMaker"
id: "concurrency-record-locking-wavemaker"
---
---

## Use Case

How to handle the scenario wherein two users update a row in a Database Table at the same time.

The document explains the implementation for obtaining concurrency and record locking in WaveMaker.We will be using MariaDB on MySQL Cloud setup.

## Steps

1. [Create a MariaDB database](/learn/app-development/services/database-services/working-with-databases/). See the following the [documentation link](/learn/app-development/services/database-services/working-with-databases/#integrating-database) for details
2. Add a table with the following columns:
    - ID - type integer,
    - Name - type String name, and
    - Version - type long.
3. Go to the File Explorer and navigate to the following directory:

```
<project_name>/services/<database_name>/src/com/<project_name>/<database_name>/<table_name>
```
    
- Add @Version annotation for the version column as shown below.
    
[![](/learn/assets/concurrency_annot.png)](/learn/assets/concurrency_annot.png)

- Add the below import statement.

```js
import javax.persistence.Version;
```

:::note
Please note the @Version annotation added in the above step might get reverted each time a DB re-import operation is performed, hence replace the @Version after each DB re-import.
:::

4. Create a Page in the app.
5. Drag and drop a Data Table widget into the page and set the data source as the table/entity designed in Step #2.
6. Open the Advanced Settings of the Data Table widget and uncheck the Show property for the version column. 

[![](/learn/assets/concurrency_DTAS.png)](/learn/assets/concurrency_DTAS.png)

7. Run the application and insert/update values into the Data Table widget. When two users update a row in the data table at the same time, only one of the transactions will be completed whereas the other call will fail with an error message.
