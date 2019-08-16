---
title: "Concurrency and Record Locking in WaveMaker"
id: ""
---

## Case

How to handle the scenario wherein two users update a row in a Database Table at the same time.

The document explains the implementation for obtaining concurrency and record locking in WaveMaker.We will be using MariaDB on MySQL Cloud setup.

1. [a MariaDB database](http://[supsystic-show-popup id=106]) See the following the [link](/learn/app-development/services/database-services/working-with-databases/#integrating-database) for details
2. a table with the following columns:
    - \- type integer,
    - \- type String name, and
    - \- type long.
3. to the File Explorer and navigate to the following directory:
    
    <project\_name>/services/<database\_name>/src/com/<project\_name>/<database\_name>/<table\_name>
    
    - @Version annotation for the version column as shown below: [![](../assets/concurrency_annot.png)](../assets/concurrency_annot.png)
    - the below import statement
        
         javax.persistence.Version;
        
        : Please note the @Version annotation added in the above step might get reverted each time a DB re-import operation is performed, hence replace the @Version after each DB re-import.
4. a Page in the app
5. and drop a Data Table widget into the page and set the data source as the table/entity designed in Step #2.
6. the Advanced Settings of the Data Table widget and uncheck the Show property for the version column. [![](../assets/concurrency_DTAS.png)](../assets/concurrency_DTAS.png)
7. the application and insert/update values into the Data Table widget. When two users update a row in the data table at the same time, only one of the transactions will be completed whereas the other call will fail with an error message.
