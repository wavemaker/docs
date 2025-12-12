# Authentication

Learn how to implement secure authentication mechanisms to verify user identities in your application.

## Overview

Authentication is the process of verifying that users are who they claim to be. A robust authentication system is the foundation of application security.

## Authentication Methods

### 1. Password-Based Authentication

#### Password Hashing with bcrypt

```javascript
import bcrypt from 'bcrypt';

class PasswordAuthService {
  private saltRounds = 12;

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, this.saltRounds);
  }

  async verifyPassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}

// User registration
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Validate password strength
  if (!isStrongPassword(password)) {
    return res.status(400).json({
      error: 'Password must be at least 12 characters with uppercase, lowercase, number, and special character'
    });
  }

  const authService = new PasswordAuthService();
  const hashedPassword = await authService.hashPassword(password);

  const user = await createUser({
    username,
    email,
    password: hashedPassword
  });

  res.status(201).json({ message: 'User created successfully' });
});

// User login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const authService = new PasswordAuthService();
  const isValid = await authService.verifyPassword(password, user.password);

  if (!isValid) {
    // Log failed attempt
    await logFailedLogin(user.id, req.ip);
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate session or token
  const token = generateAuthToken(user);

  res.json({ token, user: { id: user.id, username: user.username } });
});
```

#### Java Password Hashing

```java
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class PasswordAuthService {
    private final PasswordEncoder passwordEncoder;

    public PasswordAuthService() {
        this.passwordEncoder = new BCryptPasswordEncoder(12);
    }

    public String hashPassword(String plainPassword) {
        return passwordEncoder.encode(plainPassword);
    }

    public boolean verifyPassword(String plainPassword, String hashedPassword) {
        return passwordEncoder.matches(plainPassword, hashedPassword);
    }
}

@RestController
public class AuthController {

    @Autowired
    private PasswordAuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserRegistrationDTO dto) {
        // Validate password strength
        if (!isStrongPassword(dto.getPassword())) {
            return ResponseEntity.badRequest()
                .body("Password does not meet requirements");
        }

        String hashedPassword = authService.hashPassword(dto.getPassword());

        User user = new User();
        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());
        user.setPassword(hashedPassword);

        userRepository.save(user);

        return ResponseEntity.status(201)
            .body("User created successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO dto) {
        User user = userRepository.findByEmail(dto.getEmail())
            .orElseThrow(() -> new UnauthorizedException("Invalid credentials"));

        if (!authService.verifyPassword(dto.getPassword(), user.getPassword())) {
            logFailedLogin(user.getId(), request.getRemoteAddr());
            throw new UnauthorizedException("Invalid credentials");
        }

        String token = generateAuthToken(user);

        return ResponseEntity.ok(new AuthResponse(token, user));
    }
}
```

### 2. Multi-Factor Authentication (MFA)

#### TOTP (Time-based One-Time Password)

```javascript
import speakeasy from 'speakeasy';
import QRCode from 'qrcode';

class MFAService {
  // Generate MFA secret for user
  async generateMFASecret(userId: string, username: string) {
    const secret = speakeasy.generateSecret({
      name: `MyApp (${username})`,
      length: 32,
      issuer: 'MyApp'
    });

    // Store secret in database (encrypted)
    await storeMFASecret(userId, secret.base32);

    // Generate QR code for user to scan
    const qrCode = await QRCode.toDataURL(secret.otpauth_url);

    return {
      secret: secret.base32,
      qrCode: qrCode,
      manualEntry: secret.otpauth_url
    };
  }

  // Verify MFA token
  verifyMFAToken(secret: string, token: string): boolean {
    return speakeasy.totp.verify({
      secret: secret,
      encoding: 'base32',
      token: token,
      window: 2 // Allow 2 time steps before/after
    });
  }
}

// Enable MFA endpoint
app.post('/mfa/enable', authenticateToken, async (req, res) => {
  const userId = req.user.id;
  const username = req.user.username;

  const mfaService = new MFAService();
  const mfaData = await mfaService.generateMFASecret(userId, username);

  res.json({
    secret: mfaData.secret,
    qrCode: mfaData.qrCode,
    message: 'Scan QR code with authenticator app'
  });
});

// Verify MFA setup
app.post('/mfa/verify-setup', authenticateToken, async (req, res) => {
  const { token } = req.body;
  const userId = req.user.id;

  const mfaSecret = await getMFASecret(userId);
  const mfaService = new MFAService();

  if (mfaService.verifyMFAToken(mfaSecret, token)) {
    await enableMFAForUser(userId);
    res.json({ message: 'MFA enabled successfully' });
  } else {
    res.status(400).json({ error: 'Invalid MFA token' });
  }
});

// Login with MFA
app.post('/login/mfa', async (req, res) => {
  const { email, password, mfaToken } = req.body;

  // First verify password
  const user = await authenticateUser(email, password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Check if MFA is enabled
  if (user.mfaEnabled) {
    const mfaSecret = await getMFASecret(user.id);
    const mfaService = new MFAService();

    if (!mfaService.verifyMFAToken(mfaSecret, mfaToken)) {
      return res.status(401).json({ error: 'Invalid MFA token' });
    }
  }

  const token = generateAuthToken(user);
  res.json({ token });
});
```

#### SMS/Email OTP

```javascript
class OTPService {
  // Generate 6-digit OTP
  generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  // Send OTP via SMS
  async sendSMSOTP(phoneNumber: string, otp: string) {
    // Using Twilio or similar service
    await twilioClient.messages.create({
      body: `Your verification code is: ${otp}. Valid for 5 minutes.`,
      to: phoneNumber,
      from: process.env.TWILIO_PHONE_NUMBER
    });

    // Store OTP with expiration (5 minutes)
    await storeOTP(phoneNumber, otp, Date.now() + 5 * 60 * 1000);
  }

  // Verify OTP
  async verifyOTP(identifier: string, otp: string): Promise<boolean> {
    const storedOTP = await getOTP(identifier);

    if (!storedOTP) {
      return false;
    }

    if (Date.now() > storedOTP.expiration) {
      await deleteOTP(identifier);
      return false;
    }

    if (storedOTP.otp !== otp) {
      return false;
    }

    await deleteOTP(identifier);
    return true;
  }
}

// Request OTP
app.post('/auth/otp/request', async (req, res) => {
  const { phoneNumber } = req.body;

  const otpService = new OTPService();
  const otp = otpService.generateOTP();

  await otpService.sendSMSOTP(phoneNumber, otp);

  res.json({ message: 'OTP sent successfully' });
});

// Verify OTP and login
app.post('/auth/otp/verify', async (req, res) => {
  const { phoneNumber, otp } = req.body;

  const otpService = new OTPService();
  const isValid = await otpService.verifyOTP(phoneNumber, otp);

  if (!isValid) {
    return res.status(401).json({ error: 'Invalid or expired OTP' });
  }

  const user = await findUserByPhone(phoneNumber);
  const token = generateAuthToken(user);

  res.json({ token });
});
```

### 3. JWT Token Authentication

```javascript
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

const signAsync = promisify(jwt.sign);
const verifyAsync = promisify(jwt.verify);

class JWTAuthService {
  private accessTokenSecret: string;
  private refreshTokenSecret: string;

  constructor() {
    this.accessTokenSecret = process.env.JWT_ACCESS_SECRET!;
    this.refreshTokenSecret = process.env.JWT_REFRESH_SECRET!;
  }

  // Generate access token (short-lived)
  async generateAccessToken(payload: any): Promise<string> {
    return await signAsync(payload, this.accessTokenSecret, {
      expiresIn: '15m',
      algorithm: 'HS256',
      issuer: 'myapp.com',
      audience: 'myapp-users'
    });
  }

  // Generate refresh token (long-lived)
  async generateRefreshToken(payload: any): Promise<string> {
    return await signAsync(payload, this.refreshTokenSecret, {
      expiresIn: '7d',
      algorithm: 'HS256'
    });
  }

  // Verify access token
  async verifyAccessToken(token: string): Promise<any> {
    try {
      return await verifyAsync(token, this.accessTokenSecret, {
        algorithms: ['HS256'],
        issuer: 'myapp.com',
        audience: 'myapp-users'
      });
    } catch (error) {
      throw new Error('Invalid or expired token');
    }
  }

  // Verify refresh token
  async verifyRefreshToken(token: string): Promise<any> {
    try {
      return await verifyAsync(token, this.refreshTokenSecret, {
        algorithms: ['HS256']
      });
    } catch (error) {
      throw new Error('Invalid or expired refresh token');
    }
  }
}

// Login and generate tokens
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await authenticateUser(email, password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const jwtService = new JWTAuthService();

  const payload = {
    userId: user.id,
    email: user.email,
    role: user.role
  };

  const accessToken = await jwtService.generateAccessToken(payload);
  const refreshToken = await jwtService.generateRefreshToken({ userId: user.id });

  // Store refresh token in database
  await storeRefreshToken(user.id, refreshToken);

  res.json({
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      email: user.email,
      role: user.role
    }
  });
});

// Refresh token endpoint
app.post('/auth/refresh', async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ error: 'Refresh token required' });
  }

  const jwtService = new JWTAuthService();

  try {
    const payload = await jwtService.verifyRefreshToken(refreshToken);

    // Verify token exists in database
    const isValid = await verifyRefreshToken(payload.userId, refreshToken);

    if (!isValid) {
      return res.status(401).json({ error: 'Invalid refresh token' });
    }

    // Generate new access token
    const user = await findUserById(payload.userId);
    const newAccessToken = await jwtService.generateAccessToken({
      userId: user.id,
      email: user.email,
      role: user.role
    });

    res.json({ accessToken: newAccessToken });
  } catch (error) {
    res.status(401).json({ error: 'Invalid refresh token' });
  }
});

// Auth middleware
async function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  const jwtService = new JWTAuthService();

  try {
    const user = await jwtService.verifyAccessToken(token);
    req.user = user;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid or expired token' });
  }
}
```

### 4. OAuth 2.0 / Social Login

```javascript
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// Configure Google OAuth
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Find or create user
      let user = await findUserByGoogleId(profile.id);

      if (!user) {
        user = await createUser({
          googleId: profile.id,
          email: profile.emails[0].value,
          name: profile.displayName,
          profilePicture: profile.photos[0].value
        });
      }

      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  }
));

// Google auth routes
app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const user = req.user;
    const token = generateAuthToken(user);

    // Redirect to frontend with token
    res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`);
  }
);
```

## Security Best Practices

### 1. Password Policies

```javascript
function validatePasswordStrength(password: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (password.length < 12) {
    errors.push('Password must be at least 12 characters');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }

  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }

  // Check against common passwords
  if (COMMON_PASSWORDS.includes(password.toLowerCase())) {
    errors.push('Password is too common');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
```

### 2. Rate Limiting

```javascript
import rateLimit from 'express-rate-limit';

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts
  message: 'Too many login attempts, please try again later',
  skipSuccessfulRequests: true,
  standardHeaders: true,
  legacyHeaders: false
});

app.post('/login', loginLimiter, async (req, res) => {
  // Login logic
});
```

### 3. Account Lockout

```javascript
async function handleFailedLogin(userId: string, ipAddress: string) {
  const attempts = await incrementFailedAttempts(userId);

  if (attempts >= 5) {
    await lockAccount(userId, 30 * 60 * 1000); // Lock for 30 minutes
    await sendSecurityAlert(userId, 'Account locked due to multiple failed login attempts');
  }
}

async function handleSuccessfulLogin(userId: string) {
  await resetFailedAttempts(userId);
  await unlockAccount(userId);
}
```

## Testing Authentication

```javascript
describe('Authentication', () => {
  describe('Registration', () => {
    it('should register user with valid data', async () => {
      const response = await request(app)
        .post('/register')
        .send({
          username: 'testuser',
          email: 'test@example.com',
          password: 'StrongPass123!'
        });

      expect(response.status).toBe(201);
    });

    it('should reject weak password', async () => {
      const response = await request(app)
        .post('/register')
        .send({
          username: 'testuser',
          email: 'test@example.com',
          password: 'weak'
        });

      expect(response.status).toBe(400);
    });
  });

  describe('Login', () => {
    it('should login with valid credentials', async () => {
      const response = await request(app)
        .post('/login')
        .send({
          email: 'test@example.com',
          password: 'StrongPass123!'
        });

      expect(response.status).toBe(200);
      expect(response.body.token).toBeDefined();
    });

    it('should reject invalid credentials', async () => {
      const response = await request(app)
        .post('/login')
        .send({
          email: 'test@example.com',
          password: 'wrongpassword'
        });

      expect(response.status).toBe(401);
    });
  });

  describe('MFA', () => {
    it('should require MFA token when enabled', async () => {
      const response = await request(app)
        .post('/login/mfa')
        .send({
          email: 'mfauser@example.com',
          password: 'StrongPass123!'
        });

      expect(response.status).toBe(401);
      expect(response.body.error).toContain('MFA');
    });
  });
});
```

By implementing these authentication mechanisms properly, you can ensure that only legitimate users gain access to your application while maintaining a good user experience.
