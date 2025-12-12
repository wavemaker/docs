# SAML Integration

Learn how to implement SAML 2.0 (Security Assertion Markup Language) for enterprise Single Sign-On (SSO) authentication.

## SAML Overview

SAML is an XML-based open standard for exchanging authentication and authorization data between an Identity Provider (IdP) and a Service Provider (SP).

### SAML Components

- **Identity Provider (IdP)**: Authenticates users and provides assertions
- **Service Provider (SP)**: Your application that consumes SAML assertions
- **SAML Assertion**: XML document containing authentication information
- **Metadata**: XML document describing SP/IdP configuration

## SAML Authentication Flow

```
User -> SP (Your App) -> IdP (e.g., Okta, Azure AD)
                          ↓
                     Authenticate
                          ↓
                    SAML Response
                          ↓
SP validates <- SAML Assertion
     ↓
User logged in
```

## Implementing SAML Service Provider

### Node.js SAML Implementation

```javascript
import passport from 'passport';
import { Strategy as SamlStrategy } from 'passport-saml';
import fs from 'fs';

// SAML Configuration
const samlConfig = {
  // Service Provider (Your App) Configuration
  callbackUrl: 'https://yourapp.com/auth/saml/callback',
  entryPoint: 'https://idp.example.com/sso/saml',
  issuer: 'yourapp-saml-sp',
  
  // Identity Provider Certificate (for validating assertions)
  cert: fs.readFileSync('./idp-cert.pem', 'utf-8'),
  
  // Service Provider Private Key (for signing requests)
  privateKey: fs.readFileSync('./sp-private-key.pem', 'utf-8'),
  
  // Signature settings
  signatureAlgorithm: 'sha256',
  
  // Attribute mapping
  identifierFormat: 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
  acceptedClockSkewMs: -1,
  
  // Additional settings
  authnContext: [
    'urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport'
  ],
  forceAuthn: false,
  passive: false
};

// Configure Passport SAML Strategy
passport.use(new SamlStrategy(
  samlConfig,
  async (profile, done) => {
    try {
      // Profile contains user information from IdP
      const user = {
        email: profile.nameID || profile.email,
        firstName: profile.firstName || profile.givenName,
        lastName: profile.lastName || profile.surname,
        groups: profile.groups || []
      };

      // Find or create user in database
      let dbUser = await findUserByEmail(user.email);
      
      if (!dbUser) {
        dbUser = await createUser(user);
      } else {
        // Update user info from SAML
        await updateUser(dbUser.id, user);
      }

      return done(null, dbUser);
    } catch (error) {
      return done(error);
    }
  }
));

// SAML Routes
app.get('/auth/saml/login',
  passport.authenticate('saml', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
);

app.post('/auth/saml/callback',
  passport.authenticate('saml', {
    failureRedirect: '/login',
    failureFlash: true
  }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

// SAML Metadata endpoint
app.get('/auth/saml/metadata', (req, res) => {
  res.type('application/xml');
  res.send(samlStrategy.generateServiceProviderMetadata(
    fs.readFileSync('./sp-cert.pem', 'utf-8'),
    fs.readFileSync('./sp-cert.pem', 'utf-8')
  ));
});

// Logout
app.get('/auth/saml/logout', (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect('/');
  });
});
```

### Java SAML Implementation (Spring Security)

```java
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.saml2.provider.service.registration.RelyingPartyRegistration;
import org.springframework.security.saml2.provider.service.registration.RelyingPartyRegistrationRepository;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests(authorize -> authorize
                .antMatchers("/", "/saml/**").permitAll()
                .anyRequest().authenticated()
            )
            .saml2Login(saml2 -> saml2
                .defaultSuccessUrl("/home")
                .failureUrl("/login?error")
            )
            .saml2Logout(saml2 -> saml2
                .logoutUrl("/logout")
                .logoutSuccessUrl("/")
            );
    }

    @Bean
    public RelyingPartyRegistrationRepository relyingPartyRegistrationRepository() {
        RelyingPartyRegistration registration = RelyingPartyRegistration
            .withRegistrationId("okta")
            .entityId("https://yourapp.com")
            .assertionConsumerServiceLocation(
                "https://yourapp.com/login/saml2/sso/okta"
            )
            .singleLogoutServiceLocation(
                "https://yourapp.com/logout/saml2/slo"
            )
            .signingX509Credentials(c -> c.add(samlCredential()))
            .assertingPartyDetails(party -> party
                .entityId("https://idp.example.com")
                .singleSignOnServiceLocation(
                    "https://idp.example.com/sso/saml"
                )
                .verificationX509Credentials(c -> c.add(idpCertificate()))
            )
            .build();

        return new InMemoryRelyingPartyRegistrationRepository(registration);
    }
}

@Controller
public class SamlController {

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/home")
    public String home(Authentication authentication, Model model) {
        Saml2AuthenticatedPrincipal principal = 
            (Saml2AuthenticatedPrincipal) authentication.getPrincipal();
        
        model.addAttribute("name", principal.getName());
        model.addAttribute("attributes", principal.getAttributes());
        
        return "home";
    }
}
```

## SAML Metadata Configuration

### Service Provider Metadata

```xml
<?xml version="1.0"?>
<md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata"
                     entityID="https://yourapp.com">
  <md:SPSSODescriptor 
      protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
    
    <!-- Signing Certificate -->
    <md:KeyDescriptor use="signing">
      <ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
        <ds:X509Data>
          <ds:X509Certificate>
            MIICertificateDataHere...
          </ds:X509Certificate>
        </ds:X509Data>
      </ds:KeyInfo>
    </md:KeyDescriptor>
    
    <!-- Single Logout Service -->
    <md:SingleLogoutService 
        Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
        Location="https://yourapp.com/auth/saml/slo"/>
    
    <!-- Assertion Consumer Service -->
    <md:AssertionConsumerService 
        Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
        Location="https://yourapp.com/auth/saml/callback"
        index="0" isDefault="true"/>
  </md:SPSSODescriptor>
</md:EntityDescriptor>
```

## SAML Assertion Validation

```javascript
class SAMLValidator {
  async validateAssertion(assertion, idpCert) {
    // 1. Validate signature
    if (!this.verifySignature(assertion, idpCert)) {
      throw new Error('Invalid SAML signature');
    }

    // 2. Validate timestamps
    const now = new Date();
    const notBefore = new Date(assertion.Conditions.NotBefore);
    const notOnOrAfter = new Date(assertion.Conditions.NotOnOrAfter);

    if (now < notBefore || now >= notOnOrAfter) {
      throw new Error('SAML assertion expired');
    }

    // 3. Validate audience
    const audience = assertion.Conditions.AudienceRestriction.Audience;
    if (audience !== process.env.SAML_ENTITY_ID) {
      throw new Error('Invalid audience');
    }

    // 4. Validate recipient
    const recipient = assertion.SubjectConfirmation.SubjectConfirmationData.Recipient;
    if (recipient !== process.env.SAML_ACS_URL) {
      throw new Error('Invalid recipient');
    }

    return true;
  }

  verifySignature(assertion, cert) {
    const crypto = require('crypto');
    const verify = crypto.createVerify('RSA-SHA256');
    verify.update(assertion.signedData);
    return verify.verify(cert, assertion.signature, 'base64');
  }
}
```

## Attribute Mapping

```javascript
class SAMLAttributeMapper {
  mapAttributes(samlAttributes) {
    const mapping = {
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress': 'email',
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname': 'firstName',
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname': 'lastName',
      'http://schemas.xmlsoap.org/claims/Group': 'groups'
    };

    const user = {};

    for (const [samlAttr, userAttr] of Object.entries(mapping)) {
      if (samlAttributes[samlAttr]) {
        user[userAttr] = samlAttributes[samlAttr];
      }
    }

    return user;
  }

  mapRoles(groups) {
    const roleMapping = {
      'App-Admins': 'admin',
      'App-Users': 'user',
      'App-Editors': 'editor'
    };

    return groups.map(group => roleMapping[group] || 'viewer');
  }
}
```

## Single Logout (SLO)

```javascript
app.get('/auth/saml/logout', (req, res, next) => {
  samlStrategy.logout(req, (err, url) => {
    if (err) {
      return next(err);
    }

    req.logout((logoutErr) => {
      if (logoutErr) {
        return next(logoutErr);
      }
      
      // Redirect to IdP logout
      res.redirect(url);
    });
  });
});

// Handle SLO response from IdP
app.post('/auth/saml/slo', (req, res) => {
  samlStrategy.logout(req, (err) => {
    if (err) {
      console.error('SLO error:', err);
    }
    
    res.redirect('/');
  });
});
```

## Testing SAML Integration

```javascript
describe('SAML Authentication', () => {
  it('should redirect to IdP for authentication', async () => {
    const response = await request(app)
      .get('/auth/saml/login')
      .expect(302);

    expect(response.headers.location).toContain('idp.example.com');
  });

  it('should process valid SAML response', async () => {
    const samlResponse = generateMockSAMLResponse();

    const response = await request(app)
      .post('/auth/saml/callback')
      .send({ SAMLResponse: samlResponse })
      .expect(302);

    expect(response.headers.location).toBe('/dashboard');
  });

  it('should reject invalid SAML response', async () => {
    const invalidResponse = 'invalid-saml-data';

    const response = await request(app)
      .post('/auth/saml/callback')
      .send({ SAMLResponse: invalidResponse })
      .expect(302);

    expect(response.headers.location).toContain('login');
  });
});
```

## Common IdP Configuration

### Okta
- Entity ID: Your application URL
- ACS URL: `https://yourapp.com/auth/saml/callback`
- Attribute Statements: email, firstName, lastName

### Azure AD
- Identifier: `https://yourapp.com`
- Reply URL: `https://yourapp.com/auth/saml/callback`
- Claims: email, name, groups

### Google Workspace
- Entity ID: Your domain
- ACS URL: `https://yourapp.com/auth/saml/callback`
- Attributes: Primary email, First name, Last name

## Best Practices

1. **Use HTTPS**: Always use HTTPS for SAML endpoints
2. **Validate Assertions**: Thoroughly validate all SAML assertions
3. **Certificate Management**: Rotate certificates regularly
4. **Clock Skew**: Account for time differences between servers
5. **Encrypt Assertions**: Request encrypted assertions from IdP
6. **Metadata Updates**: Keep metadata synchronized
7. **Error Handling**: Log SAML errors for troubleshooting
8. **Session Management**: Implement proper session handling
9. **Single Logout**: Implement SLO when possible
10. **Audit Logging**: Log all SAML authentication events

SAML provides enterprise-grade SSO capabilities, enabling users to authenticate once and access multiple applications seamlessly.
