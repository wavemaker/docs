import React, { useState } from "react";
import Layout from "@theme-original/Layout";
import { useLocation } from "@docusaurus/router";
import BrowserOnly from '@docusaurus/BrowserOnly';
import SecondaryNavbar from "@site/src/components/TopNav/TopNav";

export default function LayoutWrapper(props) {
  const [showBanner, setShowBanner] = useState(true);
  const location = useLocation();

  return (
    <>
      {showBanner && (
        <div style={{
          background: 'linear-gradient(90deg, #097bed 0%, #065da1 100%)',
          color: 'white',
          padding: '10px 40px 10px 16px',
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: '500',
          position: 'relative',
          zIndex: 1001,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <span>
            This documentation is under active development for WM12. Please refer to the{" "}
            <a 
              href="https://docs.wavemaker.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#c4e4fa', textDecoration: 'underline', fontWeight: 'bold' }}
            >
              current stable version
            </a>{" "}
            meanwhile.
          </span>
          <button 
            onClick={() => setShowBanner(false)}
            aria-label="Close banner"
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              transition: 'background 0.2s',
              padding: '0',
              lineHeight: '1'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          >
            &times;
          </button>
        </div>
      )}
      <Layout {...props}>
      <BrowserOnly fallback={<div />}>
        {() => {
          const pathname = window.location.pathname;
          const isHomePage = pathname === '/';
          return isHomePage ? null : <SecondaryNavbar />;
        }}
      </BrowserOnly>
      {props.children}
    </Layout>
    </>
  );
}
