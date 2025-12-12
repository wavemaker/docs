# Java Integration Services

Learn how to create Java services that integrate with external systems, APIs, and services.

## Creating a Java Service

### Basic Service Structure
```java
package com.example.services;

import com.platform.annotations.Service;
import com.platform.annotations.ServiceMethod;

@Service
public class UserIntegrationService {

    @ServiceMethod
    public UserDTO getUserById(int userId) {
        // Service implementation
        return new UserDTO();
    }

    @ServiceMethod
    public List<UserDTO> getAllUsers() {
        // Service implementation
        return new ArrayList<>();
    }
}
```

### Service Configuration
```java
@Service(
    name = "UserService",
    version = "1.0",
    timeout = 30000
)
public class UserIntegrationService {
    // Service methods
}
```

## REST Client Integration

### Using RestTemplate
```java
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

@Service
public class ExternalApiService {

    private final RestTemplate restTemplate;
    private final String baseUrl;

    public ExternalApiService() {
        this.restTemplate = new RestTemplate();
        this.baseUrl = "https://api.example.com";
    }

    @ServiceMethod
    public UserResponse getUser(int userId) {
        String url = baseUrl + "/users/" + userId;

        try {
            ResponseEntity<UserResponse> response = restTemplate.getForEntity(
                url,
                UserResponse.class
            );

            if (response.getStatusCode() == HttpStatus.OK) {
                return response.getBody();
            } else {
                throw new ServiceException("Failed to fetch user");
            }
        } catch (Exception e) {
            throw new ServiceException("API call failed", e);
        }
    }

    @ServiceMethod
    public UserResponse createUser(UserRequest request) {
        String url = baseUrl + "/users";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<UserRequest> entity = new HttpEntity<>(request, headers);

        ResponseEntity<UserResponse> response = restTemplate.postForEntity(
            url,
            entity,
            UserResponse.class
        );

        return response.getBody();
    }
}
```

### Using WebClient (Reactive)
```java
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;

@Service
public class ReactiveApiService {

    private final WebClient webClient;

    public ReactiveApiService() {
        this.webClient = WebClient.builder()
            .baseUrl("https://api.example.com")
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
            .build();
    }

    @ServiceMethod
    public Mono<UserResponse> getUserAsync(int userId) {
        return webClient
            .get()
            .uri("/users/{id}", userId)
            .retrieve()
            .bodyToMono(UserResponse.class)
            .timeout(Duration.ofSeconds(30));
    }

    @ServiceMethod
    public Flux<UserResponse> getAllUsersAsync() {
        return webClient
            .get()
            .uri("/users")
            .retrieve()
            .bodyToFlux(UserResponse.class);
    }

    @ServiceMethod
    public Mono<UserResponse> createUserAsync(UserRequest request) {
        return webClient
            .post()
            .uri("/users")
            .body(Mono.just(request), UserRequest.class)
            .retrieve()
            .bodyToMono(UserResponse.class);
    }
}
```

## HTTP Client Configuration

### Custom Headers
```java
@Service
public class AuthenticatedApiService {

    private final RestTemplate restTemplate;

    @ServiceMethod
    public ResponseDTO callApi(String endpoint) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + getAccessToken());
        headers.set("X-API-Key", getApiKey());
        headers.set("User-Agent", "MyApp/1.0");

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<ResponseDTO> response = restTemplate.exchange(
            endpoint,
            HttpMethod.GET,
            entity,
            ResponseDTO.class
        );

        return response.getBody();
    }

    private String getAccessToken() {
        // Retrieve from configuration or token manager
        return System.getenv("API_ACCESS_TOKEN");
    }

    private String getApiKey() {
        return System.getenv("API_KEY");
    }
}
```

### Request Interceptors
```java
import org.springframework.http.HttpRequest;
import org.springframework.http.client.*;

public class LoggingInterceptor implements ClientHttpRequestInterceptor {

    @Override
    public ClientHttpResponse intercept(
        HttpRequest request,
        byte[] body,
        ClientHttpRequestExecution execution
    ) throws IOException {

        // Log request
        System.out.println("Request: " + request.getMethod() + " " + request.getURI());
        System.out.println("Headers: " + request.getHeaders());

        // Execute request
        ClientHttpResponse response = execution.execute(request, body);

        // Log response
        System.out.println("Response: " + response.getStatusCode());

        return response;
    }
}

// Configure RestTemplate with interceptor
RestTemplate restTemplate = new RestTemplate();
List<ClientHttpRequestInterceptor> interceptors = new ArrayList<>();
interceptors.add(new LoggingInterceptor());
restTemplate.setInterceptors(interceptors);
```

## Error Handling

### Exception Handling
```java
@Service
public class RobustApiService {

    @ServiceMethod
    public UserResponse getUser(int userId) {
        try {
            return callExternalApi(userId);
        } catch (HttpClientErrorException e) {
            if (e.getStatusCode() == HttpStatus.NOT_FOUND) {
                throw new UserNotFoundException("User not found: " + userId);
            } else if (e.getStatusCode() == HttpStatus.UNAUTHORIZED) {
                throw new AuthenticationException("Authentication failed");
            } else {
                throw new ServiceException("Client error: " + e.getMessage());
            }
        } catch (HttpServerErrorException e) {
            throw new ServiceException("Server error: " + e.getMessage());
        } catch (ResourceAccessException e) {
            throw new ServiceException("Connection failed: " + e.getMessage());
        } catch (Exception e) {
            throw new ServiceException("Unexpected error", e);
        }
    }
}
```

### Retry Logic
```java
import org.springframework.retry.annotation.Retryable;
import org.springframework.retry.annotation.Backoff;

@Service
public class ResilientApiService {

    @ServiceMethod
    @Retryable(
        value = { HttpServerErrorException.class, ResourceAccessException.class },
        maxAttempts = 3,
        backoff = @Backoff(delay = 1000, multiplier = 2)
    )
    public UserResponse getUserWithRetry(int userId) {
        return restTemplate.getForObject(
            baseUrl + "/users/" + userId,
            UserResponse.class
        );
    }
}
```

### Circuit Breaker
```java
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;

@Service
public class CircuitBreakerService {

    @ServiceMethod
    @CircuitBreaker(name = "externalApi", fallbackMethod = "getUserFallback")
    public UserResponse getUser(int userId) {
        return restTemplate.getForObject(
            baseUrl + "/users/" + userId,
            UserResponse.class
        );
    }

    // Fallback method
    public UserResponse getUserFallback(int userId, Exception e) {
        System.err.println("Circuit breaker activated: " + e.getMessage());
        return new UserResponse(); // Return default or cached data
    }
}
```

## SOAP Web Services

### SOAP Client
```java
import javax.xml.ws.Service;
import javax.xml.namespace.QName;

@Service
public class SoapIntegrationService {

    @ServiceMethod
    public String callSoapService(String request) {
        try {
            // Create service connection
            URL wsdlUrl = new URL("http://example.com/service?wsdl");
            QName serviceName = new QName(
                "http://example.com/",
                "UserService"
            );

            Service service = Service.create(wsdlUrl, serviceName);

            // Get port
            UserServicePort port = service.getPort(UserServicePort.class);

            // Call SOAP method
            return port.getUser(request);

        } catch (Exception e) {
            throw new ServiceException("SOAP call failed", e);
        }
    }
}
```

## Message Queue Integration

### JMS Consumer
```java
import javax.jms.*;
import org.springframework.jms.annotation.JmsListener;

@Service
public class MessageQueueService {

    @JmsListener(destination = "user.events")
    public void handleUserEvent(Message message) {
        try {
            if (message instanceof TextMessage) {
                String text = ((TextMessage) message).getText();
                processUserEvent(text);
            }
        } catch (JMSException e) {
            throw new ServiceException("Failed to process message", e);
        }
    }

    private void processUserEvent(String eventData) {
        // Process the event
        System.out.println("Processing event: " + eventData);
    }
}
```

### RabbitMQ Integration
```java
import org.springframework.amqp.rabbit.annotation.RabbitListener;

@Service
public class RabbitMQService {

    @RabbitListener(queues = "userQueue")
    public void receiveMessage(String message) {
        System.out.println("Received: " + message);
        // Process message
    }

    @ServiceMethod
    public void sendMessage(String message) {
        rabbitTemplate.convertAndSend("userExchange", "userRoutingKey", message);
    }
}
```

## File Operations

### File Upload
```java
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileIntegrationService {

    @ServiceMethod
    public String uploadFile(MultipartFile file) {
        try {
            String fileName = file.getOriginalFilename();
            Path path = Paths.get("/uploads/" + fileName);

            Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);

            return "File uploaded successfully: " + fileName;
        } catch (IOException e) {
            throw new ServiceException("File upload failed", e);
        }
    }

    @ServiceMethod
    public byte[] downloadFile(String fileName) {
        try {
            Path path = Paths.get("/uploads/" + fileName);
            return Files.readAllBytes(path);
        } catch (IOException e) {
            throw new ServiceException("File download failed", e);
        }
    }
}
```

## Caching

### In-Memory Caching
```java
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.CacheEvict;

@Service
public class CachedApiService {

    @ServiceMethod
    @Cacheable(value = "users", key = "#userId")
    public UserResponse getUser(int userId) {
        // This result will be cached
        return restTemplate.getForObject(
            baseUrl + "/users/" + userId,
            UserResponse.class
        );
    }

    @ServiceMethod
    @CacheEvict(value = "users", key = "#userId")
    public void invalidateUserCache(int userId) {
        // Cache will be cleared for this user
    }

    @ServiceMethod
    @CacheEvict(value = "users", allEntries = true)
    public void clearAllCache() {
        // Clear entire cache
    }
}
```

## Best Practices

### Service Design
- Keep services focused and cohesive
- Use dependency injection
- Implement proper error handling
- Add logging for debugging
- Use timeouts for external calls
- Implement circuit breakers
- Cache when appropriate

### Performance
- Use connection pooling
- Implement async operations for I/O
- Batch requests when possible
- Use appropriate timeouts
- Monitor service performance

### Security
- Validate input parameters
- Secure API credentials
- Use HTTPS for external calls
- Implement rate limiting
- Log security events

### Testing
```java
@Test
public void testGetUser() {
    // Mock external API
    MockRestServiceServer mockServer = MockRestServiceServer
        .createServer(restTemplate);

    mockServer
        .expect(requestTo(baseUrl + "/users/1"))
        .andExpect(method(HttpMethod.GET))
        .andRespond(withSuccess(
            "{\"id\":1,\"name\":\"Test User\"}",
            MediaType.APPLICATION_JSON
        ));

    // Test service
    UserResponse response = service.getUser(1);

    assertNotNull(response);
    assertEquals(1, response.getId());
    assertEquals("Test User", response.getName());

    mockServer.verify();
}
```

## Configuration Properties

```java
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "external.api")
public class ApiConfiguration {
    private String baseUrl;
    private int timeout;
    private String apiKey;

    // Getters and setters
}

@Service
public class ConfiguredApiService {

    private final ApiConfiguration config;

    public ConfiguredApiService(ApiConfiguration config) {
        this.config = config;
    }

    @ServiceMethod
    public UserResponse getUser(int userId) {
        // Use config.getBaseUrl(), config.getTimeout(), etc.
    }
}
```
