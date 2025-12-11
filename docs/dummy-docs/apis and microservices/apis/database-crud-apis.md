---
id: database-crud-apis
title: Database & CRUD APIs
sidebar_label: Database & CRUD APIs
sidebar_position: 1
---

# Database & CRUD APIs

Learn how to create RESTful CRUD (Create, Read, Update, Delete) APIs for your database entities.

## Overview

WaveMaker automatically generates CRUD APIs for your database tables, allowing you to perform standard operations without writing code.

## Creating CRUD APIs

### Step 1: Connect to Database

1. Navigate to **Databases** in the project dashboard
2. Click **Connect to a DB** or **Import Database**
3. Select your database type:
   - MySQL
   - PostgreSQL
   - Oracle
   - SQL Server
   - MongoDB

4. Enter connection details:
```
Host: localhost
Port: 3306
Database: myapp_db
Username: admin
Password: ********
```

### Step 2: Import Tables

Once connected, WaveMaker will:
- Scan your database schema
- Display available tables and views
- Show relationships between tables

**Select Tables:**
- Choose specific tables to import
- Or import all tables at once

### Step 3: Auto-Generated APIs

WaveMaker automatically creates:

#### Entity Classes
```java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", nullable = false, length = 50)
    private String username;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    // Getters and setters
}
```

#### Repository Layer
```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
}
```

#### Service Layer
```java
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Page<User> findAll(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    public User findById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("User not found"));
    }

    public User create(User user) {
        return userRepository.save(user);
    }

    public User update(Long id, User user) {
        User existing = findById(id);
        // Update fields
        return userRepository.save(existing);
    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}
```

#### REST Controller
```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public Page<User> getAllUsers(Pageable pageable) {
        return userService.findAll(pageable);
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.findById(id);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.create(user);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.update(id, user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.delete(id);
    }
}
```

## API Endpoints

### GET - Retrieve All Records
```http
GET /api/users?page=0&size=20&sort=id,desc
```

**Response:**
```json
{
  "content": [
    {
      "id": 1,
      "username": "john_doe",
      "email": "john@example.com",
      "createdAt": "2024-01-15T10:30:00"
    }
  ],
  "pageable": {
    "pageNumber": 0,
    "pageSize": 20
  },
  "totalElements": 150,
  "totalPages": 8
}
```

### GET - Retrieve Single Record
```http
GET /api/users/1
```

**Response:**
```json
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "createdAt": "2024-01-15T10:30:00"
}
```

### POST - Create New Record
```http
POST /api/users
Content-Type: application/json

{
  "username": "jane_smith",
  "email": "jane@example.com"
}
```

**Response:** `201 Created`
```json
{
  "id": 2,
  "username": "jane_smith",
  "email": "jane@example.com",
  "createdAt": "2024-01-16T14:20:00"
}
```

### PUT - Update Record
```http
PUT /api/users/2
Content-Type: application/json

{
  "username": "jane_smith_updated",
  "email": "jane.new@example.com"
}
```

**Response:** `200 OK`

### DELETE - Remove Record
```http
DELETE /api/users/2
```

**Response:** `204 No Content`

## Advanced Features

### Query Methods

Add custom query methods to your repository:

```java
public interface UserRepository extends JpaRepository<User, Long> {
    // Find by field
    List<User> findByUsername(String username);

    // Multiple conditions
    List<User> findByUsernameAndEmail(String username, String email);

    // Pattern matching
    List<User> findByEmailContaining(String emailPart);

    // Ordering
    List<User> findByUsernameOrderByCreatedAtDesc(String username);

    // Custom JPQL
    @Query("SELECT u FROM User u WHERE u.createdAt > :date")
    List<User> findRecentUsers(@Param("date") LocalDateTime date);

    // Native SQL
    @Query(value = "SELECT * FROM users WHERE email LIKE %:domain%",
           nativeQuery = true)
    List<User> findByEmailDomain(@Param("domain") String domain);
}
```

### Pagination & Sorting

```java
// In Controller
@GetMapping
public Page<User> getUsers(
    @RequestParam(defaultValue = "0") int page,
    @RequestParam(defaultValue = "20") int size,
    @RequestParam(defaultValue = "id") String sortBy,
    @RequestParam(defaultValue = "ASC") String direction
) {
    Sort sort = Sort.by(Sort.Direction.valueOf(direction), sortBy);
    Pageable pageable = PageRequest.of(page, size, sort);
    return userService.findAll(pageable);
}
```

### Filtering

```java
@GetMapping("/search")
public List<User> searchUsers(
    @RequestParam(required = false) String username,
    @RequestParam(required = false) String email
) {
    if (username != null && email != null) {
        return userRepository.findByUsernameAndEmail(username, email);
    } else if (username != null) {
        return userRepository.findByUsername(username);
    } else if (email != null) {
        return userRepository.findByEmail(email);
    }
    return userRepository.findAll();
}
```

### Relationships

Handle one-to-many, many-to-one, and many-to-many relationships:

```java
@Entity
public class User {
    @Id
    private Long id;

    // One-to-Many
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Order> orders;

    // Many-to-One
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

    // Many-to-Many
    @ManyToMany
    @JoinTable(
        name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles;
}
```

## Best Practices

### 1. Use DTOs (Data Transfer Objects)
```java
public class UserDTO {
    private Long id;
    private String username;
    private String email;
    // Only expose necessary fields
}
```

### 2. Validation
```java
public class User {
    @NotBlank(message = "Username is required")
    @Size(min = 3, max = 50)
    private String username;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;
}
```

### 3. Error Handling
```java
@ExceptionHandler(EntityNotFoundException.class)
public ResponseEntity<ErrorResponse> handleNotFound(EntityNotFoundException ex) {
    ErrorResponse error = new ErrorResponse(404, ex.getMessage());
    return ResponseEntity.status(404).body(error);
}
```

### 4. Transaction Management
```java
@Transactional
public void transferData(Long sourceId, Long targetId) {
    // Multiple database operations in one transaction
}
```

## Next Steps

- [Import OpenAPI/Swagger Specifications](./import-openapi-swagger.md)
- [Create Backend for Frontend (BFF)](./creating-bff.md)
- [Add Security to APIs](../security/authentication-authorization.md)
