# Secure Server-side Properties

Learn how to securely manage API credentials, tokens, and sensitive configuration data.

## Overview

Secure server-side properties provide a safe way to store and access sensitive information like API keys, passwords, and tokens without exposing them in your codebase.

## Environment Variables

### Basic Usage
```javascript
// Access environment variables
const apiKey = process.env.API_KEY;
const dbPassword = process.env.DB_PASSWORD;
const jwtSecret = process.env.JWT_SECRET;
```

### .env File
```bash
# .env file
API_KEY=sk_live_abc123def456
DB_PASSWORD=mySecurePassword123
JWT_SECRET=supersecretjwtkey
BASE_URL=https://api.example.com
TIMEOUT=30000
```

### Loading Environment Variables
```javascript
import dotenv from 'dotenv';

// Load from default .env file
dotenv.config();

// Load from specific file
dotenv.config({ path: '.env.production' });
```

## Secure Configuration Management

### Configuration Service
```javascript
class ConfigService {
  private secrets: Map<string, string>;

  constructor() {
    this.secrets = new Map();
    this.loadSecrets();
  }

  private loadSecrets() {
    // Load from environment
    this.secrets.set('apiKey', process.env.API_KEY);
    this.secrets.set('dbPassword', process.env.DB_PASSWORD);
  }

  get(key: string): string {
    const value = this.secrets.get(key);
    if (!value) {
      throw new Error(`Secret '${key}' not found`);
    }
    return value;
  }

  has(key: string): boolean {
    return this.secrets.has(key);
  }
}

export const config = new ConfigService();
```

### Using Configuration Service
```javascript
import { config } from './config.service';

const apiClient = createClient({
  apiKey: config.get('apiKey'),
  baseURL: config.get('baseUrl')
});
```

## Secrets Management

### Vault Integration
```javascript
import Vault from 'node-vault';

const vault = Vault({
  endpoint: process.env.VAULT_ADDR,
  token: process.env.VAULT_TOKEN
});

async function getSecret(path: string): Promise<any> {
  const result = await vault.read(path);
  return result.data;
}

// Usage
const apiKey = await getSecret('secret/api/external-service');
```

### AWS Secrets Manager
```javascript
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';

const client = new SecretsManagerClient({ region: 'us-east-1' });

async function getSecret(secretName: string): Promise<string> {
  const command = new GetSecretValueCommand({
    SecretId: secretName
  });

  const response = await client.send(command);
  return response.SecretString;
}

// Usage
const apiCredentials = JSON.parse(
  await getSecret('prod/api/credentials')
);
```

### Azure Key Vault
```javascript
import { SecretClient } from '@azure/keyvault-secrets';
import { DefaultAzureCredential } from '@azure/identity';

const credential = new DefaultAzureCredential();
const vaultUrl = process.env.AZURE_KEYVAULT_URL;
const client = new SecretClient(vaultUrl, credential);

async function getSecret(secretName: string): Promise<string> {
  const secret = await client.getSecret(secretName);
  return secret.value;
}

// Usage
const apiKey = await getSecret('api-key');
```

## Property Encryption

### Encrypting Sensitive Data
```javascript
import crypto from 'crypto';

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; // Must be 32 bytes
const IV_LENGTH = 16;

function encrypt(text: string): string {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(
    'aes-256-cbc',
    Buffer.from(ENCRYPTION_KEY, 'hex'),
    iv
  );

  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(text: string): string {
  const textParts = text.split(':');
  const iv = Buffer.from(textParts.shift(), 'hex');
  const encryptedText = Buffer.from(textParts.join(':'), 'hex');

  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(ENCRYPTION_KEY, 'hex'),
    iv
  );

  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
}
```

## Secure API Key Management

### API Key Storage
```javascript
class ApiKeyManager {
  private keys: Map<string, ApiKey>;

  constructor() {
    this.keys = new Map();
    this.loadKeys();
  }

  private loadKeys() {
    // Load from secure storage
    const encryptedKeys = getFromSecureStorage('api_keys');
    const decryptedKeys = decrypt(encryptedKeys);
    const keys = JSON.parse(decryptedKeys);

    keys.forEach(key => {
      this.keys.set(key.name, key);
    });
  }

  getKey(service: string): string {
    const apiKey = this.keys.get(service);
    if (!apiKey) {
      throw new Error(`API key for ${service} not found`);
    }
    return apiKey.key;
  }

  rotateKey(service: string, newKey: string) {
    const apiKey = this.keys.get(service);
    if (apiKey) {
      apiKey.key = newKey;
      apiKey.lastRotated = new Date();
      this.saveKeys();
    }
  }
}
```

### API Key Rotation
```javascript
async function rotateApiKey(service: string) {
  // Request new key from service
  const newKey = await requestNewApiKey(service);

  // Update in secrets manager
  await updateSecret(`api-keys/${service}`, newKey);

  // Invalidate old key
  await invalidateOldKey(service);

  console.log(`API key rotated for ${service}`);
}
```

## Environment-specific Configuration

### Multiple Environments
```javascript
// config.js
const configs = {
  development: {
    apiUrl: 'http://localhost:3000',
    dbHost: 'localhost'
  },
  staging: {
    apiUrl: 'https://staging-api.example.com',
    dbHost: 'staging-db.example.com'
  },
  production: {
    apiUrl: 'https://api.example.com',
    dbHost: 'prod-db.example.com'
  }
};

const env = process.env.NODE_ENV || 'development';
export const config = configs[env];
```

### Loading Configuration
```javascript
import { config } from './config';

const apiClient = createClient({
  baseURL: config.apiUrl,
  apiKey: process.env.API_KEY // Still use env vars for secrets
});
```

## Security Best Practices

### Do's
- Store secrets in environment variables or secret managers
- Use encryption for sensitive data at rest
- Rotate API keys regularly
- Use different credentials for each environment
- Implement access controls for secrets
- Audit secret access
- Use HTTPS for all external API calls

### Don'ts
- Never commit secrets to version control
- Don't log sensitive information
- Don't expose secrets in error messages
- Don't hardcode credentials in code
- Don't share production credentials
- Don't store unencrypted secrets in databases
- Don't use the same key across environments

## Access Control

### Role-based Access
```javascript
class SecureConfig {
  private allowedRoles = ['admin', 'api-service'];

  getSecret(key: string, userRole: string): string {
    if (!this.allowedRoles.includes(userRole)) {
      throw new Error('Unauthorized access to secrets');
    }
    return process.env[key];
  }
}
```

### Audit Logging
```javascript
function accessSecret(key: string, userId: string) {
  const value = getSecret(key);

  // Log access
  auditLog({
    action: 'SECRET_ACCESS',
    key: key,
    userId: userId,
    timestamp: new Date(),
    ipAddress: getClientIP()
  });

  return value;
}
```

## Best Practices

- Never hardcode secrets in your application
- Use environment-specific configurations
- Implement secret rotation policies
- Encrypt secrets at rest and in transit
- Use managed secret services when available
- Implement proper access controls
- Audit secret access regularly
- Remove unused secrets promptly
- Use short-lived tokens when possible
- Implement secret expiration policies
