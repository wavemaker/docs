/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export default [
    {
        "type": "doc",
        "id": "guide/intro"
    },
    {
        "type": "category",
        "label": "How-tos",
        "items": [
            "guide/howtos/howtos-documents",
            "guide/howtos/howtos-ui",
            {
                "type": "category",
                "label": "App Development",
                "items": [
                    "guide/howtos/app-development/creating-registration-page"
                ]
            }
        ]
    }
]
