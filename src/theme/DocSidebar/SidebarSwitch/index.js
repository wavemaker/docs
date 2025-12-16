import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function SidebarSwitch({path}) {
  if (!path?.includes('user_interfaces')) {
    return <></>;
  }
  return (
    <div className={styles.switchContainer}>
      <Link
        to="/docs/dummy-docs/user_interfaces/Concepts/Overview"
        className={clsx(styles.switchOption, styles.active)}
      >
        Web
      </Link>
      <Link
        to="#"
        className={styles.switchOption}
      >
        Mobile
      </Link>
    </div>
  );
}