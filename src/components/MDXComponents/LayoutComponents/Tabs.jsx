import React, { useState } from 'react';
import './Tabs.css';

/**
 * TabItem Component
 * Used inside TabsWrapper to define individual tabs.
 */
export function TabItem({ children, name, active }) {
  return (
    <div className={`tab-pane ${active ? 'active' : ''}`} style={{ display: active ? 'block' : 'none' }}>
      {children}
    </div>
  );
}

/**
 * TabsWrapper Component
 * Manages the state and rendering of tabs.
 */
export function TabsWrapper({ children }) {
  // Extract children and filter out non-TabItem components if necessary
  const tabs = React.Children.toArray(children).filter(
    (child) => child.props && child.props.name
  );

  const [activeIndex, setActiveIndex] = useState(0);

  if (tabs.length === 0) return null;

  return (
    <div className="tabs-wrapper">
      <div className="tabs-nav">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.props.name}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <React.Fragment key={index}>
            {React.cloneElement(tab, { active: activeIndex === index })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
