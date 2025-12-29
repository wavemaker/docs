/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export default [
  {
    type: "doc",
    id: "build-and-deploy/overview",
  },

  /* ================= BUILD ================= */
  {
    type: "category",
    label: "build",
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: "category",
        label: "web",
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: "doc",
            id: "build-and-deploy/web/build/build-options",
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
                    id: "build-and-deploy/web/build/package/war/build-war-from-studio",
                  },
                  {
                    type: "doc",
                    id: "build-and-deploy/web/build/package/war/build-war-from-projectzip",
                  },
                  {
                    type: "doc",
                    id: "build-and-deploy/web/build/package/war/build-war-using-docker",
                  },
                ],
              },

              {
                type: "category",
                label: "Docker Image",
                collapsible: true,
                collapsed: true,
                items: [
                  {
                    type: "doc",
                    id: "build-and-deploy/web/build/package/docker/docker-image",
                  },
                ],
              },
            ],
          },

          {
            type: "doc",
            id: "build-and-deploy/web/build/static-content",
          },
        ],
      },
    ],
  },

  /* ================= DEPLOY ================= */
  {
    type: "category",
    label: "deploy",
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: "doc",
        id: "build-and-deploy/web/deploy/one-click deployment",
      },
      {
        type: "doc",
        id: "build-and-deploy/web/deploy/deploy-to-web-server",
      },
      {
        type: "doc",
        id: "build-and-deploy/web/deploy/container-deployment",
      },
      {
        type: "doc",
        id: "build-and-deploy/web/deploy/deploy-static-content",
      },
      
    ],
  },

  /* ================= DISTRIBUTION (CI/CD) ================= */
  {
    type: "category",
    label: "delivery & distribution (CI/CD)",
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: "doc",
        id: "build-and-deploy/web/deploy/custom ci-cd integration/continous-integration",
      },
      {
        type: "doc",
        id: "build-and-deploy/web/deploy/custom ci-cd integration/continous-deployment",
      },
    ],
  },
];
