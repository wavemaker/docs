import React from "react";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";

const topNavData = [
  {
    id: 1,
    label: "User Interface",
    link: "/docs/dummy-docs/user_interfaces/Concepts/Overview",
  },
  {
    id: 2,
    label: "Building API’s & Microservices",
    link: "/docs/dummy-docs/apis_and_services/Concepts/overview",
  },
  {
    id: 3,
    label: "Build & Deploy",
    link: "/docs/dummy-docs/build_and_deploy/overview",
  },
  {
    id: 4,
    label: "Design System",
    link: "/docs/dummy-docs/design-system/overview",
  },
  {
    id: 5,
    label: "Developing with Agents",
    link: "/docs/dummy-docs/developing_with_agents/overview",
  },
  {
    id: 6,
    label: "Studio",
    link: "/docs/dummy-docs/studio/overview",
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
                const isActive = location.pathname.startsWith(item.link);
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
