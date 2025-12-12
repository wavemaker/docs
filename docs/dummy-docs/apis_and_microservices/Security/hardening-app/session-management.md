# Session Persistence & Management

Learn how to implement secure session management for maintaining user authentication state.

## Session Storage Options

### 1. Memory Store (Development Only)
```javascript
import session from 'express-session';

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    httpOnly: true,
    maxAge: 3600000 // 1 hour
  }
}));
```

### 2. Redis Store (Production)
```javascript
import RedisStore from 'connect-redis';
import { createClient } from 'redis';

const redisClient = createClient({
  host: 'localhost',
  port: 6379
});

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    httpOnly: true,
    maxAge: 3600000
  }
}));
```

### 3. Database Store
```javascript
import MongoStore from 'connect-mongo';

app.use(session({
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    touchAfter: 24 * 3600 // Update only once in 24 hours
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
```

## Session Configuration

```javascript
const sessionConfig = {
  name: 'sessionId', // Custom name (don't use default)
  secret: process.env.SESSION_SECRET, // Strong secret
  resave: false,
  saveUninitialized: false,
  rolling: true, // Reset expiration on activity
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 1000 * 60 * 60, // 1 hour
    sameSite: 'strict'
  },
  store: sessionStore
};

app.use(session(sessionConfig));
```

## Session Timeout

```javascript
function sessionTimeout(timeout = 30 * 60 * 1000) {
  return (req, res, next) => {
    if (req.session.userId) {
      const now = Date.now();
      const lastActivity = req.session.lastActivity || now;
      
      if (now - lastActivity > timeout) {
        req.session.destroy();
        return res.status(401).json({ 
          error: 'Session expired',
          code: 'SESSION_TIMEOUT'
        });
      }
      
      req.session.lastActivity = now;
    }
    next();
  };
}

app.use(sessionTimeout(30 * 60 * 1000)); // 30 minutes
```

## Session Security

```javascript
// Session regeneration after login
app.post('/login', async (req, res) => {
  const user = await authenticateUser(req.body);
  
  if (user) {
    req.session.regenerate((err) => {
      if (err) {
        return res.status(500).json({ error: 'Session error' });
      }
      
      req.session.userId = user.id;
      req.session.role = user.role;
      res.json({ success: true });
    });
  }
});

// Session destruction on logout
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' });
    }
    res.clearCookie('sessionId');
    res.json({ success: true });
  });
});
```

## Best Practices

1. Use secure session stores (Redis, Database)
2. Set appropriate session timeouts
3. Regenerate session ID after login
4. Use secure cookie settings
5. Implement session timeout warnings
6. Clear sessions on logout
7. Monitor active sessions
8. Implement session limits per user

Proper session management ensures secure and scalable user authentication state handling.
