---
title: "Session Persistence - Scaling Application"
sidebar_label: "Session Persistence"
---
---

Session persistence is a configuration where you can store sessions. You should configure session persistence to enable Horizontal Scaling.

Horizontal Scaling replicates the application with multiple nodes and servers. With this approach, the load is distributed among these nodes. Typically, Horizontal scaling can serve more users and requests and there is no limit on the number of nodes that can serve the same application.

## How to Configure Session Persistence

1. Connect to the [Database](/learn/assets/db_new.png).
2. Go to the **Security** menu.

![app-security](/learn/assets/sec_access.png)

3. Navigate to the **Authentication and Authorization** tab and enable **Authentication**.

![authentication-authorization](/learn/assets/authentication-authorization.png)

4. Go to **Login configuration** from the left navigation.
5. Scroll down to **Session Persistence**.
6. Select **Type** from the following:

    1. **In-Memory**
    2. **REDIS**
    3. **JDBC**
    4. **MONGODB**

### In-Memory

In-Memory is the default selected option; this will work fine for a single node application.

### REDIS

When you select REDIS, you have to provide the following information:

1. Host
2. Port
3. Password
4. Database

For more information, see [Host, port, password and database](https://redis.io/topics/rediscli#host-port-password-and-database).
The Database is 0 by default. You can configure this according to the REDIS setup.

![REDIS session persistence](/learn/assets/redis-session-persistence.png)

### JDBC

For JDBC, it displays a dropdown of all the imported databases in the project. The application typically has multiple logins and it stores multiple login sessions, and those sessions and their timeout information is stored in the table.

![jdbc session persistence](/learn/assets/jdbc-session-persistence.png)

1. Select the Database from the dropdown to configure session persistence.

:::note
Ensure the selected database should be in editable mode and not read-only.
:::

2. **Save** the settings.


### Mongo DB

You can configure a MongoDB database for storing sessions. 

1. From the Security window, choose **Session Persistence**
2. Choose the **Type** `MONGODB` from the dropdown.
3. Provide all the required details, such as Database name, Port, Host, Username, and Password. 
4. Click **Save**.

The required driver and the configuration files gets automatically imported into the project, and the application can connect to MongoDB.

![mongodb security configuration](/learn/assets/session-persistence/mongodb-security-window.png)
