# DB Service Integration

Learn how to integrate Java services with databases for CRUD operations, transaction management, and data access patterns.

## Database Configuration

### Data Source Setup
```java
import javax.sql.DataSource;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DatabaseConfig {

    @Bean
    public DataSource dataSource() {
        return DataSourceBuilder.create()
            .driverClassName("org.postgresql.Driver")
            .url("jdbc:postgresql://localhost:5432/mydb")
            .username("user")
            .password("password")
            .build();
    }
}
```

### Connection Pool Configuration
```java
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@Configuration
public class DataSourceConfig {

    @Bean
    public DataSource dataSource() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:postgresql://localhost:5432/mydb");
        config.setUsername("user");
        config.setPassword("password");
        config.setMaximumPoolSize(10);
        config.setMinimumIdle(2);
        config.setConnectionTimeout(30000);
        config.setIdleTimeout(600000);
        config.setMaxLifetime(1800000);

        return new HikariDataSource(config);
    }
}
```

## JDBC Operations

### Basic JDBC Service
```java
import java.sql.*;
import javax.sql.DataSource;

@Service
public class UserDatabaseService {

    private final DataSource dataSource;

    public UserDatabaseService(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @ServiceMethod
    public User getUserById(int userId) {
        String sql = "SELECT * FROM users WHERE id = ?";

        try (Connection conn = dataSource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setInt(1, userId);

            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    return mapResultSetToUser(rs);
                }
                return null;
            }
        } catch (SQLException e) {
            throw new DatabaseException("Failed to fetch user", e);
        }
    }

    @ServiceMethod
    public List<User> getAllUsers() {
        String sql = "SELECT * FROM users";
        List<User> users = new ArrayList<>();

        try (Connection conn = dataSource.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                users.add(mapResultSetToUser(rs));
            }

            return users;
        } catch (SQLException e) {
            throw new DatabaseException("Failed to fetch users", e);
        }
    }

    @ServiceMethod
    public int createUser(User user) {
        String sql = "INSERT INTO users (username, email, created_at) VALUES (?, ?, ?)";

        try (Connection conn = dataSource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

            stmt.setString(1, user.getUsername());
            stmt.setString(2, user.getEmail());
            stmt.setTimestamp(3, Timestamp.valueOf(LocalDateTime.now()));

            int affectedRows = stmt.executeUpdate();

            if (affectedRows == 0) {
                throw new DatabaseException("Creating user failed");
            }

            try (ResultSet generatedKeys = stmt.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                    return generatedKeys.getInt(1);
                } else {
                    throw new DatabaseException("Creating user failed, no ID obtained");
                }
            }
        } catch (SQLException e) {
            throw new DatabaseException("Failed to create user", e);
        }
    }

    @ServiceMethod
    public void updateUser(User user) {
        String sql = "UPDATE users SET username = ?, email = ? WHERE id = ?";

        try (Connection conn = dataSource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, user.getUsername());
            stmt.setString(2, user.getEmail());
            stmt.setInt(3, user.getId());

            int affectedRows = stmt.executeUpdate();

            if (affectedRows == 0) {
                throw new DatabaseException("User not found: " + user.getId());
            }
        } catch (SQLException e) {
            throw new DatabaseException("Failed to update user", e);
        }
    }

    @ServiceMethod
    public void deleteUser(int userId) {
        String sql = "DELETE FROM users WHERE id = ?";

        try (Connection conn = dataSource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setInt(1, userId);

            int affectedRows = stmt.executeUpdate();

            if (affectedRows == 0) {
                throw new DatabaseException("User not found: " + userId);
            }
        } catch (SQLException e) {
            throw new DatabaseException("Failed to delete user", e);
        }
    }

    private User mapResultSetToUser(ResultSet rs) throws SQLException {
        User user = new User();
        user.setId(rs.getInt("id"));
        user.setUsername(rs.getString("username"));
        user.setEmail(rs.getString("email"));
        user.setCreatedAt(rs.getTimestamp("created_at").toLocalDateTime());
        return user;
    }
}
```

## JPA/Hibernate Integration

### Entity Definition
```java
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String email;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Post> posts;

    // Getters and setters
}
```

### Repository Interface
```java
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUsername(String username);

    List<User> findByEmailContaining(String email);

    @Query("SELECT u FROM User u WHERE u.createdAt > :date")
    List<User> findRecentUsers(@Param("date") LocalDateTime date);

    @Query(value = "SELECT * FROM users WHERE active = true", nativeQuery = true)
    List<User> findActiveUsers();
}
```

### JPA Service
```java
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserJpaService {

    private final UserRepository userRepository;

    public UserJpaService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @ServiceMethod
    public User getUserById(int userId) {
        return userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException("User not found: " + userId));
    }

    @ServiceMethod
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @ServiceMethod
    @Transactional
    public User createUser(User user) {
        user.setCreatedAt(LocalDateTime.now());
        return userRepository.save(user);
    }

    @ServiceMethod
    @Transactional
    public User updateUser(int userId, User updatedUser) {
        User user = getUserById(userId);
        user.setUsername(updatedUser.getUsername());
        user.setEmail(updatedUser.getEmail());
        return userRepository.save(user);
    }

    @ServiceMethod
    @Transactional
    public void deleteUser(int userId) {
        if (!userRepository.existsById(userId)) {
            throw new UserNotFoundException("User not found: " + userId);
        }
        userRepository.deleteById(userId);
    }

    @ServiceMethod
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @ServiceMethod
    public List<User> searchByEmail(String email) {
        return userRepository.findByEmailContaining(email);
    }
}
```

## Transaction Management

### Declarative Transactions
```java
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;

@Service
public class TransactionalService {

    @ServiceMethod
    @Transactional
    public void transferFunds(int fromUserId, int toUserId, double amount) {
        // Debit from sender
        debitAccount(fromUserId, amount);

        // Credit to receiver
        creditAccount(toUserId, amount);

        // If any exception occurs, entire transaction will be rolled back
    }

    @ServiceMethod
    @Transactional(
        isolation = Isolation.READ_COMMITTED,
        propagation = Propagation.REQUIRED,
        timeout = 30,
        rollbackFor = Exception.class
    )
    public void complexTransaction() {
        // Transaction with specific configuration
    }

    @ServiceMethod
    @Transactional(readOnly = true)
    public List<User> getUsers() {
        // Read-only transaction for better performance
        return userRepository.findAll();
    }
}
```

### Programmatic Transactions
```java
import org.springframework.transaction.support.TransactionTemplate;
import org.springframework.transaction.PlatformTransactionManager;

@Service
public class ProgrammaticTransactionService {

    private final TransactionTemplate transactionTemplate;

    public ProgrammaticTransactionService(PlatformTransactionManager transactionManager) {
        this.transactionTemplate = new TransactionTemplate(transactionManager);
    }

    @ServiceMethod
    public void executeInTransaction() {
        transactionTemplate.execute(status -> {
            try {
                // Execute database operations
                performDatabaseOperation1();
                performDatabaseOperation2();

                return null;
            } catch (Exception e) {
                status.setRollbackOnly();
                throw new DatabaseException("Transaction failed", e);
            }
        });
    }
}
```

## Stored Procedures

### Calling Stored Procedures
```java
import java.sql.CallableStatement;
import java.sql.Types;

@Service
public class StoredProcedureService {

    private final DataSource dataSource;

    @ServiceMethod
    public int callStoredProcedure(String username) {
        String sql = "{call get_user_count_by_name(?, ?)}";

        try (Connection conn = dataSource.getConnection();
             CallableStatement stmt = conn.prepareCall(sql)) {

            // Set input parameter
            stmt.setString(1, username);

            // Register output parameter
            stmt.registerOutParameter(2, Types.INTEGER);

            // Execute
            stmt.execute();

            // Get output parameter
            return stmt.getInt(2);

        } catch (SQLException e) {
            throw new DatabaseException("Stored procedure call failed", e);
        }
    }

    @ServiceMethod
    public List<User> callStoredProcedureWithResultSet() {
        String sql = "{call get_active_users()}";
        List<User> users = new ArrayList<>();

        try (Connection conn = dataSource.getConnection();
             CallableStatement stmt = conn.prepareCall(sql);
             ResultSet rs = stmt.executeQuery()) {

            while (rs.next()) {
                users.add(mapResultSetToUser(rs));
            }

            return users;

        } catch (SQLException e) {
            throw new DatabaseException("Stored procedure call failed", e);
        }
    }
}
```

### JPA Stored Procedure
```java
import javax.persistence.EntityManager;
import javax.persistence.StoredProcedureQuery;

@Service
public class JpaStoredProcedureService {

    private final EntityManager entityManager;

    @ServiceMethod
    public List<User> callStoredProcedure(String searchTerm) {
        StoredProcedureQuery query = entityManager
            .createStoredProcedureQuery("search_users", User.class)
            .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)
            .setParameter(1, searchTerm);

        query.execute();

        return query.getResultList();
    }
}
```

## Batch Operations

### JDBC Batch Insert
```java
@Service
public class BatchOperationService {

    @ServiceMethod
    @Transactional
    public void batchInsertUsers(List<User> users) {
        String sql = "INSERT INTO users (username, email, created_at) VALUES (?, ?, ?)";

        try (Connection conn = dataSource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            for (User user : users) {
                stmt.setString(1, user.getUsername());
                stmt.setString(2, user.getEmail());
                stmt.setTimestamp(3, Timestamp.valueOf(LocalDateTime.now()));
                stmt.addBatch();
            }

            int[] results = stmt.executeBatch();
            System.out.println("Inserted " + results.length + " records");

        } catch (SQLException e) {
            throw new DatabaseException("Batch insert failed", e);
        }
    }
}
```

### JPA Batch Processing
```java
@Service
public class JpaBatchService {

    private final EntityManager entityManager;
    private static final int BATCH_SIZE = 50;

    @ServiceMethod
    @Transactional
    public void batchInsertUsers(List<User> users) {
        for (int i = 0; i < users.size(); i++) {
            entityManager.persist(users.get(i));

            if (i % BATCH_SIZE == 0 && i > 0) {
                entityManager.flush();
                entityManager.clear();
            }
        }

        entityManager.flush();
        entityManager.clear();
    }
}
```

## Connection Pooling

### HikariCP Configuration
```properties
# application.properties
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.minimum-idle=2
spring.datasource.hikari.connection-timeout=30000
spring.datasource.hikari.idle-timeout=600000
spring.datasource.hikari.max-lifetime=1800000
spring.datasource.hikari.pool-name=MyAppPool
```

## Error Handling

### Custom Exceptions
```java
public class DatabaseException extends RuntimeException {
    public DatabaseException(String message) {
        super(message);
    }

    public DatabaseException(String message, Throwable cause) {
        super(message, cause);
    }
}

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}
```

### Exception Translation
```java
@Service
public class SafeDatabaseService {

    @ServiceMethod
    public User getUserById(int userId) {
        try {
            return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found"));
        } catch (DataAccessException e) {
            throw new DatabaseException("Database access error", e);
        } catch (Exception e) {
            throw new ServiceException("Unexpected error", e);
        }
    }
}
```

## Query Optimization

### N+1 Query Problem Solution
```java
// Bad: N+1 queries
List<User> users = userRepository.findAll();
for (User user : users) {
    user.getPosts().size(); // Each call triggers a query
}

// Good: Fetch join
@Query("SELECT u FROM User u LEFT JOIN FETCH u.posts")
List<User> findAllWithPosts();
```

### Pagination
```java
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;

@Service
public class PaginationService {

    @ServiceMethod
    public Page<User> getUsers(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return userRepository.findAll(pageable);
    }

    @ServiceMethod
    public List<User> getUsersWithOffset(int offset, int limit) {
        return entityManager
            .createQuery("SELECT u FROM User u", User.class)
            .setFirstResult(offset)
            .setMaxResults(limit)
            .getResultList();
    }
}
```

## Best Practices

### Database Access
- Use connection pooling
- Close resources properly (use try-with-resources)
- Use prepared statements to prevent SQL injection
- Implement proper transaction boundaries
- Use appropriate isolation levels
- Handle exceptions gracefully

### Performance
- Use pagination for large datasets
- Implement caching where appropriate
- Optimize queries with indexes
- Use batch operations for bulk inserts
- Avoid N+1 query problems
- Use read-only transactions for queries

### Security
- Never concatenate SQL queries (use prepared statements)
- Validate input parameters
- Use parameterized queries
- Implement proper access controls
- Audit database operations
- Encrypt sensitive data

### Testing
```java
@SpringBootTest
@Transactional
public class UserServiceTest {

    @Autowired
    private UserJpaService userService;

    @Test
    public void testCreateUser() {
        User user = new User();
        user.setUsername("testuser");
        user.setEmail("test@example.com");

        User created = userService.createUser(user);

        assertNotNull(created.getId());
        assertEquals("testuser", created.getUsername());
    }

    @Test
    public void testGetUser() {
        User user = userService.getUserById(1);
        assertNotNull(user);
    }
}
```
