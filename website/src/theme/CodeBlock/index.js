import React, { useRef, useState, useEffect } from 'react';
import CodeBlock from '@theme-original/CodeBlock';

const MAX_HEIGHT = 300;

export default function CodeBlockWrapper(props) {
  const containerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsToggle, setNeedsToggle] = useState(false);

  useEffect(() => {
    const checkHeight = () => {
      if (containerRef.current?.firstElementChild) {
        const codeHeight = containerRef.current.firstElementChild.scrollHeight;
        setNeedsToggle(codeHeight > MAX_HEIGHT);
      }
    };
    checkHeight();

    const observer = new ResizeObserver(checkHeight);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [props.children]);

  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <div style={{ position: 'relative', marginBottom: needsToggle? '20px' : '0' }}>

      <div
        ref={containerRef}
        style={{
          maxHeight: isExpanded ? 'none' : MAX_HEIGHT,
          overflow: isExpanded ? 'visible' : 'hidden',
          transition: 'max-height 0.3s',
          position: 'relative',
          borderBottomLeftRadius: 'var(--ifm-code-border-radius)',
          borderBottomRightRadius: 'var(--ifm-code-border-radius)',
        }}
      >
        <CodeBlock {...props} />
        
        {needsToggle && !isExpanded && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: '100px',
              background: 'linear-gradient(to bottom, rgba(41,45,62,0), rgba(41,45,62,1))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomLeftRadius: 'var(--ifm-code-border-radius)',
              borderBottomRightRadius: 'var(--ifm-code-border-radius)',
            }}
          />
        )}
      </div>

      {needsToggle && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: isExpanded ? '-10px' : 0,
            position: isExpanded ? 'static' : 'absolute',
            left: isExpanded ? 'auto' : 0,
            right: isExpanded ? 'auto' : 0,
            bottom: isExpanded ? 'auto' : '20px',
            zIndex: isExpanded ? 'auto' : 2,
          }}
        >
          <button
            onClick={toggleExpansion}
            style={{
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
            }}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
}
