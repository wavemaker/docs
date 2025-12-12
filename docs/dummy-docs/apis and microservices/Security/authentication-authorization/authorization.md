# Authorization

Learn how to implement authorization mechanisms to control what authenticated users can access and do in your application.

## Overview

Authorization determines what resources and actions an authenticated user is permitted to access. It enforces access control policies and ensures users only perform actions they're allowed to.

## Authorization Models

### 1. Role-Based Access Control (RBAC)

RBAC assigns permissions to roles, and roles to users.

```javascript
// Define roles and permissions
const roles = {
  admin: ['users:read', 'users:write', 'users:delete', 'posts:*'],
  editor: ['posts:read', 'posts:write', 'posts:delete'],
  viewer: ['posts:read', 'users:read']
};

// Check if user has permission
function hasPermission(userRole, permission) {
  const userPermissions = roles[userRole] || [];

  return userPermissions.some(p => {
    if (p === permission) return true;
    if (p.endsWith(':*')) {
      const resource = p.split(':')[0];
      return permission.startsWith(resource + ':');
    }
    return false;
  });
}

// Middleware
function requirePermission(permission) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    if (!hasPermission(req.user.role, permission)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }

    next();
  };
}

// Usage
app.delete('/users/:id',
  authenticateToken,
  requirePermission('users:delete'),
  deleteUser
);
```

#### Java RBAC Implementation

```java
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
@RequestMapping("/api")
public class ResourceController {

    @GetMapping("/users")
    @PreAuthorize("hasRole('ADMIN') or hasRole('VIEWER')")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @DeleteMapping("/users/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/posts")
    @PreAuthorize("hasAnyRole('ADMIN', 'EDITOR')")
    public ResponseEntity<?> createPost(@RequestBody Post post) {
        Post created = postService.createPost(post);
        return ResponseEntity.status(201).body(created);
    }
}

// Custom permission evaluator
@Component
public class CustomPermissionEvaluator implements PermissionEvaluator {

    @Override
    public boolean hasPermission(Authentication auth, Object targetDomainObject, Object permission) {
        if (auth == null || !(permission instanceof String)) {
            return false;
        }

        String targetType = targetDomainObject.getClass().getSimpleName().toUpperCase();
        return hasPrivilege(auth, targetType, permission.toString());
    }

    private boolean hasPrivilege(Authentication auth, String targetType, String permission) {
        Collection<? extends GrantedAuthority> authorities = auth.getAuthorities();

        for (GrantedAuthority authority : authorities) {
            String authStr = authority.getAuthority();
            if (authStr.equals(targetType + "_" + permission)) {
                return true;
            }
        }

        return false;
    }
}
```

### 2. Attribute-Based Access Control (ABAC)

ABAC uses attributes of users, resources, and environment for access decisions.

```javascript
class ABACEngine {
  constructor() {
    this.policies = [];
  }

  addPolicy(policy) {
    this.policies.push(policy);
  }

  evaluate(subject, action, resource, environment = {}) {
    for (const policy of this.policies) {
      const result = policy.evaluate(subject, action, resource, environment);

      if (result === 'allow') {
        return true;
      } else if (result === 'deny') {
        return false;
      }
    }

    return false; // Default deny
  }
}

// Example policies
const ownerPolicy = {
  name: 'Owner can modify their own resources',
  evaluate(subject, action, resource, environment) {
    if (resource.ownerId === subject.userId && ['read', 'write', 'delete'].includes(action)) {
      return 'allow';
    }
    return 'not-applicable';
  }
};

const departmentPolicy = {
  name: 'Same department can read',
  evaluate(subject, action, resource, environment) {
    if (subject.department === resource.department && action === 'read') {
      return 'allow';
    }
    return 'not-applicable';
  }
};

const timeBasedPolicy = {
  name: 'Business hours only',
  evaluate(subject, action, resource, environment) {
    const hour = new Date().getHours();
    if (hour < 9 || hour > 17) {
      return 'deny';
    }
    return 'not-applicable';
  }
};

// Usage
const abac = new ABACEngine();
abac.addPolicy(ownerPolicy);
abac.addPolicy(departmentPolicy);
abac.addPolicy(timeBasedPolicy);

function checkAccess(req, res, next) {
  const subject = req.user;
  const action = getActionFromMethod(req.method);
  const resource = await getResource(req.params.id);

  if (abac.evaluate(subject, action, resource)) {
    next();
  } else {
    res.status(403).json({ error: 'Access denied' });
  }
}
```

### 3. Permission-Based Authorization

Direct mapping of permissions to users.

```javascript
class PermissionService {
  async getUserPermissions(userId) {
    const permissions = await db.query(`
      SELECT p.name
      FROM permissions p
      INNER JOIN user_permissions up ON p.id = up.permission_id
      WHERE up.user_id = $1
    `, [userId]);

    return permissions.map(p => p.name);
  }

  async grantPermission(userId, permission) {
    await db.query(`
      INSERT INTO user_permissions (user_id, permission_id)
      SELECT $1, id FROM permissions WHERE name = $2
    `, [userId, permission]);
  }

  async revokePermission(userId, permission) {
    await db.query(`
      DELETE FROM user_permissions
      WHERE user_id = $1
      AND permission_id = (SELECT id FROM permissions WHERE name = $2)
    `, [userId, permission]);
  }

  async checkPermission(userId, permission) {
    const result = await db.query(`
      SELECT COUNT(*) > 0 as has_permission
      FROM user_permissions up
      INNER JOIN permissions p ON up.permission_id = p.id
      WHERE up.user_id = $1 AND p.name = $2
    `, [userId, permission]);

    return result[0].has_permission;
  }
}

// Middleware
function requirePermissions(...permissions) {
  return async (req, res, next) => {
    const userId = req.user.id;
    const permissionService = new PermissionService();

    for (const permission of permissions) {
      const hasPermission = await permissionService.checkPermission(userId, permission);

      if (!hasPermission) {
        return res.status(403).json({
          error: 'Insufficient permissions',
          required: permission
        });
      }
    }

    next();
  };
}

// Usage
app.post('/api/reports',
  authenticateToken,
  requirePermissions('reports:create', 'reports:publish'),
  createReport
);
```

## Resource-Level Authorization

### Ownership Validation

```javascript
async function requireOwnership(req, res, next) {
  const resourceId = req.params.id;
  const userId = req.user.id;

  const resource = await db.query(
    'SELECT owner_id FROM resources WHERE id = $1',
    [resourceId]
  );

  if (!resource || resource.owner_id !== userId) {
    return res.status(403).json({
      error: 'You do not have access to this resource'
    });
  }

  req.resource = resource;
  next();
}

// Usage
app.put('/api/posts/:id',
  authenticateToken,
  requireOwnership,
  updatePost
);
```

### Hierarchical Permissions

```javascript
class HierarchicalAuthService {
  constructor() {
    this.hierarchy = {
      'admin': ['editor', 'viewer'],
      'editor': ['viewer'],
      'viewer': []
    };
  }

  canAccessAs(userRole, requiredRole) {
    if (userRole === requiredRole) {
      return true;
    }

    const subordinates = this.hierarchy[userRole] || [];

    for (const subordinate of subordinates) {
      if (this.canAccessAs(subordinate, requiredRole)) {
        return true;
      }
    }

    return false;
  }

  requireMinimumRole(role) {
    return (req, res, next) => {
      if (!this.canAccessAs(req.user.role, role)) {
        return res.status(403).json({
          error: `Requires ${role} role or higher`
        });
      }
      next();
    };
  }
}

const authService = new HierarchicalAuthService();

app.get('/api/analytics',
  authenticateToken,
  authService.requireMinimumRole('editor'),
  getAnalytics
);
```

## Field-Level Authorization

```javascript
class FieldLevelAuthService {
  constructor() {
    this.fieldPermissions = {
      admin: ['*'],
      editor: ['title', 'content', 'published'],
      viewer: ['title', 'content']
    };
  }

  filterFields(data, userRole) {
    const allowedFields = this.fieldPermissions[userRole] || [];

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

  filterArrayFields(dataArray, userRole) {
    return dataArray.map(item => this.filterFields(item, userRole));
  }
}

// Middleware
function filterResponse(req, res, next) {
  const originalJson = res.json.bind(res);
  const authService = new FieldLevelAuthService();

  res.json = function(data) {
    if (req.user) {
      if (Array.isArray(data)) {
        data = authService.filterArrayFields(data, req.user.role);
      } else {
        data = authService.filterFields(data, req.user.role);
      }
    }
    return originalJson(data);
  };

  next();
}

app.get('/api/users/:id',
  authenticateToken,
  filterResponse,
  getUser
);
```

## Dynamic Authorization

```javascript
class DynamicAuthService {
  async checkPolicy(userId, action, resourceType, resourceId) {
    // Check cached policies
    const cached = await this.getCachedPolicy(userId, action, resourceType);
    if (cached !== null) {
      return cached;
    }

    // Evaluate dynamic conditions
    const user = await getUserById(userId);
    const resource = await getResource(resourceType, resourceId);

    // Business rules
    if (action === 'edit') {
      // Can edit own content
      if (resource.ownerId === userId) {
        return true;
      }

      // Can edit if manager of owner
      if (user.role === 'manager' && resource.department === user.department) {
        return true;
      }

      // Can edit if in approval workflow
      if (resource.status === 'pending' && user.role === 'approver') {
        return true;
      }
    }

    if (action === 'delete') {
      // Can delete own content if not published
      if (resource.ownerId === userId && resource.status !== 'published') {
        return true;
      }

      // Admins can delete anything
      if (user.role === 'admin') {
        return true;
      }
    }

    return false;
  }

  async getCachedPolicy(userId, action, resourceType) {
    const key = `policy:${userId}:${action}:${resourceType}`;
    return await redis.get(key);
  }
}

// Usage
async function checkDynamicAuth(req, res, next) {
  const authService = new DynamicAuthService();
  const action = getActionFromMethod(req.method);
  const resourceType = getResourceType(req.path);
  const resourceId = req.params.id;

  const allowed = await authService.checkPolicy(
    req.user.id,
    action,
    resourceType,
    resourceId
  );

  if (!allowed) {
    return res.status(403).json({ error: 'Access denied' });
  }

  next();
}
```

## Authorization Decorators (TypeScript)

```typescript
function RequirePermission(permission: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const req = args[0];
      const res = args[1];

      if (!req.user || !hasPermission(req.user.role, permission)) {
        return res.status(403).json({ error: 'Insufficient permissions' });
      }

      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

class UserController {
  @RequirePermission('users:delete')
  async deleteUser(req: Request, res: Response) {
    await userService.deleteUser(req.params.id);
    res.json({ message: 'User deleted' });
  }

  @RequirePermission('users:read')
  async getUsers(req: Request, res: Response) {
    const users = await userService.getUsers();
    res.json(users);
  }
}
```

## Testing Authorization

```javascript
describe('Authorization', () => {
  describe('RBAC', () => {
    it('should allow admin to delete users', async () => {
      const token = generateToken({ role: 'admin' });

      const response = await request(app)
        .delete('/api/users/123')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
    });

    it('should deny viewer from deleting users', async () => {
      const token = generateToken({ role: 'viewer' });

      const response = await request(app)
        .delete('/api/users/123')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(403);
    });
  });

  describe('Resource Ownership', () => {
    it('should allow owner to edit resource', async () => {
      const token = generateToken({ userId: 1 });

      const response = await request(app)
        .put('/api/posts/1')
        .set('Authorization', `Bearer ${token}`)
        .send({ title: 'Updated' });

      expect(response.status).toBe(200);
    });

    it('should deny non-owner from editing resource', async () => {
      const token = generateToken({ userId: 2 });

      const response = await request(app)
        .put('/api/posts/1')
        .set('Authorization', `Bearer ${token}`)
        .send({ title: 'Updated' });

      expect(response.status).toBe(403);
    });
  });
});
```

## Best Practices

1. **Default Deny**: Deny access by default, explicitly allow
2. **Least Privilege**: Grant minimum necessary permissions
3. **Separation of Duties**: Separate critical functions
4. **Regular Audits**: Review permissions regularly
5. **Log Access Decisions**: Audit all authorization checks
6. **Fail Securely**: Handle errors by denying access
7. **Test Thoroughly**: Test all authorization paths
8. **Cache Wisely**: Cache policies but invalidate promptly

## Common Pitfalls

1. **Trusting Client-Side Checks**: Always verify server-side
2. **Insecure Direct Object References**: Validate ownership
3. **Missing Function-Level Checks**: Protect all endpoints
4. **Over-Permissive Defaults**: Start restrictive
5. **Ignoring Horizontal Privileges**: Check peer access
6. **Inconsistent Authorization**: Use centralized logic

By implementing robust authorization controls, you ensure that users can only access resources and perform actions they're explicitly permitted to, protecting your application and user data.
