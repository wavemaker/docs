# Authentication & Authorization Overview

Learn about authentication and authorization concepts, their differences, and how to implement secure access control in your application.

## What is Authentication?

Authentication is the process of verifying the identity of a user, device, or system. It answers the question: **"Who are you?"**

### Authentication Methods

- **Password-based**: Username and password
- **Multi-Factor Authentication (MFA)**: Multiple verification methods
- **Biometric**: Fingerprint, face recognition
- **Token-based**: JWT, OAuth tokens
- **Certificate-based**: Digital certificates
- **Single Sign-On (SSO)**: One login for multiple applications

## What is Authorization?

Authorization is the process of determining what an authenticated user is allowed to do. It answers the question: **"What can you do?"**

### Authorization Models

- **Role-Based Access Control (RBAC)**: Permissions based on roles
- **Attribute-Based Access Control (ABAC)**: Permissions based on attributes
- **Permission-Based**: Direct user-to-permission mapping
- **Rule-Based**: Dynamic rules and conditions

## Authentication vs Authorization

| Aspect | Authentication | Authorization |
|--------|---------------|---------------|
| Purpose | Verify identity | Determine permissions |
| Question | Who are you? | What can you do? |
| Process | Login credentials | Access control |
| When | Before authorization | After authentication |
| Example | Username/password | Read/Write access |
| Failure | 401 Unauthorized | 403 Forbidden |

## Authentication Flow

```
┌──────────┐
│  User    │
└────┬─────┘
     │
     │ 1. Login Request (credentials)
     ▼
┌─────────────────┐
│  Application    │
└────┬────────────┘
     │
     │ 2. Validate Credentials
     ▼
┌─────────────────┐
│  Auth Service   │
└────┬────────────┘
     │
     │ 3. Generate Token
     ▼
┌─────────────────┐
│  User Session   │
└─────────────────┘
```

## Authorization Flow

```
┌──────────┐
│  User    │
└────┬─────┘
     │
     │ 1. Request Resource (with token)
     ▼
┌─────────────────┐
│  Application    │
└────┬────────────┘
     │
     │ 2. Verify Token
     ▼
┌─────────────────┐
│  Auth Service   │
└────┬────────────┘
     │
     │ 3. Check Permissions
     ▼
┌─────────────────┐
│  Authorization  │
│     Engine      │
└────┬────────────┘
     │
     │ 4. Grant/Deny Access
     ▼
┌─────────────────┐
│   Resource      │
└─────────────────┘
```

## Common Authentication Patterns

### Session-Based Authentication

```javascript
// Server-side session storage
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await authenticateUser(username, password);

  if (user) {
    // Create session
    req.session.userId = user.id;
    req.session.role = user.role;

    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Protected route
app.get('/profile', requireAuth, (req, res) => {
  const userId = req.session.userId;
  // Return user profile
});
```

### Token-Based Authentication (JWT)

```javascript
import jwt from 'jsonwebtoken';

// Generate token
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await authenticateUser(username, password);

  if (user) {
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Verify token middleware
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}
```

## Authorization Patterns

### Role-Based Authorization

```javascript
// Middleware to check role
function requireRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
}

// Admin only route
app.delete('/users/:id', verifyToken, requireRole('admin'), (req, res) => {
  // Delete user
});
```

### Permission-Based Authorization

```javascript
function requirePermission(permission) {
  return (req, res, next) => {
    if (!req.user.permissions.includes(permission)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    next();
  };
}

// Check specific permission
app.post('/articles',
  verifyToken,
  requirePermission('articles:create'),
  (req, res) => {
    // Create article
  }
);
```

## Security Best Practices

### Authentication Best Practices

1. **Use Strong Password Policies**
   - Minimum 12 characters
   - Combination of uppercase, lowercase, numbers, special characters
   - Check against common password lists
   - Password history to prevent reuse

2. **Implement Multi-Factor Authentication**
   - SMS/Email OTP
   - Authenticator apps (TOTP)
   - Biometric verification
   - Hardware tokens

3. **Secure Password Storage**
   - Use bcrypt, argon2, or scrypt
   - Never store passwords in plain text
   - Use appropriate salt rounds (10-12 for bcrypt)

4. **Account Security**
   - Implement account lockout after failed attempts
   - Use CAPTCHA for repeated failures
   - Monitor for suspicious login patterns
   - Implement password reset flows securely

5. **Token Security**
   - Use short expiration times
   - Implement token refresh mechanism
   - Store tokens securely (httpOnly cookies for web)
   - Implement token revocation

### Authorization Best Practices

1. **Principle of Least Privilege**
   - Grant minimum necessary permissions
   - Review and audit permissions regularly
   - Remove unused permissions

2. **Defense in Depth**
   - Implement multiple layers of authorization
   - Check permissions at API layer and data layer
   - Validate on both client and server

3. **Secure API Endpoints**
   - Authenticate every request
   - Validate authorization for every action
   - Return appropriate HTTP status codes

4. **Audit and Logging**
   - Log all authentication attempts
   - Log authorization decisions
   - Monitor for suspicious patterns
   - Maintain audit trails

## Common Vulnerabilities

### Authentication Vulnerabilities

1. **Weak Passwords**
   - Solution: Enforce strong password policies

2. **Brute Force Attacks**
   - Solution: Rate limiting, account lockout, CAPTCHA

3. **Session Hijacking**
   - Solution: HTTPS, secure cookies, session timeout

4. **Credential Stuffing**
   - Solution: MFA, breach detection, rate limiting

### Authorization Vulnerabilities

1. **Privilege Escalation**
   - Solution: Proper role hierarchy, permission validation

2. **Insecure Direct Object References (IDOR)**
   - Solution: Authorization checks for every resource

3. **Missing Function Level Access Control**
   - Solution: Authorization middleware on all routes

4. **Cross-Site Request Forgery (CSRF)**
   - Solution: CSRF tokens, SameSite cookies

## Implementation Checklist

### Authentication
- [ ] Implement strong password policies
- [ ] Hash passwords with bcrypt/argon2
- [ ] Implement multi-factor authentication
- [ ] Use secure token generation
- [ ] Implement session timeout
- [ ] Add rate limiting for login attempts
- [ ] Log authentication events
- [ ] Implement password reset flow
- [ ] Use HTTPS for all authentication

### Authorization
- [ ] Define roles and permissions
- [ ] Implement role-based access control
- [ ] Add permission checks to all routes
- [ ] Validate ownership of resources
- [ ] Implement proper error handling
- [ ] Log authorization decisions
- [ ] Regular permission audits
- [ ] Test authorization logic thoroughly

## Testing Authentication & Authorization

```javascript
// Test authentication
describe('Authentication', () => {
  test('should login with valid credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({ username: 'testuser', password: 'password123' });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  test('should reject invalid credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({ username: 'testuser', password: 'wrongpassword' });

    expect(response.status).toBe(401);
  });
});

// Test authorization
describe('Authorization', () => {
  test('should allow admin to delete users', async () => {
    const token = generateToken({ role: 'admin' });
    const response = await request(app)
      .delete('/users/123')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });

  test('should deny regular user from deleting users', async () => {
    const token = generateToken({ role: 'user' });
    const response = await request(app)
      .delete('/users/123')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(403);
  });
});
```

## Monitoring and Auditing

### Key Metrics to Monitor

- Failed login attempts
- Successful logins by user/location
- Permission denied events
- Token refresh rates
- Session durations
- MFA usage rates
- Password reset requests
- Account lockouts

### Audit Log Example

```javascript
function logAuthEvent(event, details) {
  auditLogger.info({
    event: event,
    timestamp: new Date().toISOString(),
    userId: details.userId,
    username: details.username,
    ipAddress: details.ipAddress,
    userAgent: details.userAgent,
    success: details.success,
    reason: details.reason
  });
}

// Usage
logAuthEvent('LOGIN_ATTEMPT', {
  userId: user?.id,
  username: username,
  ipAddress: req.ip,
  userAgent: req.headers['user-agent'],
  success: loginSuccess,
  reason: loginSuccess ? 'Valid credentials' : 'Invalid password'
});
```

## Next Steps

- Learn about [Authentication](authentication.md) implementation details
- Understand [Authorization](authorization.md) mechanisms
- Explore [Role-Based Permissions](role-based-permissions.md)
- Review [Access Levels](access-levels.md) configuration

Understanding the fundamentals of authentication and authorization is crucial for building secure applications. Proper implementation of these concepts protects your users and your application from unauthorized access.
