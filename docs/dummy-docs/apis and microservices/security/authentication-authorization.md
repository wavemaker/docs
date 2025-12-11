---
id: authentication-authorization
title: Authentication & Authorization
sidebar_label: Authentication & Authorization
sidebar_position: 1
---

# Authentication & Authorization

Secure your APIs with robust authentication and authorization mechanisms using Spring Security.

## Overview

**Authentication**: Verifies the identity of users (Who are you?)
**Authorization**: Determines what authenticated users can access (What can you do?)

## Authentication Methods

### 1. Basic Authentication

Simple username/password authentication for development and internal APIs.

```java
@Configuration
@EnableWebSecurity
public class BasicAuthSecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .httpBasic(Customizer.withDefaults())
            .csrf(csrf -> csrf.disable());

        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.builder()
            .username("admin")
            .password(passwordEncoder().encode("password"))
            .roles("ADMIN")
            .build();

        return new InMemoryUserDetailsManager(user);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

**Usage:**
```http
GET /api/users
Authorization: Basic YWRtaW46cGFzc3dvcmQ=
```

### 2. JWT (JSON Web Tokens)

Stateless authentication for microservices and SPAs.

#### JWT Configuration

```java
@Configuration
public class JwtSecurityConfig {

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration}")
    private long jwtExpiration;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .addFilterBefore(jwtAuthenticationFilter(),
                UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter();
    }
}
```

#### JWT Utility Class

```java
@Component
public class JwtTokenUtil {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private Long expiration;

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("roles", userDetails.getAuthorities());

        return Jwts.builder()
            .setClaims(claims)
            .setSubject(userDetails.getUsername())
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + expiration))
            .signWith(SignatureAlgorithm.HS512, secret)
            .compact();
    }

    public String getUsernameFromToken(String token) {
        return getClaimsFromToken(token).getSubject();
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        String username = getUsernameFromToken(token);
        return username.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }

    private Claims getClaimsFromToken(String token) {
        return Jwts.parser()
            .setSigningKey(secret)
            .parseClaimsJws(token)
            .getBody();
    }

    private boolean isTokenExpired(String token) {
        Date expiration = getClaimsFromToken(token).getExpiration();
        return expiration.before(new Date());
    }
}
```

#### JWT Filter

```java
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain chain) throws ServletException, IOException {

        String header = request.getHeader("Authorization");

        if (header != null && header.startsWith("Bearer ")) {
            String token = header.substring(7);

            try {
                String username = jwtTokenUtil.getUsernameFromToken(token);

                if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                    UserDetails userDetails = userDetailsService.loadUserByUsername(username);

                    if (jwtTokenUtil.validateToken(token, userDetails)) {
                        UsernamePasswordAuthenticationToken authentication =
                            new UsernamePasswordAuthenticationToken(
                                userDetails, null, userDetails.getAuthorities());

                        authentication.setDetails(
                            new WebAuthenticationDetailsSource().buildDetails(request));

                        SecurityContextHolder.getContext().setAuthentication(authentication);
                    }
                }
            } catch (Exception e) {
                logger.error("JWT authentication failed", e);
            }
        }

        chain.doFilter(request, response);
    }
}
```

#### Login Endpoint

```java
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginRequest request) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    request.getUsername(),
                    request.getPassword()
                )
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);

            UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
            String token = jwtTokenUtil.generateToken(userDetails);

            return ResponseEntity.ok(new JwtResponse(token, "Bearer", userDetails.getUsername()));

        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/me")
    public ResponseEntity<UserInfo> getCurrentUser(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(new UserInfo(userDetails.getUsername(), userDetails.getAuthorities()));
    }
}
```

**Usage:**
```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "password"
}

Response:
{
  "token": "eyJhbGciOiJIUzUxMiJ9...",
  "type": "Bearer",
  "username": "admin"
}

# Use token in subsequent requests
GET /api/users
Authorization: Bearer eyJhbGciOiJIUzUxMiJ9...
```

### 3. OAuth 2.0

Industry-standard protocol for authorization.

```java
@Configuration
@EnableWebSecurity
public class OAuth2SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/login**").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2Login(oauth2 -> oauth2
                .loginPage("/login")
                .defaultSuccessUrl("/dashboard")
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(Customizer.withDefaults())
            );

        return http.build();
    }
}
```

**application.yml:**
```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: ${GOOGLE_CLIENT_ID}
            client-secret: ${GOOGLE_CLIENT_SECRET}
            scope: profile, email
          github:
            client-id: ${GITHUB_CLIENT_ID}
            client-secret: ${GITHUB_CLIENT_SECRET}
            scope: user:email
```

### 4. Single Sign-On (SSO)

#### SAML 2.0

```java
@Configuration
@EnableWebSecurity
public class SamlSecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .saml2Login(Customizer.withDefaults())
            .saml2Logout(Customizer.withDefaults());

        return http.build();
    }
}
```

**application.yml:**
```yaml
spring:
  security:
    saml2:
      relyingparty:
        registration:
          okta:
            entity-id: ${SAML_ENTITY_ID}
            acs:
              location: ${SAML_ACS_URL}
            assertingparty:
              entity-id: ${IDP_ENTITY_ID}
              single-sign-on:
                url: ${IDP_SSO_URL}
              verification:
                credentials:
                  - certificate-location: classpath:idp-certificate.crt
```

## Authorization

### Role-Based Access Control (RBAC)

```java
@Configuration
@EnableMethodSecurity
public class MethodSecurityConfig {
}

@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping
    @PreAuthorize("hasRole('USER')")
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public User createUser(@RequestBody User user) {
        return userService.create(user);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(@PathVariable Long id) {
        userService.delete(id);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('USER') and #id == authentication.principal.id")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.update(id, user);
    }
}
```

### Permission-Based Access Control

```java
@PreAuthorize("hasAuthority('user:read')")
@GetMapping("/{id}")
public User getUser(@PathVariable Long id) {
    return userService.findById(id);
}

@PreAuthorize("hasAuthority('user:write')")
@PostMapping
public User createUser(@RequestBody User user) {
    return userService.create(user);
}

@PreAuthorize("hasAuthority('user:delete')")
@DeleteMapping("/{id}")
public void deleteUser(@PathVariable Long id) {
    userService.delete(id);
}
```

### Custom Authorization Logic

```java
@Component("userSecurity")
public class UserSecurityService {

    public boolean isOwner(Authentication authentication, Long userId) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        User user = userRepository.findByUsername(userDetails.getUsername());
        return user.getId().equals(userId);
    }

    public boolean canAccessResource(Authentication authentication, String resourceId) {
        // Custom logic
        return true;
    }
}

@PreAuthorize("@userSecurity.isOwner(authentication, #id)")
@PutMapping("/{id}")
public User updateUser(@PathVariable Long id, @RequestBody User user) {
    return userService.update(id, user);
}
```

## Security Providers

Learn more about configuring security providers:
- [Security Providers](./providers.md)
- [Hardening Your Application](./hardening-app.md)

## Best Practices

1. **Use HTTPS**: Always encrypt data in transit
2. **Strong Passwords**: Enforce password policies
3. **Token Expiration**: Set appropriate token lifetimes
4. **Refresh Tokens**: Implement token refresh mechanism
5. **Rate Limiting**: Prevent brute force attacks
6. **Audit Logs**: Track authentication events
7. **Principle of Least Privilege**: Grant minimum necessary permissions
8. **Regular Updates**: Keep security libraries updated

## Next Steps

- [Configure Security Providers](./providers.md)
- [Harden Your Application](./hardening-app.md)
- [Set Up Configuration Profiles](../configurations/profiles.md)
