# Access Levels & Permissions

Learn how to implement access levels and granular permissions to control data visibility and operations.

## Access Level Types

### Public, Private, and Protected Access

```javascript
const AccessLevels = {
  PUBLIC: 'public',       // Anyone can access
  PROTECTED: 'protected', // Authenticated users can access
  PRIVATE: 'private',     // Owner only
  INTERNAL: 'internal',   // Organization members
  RESTRICTED: 'restricted' // Specific users/roles only
};

class AccessLevelManager {
  checkAccess(user, resource, action) {
    const level = resource.accessLevel;

    switch (level) {
      case AccessLevels.PUBLIC:
        return action === 'read';

      case AccessLevels.PROTECTED:
        return user !== null;

      case AccessLevels.PRIVATE:
        return user && user.id === resource.ownerId;

      case AccessLevels.INTERNAL:
        return user && user.organizationId === resource.organizationId;

      case AccessLevels.RESTRICTED:
        return this.checkRestrictedAccess(user, resource);

      default:
        return false;
    }
  }

  checkRestrictedAccess(user, resource) {
    return resource.allowedUsers?.includes(user.id) ||
           resource.allowedRoles?.includes(user.role);
  }
}

// Middleware
function enforceAccessLevel(req, res, next) {
  const manager = new AccessLevelManager();
  const resource = req.resource;
  const action = getActionFromMethod(req.method);

  if (!manager.checkAccess(req.user, resource, action)) {
    return res.status(403).json({ error: 'Access denied' });
  }

  next();
}
```

## Resource-Level Permissions

### Per-Resource Access Control

```javascript
class ResourcePermissionManager {
  async setResourcePermissions(resourceId, permissions) {
    await this.db.query(`
      INSERT INTO resource_permissions (resource_id, user_id, role_id, permissions)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (resource_id, user_id) DO UPDATE
      SET permissions = $4
    `, [resourceId, permissions.userId, permissions.roleId, JSON.stringify(permissions.actions)]);
  }

  async getResourcePermissions(userId, resourceId) {
    const result = await this.db.query(`
      SELECT permissions
      FROM resource_permissions
      WHERE resource_id = $1
        AND (user_id = $2 OR role_id IN (
          SELECT role_id FROM user_roles WHERE user_id = $2
        ))
    `, [resourceId, userId]);

    return result.flatMap(r => JSON.parse(r.permissions));
  }

  async canPerformAction(userId, resourceId, action) {
    const permissions = await this.getResourcePermissions(userId, resourceId);
    return permissions.includes(action) || permissions.includes('*');
  }
}

// Usage
app.put('/api/documents/:id', async (req, res) => {
  const manager = new ResourcePermissionManager();
  const canEdit = await manager.canPerformAction(
    req.user.id,
    req.params.id,
    'edit'
  );

  if (!canEdit) {
    return res.status(403).json({ error: 'Cannot edit this document' });
  }

  // Update document
});
```

## Field-Level Security

### Restricting Field Access

```javascript
class FieldLevelSecurity {
  constructor() {
    // Define which fields each role can access
    this.fieldAccess = {
      public: {
        User: ['id', 'username', 'avatar'],
        Post: ['id', 'title', 'content', 'createdAt']
      },
      user: {
        User: ['id', 'username', 'email', 'avatar', 'createdAt'],
        Post: ['id', 'title', 'content', 'author', 'createdAt', 'updatedAt']
      },
      admin: {
        User: ['*'], // All fields
        Post: ['*']
      }
    };
  }

  filterFields(data, entityType, userRole = 'public') {
    const allowedFields = this.fieldAccess[userRole]?.[entityType] || [];

    if (allowedFields.includes('*')) {
      return data;
    }

    const filtered = {};
    for (const field of allowedFields) {
      if (data.hasOwnProperty(field)) {
        filtered[field] = data[field];
      }
    }

    return filtered;
  }

  filterArray(dataArray, entityType, userRole) {
    return dataArray.map(item =>
      this.filterFields(item, entityType, userRole)
    );
  }

  // Check if user can access specific field
  canAccessField(userRole, entityType, fieldName) {
    const allowedFields = this.fieldAccess[userRole]?.[entityType] || [];
    return allowedFields.includes('*') || allowedFields.includes(fieldName);
  }
}

// Middleware for automatic field filtering
function applyFieldSecurity(entityType) {
  return (req, res, next) => {
    const originalJson = res.json.bind(res);
    const security = new FieldLevelSecurity();
    const userRole = req.user?.role || 'public';

    res.json = function(data) {
      if (Array.isArray(data)) {
        data = security.filterArray(data, entityType, userRole);
      } else if (typeof data === 'object') {
        data = security.filterFields(data, entityType, userRole);
      }

      return originalJson(data);
    };

    next();
  };
}

// Usage
app.get('/api/users/:id',
  authenticateToken,
  applyFieldSecurity('User'),
  getUser
);
```

## Data Filtering Based on Access

### Query-Level Security

```javascript
class DataAccessFilter {
  // Build WHERE clause based on user access
  buildAccessFilter(user, resourceType) {
    if (!user) {
      // Public access only
      return `access_level = 'public'`;
    }

    if (user.role === 'admin') {
      // Admins see everything
      return '1=1';
    }

    // Regular users see:
    // 1. Public content
    // 2. Their own content
    // 3. Content shared with them
    // 4. Organization content (if applicable)
    return `
      (access_level = 'public')
      OR (owner_id = ${user.id})
      OR (id IN (
        SELECT resource_id FROM shared_resources
        WHERE user_id = ${user.id}
      ))
      OR (organization_id = ${user.organizationId} AND access_level = 'internal')
    `;
  }

  // Apply filter to query
  async getFilteredResources(user, resourceType, additionalFilters = {}) {
    const accessFilter = this.buildAccessFilter(user, resourceType);

    let query = `
      SELECT * FROM ${resourceType}
      WHERE ${accessFilter}
    `;

    // Add additional filters
    const filters = Object.entries(additionalFilters);
    if (filters.length > 0) {
      const conditions = filters.map(([key, value]) =>
        `${key} = '${value}'`
      ).join(' AND ');
      query += ` AND ${conditions}`;
    }

    return await this.db.query(query);
  }
}

// Middleware
async function filterDataByAccess(req, res, next) {
  const filter = new DataAccessFilter();
  req.dataFilter = {
    getResources: (type, filters) =>
      filter.getFilteredResources(req.user, type, filters)
  };
  next();
}

// Usage
app.get('/api/documents', filterDataByAccess, async (req, res) => {
  const documents = await req.dataFilter.getResources('documents', {
    status: 'published'
  });
  res.json(documents);
});
```

## Column-Level Encryption

### Sensitive Data Protection

```javascript
import crypto from 'crypto';

class ColumnEncryption {
  constructor() {
    this.algorithm = 'aes-256-gcm';
    this.key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
  }

  encrypt(text) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    const authTag = cipher.getAuthTag();

    return {
      encrypted,
      iv: iv.toString('hex'),
      authTag: authTag.toString('hex')
    };
  }

  decrypt(encrypted, iv, authTag) {
    const decipher = crypto.createDecipheriv(
      this.algorithm,
      this.key,
      Buffer.from(iv, 'hex')
    );

    decipher.setAuthTag(Buffer.from(authTag, 'hex'));

    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }

  // Encrypt sensitive fields
  encryptSensitiveFields(data, sensitiveFields) {
    const result = { ...data };

    for (const field of sensitiveFields) {
      if (result[field]) {
        const encrypted = this.encrypt(result[field]);
        result[field] = encrypted.encrypted;
        result[`${field}_iv`] = encrypted.iv;
        result[`${field}_tag`] = encrypted.authTag;
      }
    }

    return result;
  }

  // Decrypt for authorized users
  decryptSensitiveFields(data, sensitiveFields, userRole) {
    if (!this.canAccessEncrypted(userRole)) {
      // Remove encrypted fields for unauthorized users
      sensitiveFields.forEach(field => {
        delete data[field];
        delete data[`${field}_iv`];
        delete data[`${field}_tag`];
      });
      return data;
    }

    const result = { ...data };

    for (const field of sensitiveFields) {
      if (result[field]) {
        result[field] = this.decrypt(
          result[field],
          result[`${field}_iv`],
          result[`${field}_tag`]
        );
        delete result[`${field}_iv`];
        delete result[`${field}_tag`];
      }
    }

    return result;
  }

  canAccessEncrypted(userRole) {
    return ['admin', 'finance_manager'].includes(userRole);
  }
}
```

## Row-Level Security

### PostgreSQL Row-Level Security

```sql
-- Enable RLS on table
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Policy: Users can see their own documents
CREATE POLICY user_documents ON documents
  FOR SELECT
  USING (owner_id = current_user_id());

-- Policy: Users can see public documents
CREATE POLICY public_documents ON documents
  FOR SELECT
  USING (access_level = 'public');

-- Policy: Users can see shared documents
CREATE POLICY shared_documents ON documents
  FOR SELECT
  USING (
    id IN (
      SELECT document_id
      FROM document_shares
      WHERE user_id = current_user_id()
    )
  );

-- Policy: Admins can see all documents
CREATE POLICY admin_all_documents ON documents
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = current_user_id()
      AND role = 'admin'
    )
  );
```

### Application-Level Row Security

```javascript
class RowLevelSecurity {
  async applyRowPolicies(query, user, tableName) {
    const policies = await this.getTablePolicies(tableName);

    for (const policy of policies) {
      query = policy.apply(query, user);
    }

    return query;
  }

  getTablePolicies(tableName) {
    const policies = {
      documents: [
        {
          name: 'owner_access',
          apply: (query, user) =>
            query.where('owner_id', user.id)
        },
        {
          name: 'public_access',
          apply: (query, user) =>
            query.orWhere('access_level', 'public')
        },
        {
          name: 'shared_access',
          apply: (query, user) =>
            query.orWhereIn('id', function() {
              this.select('document_id')
                  .from('document_shares')
                  .where('user_id', user.id);
            })
        }
      ]
    };

    return policies[tableName] || [];
  }
}
```

## Conditional Access

### Time-Based Access

```javascript
class TimeBasedAccess {
  checkTimeWindow(resource, user) {
    const now = new Date();

    // Check if resource has time restrictions
    if (resource.availableFrom && now < new Date(resource.availableFrom)) {
      return { allowed: false, reason: 'Not yet available' };
    }

    if (resource.availableUntil && now > new Date(resource.availableUntil)) {
      return { allowed: false, reason: 'No longer available' };
    }

    // Check user-specific access windows
    if (resource.userAccessWindows) {
      const userWindow = resource.userAccessWindows[user.id];

      if (userWindow) {
        if (now < new Date(userWindow.from) || now > new Date(userWindow.until)) {
          return { allowed: false, reason: 'Outside access window' };
        }
      }
    }

    return { allowed: true };
  }
}
```

### Location-Based Access

```javascript
class LocationBasedAccess {
  checkLocationAccess(resource, user, requestLocation) {
    if (!resource.locationRestrictions) {
      return { allowed: true };
    }

    const { allowedCountries, allowedRegions, blockedIPs } = resource.locationRestrictions;

    // Check blocked IPs
    if (blockedIPs?.includes(requestLocation.ip)) {
      return { allowed: false, reason: 'IP blocked' };
    }

    // Check allowed countries
    if (allowedCountries && !allowedCountries.includes(requestLocation.country)) {
      return { allowed: false, reason: 'Country not allowed' };
    }

    // Check allowed regions
    if (allowedRegions && !allowedRegions.includes(requestLocation.region)) {
      return { allowed: false, reason: 'Region not allowed' };
    }

    return { allowed: true };
  }
}
```

## Testing Access Levels

```javascript
describe('Access Levels', () => {
  describe('Access Level Checks', () => {
    it('should allow public access to public resources', () => {
      const manager = new AccessLevelManager();
      const resource = { accessLevel: 'public' };

      expect(manager.checkAccess(null, resource, 'read')).toBe(true);
    });

    it('should deny write access to public resources', () => {
      const manager = new AccessLevelManager();
      const resource = { accessLevel: 'public' };

      expect(manager.checkAccess(null, resource, 'write')).toBe(false);
    });

    it('should allow owner access to private resources', () => {
      const manager = new AccessLevelManager();
      const user = { id: 1 };
      const resource = { accessLevel: 'private', ownerId: 1 };

      expect(manager.checkAccess(user, resource, 'read')).toBe(true);
    });
  });

  describe('Field-Level Security', () => {
    it('should filter fields based on role', () => {
      const security = new FieldLevelSecurity();
      const user = {
        id: 1,
        username: 'john',
        email: 'john@example.com',
        password: 'hashed',
        ssn: '123-45-6789'
      };

      const filtered = security.filterFields(user, 'User', 'public');

      expect(filtered.username).toBeDefined();
      expect(filtered.email).toBeUndefined();
      expect(filtered.password).toBeUndefined();
    });
  });
});
```

## Best Practices

1. **Default Deny**: Start with no access, grant explicitly
2. **Least Privilege**: Grant minimum necessary access
3. **Layer Security**: Implement multiple access control layers
4. **Audit Access**: Log all access decisions
5. **Regular Reviews**: Review and update access policies
6. **Encrypt Sensitive Data**: Protect data at rest and in transit
7. **Test Thoroughly**: Test all access scenarios
8. **Document Policies**: Clearly document access rules

Implementing comprehensive access levels and permissions ensures that users can only access data and perform actions appropriate to their role and context, protecting sensitive information and maintaining data integrity.
