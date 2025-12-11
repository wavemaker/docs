---
id: import-openapi-swagger
title: Import OpenAPI / Swagger
sidebar_label: Import OpenAPI / Swagger
sidebar_position: 2
---

# Import OpenAPI / Swagger

Learn how to import existing OpenAPI (Swagger) specifications to generate API clients and integrate with external services.

## Overview

WaveMaker supports importing OpenAPI/Swagger specifications (v2.0 and v3.0) to:
- Generate API client code automatically
- Integrate with third-party services
- Consume REST APIs from external providers
- Maintain type-safe API contracts

## Importing OpenAPI Specification

### Method 1: Import from URL

1. Navigate to **APIs** → **Import**
2. Select **OpenAPI/Swagger**
3. Enter the URL of the OpenAPI specification:

```
https://petstore.swagger.io/v2/swagger.json
```

4. Click **Import**

### Method 2: Import from File

1. Navigate to **APIs** → **Import**
2. Select **OpenAPI/Swagger**
3. Upload your OpenAPI file (JSON or YAML):
   - `openapi.json`
   - `swagger.yaml`
   - `api-spec.yml`

### Method 3: Import from Text

Paste your OpenAPI specification directly:

```yaml
openapi: 3.0.0
info:
  title: User Management API
  version: 1.0.0
  description: API for managing users

servers:
  - url: https://api.example.com/v1

paths:
  /users:
    get:
      summary: Get all users
      operationId: getUsers
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'

  /users/{id}:
    get:
      summary: Get user by ID
      operationId: getUserById
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
        username:
          type: string
        email:
          type: string
          format: email
```

## Generated Code

### API Client Interface

WaveMaker generates a type-safe API client:

```java
@Service
public interface UserManagementApiClient {

    /**
     * Get all users
     * @return List of users
     */
    List<User> getUsers();

    /**
     * Get user by ID
     * @param id User ID
     * @return User object
     */
    User getUserById(Integer id);

    /**
     * Create new user
     * @param user User object
     * @return Created user
     */
    User createUser(User user);

    /**
     * Update existing user
     * @param id User ID
     * @param user Updated user data
     * @return Updated user
     */
    User updateUser(Integer id, User user);

    /**
     * Delete user
     * @param id User ID
     */
    void deleteUser(Integer id);
}
```

### Model Classes

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Integer id;

    @NotBlank
    private String username;

    @Email
    private String email;

    private LocalDateTime createdAt;
}
```

## Configuration

### API Base URL

Configure the base URL for different environments:

**application.properties:**
```properties
# Development
api.usermanagement.baseUrl=https://dev-api.example.com/v1

# Production
# api.usermanagement.baseUrl=https://api.example.com/v1
```

### Authentication

Configure authentication for the imported API:

#### API Key Authentication
```properties
api.usermanagement.apiKey=your-api-key-here
api.usermanagement.apiKeyHeader=X-API-Key
```

```java
@Configuration
public class ApiClientConfig {

    @Value("${api.usermanagement.apiKey}")
    private String apiKey;

    @Bean
    public RestTemplate userManagementRestTemplate() {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getInterceptors().add((request, body, execution) -> {
            request.getHeaders().set("X-API-Key", apiKey);
            return execution.execute(request, body);
        });
        return restTemplate;
    }
}
```

#### OAuth 2.0 Authentication
```properties
api.usermanagement.oauth.clientId=your-client-id
api.usermanagement.oauth.clientSecret=your-client-secret
api.usermanagement.oauth.tokenUrl=https://auth.example.com/oauth/token
```

#### Basic Authentication
```properties
api.usermanagement.username=api-user
api.usermanagement.password=api-password
```

## Using Imported APIs

### In Service Layer

```java
@Service
public class UserService {

    @Autowired
    private UserManagementApiClient apiClient;

    public List<User> getAllUsers() {
        try {
            return apiClient.getUsers();
        } catch (RestClientException e) {
            log.error("Failed to fetch users", e);
            throw new ServiceException("Unable to fetch users", e);
        }
    }

    public User getUserDetails(Integer userId) {
        return apiClient.getUserById(userId);
    }

    public User createNewUser(UserDTO userDTO) {
        User user = convertToUser(userDTO);
        return apiClient.createUser(user);
    }
}
```

### In REST Controller

```java
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Integer id) {
        User user = userService.getUserDetails(id);
        return ResponseEntity.ok(user);
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody UserDTO userDTO) {
        User createdUser = userService.createNewUser(userDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }
}
```

## Error Handling

### Custom Error Handler

```java
@ControllerAdvice
public class ApiClientExceptionHandler {

    @ExceptionHandler(HttpClientErrorException.class)
    public ResponseEntity<ErrorResponse> handleClientError(
            HttpClientErrorException ex) {
        ErrorResponse error = new ErrorResponse(
            ex.getStatusCode().value(),
            ex.getMessage()
        );
        return ResponseEntity
            .status(ex.getStatusCode())
            .body(error);
    }

    @ExceptionHandler(HttpServerErrorException.class)
    public ResponseEntity<ErrorResponse> handleServerError(
            HttpServerErrorException ex) {
        ErrorResponse error = new ErrorResponse(
            ex.getStatusCode().value(),
            "External service error"
        );
        return ResponseEntity
            .status(HttpStatus.SERVICE_UNAVAILABLE)
            .body(error);
    }

    @ExceptionHandler(ResourceAccessException.class)
    public ResponseEntity<ErrorResponse> handleConnectionError(
            ResourceAccessException ex) {
        ErrorResponse error = new ErrorResponse(
            503,
            "Service temporarily unavailable"
        );
        return ResponseEntity
            .status(HttpStatus.SERVICE_UNAVAILABLE)
            .body(error);
    }
}
```

## Advanced Features

### Request/Response Interceptors

```java
@Component
public class ApiLoggingInterceptor implements ClientHttpRequestInterceptor {

    private static final Logger log = LoggerFactory.getLogger(ApiLoggingInterceptor.class);

    @Override
    public ClientHttpResponse intercept(
            HttpRequest request,
            byte[] body,
            ClientHttpRequestExecution execution) throws IOException {

        // Log request
        log.info("Request: {} {}", request.getMethod(), request.getURI());
        log.debug("Request body: {}", new String(body, StandardCharsets.UTF_8));

        // Execute request
        ClientHttpResponse response = execution.execute(request, body);

        // Log response
        log.info("Response status: {}", response.getStatusCode());

        return response;
    }
}
```

### Retry Logic

```java
@Service
public class ResilientUserService {

    @Autowired
    private UserManagementApiClient apiClient;

    @Retryable(
        value = {RestClientException.class},
        maxAttempts = 3,
        backoff = @Backoff(delay = 1000, multiplier = 2)
    )
    public List<User> getUsersWithRetry() {
        return apiClient.getUsers();
    }

    @CircuitBreaker(
        name = "userManagementApi",
        fallbackMethod = "getUsersFallback"
    )
    public List<User> getUsersWithCircuitBreaker() {
        return apiClient.getUsers();
    }

    public List<User> getUsersFallback(Exception e) {
        log.error("Circuit breaker activated", e);
        return Collections.emptyList();
    }
}
```

### Caching

```java
@Service
@CacheConfig(cacheNames = "users")
public class CachedUserService {

    @Autowired
    private UserManagementApiClient apiClient;

    @Cacheable(key = "#userId")
    public User getUserById(Integer userId) {
        return apiClient.getUserById(userId);
    }

    @CacheEvict(key = "#userId")
    public User updateUser(Integer userId, User user) {
        return apiClient.updateUser(userId, user);
    }

    @CacheEvict(allEntries = true)
    public void clearCache() {
        // Cache cleared
    }
}
```

## Testing Imported APIs

### Mock Server

```java
@SpringBootTest
@AutoConfigureMockMvc
public class UserApiClientTest {

    @Autowired
    private UserManagementApiClient apiClient;

    @MockBean
    private RestTemplate restTemplate;

    @Test
    public void testGetUsers() {
        // Mock response
        List<User> mockUsers = Arrays.asList(
            new User(1, "john", "john@example.com"),
            new User(2, "jane", "jane@example.com")
        );

        when(restTemplate.exchange(
            anyString(),
            eq(HttpMethod.GET),
            any(),
            eq(new ParameterizedTypeReference<List<User>>() {})
        )).thenReturn(ResponseEntity.ok(mockUsers));

        // Test
        List<User> users = apiClient.getUsers();

        // Assert
        assertEquals(2, users.size());
        assertEquals("john", users.get(0).getUsername());
    }
}
```

## Best Practices

1. **Version Your APIs**: Use versioned URLs (`/v1`, `/v2`)
2. **Handle Timeouts**: Set appropriate connection and read timeouts
3. **Implement Circuit Breakers**: Protect against cascading failures
4. **Cache Responses**: Cache frequently accessed data
5. **Monitor API Usage**: Track API calls, failures, and latency
6. **Secure API Keys**: Store credentials in environment variables or secrets management
7. **Document Dependencies**: Keep track of external API dependencies
8. **Test Thoroughly**: Write integration tests for API clients

## Troubleshooting

### Common Issues

**Issue: SSL Certificate Errors**
```java
// Disable SSL verification (development only!)
@Bean
public RestTemplate restTemplate() throws Exception {
    TrustStrategy acceptingTrustStrategy = (cert, authType) -> true;
    SSLContext sslContext = SSLContexts.custom()
        .loadTrustMaterial(null, acceptingTrustStrategy)
        .build();
    SSLConnectionSocketFactory socketFactory =
        new SSLConnectionSocketFactory(sslContext, NoopHostnameVerifier.INSTANCE);

    HttpClient httpClient = HttpClients.custom()
        .setSSLSocketFactory(socketFactory)
        .build();

    HttpComponentsClientHttpRequestFactory factory =
        new HttpComponentsClientHttpRequestFactory(httpClient);

    return new RestTemplate(factory);
}
```

**Issue: Connection Timeouts**
```properties
# Configure timeouts
api.usermanagement.connectionTimeout=5000
api.usermanagement.readTimeout=10000
```

## Next Steps

- [Create Backend for Frontend (BFF)](./creating-bff.md)
- [Create Mock APIs for Testing](./creating-mock-apis.md)
- [Secure Your APIs](../security/authentication-authorization.md)
