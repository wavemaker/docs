---
id: hardening-app
title: Hardening Your Application
sidebar_label: Hardening App
sidebar_position: 3
---

# Hardening Your Application

Security best practices and configurations to protect your APIs and microservices from common vulnerabilities and attacks.

## HTTPS/TLS Configuration

### Enable HTTPS

```yaml
server:
  port: 8443
  ssl:
    enabled: true
    key-store: classpath:keystore.p12
    key-store-password: ${KEYSTORE_PASSWORD}
    key-store-type: PKCS12
    key-alias: tomcat
```

### Force HTTPS

```java
@Configuration
public class HttpsConfig {

    @Bean
    public ServletWebServerFactory servletContainer() {
        TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory() {
            @Override
            protected void postProcessContext(Context context) {
                SecurityConstraint securityConstraint = new SecurityConstraint();
                securityConstraint.setUserConstraint("CONFIDENTIAL");
                SecurityCollection collection = new SecurityCollection();
                collection.addPattern("/*");
                securityConstraint.addCollection(collection);
                context.addConstraint(securityConstraint);
            }
        };
        tomcat.addAdditionalTomcatConnectors(httpToHttpsRedirectConnector());
        return tomcat;
    }

    private Connector httpToHttpsRedirectConnector() {
        Connector connector = new Connector(TomcatServletWebServerFactory.DEFAULT_PROTOCOL);
        connector.setScheme("http");
        connector.setPort(8080);
        connector.setSecure(false);
        connector.setRedirectPort(8443);
        return connector;
    }
}
```

## Security Headers

```java
@Configuration
@EnableWebSecurity
public class SecurityHeadersConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .headers(headers -> headers
                .contentSecurityPolicy(csp -> csp
                    .policyDirectives("default-src 'self'; script-src 'self' 'unsafe-inline'")
                )
                .xssProtection(xss -> xss.block(true))
                .contentTypeOptions(Customizer.withDefaults())
                .frameOptions(frame -> frame.deny())
                .httpStrictTransportSecurity(hsts -> hsts
                    .includeSubDomains(true)
                    .maxAgeInSeconds(31536000)
                )
            );

        return http.build();
    }
}
```

## CORS Configuration

```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOrigins("https://example.com")
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowedHeaders("*")
            .allowCredentials(true)
            .maxAge(3600);
    }
}
```

## CSRF Protection

```java
@Configuration
public class CsrfConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .ignoringRequestMatchers("/api/public/**")
            );

        return http.build();
    }
}
```

## Input Validation

```java
@RestController
@Validated
public class UserController {

    @PostMapping("/users")
    public User createUser(@Valid @RequestBody UserDTO userDTO) {
        return userService.create(userDTO);
    }
}

public class UserDTO {
    @NotBlank(message = "Username is required")
    @Size(min = 3, max = 50)
    @Pattern(regexp = "^[a-zA-Z0-9_]+$")
    private String username;

    @Email(message = "Invalid email format")
    @NotBlank
    private String email;

    @NotBlank
    @Size(min = 8, message = "Password must be at least 8 characters")
    @Pattern(
        regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$",
        message = "Password must contain uppercase, lowercase, digit, and special character"
    )
    private String password;
}
```

## SQL Injection Prevention

```java
// ✅ Good: Using JPA/Hibernate
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}

// ✅ Good: Parameterized queries
@Query("SELECT u FROM User u WHERE u.email = :email")
User findByEmail(@Param("email") String email);

// ❌ Bad: String concatenation
// @Query("SELECT u FROM User u WHERE u.email = '" + email + "'") // NEVER DO THIS!
```

## Rate Limiting

```java
@Configuration
public class RateLimitConfig {

    @Bean
    public RateLimiter rateLimiter() {
        return RateLimiter.of("api", RateLimiterConfig.custom()
            .limitForPeriod(100)
            .limitRefreshPeriod(Duration.ofMinutes(1))
            .timeoutDuration(Duration.ofSeconds(5))
            .build());
    }
}

@RestController
public class ApiController {

    @Autowired
    private RateLimiter rateLimiter;

    @GetMapping("/api/data")
    @RateLimited
    public ResponseEntity<Data> getData() {
        return RateLimiter.decorateSupplier(rateLimiter, () -> {
            return ResponseEntity.ok(dataService.getData());
        }).get();
    }
}
```

## API Throttling with Bucket4j

```java
@Component
public class RateLimitInterceptor implements HandlerInterceptor {

    private final Map<String, Bucket> cache = new ConcurrentHashMap<>();

    @Override
    public boolean preHandle(
            HttpServletRequest request,
            HttpServletResponse response,
            Object handler) throws Exception {

        String apiKey = request.getHeader("X-API-Key");
        Bucket bucket = resolveBucket(apiKey);

        ConsumptionProbe probe = bucket.tryConsumeAndReturnRemaining(1);

        if (probe.isConsumed()) {
            response.addHeader("X-Rate-Limit-Remaining",
                String.valueOf(probe.getRemainingTokens()));
            return true;
        }

        response.setStatus(429);
        response.getWriter().write("Too many requests");
        return false;
    }

    private Bucket resolveBucket(String apiKey) {
        return cache.computeIfAbsent(apiKey, k -> {
            Bandwidth limit = Bandwidth.classic(100, Refill.intervally(100, Duration.ofMinutes(1)));
            return Bucket.builder().addLimit(limit).build();
        });
    }
}
```

## Password Security

```java
@Configuration
public class PasswordConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12); // Strong cost factor
    }
}

@Service
public class PasswordService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    public boolean isPasswordStrong(String password) {
        return password.length() >= 12 &&
               password.matches(".*[A-Z].*") &&
               password.matches(".*[a-z].*") &&
               password.matches(".*\\d.*") &&
               password.matches(".*[@$!%*?&].*");
    }

    public void changePassword(User user, String oldPassword, String newPassword) {
        if (!passwordEncoder.matches(oldPassword, user.getPassword())) {
            throw new BadCredentialsException("Invalid old password");
        }

        if (!isPasswordStrong(newPassword)) {
            throw new WeakPasswordException("Password does not meet strength requirements");
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        user.setPasswordChangedAt(LocalDateTime.now());
        userRepository.save(user);
    }
}
```

## Secrets Management

```java
// Using environment variables
@Value("${database.password}")
private String dbPassword;

// Using Spring Cloud Config
@Configuration
@ConfigurationProperties(prefix = "app.security")
public class SecurityProperties {
    private String jwtSecret;
    private String apiKey;
    // getters and setters
}

// Using Vault
@Configuration
public class VaultConfig {

    @Bean
    public VaultTemplate vaultTemplate() {
        VaultEndpoint endpoint = new VaultEndpoint();
        endpoint.setHost("vault.example.com");
        endpoint.setPort(8200);
        endpoint.setScheme("https");

        VaultTemplate template = new VaultTemplate(
            endpoint,
            new TokenAuthentication(vaultToken())
        );

        return template;
    }
}
```

## Error Handling

```java
@RestControllerAdvice
public class SecurityExceptionHandler {

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ErrorResponse> handleAccessDenied(AccessDeniedException ex) {
        // Don't expose internal details
        return ResponseEntity
            .status(HttpStatus.FORBIDDEN)
            .body(new ErrorResponse("Access denied"));
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ErrorResponse> handleAuthenticationError(AuthenticationException ex) {
        // Generic message to prevent user enumeration
        return ResponseEntity
            .status(HttpStatus.UNAUTHORIZED)
            .body(new ErrorResponse("Invalid credentials"));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericError(Exception ex) {
        log.error("Unexpected error", ex);
        // Don't expose stack traces
        return ResponseEntity
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(new ErrorResponse("An error occurred"));
    }
}
```

## Logging & Monitoring

```java
@Aspect
@Component
public class SecurityAuditAspect {

    private static final Logger log = LoggerFactory.getLogger(SecurityAuditAspect.class);

    @Autowired
    private AuditLogRepository auditLogRepository;

    @AfterReturning("@annotation(PreAuthorize)")
    public void logAuthorizedAccess(JoinPoint joinPoint) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth != null ? auth.getName() : "anonymous";
        String method = joinPoint.getSignature().toShortString();

        AuditLog auditLog = new AuditLog();
        auditLog.setUsername(username);
        auditLog.setAction(method);
        auditLog.setTimestamp(LocalDateTime.now());
        auditLog.setSuccess(true);

        auditLogRepository.save(auditLog);
        log.info("User {} accessed {}", username, method);
    }

    @AfterThrowing(pointcut = "@annotation(PreAuthorize)", throwing = "ex")
    public void logUnauthorizedAccess(JoinPoint joinPoint, Exception ex) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth != null ? auth.getName() : "anonymous";
        String method = joinPoint.getSignature().toShortString();

        AuditLog auditLog = new AuditLog();
        auditLog.setUsername(username);
        auditLog.setAction(method);
        auditLog.setTimestamp(LocalDateTime.now());
        auditLog.setSuccess(false);
        auditLog.setError(ex.getMessage());

        auditLogRepository.save(auditLog);
        log.warn("User {} failed to access {}: {}", username, method, ex.getMessage());
    }
}
```

## Dependency Scanning

```xml
<!-- Maven plugin for security vulnerabilities -->
<plugin>
    <groupId>org.owasp</groupId>
    <artifactId>dependency-check-maven</artifactId>
    <version>8.4.0</version>
    <executions>
        <execution>
            <goals>
                <goal>check</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

```bash
# Run dependency check
mvn dependency-check:check

# Check for outdated dependencies
mvn versions:display-dependency-updates
```

## Security Checklist

- [ ] Enable HTTPS/TLS
- [ ] Implement security headers
- [ ] Configure CORS properly
- [ ] Enable CSRF protection
- [ ] Validate all inputs
- [ ] Use parameterized queries
- [ ] Implement rate limiting
- [ ] Use strong password policies
- [ ] Secure secrets and credentials
- [ ] Handle errors gracefully
- [ ] Log security events
- [ ] Scan dependencies regularly
- [ ] Keep libraries updated
- [ ] Implement MFA
- [ ] Regular security audits

## Next Steps

- [Configure Profiles](../configurations/profiles.md)
- [Build Connectors](../connectors/framework.md)
- [Unit Testing](../testing-debugging/unit-testing.md)
