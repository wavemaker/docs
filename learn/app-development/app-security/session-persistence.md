---
title: "Session Persistence - Scaling WaveMaker Application"
sidebar_label: "Session Persistence"
---
---

When an application becomes popular and when the user-base increase, you'll need to plan how to scale the application to handle large number of requests. There are two ways to scale an application.

1. Vertically
2. Horizontally

### Vertical Scaling

Vertical scaling refers to adding more resources; for example, CPU, RAM, DISK, etc., to the server itself. However, with this approach, there is a physical limit to vertically scale an application.

### Horizontal Scaling

Horizontal scaling refers to replicating the application with multiple nodes and servers. With this approach, the load is distributed among these nodes. Typically, Horizontal scaling can serve more users and requests than vertical scaling and there is no limit on the number of nodes that can serve the same application.

## How to Configure Session Persistence

1. Add a database.
2. Go to the **Security** menu.
3. Go to the **Authentication and Authorization** tab and enable **Authentication**.
4. Go to **Login configuration** from the left navigation.
5. Scroll down to **Session Persistence**.
6. Select **Type** from the dropdown from the following: 

    1. In-Memory is the default selected option; it does not scale the application.
    2. REDIS
    3. JDBC.

### REDIS

When you select REDIS, you have to provide Host, Port, Password, and Database details. The Database is 0 by default. You can configure this according to the REDIS setup instructions.

![REDIS session persistence](/learn/assets/redis-session-persistence.png)

### JDBC

For JDBC, it displays a drop-down of all the imported databases in a project. Ensure the selected database should not be a read-only.

1. Select Database.
2. Make sure that the table is editable.
3. Save.

The application typically has multiple logins and it stores multiple login sessions, and those sessions and their timeout information is stored in the table.



