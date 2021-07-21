---
title: "WaveMaker Studio enables faster database imports"
author: Sanjana Raheja
---

WaveMaker platform offers the feature for applications to integrate with external databases like MySQL, SQLServer, Oracle, IBM DB2, PostgreSQL, Amazon Redshift, SAP HANA.
 
In the application, the developer can configure the database connection settings during database import operation. Post this, the application developer is provided to choose from the list of tables and constraint information present in the database to proceed with the database import operation.

We have optimised this flow to provide an enriched performance to the end user. 

<!-- truncate -->


### How did we enable faster database imports in Studio?

When a user imports a database into Studio, there are a couple of queries that are run in background to fetch the table and constraints information from the system tables in the database. We have optimised these queries at our end to enable faster database imports in Studio.

### How were the queries optimised?

To provide a short insight into how we optimised the queries, we followed the below practices: 
* Nested select queries were avoided
* Few queries iterated over the same table resultset multiple times through join operation
* Used left outer joins instead of general joins


### How does it impact the Studio developer?

The developers connect to their databases from Studio for development purposes. 
As mentioned, since the queries to fetch the database metadata in Studio are now optimised, the application developer would now be able to see an enriched development experience in Studio.

The modified queries execute at almost 600x as compared to the previous queries. Hence, the code generation for database entities and the respective API generation, handled by Studio, is now much quicker than the previous times. 

Note: We have observed a higher performance improvement for databases having large number of constraints and relations defined for its tables. 

As per testing observations, we are now able to read a heavily loaded database of around 800+ tables, large number of constraints and relations for the entities, in less than 4 seconds & import all the 800+ tables in less than 2 mins for the source code & API generation in Studio.










