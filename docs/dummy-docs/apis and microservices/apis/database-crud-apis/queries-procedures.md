# Queries and Procedures

Learn how to work with database queries and stored procedures effectively.

## SQL Queries

### Simple Queries
```sql
SELECT * FROM users WHERE active = true;
```

### Complex Queries
```sql
SELECT
  u.id,
  u.username,
  COUNT(p.id) as post_count,
  AVG(p.rating) as avg_rating
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id, u.username
HAVING COUNT(p.id) > 5
ORDER BY avg_rating DESC;
```

### Parameterized Queries
```javascript
const query = `
  SELECT * FROM users
  WHERE email = $1 AND active = $2
`;
const result = await db.query(query, ['user@example.com', true]);
```

## Query Builder

### Using Query Builder
```javascript
const users = await db
  .createQueryBuilder('user')
  .where('user.active = :active', { active: true })
  .andWhere('user.age > :age', { age: 18 })
  .orderBy('user.created_at', 'DESC')
  .getMany();
```

### Joins with Query Builder
```javascript
const users = await db
  .createQueryBuilder('user')
  .leftJoinAndSelect('user.posts', 'post')
  .leftJoinAndSelect('user.profile', 'profile')
  .where('user.active = :active', { active: true })
  .getMany();
```

### Subqueries
```javascript
const qb = db.createQueryBuilder();
const users = await qb
  .select('user')
  .from(User, 'user')
  .where(qb => {
    const subQuery = qb
      .subQuery()
      .select('post.userId')
      .from(Post, 'post')
      .where('post.published = :published', { published: true })
      .getQuery();
    return 'user.id IN ' + subQuery;
  })
  .getMany();
```

## Stored Procedures

### Creating Stored Procedures
```sql
CREATE PROCEDURE GetActiveUsers()
BEGIN
  SELECT * FROM users WHERE active = true;
END;
```

### Procedure with Parameters
```sql
CREATE PROCEDURE GetUsersByRole(IN role_name VARCHAR(50))
BEGIN
  SELECT u.*
  FROM users u
  INNER JOIN user_roles ur ON u.id = ur.user_id
  INNER JOIN roles r ON ur.role_id = r.id
  WHERE r.name = role_name;
END;
```

### Calling Stored Procedures
```javascript
// Using raw query
const result = await db.query('CALL GetActiveUsers()');

// With parameters
const result = await db.query(
  'CALL GetUsersByRole(?)',
  ['admin']
);
```

## Functions

### Scalar Functions
```sql
CREATE FUNCTION GetUserFullName(user_id INT)
RETURNS VARCHAR(200)
BEGIN
  DECLARE full_name VARCHAR(200);
  SELECT CONCAT(first_name, ' ', last_name)
  INTO full_name
  FROM users
  WHERE id = user_id;
  RETURN full_name;
END;
```

### Table-Valued Functions
```sql
CREATE FUNCTION GetUserPosts(user_id INT)
RETURNS TABLE
AS
RETURN (
  SELECT * FROM posts WHERE author_id = user_id
);
```

### Using Functions
```javascript
const fullName = await db.query(
  'SELECT GetUserFullName(?) as name',
  [userId]
);
```

## Views

### Creating Views
```sql
CREATE VIEW active_users_view AS
SELECT
  id,
  username,
  email,
  created_at
FROM users
WHERE active = true;
```

### Materialized Views
```sql
CREATE MATERIALIZED VIEW user_statistics AS
SELECT
  u.id,
  u.username,
  COUNT(DISTINCT p.id) as post_count,
  COUNT(DISTINCT c.id) as comment_count
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
LEFT JOIN comments c ON u.id = c.user_id
GROUP BY u.id, u.username;
```

### Querying Views
```javascript
const activeUsers = await db.query('SELECT * FROM active_users_view');
```

## Query Optimization

### Indexing
```sql
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_posts_user_created ON posts(user_id, created_at);
```

### Query Hints
```sql
SELECT /*+ INDEX(users idx_users_email) */
* FROM users WHERE email = 'user@example.com';
```

### Execution Plans
```sql
EXPLAIN ANALYZE
SELECT * FROM users u
INNER JOIN posts p ON u.id = p.user_id
WHERE u.active = true;
```

## Best Practices

- Use parameterized queries to prevent SQL injection
- Create indexes on frequently queried columns
- Avoid SELECT * in production code
- Use stored procedures for complex business logic
- Monitor and optimize slow queries
- Use views for frequently used complex queries
- Keep stored procedures focused and maintainable
- Document complex queries and procedures
