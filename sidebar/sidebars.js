// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
import aiAgentsSidebar from './sidebars/aiAgentsSidebar';
import apisServicesSidebar from './sidebars/apisServicesSidebar';
import deploySidebar from './sidebars/deploySidebar';
import designSystemSidebar from './sidebars/designSystemSidebar';
import guideSidebar from './sidebars/guideSidebar';
import studioSidebar from './sidebars/studioSidebar';
import userInterfacesWebSidebar from './sidebars/userInterfacesWebSidebar';
import userInterfacesMobileSidebar from './sidebars/userInterfacesMobileSidebar';
import metrics from '../scripts/metrics.json';
import releaseNotesSidebar from './sidebars/releaseNotesSidebar';

// utility fn to insert style for docs without Author
const authorNameIds = new Set(metrics.authorNameIds);
const noAuthorIds = new Set(metrics.noAuthorIds);

/** @param {any[]} items
 * @returns {any[]}
 */
function highlightMissing(items) {
  return items.map(item => {
    // If it's a shorthand doc (string), handle it
    if (typeof item === 'string') {
      if (authorNameIds.has(item)) {
        return {
          type: 'doc',
          id: item,
          className: 'sidebar-default-author',
        };
      }
      if (noAuthorIds.has(item)) {
        return {
          type: 'doc',
          id: item,
          className: 'sidebar-missing-author',
        };
      }
      return item;
    }

    // If it's a category, recursively process its items
    if (item.type === 'category') {
      return { ...item, items: highlightMissing(item.items) };
    }
    // If it's a doc, check against our no Author doc list
    if (item.type === 'doc' && authorNameIds.has(item.id)) {
      return {
        ...item,
        className: 'sidebar-default-author', // This class is added to the <li>
      };
    }
    if (item.type === 'doc' && noAuthorIds.has(item.id)) {
      return {
        ...item,
        className: 'sidebar-missing-author', // This class is added to the <li>
      };
    }
    return item;
  });
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
let sidebars = {
  designSystemSidebar,
  aiAgentsSidebar,
  apisServicesSidebar,
  deploySidebar,
  guideSidebar,
  studioSidebar,
  userInterfacesWebSidebar,
  userInterfacesMobileSidebar,
  releaseNotesSidebar,
};

for (const key in sidebars) {
  // @ts-ignore
  sidebars[key] = highlightMissing(sidebars[key]);
}

export default sidebars;
