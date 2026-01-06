---
title: "WaveMaker Studio enables faster database imports"
author: Sanjana Raheja
---

WaveMaker platform offers the feature for applications to integrate with external databases like MySQL, SQLServer, Oracle, IBM DB2, PostgreSQL, Amazon Redshift, SAP HANA.
 
These database import flows have now been optimised to enable faster database imports in the application. Let's have a look ahead on how this was done and how would this affect the app developers.

<!-- truncate -->


### How did we enable faster database imports in Studio?

When a database is imported into an application, the schema is read to discover relationships between the tables and individual table schema as well. Armed with this information, WaveMaker generates REST API and creates hibernate entities for each of tables in the database.

Like mentioned, during this import operation, to read the schema information and relationships metadata for the tables, there are a set of metadata queries for each respective database type, that are run in background on the system tables in the database. 
These metadata queries have now been fine tuned across all database types, keeping in accordance with the query standards listed for high performing queries.

### How were the queries optimised?

Below is a short insight about the approaches taken to fine tune the queries for better loading times:
* Nested select queries were avoided
* Avoided iterating through the same resultset due to join operation
* Used left outer joins instead of general joins or where clauses
* Select field instead of select * from system tables
* Used WHERE instead of HAVING to define filters


### How does it impact the Studio developer?

As a result of this enhancement, the WaveMaker developer will have a better experience when working with databases while building the application. 
The import/re-import operations of database in the application will be quicker than the earlier times.

From the tests we did, the some of the queries used in database import operation are 600x faster. 
As a result, the time taken for the entire process of code generation for database entities during database import operation and the respective API generation powered by WaveMaker, is almost cut by half approximately.

Note: The performance improvement ratio is proportional to the number of constraints and relations defined for the tables in the database. 

Based on the statistics generated at our end during the QA phase, the metadata for a database with around 800+ tables and heavy constraints for the entities was read in less than 4 seconds due to the optimised metadata queries. 

Do try out our database import feature and let us know your feedback. 
