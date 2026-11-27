import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { useWindowSize } from '@docusaurus/theme-common';
import { GROUPS } from './versions';
import { useDocsSite } from './site';
import styles from './styles.module.css';

// Same file on both docs sites; what differs lives in ./site.js.
// Wide screens: a dropdown next to the logo. Below 67rem (see styles): a small chip, which opens the same
// panel down to Docusaurus' own 996px breakpoint and a bottom sheet below it.

function Icon({ children, size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

function Dot({ group }) {
  return (
    <span
      className={clsx(
        styles.dot,
        group === 'ai' ? styles.dotAi : styles.dotClassic,
      )}
      aria-hidden="true"
    />
  );
}

function VersionOption({ version, current, href }) {
  const content = (
    <>
      <Dot group={version.group} />
      <span className={styles.optionText}>
        <span>
          {version.label}
          {version.tag && <span className={styles.tag}>{version.tag}</span>}
        </span>
        <span className={styles.optionDescription}>{version.description}</span>
      </span>
      {current && (
        <span className={styles.check} role="img" aria-label="Current">
          <Icon size={18}>
            <path d="M5 12l5 5 9-10" />
          </Icon>
        </span>
      )}
      {!current && (
        <span className={styles.external} aria-hidden="true">
          <Icon size={14}>
            <path d="M7 17L17 7" />
            <path d="M8 7h9v9" />
          </Icon>
        </span>
      )}
    </>
  );
  if (current) {
    return (
      <div
        className={clsx(styles.option, styles.optionCurrent)}
        aria-current="true"
      >
        {content}
      </div>
    );
  }
  return (
    <a className={styles.option} href={href}>
      {content}
    </a>
  );
}

function VersionList({ currentId, hrefs }) {
  return GROUPS.map((group) => (
    <div key={group.id} className={styles.group}>
      <div className={styles.groupTitle}>{group.title.toUpperCase()}</div>
      {group.versions.map((version) => (
        <VersionOption
          key={version.id}
          version={version}
          current={version.id === currentId}
          href={hrefs[version.id]}
        />
      ))}
    </div>
  ));
}

function BottomSheet({ onClose, children }) {
  const sheetRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    sheetRef.current?.querySelector('button')?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onCloseRef.current();
        return;
      }
      if (event.key !== 'Tab') {
        return;
      }
      // Keep keyboard focus inside the open sheet
      const focusable = [
        ...sheetRef.current.querySelectorAll('a[href], button'),
      ];
      if (!focusable.length) {
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  return createPortal(
    <div className={styles.sheetRoot}>
      <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />
      <div
        ref={sheetRef}
        className={styles.sheet}
        role="dialog"
        aria-modal="true"
        aria-label="Documentation version"
      >
        <div className={styles.handle} aria-hidden="true" />
        <div className={styles.sheetHeader}>
          <span>Documentation version</span>
          <button
            type="button"
            className={styles.sheetClose}
            aria-label="Close"
            onClick={onClose}
          >
            <Icon size={20}>
              <path d="M6 6l12 12M18 6L6 18" />
            </Icon>
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default function DocsSwitcher() {
  const { current, hrefs } = useDocsSite();
  const [open, setOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const chipRef = useRef(null);
  // Docusaurus' own 996px breakpoint: the bottom sheet in mobile mode, the dropdown panel above it
  const isMobile = useWindowSize() === 'mobile';
  const closeSheet = useCallback(() => setSheetOpen(false), []);
  const triggerLabel = `Documentation version: ${current.label}, ${current.name}`;

  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        // Hand focus back to whichever of the two buttons is showing
        [triggerRef.current, chipRef.current]
          .find((button) => button && button.offsetParent !== null)
          ?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <span className={styles.divider} aria-hidden="true" />
      <div
        ref={rootRef}
        className={clsx(styles.root, open && styles.open)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setOpen(false);
          }
        }}
      >
        <button
          ref={triggerRef}
          type="button"
          className={clsx(styles.trigger, styles.desktop)}
          aria-expanded={open}
          aria-controls="docs-version-menu"
          aria-label={triggerLabel}
          onClick={() => setOpen((value) => !value)}
        >
          <Dot group={current.group} />
          <span>{current.name}</span>
          <span className={styles.badge}>{current.label}</span>
          <span className={styles.chevron}>
            <Icon>
              <path d="M6 9l6 6 6-6" />
            </Icon>
          </span>
        </button>
        {open && (
          <div
            id="docs-version-menu"
            className={styles.panel}
            role="group"
            aria-label="Documentation version"
          >
            <VersionList currentId={current.id} hrefs={hrefs} />
          </div>
        )}
        <button
          ref={chipRef}
          type="button"
          className={clsx(styles.trigger, styles.chip)}
          aria-haspopup={isMobile ? 'dialog' : 'true'}
          aria-expanded={isMobile ? undefined : open}
          aria-controls={isMobile ? undefined : 'docs-version-menu'}
          aria-label={triggerLabel}
          onClick={() =>
            isMobile ? setSheetOpen(true) : setOpen((value) => !value)
          }
        >
          <Dot group={current.group} />
          <span>{current.short}</span>
          <span className={styles.chevron}>
            <Icon size={14}>
              <path d="M6 9l6 6 6-6" />
            </Icon>
          </span>
        </button>
      </div>
      {sheetOpen && (
        <BottomSheet onClose={closeSheet}>
          <VersionList currentId={current.id} hrefs={hrefs} />
        </BottomSheet>
      )}
    </>
  );
}
