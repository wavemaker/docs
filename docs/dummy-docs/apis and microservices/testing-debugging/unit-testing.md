---
id: unit-testing
title: Unit Testing
sidebar_label: Unit Testing
sidebar_position: 2
---

# Unit Testing

Comprehensive guide to testing your APIs and microservices using JUnit, Mockito, and Spring Boot Test.

## Overview

Testing ensures:
- Code reliability and correctness
- Regression prevention
- Documentation through examples
- Confidence in refactoring

## Testing Stack

- **JUnit 5**: Testing framework
- **Mockito**: Mocking framework
- **Spring Boot Test**: Integration testing support
- **AssertJ**: Fluent assertions
- **MockMvc**: REST controller testing
- **TestContainers**: Database integration tests

## Unit Testing

### Service Layer Tests

```java
@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserService userService;

    @Test
    @DisplayName("Should create user successfully")
    public void testCreateUser() {
        // Given
        User user = new User();
        user.setUsername("john_doe");
        user.setEmail("john@example.com");
        user.setPassword("password123");

        when(passwordEncoder.encode("password123")).thenReturn("encoded_password");
        when(userRepository.save(any(User.class))).thenReturn(user);

        // When
        User created = userService.createUser(user);

        // Then
        assertNotNull(created);
        assertEquals("john_doe", created.getUsername());
        verify(passwordEncoder).encode("password123");
        verify(userRepository).save(any(User.class));
    }

    @Test
    @DisplayName("Should throw exception when user already exists")
    public void testCreateDuplicateUser() {
        // Given
        when(userRepository.existsByUsername("john_doe")).thenReturn(true);

        User user = new User();
        user.setUsername("john_doe");

        // When & Then
        assertThrows(UserAlreadyExistsException.class, () -> {
            userService.createUser(user);
        });

        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    @DisplayName("Should find user by username")
    public void testFindByUsername() {
        // Given
        User user = new User();
        user.setId(1L);
        user.setUsername("john_doe");

        when(userRepository.findByUsername("john_doe")).thenReturn(Optional.of(user));

        // When
        User found = userService.findByUsername("john_doe");

        // Then
        assertNotNull(found);
        assertEquals(1L, found.getId());
        assertEquals("john_doe", found.getUsername());
    }
}
```

### Repository Tests

```java
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@TestPropertySource(properties = {
    "spring.datasource.url=jdbc:h2:mem:testdb",
    "spring.jpa.hibernate.ddl-auto=create-drop"
})
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testFindByUsername() {
        // Given
        User user = new User();
        user.setUsername("john_doe");
        user.setEmail("john@example.com");
        userRepository.save(user);

        // When
        Optional<User> found = userRepository.findByUsername("john_doe");

        // Then
        assertTrue(found.isPresent());
        assertEquals("john_doe", found.get().getUsername());
    }

    @Test
    public void testFindByEmail() {
        // Given
        User user = new User();
        user.setUsername("jane_doe");
        user.setEmail("jane@example.com");
        userRepository.save(user);

        // When
        Optional<User> found = userRepository.findByEmail("jane@example.com");

        // Then
        assertTrue(found.isPresent());
        assertEquals("jane@example.com", found.get().getEmail());
    }
}
```

## Controller Testing

### MockMvc Tests

```java
@WebMvcTest(UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testGetAllUsers() throws Exception {
        // Given
        List<User> users = Arrays.asList(
            new User(1L, "john", "john@example.com"),
            new User(2L, "jane", "jane@example.com")
        );

        when(userService.findAll()).thenReturn(users);

        // When & Then
        mockMvc.perform(get("/api/users")
                .contentType(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$").isArray())
            .andExpect(jsonPath("$[0].username").value("john"))
            .andExpect(jsonPath("$[1].username").value("jane"));

        verify(userService).findAll();
    }

    @Test
    public void testGetUserById() throws Exception {
        // Given
        User user = new User(1L, "john", "john@example.com");
        when(userService.findById(1L)).thenReturn(user);

        // When & Then
        mockMvc.perform(get("/api/users/1")
                .contentType(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(1))
            .andExpect(jsonPath("$.username").value("john"));
    }

    @Test
    public void testCreateUser() throws Exception {
        // Given
        User user = new User(null, "john", "john@example.com");
        User created = new User(1L, "john", "john@example.com");

        when(userService.createUser(any(User.class))).thenReturn(created);

        // When & Then
        mockMvc.perform(post("/api/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(user)))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.id").value(1))
            .andExpect(jsonPath("$.username").value("john"));
    }

    @Test
    public void testUserNotFound() throws Exception {
        // Given
        when(userService.findById(999L)).thenThrow(new EntityNotFoundException("User not found"));

        // When & Then
        mockMvc.perform(get("/api/users/999")
                .contentType(MediaType.APPLICATION_JSON))
            .andExpect(status().isNotFound());
    }
}
```

## Integration Tests

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = {
    "spring.datasource.url=jdbc:h2:mem:integrationdb"
})
public class UserIntegrationTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserRepository userRepository;

    @BeforeEach
    public void setUp() {
        userRepository.deleteAll();
    }

    @Test
    public void testCreateAndRetrieveUser() {
        // Create user
        User user = new User(null, "john", "john@example.com");

        ResponseEntity<User> createResponse = restTemplate.postForEntity(
            "/api/users",
            user,
            User.class
        );

        assertEquals(HttpStatus.CREATED, createResponse.getStatusCode());
        assertNotNull(createResponse.getBody());
        Long userId = createResponse.getBody().getId();

        // Retrieve user
        ResponseEntity<User> getResponse = restTemplate.getForEntity(
            "/api/users/" + userId,
            User.class
        );

        assertEquals(HttpStatus.OK, getResponse.getStatusCode());
        assertEquals("john", getResponse.getBody().getUsername());
    }

    @Test
    public void testUpdateUser() {
        // Create user
        User user = new User(null, "john", "john@example.com");
        user = restTemplate.postForObject("/api/users", user, User.class);

        // Update user
        user.setEmail("john.new@example.com");

        restTemplate.put("/api/users/" + user.getId(), user);

        // Verify
        User updated = restTemplate.getForObject("/api/users/" + user.getId(), User.class);
        assertEquals("john.new@example.com", updated.getEmail());
    }
}
```

## Test with TestContainers

```java
@SpringBootTest
@Testcontainers
public class UserRepositoryContainerTest {

    @Container
    static MySQLContainer<?> mysql = new MySQLContainer<>("mysql:8.0")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");

    @DynamicPropertySource
    static void properties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", mysql::getJdbcUrl);
        registry.add("spring.datasource.username", mysql::getUsername);
        registry.add("spring.datasource.password", mysql::getPassword);
    }

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testUserPersistence() {
        User user = new User();
        user.setUsername("john");
        user.setEmail("john@example.com");

        User saved = userRepository.save(user);
        assertNotNull(saved.getId());

        Optional<User> found = userRepository.findById(saved.getId());
        assertTrue(found.isPresent());
    }
}
```

## Parameterized Tests

```java
@ParameterizedTest
@ValueSource(strings = {"", " ", "  "})
public void testEmptyUsername(String username) {
    User user = new User();
    user.setUsername(username);

    Set<ConstraintViolation<User>> violations = validator.validate(user);
    assertFalse(violations.isEmpty());
}

@ParameterizedTest
@CsvSource({
    "john, john@example.com, true",
    "jane, jane@example.com, true",
    ", invalid@example.com, false",
    "bob, , false"
})
public void testUserValidation(String username, String email, boolean valid) {
    User user = new User();
    user.setUsername(username);
    user.setEmail(email);

    Set<ConstraintViolation<User>> violations = validator.validate(user);
    assertEquals(valid, violations.isEmpty());
}
```

## Test Coverage

### Maven Configuration

```xml
<plugin>
    <groupId>org.jacoco</groupId>
    <artifactId>jacoco-maven-plugin</artifactId>
    <version>0.8.10</version>
    <executions>
        <execution>
            <goals>
                <goal>prepare-agent</goal>
            </goals>
        </execution>
        <execution>
            <id>report</id>
            <phase>test</phase>
            <goals>
                <goal>report</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

```bash
# Generate coverage report
mvn clean test jacoco:report

# View report
open target/site/jacoco/index.html
```

## Best Practices

1. **Follow AAA Pattern**: Arrange, Act, Assert
2. **One Assertion per Test**: Keep tests focused
3. **Use Descriptive Names**: Clear test method names
4. **Test Edge Cases**: Boundary conditions and errors
5. **Mock External Dependencies**: Use @Mock for external services
6. **Clean Up**: Use @BeforeEach and @AfterEach
7. **Fast Tests**: Unit tests should run quickly
8. **Independent Tests**: Tests shouldn't depend on each other

## Test Naming Conventions

```java
// Pattern: test<MethodName>_<Scenario>_<ExpectedResult>

@Test
public void testCreateUser_WithValidData_ReturnsCreatedUser() { }

@Test
public void testCreateUser_WithDuplicateUsername_ThrowsException() { }

@Test
public void testFindById_WithInvalidId_ReturnsEmpty() { }
```

## Next Steps

- [Deploy Your Application](./how-to-build-use.md)
- [Monitor in Production](../../build and deploy/)
