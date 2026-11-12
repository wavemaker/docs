import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const DEFAULT_AI_DOCS_URL = 'https://docs.wavemaker.ai/';
const AI_DOCS_URL_BY_HOST = {
  'docs.wavemaker.ai': 'https://docs.wavemaker.ai/',
  'next-docs.wavemaker.ai': 'https://next-docs.wavemaker.ai/',
};

// This site is also served under /learn on the AI docs hosts, so link back to the host we are on.
// Everywhere else (docs.wavemaker.com, localhost) falls back to the default. The host is read after
// mount so the server-rendered HTML and the first client render stay identical.
function useAiDocsUrl() {
  const [url, setUrl] = useState(DEFAULT_AI_DOCS_URL);
  useEffect(() => {
    setUrl(
      AI_DOCS_URL_BY_HOST[window.location.hostname] ?? DEFAULT_AI_DOCS_URL,
    );
  }, []);
  return url;
}

export default function DocsSwitcher({ placement = 'navbar' }) {
  const aiDocsUrl = useAiDocsUrl();
  const placementClass = placement === 'drawer' ? styles.drawer : styles.navbar;
  return (
    <div
      className={`${styles.switcher} ${placementClass}`}
      role="group"
      aria-label="Choose documentation site"
    >
      <a
        className={styles.option}
        href={aiDocsUrl}
        title="AI docs (v12 and later)"
      >
        <span className={styles.full}>AI (v12+)</span>
        <span className={styles.short}>v12+</span>
      </a>
      <span
        className={`${styles.option} ${styles.active}`}
        aria-current="true"
        title="Classic docs (v11.x and below)"
      >
        <span className={styles.full}>Classic (v11.x & below)</span>
        <span className={styles.short}>{'< v12'}</span>
      </span>
    </div>
  );
}
