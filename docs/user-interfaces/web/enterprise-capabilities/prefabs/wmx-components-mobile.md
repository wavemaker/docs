---
last_update: { author: "Author Name" }
---

# WMX Components- Mobile

Mobile-specific components and widgets for building native-like mobile experiences.

## Overview

WMX (WaveMaker Mobile) Components provide a comprehensive set of pre-built mobile UI components optimized for touch interactions and mobile screen sizes. These components follow mobile design patterns and deliver native-like performance.

## Mobile-Specific Components

### Action Sheet

Bottom sheet menu for presenting action options on mobile devices.

```jsx
import { ActionSheet } from '@wavemaker/mobile-components';

const ProfileActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      label: 'Edit Profile',
      icon: 'edit',
      onClick: handleEdit,
    },
    {
      label: 'Share Profile',
      icon: 'share',
      onClick: handleShare,
    },
    {
      label: 'Delete Account',
      icon: 'delete',
      onClick: handleDelete,
      destructive: true,
    },
  ];

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        More Options
      </button>

      <ActionSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        actions={actions}
        title="Account Actions"
      />
    </>
  );
};
```

### Bottom Navigation

Fixed bottom navigation bar for primary app navigation.

```jsx
import { BottomNavigation, BottomNavigationItem } from '@wavemaker/mobile-components';

const MobileNavigation = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <BottomNavigation value={activeTab} onChange={setActiveTab}>
      <BottomNavigationItem
        value="home"
        label="Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationItem
        value="search"
        label="Search"
        icon={<SearchIcon />}
      />
      <BottomNavigationItem
        value="notifications"
        label="Notifications"
        icon={<BellIcon />}
        badge={5}
      />
      <BottomNavigationItem
        value="profile"
        label="Profile"
        icon={<UserIcon />}
      />
    </BottomNavigation>
  );
};
```

### Pull to Refresh

Pull-down gesture to refresh content.

```jsx
import { PullToRefresh } from '@wavemaker/mobile-components';

const FeedList = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const newData = await fetchLatestData();
      setData(newData);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <PullToRefresh
      onRefresh={handleRefresh}
      refreshing={refreshing}
    >
      <div className="feed-list">
        {data.map(item => (
          <FeedItem key={item.id} item={item} />
        ))}
      </div>
    </PullToRefresh>
  );
};
```

### Swipeable List Item

List items with swipe actions for quick operations.

```jsx
import { SwipeableListItem } from '@wavemaker/mobile-components';

const MessageItem = ({ message, onDelete, onArchive }) => {
  const leftActions = [
    {
      label: 'Archive',
      icon: 'archive',
      backgroundColor: '#4CAF50',
      onClick: () => onArchive(message.id),
    },
  ];

  const rightActions = [
    {
      label: 'Delete',
      icon: 'delete',
      backgroundColor: '#F44336',
      onClick: () => onDelete(message.id),
    },
  ];

  return (
    <SwipeableListItem
      leftActions={leftActions}
      rightActions={rightActions}
    >
      <div className="message-item">
        <h3>{message.subject}</h3>
        <p>{message.preview}</p>
      </div>
    </SwipeableListItem>
  );
};
```

### Floating Action Button (FAB)

Prominent button for primary mobile actions.

```jsx
import { FAB } from '@wavemaker/mobile-components';

const ChatScreen = () => {
  return (
    <div className="chat-screen">
      {/* Chat content */}

      <FAB
        icon={<PlusIcon />}
        onClick={handleNewChat}
        position="bottom-right"
        color="primary"
        ariaLabel="Start new chat"
      />
    </div>
  );
};
```

### Mobile Drawer

Slide-in navigation drawer for mobile apps.

```jsx
import { Drawer } from '@wavemaker/mobile-components';

const AppWithDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <button onClick={() => setIsOpen(true)}>
          <MenuIcon />
        </button>
        <h1>My App</h1>
      </header>

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="left"
      >
        <nav className="drawer-nav">
          <a href="/home">Home</a>
          <a href="/profile">Profile</a>
          <a href="/settings">Settings</a>
          <a href="/logout">Logout</a>
        </nav>
      </Drawer>

      <main>{/* App content */}</main>
    </>
  );
};
```

## Touch-Optimized Components

### Mobile Button

Large touch targets optimized for mobile interaction.

```jsx
import { MobileButton } from '@wavemaker/mobile-components';

const ActionButtons = () => {
  return (
    <div className="action-buttons">
      <MobileButton
        variant="primary"
        size="large"
        fullWidth
        onClick={handleSubmit}
      >
        Submit
      </MobileButton>

      <MobileButton
        variant="secondary"
        size="large"
        fullWidth
        onClick={handleCancel}
      >
        Cancel
      </MobileButton>
    </div>
  );
};
```

### Touch Slider

Touch-friendly slider for mobile inputs.

```jsx
import { TouchSlider } from '@wavemaker/mobile-components';

const VolumeControl = () => {
  const [volume, setVolume] = useState(50);

  return (
    <div className="volume-control">
      <label>Volume: {volume}%</label>
      <TouchSlider
        value={volume}
        onChange={setVolume}
        min={0}
        max={100}
        step={1}
        showValue
      />
    </div>
  );
};
```

### Mobile Toggle Switch

Large, easy-to-tap toggle switches.

```jsx
import { MobileSwitch } from '@wavemaker/mobile-components';

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="settings">
      <div className="setting-item">
        <span>Enable Notifications</span>
        <MobileSwitch
          checked={notifications}
          onChange={setNotifications}
        />
      </div>

      <div className="setting-item">
        <span>Dark Mode</span>
        <MobileSwitch
          checked={darkMode}
          onChange={setDarkMode}
        />
      </div>
    </div>
  );
};
```

## Form Components

### Mobile Input

Mobile-optimized text input with proper keyboard types.

```jsx
import { MobileInput } from '@wavemaker/mobile-components';

const MobileForm = () => {
  return (
    <form>
      <MobileInput
        type="text"
        label="Name"
        placeholder="Enter your name"
        required
      />

      <MobileInput
        type="email"
        label="Email"
        placeholder="your@email.com"
        inputMode="email"
        required
      />

      <MobileInput
        type="tel"
        label="Phone"
        placeholder="(555) 123-4567"
        inputMode="tel"
      />

      <MobileInput
        type="number"
        label="Age"
        placeholder="Enter your age"
        inputMode="numeric"
      />
    </form>
  );
};
```

### Mobile Select

Mobile-friendly dropdown with native picker support.

```jsx
import { MobileSelect } from '@wavemaker/mobile-components';

const CountrySelector = () => {
  const [country, setCountry] = useState('');

  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'mx', label: 'Mexico' },
    { value: 'uk', label: 'United Kingdom' },
  ];

  return (
    <MobileSelect
      label="Country"
      value={country}
      onChange={setCountry}
      options={countries}
      placeholder="Select a country"
    />
  );
};
```

### Mobile Date Picker

Native date picker for mobile devices.

```jsx
import { MobileDatePicker } from '@wavemaker/mobile-components';

const DateSelection = () => {
  const [date, setDate] = useState(new Date());

  return (
    <MobileDatePicker
      label="Select Date"
      value={date}
      onChange={setDate}
      minDate={new Date()}
      format="MM/DD/YYYY"
    />
  );
};
```

## List Components

### Virtual List

Efficiently render large lists on mobile.

```jsx
import { VirtualList } from '@wavemaker/mobile-components';

const ContactList = ({ contacts }) => {
  const renderItem = (contact) => (
    <div className="contact-item">
      <img src={contact.avatar} alt={contact.name} />
      <div>
        <h3>{contact.name}</h3>
        <p>{contact.email}</p>
      </div>
    </div>
  );

  return (
    <VirtualList
      items={contacts}
      renderItem={renderItem}
      itemHeight={72}
      overscan={5}
    />
  );
};
```

### Infinite Scroll

Load more content as user scrolls.

```jsx
import { InfiniteScroll } from '@wavemaker/mobile-components';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    const newProducts = await fetchProducts(page);
    if (newProducts.length === 0) {
      setHasMore(false);
      return;
    }
    setProducts([...products, ...newProducts]);
    setPage(page + 1);
  };

  return (
    <InfiniteScroll
      onLoadMore={loadMore}
      hasMore={hasMore}
      loader={<div>Loading...</div>}
    >
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </InfiniteScroll>
  );
};
```

## Card Components

### Mobile Card

Optimized card component for mobile layouts.

```jsx
import { MobileCard } from '@wavemaker/mobile-components';

const ProductCard = ({ product }) => {
  return (
    <MobileCard
      image={product.image}
      imageAlt={product.name}
      elevation={2}
    >
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="card-footer">
        <span className="price">${product.price}</span>
        <button>Add to Cart</button>
      </div>
    </MobileCard>
  );
};
```

### Expandable Card

Card that expands to show more content.

```jsx
import { ExpandableCard } from '@wavemaker/mobile-components';

const FAQItem = ({ question, answer }) => {
  return (
    <ExpandableCard
      title={question}
      initialExpanded={false}
    >
      <p>{answer}</p>
    </ExpandableCard>
  );
};
```

## Media Components

### Mobile Image Viewer

Full-screen image viewer with pinch-to-zoom.

```jsx
import { MobileImageViewer } from '@wavemaker/mobile-components';

const PhotoGallery = ({ photos }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <img
            key={photo.id}
            src={photo.thumbnail}
            alt={photo.caption}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      <MobileImageViewer
        images={photos}
        initialIndex={selectedIndex}
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        enableZoom
        enableSwipe
      />
    </>
  );
};
```

### Video Player

Mobile-optimized video player.

```jsx
import { MobileVideoPlayer } from '@wavemaker/mobile-components';

const VideoScreen = ({ videoUrl }) => {
  return (
    <MobileVideoPlayer
      src={videoUrl}
      poster="/thumbnail.jpg"
      controls
      autoplay={false}
      fullscreenEnabled
      onEnded={handleVideoEnd}
    />
  );
};
```

## Feedback Components

### Mobile Toast

Brief notification messages for mobile.

```jsx
import { toast } from '@wavemaker/mobile-components';

const SaveButton = () => {
  const handleSave = async () => {
    try {
      await saveData();
      toast.success('Saved successfully!');
    } catch (error) {
      toast.error('Failed to save');
    }
  };

  return <button onClick={handleSave}>Save</button>;
};
```

### Mobile Loading Indicator

Loading states optimized for mobile.

```jsx
import { MobileLoader } from '@wavemaker/mobile-components';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <MobileLoader
        size="large"
        message="Loading your content..."
      />
    </div>
  );
};
```

### Mobile Skeleton

Skeleton screens for better loading experience.

```jsx
import { Skeleton } from '@wavemaker/mobile-components';

const ProductCardSkeleton = () => {
  return (
    <div className="product-card">
      <Skeleton variant="rectangular" height={200} />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="60%" />
      <div className="card-footer">
        <Skeleton variant="text" width={60} />
        <Skeleton variant="rectangular" width={100} height={36} />
      </div>
    </div>
  );
};
```

## Gesture Components

### Swipeable View

Swipeable container for mobile gestures.

```jsx
import { SwipeableView } from '@wavemaker/mobile-components';

const OnboardingSlides = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <SwipeableView
      index={currentSlide}
      onChangeIndex={setCurrentSlide}
      enableMouseEvents
    >
      {slides.map((slide, index) => (
        <div key={index} className="slide">
          <img src={slide.image} alt={slide.title} />
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
        </div>
      ))}
    </SwipeableView>
  );
};
```

### Long Press

Detect and handle long press gestures.

```jsx
import { useLongPress } from '@wavemaker/mobile-components';

const ContextMenuTrigger = ({ onLongPress }) => {
  const longPressHandlers = useLongPress({
    onLongPress: onLongPress,
    threshold: 500, // milliseconds
  });

  return (
    <div {...longPressHandlers} className="long-press-target">
      Long press me for options
    </div>
  );
};
```

## Best Practices

### 1. Touch Target Size

Ensure all interactive elements are at least 44x44 pixels.

```css
.mobile-button {
  min-width: 44px;
  min-height: 44px;
  padding: 12px 24px;
}
```

### 2. Use Native Input Types

Use appropriate input types for mobile keyboards.

```jsx
// ✅ Good - Proper input modes
<input type="email" inputMode="email" />
<input type="tel" inputMode="tel" />
<input type="number" inputMode="numeric" />

// ❌ Bad - Generic text input
<input type="text" />
```

### 3. Optimize for Thumb Zone

Place primary actions within easy thumb reach.

```jsx
// Place primary actions at bottom
<div className="mobile-screen">
  <header>{/* Secondary actions */}</header>
  <main>{/* Content */}</main>
  <footer>
    <button className="primary-action">Continue</button>
  </footer>
</div>
```

### 4. Handle Orientation Changes

Support both portrait and landscape modes.

```jsx
import { useOrientation } from '@wavemaker/mobile-components';

const ResponsiveLayout = () => {
  const orientation = useOrientation();

  return (
    <div className={`layout-${orientation}`}>
      {orientation === 'portrait' ? (
        <PortraitView />
      ) : (
        <LandscapeView />
      )}
    </div>
  );
};
```

### 5. Provide Haptic Feedback

Use vibration for important interactions.

```jsx
const handleImportantAction = () => {
  // Trigger haptic feedback
  if (navigator.vibrate) {
    navigator.vibrate(10); // Short vibration
  }

  // Perform action
  performAction();
};
```

## Performance Optimization

### Lazy Loading Components

```jsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

const App = () => {
  return (
    <Suspense fallback={<MobileLoader />}>
      <HeavyComponent />
    </Suspense>
  );
};
```

### Memoization for Lists

```jsx
import { memo } from 'react';

const ListItem = memo(({ item }) => {
  return (
    <div className="list-item">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
});
```

## Accessibility on Mobile

### Voice Control Support

```jsx
<button
  aria-label="Add to favorites"
  onClick={handleFavorite}
>
  <HeartIcon />
</button>
```

### Screen Reader Announcements

```jsx
import { announce } from '@wavemaker/mobile-components';

const handleSubmit = async () => {
  const success = await submitForm();
  if (success) {
    announce('Form submitted successfully');
  } else {
    announce('Form submission failed', 'assertive');
  }
};
```

## Testing Mobile Components

```javascript
import { render, fireEvent } from '@testing-library/react';
import { simulateTouch } from '@wavemaker/mobile-testing';

test('swipeable item responds to swipe', () => {
  const onSwipe = jest.fn();
  const { container } = render(
    <SwipeableListItem onSwipe={onSwipe}>
      Content
    </SwipeableListItem>
  );

  const element = container.firstChild;
  simulateTouch.swipeLeft(element);

  expect(onSwipe).toHaveBeenCalledWith('left');
});
```

## Related Documentation

- [Prefabs](../prefabs.md) - Pre-built component templates
- [Role based Access Control](../role-based-access-control.md)
- [Accessibility](../accessibility.md)
- [Responsive Design](../../develop/responsive-design.md)
