# Remember Me Functionality

Implement secure "Remember Me" functionality to keep users logged in across browser sessions.

## Token-Based Remember Me

```javascript
import crypto from 'crypto';

class RememberMeService {
  async createToken(userId) {
    const token = crypto.randomBytes(32).toString('hex');
    const selector = crypto.randomBytes(16).toString('hex');
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');
    
    await db.query(`
      INSERT INTO remember_tokens (selector, token_hash, user_id, expires_at)
      VALUES ($1, $2, $3, NOW() + INTERVAL '30 days')
    `, [selector, hashedToken, userId]);
    
    return `${selector}:${token}`;
  }
  
  async validateToken(rememberToken) {
    const [selector, token] = rememberToken.split(':');
    
    const result = await db.query(`
      SELECT user_id, token_hash, expires_at
      FROM remember_tokens
      WHERE selector = $1 AND expires_at > NOW()
    `, [selector]);
    
    if (result.length === 0) {
      return null;
    }
    
    const { user_id, token_hash, expires_at } = result[0];
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');
    
    if (hashedToken === token_hash) {
      return user_id;
    }
    
    return null;
  }
  
  async rotateToken(oldToken) {
    const userId = await this.validateToken(oldToken);
    if (!userId) return null;
    
    await this.revokeToken(oldToken);
    return await this.createToken(userId);
  }
  
  async revokeToken(rememberToken) {
    const [selector] = rememberToken.split(':');
    await db.query(`DELETE FROM remember_tokens WHERE selector = $1`, [selector]);
  }
}

// Usage
app.post('/login', async (req, res) => {
  const user = await authenticateUser(req.body);
  
  if (user && req.body.rememberMe) {
    const token = await rememberMeService.createToken(user.id);
    
    res.cookie('remember_me', token, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
    });
  }
  
  res.json({ success: true });
});

// Middleware to check remember me token
async function checkRememberMe(req, res, next) {
  if (!req.session.userId && req.cookies.remember_me) {
    const userId = await rememberMeService.validateToken(req.cookies.remember_me);
    
    if (userId) {
      req.session.userId = userId;
      
      // Rotate token
      const newToken = await rememberMeService.rotateToken(req.cookies.remember_me);
      res.cookie('remember_me', newToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: 'strict'
      });
    } else {
      res.clearCookie('remember_me');
    }
  }
  next();
}
```

## Security Best Practices

1. Hash tokens before storage
2. Use cryptographically secure random tokens
3. Set expiration dates
4. Rotate tokens on each use
5. Use selector:token pattern
6. Revoke tokens on logout
7. Limit active remember tokens per user
8. Use httpOnly, secure cookies

Remember Me functionality improves user experience while maintaining security through proper token management.
