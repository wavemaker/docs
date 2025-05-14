import React from 'react';
import clsx from 'clsx';

const PLATFORM_LABELS = {
  android: 'Android',
  ios: 'iOS',
  native: 'React Native',
  web: 'Web Only',
};

export default function Flag({ name, style, className }) {
  const key = name?.toLowerCase();
  const label = PLATFORM_LABELS[key] || name;
  const combinedClassName = clsx('flag', `flag-${key?.replace(/\s+/g, '-')}`, className);
  return <span className={combinedClassName} style={style}>{label}</span>;
}
