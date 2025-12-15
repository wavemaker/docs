import React from "react";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";

const topNavData = [
  {
    id: 1,
    label: "User Interface",
    link: "/",
  },
  {
    id: 2,
    label: "Building API’s & Microservices",
    link: "/Api",
  },
  {
    id: 3,
    label: "Build & Deploy",
    link: "/Deploy",
  },
  {
    id: 4,
    label: "Design System",
    link: "/DesignSystem",
  },
  {
    id: 5,
    label: "Developing with Agents",
    link: "/DevelopingWithAgents",
  },
  {
    id: 6,
    label: "Studio",
    link: "/Studio",
  },
];

export default function SecondaryNavbar({ navItems = topNavData }) {
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
}
