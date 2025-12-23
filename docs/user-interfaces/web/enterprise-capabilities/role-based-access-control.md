---
last_update: { author: "Author Name" }
---

# Role based Access Control

Implementing role-based access control (RBAC) in your application to manage user permissions and access.

## Overview

Role-based Access Control (RBAC) is a method of regulating access to resources based on the roles of individual users within an organization. RBAC ensures that users can only access the features and data they are authorized to use.

## Core RBAC Concepts

### Roles

Roles represent a collection of permissions assigned to users.

```javascript
const roles = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  USER: 'user',
  GUEST: 'guest',
};

const roleHierarchy = {
  admin: ['admin', 'manager', 'user', 'guest'],
  manager: ['manager', 'user', 'guest'],
  user: ['user', 'guest'],
  guest: ['guest'],
};
```

### Permissions

Permissions define what actions can be performed on resources.

```javascript
const permissions = {
  // User management
  USER_CREATE: 'user:create',
  USER_READ: 'user:read',
  USER_UPDATE: 'user:update',
  USER_DELETE: 'user:delete',

  // Content management
  CONTENT_CREATE: 'content:create',
  CONTENT_READ: 'content:read',
  CONTENT_UPDATE: 'content:update',
  CONTENT_DELETE: 'content:delete',

  // Settings
  SETTINGS_VIEW: 'settings:view',
  SETTINGS_EDIT: 'settings:edit',
};
```

### Role-Permission Mapping

Map permissions to roles.

```javascript
const rolePermissions = {
  admin: [
    'user:create',
    'user:read',
    'user:update',
    'user:delete',
    'content:create',
    'content:read',
    'content:update',
    'content:delete',
    'settings:view',
    'settings:edit',
  ],
  manager: [
    'user:read',
    'user:update',
    'content:create',
    'content:read',
    'content:update',
    'content:delete',
    'settings:view',
  ],
  user: [
    'user:read',
    'content:read',
    'content:create',
    'content:update',
  ],
  guest: [
    'content:read',
  ],
};
```

## Implementation

### User Context with RBAC

```javascript
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    // Authenticate user
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const userData = await response.json();
    setUser({
      id: userData.id,
      name: userData.name,
      email: userData.email,
      role: userData.role,
      permissions: userData.permissions,
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
  };

  const hasPermission = (permission) => {
    if (!user) return false;
    return user.permissions.includes(permission);
  };

  const hasRole = (role) => {
    if (!user) return false;
    return user.role === role;
  };

  const hasAnyRole = (roles) => {
    if (!user) return false;
    return roles.includes(user.role);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        hasPermission,
        hasRole,
        hasAnyRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
```

### Permission Checking Hook

```javascript
import { useAuth } from './AuthContext';

export const usePermission = (permission) => {
  const { hasPermission } = useAuth();
  return hasPermission(permission);
};

export const useRole = (role) => {
  const { hasRole } = useAuth();
  return hasRole(role);
};

// Usage
const DeleteButton = () => {
  const canDelete = usePermission('user:delete');

  if (!canDelete) return null;

  return <button onClick={handleDelete}>Delete User</button>;
};
```

## Component-Level Access Control

### Protected Component

```javascript
const ProtectedComponent = ({ permission, children, fallback = null }) => {
  const { hasPermission } = useAuth();

  if (!hasPermission(permission)) {
    return fallback;
  }

  return children;
};

// Usage
<ProtectedComponent permission="content:create">
  <CreateContentButton />
</ProtectedComponent>

<ProtectedComponent
  permission="user:delete"
  fallback={<div>You don't have permission to delete users</div>}
>
  <DeleteUserButton />
</ProtectedComponent>
```

### Role-Based Component

```javascript
const RoleBasedComponent = ({ roles, children, fallback = null }) => {
  const { hasAnyRole } = useAuth();

  if (!hasAnyRole(roles)) {
    return fallback;
  }

  return children;
};

// Usage
<RoleBasedComponent roles={['admin', 'manager']}>
  <AdminPanel />
</RoleBasedComponent>
```

### Conditional Rendering Based on Permissions

```javascript
const UserManagement = () => {
  const { hasPermission } = useAuth();

  return (
    <div>
      <h1>User Management</h1>

      {hasPermission('user:read') && <UserList />}

      {hasPermission('user:create') && (
        <button onClick={handleCreateUser}>Create User</button>
      )}

      {hasPermission('user:update') && (
        <button onClick={handleEditUser}>Edit User</button>
      )}

      {hasPermission('user:delete') && (
        <button onClick={handleDeleteUser}>Delete User</button>
      )}
    </div>
  );
};
```

## Route Protection

### Protected Route Component

```javascript
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ permission, children }) => {
  const { user, hasPermission } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (permission && !hasPermission(permission)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

// Usage with React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute permission="settings:edit">
              <AdminPanel />
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute permission="user:read">
              <UserManagement />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
```

### Role-Based Route Protection

```javascript
const RoleProtectedRoute = ({ roles, children }) => {
  const { user, hasAnyRole } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!hasAnyRole(roles)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

// Usage
<Route
  path="/admin"
  element={
    <RoleProtectedRoute roles={['admin']}>
      <AdminPanel />
    </RoleProtectedRoute>
  }
/>

<Route
  path="/management"
  element={
    <RoleProtectedRoute roles={['admin', 'manager']}>
      <ManagementPanel />
    </RoleProtectedRoute>
  }
/>
```

## UI Element Visibility

### Hide/Show Based on Permissions

```javascript
const ActionButtons = ({ userId }) => {
  const { hasPermission } = useAuth();

  return (
    <div className="action-buttons">
      {hasPermission('user:update') && (
        <button onClick={() => handleEdit(userId)}>Edit</button>
      )}

      {hasPermission('user:delete') && (
        <button onClick={() => handleDelete(userId)}>Delete</button>
      )}

      {hasPermission('user:read') && (
        <button onClick={() => handleView(userId)}>View Details</button>
      )}
    </div>
  );
};
```

### Disable Elements Based on Permissions

```javascript
const EditForm = () => {
  const canEdit = usePermission('content:update');

  return (
    <form>
      <input
        type="text"
        name="title"
        disabled={!canEdit}
      />
      <textarea
        name="content"
        disabled={!canEdit}
      />
      <button type="submit" disabled={!canEdit}>
        Save Changes
      </button>
    </form>
  );
};
```

## API Request Authorization

### Adding Authorization Headers

```javascript
const apiClient = {
  get: async (url, options = {}) => {
    const token = localStorage.getItem('authToken');
    const response = await fetch(url, {
      ...options,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (response.status === 403) {
      throw new Error('You do not have permission to perform this action');
    }

    return response.json();
  },

  post: async (url, data, options = {}) => {
    const token = localStorage.getItem('authToken');
    const response = await fetch(url, {
      method: 'POST',
      ...options,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
    });

    if (response.status === 403) {
      throw new Error('You do not have permission to perform this action');
    }

    return response.json();
  },
};
```

### Permission-Based API Calls

```javascript
const useUserActions = () => {
  const { hasPermission } = useAuth();

  const deleteUser = async (userId) => {
    if (!hasPermission('user:delete')) {
      throw new Error('You do not have permission to delete users');
    }

    return apiClient.delete(`/api/users/${userId}`);
  };

  const updateUser = async (userId, data) => {
    if (!hasPermission('user:update')) {
      throw new Error('You do not have permission to update users');
    }

    return apiClient.put(`/api/users/${userId}`, data);
  };

  return { deleteUser, updateUser };
};
```

## Dynamic Navigation Based on Roles

### Navigation Menu with RBAC

```javascript
const Navigation = () => {
  const { user, hasPermission, hasAnyRole } = useAuth();

  const menuItems = [
    {
      label: 'Dashboard',
      path: '/dashboard',
      show: true,
    },
    {
      label: 'Users',
      path: '/users',
      show: hasPermission('user:read'),
    },
    {
      label: 'Content',
      path: '/content',
      show: hasPermission('content:read'),
    },
    {
      label: 'Settings',
      path: '/settings',
      show: hasPermission('settings:view'),
    },
    {
      label: 'Admin Panel',
      path: '/admin',
      show: hasAnyRole(['admin']),
    },
  ];

  return (
    <nav>
      <ul>
        {menuItems.filter(item => item.show).map(item => (
          <li key={item.path}>
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
```

## Advanced RBAC Patterns

### Resource-Based Permissions

```javascript
const canAccessResource = (user, resource, action) => {
  // Check if user owns the resource
  if (resource.ownerId === user.id) {
    return true;
  }

  // Check role-based permission
  const permission = `${resource.type}:${action}`;
  return user.permissions.includes(permission);
};

// Usage
const EditButton = ({ post }) => {
  const { user } = useAuth();
  const canEdit = canAccessResource(user, post, 'update');

  if (!canEdit) return null;

  return <button onClick={() => handleEdit(post)}>Edit</button>;
};
```

### Context-Based Permissions

```javascript
const hasContextualPermission = (user, action, context) => {
  // Check if user has permission in specific context
  if (context.department === user.department) {
    return user.permissions.includes(action);
  }

  // Check if user has global permission
  return user.permissions.includes(`global:${action}`);
};
```

### Permission Inheritance

```javascript
const getInheritedPermissions = (role) => {
  const roleHierarchy = {
    admin: ['admin', 'manager', 'user', 'guest'],
    manager: ['manager', 'user', 'guest'],
    user: ['user', 'guest'],
    guest: ['guest'],
  };

  const inheritedRoles = roleHierarchy[role] || [role];
  const allPermissions = new Set();

  inheritedRoles.forEach(inheritedRole => {
    const permissions = rolePermissions[inheritedRole] || [];
    permissions.forEach(permission => allPermissions.add(permission));
  });

  return Array.from(allPermissions);
};
```

## Permission Caching

```javascript
import { useState, useEffect } from 'react';

const usePermissionCache = () => {
  const [permissionCache, setPermissionCache] = useState({});

  const checkPermission = (permission) => {
    if (permission in permissionCache) {
      return permissionCache[permission];
    }

    // Check permission from user context
    const hasPermission = checkUserPermission(permission);

    // Cache the result
    setPermissionCache(prev => ({
      ...prev,
      [permission]: hasPermission,
    }));

    return hasPermission;
  };

  return { checkPermission };
};
```

## Error Handling

### Unauthorized Access Handler

```javascript
const UnauthorizedPage = () => {
  return (
    <div className="unauthorized-page">
      <h1>Access Denied</h1>
      <p>You do not have permission to access this page.</p>
      <a href="/dashboard">Go to Dashboard</a>
    </div>
  );
};
```

### Permission Error Boundary

```javascript
import { Component } from 'react';

class PermissionErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    if (error.message.includes('permission')) {
      return { hasError: true, error };
    }
    return null;
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="permission-error">
          <h2>Permission Error</h2>
          <p>{this.state.error.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
```

## Best Practices

### 1. Principle of Least Privilege

Grant users only the permissions they need to perform their job.

```javascript
// ✅ Good - Specific permissions
const editorPermissions = ['content:create', 'content:update', 'content:read'];

// ❌ Bad - Too broad
const editorPermissions = ['content:*'];
```

### 2. Server-Side Validation

Always validate permissions on the server, not just the client.

```javascript
// Client-side (UI hiding)
{hasPermission('user:delete') && <DeleteButton />}

// Server-side (enforcement)
app.delete('/api/users/:id', requirePermission('user:delete'), (req, res) => {
  // Delete user logic
});
```

### 3. Use Permission Constants

Avoid hardcoding permission strings.

```javascript
// ✅ Good
import { PERMISSIONS } from './constants';

const canDelete = hasPermission(PERMISSIONS.USER_DELETE);

// ❌ Bad
const canDelete = hasPermission('user:delete');
```

### 4. Centralize Permission Logic

Keep permission checking logic in one place.

```javascript
// permissions.js
export const checkPermission = (user, permission) => {
  return user?.permissions?.includes(permission) || false;
};

// Use everywhere
import { checkPermission } from './permissions';
```

## Testing RBAC

```javascript
import { render, screen } from '@testing-library/react';
import { AuthProvider } from './AuthContext';

test('admin can see delete button', () => {
  const adminUser = {
    role: 'admin',
    permissions: ['user:delete'],
  };

  render(
    <AuthProvider initialUser={adminUser}>
      <UserManagement />
    </AuthProvider>
  );

  expect(screen.getByText('Delete User')).toBeInTheDocument();
});

test('regular user cannot see delete button', () => {
  const regularUser = {
    role: 'user',
    permissions: ['user:read'],
  };

  render(
    <AuthProvider initialUser={regularUser}>
      <UserManagement />
    </AuthProvider>
  );

  expect(screen.queryByText('Delete User')).not.toBeInTheDocument();
});
```

## Related Documentation

- [Accessibility](./accessibility.md)
- [Language Support i18n](./language-support-i18n.md)
- [State Management](../develop/state-management.md)
- [UI Event handling](../develop/ui-event-handling.md)
