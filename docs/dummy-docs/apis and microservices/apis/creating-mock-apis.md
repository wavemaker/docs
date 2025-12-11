---
id: creating-mock-apis
title: Creating Mock APIs
sidebar_label: Creating Mock APIs
sidebar_position: 4
---

# Creating Mock APIs

Learn how to create mock APIs for testing, development, and prototyping without depending on actual backend services.

## Overview

Mock APIs are useful for:
- **Frontend Development**: Start UI development before backend is ready
- **Testing**: Create predictable test scenarios
- **Demos**: Showcase functionality without live data
- **Integration Testing**: Simulate third-party services
- **Performance Testing**: Generate controlled load patterns

## Using Mocking Bird

WaveMaker integrates with **Mocking Bird**, a powerful tool for creating mock REST APIs quickly.

### Quick Start

1. Navigate to **APIs** → **Create Mock API**
2. Define your API structure
3. Generate mock data
4. Use in your application

## Creating a Simple Mock API

### Define API Structure

```yaml
openapi: 3.0.0
info:
  title: Mock User API
  version: 1.0.0

paths:
  /api/users:
    get:
      summary: Get all users
      responses:
        '200':
          description: List of users
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
              examples:
                default:
                  value:
                    - id: 1
                      name: "John Doe"
                      email: "john@example.com"
                    - id: 2
                      name: "Jane Smith"
                      email: "jane@example.com"

  /api/users/{id}:
    get:
      summary: Get user by ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: User found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: User not found

components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
        email:
          type: string
```

### Generate Mock Data

```java
@RestController
@RequestMapping("/mock/api")
public class MockUserController {

    private List<User> mockUsers = Arrays.asList(
        new User(1, "John Doe", "john@example.com"),
        new User(2, "Jane Smith", "jane@example.com"),
        new User(3, "Bob Johnson", "bob@example.com")
    );

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return mockUsers;
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Integer id) {
        return mockUsers.stream()
            .filter(u -> u.getId().equals(id))
            .findFirst()
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/users")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        user.setId(mockUsers.size() + 1);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }
}
```

## Advanced Mock Scenarios

### Simulate Delays

```java
@GetMapping("/users")
public List<User> getAllUsers(@RequestParam(required = false) Integer delay) {
    if (delay != null) {
        try {
            Thread.sleep(delay); // Simulate network latency
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    return mockUsers;
}
```

### Simulate Errors

```java
@GetMapping("/users/error-test")
public ResponseEntity<?> testErrorScenarios(@RequestParam String scenario) {
    switch (scenario) {
        case "500":
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("error", "Internal server error"));
        case "timeout":
            try {
                Thread.sleep(30000); // Simulate timeout
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            return ResponseEntity.ok().build();
        case "malformed":
            return ResponseEntity.ok().body("Invalid JSON{{");
        default:
            return ResponseEntity.ok(mockUsers);
    }
}
```

### Random Response Data

```java
@Service
public class MockDataGenerator {

    private Random random = new Random();
    private Faker faker = new Faker();

    public User generateRandomUser() {
        return User.builder()
            .id(random.nextInt(10000))
            .name(faker.name().fullName())
            .email(faker.internet().emailAddress())
            .phone(faker.phoneNumber().phoneNumber())
            .address(faker.address().fullAddress())
            .build();
    }

    public List<User> generateUsers(int count) {
        return IntStream.range(0, count)
            .mapToObj(i -> generateRandomUser())
            .collect(Collectors.toList());
    }
}

@GetMapping("/users/random")
public List<User> getRandomUsers(@RequestParam(defaultValue = "10") int count) {
    return mockDataGenerator.generateUsers(count);
}
```

## Stateful Mocks

Maintain state across requests:

```java
@Service
public class StatefulMockService {

    private Map<Integer, User> users = new ConcurrentHashMap<>();
    private AtomicInteger idCounter = new AtomicInteger(1);

    public StatefulMockService() {
        // Initialize with some data
        users.put(1, new User(1, "John Doe", "john@example.com"));
        users.put(2, new User(2, "Jane Smith", "jane@example.com"));
    }

    public List<User> getAllUsers() {
        return new ArrayList<>(users.values());
    }

    public User getUserById(Integer id) {
        return users.get(id);
    }

    public User createUser(User user) {
        Integer id = idCounter.getAndIncrement();
        user.setId(id);
        users.put(id, user);
        return user;
    }

    public User updateUser(Integer id, User user) {
        if (!users.containsKey(id)) {
            throw new EntityNotFoundException("User not found");
        }
        user.setId(id);
        users.put(id, user);
        return user;
    }

    public void deleteUser(Integer id) {
        users.remove(id);
    }
}
```

## Using External Mock Services

### JSON Server

```bash
# Install JSON Server
npm install -g json-server

# Create db.json
{
  "users": [
    { "id": 1, "name": "John Doe", "email": "john@example.com" },
    { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
  ],
  "orders": [
    { "id": 1, "userId": 1, "total": 99.99, "status": "completed" }
  ]
}

# Run mock server
json-server --watch db.json --port 3001
```

### MockServer

```java
@TestConfiguration
public class MockServerConfig {

    private ClientAndServer mockServer;

    @PostConstruct
    public void startServer() {
        mockServer = ClientAndServer.startClientAndServer(1080);

        // Setup expectations
        mockServer
            .when(request()
                .withMethod("GET")
                .withPath("/api/users"))
            .respond(response()
                .withStatusCode(200)
                .withHeader("Content-Type", "application/json")
                .withBody("""
                    [
                        {"id": 1, "name": "John Doe", "email": "john@example.com"},
                        {"id": 2, "name": "Jane Smith", "email": "jane@example.com"}
                    ]
                    """));
    }

    @PreDestroy
    public void stopServer() {
        if (mockServer != null) {
            mockServer.stop();
        }
    }
}
```

### WireMock

```java
@SpringBootTest
@AutoConfigureWireMock(port = 0)
public class MockApiTest {

    @Value("${wiremock.server.port}")
    private int wireMockPort;

    @Test
    public void testMockApi() {
        // Setup stub
        stubFor(get(urlEqualTo("/api/users/1"))
            .willReturn(aResponse()
                .withStatus(200)
                .withHeader("Content-Type", "application/json")
                .withBody("""
                    {
                        "id": 1,
                        "name": "John Doe",
                        "email": "john@example.com"
                    }
                    """)));

        // Test your service
        String url = "http://localhost:" + wireMockPort + "/api/users/1";
        RestTemplate restTemplate = new RestTemplate();
        User user = restTemplate.getForObject(url, User.class);

        assertEquals("John Doe", user.getName());
    }
}
```

## Mock API Patterns

### Pagination

```java
@GetMapping("/users")
public Page<User> getUsers(
    @RequestParam(defaultValue = "0") int page,
    @RequestParam(defaultValue = "10") int size
) {
    List<User> allUsers = mockDataGenerator.generateUsers(100);

    int start = page * size;
    int end = Math.min(start + size, allUsers.size());

    List<User> pageContent = allUsers.subList(start, end);

    return new PageImpl<>(pageContent, PageRequest.of(page, size), allUsers.size());
}
```

### Filtering & Search

```java
@GetMapping("/users/search")
public List<User> searchUsers(
    @RequestParam(required = false) String name,
    @RequestParam(required = false) String email
) {
    return mockUsers.stream()
        .filter(u -> name == null || u.getName().contains(name))
        .filter(u -> email == null || u.getEmail().contains(email))
        .collect(Collectors.toList());
}
```

### Sorting

```java
@GetMapping("/users")
public List<User> getUsers(@RequestParam(defaultValue = "id") String sortBy) {
    Comparator<User> comparator;

    switch (sortBy) {
        case "name":
            comparator = Comparator.comparing(User::getName);
            break;
        case "email":
            comparator = Comparator.comparing(User::getEmail);
            break;
        default:
            comparator = Comparator.comparing(User::getId);
    }

    return mockUsers.stream()
        .sorted(comparator)
        .collect(Collectors.toList());
}
```

## Configuration

Switch between mock and real APIs:

```properties
# application.properties

# Use mock API in development
api.user.baseUrl=${USE_MOCK:true}?http://localhost:8080/mock/api:https://api.production.com

# Or use profiles
spring.profiles.active=mock
```

```java
@Configuration
public class ApiConfig {

    @Bean
    @Profile("mock")
    public UserService mockUserService() {
        return new MockUserService();
    }

    @Bean
    @Profile("!mock")
    public UserService realUserService() {
        return new RealUserService();
    }
}
```

## Testing with Mocks

```java
@SpringBootTest
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @Test
    public void testGetAllUsers() {
        List<User> users = userService.getAllUsers();

        assertNotNull(users);
        assertFalse(users.isEmpty());
        assertEquals(3, users.size());
    }

    @Test
    public void testGetUserById() {
        User user = userService.getUserById(1);

        assertNotNull(user);
        assertEquals("John Doe", user.getName());
    }

    @Test
    public void testUserNotFound() {
        assertThrows(EntityNotFoundException.class, () -> {
            userService.getUserById(999);
        });
    }
}
```

## Best Practices

1. **Match Production Behavior**: Mock APIs should behave like real ones
2. **Document Mock Endpoints**: Clear documentation for developers
3. **Use Realistic Data**: Generate data that resembles production
4. **Test Error Scenarios**: Include error responses and edge cases
5. **Version Mock APIs**: Keep mocks in sync with API versions
6. **Automate Mock Setup**: Use scripts or containers
7. **Stateful When Needed**: Maintain state for complex scenarios
8. **Performance Testing**: Use mocks to simulate load

## Tools Comparison

| Tool | Use Case | Pros | Cons |
|------|----------|------|------|
| **Mocking Bird** | Quick prototyping | Easy setup, UI-based | Limited customization |
| **JSON Server** | Simple REST mocks | Zero config, fast | No complex logic |
| **WireMock** | Testing | Powerful, flexible | More setup required |
| **MockServer** | Integration tests | Feature-rich | Heavier |
| **Custom Mocks** | Full control | Complete flexibility | More development |

## Next Steps

- [Implement Authentication](../security/authentication-authorization.md)
- [Add API Security](../security/providers.md)
- [Configure Profiles](../configurations/profiles.md)
- [Unit Testing](../testing-debugging/unit-testing.md)
