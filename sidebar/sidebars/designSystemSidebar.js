import { link } from 'framer-motion/client';

/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export default [
  {
    type: 'category',
    label: 'Concepts',
    link: {
      type: 'doc',
      id: 'design-system/concepts/index',
    },
    items: [
      'design-system/concepts/design-token-architecture',
      'design-system/concepts/working-with-style-workspace',
      'design-system/concepts/component-variants',
      'design-system/concepts/best-practices',
    ],
  },
  {
    type: 'category',
    label: 'Autocode',
    items: [
      'design-system/figma-autocode-plugin/working-with-autocode-plugin',
      'design-system/figma-autocode-plugin/design-guidelines',
      'design-system/figma-autocode-plugin/figma-cheat-sheet',
    ],
  },
  {
    type: 'category',
    label: 'Design System Project',
    collapsible: true,
    collapsed: true,
    link: {
      type: 'doc',
      id: 'design-system/design-system-project/index',
    },
    items: [
      'design-system/design-system-project/features'
    ],
  },
];
