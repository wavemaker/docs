/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export default [
  {
    type: "doc",
    id: "build-and-deploy/overview"
  },

  {
    type: "category",
    label: "web-app-build",
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: "doc",
        id: "build-and-deploy/webapp-build/build-options"
      },

      {
        type: "category",
        label: "Packaging",
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: "category",
            label: "Package WAR",
            collapsible: true,
            collapsed: true,
            items: [
              {
                type: "doc",
                id: "build-and-deploy/webapp-build/package/war/build-war-from-studio"
              },
              {
                type: "doc",
                id: "build-and-deploy/webapp-build/package/war/build-war-from-projectzip"
              },
              {
                type: "doc",
                id: "build-and-deploy/webapp-build/package/war/build-war-using-docker"
              }
            ]
          },

          {
            type: "category",
            label: "Docker Image",
            collapsible: true,
            collapsed: true,
            items: [
              {
                type: "doc",
                id: "build-and-deploy/webapp-build/package/docker/docker-image"
              }
            ]
          }
        ]
      },

      {
        type: "doc",
        id: "build-and-deploy/webapp-build/static-content"
      }
    ]
  },

  {
    type: "category",
    label: "web-app-deploy",
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: "doc",
        id: "build-and-deploy/webapp-deploy/one-click deployment"
      },
      {
        type: "doc",
        id: "build-and-deploy/webapp-deploy/deploy-to-web-server"
      },
      {
        type: "doc",
        id: "build-and-deploy/webapp-deploy/deploy-static-content"
      },
      {
        type: "doc",
        id: "build-and-deploy/webapp-deploy/container-deployment"
      },

      {
        type: "category",
        label: "custom-ci-cd-integration",
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: "doc",
            id: "build-and-deploy/webapp-deploy/custom ci-cd integration/continous-integration"
          },
          {
            type: "doc",
            id: "build-and-deploy/webapp-deploy/custom ci-cd integration/continous-deployment"
          }
        ]
      }
    ]
  }
];
