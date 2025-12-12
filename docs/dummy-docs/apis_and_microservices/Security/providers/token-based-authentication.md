# Token-Based Authentication

Learn how to implement secure token-based authentication using JWT, OAuth 2.0, and other token mechanisms.

## JWT (JSON Web Tokens)

### JWT Structure

A JWT consists of three parts separated by dots:
- **Header**: Token type and hashing algorithm
- **Payload**: Claims (user data)
- **Signature**: Verification signature

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOiJ1c2VyIn0.signature
```

### Implementing JWT Authentication

```javascript
import jwt from 'jsonwebtoken';

class JWTService {
  constructor() {
    this.accessSecret = process.env.JWT_ACCESS_SECRET;
    this.refreshSecret = process.env.JWT_REFRESH_SECRET;
  }

  // Generate access token (short-lived)
  generateAccessToken(payload) {
    return jwt.sign(payload, this.accessSecret, {
      expiresIn: '15m',
      algorithm: 'HS256',
      issuer: 'myapp.com',
      audience: 'myapp-users'
    });
  }

  // Generate refresh token (long-lived)
  generateRefreshToken(payload) {
    return jwt.sign(
      { userId: payload.userId },
      this.refreshSecret,
      {
        expiresIn: '7d',
        algorithm: 'HS256'
      }
    );
  }

  // Verify access token
  verifyAccessToken(token) {
    try {
      return jwt.verify(token, this.accessSecret, {
        algorithms: ['HS256'],
        issuer: 'myapp.com',
        audience: 'myapp-users'
      });
    } catch (error) {
      throw new Error('Invalid or expired token');
    }
  }

  // Verify refresh token
  verifyRefreshToken(token) {
    try {
      return jwt.verify(token, this.refreshSecret, {
        algorithms: ['HS256']
      });
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }

  // Decode without verification (for debugging)
  decode(token) {
    return jwt.decode(token, { complete: true });
  }
}

// Login endpoint
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await authenticateUser(email, password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const jwtService = new JWTService();
  const payload = {
    userId: user.id,
    email: user.email,
    role: user.role
  };

  const accessToken = jwtService.generateAccessToken(payload);
  const refreshToken = jwtService.generateRefreshToken(payload);

  // Store refresh token
  await storeRefreshToken(user.id, refreshToken);

  res.json({
    accessToken,
    refreshToken,
    expiresIn: 900 // 15 minutes
  });
});

// Refresh token endpoint
app.post('/auth/refresh', async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ error: 'Refresh token required' });
  }

  const jwtService = new JWTService();

  try {
    const payload = jwtService.verifyRefreshToken(refreshToken);
    const isValid = await verifyStoredToken(payload.userId, refreshToken);

    if (!isValid) {
      return res.status(401).json({ error: 'Invalid refresh token' });
    }

    const user = await getUserById(payload.userId);
    const newAccessToken = jwtService.generateAccessToken({
      userId: user.id,
      email: user.email,
      role: user.role
    });

    res.json({ accessToken: newAccessToken });
  } catch (error) {
    res.status(401).json({ error: 'Invalid refresh token' });
  }
});

// Protected route middleware
function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token required' });
  }

  const jwtService = new JWTService();

  try {
    const user = jwtService.verifyAccessToken(token);
    req.user = user;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid or expired token' });
  }
}
```

## OAuth 2.0

### OAuth 2.0 Flows

#### Authorization Code Flow (Most Secure)

```javascript
import crypto from 'crypto';

class OAuth2Service {
  // Step 1: Generate authorization URL
  getAuthorizationURL(clientId, redirectUri, scope, state) {
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      redirect_uri: redirectUri,
      scope: scope.join(' '),
      state: state || crypto.randomBytes(16).toString('hex')
    });

    return `https://oauth-provider.com/authorize?${params}`;
  }

  // Step 2: Exchange authorization code for tokens
  async exchangeCodeForTokens(code, clientId, clientSecret, redirectUri) {
    const response = await fetch('https://oauth-provider.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(
          `${clientId}:${clientSecret}`
        ).toString('base64')}`
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri
      })
    });

    return await response.json();
  }

  // Step 3: Refresh access token
  async refreshAccessToken(refreshToken, clientId, clientSecret) {
    const response = await fetch('https://oauth-provider.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: clientId,
        client_secret: clientSecret
      })
    });

    return await response.json();
  }

  // Revoke token
  async revokeToken(token, clientId, clientSecret) {
    await fetch('https://oauth-provider.com/revoke', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        token: token,
        client_id: clientId,
        client_secret: clientSecret
      })
    });
  }
}

// OAuth routes
app.get('/auth/oauth/authorize', (req, res) => {
  const oauth = new OAuth2Service();
  const authUrl = oauth.getAuthorizationURL(
    process.env.OAUTH_CLIENT_ID,
    'http://localhost:3000/auth/oauth/callback',
    ['read:user', 'write:user'],
    req.session.oauthState
  );

  res.redirect(authUrl);
});

app.get('/auth/oauth/callback', async (req, res) => {
  const { code, state } = req.query;

  if (state !== req.session.oauthState) {
    return res.status(400).json({ error: 'Invalid state parameter' });
  }

  const oauth = new OAuth2Service();

  try {
    const tokens = await oauth.exchangeCodeForTokens(
      code,
      process.env.OAUTH_CLIENT_ID,
      process.env.OAUTH_CLIENT_SECRET,
      'http://localhost:3000/auth/oauth/callback'
    );

    // Store tokens securely
    await storeOAuthTokens(req.user.id, tokens);

    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).json({ error: 'OAuth authentication failed' });
  }
});
```

#### Client Credentials Flow (Server-to-Server)

```javascript
async function getClientCredentialsToken() {
  const response = await fetch('https://oauth-provider.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      scope: 'api:read api:write'
    })
  });

  const data = await response.json();
  return data.access_token;
}
```

## Token Management

### Token Storage

```javascript
class TokenStore {
  // Store refresh token in database
  async storeRefreshToken(userId, token, expiresIn) {
    const expiresAt = new Date(Date.now() + expiresIn * 1000);

    await db.query(`
      INSERT INTO refresh_tokens (user_id, token, expires_at, created_at)
      VALUES ($1, $2, $3, NOW())
    `, [userId, token, expiresAt]);
  }

  // Verify refresh token exists
  async verifyRefreshToken(userId, token) {
    const result = await db.query(`
      SELECT * FROM refresh_tokens
      WHERE user_id = $1 AND token = $2 AND expires_at > NOW()
    `, [userId, token]);

    return result.length > 0;
  }

  // Revoke refresh token
  async revokeRefreshToken(userId, token) {
    await db.query(`
      DELETE FROM refresh_tokens
      WHERE user_id = $1 AND token = $2
    `, [userId, token]);
  }

  // Revoke all user tokens (logout from all devices)
  async revokeAllUserTokens(userId) {
    await db.query(`
      DELETE FROM refresh_tokens WHERE user_id = $1
    `, [userId]);
  }

  // Clean up expired tokens
  async cleanupExpiredTokens() {
    await db.query(`
      DELETE FROM refresh_tokens WHERE expires_at < NOW()
    `);
  }
}
```

### Token Rotation

```javascript
class TokenRotation {
  async rotateRefreshToken(oldRefreshToken) {
    const jwtService = new JWTService();

    // Verify old token
    const payload = jwtService.verifyRefreshToken(oldRefreshToken);

    // Generate new tokens
    const newAccessToken = jwtService.generateAccessToken({
      userId: payload.userId,
      email: payload.email,
      role: payload.role
    });

    const newRefreshToken = jwtService.generateRefreshToken({
      userId: payload.userId
    });

    // Revoke old refresh token
    await revokeRefreshToken(payload.userId, oldRefreshToken);

    // Store new refresh token
    await storeRefreshToken(payload.userId, newRefreshToken);

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken
    };
  }
}
```

## Token Security Best Practices

### 1. Token Expiration

```javascript
const tokenConfig = {
  accessToken: {
    expiresIn: '15m',    // Short-lived
    algorithm: 'HS256'
  },
  refreshToken: {
    expiresIn: '7d',     // Longer-lived
    algorithm: 'HS256'
  },
  passwordResetToken: {
    expiresIn: '1h',     // Very short-lived
    singleUse: true
  }
};
```

### 2. Secure Token Storage (Client-Side)

```javascript
// GOOD: httpOnly cookie (not accessible via JavaScript)
res.cookie('refreshToken', refreshToken, {
  httpOnly: true,
  secure: true,       // HTTPS only
  sameSite: 'strict', // CSRF protection
  maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
});

// AVOID: localStorage (vulnerable to XSS)
// localStorage.setItem('token', accessToken); // Don't do this for sensitive tokens
```

### 3. Token Blacklisting

```javascript
class TokenBlacklist {
  async blacklistToken(token, expiresAt) {
    await redis.setex(
      `blacklist:${token}`,
      Math.floor((expiresAt - Date.now()) / 1000),
      '1'
    );
  }

  async isBlacklisted(token) {
    const exists = await redis.exists(`blacklist:${token}`);
    return exists === 1;
  }
}

// Middleware to check blacklist
async function checkTokenBlacklist(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  const blacklist = new TokenBlacklist();

  if (await blacklist.isBlacklisted(token)) {
    return res.status(401).json({ error: 'Token has been revoked' });
  }

  next();
}
```

## Testing Token Authentication

```javascript
describe('Token Authentication', () => {
  describe('JWT Generation', () => {
    it('should generate valid access token', () => {
      const jwtService = new JWTService();
      const payload = { userId: 1, role: 'user' };
      const token = jwtService.generateAccessToken(payload);

      expect(token).toBeDefined();
      expect(token.split('.')).toHaveLength(3);
    });

    it('should verify valid token', () => {
      const jwtService = new JWTService();
      const payload = { userId: 1, role: 'user' };
      const token = jwtService.generateAccessToken(payload);

      const verified = jwtService.verifyAccessToken(token);

      expect(verified.userId).toBe(1);
      expect(verified.role).toBe('user');
    });

    it('should reject expired token', async () => {
      // Generate token with 1ms expiration
      const token = jwt.sign(
        { userId: 1 },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: '1ms' }
      );

      await new Promise(resolve => setTimeout(resolve, 10));

      expect(() => {
        jwtService.verifyAccessToken(token);
      }).toThrow('Invalid or expired token');
    });
  });

  describe('Token Refresh', () => {
    it('should refresh access token', async () => {
      const tokens = await loginUser('test@example.com', 'password');
      const response = await request(app)
        .post('/auth/refresh')
        .send({ refreshToken: tokens.refreshToken });

      expect(response.status).toBe(200);
      expect(response.body.accessToken).toBeDefined();
    });
  });
});
```

Token-based authentication provides a stateless, scalable authentication mechanism. Proper implementation of JWT and OAuth 2.0 ensures secure access to your application's resources.
