# Login Configuration

Configure secure login pages and authentication flows for your application.

## Login Page Setup

### Basic Login Form

```html
<!-- login.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <form action="/auth/login" method="POST" id="loginForm">
        <input type="hidden" name="_csrf" value="{{csrfToken}}">
        
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required autocomplete="username">
        </div>
        
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required 
                   autocomplete="current-password" minlength="12">
        </div>
        
        <div>
            <label>
                <input type="checkbox" name="rememberMe"> Remember Me
            </label>
        </div>
        
        <button type="submit">Login</button>
        
        <div>
            <a href="/auth/forgot-password">Forgot Password?</a>
        </div>
    </form>
</body>
</html>
```

### Login Handler

```javascript
app.post('/auth/login', 
    csrfProtection,
    rateLimit({ max: 5, windowMs: 15 * 60 * 1000 }),
    async (req, res) => {
        const { email, password, rememberMe } = req.body;

        try {
            // Validate input
            if (!email || !password) {
                return res.status(400).json({ error: 'Email and password required' });
            }

            // Find user
            const user = await User.findOne({ email });
            if (!user) {
                await logFailedAttempt(email, req.ip);
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Check if account is locked
            if (user.isLocked()) {
                return res.status(423).json({ 
                    error: 'Account locked',
                    unlockTime: user.lockUntil
                });
            }

            // Verify password
            const isValid = await user.comparePassword(password);
            if (!isValid) {
                await user.incLoginAttempts();
                await logFailedAttempt(email, req.ip);
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Reset login attempts
            await user.resetLoginAttempts();

            // Create session
            req.session.userId = user._id;
            req.session.role = user.role;

            // Set remember me cookie
            if (rememberMe) {
                const token = await createRememberMeToken(user._id);
                res.cookie('remember_me', token, {
                    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
                    httpOnly: true,
                    secure: true,
                    sameSite: 'strict'
                });
            }

            // Log successful login
            await logSuccessfulLogin(user._id, req.ip);

            res.json({
                success: true,
                user: {
                    id: user._id,
                    email: user.email,
                    role: user.role
                }
            });

        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ error: 'Login failed' });
        }
    }
);
```

## Multi-Factor Authentication

```javascript
// Enable MFA
app.post('/auth/mfa/enable', authenticateToken, async (req, res) => {
    const user = await User.findById(req.user.id);
    
    // Generate secret
    const secret = speakeasy.generateSecret({
        name: `MyApp (${user.email})`
    });

    // Store secret temporarily
    user.mfaTempSecret = secret.base32;
    await user.save();

    // Generate QR code
    const qrCode = await QRCode.toDataURL(secret.otpauth_url);

    res.json({
        secret: secret.base32,
        qrCode: qrCode
    });
});

// Verify and activate MFA
app.post('/auth/mfa/verify', authenticateToken, async (req, res) => {
    const { token } = req.body;
    const user = await User.findById(req.user.id);

    const verified = speakeasy.totp.verify({
        secret: user.mfaTempSecret,
        encoding: 'base32',
        token: token,
        window: 2
    });

    if (verified) {
        user.mfaSecret = user.mfaTempSecret;
        user.mfaEnabled = true;
        user.mfaTempSecret = undefined;
        await user.save();

        res.json({ message: 'MFA enabled successfully' });
    } else {
        res.status(400).json({ error: 'Invalid MFA token' });
    }
});

// Login with MFA
app.post('/auth/login/mfa', async (req, res) => {
    const { email, password, mfaToken } = req.body;

    const user = await User.findOne({ email });
    if (!user || !await user.comparePassword(password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (user.mfaEnabled) {
        const verified = speakeasy.totp.verify({
            secret: user.mfaSecret,
            encoding: 'base32',
            token: mfaToken,
            window: 2
        });

        if (!verified) {
            return res.status(401).json({ error: 'Invalid MFA token' });
        }
    }

    // Create session
    req.session.userId = user._id;
    res.json({ success: true });
});
```

## Social Login Integration

```javascript
// Google OAuth
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/dashboard');
    }
);

// GitHub OAuth
app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/dashboard');
    }
);
```

## Account Lockout Policy

```javascript
const loginAttemptsSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    attempts: { type: Number, default: 0 },
    lockUntil: { type: Date },
    lastAttempt: { type: Date }
});

loginAttemptsSchema.methods.incLoginAttempts = async function() {
    // Check if lock has expired
    if (this.lockUntil && this.lockUntil < Date.now()) {
        return await this.updateOne({
            $set: { attempts: 1, lastAttempt: Date.now() },
            $unset: { lockUntil: 1 }
        });
    }

    const updates = {
        $inc: { attempts: 1 },
        $set: { lastAttempt: Date.now() }
    };

    // Lock account after 5 failed attempts
    const MAX_ATTEMPTS = 5;
    const LOCK_TIME = 30 * 60 * 1000; // 30 minutes

    if (this.attempts + 1 >= MAX_ATTEMPTS && !this.isLocked()) {
        updates.$set.lockUntil = Date.now() + LOCK_TIME;
    }

    return await this.updateOne(updates);
};

loginAttemptsSchema.methods.isLocked = function() {
    return !!(this.lockUntil && this.lockUntil > Date.now());
};

loginAttemptsSchema.methods.resetLoginAttempts = async function() {
    return await this.updateOne({
        $set: { attempts: 0 },
        $unset: { lockUntil: 1, lastAttempt: 1 }
    });
};
```

## Best Practices

1. Use HTTPS for all login pages
2. Implement rate limiting
3. Use CSRF protection
4. Enable MFA for sensitive accounts
5. Implement account lockout
6. Log all authentication attempts
7. Use secure password requirements
8. Implement "remember me" securely
9. Provide password reset functionality
10. Test authentication flows thoroughly

Proper login configuration ensures secure user authentication while maintaining good user experience.
