# REST Services using OAuth 2.0

Learn how to implement and use OAuth 2.0 authentication for secure REST API access.

## OAuth 2.0 Overview

OAuth 2.0 is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service. It works by delegating user authentication to the service that hosts the user account.

### Key Concepts

- **Resource Owner**: The user who owns the data
- **Client**: Your application requesting access
- **Authorization Server**: Issues access tokens
- **Resource Server**: Hosts protected resources
- **Access Token**: Credential used to access protected resources
- **Refresh Token**: Used to obtain new access tokens

## OAuth 2.0 Grant Types

### Authorization Code Flow

Most secure flow for web applications:

```javascript
// Step 1: Redirect user to authorization URL
const authUrl = `https://auth.example.com/authorize?` +
  `response_type=code&` +
  `client_id=${CLIENT_ID}&` +
  `redirect_uri=${REDIRECT_URI}&` +
  `scope=read write&` +
  `state=${generateState()}`;

res.redirect(authUrl);

// Step 2: Handle callback with authorization code
app.get('/callback', async (req, res) => {
  const { code, state } = req.query;

  // Verify state to prevent CSRF
  if (!verifyState(state)) {
    return res.status(400).send('Invalid state');
  }

  // Exchange code for token
  const tokenResponse = await axios.post(
    'https://auth.example.com/token',
    {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }
  );

  const { access_token, refresh_token, expires_in } = tokenResponse.data;

  // Store tokens securely
  await storeTokens(userId, access_token, refresh_token, expires_in);

  res.redirect('/dashboard');
});
```

### Client Credentials Flow

For server-to-server authentication:

```javascript
async function getClientCredentialsToken() {
  const response = await axios.post(
    'https://auth.example.com/token',
    {
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      scope: 'api:read api:write'
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  );

  return response.data.access_token;
}

// Usage
const token = await getClientCredentialsToken();
const apiClient = createClient({
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

### Password Grant Flow

Direct authentication (use with caution):

```javascript
async function authenticateWithPassword(username, password) {
  const response = await axios.post(
    'https://auth.example.com/token',
    {
      grant_type: 'password',
      username: username,
      password: password,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      scope: 'read write'
    }
  );

  return response.data;
}
```

### Refresh Token Flow

Obtain new access tokens:

```javascript
async function refreshAccessToken(refreshToken) {
  try {
    const response = await axios.post(
      'https://auth.example.com/token',
      {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      }
    );

    return {
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token || refreshToken,
      expiresIn: response.data.expires_in
    };
  } catch (error) {
    console.error('Token refresh failed:', error);
    throw error;
  }
}
```

## Token Management

### Token Storage
```javascript
class TokenManager {
  private tokens: Map<string, TokenData>;

  async storeToken(userId: string, tokenData: TokenData) {
    // Encrypt token before storage
    const encrypted = await encrypt(tokenData.accessToken);

    await database.tokens.create({
      userId: userId,
      accessToken: encrypted,
      refreshToken: await encrypt(tokenData.refreshToken),
      expiresAt: new Date(Date.now() + tokenData.expiresIn * 1000)
    });
  }

  async getToken(userId: string): Promise<string> {
    const tokenData = await database.tokens.findOne({ userId });

    if (!tokenData) {
      throw new Error('No token found');
    }

    // Check if token is expired
    if (tokenData.expiresAt < new Date()) {
      return await this.refreshToken(userId, tokenData.refreshToken);
    }

    return await decrypt(tokenData.accessToken);
  }

  async refreshToken(userId: string, refreshToken: string): Promise<string> {
    const decryptedRefreshToken = await decrypt(refreshToken);
    const newTokenData = await refreshAccessToken(decryptedRefreshToken);

    await this.storeToken(userId, newTokenData);
    return newTokenData.accessToken;
  }
}
```

### Automatic Token Refresh
```javascript
class OAuth2Client {
  private tokenManager: TokenManager;

  constructor(tokenManager: TokenManager) {
    this.tokenManager = tokenManager;
  }

  async request(url: string, options = {}) {
    const token = await this.tokenManager.getToken(this.userId);

    try {
      return await axios({
        url,
        ...options,
        headers: {
          ...options.headers,
          'Authorization': `Bearer ${token}`
        }
      });
    } catch (error) {
      if (error.response?.status === 401) {
        // Token expired, refresh and retry
        const newToken = await this.tokenManager.refreshToken(
          this.userId,
          this.refreshToken
        );

        return await axios({
          url,
          ...options,
          headers: {
            ...options.headers,
            'Authorization': `Bearer ${newToken}`
          }
        });
      }
      throw error;
    }
  }
}
```

## Axios Interceptor for OAuth

### Request Interceptor
```javascript
client.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```

### Response Interceptor with Retry
```javascript
client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newToken = await refreshAccessToken(getRefreshToken());
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return client(originalRequest);
      } catch (refreshError) {
        // Refresh failed, redirect to login
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
```

## OAuth 2.0 Client Implementation

### Complete OAuth Client
```javascript
class OAuth2Service {
  private clientId: string;
  private clientSecret: string;
  private tokenEndpoint: string;
  private authEndpoint: string;

  constructor(config: OAuth2Config) {
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
    this.tokenEndpoint = config.tokenEndpoint;
    this.authEndpoint = config.authEndpoint;
  }

  getAuthorizationUrl(redirectUri: string, scope: string[], state: string): string {
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: this.clientId,
      redirect_uri: redirectUri,
      scope: scope.join(' '),
      state: state
    });

    return `${this.authEndpoint}?${params.toString()}`;
  }

  async exchangeCodeForToken(code: string, redirectUri: string): Promise<TokenResponse> {
    const response = await axios.post(
      this.tokenEndpoint,
      {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
        client_id: this.clientId,
        client_secret: this.clientSecret
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    return response.data;
  }

  async refreshToken(refreshToken: string): Promise<TokenResponse> {
    const response = await axios.post(
      this.tokenEndpoint,
      {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: this.clientId,
        client_secret: this.clientSecret
      }
    );

    return response.data;
  }

  async revokeToken(token: string): Promise<void> {
    await axios.post(
      `${this.tokenEndpoint}/revoke`,
      {
        token: token,
        client_id: this.clientId,
        client_secret: this.clientSecret
      }
    );
  }
}
```

## Scopes and Permissions

### Requesting Scopes
```javascript
const authUrl = oauth2Service.getAuthorizationUrl(
  REDIRECT_URI,
  ['read:users', 'write:users', 'read:posts'],
  state
);
```

### Validating Scopes
```javascript
function hasRequiredScope(token: TokenData, requiredScope: string): boolean {
  const scopes = token.scope.split(' ');
  return scopes.includes(requiredScope);
}

// Middleware
function requireScope(scope: string) {
  return async (req, res, next) => {
    const token = await validateToken(req.headers.authorization);

    if (!hasRequiredScope(token, scope)) {
      return res.status(403).json({
        error: 'Insufficient permissions'
      });
    }

    next();
  };
}

// Usage
app.get('/api/users', requireScope('read:users'), getUsers);
```

## Security Best Practices

### Token Security
- Store tokens encrypted at rest
- Use secure HTTP-only cookies for web apps
- Never expose tokens in URLs or logs
- Implement token expiration
- Use HTTPS for all OAuth flows

### PKCE (Proof Key for Code Exchange)
For public clients (mobile/SPA):

```javascript
import crypto from 'crypto';

function generateCodeVerifier(): string {
  return crypto.randomBytes(32).toString('base64url');
}

function generateCodeChallenge(verifier: string): string {
  return crypto
    .createHash('sha256')
    .update(verifier)
    .digest('base64url');
}

// Step 1: Generate and store verifier
const codeVerifier = generateCodeVerifier();
sessionStorage.setItem('code_verifier', codeVerifier);

const codeChallenge = generateCodeChallenge(codeVerifier);

// Step 2: Authorization request with challenge
const authUrl = `${AUTH_ENDPOINT}?` +
  `response_type=code&` +
  `client_id=${CLIENT_ID}&` +
  `redirect_uri=${REDIRECT_URI}&` +
  `code_challenge=${codeChallenge}&` +
  `code_challenge_method=S256`;

// Step 3: Token request with verifier
const tokenResponse = await axios.post(TOKEN_ENDPOINT, {
  grant_type: 'authorization_code',
  code: code,
  redirect_uri: REDIRECT_URI,
  client_id: CLIENT_ID,
  code_verifier: codeVerifier
});
```

### State Parameter
```javascript
function generateState(): string {
  return crypto.randomBytes(16).toString('hex');
}

function storeState(state: string, userId: string) {
  redis.setex(`oauth:state:${state}`, 600, userId); // 10 min expiry
}

function verifyState(state: string): boolean {
  const userId = redis.get(`oauth:state:${state}`);
  redis.del(`oauth:state:${state}`);
  return !!userId;
}
```

## Best Practices

- Use Authorization Code flow with PKCE for public clients
- Use Client Credentials flow for server-to-server
- Always validate state parameter to prevent CSRF
- Store refresh tokens securely
- Implement automatic token refresh
- Handle token expiration gracefully
- Use appropriate scopes (principle of least privilege)
- Revoke tokens when no longer needed
- Monitor for suspicious OAuth activity
- Implement rate limiting on token endpoints
- Use HTTPS for all OAuth communications
- Log OAuth events for audit purposes
