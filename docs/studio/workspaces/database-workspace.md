---
last_update: { author: "Author Name" }
---

# Database Workspace

Centralized workspace for managing database connections, designing schemas, and performing database operations.

## Overview
The Database Workspace provides comprehensive tools for working with databases, including connection management, schema design, query building, and data manipulation. It supports multiple database types and provides visual tools for database operations.

## Database Workspace Interface

### Main Components

#### Database Manager
- Database connections
- Schema browser
- Table designer
- Query editor

#### Connection Panel
- List of database connections
- Connection status
- Connection settings
- Test connection

#### Schema Designer
- Visual table design
- Relationship mapping
- Index management
- Constraint definition

#### Query Builder
- Visual query builder
- SQL editor
- Query execution
- Result viewer

## Database Connections

### Supported Databases

#### Relational Databases
- **MySQL** - Open-source RDBMS
- **PostgreSQL** - Advanced open-source database
- **Oracle** - Enterprise database
- **Microsoft SQL Server** - Microsoft database
- **MariaDB** - MySQL fork
- **IBM DB2** - Enterprise database

#### NoSQL Databases
- **MongoDB** - Document database
- **Cassandra** - Wide-column store
- **Redis** - In-memory data store

### Creating Connection

#### MySQL Connection
```json
{
  "name": "MySQLConnection",
  "type": "MySQL",
  "host": "localhost",
  "port": 3306,
  "database": "myapp_db",
  "username": "dbuser",
  "password": "${Variables.dbPassword}",
  "connectionPool": {
    "min": 5,
    "max": 20,
    "idleTimeout": 30000
  }
}
```

#### PostgreSQL Connection
```json
{
  "name": "PostgresConnection",
  "type": "PostgreSQL",
  "host": "localhost",
  "port": 5432,
  "database": "myapp_db",
  "username": "postgres",
  "password": "${Variables.dbPassword}",
  "schema": "public",
  "ssl": true
}
```

#### MongoDB Connection
```json
{
  "name": "MongoConnection",
  "type": "MongoDB",
  "connectionString": "mongodb://localhost:27017/myapp_db",
  "username": "mongouser",
  "password": "${Variables.dbPassword}",
  "authSource": "admin"
}
```

### Connection Testing
1. Configure connection settings
2. Click "Test Connection"
3. Verify connection success
4. Save connection
5. View in Database Manager

## Schema Design

### Creating Tables

#### Visual Table Designer
1. Click "Create Table"
2. Enter table name
3. Add columns:
   - Column name
   - Data type
   - Length/Precision
   - Nullable
   - Default value
4. Define primary key
5. Add indexes
6. Set constraints
7. Save table

#### Table Definition Example
```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE,
  role ENUM('user', 'admin', 'moderator') DEFAULT 'user',
  INDEX idx_username (username),
  INDEX idx_email (email)
);
```

### Data Types

#### Numeric Types
- **INT** - Integer numbers
- **BIGINT** - Large integers
- **DECIMAL(p,s)** - Fixed-point numbers
- **FLOAT** - Floating-point numbers
- **DOUBLE** - Double precision

#### String Types
- **VARCHAR(n)** - Variable-length string
- **CHAR(n)** - Fixed-length string
- **TEXT** - Long text
- **LONGTEXT** - Very long text

#### Date/Time Types
- **DATE** - Date only
- **TIME** - Time only
- **DATETIME** - Date and time
- **TIMESTAMP** - Unix timestamp

#### Other Types
- **BOOLEAN** - True/false
- **BLOB** - Binary data
- **JSON** - JSON data
- **ENUM** - Enumerated values

### Relationships

#### One-to-Many Relationship
```sql
-- Orders table references Users
CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  total_amount DECIMAL(10,2),
  status ENUM('pending', 'processing', 'shipped', 'delivered'),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

#### Many-to-Many Relationship
```sql
-- Students and Courses junction table
CREATE TABLE student_courses (
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  enrollment_date DATE,
  grade VARCHAR(2),
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);
```

### Indexes

#### Creating Indexes
```sql
-- Single column index
CREATE INDEX idx_last_name ON users(last_name);

-- Composite index
CREATE INDEX idx_name ON users(last_name, first_name);

-- Unique index
CREATE UNIQUE INDEX idx_username ON users(username);

-- Full-text index
CREATE FULLTEXT INDEX idx_description ON products(description);
```

## CRUD Operations

### Entity Configuration

#### Entity Definition
```java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(name = "password_hash")
    private String passwordHash;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    @Column(name = "is_active")
    private Boolean isActive;

    // Getters and setters
}
```

### Generated API Operations

#### Create (INSERT)
```java
// POST /users
public User createUser(User user) {
    user.setCreatedAt(new Date());
    user.setIsActive(true);
    return userRepository.save(user);
}
```

#### Read (SELECT)
```java
// GET /users
public List<User> getAllUsers() {
    return userRepository.findAll();
}

// GET /users/{id}
public User getUserById(Long id) {
    return userRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("User not found"));
}
```

#### Update
```java
// PUT /users/{id}
public User updateUser(Long id, User userDetails) {
    User user = getUserById(id);
    user.setEmail(userDetails.getEmail());
    user.setFirstName(userDetails.getFirstName());
    user.setLastName(userDetails.getLastName());
    return userRepository.save(user);
}
```

#### Delete
```java
// DELETE /users/{id}
public void deleteUser(Long id) {
    User user = getUserById(id);
    userRepository.delete(user);
}
```

## Queries

### Query Builder

#### Visual Query Builder
1. Select table
2. Choose columns
3. Add filters/conditions
4. Set ordering
5. Add joins
6. Generate SQL
7. Execute query

#### Generated Query Example
```sql
SELECT u.id, u.username, u.email, u.first_name, u.last_name, o.total_amount
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE u.is_active = true
  AND o.status = 'delivered'
  AND o.order_date >= '2024-01-01'
ORDER BY o.order_date DESC
LIMIT 50;
```

### Custom Queries

#### Named Queries
```sql
-- Get active users
SELECT * FROM users
WHERE is_active = true
ORDER BY created_at DESC;

-- Get user order history
SELECT u.username, o.id as order_id, o.order_date, o.total_amount, o.status
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.id = :userId
ORDER BY o.order_date DESC;

-- Get top customers
SELECT u.id, u.username, u.email,
       COUNT(o.id) as order_count,
       SUM(o.total_amount) as total_spent
FROM users u
INNER JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.username, u.email
HAVING total_spent > 1000
ORDER BY total_spent DESC
LIMIT 10;
```

#### Parameterized Queries
```sql
-- Search users
SELECT * FROM users
WHERE username LIKE CONCAT('%', :searchTerm, '%')
   OR email LIKE CONCAT('%', :searchTerm, '%')
   OR first_name LIKE CONCAT('%', :searchTerm, '%')
   OR last_name LIKE CONCAT('%', :searchTerm, '%');

-- Filter by date range
SELECT * FROM orders
WHERE order_date BETWEEN :startDate AND :endDate
  AND user_id = :userId;
```

### Stored Procedures

#### Creating Procedure
```sql
DELIMITER $$

CREATE PROCEDURE GetUserOrders(
    IN userId INT,
    IN startDate DATE,
    IN endDate DATE
)
BEGIN
    SELECT o.*, u.username, u.email
    FROM orders o
    INNER JOIN users u ON o.user_id = u.id
    WHERE o.user_id = userId
      AND o.order_date BETWEEN startDate AND endDate
    ORDER BY o.order_date DESC;
END$$

DELIMITER ;
```

#### Calling Procedure
```java
@Procedure(name = "GetUserOrders")
List<OrderDto> getUserOrders(
    @Param("userId") Long userId,
    @Param("startDate") Date startDate,
    @Param("endDate") Date endDate
);
```

## Database Variables

### Creating DB Variables

#### Simple Query Variable
```javascript
{
  "name": "userListVar",
  "type": "database",
  "entity": "User",
  "operation": "list",
  "orderBy": "createdAt desc",
  "filter": {
    "isActive": true
  }
}
```

#### Parameterized Variable
```javascript
{
  "name": "searchUsersVar",
  "type": "database",
  "entity": "User",
  "operation": "list",
  "filter": {
    "username": { "$like": "${searchTerm}" },
    "isActive": true
  }
}
```

## Data Import/Export

### Import Data

#### CSV Import
1. Select table
2. Choose CSV file
3. Map columns
4. Set import options:
   - Skip duplicates
   - Update existing
   - Insert only
5. Execute import

#### SQL Import
```sql
-- Import from SQL file
SOURCE /path/to/import.sql;

-- Or load data
LOAD DATA INFILE '/path/to/data.csv'
INTO TABLE users
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
```

### Export Data

#### CSV Export
```sql
SELECT * FROM users
INTO OUTFILE '/path/to/export.csv'
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n';
```

#### SQL Export
```bash
# Export database
mysqldump -u username -p database_name > export.sql

# Export specific table
mysqldump -u username -p database_name table_name > table_export.sql
```

## Database Migration

### Schema Migration

#### Migration Script
```sql
-- Migration: Add profile fields to users table
ALTER TABLE users
ADD COLUMN phone VARCHAR(20),
ADD COLUMN address TEXT,
ADD COLUMN city VARCHAR(50),
ADD COLUMN country VARCHAR(50);

-- Add indexes
CREATE INDEX idx_city ON users(city);
CREATE INDEX idx_country ON users(country);
```

#### Rollback Script
```sql
-- Rollback: Remove profile fields
ALTER TABLE users
DROP COLUMN phone,
DROP COLUMN address,
DROP COLUMN city,
DROP COLUMN country;

-- Drop indexes
DROP INDEX idx_city ON users;
DROP INDEX idx_country ON users;
```

## Best Practices

### Schema Design
1. **Use appropriate data types**
2. **Define primary keys** for all tables
3. **Add indexes** on frequently queried columns
4. **Use foreign keys** for relationships
5. **Normalize data** appropriately

### Performance
1. **Index strategic columns**
2. **Optimize queries**
3. **Use connection pooling**
4. **Avoid N+1 queries**
5. **Use pagination** for large datasets

### Security
1. **Use parameterized queries**
2. **Validate inputs**
3. **Encrypt sensitive data**
4. **Limit user permissions**
5. **Regular backups**

## Troubleshooting

### Common Issues

**Connection Failed**
- Check host and port
- Verify credentials
- Check firewall rules
- Test network connectivity

**Query Performance**
- Add appropriate indexes
- Optimize query structure
- Use EXPLAIN to analyze
- Check table statistics

**Data Integrity**
- Verify constraints
- Check foreign keys
- Validate data types
- Review transactions

## Related Documentation

- [API Workspace](./api-workspace.md)
- [Security Workspace](./security-workspace.md)
- [VCS Workspace](./vcs-workspace.md)
