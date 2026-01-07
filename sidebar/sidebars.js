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

// utility fn to insert style for docs without Author
const noAuthorDocIds = new Set(metrics.noAuthorIds);

/** @param {any[]} items 
 * @returns {any[]}
 */
function highlightMissing(items) {
  return items.map((item) => {
    // If it's a category, recursively process its items
    if (item.type === 'category') {
      return { ...item, items: highlightMissing(item.items) };
    }
    // If it's a doc, check against our no Author doc list
    if (item.type === 'doc' && noAuthorDocIds.has(item.id)) {
      return { 
        ...item, 
        className: 'sidebar-missing-author' // This class is added to the <li>
      };
    }
    return item;
  });
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  designSystemSidebar: highlightMissing(designSystemSidebar),
  aiAgentsSidebar: highlightMissing(aiAgentsSidebar),
  apisServicesSidebar: highlightMissing(apisServicesSidebar),
  deploySidebar: highlightMissing(deploySidebar),
  guideSidebar: highlightMissing(guideSidebar),
  studioSidebar: highlightMissing(studioSidebar),
  userInterfacesWebSidebar: highlightMissing(userInterfacesWebSidebar),
  userInterfacesMobileSidebar: highlightMissing(userInterfacesMobileSidebar),
};

export default sidebars;
