# Central Authentication System (CAS)

Learn how to integrate CAS (Central Authentication Service) for centralized Single Sign-On authentication.

## CAS Overview

CAS is an open-source enterprise Single Sign-On solution that provides authentication and authorization for web applications.

### CAS Components

- **CAS Server**: Central authentication server
- **CAS Client**: Your application (service)
- **Service Ticket (ST)**: Single-use ticket for service authentication
- **Ticket Granting Ticket (TGT)**: Session ticket for SSO
- **Proxy Ticket (PT)**: For backend service authentication

## CAS Authentication Flow

```
1. User accesses Service → Redirect to CAS Server
2. User authenticates at CAS Server
3. CAS Server issues Ticket Granting Ticket (TGT)
4. CAS Server redirects back with Service Ticket (ST)
5. Service validates ST with CAS Server
6. CAS Server confirms → User logged in
```

## Implementing CAS Client

### Node.js CAS Implementation

```javascript
import CAS from 'cas-authentication';

class CASAuthService {
  constructor() {
    this.cas = new CAS({
      cas_url: 'https://cas.example.com/cas',
      service_url: 'https://yourapp.com',
      cas_version: '3.0',
      renew: false,
      is_dev_mode: false,
      dev_mode_user: '',
      dev_mode_info: {},
      session_name: 'cas_user',
      session_info: 'cas_userinfo',
      destroy_session: false
    });
  }

  // Middleware to check authentication
  authenticate() {
    return (req, res, next) => {
      this.cas.bounce(req, res, next);
    };
  }

  // Middleware to redirect to CAS login
  bounce() {
    return (req, res, next) => {
      this.cas.bounce_redirect(req, res, next);
    };
  }

  // Middleware to handle CAS response
  validate() {
    return (req, res, next) => {
      this.cas.block(req, res, next);
    };
  }

  // Logout
  logout() {
    return (req, res, next) => {
      this.cas.logout(req, res, next);
    };
  }
}

// Usage
const casAuth = new CASAuthService();

// Protect routes
app.get('/protected',
  casAuth.authenticate(),
  (req, res) => {
    res.json({
      user: req.session.cas_user,
      attributes: req.session.cas_userinfo
    });
  }
);

// CAS callback endpoint
app.get('/cas/callback',
  casAuth.validate(),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

// Logout endpoint
app.get('/logout',
  casAuth.logout(),
  (req, res) => {
    res.redirect('/');
  }
);
```

### Java CAS Client (Spring Security)

```java
import org.jasig.cas.client.validation.Cas30ServiceTicketValidator;
import org.springframework.security.cas.ServiceProperties;
import org.springframework.security.cas.authentication.CasAuthenticationProvider;
import org.springframework.security.cas.web.CasAuthenticationEntryPoint;
import org.springframework.security.cas.web.CasAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class CASSecurityConfig extends WebSecurityConfigurerAdapter {

    @Value("${cas.server.url}")
    private String casServerUrl;

    @Value("${app.service.url}")
    private String appServiceUrl;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers("/", "/login").permitAll()
                .anyRequest().authenticated()
            .and()
            .exceptionHandling()
                .authenticationEntryPoint(casAuthenticationEntryPoint())
            .and()
            .addFilter(casAuthenticationFilter());
    }

    @Bean
    public ServiceProperties serviceProperties() {
        ServiceProperties serviceProperties = new ServiceProperties();
        serviceProperties.setService(appServiceUrl + "/login/cas");
        serviceProperties.setSendRenew(false);
        return serviceProperties;
    }

    @Bean
    public CasAuthenticationEntryPoint casAuthenticationEntryPoint() {
        CasAuthenticationEntryPoint entryPoint = new CasAuthenticationEntryPoint();
        entryPoint.setLoginUrl(casServerUrl + "/login");
        entryPoint.setServiceProperties(serviceProperties());
        return entryPoint;
    }

    @Bean
    public CasAuthenticationFilter casAuthenticationFilter() {
        CasAuthenticationFilter filter = new CasAuthenticationFilter();
        filter.setAuthenticationManager(authenticationManager());
        filter.setServiceProperties(serviceProperties());
        return filter;
    }

    @Bean
    public CasAuthenticationProvider casAuthenticationProvider() {
        CasAuthenticationProvider provider = new CasAuthenticationProvider();
        provider.setServiceProperties(serviceProperties());
        provider.setTicketValidator(cas30ServiceTicketValidator());
        provider.setUserDetailsService(userDetailsService());
        provider.setKey("CAS_PROVIDER_KEY");
        return provider;
    }

    @Bean
    public Cas30ServiceTicketValidator cas30ServiceTicketValidator() {
        return new Cas30ServiceTicketValidator(casServerUrl);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) {
        auth.authenticationProvider(casAuthenticationProvider());
    }
}

@Controller
public class CASController {

    @GetMapping("/")
    public String home() {
        return "home";
    }

    @GetMapping("/secure")
    public String secure(Authentication authentication, Model model) {
        model.addAttribute("username", authentication.getName());
        return "secure";
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request) {
        request.getSession().invalidate();
        return "redirect:" + casServerUrl + "/logout";
    }
}
```

## Service Ticket Validation

```javascript
import axios from 'axios';
import xml2js from 'xml2js';

class CASTicketValidator {
  constructor(casServerUrl) {
    this.casServerUrl = casServerUrl;
    this.parser = new xml2js.Parser();
  }

  async validateServiceTicket(ticket, service) {
    try {
      const validateUrl = `${this.casServerUrl}/serviceValidate`;
      const params = new URLSearchParams({
        ticket: ticket,
        service: service
      });

      const response = await axios.get(`${validateUrl}?${params}`);
      const result = await this.parser.parseStringPromise(response.data);

      if (result['cas:serviceResponse']['cas:authenticationSuccess']) {
        const success = result['cas:serviceResponse']['cas:authenticationSuccess'][0];
        
        return {
          valid: true,
          user: success['cas:user'][0],
          attributes: this.parseAttributes(success['cas:attributes'])
        };
      } else {
        const failure = result['cas:serviceResponse']['cas:authenticationFailure'][0];
        
        return {
          valid: false,
          error: failure.$.code,
          message: failure._
        };
      }
    } catch (error) {
      throw new Error(`CAS validation failed: ${error.message}`);
    }
  }

  parseAttributes(attributes) {
    if (!attributes || !attributes[0]) {
      return {};
    }

    const attrs = {};
    const attrObj = attributes[0];

    for (const key in attrObj) {
      if (key.startsWith('cas:')) {
        const attrName = key.replace('cas:', '');
        attrs[attrName] = attrObj[key][0];
      }
    }

    return attrs;
  }
}

// Usage
app.get('/login/cas', async (req, res) => {
  const ticket = req.query.ticket;
  const service = `${process.env.APP_URL}/login/cas`;

  if (!ticket) {
    return res.redirect(
      `${process.env.CAS_SERVER_URL}/login?service=${encodeURIComponent(service)}`
    );
  }

  const validator = new CASTicketValidator(process.env.CAS_SERVER_URL);

  try {
    const result = await validator.validateServiceTicket(ticket, service);

    if (result.valid) {
      req.session.user = result.user;
      req.session.attributes = result.attributes;
      res.redirect('/dashboard');
    } else {
      res.status(401).send(`Authentication failed: ${result.message}`);
    }
  } catch (error) {
    res.status(500).send('CAS validation error');
  }
});
```

## Proxy Authentication

```javascript
class CASProxyAuthenticator {
  constructor(casServerUrl, serviceUrl) {
    this.casServerUrl = casServerUrl;
    this.serviceUrl = serviceUrl;
  }

  async getProxyTicket(pgt, targetService) {
    const proxyUrl = `${this.casServerUrl}/proxy`;
    const params = new URLSearchParams({
      pgt: pgt,
      targetService: targetService
    });

    const response = await axios.get(`${proxyUrl}?${params}`);
    const result = await this.parseProxyResponse(response.data);

    if (result.success) {
      return result.proxyTicket;
    } else {
      throw new Error(`Proxy ticket request failed: ${result.error}`);
    }
  }

  async validateProxyTicket(ticket, service, pgtUrl) {
    const validateUrl = `${this.casServerUrl}/proxyValidate`;
    const params = new URLSearchParams({
      ticket: ticket,
      service: service,
      pgtUrl: pgtUrl
    });

    const response = await axios.get(`${validateUrl}?${params}`);
    return await this.parseValidationResponse(response.data);
  }

  parseProxyResponse(xml) {
    // Parse proxy ticket response
    // Returns { success: true/false, proxyTicket: 'PT-xxx', error: 'message' }
  }

  parseValidationResponse(xml) {
    // Parse validation response
    // Returns { valid: true/false, user: 'username', pgt: 'PGT-xxx' }
  }
}
```

## CAS Single Logout

```javascript
class CASSingleLogout {
  constructor(casServerUrl) {
    this.casServerUrl = casServerUrl;
    this.activeSessions = new Map();
  }

  // Store session mapping
  registerSession(serviceTicket, sessionId) {
    this.activeSessions.set(serviceTicket, sessionId);
  }

  // Handle single logout request
  async handleLogoutRequest(req, res) {
    const logoutRequest = req.body.logoutRequest;

    if (!logoutRequest) {
      return res.status(400).send('Invalid logout request');
    }

    try {
      const parser = new xml2js.Parser();
      const result = await parser.parseStringPromise(logoutRequest);
      
      const sessionIndex = result['samlp:LogoutRequest']
        ['samlp:SessionIndex'][0];

      // Find and destroy session
      const sessionId = this.activeSessions.get(sessionIndex);
      
      if (sessionId) {
        await this.destroySession(sessionId);
        this.activeSessions.delete(sessionIndex);
      }

      res.status(200).send('Logout successful');
    } catch (error) {
      res.status(500).send('Logout processing failed');
    }
  }

  async destroySession(sessionId) {
    // Destroy session in your session store
    await sessionStore.destroy(sessionId);
  }
}

// Endpoint to handle SLO callback
app.post('/cas/logout',
  express.urlencoded({ extended: true }),
  async (req, res) => {
    const slo = new CASSingleLogout(process.env.CAS_SERVER_URL);
    await slo.handleLogoutRequest(req, res);
  }
);
```

## CAS Protocol Versions

### CAS 1.0 - Basic
```
/validate?service=SERVICE&ticket=TICKET
```

### CAS 2.0 - XML Response
```
/serviceValidate?service=SERVICE&ticket=TICKET
```

### CAS 3.0 - With Attributes
```
/serviceValidate?service=SERVICE&ticket=TICKET
Returns additional user attributes
```

## Testing CAS Integration

```javascript
describe('CAS Authentication', () => {
  let mockCASServer;

  beforeEach(() => {
    mockCASServer = nock('https://cas.example.com');
  });

  it('should redirect to CAS for authentication', async () => {
    const response = await request(app)
      .get('/protected')
      .expect(302);

    expect(response.headers.location).toContain('cas.example.com/login');
  });

  it('should validate service ticket', async () => {
    const ticket = 'ST-123456-abc';
    
    mockCASServer
      .get('/serviceValidate')
      .query({ ticket, service: true })
      .reply(200, `
        <cas:serviceResponse xmlns:cas='http://www.yale.edu/tp/cas'>
          <cas:authenticationSuccess>
            <cas:user>testuser</cas:user>
          </cas:authenticationSuccess>
        </cas:serviceResponse>
      `);

    const validator = new CASTicketValidator('https://cas.example.com');
    const result = await validator.validateServiceTicket(ticket, 'http://localhost');

    expect(result.valid).toBe(true);
    expect(result.user).toBe('testuser');
  });

  it('should handle invalid ticket', async () => {
    const ticket = 'ST-INVALID';
    
    mockCASServer
      .get('/serviceValidate')
      .query({ ticket, service: true })
      .reply(200, `
        <cas:serviceResponse xmlns:cas='http://www.yale.edu/tp/cas'>
          <cas:authenticationFailure code="INVALID_TICKET">
            Ticket not recognized
          </cas:authenticationFailure>
        </cas:serviceResponse>
      `);

    const validator = new CASTicketValidator('https://cas.example.com');
    const result = await validator.validateServiceTicket(ticket, 'http://localhost');

    expect(result.valid).toBe(false);
    expect(result.error).toBe('INVALID_TICKET');
  });
});
```

## Configuration Best Practices

1. **Use HTTPS**: Always use HTTPS for CAS communication
2. **Service URL**: Ensure service URL matches exactly
3. **Session Management**: Implement robust session handling
4. **Ticket Validation**: Always validate tickets server-side
5. **Single Logout**: Implement SLO for security
6. **Timeout Configuration**: Set appropriate ticket timeouts
7. **Error Handling**: Handle CAS errors gracefully
8. **Logging**: Log authentication events
9. **Testing**: Test with CAS test server first
10. **Certificate Validation**: Validate SSL certificates

## Common Issues and Solutions

### Issue: Ticket validation fails
**Solution**: Verify service URL matches exactly (including protocol, host, port, path)

### Issue: Single logout not working
**Solution**: Ensure `/cas/logout` endpoint accepts POST requests and processes logoutRequest parameter

### Issue: Infinite redirect loop
**Solution**: Check session configuration and ensure tickets aren't being reused

CAS provides a robust centralized authentication solution suitable for enterprise environments with multiple applications requiring SSO.
