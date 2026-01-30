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
        id: 'release-notes/release-12/the-announcement',
        label: '📣 The Announcement ',
      },
      {
        type: 'category',
        label: '12.1.x',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'release-notes/release-12/version-1x/12.1.0-beta',
            label: '12.1.0 Beta',
          },
        ],
      },
    ],
  },
];
