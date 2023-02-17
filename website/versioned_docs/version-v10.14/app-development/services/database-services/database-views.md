---
title: "Database Views"
id: "database-views"
---

WaveMaker provides support for importing Database Views into WaveMaker applications with some limitations.

1. Views imported into Database Designer are _read-only_ hence their metadata cannot be altered or modified i.e. no support for adding/editing/deleting of columns or their metadata.
2. Views _do not have a primary key_, hence hibernate marks all the columns as primary keys thus making it composite key. You can overcome this situation by defining Virtual Primary Key. [Know more about Virtual Primary Keys](/learn/app-development/services/database-services/working-database-schema/#virtual-primary-keys).
3. If any _non-numeric column is null_, then the whole row is returned as an empty row. This is a limitation with Hibernate. ([https://hibernate.atlassian.net/browse/HHH-177](https://hibernate.atlassian.net/browse/HHH-177)). Again, Virtual Primary Keys help you handle such situations. [Know more about Virtual Primary Keys](/learn/app-development/services/database-services/working-database-schema/#virtual-primary-keys).
4. Care should be taken when using Views to _insert/update rows_ into the underlying tables, especially when the View is formed as a join of multiple tables. It is recommended that you handle such cases at the database level using triggers, etc..
5. _Changes made to the underlying tables_ are not reflected in Views automatically and since there is no provision to update a view from DB Designer, you have to manually make such updates to the View in the database and re-import the database.

