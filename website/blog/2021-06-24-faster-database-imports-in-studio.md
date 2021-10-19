---
title: "WaveMaker Studio enables faster database imports"
author: Sanjana Raheja
---

WaveMaker platform offers the feature for applications to integrate with external databases like MySQL, SQLServer, Oracle, IBM DB2, PostgreSQL, Amazon Redshift, SAP HANA.
 
These database import flows have now been optimised to provide an enriched performance to the application developer. Let's have a look ahead on how this was done and what is the effect of this enhancement for the app developers.

<!-- truncate -->


### How did we enable faster database imports in Studio?

When a database is imported into an application, we read the schema and discover relationship between the tables and individual table schema as well. Armed with this information, WaveMaker generates REST API and create hibernate entities for each of tables in the database.

Like mentioned, during this import operation, to read the schema information and relationships metadata for the tables, there are metadata queries that are run in background on the system tables in the database. These queries have been optimised to their optimum performance to enhance the database import experience in the applications.

### How were the queries optimised?

To provide a short insight into how we optimised the queries, we followed the basic best practices: 
* Nested select queries were avoided
* Avoided iterating through the same resultset due to join operation
* Used left outer joins instead of general joins or where clauses
* Select field instead of select * from system tables
* Used WHERE instead of HAVING to define filters


### How does it impact the Studio developer?

As a result of this optimisation, the application developer would be able to see an enriched and optimised experience when working with database in the application. 
The import/re-import operations for database in the application should ideally be much more quicker than the earlier times.

On performing tests with multiple database types at our end, we observed that the modified queries executed at almost 600x faster as compared to the previous queries. 
As a result, the entire process of code generation for database entities during database import operation and the respective API generation powered by WaveMaker, is now alot more quicker for the application developer.

Note: Higher performance improvements were observed for databases with large number of constraints and relations defined for its tables. 

Based on the statistics generated at our end during the QA phase, the metadata for a database with around 800+ tables and heavy constraints for the entities was read in less than 4 seconds due to the optimised metadata queries. 

We hope, you too, have an enriched database import experience in the application. Do try out the database import feature and let us know your feedback. 
