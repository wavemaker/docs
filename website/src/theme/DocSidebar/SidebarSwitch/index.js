import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useAllDocsData, useActiveVersion} from '@docusaurus/plugin-content-docs/client';
import {useDocsSidebar} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';

// Sidebar name (sidebars.json) -> the platform it belongs to.
const PLATFORM_BY_SIDEBAR = {
  docs: 'web',
  Mobile: 'mobile',
};

// Landing doc of each platform (same docs the header Web / Mobile links used to open).
const OPTIONS = [
  {key: 'web', label: 'Web', docId: 'documentation-reference'},
  {key: 'mobile', label: 'Mobile', docId: 'react-native/react-native-overview'},
];

function useDocPath(docId) {
  const allDocsData = useAllDocsData();
  const pluginData = Object.values(allDocsData)[0];
  const version = pluginData?.versions.find((v) => v.isLast);
  return version?.docs.find((doc) => doc.id === docId)?.path;
}

export default function SidebarSwitch({onNavigate}) {
  const sidebar = useDocsSidebar();
  const activeVersion = useActiveVersion(undefined);
  const webPath = useDocPath(OPTIONS[0].docId);
  const mobilePath = useDocPath(OPTIONS[1].docId);

  const platform = PLATFORM_BY_SIDEBAR[sidebar?.name];
  // Only the current version has both Web and Mobile docs (v10.x has no Mobile).
  if (!platform || !activeVersion?.isLast || !webPath || !mobilePath) {
    return null;
  }
  const paths = {web: webPath, mobile: mobilePath};

  return (
    <div
      className={styles.switchContainer}
      role="group"
      aria-label="Platform">
      {OPTIONS.map(({key, label}) => (
        <Link
          key={key}
          to={paths[key]}
          className={clsx(styles.switchOption, platform === key && styles.active)}
          aria-current={platform === key ? 'page' : undefined}
          onClick={onNavigate}>
          {label}
        </Link>
      ))}
    </div>
  );
}
