# ORM Artifacts

Object-Relational Mapping (ORM) artifacts help bridge the gap between your application's object model and the relational database structure.

## Entity Definition

### Entity Classes
```javascript
@Entity
class User {
  @PrimaryKey
  id: number;

  @Column
  username: string;

  @Column
  email: string;

  @OneToMany(() => Post)
  posts: Post[];
}
```

### Annotations and Decorators
- `@Entity` - Mark class as database entity
- `@Column` - Define table columns
- `@PrimaryKey` - Specify primary key
- `@ForeignKey` - Define relationships

## Relationships

### One-to-One
```javascript
@OneToOne(() => Profile)
profile: Profile;
```

### One-to-Many
```javascript
@OneToMany(() => Comment)
comments: Comment[];
```

### Many-to-Many
```javascript
@ManyToMany(() => Tag)
tags: Tag[];
```

## Entity Configuration

### Table Mapping
- Custom table names
- Column naming strategies
- Schema configuration

### Indexes
- Single column indexes
- Composite indexes
- Unique constraints

### Lifecycle Hooks
- `@BeforeInsert`
- `@AfterInsert`
- `@BeforeUpdate`
- `@AfterUpdate`
- `@BeforeRemove`

## Migrations

### Creating Migrations
```bash
npm run migration:create -- AddUserTable
```

### Running Migrations
```bash
npm run migration:run
```

### Reverting Migrations
```bash
npm run migration:revert
```

## Best Practices

- Keep entities focused and cohesive
- Use appropriate data types
- Define proper relationships
- Add indexes strategically
- Version control migrations
