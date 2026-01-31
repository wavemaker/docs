import React from "react";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";

const topNavData = [
  {
    id: 1,
    label: "User Interface",
    firstItemLink: "/docs/user-interfaces/web/concepts/overview",
    rootLink: "/docs/user-interfaces/",
  },
  {
    id: 2,
    label: "Design System",
    firstItemLink: "/docs/design-system/concepts/",
    rootLink: "/docs/design-system/",
  },
  {
    id: 3,
    label: "Developing with Agents",
    firstItemLink: "/docs/developing-with-agents/overview",
    rootLink: "/docs/developing-with-agents/",
  },
  {
    id: 4,
    label: "Building APIs & Microservices",
    firstItemLink: "/docs/apis-and-services/concepts/overview",
    rootLink: "/docs/apis-and-services/",
  },
  {
    id: 5,
    label: "Platform",
    firstItemLink: "/docs/studio/overview",
    rootLink: "/docs/studio/",
  },
  {
    id: 6,
    label: "Build & Deploy",
    firstItemLink: "/docs/build-and-deploy/overview",
    rootLink: "/docs/build-and-deploy/",
  },
];

export default function SecondaryNavbar({ navItems = topNavData }) {
  const { pathname } = useLocation();

  return (
    <nav className="top_nav">
      <ul className="nav-main">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.rootLink);
          return (
            <li
              key={item.id}
              className={`top-nav-link-item ${isActive ? "active" : ""}`}
            >
              <Link
                to={item.firstItemLink}
                className="top-nav-link"
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
