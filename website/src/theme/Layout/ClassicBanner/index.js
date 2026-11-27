import React from 'react';
import clsx from 'clsx';
import { useDocsSite } from '../../Navbar/DocsSwitcher/site';
import styles from './styles.module.css';

// Tells visitors they are reading the classic docs and offers the way to the AI (v12) docs.
// The home page gets the full banner with its icon; on wide screens the other pages get a slimmer one.
export default function ClassicBanner() {
  const { current, hrefs, isHome } = useDocsSite();
  return (
    <div className={clsx(styles.banner, !isHome && styles.internal)} role="note">
      <svg
        className={styles.icon}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8h.01M11 12h1v4h1" />
      </svg>
      <span>
        You're viewing{' '}
        <strong>
          Classic docs ({current.id === 'v10' ? 'v10.x' : 'v11.x'})
        </strong>
        .{' '}
        <span className={styles.pitch}>Building with WaveMaker AI? </span>
        <a className={styles.link} href={hrefs.v12}>
          Go to v12 docs →
        </a>
      </span>
    </div>
  );
}
