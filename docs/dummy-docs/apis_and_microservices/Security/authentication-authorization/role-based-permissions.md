# Role-Based & Fine-Grained Permissions

Learn how to implement role-based access control (RBAC) and fine-grained permission systems for precise access management.

## Overview

Role-Based Access Control (RBAC) simplifies permission management by assigning permissions to roles rather than individual users. Fine-grained permissions provide detailed control over specific actions and resources.

## Role Hierarchy

### Defining Roles

```javascript
// Role definitions with hierarchy
const roleHierarchy = {
  superadmin: {
    level: 100,
    inherits: ['admin'],
    permissions: ['*'] // All permissions
  },
  admin: {
    level: 80,
    inherits: ['manager', 'editor'],
    permissions: [
      'users:*',
      'roles:*',
      'settings:*',
      'reports:*'
    ]
  },
  manager: {
    level: 60,
    inherits: ['editor'],
    permissions: [
      'users:read',
      'users:update',
      'posts:*',
      'analytics:read'
    ]
  },
  editor: {
    level: 40,
    inherits: ['viewer'],
    permissions: [
      'posts:create',
      'posts:update',
      'posts:delete',
      'media:upload'
    ]
  },
  viewer: {
    level: 20,
    inherits: [],
    permissions: [
      'posts:read',
      'comments:read'
    ]
  },
  guest: {
    level: 0,
    inherits: [],
    permissions: [
      'posts:read:public'
    ]
  }
};

class RoleManager {
  constructor(hierarchy) {
    this.hierarchy = hierarchy;
  }

  // Get all permissions for a role (including inherited)
  getRolePermissions(roleName) {
    const role = this.hierarchy[roleName];
    if (!role) return [];

    let permissions = [...role.permissions];

    // Add inherited permissions
    for (const inheritedRole of role.inherits) {
      permissions = permissions.concat(
        this.getRolePermissions(inheritedRole)
      );
    }

    return [...new Set(permissions)]; // Remove duplicates
  }

  // Check if role has specific permission
  hasPermission(roleName, permission) {
    const permissions = this.getRolePermissions(roleName);

    return permissions.some(p => {
      if (p === '*') return true;
      if (p === permission) return true;

      // Check wildcard permissions
      const [resource, action] = permission.split(':');
      const [pResource, pAction] = p.split(':');

      if (pResource === resource && pAction === '*') return true;
      if (pResource === resource && pAction === action) return true;

      return false;
    });
  }

  // Check if one role is superior to another
  isSuperior(role1, role2) {
    const level1 = this.hierarchy[role1]?.level || 0;
    const level2 = this.hierarchy[role2]?.level || 0;
    return level1 > level2;
  }
}

// Usage
const roleManager = new RoleManager(roleHierarchy);

function requireRole(requiredRole) {
  return (req, res, next) => {
    const userRole = req.user.role;

    if (!roleManager.isSuperior(userRole, requiredRole) && userRole !== requiredRole) {
      return res.status(403).json({ error: 'Insufficient role level' });
    }

    next();
  };
}

app.delete('/api/users/:id',
  authenticateToken,
  requireRole('admin'),
  deleteUser
);
```

### Java Role Hierarchy

```java
@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Integer level;

    @ManyToMany
    @JoinTable(
        name = "role_inheritance",
        joinColumns = @JoinColumn(name = "role_id"),
        inverseJoinColumns = @JoinColumn(name = "inherits_role_id")
    )
    private Set<Role> inheritsFrom;

    @ManyToMany
    @JoinTable(
        name = "role_permissions",
        joinColumns = @JoinColumn(name = "role_id"),
        inverseJoinColumns = @JoinColumn(name = "permission_id")
    )
    private Set<Permission> permissions;
}

@Service
public class RoleService {

    public Set<Permission> getAllPermissions(Role role) {
        Set<Permission> allPermissions = new HashSet<>(role.getPermissions());

        // Add inherited permissions
        for (Role inheritedRole : role.getInheritsFrom()) {
            allPermissions.addAll(getAllPermissions(inheritedRole));
        }

        return allPermissions;
    }

    public boolean hasPermission(Role role, String permissionName) {
        Set<Permission> permissions = getAllPermissions(role);

        return permissions.stream()
            .anyMatch(p -> matchesPermission(p.getName(), permissionName));
    }

    private boolean matchesPermission(String granted, String required) {
        if (granted.equals("*")) return true;
        if (granted.equals(required)) return true;

        String[] grantedParts = granted.split(":");
        String[] requiredParts = required.split(":");

        if (grantedParts.length >= 2 && requiredParts.length >= 2) {
            return grantedParts[0].equals(requiredParts[0]) &&
                   grantedParts[1].equals("*");
        }

        return false;
    }
}
```

## Fine-Grained Permissions

### Permission Syntax

```javascript
// Permission format: resource:action:scope
const permissionExamples = [
  'posts:read:*',           // Read all posts
  'posts:read:own',         // Read own posts only
  'posts:write:department', // Write posts in own department
  'users:delete:none',      // Cannot delete users
  'reports:export:approved' // Export approved reports only
];

class PermissionEngine {
  // Parse permission string
  parsePermission(permission) {
    const [resource, action, scope = '*'] = permission.split(':');
    return { resource, action, scope };
  }

  // Check if granted permission satisfies required permission
  satisfies(granted, required) {
    const g = this.parsePermission(granted);
    const r = this.parsePermission(required);

    // Check resource
    if (g.resource !== '*' && g.resource !== r.resource) {
      return false;
    }

    // Check action
    if (g.action !== '*' && g.action !== r.action) {
      return false;
    }

    // Check scope
    if (g.scope === '*') return true;
    if (g.scope === r.scope) return true;

    // Hierarchical scope check
    const scopeHierarchy = ['*', 'organization', 'department', 'team', 'own', 'none'];
    const gIndex = scopeHierarchy.indexOf(g.scope);
    const rIndex = scopeHierarchy.indexOf(r.scope);

    return gIndex <= rIndex;
  }

  // Check user permissions against requirement
  checkPermission(userPermissions, required) {
    return userPermissions.some(granted =>
      this.satisfies(granted, required)
    );
  }
}

// Contextual permission check
async function checkContextualPermission(user, action, resource) {
  const engine = new PermissionEngine();
  const required = `${resource.type}:${action}:${determineScope(user, resource)}`;

  return engine.checkPermission(user.permissions, required);
}

function determineScope(user, resource) {
  if (resource.ownerId === user.id) return 'own';
  if (resource.teamId === user.teamId) return 'team';
  if (resource.departmentId === user.departmentId) return 'department';
  if (resource.organizationId === user.organizationId) return 'organization';
  return '*';
}
```

## Permission Management

### Assigning Permissions

```javascript
class PermissionManager {
  constructor() {
    this.db = database;
  }

  async assignPermissionToRole(roleId, permission) {
    await this.db.query(`
      INSERT INTO role_permissions (role_id, permission)
      VALUES ($1, $2)
      ON CONFLICT (role_id, permission) DO NOTHING
    `, [roleId, permission]);

    // Invalidate cache
    await this.invalidateRoleCache(roleId);
  }

  async removePermissionFromRole(roleId, permission) {
    await this.db.query(`
      DELETE FROM role_permissions
      WHERE role_id = $1 AND permission = $2
    `, [roleId, permission]);

    await this.invalidateRoleCache(roleId);
  }

  async assignRoleToUser(userId, roleId) {
    await this.db.query(`
      INSERT INTO user_roles (user_id, role_id)
      VALUES ($1, $2)
      ON CONFLICT (user_id, role_id) DO NOTHING
    `, [userId, roleId]);

    await this.invalidateUserCache(userId);
  }

  async removeRoleFromUser(userId, roleId) {
    await this.db.query(`
      DELETE FROM user_roles
      WHERE user_id = $1 AND role_id = $2
    `, [userId, roleId]);

    await this.invalidateUserCache(userId);
  }

  async getUserPermissions(userId) {
    // Check cache first
    const cached = await this.getCachedPermissions(userId);
    if (cached) return cached;

    // Fetch from database
    const result = await this.db.query(`
      SELECT DISTINCT rp.permission
      FROM user_roles ur
      JOIN role_permissions rp ON ur.role_id = rp.role_id
      WHERE ur.user_id = $1
    `, [userId]);

    const permissions = result.map(r => r.permission);

    // Cache for 5 minutes
    await this.cachePermissions(userId, permissions, 300);

    return permissions;
  }

  async getCachedPermissions(userId) {
    return await redis.get(`permissions:${userId}`);
  }

  async cachePermissions(userId, permissions, ttl) {
    await redis.setex(
      `permissions:${userId}`,
      ttl,
      JSON.stringify(permissions)
    );
  }

  async invalidateUserCache(userId) {
    await redis.del(`permissions:${userId}`);
  }

  async invalidateRoleCache(roleId) {
    // Invalidate all users with this role
    const users = await this.db.query(`
      SELECT user_id FROM user_roles WHERE role_id = $1
    `, [roleId]);

    for (const user of users) {
      await this.invalidateUserCache(user.user_id);
    }
  }
}
```

## Dynamic Role Assignment

```javascript
class DynamicRoleService {
  // Assign temporary role
  async assignTemporaryRole(userId, roleId, expiresIn) {
    const expiresAt = new Date(Date.now() + expiresIn);

    await this.db.query(`
      INSERT INTO user_roles (user_id, role_id, expires_at)
      VALUES ($1, $2, $3)
    `, [userId, roleId, expiresAt]);

    // Schedule cleanup
    this.scheduleRoleExpiration(userId, roleId, expiresIn);
  }

  // Conditional role assignment
  async evaluateConditionalRoles(user) {
    const conditions = [
      {
        role: 'premium_user',
        condition: () => user.subscriptionActive && user.subscriptionTier === 'premium'
      },
      {
        role: 'verified_user',
        condition: () => user.emailVerified && user.phoneVerified
      },
      {
        role: 'contributor',
        condition: async () => {
          const postCount = await this.getUserPostCount(user.id);
          return postCount >= 10;
        }
      }
    ];

    const assignedRoles = [];

    for (const { role, condition } of conditions) {
      if (await condition()) {
        await this.assignRoleToUser(user.id, role);
        assignedRoles.push(role);
      } else {
        await this.removeRoleFromUser(user.id, role);
      }
    }

    return assignedRoles;
  }

  // Context-based roles
  async getRolesInContext(userId, contextType, contextId) {
    return await this.db.query(`
      SELECT r.name
      FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = $1
        AND ur.context_type = $2
        AND ur.context_id = $3
    `, [userId, contextType, contextId]);
  }
}
```

## Permission Middleware

```javascript
// Flexible permission middleware
function requirePermissions(permissions, options = {}) {
  const { all = true, context = null } = options;

  return async (req, res, next) => {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const userPermissions = await getUserPermissions(user.id);
    const permissionEngine = new PermissionEngine();

    const checks = permissions.map(permission => {
      if (context) {
        const contextualPermission = applyContext(permission, context(req));
        return permissionEngine.checkPermission(userPermissions, contextualPermission);
      }
      return permissionEngine.checkPermission(userPermissions, permission);
    });

    const hasPermission = all
      ? checks.every(check => check)
      : checks.some(check => check);

    if (!hasPermission) {
      return res.status(403).json({
        error: 'Insufficient permissions',
        required: permissions
      });
    }

    next();
  };
}

// Usage examples
app.get('/api/posts',
  authenticateToken,
  requirePermissions(['posts:read'])
);

app.post('/api/posts',
  authenticateToken,
  requirePermissions(['posts:create'], {
    context: (req) => ({
      department: req.user.departmentId
    })
  })
);

app.delete('/api/posts/:id',
  authenticateToken,
  requirePermissions(
    ['posts:delete:own', 'posts:delete:*'],
    { all: false } // At least one permission
  )
);
```

## Permission Auditing

```javascript
class PermissionAuditor {
  async logPermissionCheck(userId, permission, allowed, resource) {
    await this.db.query(`
      INSERT INTO permission_audit_log
      (user_id, permission, allowed, resource_type, resource_id, timestamp)
      VALUES ($1, $2, $3, $4, $5, NOW())
    `, [userId, permission, allowed, resource?.type, resource?.id]);
  }

  async getPermissionUsage(userId, timeframe) {
    return await this.db.query(`
      SELECT
        permission,
        COUNT(*) as usage_count,
        SUM(CASE WHEN allowed THEN 1 ELSE 0 END) as allowed_count,
        SUM(CASE WHEN NOT allowed THEN 1 ELSE 0 END) as denied_count
      FROM permission_audit_log
      WHERE user_id = $1
        AND timestamp > NOW() - $2::interval
      GROUP BY permission
      ORDER BY usage_count DESC
    `, [userId, timeframe]);
  }

  async getUnusedPermissions(userId, timeframe) {
    return await this.db.query(`
      SELECT rp.permission
      FROM user_roles ur
      JOIN role_permissions rp ON ur.role_id = rp.role_id
      WHERE ur.user_id = $1
        AND rp.permission NOT IN (
          SELECT DISTINCT permission
          FROM permission_audit_log
          WHERE user_id = $1
            AND timestamp > NOW() - $2::interval
        )
    `, [userId, timeframe]);
  }
}

// Middleware with auditing
function requirePermissionWithAudit(permission) {
  return async (req, res, next) => {
    const user = req.user;
    const auditor = new PermissionAuditor();
    const hasPermission = await checkPermission(user, permission);

    await auditor.logPermissionCheck(
      user.id,
      permission,
      hasPermission,
      req.resource
    );

    if (!hasPermission) {
      return res.status(403).json({ error: 'Access denied' });
    }

    next();
  };
}
```

## Testing Permissions

```javascript
describe('Role-Based Permissions', () => {
  describe('Role Hierarchy', () => {
    it('should inherit permissions from parent roles', () => {
      const roleManager = new RoleManager(roleHierarchy);
      const adminPerms = roleManager.getRolePermissions('admin');
      const editorPerms = roleManager.getRolePermissions('editor');

      // Admin should have all editor permissions
      editorPerms.forEach(perm => {
        expect(adminPerms).toContain(perm);
      });
    });

    it('should check role superiority', () => {
      const roleManager = new RoleManager(roleHierarchy);

      expect(roleManager.isSuperior('admin', 'editor')).toBe(true);
      expect(roleManager.isSuperior('editor', 'admin')).toBe(false);
      expect(roleManager.isSuperior('editor', 'viewer')).toBe(true);
    });
  });

  describe('Fine-Grained Permissions', () => {
    it('should match wildcard permissions', () => {
      const engine = new PermissionEngine();

      expect(engine.satisfies('posts:*', 'posts:read')).toBe(true);
      expect(engine.satisfies('posts:read', 'posts:write')).toBe(false);
      expect(engine.satisfies('*:*', 'posts:read')).toBe(true);
    });

    it('should check scope hierarchy', () => {
      const engine = new PermissionEngine();

      expect(engine.satisfies('posts:read:*', 'posts:read:own')).toBe(true);
      expect(engine.satisfies('posts:read:own', 'posts:read:*')).toBe(false);
    });
  });
});
```

## Best Practices

1. **Keep Roles Simple**: Don't create too many roles
2. **Use Permission Inheritance**: Leverage role hierarchy
3. **Cache Permissions**: Cache user permissions for performance
4. **Audit Access**: Log all permission checks
5. **Regular Reviews**: Review and prune unused permissions
6. **Test Thoroughly**: Test all permission combinations
7. **Document Roles**: Clearly document role purposes
8. **Version Control**: Track permission changes

By implementing a robust role-based permission system with fine-grained controls, you can manage access effectively while maintaining security and flexibility.
