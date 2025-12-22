import React from "react";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";

const topNavData = [
  {
    id: 1,
    label: "User Interface",
    link: "/docs/user-interfaces/web/concepts/overview",
  },
  {
    id: 2,
    label: "Design System",
    link: "/docs/design-system/overview",
  },
  {
    id: 3,
    label: "Developing with Agents",
    link: "/docs/developing-with-agents/overview",
  },
  {
    id: 4,
    label: "Building API’s & Microservices",
    link: "/docs/apis-and-services/concepts/overview",
  },
  {
    id: 5,
    label: "Studio",
    link: "/docs/studio/overview",
  },
  {
    id: 6,
    label: "Build & Deploy",
    link: "/docs/build-and-deploy/overview",
  },
];

export default function SecondaryNavbar({ navItems = topNavData }) {
  return (
    <BrowserOnly fallback={<nav className="top_nav" />}>
      {() => {
        const location = window.location;
        return (
          <nav className="top_nav">
            <ul className="nav-main">
              {navItems.map((item) => {
                // For User Interface, check if path starts with /docs/user-interfaces/
                // to make it active for both web and mobile sections
                const isActive = item.label === "User Interface"
                  ? location.pathname.startsWith("/docs/user-interfaces/")
                  : location.pathname.startsWith(item.link);
                return (
                  <li
                    key={item.id}
                    className={
                      isActive ? "top-nav-link-item active" : "top-nav-link-item"
                    }
                  >
                    <Link to={item.link} className="top-nav-link">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        );
      }}
    </BrowserOnly>
  );
}
