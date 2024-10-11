---
title: "New & Sleek DB Designer: Simplified, Streamlined, and Focused"
author: "Saraswathi Rekhala"
---
---

At WaveMaker, we’re always striving to enhance our tools to better align with the needs and workflows of our customers. One area we’ve been paying close attention to is our Database Designer. While our previous designer offered comprehensive features — such as allowing users to create and alter schemas, applying database constraints, establish relationships, and many more — it became clear that it was too bulky for most use cases. Many of our customers prefer to manage their database schema outside of our product, typically handled by their organization’s Database Administrators (DBAs).

After gathering feedback and analyzing how the tool was being used, we’ve redesigned the Database Designer from the ground up. Our new, sleeker version focuses on simplicity and clarity, ensuring that users have a smoother experience while keeping the core functionality intact.

<!-- truncate -->

## What's New?

### Read-Only Schema Import

Instead of offering full schema management capabilities, the redesigned Database Designer now imports your schema in a read-only mode. This gives users a quick, clear view of their database structure without overwhelming them with unnecessary functionality.

After importing the database into the studio, the developer sees the below screen.

[![Designer after import](/learn/assets/dbdesigner/db-designer.png)](/learn/assets/dbdesigner/db-designer.png)

The developer has to choose the table from the left panel to view the table details.

[![Table View in Designer](/learn/assets/dbdesigner/table-view.png)](/learn/assets/dbdesigner/table-view.png)

Clear visualisation of primary keys, foreign keys, virtual key and columns count information is now available on the table header.


### Focused View of Related Tables

When exploring a table, you’ll now only see the immediate related tables. This streamlines the canvas, making it easier to understand relationships and navigate through your database without being bogged down by an overwhelming number of tables and connections.

If the selected table has relationships, a connector icon will appear. Clicking on the connector icon will display all child tables referenced by the selected table in the designer.

[![Table With Relations](/learn/assets/dbdesigner/table-relations.png)](/learn/assets/dbdesigner/table-relations.png)


### Optimized for DBAs and Developers

We recognized that most schema management is driven by DBAs outside of our platform. With this redesign, our Database Designer now complements, rather than competes with, external database tools. It serves as a quick reference for developers and teams working within our platform to understand how the database is structured without needing to dive into the details.


## Why This Change?

The previous Database Designer, while feature-rich, wasn’t always the right fit for our users. When dealing with complex databases, many users found the interface too cumbersome, especially when visualizing large numbers of tables and relationships.

[![Old Designer](/learn/assets/dbdesigner/old-designer.png)](/learn/assets/dbdesigner/old-designer.png)


By reducing the scope to show only the most immediately relevant data, we’ve made it easier to navigate and understand your database.

Additionally, we’ve made this change to reflect the reality of how database management is handled in most organizations. DBAs are the ones who typically manage schemas, and this redesign respects that boundary, allowing developers and other users to focus on the data structure without worrying about schema management.


## What remains as it is?

Non-schema modifications are still fully supported in the new designer. You can continue to enable cascade options for relationships, apply filters on tables, change Java types for columns, and configure column validations, just as before.

## Sleek, Simple, and Powerful

Our goal with this redesign was to offer a more intuitive, focused experience without sacrificing the insights that our users need. The new Database Designer is designed to be a quick reference tool that provides clarity and structure without the bulk, giving users a clean view of their database relationships.

We believe this update will help your team focus more on building and less on managing, leaving the heavy lifting of schema management to the DBAs and external tools where it belongs.



## When will it be rolled out?
:::impact
The new sleek designer will be introduced and made available to application developers with the WaveMaker 11.9.0 release.
:::