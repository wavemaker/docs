/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export default [
  {
    type: 'doc',
    id: 'release-notes/index',
    label: 'WaveMaker Releases',
  },
  {
    type: 'category',
    label: 'Release 12',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'release-notes/release-12/index',
        label: 'Overview',
      },
      {
        type: 'doc',
        id: 'release-notes/release-12/the-announcement',
        label: 'Announcement',
      },
      {
        type: 'category',
        label: '12.1.x',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'release-notes/release-12/version-1x/overview',
            label: '12.1.x Overview',
          },
        ],
      },
    ],
  },
];
