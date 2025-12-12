# Concurrent Sessions Handling

Manage multiple active sessions per user and implement session limits for enhanced security.

## Session Tracking

```javascript
class SessionManager {
  async createSession(userId, sessionData) {
    const sessionId = generateSessionId();
    
    await redis.hmset(`session:${sessionId}`, {
      userId: userId,
      ...sessionData,
      createdAt: Date.now(),
      lastActivity: Date.now()
    });
    
    // Track user sessions
    await redis.sadd(`user:${userId}:sessions`, sessionId);
    
    return sessionId;
  }
  
  async getUserSessions(userId) {
    const sessionIds = await redis.smembers(`user:${userId}:sessions`);
    const sessions = [];
    
    for (const sessionId of sessionIds) {
      const session = await redis.hgetall(`session:${sessionId}`);
      if (session) {
        sessions.push({ id: sessionId, ...session });
      }
    }
    
    return sessions;
  }
  
  async destroySession(sessionId) {
    const session = await redis.hgetall(`session:${sessionId}`);
    if (session && session.userId) {
      await redis.srem(`user:${session.userId}:sessions`, sessionId);
    }
    await redis.del(`session:${sessionId}`);
  }
}
```

## Session Limits

```javascript
const MAX_SESSIONS_PER_USER = 3;

async function enforceSessionLimit(userId, newSessionId) {
  const sessions = await sessionManager.getUserSessions(userId);
  
  if (sessions.length >= MAX_SESSIONS_PER_USER) {
    // Sort by lastActivity
    sessions.sort((a, b) => a.lastActivity - b.lastActivity);
    
    // Remove oldest session
    await sessionManager.destroySession(sessions[0].id);
  }
}

app.post('/login', async (req, res) => {
  const user = await authenticateUser(req.body);
  
  if (user) {
    const sessionId = await sessionManager.createSession(user.id, {
      ipAddress: req.ip,
      userAgent: req.headers['user-agent']
    });
    
    await enforceSessionLimit(user.id, sessionId);
    
    res.cookie('sessionId', sessionId);
    res.json({ success: true });
  }
});
```

## Device Management

```javascript
app.get('/sessions', authenticateToken, async (req, res) => {
  const sessions = await sessionManager.getUserSessions(req.user.id);
  
  const sessionsWithDetails = sessions.map(session => ({
    id: session.id,
    device: parseUserAgent(session.userAgent),
    location: getLocationFromIP(session.ipAddress),
    lastActivity: new Date(parseInt(session.lastActivity)),
    current: session.id === req.sessionID
  }));
  
  res.json({ sessions: sessionsWithDetails });
});

app.delete('/sessions/:sessionId', authenticateToken, async (req, res) => {
  const sessionId = req.params.sessionId;
  const session = await redis.hgetall(`session:${sessionId}`);
  
  if (session.userId !== req.user.id) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  
  await sessionManager.destroySession(sessionId);
  res.json({ success: true });
});
```

## Force Logout All Sessions

```javascript
app.post('/sessions/logout-all', authenticateToken, async (req, res) => {
  const sessions = await sessionManager.getUserSessions(req.user.id);
  
  for (const session of sessions) {
    if (session.id !== req.sessionID) {
      await sessionManager.destroySession(session.id);
    }
  }
  
  res.json({ message: 'All other sessions logged out' });
});
```

Managing concurrent sessions provides users control over their active sessions and enhances account security.
