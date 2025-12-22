// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
import aiAgentsSidebar from './sidebars/aiAgentsSidebar';
import apisServicesSidebar from './sidebars/apisServicesSidebar';
import deploySidebar from './sidebars/deploySidebar';
import designSystemSidebar from './sidebars/designSystemSidebar';
import guideSidebar from './sidebars/guideSidebar';
import studioSidebar from './sidebars/studioSidebar';
import userInterfacesSidebar from './sidebars/userInterfacesSidebar';
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  designSystemSidebar,
  aiAgentsSidebar,
  apisServicesSidebar,
  deploySidebar,
  guideSidebar,
  studioSidebar,
  userInterfacesSidebar,

  // But you can create a sidebar manually one by one
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
