import React from 'react';
import styles from './styles.module.css';

// Switches between the AI docs and this (classic) site. The AI docs URL must be
// absolute: this site is served from both docs.wavemaker.com/learn and
// docs.wavemaker.ai/learn, and "/" only means the AI docs on the .ai host.
export default function DocsSwitcher() {
  return (
    <div
      className={styles.switcher}
      role="group"
      aria-label="Choose documentation site"
    >
      <a className={styles.option} href="https://docs.wavemaker.ai/">
        AI (v12+)
      </a>
      <span className={`${styles.option} ${styles.active}`} aria-current="true">
        Classic (v11.x & below)
      </span>
    </div>
  );
}
