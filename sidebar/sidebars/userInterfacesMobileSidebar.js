/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export default [
  {
    type: 'category',
    label: 'Concepts',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'user-interfaces/mobile/concepts/overview',
      },
      {
        type: 'doc',
        id: 'user-interfaces/mobile/concepts/tech-stack',
      },
    ],
  },
  {
    type: 'category',
    label: 'Components',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'user-interfaces/mobile/components/mobile-components',
        label: 'Mobile Components',
      },
    ],
  },
  {
    type: 'category',
    label: 'Develop',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'user-interfaces/mobile/develop/create-page-working-with-layouts',
      },
      {
        type: 'doc',
        id: 'user-interfaces/mobile/develop/styling-with-design-tokens',
      },
      {
        type: 'doc',
        id: 'user-interfaces/mobile/develop/responsive-design',
      },
      {
        type: 'doc',
        id: 'user-interfaces/mobile/develop/ui-event-handling',
      },
      {
        type: 'doc',
        id: 'user-interfaces/mobile/develop/input-validations',
      },
      {
        type: 'doc',
        id: 'user-interfaces/mobile/develop/state-management',
      },
      {
        type: 'category',
        label: 'Integrating with APIs',
        collapsible: true,
        collapsed: true,
        items: [
            {
            type: 'doc',
            id: 'user-interfaces/mobile/develop/integrating-with-apis/overview',
          },
            {
            type: 'doc',
            id: 'user-interfaces/mobile/develop/integrating-with-apis/variables',
          },
          {
            type: 'doc',
            id: 'user-interfaces/mobile/develop/integrating-with-apis/life-cycle-hooks',
          },
        
        
        ],
      },
    ],
  },
  {
    type: 'category',
    label: 'Enterprise capabilities',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'user-interfaces/mobile/enterprise-capabilities/accessibility',
      },
      {
        type: 'doc',
        id: 'user-interfaces/mobile/enterprise-capabilities/language-support-i18n',
      },
      {
        type: 'category',
        label: 'prefabs',
        collapsible: true,
        collapsed: true,
        items: [
          // {
          //   type: 'doc',
          //   id: 'user-interfaces/mobile/enterprise-capabilities/prefabs/wmx-components-mobile',
          // },
           {
            type: 'doc',
            id: 'user-interfaces/mobile/enterprise-capabilities/prefabs/overview',
          },
          {
            type: 'doc',
            id: 'user-interfaces/mobile/enterprise-capabilities/prefabs/create-prefab',
          },
          {
            type: 'doc',
            id: 'user-interfaces/mobile/enterprise-capabilities/prefabs/publishing',
          },
        ],
      },
       {
        type: 'category',
        label: 'WMX Components',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'user-interfaces/mobile/enterprise-capabilities/wmx/wmx-components',
          },
          {
            type: 'doc',
            id: 'user-interfaces/mobile/enterprise-capabilities/wmx/wmx-schema-reference',
          },
           {
            type: 'doc',
            id: 'user-interfaces/mobile/enterprise-capabilities/wmx/wmx-with-aira',
          },
        ],
      },
    //   {
    //     type: 'doc',
    //     id: 'user-interfaces/mobile/enterprise-capabilities/prefabs',
    //   },
    //   {
    //     type: 'doc',
    //     id: 'user-interfaces/mobile/enterprise-capabilities/role-based-access-control',
    //   },
    ],
    
  },
  
  {
    type: 'category',
    label: 'Testing & Debugging',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'user-interfaces/mobile/testing-and-debugging/debugging-overview',
        label: 'Debugging Overview',
      },
      {
        type: 'category',
        label: 'Community Debugging Tools',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'user-interfaces/mobile/testing-and-debugging/community-debugging-tools/chrome-devtools',
            label: 'Chrome DevTools',
          },
          {
            type: 'doc',
            id: 'user-interfaces/mobile/testing-and-debugging/community-debugging-tools/react-devtools',
            label: 'React DevTools',
          },
          {
            type: 'doc',
            id: 'user-interfaces/mobile/testing-and-debugging/community-debugging-tools/react-native-devtools',
            label: 'React Native DevTools',
          },
          {
            type: 'doc',
            id: 'user-interfaces/mobile/testing-and-debugging/community-debugging-tools/expo-dev-tools',
            label: 'Expo Dev Tools',
          },
          {
            type: 'doc',
            id: 'user-interfaces/mobile/testing-and-debugging/community-debugging-tools/flipper',
            label: 'Flipper (Deprecated)',
          },
          {
            type: 'doc',
            id: 'user-interfaces/mobile/testing-and-debugging/community-debugging-tools/reactotron',
            label: 'Reactotron',
          },
        ],
      },
      {
        type: 'category',
        label: 'WaveMaker Debugging Tools',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'user-interfaces/mobile/testing-and-debugging/wm-debugging-tools/wavepulse',
            label: 'WavePulse',
          },
        ],
      },
      {
        type: 'category',
        label: 'Testing Strategies',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'user-interfaces/mobile/testing-and-debugging/testing-strategies/ui-testing-mobile',
          },
          {
            type: 'doc',
            id: 'user-interfaces/mobile/testing-and-debugging/testing-strategies/automate-testing',
          },
        ],
      },
      {
        type: 'category',
        label: 'Unit Testing',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'user-interfaces/mobile/testing-and-debugging/unit-testing/web-and-mobile',
          },
        ],
      },
    ],
  },
  {
    type: 'category',
    label: 'device-capabilities-mobile',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'user-interfaces/mobile/device-capabilities-mobile/adding-plugins',
      },
      {
        type: 'doc',
        id: 'user-interfaces/mobile/device-capabilities-mobile/enabling-gestures',
      },
      {
        type: 'doc',
        id: 'user-interfaces/mobile/device-capabilities-mobile/offline-support',
      },
    ],
  },
];
