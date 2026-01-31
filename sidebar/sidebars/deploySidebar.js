/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export default [
  {
    type: 'doc',
    id: 'build-and-deploy/overview',
  },
  {
    type: 'category',
    label: 'build',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'category',
        label: 'web',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'build-and-deploy/build/web/build-options',
          },

          {
            type: 'category',
            label: 'Packaging',
            collapsible: true,
            collapsed: true,
            items: [
              {
                type: 'category',
                label: 'Package WAR',
                collapsible: true,
                collapsed: true,
                items: [
                  {
                    type: 'doc',
                    id: 'build-and-deploy/build/web/package/war/build-war-from-studio',
                  },
                  {
                    type: 'doc',
                    id: 'build-and-deploy/build/web/package/war/build-war-from-projectzip',
                  },
                  {
                    type: 'doc',
                    id: 'build-and-deploy/build/web/package/war/build-war-using-docker',
                  },
                ],
              },

              {
                type: 'category',
                label: 'Docker Image',
                collapsible: true,
                collapsed: true,
                items: [
                  {
                    type: 'doc',
                    id: 'build-and-deploy/build/web/package/docker/docker-image',
                  },
                ],
              },
            ],
          },

          {
            type: 'doc',
            id: 'build-and-deploy/build/web/static-content',
          },
        ],
      },
      {
        type: 'category',
        label: 'mobile',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'build-and-deploy/build/mobile/overview',
          },
          {
            type: 'doc',
            id: 'build-and-deploy/build/mobile/appchef',
          },
          {
            type: 'doc',
            id: 'build-and-deploy/build/mobile/cli',
          },
          {
            type: 'doc',
            id: 'build-and-deploy/build/mobile/expo',
          },
          {
            type: 'doc',
            id: 'build-and-deploy/build/mobile/configuration',
          },
        ],
      },
    ],
  },

  /* ================= DEPLOY ================= */
  {
    type: 'category',
    label: 'Deploy',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'build-and-deploy/deploy/one-click deployment',
      },
      {
        type: 'doc',
        id: 'build-and-deploy/deploy/deploy-to-web-server',
      },
      {
        type: 'doc',
        id: 'build-and-deploy/deploy/container-deployment',
      },
      {
        type: 'doc',
        id: 'build-and-deploy/deploy/deploy-static-content',
      },
    ],
  },

  /* ================= PUBLISH ================= */
  {
    type: 'category',
    label: 'Publish',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'build-and-deploy/publish/overview',
      },
      {
        type: 'category',
        label: 'mobile',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'build-and-deploy/publish/mobile/overview',
          },
          {
            type: 'doc',
            id: 'build-and-deploy/publish/mobile/certificates-and-signing',
          },
          {
            type: 'doc',
            id: 'build-and-deploy/publish/mobile/android-publishing',
          },
          {
            type: 'doc',
            id: 'build-and-deploy/publish/mobile/ios-publishing',
          },
          {
            type: 'doc',
            id: 'build-and-deploy/publish/mobile/enterprise-distribution',
          },
          {
            type: 'doc',
            id: 'build-and-deploy/publish/mobile/testing-distribution',
          },
        ],
      },
    ],
  },

  /* ================= PIPELINE ================= */
  {
    type: 'category',
    label: 'Pipeline',
    collapsible: true,
    collapsed: true,
    link: {
      type: 'doc',
      id: 'build-and-deploy/pipeline/index',
    },
    items: [
      {
        type: 'category',
        label: 'WaveMaker Internal CI/CD Pipeline',
        items: [
          'build-and-deploy/pipeline/wavemaker-internal-ci-cd-pipeline/release-management',
          'build-and-deploy/pipeline/wavemaker-internal-ci-cd-pipeline/configuration-profiles',
          'build-and-deploy/pipeline/wavemaker-internal-ci-cd-pipeline/configuration-management',
          'build-and-deploy/pipeline/wavemaker-internal-ci-cd-pipeline/pipelines-phases',
          {
            type: 'category',
            label: 'Pipeline Configuration',
            items: [
              'build-and-deploy/pipeline/wavemaker-internal-ci-cd-pipeline/pipeline-configuration/default-pipelines',
              'build-and-deploy/pipeline/wavemaker-internal-ci-cd-pipeline/pipeline-configuration/configure-pipelines',
            ],
          },
          {
            type: 'category',
            label: 'Deploy to Cloud Providers',
            items: [
              'build-and-deploy/pipeline/wavemaker-internal-ci-cd-pipeline/deploy-to-cloud-providers/deployment-to-aws',
              'build-and-deploy/pipeline/wavemaker-internal-ci-cd-pipeline/deploy-to-cloud-providers/deployment-to-azure',
              'build-and-deploy/pipeline/wavemaker-internal-ci-cd-pipeline/deploy-to-cloud-providers/deployment-google-cloud',
              'build-and-deploy/pipeline/wavemaker-internal-ci-cd-pipeline/deploy-to-cloud-providers/deployment-to-digital-ocean',
            ],
          },
          {
            type: 'category',
            label: 'Pipeline Configuration cont.',
            items: [
              'build-and-deploy/pipeline/wavemaker-internal-ci-cd-pipeline/pipeline-configuration-cont/phase-configuration',
              'build-and-deploy/pipeline/wavemaker-internal-ci-cd-pipeline/pipeline-configuration-cont/webhooks-integration',
              'build-and-deploy/pipeline/wavemaker-internal-ci-cd-pipeline/pipeline-configuration-cont/tests-integration',
            ],
          },
          {
            type: 'category',
            label: 'Manage Deployed Apps',
            items: ['build-and-deploy/pipeline/wavemaker-internal-ci-cd-pipeline/manage-deployed-apps'],
          },
        ],
      },
      {
        type: 'category',
        label: 'Continuous Integration',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'category',
            label: 'VCS Integration',
            collapsible: true,
            collapsed: true,
            items: [
              {
                type: 'autogenerated',
                dirName: 'build-and-deploy/pipeline/continuous-integration/vcs',
              },
            ],
          },
          {
            type: 'category',
            label: 'WaveMaker Internal CI/CD',
            collapsible: true,
            collapsed: true,
            items: [
              {
                type: 'autogenerated',
                dirName: 'build-and-deploy/pipeline/continuous-integration/internal-cicd',
              },
            ],
          },
        ],
      },
      {
        type: 'category',
        label: 'Continuous Deployment',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'autogenerated',
            dirName: 'build-and-deploy/pipeline/continuous-deployment',
          },
        ],
      },
    ],
  },
];
