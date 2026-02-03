/**
 * Custom NavbarSearch wrapper
 * The SearchBar component now handles the Ask AI integration
 */
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function NavbarSearch({ children, className }) {
  return (
    <div className={clsx(className, styles.navbarSearchContainer)}>
      {children}
    </div>
  );
}
