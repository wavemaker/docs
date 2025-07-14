import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import CodeBlock from '@theme-original/CodeBlock';

const MAX_HEIGHT = 300;
const BORDER_RADIUS = 'var(--ifm-code-border-radius)';

export default function CodeBlockWrapper(props) {
  const codeBlockRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showToggleButton, setShowToggleButton] = useState(false);

  const handleToggleExpand = useCallback(() => setIsExpanded(v => !v), []);

  useEffect(() => {
    const checkHeight = () => {
      if (codeBlockRef.current) {
        setShowToggleButton(codeBlockRef.current.scrollHeight > MAX_HEIGHT);
      }
    };
    checkHeight();
    if (!codeBlockRef.current) return;
    let observer;
    if ('ResizeObserver' in window) {
      observer = new ResizeObserver(checkHeight);
      observer.observe(codeBlockRef.current);
    }
    return () => {
      if (observer && codeBlockRef.current) {
        observer.unobserve(codeBlockRef.current);
      }
    };
  }, [props.children]);

  const buttonStyle = useMemo(() => ({
    pointerEvents: 'auto',
    background: 'rgb(41, 45, 62)',
    color: '#fff',
    border: '1px solid #444',
    borderRadius: 10,
    padding: '8px 24px',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'background 0.2s, box-shadow 0.2s',
  }), []);

  const overlayStyle = useMemo(() => ({
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100px',
    width: '100%',
    background: 'linear-gradient(to bottom, rgba(41,45,62,0), rgba(41,45,62,1))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    zIndex: 2,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  }), []);

  const expandedButtonWrapperStyle = useMemo(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '-10px',
    position: 'static',
  }), []);

  const codeBlockContainerStyle = useMemo(() => ({
    maxHeight: isExpanded ? 'none' : MAX_HEIGHT,
    overflow: isExpanded ? 'visible' : 'hidden',
    transition: 'max-height 0.3s',
    marginBottom: showToggleButton ? '20px' : '0px',
    position: 'relative',
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  }), [isExpanded, showToggleButton]);

  return (
    <div style={{ position: 'relative', paddingBottom: isExpanded ? '10px' : 0 }}>
      <div ref={codeBlockRef} style={codeBlockContainerStyle}>
        <CodeBlock {...props} />
        {showToggleButton && !isExpanded && (
          <div style={overlayStyle}>
            <button onClick={handleToggleExpand} style={buttonStyle}>
              Show More
            </button>
          </div>
        )}
      </div>
      {showToggleButton && isExpanded && (
        <div style={expandedButtonWrapperStyle}>
          <button onClick={handleToggleExpand} style={buttonStyle}>
            Show Less
          </button>
        </div>
      )}
    </div>
  );
}
