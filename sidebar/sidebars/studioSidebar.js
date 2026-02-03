import { label } from 'framer-motion/client';

/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export default [
  {
    type: 'doc',
    id: 'studio/overview',
  },
  {
    type: 'category',
    label: 'governance',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'studio/governance/project-collaboration',
        label: 'Project Collaboration'
      },
      {
        type: 'doc',
        id: 'studio/governance/artifact-management',
        label: 'Artifact Management'
      },
      {
        type: 'doc',
        id: 'studio/governance/code-repository-configuration',
        label: 'Code Repository Configuration'
      },
      {
        type: 'doc',
        id: 'studio/governance/team_management',
        label: 'Team Management'
      },
      {
        type: 'doc',
        id: 'studio/governance/application-deployments-demo',
        label: 'Application Deployments - Demo'
      },
    ],
  },
  {
    type: 'category',
    label: 'offerings',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'studio/offerings/wmo',
      },
      {
        type: 'category',
        label: 'wme',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'studio/offerings/wme/welcome',
            label: 'Welcome',
          },
          {
            type: 'doc',
            id: 'studio/offerings/wme/architecture',
            label: 'Architecture',
          },
          {
            type: 'category',
            label: 'Getting Started',
            collapsible: true,
            collapsed: true,
            items: [
              {
                type: 'doc',
                id: 'studio/offerings/wme/getting-started/getting-started',
                label: 'Enterprise Setup Process',
              },
              {
                type: 'doc',
                id: 'studio/offerings/wme/getting-started/prerequisites',
                label: "Prerequisites",
              },
              {
                type: 'doc',
                id: 'studio/offerings/wme/getting-started/users-roles',
                label: 'WME User Roles',
              },
            ],
            link: {
              type: 'doc',
              id: 'studio/offerings/wme/getting-started/getting-started',
            },
          },
          {
            type: 'category',
            label: 'Installation',
            collapsible: true,
            collapsed: true,
            items: [
              {
                type: 'category',
                label: 'Platforms',
                collapsible: true,
                collapsed: true,
                items: [
                  {
                    type: 'doc',
                    id: 'studio/offerings/wme/installation/platforms/wavemaker-enterprise-setup-overview',
                  },
                  {
                    type: 'category',
                    label: 'AWS',
                    collapsible: true,
                    collapsed: true,
                    
                    items: [
                      {
                        type: 'doc',
                        id: 'studio/offerings/wme/installation/platforms/aws/launching-instances-in-aws',
                      },
                    ],
                  },
                  {
                    type: 'category',
                    label: 'Azure',
                    collapsible: true,
                    collapsed: true,
                    
                    items: [
                      {
                        type: 'doc',
                        id: 'studio/offerings/wme/installation/platforms/azure/launching-instances-in-azure',
                      },
                      {
                        type: 'doc',
                        id: 'studio/offerings/wme/installation/platforms/azure/launching-instances-in-azure-vhd',
                      },
                    ],
                  },
                  {
                    type: 'category',
                    label: 'Hyper-V',
                    collapsible: true,
                    collapsed: true,
                   
                    items: [
                      {
                        type: 'doc',
                        id: 'studio/offerings/wme/installation/platforms/hyperv/launching-instances-in-hyper-v-vhd',
                      },
                    ],
                  },
                  {
                    type: 'category',
                    label: 'VMware ESXi',
                    collapsible: true,
                    collapsed: true,
                    
                    items: [
                      {
                        type: 'doc',
                        id: 'studio/offerings/wme/installation/platforms/vmware-esxi/launching-instances-in-esxi-iso',
                      },
                      {
                        type: 'doc',
                        id: 'studio/offerings/wme/installation/platforms/vmware-esxi/launching-instances-in-esxi-ova',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'category',
                label: 'Common Steps',
                collapsible: true,
                collapsed: true,
                items: [
                  {
                    type: 'doc',
                    id: 'studio/offerings/wme/installation/common-steps/install-prerequisites',
                  },
                  {
                    type: 'doc',
                    id: 'studio/offerings/wme/installation/common-steps/non-root-execution',
                  },
                  {
                    type: 'doc',
                    id: 'studio/offerings/wme/installation/common-steps/download-copy-installer',
                  },
                  {
                    type: 'doc',
                    id: 'studio/offerings/wme/installation/common-steps/extract-package',
                  },
                  {
                    type: 'doc',
                    id: 'studio/offerings/wme/installation/common-steps/initilize-setup',
                  },
                  {
                    type: 'doc',
                    id: 'studio/offerings/wme/installation/common-steps/setup-using-cw',
                  },
                  {
                    type: 'doc',
                    id: 'studio/offerings/wme/installation/common-steps/apply-license',
                  },
                  
                ],
              },
            ],
          },
          {
            type: 'category',
            label: 'configuration',
            collapsible: true,
            collapsed: true,
            items: [
              {
                type: 'doc',
                id: 'studio/offerings/wme/configuration/config-users-auth-providers',
                label: 'Users Onboarding',
              },
              {
                type: 'doc',
                id: 'studio/offerings/wme/configuration/config-vcs',
                label: 'configuration VCS',
              },

              {
                type: 'doc',
                id: 'studio/offerings/wme/configuration/add-dev-capacity',
                label: 'Add Developer Capacity',
              },
              {
                type: 'doc',
                id: 'studio/offerings/wme/configuration/add-apps-capacity',
                label: 'Add Apps Capacity',
              },
              {
                type: 'doc',
                id: 'studio/offerings/wme/configuration/config-pipeline',
                label: 'configuration Pipeline',
              },
              {
                type: 'doc',
                id: 'studio/offerings/wme/configuration/config-ssl',
                label: 'configuration SSL',
              },
            ],
          },

          {
            type: 'category',
            label: 'observability',
            collapsible: true,
            collapsed: true,
            items: [
              {
                type: 'doc',
                id: 'studio/offerings/wme/observability/introduction',
                label: 'Introduction',
              },
              {
                type: 'category',
                label: 'logs-aggregation',
                collapsible: true,
                collapsed: true,
                items: [
                  {
                    type: 'doc',
                    id: 'studio/offerings/wme/observability/logs-aggregation/overview',
                    label: 'Overview',
                  },

                  {
                    type: 'doc',
                    id: 'studio/offerings/wme/observability/logs-aggregation/kibana',
                    label: 'Kibana',
                  },
                  {
                    type: 'doc',
                    id: 'studio/offerings/wme/observability/logs-aggregation/fluentd',
                    label: 'fluentd tags',
                  },
                ],
              },
              {
                type: 'category',
                label: 'metrics-collection',
                collapsible: true,
                collapsed: true,
                items: [
                  {
                    type: 'doc',
                    id: 'studio/offerings/wme/observability/metrics-collection/overview',
                    label: 'Overview',
                  },
                  {
                    type: 'doc',
                    id: 'studio/offerings/wme/observability/metrics-collection/prometheus',
                    label: 'Prometheus',
                  },
                  {
                    type: 'doc',
                    id: 'studio/offerings/wme/observability/metrics-collection/alerts',
                    label: 'Alerts',
                  },
                  {
                    type: 'doc',
                    id: 'studio/offerings/wme/observability/metrics-collection/grafana',
                    label: 'Grafana',
                  },
                ],
              },
            ],
          },
          {
            type: 'category',
            label: 'disaster-recovery',
            collapsible: true,
            collapsed: true,
            items: [
              {
                type: 'doc',
                id: 'studio/offerings/wme/disaster-recovery/dehydration-and-rehydration',
                label: 'Dehydration and Rehydration',
              },
              {
                type: 'doc',
                id: 'studio/offerings/wme/disaster-recovery/backup-and-restore',
                label: 'Backup and Restore ',
              },
            ],
          },

          {
            type: 'category',
            label: 'upgrade',
            collapsible: true,
            collapsed: true,
            items: [
              {
                type: 'doc',
                id: 'studio/offerings/wme/upgrade/upgrade-setup',
                label: 'Upgrade Overview',
              },
              {
                type: 'doc',
                id: 'studio/offerings/wme/upgrade/upgrade-prerequisites',
                label: 'Upgrade Prerequisites',
              },
              {
                type: 'doc',
                id: 'studio/offerings/wme/upgrade/download-copy-patch',
                label: 'Download and Copy Patch',
              },
              {
                type: 'doc',
                id: 'studio/offerings/wme/upgrade/extract-patch',
                label: 'Extract Package',
              },
              {
                type: 'doc',
                id: 'studio/offerings/wme/upgrade/passivate-containers',
                label: 'Passivate Containers',
              },
              {
                type: 'doc',
                id: 'studio/offerings/wme/upgrade/run-patch',
                label: 'Run Patch',
              },
              {
                type: 'doc',
                id: 'studio/offerings/wme/upgrade/docker-upgrade',
                label: 'Docker Upgrade',
              },
              {
                type: 'doc',
                id: 'studio/offerings/wme/upgrade/upgrade-non-root-execution',
                label: 'Upgrade Non Root WME Execution',
              },
              {
                type: 'doc',
                id: 'studio/offerings/wme/upgrade/os-upgrade',
                label: 'OS Upgrade',
              },
            ],
          },
          {
            type: 'category',
            label: 'proxy-configuration',
            collapsible: true,
            collapsed: true,
            items: [
              {
                type: 'doc',
                id: 'studio/offerings/wme/proxy-configuration/enabling-proxy-in-wme',
                label: 'Enabling Proxy in WaveMaker Enterprise',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: 'category',
    label: 'workspaces',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'studio/workspaces/api-explorer',
      },
      {
        type: 'doc',
        id: 'studio/workspaces/database-explorer',
      },
      {
        type: 'doc',
        id: 'studio/workspaces/design-canvas',
      },
      {
        type: 'doc',
        id: 'studio/workspaces/security-configurator',
      },
      {
        type: 'doc',
        id: 'studio/workspaces/style-workspace',
      },
      {
        type: 'doc',
        id: 'studio/workspaces/vcs-manager',
      },
    ],
  },
];
