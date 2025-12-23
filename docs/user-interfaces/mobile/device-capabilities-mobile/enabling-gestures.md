---
last_update: { author: "Author Name" }
---

# Enabling Gestures

Implementing touch gestures and interactions for intuitive mobile user experiences.

## Overview

Gestures are fundamental to mobile user interfaces, enabling natural and intuitive interactions. This guide covers how to implement common touch gestures like tap, swipe, pinch, and long press in your mobile applications.

## Types of Gestures

### Basic Gestures

1. **Tap**: Single touch and release
2. **Double Tap**: Two rapid taps
3. **Long Press**: Touch and hold
4. **Swipe**: Quick directional movement
5. **Pan**: Touch and drag
6. **Pinch**: Two-finger zoom
7. **Rotate**: Two-finger rotation

## Implementing Gestures

### Using React Touch Events

#### Tap Gesture

```jsx
const TapComponent = () => {
  const [tapCount, setTapCount] = useState(0);

  const handleTap = () => {
    setTapCount(prev => prev + 1);
  };

  return (
    <div
      onClick={handleTap}
      style={{
        width: 200,
        height: 200,
        backgroundColor: '#007bff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p>Taps: {tapCount}</p>
    </div>
  );
};
```

#### Double Tap Gesture

```jsx
const DoubleTapComponent = () => {
  const [lastTap, setLastTap] = useState(0);
  const [likes, setLikes] = useState(0);

  const handleTouch = () => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;

    if (lastTap && now - lastTap < DOUBLE_TAP_DELAY) {
      handleDoubleTap();
      setLastTap(0);
    } else {
      setLastTap(now);
    }
  };

  const handleDoubleTap = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <div
      onClick={handleTouch}
      style={{
        width: 200,
        height: 200,
        backgroundColor: '#e74c3c',
        cursor: 'pointer',
      }}
    >
      <h2>❤️ {likes}</h2>
      <p>Double tap to like</p>
    </div>
  );
};
```

#### Long Press Gesture

```jsx
const LongPressComponent = () => {
  const [isPressed, setIsPressed] = useState(false);
  const pressTimer = useRef(null);

  const handleTouchStart = () => {
    pressTimer.current = setTimeout(() => {
      setIsPressed(true);
      handleLongPress();
    }, 500); // 500ms long press threshold
  };

  const handleTouchEnd = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
    }
    setIsPressed(false);
  };

  const handleLongPress = () => {
    console.log('Long press detected!');
    // Show context menu, enable delete mode, etc.
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      style={{
        width: 200,
        height: 100,
        backgroundColor: isPressed ? '#2ecc71' : '#3498db',
        transition: 'background-color 0.3s',
      }}
    >
      <p>Long press me</p>
    </div>
  );
};
```

### Swipe Gestures

#### Horizontal Swipe

```jsx
const SwipeComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleSwipeLeft();
    } else if (isRightSwipe) {
      handleSwipeRight();
    }
  };

  const handleSwipeLeft = () => {
    setCurrentIndex(prev => Math.min(prev + 1, items.length - 1));
  };

  const handleSwipeRight = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{
        width: '100%',
        height: 300,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.3s ease-out',
          display: 'flex',
        }}
      >
        {items.map((item, index) => (
          <div key={index} style={{ minWidth: '100%' }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
```

#### Swipeable List Item

```jsx
const SwipeableListItem = ({ children, onDelete, onArchive }) => {
  const [offsetX, setOffsetX] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;

    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;

    // Limit swipe distance
    if (diff < -150) {
      setOffsetX(-150);
    } else if (diff > 150) {
      setOffsetX(150);
    } else {
      setOffsetX(diff);
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);

    if (offsetX < -100) {
      // Swipe left - delete
      onDelete();
    } else if (offsetX > 100) {
      // Swipe right - archive
      onArchive();
    } else {
      // Snap back
      setOffsetX(0);
    }
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Left action */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 80,
          backgroundColor: '#2ecc71',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>Archive</span>
      </div>

      {/* Right action */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 80,
          backgroundColor: '#e74c3c',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>Delete</span>
      </div>

      {/* Main content */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `translateX(${offsetX}px)`,
          transition: isSwiping ? 'none' : 'transform 0.3s',
          backgroundColor: 'white',
          position: 'relative',
        }}
      >
        {children}
      </div>
    </div>
  );
};
```

### Pan Gesture

Drag and move elements.

```jsx
const DraggableComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleTouchStart = (e) => {
    setIsDragging(true);
    const touch = e.touches[0];
    setStartPos({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - startPos.x,
      y: touch.clientY - startPos.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: 100,
        height: 100,
        backgroundColor: '#9b59b6',
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none',
      }}
    >
      <p>Drag me</p>
    </div>
  );
};
```

### Pinch to Zoom

```jsx
const PinchZoomComponent = ({ children }) => {
  const [scale, setScale] = useState(1);
  const [initialDistance, setInitialDistance] = useState(0);
  const [isPinching, setIsPinching] = useState(false);

  const getDistance = (touches) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      setIsPinching(true);
      setInitialDistance(getDistance(e.touches));
    }
  };

  const handleTouchMove = (e) => {
    if (!isPinching || e.touches.length !== 2) return;

    const currentDistance = getDistance(e.touches);
    const newScale = (currentDistance / initialDistance) * scale;

    // Limit zoom level
    if (newScale >= 0.5 && newScale <= 3) {
      setScale(newScale);
    }
  };

  const handleTouchEnd = () => {
    setIsPinching(false);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        touchAction: 'none',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center',
          transition: isPinching ? 'none' : 'transform 0.3s',
        }}
      >
        {children}
      </div>
    </div>
  );
};
```

### Rotation Gesture

```jsx
const RotatableComponent = ({ children }) => {
  const [rotation, setRotation] = useState(0);
  const [initialAngle, setInitialAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const getAngle = (touches) => {
    const dx = touches[1].clientX - touches[0].clientX;
    const dy = touches[1].clientY - touches[0].clientY;
    return Math.atan2(dy, dx) * 180 / Math.PI;
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      setIsRotating(true);
      setInitialAngle(getAngle(e.touches) - rotation);
    }
  };

  const handleTouchMove = (e) => {
    if (!isRotating || e.touches.length !== 2) return;

    const currentAngle = getAngle(e.touches);
    setRotation(currentAngle - initialAngle);
  };

  const handleTouchEnd = () => {
    setIsRotating(false);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        touchAction: 'none',
      }}
    >
      <div
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isRotating ? 'none' : 'transform 0.3s',
        }}
      >
        {children}
      </div>
    </div>
  );
};
```

## Using Gesture Libraries

### Hammer.js

Popular gesture recognition library.

**Installation:**
```bash
npm install hammerjs
```

**Usage:**
```jsx
import { useEffect, useRef } from 'react';
import Hammer from 'hammerjs';

const HammerComponent = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const hammer = new Hammer(elementRef.current);

    // Enable all gestures
    hammer.get('pinch').set({ enable: true });
    hammer.get('rotate').set({ enable: true });

    // Tap
    hammer.on('tap', (e) => {
      console.log('Tap detected', e);
    });

    // Double tap
    hammer.on('doubletap', (e) => {
      console.log('Double tap detected', e);
    });

    // Press (long tap)
    hammer.on('press', (e) => {
      console.log('Press detected', e);
    });

    // Swipe
    hammer.on('swipeleft swiperight swipeup swipedown', (e) => {
      console.log('Swipe detected', e.type, e);
    });

    // Pan
    hammer.on('panstart panmove panend', (e) => {
      console.log('Pan event', e.type, e);
    });

    // Pinch
    hammer.on('pinchstart pinchmove pinchend', (e) => {
      console.log('Pinch event', e.type, e.scale);
    });

    // Rotate
    hammer.on('rotatestart rotatemove rotateend', (e) => {
      console.log('Rotate event', e.type, e.rotation);
    });

    return () => {
      hammer.destroy();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        width: 300,
        height: 300,
        backgroundColor: '#3498db',
      }}
    >
      <p>Try different gestures</p>
    </div>
  );
};
```

### React Use Gesture

React hooks for gesture handling.

**Installation:**
```bash
npm install @use-gesture/react
```

**Usage:**
```jsx
import { useGesture } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';

const GestureComponent = () => {
  const [{ x, y, scale, rotate }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
  }));

  const bind = useGesture({
    onDrag: ({ offset: [ox, oy] }) => {
      api.start({ x: ox, y: oy });
    },
    onPinch: ({ offset: [scale] }) => {
      api.start({ scale });
    },
    onRotate: ({ offset: [rotate] }) => {
      api.start({ rotate });
    },
  });

  return (
    <animated.div
      {...bind()}
      style={{
        x,
        y,
        scale,
        rotate,
        width: 200,
        height: 200,
        backgroundColor: '#e74c3c',
        touchAction: 'none',
      }}
    >
      Drag, pinch, or rotate me
    </animated.div>
  );
};
```

## Pull to Refresh

```jsx
const PullToRefresh = ({ onRefresh, children }) => {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [startY, setStartY] = useState(0);

  const threshold = 80;

  const handleTouchStart = (e) => {
    if (window.scrollY === 0) {
      setStartY(e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e) => {
    if (isRefreshing || startY === 0) return;

    const currentY = e.touches[0].clientY;
    const distance = currentY - startY;

    if (distance > 0 && window.scrollY === 0) {
      setPullDistance(Math.min(distance, threshold * 1.5));
      e.preventDefault();
    }
  };

  const handleTouchEnd = async () => {
    if (pullDistance >= threshold && !isRefreshing) {
      setIsRefreshing(true);
      await onRefresh();
      setIsRefreshing(false);
    }

    setPullDistance(0);
    setStartY(0);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        style={{
          transform: `translateY(${pullDistance}px)`,
          transition: pullDistance === 0 ? 'transform 0.3s' : 'none',
        }}
      >
        {/* Refresh indicator */}
        <div
          style={{
            height: pullDistance,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isRefreshing ? (
            <span>Refreshing...</span>
          ) : pullDistance >= threshold ? (
            <span>Release to refresh</span>
          ) : pullDistance > 0 ? (
            <span>Pull down to refresh</span>
          ) : null}
        </div>

        {children}
      </div>
    </div>
  );
};
```

## Best Practices

### 1. Prevent Default Behavior

```jsx
// Prevent page scroll/zoom during gestures
<div
  onTouchMove={(e) => e.preventDefault()}
  style={{ touchAction: 'none' }}
>
  {/* Content */}
</div>
```

### 2. Provide Visual Feedback

```jsx
const [isPressed, setIsPressed] = useState(false);

return (
  <button
    onTouchStart={() => setIsPressed(true)}
    onTouchEnd={() => setIsPressed(false)}
    style={{
      transform: isPressed ? 'scale(0.95)' : 'scale(1)',
      transition: 'transform 0.1s',
    }}
  >
    Press me
  </button>
);
```

### 3. Add Haptic Feedback

```jsx
import { Haptics, ImpactStyle } from '@capacitor/haptics';

const handleSwipe = async () => {
  await Haptics.impact({ style: ImpactStyle.Light });
  // Handle swipe
};
```

### 4. Set Gesture Thresholds

```jsx
const minSwipeDistance = 50; // Minimum pixels to trigger swipe
const longPressDelay = 500; // Milliseconds for long press
const doubleTapDelay = 300; // Maximum time between taps
```

### 5. Handle Multiple Touch Points

```jsx
const handleTouchStart = (e) => {
  if (e.touches.length === 1) {
    // Single touch - pan
  } else if (e.touches.length === 2) {
    // Two touches - pinch/rotate
  }
};
```

## Testing Gestures

```javascript
import { render, fireEvent } from '@testing-library/react';

test('handles swipe gesture', () => {
  const onSwipe = jest.fn();
  const { container } = render(<SwipeComponent onSwipe={onSwipe} />);

  const element = container.firstChild;

  // Simulate swipe
  fireEvent.touchStart(element, {
    touches: [{ clientX: 200, clientY: 100 }],
  });

  fireEvent.touchMove(element, {
    touches: [{ clientX: 100, clientY: 100 }],
  });

  fireEvent.touchEnd(element);

  expect(onSwipe).toHaveBeenCalledWith('left');
});
```

## Accessibility Considerations

### Keyboard Alternatives

```jsx
const handleKeyPress = (e) => {
  if (e.key === 'ArrowLeft') {
    handleSwipeRight();
  } else if (e.key === 'ArrowRight') {
    handleSwipeLeft();
  }
};

return (
  <div
    onKeyDown={handleKeyPress}
    onTouchStart={handleTouchStart}
    tabIndex={0}
  >
    {/* Content */}
  </div>
);
```

### Screen Reader Support

```jsx
<div
  role="button"
  aria-label="Swipe left or right to navigate"
  onTouchStart={handleTouchStart}
>
  {/* Content */}
</div>
```

## Related Documentation

- [Adding Plugins](./adding-plugins.md)
- [Offline Support](./offline-support.md)
- [WMX Components- Mobile](../enterprise-capabilities/prefabs/wmx-components-mobile.md)
- [Accessibility](../enterprise-capabilities/accessibility.md)
