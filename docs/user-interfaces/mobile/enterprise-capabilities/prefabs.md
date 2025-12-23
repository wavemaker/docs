---
last_update: { author: "Author Name" }
---

# Prefabs

Reusable, pre-built component templates that accelerate application development with consistent, tested UI patterns.

## Overview

Prefabs (Prefabricated Components) are ready-to-use UI component templates that encapsulate complex functionality, business logic, and styling. They provide a foundation for rapid application development while maintaining consistency and quality across your application.

## What are Prefabs?

Prefabs are:
- **Pre-built Components**: Ready-to-use UI elements with built-in functionality
- **Configurable**: Customizable through props and configuration options
- **Reusable**: Can be used across multiple pages and applications
- **Tested**: Quality-assured components with comprehensive testing
- **Documented**: Well-documented APIs and usage examples

## Types of Prefabs

### 1. Data Display Prefabs

#### Data Table Prefab

Advanced table with sorting, filtering, and pagination.

```jsx
import { DataTablePrefab } from '@wavemaker/prefabs';

const UserTable = () => {
  return (
    <DataTablePrefab
      dataSource="/api/users"
      columns={[
        { field: 'name', header: 'Name', sortable: true },
        { field: 'email', header: 'Email', sortable: true },
        { field: 'role', header: 'Role', filterable: true },
        { field: 'status', header: 'Status', type: 'badge' },
      ]}
      pagination={{
        enabled: true,
        pageSize: 10,
        pageSizeOptions: [10, 25, 50],
      }}
      searchEnabled
      exportEnabled
      onRowClick={handleRowClick}
    />
  );
};
```

#### Card Grid Prefab

Responsive grid layout for displaying cards.

```jsx
import { CardGridPrefab } from '@wavemaker/prefabs';

const ProductGrid = () => {
  return (
    <CardGridPrefab
      dataSource="/api/products"
      columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      renderCard={(product) => (
        <>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <span className="price">${product.price}</span>
        </>
      )}
      onCardClick={handleProductClick}
    />
  );
};
```

#### List View Prefab

Flexible list component with various layouts.

```jsx
import { ListViewPrefab } from '@wavemaker/prefabs';

const NotificationList = () => {
  return (
    <ListViewPrefab
      dataSource="/api/notifications"
      variant="timeline"
      itemTemplate={(notification) => (
        <div className="notification-item">
          <div className="notification-icon">
            <Icon name={notification.type} />
          </div>
          <div className="notification-content">
            <h4>{notification.title}</h4>
            <p>{notification.message}</p>
            <span className="timestamp">{notification.timestamp}</span>
          </div>
        </div>
      )}
      emptyMessage="No notifications"
    />
  );
};
```

### 2. Form Prefabs

#### Login Form Prefab

Pre-configured login form with validation.

```jsx
import { LoginFormPrefab } from '@wavemaker/prefabs';

const LoginPage = () => {
  return (
    <LoginFormPrefab
      title="Welcome Back"
      subtitle="Sign in to continue"
      onSubmit={handleLogin}
      socialLogins={['google', 'facebook', 'github']}
      forgotPasswordLink="/forgot-password"
      signUpLink="/signup"
      rememberMeEnabled
      showPasswordToggle
    />
  );
};
```

#### Registration Form Prefab

Complete registration form with validation.

```jsx
import { RegistrationFormPrefab } from '@wavemaker/prefabs';

const SignUpPage = () => {
  return (
    <RegistrationFormPrefab
      fields={[
        { name: 'firstName', label: 'First Name', required: true },
        { name: 'lastName', label: 'Last Name', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'password', label: 'Password', type: 'password', required: true, minLength: 8 },
        { name: 'phone', label: 'Phone', type: 'tel' },
      ]}
      onSubmit={handleRegistration}
      termsOfServiceLink="/terms"
      privacyPolicyLink="/privacy"
      loginLink="/login"
    />
  );
};
```

#### Contact Form Prefab

Contact form with email integration.

```jsx
import { ContactFormPrefab } from '@wavemaker/prefabs';

const ContactPage = () => {
  return (
    <ContactFormPrefab
      emailEndpoint="/api/contact"
      fields={[
        { name: 'name', label: 'Name', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'subject', label: 'Subject', required: true },
        { name: 'message', label: 'Message', type: 'textarea', required: true, rows: 6 },
      ]}
      captchaEnabled
      successMessage="Thank you for contacting us!"
      onSuccess={handleSuccess}
    />
  );
};
```

### 3. Navigation Prefabs

#### Header Prefab

Responsive header with navigation and search.

```jsx
import { HeaderPrefab } from '@wavemaker/prefabs';

const AppHeader = () => {
  return (
    <HeaderPrefab
      logo="/logo.svg"
      logoLink="/"
      navigation={[
        { label: 'Home', link: '/' },
        { label: 'Products', link: '/products' },
        { label: 'About', link: '/about' },
        { label: 'Contact', link: '/contact' },
      ]}
      searchEnabled
      searchPlaceholder="Search products..."
      userMenu={{
        avatar: currentUser.avatar,
        name: currentUser.name,
        items: [
          { label: 'Profile', link: '/profile' },
          { label: 'Settings', link: '/settings' },
          { label: 'Logout', onClick: handleLogout },
        ],
      }}
      cartEnabled
      cartCount={3}
    />
  );
};
```

#### Sidebar Prefab

Collapsible sidebar navigation.

```jsx
import { SidebarPrefab } from '@wavemaker/prefabs';

const AppSidebar = () => {
  return (
    <SidebarPrefab
      collapsible
      defaultCollapsed={false}
      menuItems={[
        {
          label: 'Dashboard',
          icon: 'dashboard',
          link: '/dashboard',
        },
        {
          label: 'Users',
          icon: 'users',
          children: [
            { label: 'All Users', link: '/users' },
            { label: 'Add User', link: '/users/new' },
            { label: 'User Roles', link: '/users/roles' },
          ],
        },
        {
          label: 'Settings',
          icon: 'settings',
          link: '/settings',
        },
      ]}
      footer={
        <div className="sidebar-footer">
          <span>v1.0.0</span>
        </div>
      }
    />
  );
};
```

#### Breadcrumb Prefab

Automatic breadcrumb navigation.

```jsx
import { BreadcrumbPrefab } from '@wavemaker/prefabs';

const PageBreadcrumb = () => {
  return (
    <BreadcrumbPrefab
      separator="/"
      homeIcon
      maxItems={5}
      currentPageColor="primary"
    />
  );
};
```

### 4. Content Prefabs

#### Carousel Prefab

Image and content carousel.

```jsx
import { CarouselPrefab } from '@wavemaker/prefabs';

const HeroCarousel = () => {
  const slides = [
    {
      image: '/slide1.jpg',
      title: 'Welcome to Our Store',
      description: 'Discover amazing products',
      cta: { label: 'Shop Now', link: '/products' },
    },
    {
      image: '/slide2.jpg',
      title: 'Summer Sale',
      description: 'Up to 50% off',
      cta: { label: 'View Deals', link: '/sale' },
    },
  ];

  return (
    <CarouselPrefab
      slides={slides}
      autoPlay
      autoPlayInterval={5000}
      showIndicators
      showArrows
      transition="fade"
    />
  );
};
```

#### Accordion Prefab

Expandable content sections.

```jsx
import { AccordionPrefab } from '@wavemaker/prefabs';

const FAQSection = () => {
  const faqs = [
    {
      title: 'How do I create an account?',
      content: 'Click on the Sign Up button and fill in your details...',
    },
    {
      title: 'How can I reset my password?',
      content: 'Go to the login page and click "Forgot Password"...',
    },
    {
      title: 'What payment methods do you accept?',
      content: 'We accept credit cards, PayPal, and bank transfers...',
    },
  ];

  return (
    <AccordionPrefab
      items={faqs}
      allowMultiple={false}
      defaultExpanded={[0]}
    />
  );
};
```

#### Tabs Prefab

Tabbed content container.

```jsx
import { TabsPrefab } from '@wavemaker/prefabs';

const ProductDetails = () => {
  const tabs = [
    {
      label: 'Description',
      content: <ProductDescription />,
    },
    {
      label: 'Specifications',
      content: <ProductSpecs />,
    },
    {
      label: 'Reviews',
      content: <ProductReviews />,
      badge: 24,
    },
  ];

  return (
    <TabsPrefab
      tabs={tabs}
      variant="underlined"
      defaultTab={0}
    />
  );
};
```

### 5. E-commerce Prefabs

#### Shopping Cart Prefab

Complete shopping cart with item management.

```jsx
import { ShoppingCartPrefab } from '@wavemaker/prefabs';

const CartPage = () => {
  return (
    <ShoppingCartPrefab
      items={cartItems}
      onUpdateQuantity={handleUpdateQuantity}
      onRemoveItem={handleRemoveItem}
      onApplyCoupon={handleApplyCoupon}
      onCheckout={handleCheckout}
      showRecommendations
      allowSaveForLater
      taxCalculation="auto"
      shippingCalculation="auto"
    />
  );
};
```

#### Product Card Prefab

Product display card with cart actions.

```jsx
import { ProductCardPrefab } from '@wavemaker/prefabs';

const ProductCard = ({ product }) => {
  return (
    <ProductCardPrefab
      product={product}
      showQuickView
      showWishlist
      showCompare
      onAddToCart={handleAddToCart}
      onQuickView={handleQuickView}
      showRating
      showBadges
      variant="elevated"
    />
  );
};
```

#### Checkout Prefab

Multi-step checkout process.

```jsx
import { CheckoutPrefab } from '@wavemaker/prefabs';

const CheckoutPage = () => {
  return (
    <CheckoutPrefab
      steps={[
        { label: 'Shipping', component: ShippingForm },
        { label: 'Payment', component: PaymentForm },
        { label: 'Review', component: OrderReview },
      ]}
      cartItems={cartItems}
      shippingMethods={shippingMethods}
      paymentMethods={['card', 'paypal', 'stripe']}
      onComplete={handleOrderComplete}
      saveAddressEnabled
      guestCheckoutEnabled
    />
  );
};
```

### 6. Dashboard Prefabs

#### Analytics Dashboard Prefab

Pre-built analytics dashboard.

```jsx
import { AnalyticsDashboardPrefab } from '@wavemaker/prefabs';

const DashboardPage = () => {
  return (
    <AnalyticsDashboardPrefab
      metrics={[
        { label: 'Total Users', value: 12453, trend: 12.5 },
        { label: 'Revenue', value: '$45,231', trend: -5.2 },
        { label: 'Active Sessions', value: 342, trend: 8.1 },
      ]}
      charts={[
        {
          type: 'line',
          title: 'User Growth',
          dataSource: '/api/analytics/users',
        },
        {
          type: 'pie',
          title: 'Traffic Sources',
          dataSource: '/api/analytics/traffic',
        },
      ]}
      timeRangeSelector
      refreshInterval={30000}
    />
  );
};
```

#### KPI Card Prefab

Key performance indicator display.

```jsx
import { KPICardPrefab } from '@wavemaker/prefabs';

const MetricsCards = () => {
  return (
    <div className="metrics-grid">
      <KPICardPrefab
        title="Total Revenue"
        value="$45,231"
        trend={8.2}
        trendDirection="up"
        icon="dollar"
        color="success"
      />
      <KPICardPrefab
        title="Active Users"
        value="1,234"
        trend={-2.5}
        trendDirection="down"
        icon="users"
        color="primary"
      />
    </div>
  );
};
```

### 7. Media Prefabs

#### Image Gallery Prefab

Image gallery with lightbox.

```jsx
import { ImageGalleryPrefab } from '@wavemaker/prefabs';

const Gallery = () => {
  return (
    <ImageGalleryPrefab
      images={[
        { src: '/photo1.jpg', thumbnail: '/photo1-thumb.jpg', caption: 'Photo 1' },
        { src: '/photo2.jpg', thumbnail: '/photo2-thumb.jpg', caption: 'Photo 2' },
        { src: '/photo3.jpg', thumbnail: '/photo3-thumb.jpg', caption: 'Photo 3' },
      ]}
      layout="masonry"
      lightboxEnabled
      zoomEnabled
      downloadEnabled
      shareEnabled
    />
  );
};
```

#### Video Player Prefab

Advanced video player with controls.

```jsx
import { VideoPlayerPrefab } from '@wavemaker/prefabs';

const VideoSection = () => {
  return (
    <VideoPlayerPrefab
      src="/video.mp4"
      poster="/video-poster.jpg"
      controls
      autoPlay={false}
      loop={false}
      playbackRates={[0.5, 1, 1.5, 2]}
      qualitySelector
      subtitles={[
        { src: '/subtitles-en.vtt', label: 'English', language: 'en' },
        { src: '/subtitles-es.vtt', label: 'Spanish', language: 'es' },
      ]}
    />
  );
};
```

## Creating Custom Prefabs

### Prefab Structure

```javascript
// MyCustomPrefab.jsx
import { useState } from 'react';
import { PrefabBase } from '@wavemaker/prefab-core';

export const MyCustomPrefab = ({
  title,
  dataSource,
  onItemClick,
  ...props
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Prefab logic here

  return (
    <PrefabBase className="my-custom-prefab" {...props}>
      <h2>{title}</h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="prefab-content">
          {data.map(item => (
            <div key={item.id} onClick={() => onItemClick(item)}>
              {item.name}
            </div>
          ))}
        </div>
      )}
    </PrefabBase>
  );
};

// Default props
MyCustomPrefab.defaultProps = {
  title: 'Custom Prefab',
  dataSource: '/api/data',
};

// PropTypes
MyCustomPrefab.propTypes = {
  title: PropTypes.string,
  dataSource: PropTypes.string.isRequired,
  onItemClick: PropTypes.func,
};
```

### Prefab Configuration

```javascript
// prefab.config.js
export default {
  name: 'MyCustomPrefab',
  version: '1.0.0',
  description: 'Custom prefab for displaying data',
  category: 'Data Display',
  thumbnail: '/thumbnails/my-prefab.png',
  properties: [
    {
      name: 'title',
      type: 'string',
      default: 'Custom Prefab',
      description: 'Prefab title',
    },
    {
      name: 'dataSource',
      type: 'string',
      required: true,
      description: 'API endpoint for data',
    },
  ],
  events: [
    {
      name: 'onItemClick',
      description: 'Triggered when an item is clicked',
      parameters: ['item'],
    },
  ],
};
```

## Prefab Best Practices

### 1. Make Prefabs Configurable

```jsx
// ✅ Good - Highly configurable
<DataTablePrefab
  columns={columns}
  dataSource={dataSource}
  pagination={{ enabled: true, pageSize: 10 }}
  sorting={{ enabled: true }}
  filtering={{ enabled: true }}
/>

// ❌ Bad - Hardcoded behavior
<DataTablePrefab />
```

### 2. Provide Sensible Defaults

```javascript
MyPrefab.defaultProps = {
  variant: 'default',
  showHeader: true,
  pageSize: 10,
};
```

### 3. Document Props and Events

```javascript
/**
 * DataTable Prefab
 *
 * @param {Array} columns - Column configuration
 * @param {string} dataSource - API endpoint
 * @param {boolean} pagination - Enable pagination
 * @param {function} onRowClick - Row click handler
 */
```

### 4. Handle Loading and Error States

```jsx
const MyPrefab = () => {
  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!data.length) return <EmptyState />;

  return <Content data={data} />;
};
```

### 5. Support Theming

```jsx
import { useTheme } from '@wavemaker/theme';

const ThemedPrefab = () => {
  const theme = useTheme();

  return (
    <div style={{
      backgroundColor: theme.colors.background,
      color: theme.colors.text
    }}>
      {/* Content */}
    </div>
  );
};
```

## Testing Prefabs

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import { DataTablePrefab } from './DataTablePrefab';

describe('DataTablePrefab', () => {
  test('renders with data', () => {
    const data = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];

    render(
      <DataTablePrefab
        data={data}
        columns={[{ field: 'name', header: 'Name' }]}
      />
    );

    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
  });

  test('handles row click', () => {
    const handleClick = jest.fn();

    render(
      <DataTablePrefab
        data={data}
        columns={columns}
        onRowClick={handleClick}
      />
    );

    fireEvent.click(screen.getByText('John'));
    expect(handleClick).toHaveBeenCalledWith({ id: 1, name: 'John' });
  });
});
```

## Prefab Library Management

### Organizing Prefabs

```
prefabs/
├── data-display/
│   ├── DataTable/
│   ├── CardGrid/
│   └── ListView/
├── forms/
│   ├── LoginForm/
│   ├── RegistrationForm/
│   └── ContactForm/
├── navigation/
│   ├── Header/
│   ├── Sidebar/
│   └── Breadcrumb/
└── index.js
```

### Prefab Registry

```javascript
// prefabRegistry.js
export const prefabRegistry = {
  'data-table': () => import('./data-display/DataTable'),
  'card-grid': () => import('./data-display/CardGrid'),
  'login-form': () => import('./forms/LoginForm'),
  'header': () => import('./navigation/Header'),
};

export const loadPrefab = async (name) => {
  const loader = prefabRegistry[name];
  if (!loader) throw new Error(`Prefab ${name} not found`);
  return await loader();
};
```

## Related Documentation

- [WMX Components- Mobile](./prefabs/wmx-components-mobile.md) - Mobile-specific components
- [Role based Access Control](./role-based-access-control.md)
- [State Management](../develop/state-management.md)
- [Create Page, working with Layouts](../develop/create-page-working-with-layouts.md)
