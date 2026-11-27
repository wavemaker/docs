// Versions offered by the docs switcher. Identical on both docs sites
// (ecosystem/docs and oldDocs/docs/website): keep the two copies in sync.
export const GROUPS = [
  {
    id: 'ai',
    title: 'WaveMaker AI',
    versions: [
      {
        id: 'v12',
        group: 'ai',
        name: 'WaveMaker AI',
        label: 'v12',
        short: 'v12',
        tag: 'Latest',
        description: 'AI-native platform. For new projects.',
      },
    ],
  },
  {
    id: 'classic',
    title: 'Classic',
    versions: [
      {
        id: 'v11',
        group: 'classic',
        name: 'Classic',
        label: 'v11.16',
        short: 'v11',
        description: 'Latest Classic. For projects built before v12',
      },
      {
        id: 'v10',
        group: 'classic',
        name: 'Classic',
        label: 'v10.15',
        short: 'v10',
        description: 'For projects still on WaveMaker 10.x',
      },
    ],
  },
];

export const ALL_VERSIONS = GROUPS.flatMap((group) => group.versions);
