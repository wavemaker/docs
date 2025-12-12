# Accessing Database

Learn how to access and interact with your database using various methods and patterns.

## Database Access Patterns

### Direct SQL Queries
```javascript
const result = await db.query(
  'SELECT * FROM users WHERE id = $1',
  [userId]
);
```

### ORM Query Methods
```javascript
const user = await User.findOne({
  where: { id: userId }
});
```

### Repository Pattern
```javascript
const userRepository = getRepository(User);
const users = await userRepository.find();
```

## CRUD Operations

### Create
```javascript
const newUser = new User();
newUser.username = 'john_doe';
newUser.email = 'john@example.com';
await newUser.save();
```

### Read
```javascript
// Find by ID
const user = await User.findById(1);

// Find with conditions
const users = await User.find({
  where: { active: true }
});

// Find with pagination
const users = await User.find({
  skip: 0,
  take: 10
});
```

### Update
```javascript
const user = await User.findById(1);
user.email = 'newemail@example.com';
await user.save();

// Bulk update
await User.update(
  { active: false },
  { where: { lastLogin: lessThan(date) } }
);
```

### Delete
```javascript
const user = await User.findById(1);
await user.remove();

// Bulk delete
await User.delete({ active: false });
```

## Advanced Queries

### Joins
```javascript
const users = await User.find({
  relations: ['posts', 'profile']
});
```

### Aggregations
```javascript
const count = await User.count({ where: { active: true } });
const avg = await User.average('age');
```

### Raw Queries
```javascript
const result = await db.query(`
  SELECT u.*, COUNT(p.id) as post_count
  FROM users u
  LEFT JOIN posts p ON u.id = p.user_id
  GROUP BY u.id
`);
```

## Transaction Management

### Basic Transactions
```javascript
await db.transaction(async (transactionalEntityManager) => {
  await transactionalEntityManager.save(user);
  await transactionalEntityManager.save(profile);
});
```

### Manual Transaction Control
```javascript
const queryRunner = db.createQueryRunner();
await queryRunner.connect();
await queryRunner.startTransaction();

try {
  await queryRunner.manager.save(user);
  await queryRunner.manager.save(profile);
  await queryRunner.commitTransaction();
} catch (err) {
  await queryRunner.rollbackTransaction();
  throw err;
} finally {
  await queryRunner.release();
}
```

## Performance Optimization

### Query Optimization
- Use indexes effectively
- Limit result sets
- Avoid N+1 queries
- Use eager loading appropriately

### Caching
- Query result caching
- Entity caching
- Cache invalidation strategies

### Connection Pooling
- Configure pool size
- Monitor connection usage
- Handle connection leaks

## Best Practices

- Use parameterized queries to prevent SQL injection
- Implement proper error handling
- Use transactions for multi-step operations
- Optimize queries for performance
- Monitor database access patterns
