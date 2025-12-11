---
id: providers
title: Security Providers
sidebar_label: Providers
sidebar_position: 2
---

# Security Providers

Configure and integrate various authentication and identity providers with your WaveMaker applications.

## Overview

Security providers enable integration with external identity management systems and authentication services:

- OAuth 2.0 / OpenID Connect providers (Google, GitHub, Azure AD, Okta)
- SAML 2.0 identity providers
- LDAP / Active Directory
- Custom authentication providers
- Multi-factor authentication (MFA)

## OAuth 2.0 Providers

### Google OAuth

```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: ${GOOGLE_CLIENT_ID}
            client-secret: ${GOOGLE_CLIENT_SECRET}
            scope:
              - email
              - profile
            redirect-uri: "{baseUrl}/login/oauth2/code/{registrationId}"
        provider:
          google:
            authorization-uri: https://accounts.google.com/o/oauth2/v2/auth
            token-uri: https://oauth2.googleapis.com/token
            user-info-uri: https://www.googleapis.com/oauth2/v3/userinfo
            user-name-attribute: sub
```

### GitHub OAuth

```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          github:
            client-id: ${GITHUB_CLIENT_ID}
            client-secret: ${GITHUB_CLIENT_SECRET}
            scope:
              - user:email
              - read:user
```

### Azure AD (Microsoft)

```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          azure:
            client-id: ${AZURE_CLIENT_ID}
            client-secret: ${AZURE_CLIENT_SECRET}
            scope:
              - openid
              - profile
              - email
        provider:
          azure:
            issuer-uri: https://login.microsoftonline.com/${AZURE_TENANT_ID}/v2.0
```

### Okta

```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          okta:
            client-id: ${OKTA_CLIENT_ID}
            client-secret: ${OKTA_CLIENT_SECRET}
            scope:
              - openid
              - profile
              - email
        provider:
          okta:
            issuer-uri: https://${OKTA_DOMAIN}/oauth2/default
```

## SAML 2.0 Providers

```yaml
spring:
  security:
    saml2:
      relyingparty:
        registration:
          okta:
            entity-id: ${SP_ENTITY_ID}
            acs:
              location: ${SP_ACS_URL}
              binding: POST
            slo:
              location: ${SP_SLO_URL}
              binding: POST
            assertingparty:
              entity-id: ${IDP_ENTITY_ID}
              single-sign-on:
                url: ${IDP_SSO_URL}
                binding: POST
              single-logout:
                url: ${IDP_SLO_URL}
                binding: POST
              verification:
                credentials:
                  - certificate-location: classpath:saml/idp-certificate.crt
            signing:
              credentials:
                - private-key-location: classpath:saml/sp-private-key.pem
                  certificate-location: classpath:saml/sp-certificate.crt
```

## LDAP / Active Directory

```java
@Configuration
public class LdapSecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .formLogin(Customizer.withDefaults());

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(BaseLdapPathContextSource contextSource) {
        LdapBindAuthenticationManagerFactory factory =
            new LdapBindAuthenticationManagerFactory(contextSource);
        factory.setUserDnPatterns("uid={0},ou=people");
        factory.setUserDetailsContextMapper(new InetOrgPersonContextMapper());
        return factory.createAuthenticationManager();
    }
}
```

```yaml
spring:
  ldap:
    urls: ldap://localhost:389
    base: dc=example,dc=com
    username: cn=admin,dc=example,dc=com
    password: ${LDAP_PASSWORD}
```

## Custom Authentication Provider

```java
@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication)
            throws AuthenticationException {
        String username = authentication.getName();
        String password = authentication.getCredentials().toString();

        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new BadCredentialsException("Invalid credentials"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new BadCredentialsException("Invalid credentials");
        }

        if (!user.isActive()) {
            throw new DisabledException("User account is disabled");
        }

        List<GrantedAuthority> authorities = user.getRoles().stream()
            .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
            .collect(Collectors.toList());

        return new UsernamePasswordAuthenticationToken(username, password, authorities);
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
    }
}
```

## Multi-Factor Authentication (MFA)

### TOTP (Time-based One-Time Password)

```java
@Service
public class MfaService {

    public String generateSecretKey() {
        return new String(Base32.encode(
            UUID.randomUUID().toString().getBytes()
        ));
    }

    public String generateQRCodeUrl(String username, String secret) {
        return String.format(
            "otpauth://totp/%s:%s?secret=%s&issuer=%s",
            "MyApp", username, secret, "MyApp"
        );
    }

    public boolean verifyCode(String secret, String code) {
        Totp totp = new Totp(secret);
        return totp.verify(code);
    }
}

@RestController
@RequestMapping("/api/mfa")
public class MfaController {

    @Autowired
    private MfaService mfaService;

    @PostMapping("/setup")
    public MfaSetupResponse setupMfa(@AuthenticationPrincipal User user) {
        String secret = mfaService.generateSecretKey();
        String qrCodeUrl = mfaService.generateQRCodeUrl(user.getUsername(), secret);

        // Save secret to user
        user.setMfaSecret(secret);
        userRepository.save(user);

        return new MfaSetupResponse(secret, qrCodeUrl);
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyMfa(
            @AuthenticationPrincipal User user,
            @RequestBody MfaVerifyRequest request) {
        boolean isValid = mfaService.verifyCode(user.getMfaSecret(), request.getCode());

        if (isValid) {
            user.setMfaEnabled(true);
            userRepository.save(user);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.badRequest().body("Invalid code");
    }
}
```

## Social Login Integration

```java
@Configuration
@EnableWebSecurity
public class SocialLoginConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/login**", "/error").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2Login(oauth2 -> oauth2
                .loginPage("/login")
                .userInfoEndpoint(userInfo -> userInfo
                    .userService(this.oauth2UserService())
                )
                .successHandler(oauth2AuthenticationSuccessHandler())
            );

        return http.build();
    }

    @Bean
    public OAuth2UserService<OAuth2UserRequest, OAuth2User> oauth2UserService() {
        return new CustomOAuth2UserService();
    }

    @Bean
    public AuthenticationSuccessHandler oauth2AuthenticationSuccessHandler() {
        return new CustomOAuth2AuthenticationSuccessHandler();
    }
}

@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) {
        OAuth2User oauth2User = super.loadUser(userRequest);

        String provider = userRequest.getClientRegistration().getRegistrationId();
        String email = oauth2User.getAttribute("email");

        User user = userRepository.findByEmail(email)
            .orElseGet(() -> {
                User newUser = new User();
                newUser.setEmail(email);
                newUser.setProvider(provider);
                newUser.setProviderId(oauth2User.getName());
                return userRepository.save(newUser);
            });

        return new CustomOAuth2User(oauth2User, user);
    }
}
```

## API Key Authentication

```java
@Component
public class ApiKeyAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private ApiKeyService apiKeyService;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain chain) throws ServletException, IOException {

        String apiKey = request.getHeader("X-API-Key");

        if (apiKey != null && apiKeyService.isValidKey(apiKey)) {
            ApiKeyDetails details = apiKeyService.getApiKeyDetails(apiKey);

            Authentication authentication = new ApiKeyAuthenticationToken(
                details,
                details.getAuthorities()
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        chain.doFilter(request, response);
    }
}
```

## Best Practices

1. **Secure Credentials**: Use environment variables or secrets management
2. **Scope Management**: Request only necessary OAuth scopes
3. **Token Validation**: Always validate tokens on the server side
4. **Fallback Options**: Provide multiple authentication methods
5. **Session Management**: Implement proper session timeout and renewal
6. **Audit Logging**: Track all authentication attempts
7. **Regular Rotation**: Rotate API keys and secrets regularly

## Next Steps

- [Harden Your Application](./hardening-app.md)
- [Configure Profiles](../configurations/profiles.md)
- [Testing & Debugging](../testing-debugging/unit-testing.md)
