---
last_update: { author: "Author Name" }
---

# Create Page, working with Layouts

Guide to creating pages and working with different layout structures in your application.

## Overview

Pages are the foundation of your application's user interface. Understanding how to create pages and work with layouts enables you to build consistent, maintainable, and scalable user interfaces.

## Creating a New Page

### Basic Page Creation

```jsx
// pages/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard</p>
    </div>
  );
};

export default Dashboard;
```

### Page with Layout

```jsx
// pages/Dashboard.jsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard</p>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
```

## Layout Types

### 1. Main Layout

Standard layout with header, sidebar, and footer:

```jsx
// layouts/MainLayout.jsx
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="main-layout-body">
        <Sidebar />
        <main className="main-layout-content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
```

### 2. Centered Layout

Content centered on the page:

```jsx
// layouts/CenteredLayout.jsx
import React from 'react';

const CenteredLayout = ({ children, maxWidth = '1200px' }) => {
  return (
    <div className="centered-layout">
      <div
        className="centered-layout-content"
        style={{ maxWidth }}
      >
        {children}
      </div>
    </div>
  );
};

export default CenteredLayout;
```

### 3. Split Layout

Two-column layout:

```jsx
// layouts/SplitLayout.jsx
import React from 'react';

const SplitLayout = ({ left, right, ratio = '1:1' }) => {
  const [leftSize, rightSize] = ratio.split(':');

  return (
    <div className="split-layout">
      <div
        className="split-layout-left"
        style={{ flex: leftSize }}
      >
        {left}
      </div>
      <div
        className="split-layout-right"
        style={{ flex: rightSize }}
      >
        {right}
      </div>
    </div>
  );
};

export default SplitLayout;
```

### 4. Dashboard Layout

Grid-based dashboard layout:

```jsx
// layouts/DashboardLayout.jsx
import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-grid">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
```

## Layout Components

### Grid System

```jsx
// components/Grid.jsx
const Grid = ({ columns = 12, gap = '16px', children }) => {
  return (
    <div
      className="grid"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap
      }}
    >
      {children}
    </div>
  );
};

const GridItem = ({ span = 1, children }) => {
  return (
    <div
      className="grid-item"
      style={{ gridColumn: `span ${span}` }}
    >
      {children}
    </div>
  );
};
```

### Flex Container

```jsx
// components/Flex.jsx
const Flex = ({
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  gap = '0',
  wrap = 'nowrap',
  children
}) => {
  return (
    <div
      className="flex"
      style={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap,
        flexWrap: wrap
      }}
    >
      {children}
    </div>
  );
};
```

## Page Sections

### Header Section

```jsx
const PageHeader = ({ title, subtitle, actions }) => {
  return (
    <header className="page-header">
      <div className="page-header-text">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {actions && (
        <div className="page-header-actions">
          {actions}
        </div>
      )}
    </header>
  );
};
```

### Content Section

```jsx
const PageContent = ({ children }) => {
  return (
    <section className="page-content">
      {children}
    </section>
  );
};
```

### Sidebar Section

```jsx
const PageSidebar = ({ children, position = 'left' }) => {
  return (
    <aside className={`page-sidebar page-sidebar-${position}`}>
      {children}
    </aside>
  );
};
```

## Layout Patterns

### Card Grid Layout

```jsx
const CardGridPage = () => {
  return (
    <MainLayout>
      <PageHeader title="Products" />
      <PageContent>
        <Grid columns={3} gap="24px">
          {products.map(product => (
            <GridItem key={product.id}>
              <ProductCard {...product} />
            </GridItem>
          ))}
        </Grid>
      </PageContent>
    </MainLayout>
  );
};
```

### List with Sidebar

```jsx
const ListWithSidebarPage = () => {
  return (
    <MainLayout>
      <PageHeader title="Articles" />
      <SplitLayout
        ratio="3:1"
        left={
          <ArticleList articles={articles} />
        }
        right={
          <PageSidebar>
            <FilterPanel />
            <CategoryList />
          </PageSidebar>
        }
      />
    </MainLayout>
  );
};
```

### Master-Detail Layout

```jsx
const MasterDetailPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <MainLayout>
      <PageHeader title="Inbox" />
      <SplitLayout
        ratio="1:2"
        left={
          <ItemList
            items={items}
            onSelect={setSelectedItem}
          />
        }
        right={
          selectedItem ? (
            <ItemDetail item={selectedItem} />
          ) : (
            <EmptyState message="Select an item" />
          )
        }
      />
    </MainLayout>
  );
};
```

## Responsive Layouts

### Mobile-First Approach

```jsx
const ResponsiveLayout = ({ children }) => {
  return (
    <div className="responsive-layout">
      {/* Mobile: Stack vertically */}
      <div className="mobile-layout">
        {children}
      </div>

      {/* Tablet: 2-column grid */}
      <div className="tablet-layout">
        {children}
      </div>

      {/* Desktop: 3-column grid */}
      <div className="desktop-layout">
        {children}
      </div>
    </div>
  );
};
```

### Breakpoint-Based Layouts

```css
.responsive-layout {
  display: grid;
  gap: 1rem;

  /* Mobile */
  grid-template-columns: 1fr;

  /* Tablet */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Desktop */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Layout Best Practices

### 1. Consistent Spacing

Use consistent spacing throughout your layouts:

```jsx
const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px'
};
```

### 2. Semantic HTML

Use appropriate HTML elements:

```jsx
<article>
  <header>
    <h1>Article Title</h1>
  </header>
  <section>
    <p>Article content...</p>
  </section>
  <footer>
    <p>Published on...</p>
  </footer>
</article>
```

### 3. Layout Composition

Build complex layouts from simple components:

```jsx
const ComplexPage = () => {
  return (
    <MainLayout>
      <PageHeader title="Dashboard" />
      <DashboardLayout>
        <Widget span={2}>
          <StatsCard />
        </Widget>
        <Widget span={1}>
          <QuickActions />
        </Widget>
        <Widget span={3}>
          <ChartWidget />
        </Widget>
      </DashboardLayout>
    </MainLayout>
  );
};
```

## Related Documentation

- [Styling with Design Tokens](./styling-with-design-tokens.md) - Token-based styling
- [Responsive Design](./responsive-design.md) - Responsive design strategies
- [UI Event handling](./ui-event-handling.md) - Event handling patterns
