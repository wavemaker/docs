import React, { useState, useEffect } from "react";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";

const STORAGE_KEY = "secondary_nav_active";

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
    label: "Building APIs & Microservices",
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
        const [activeId, setActiveId] = useState(null);

        // Load active item from localStorage on first render
        useEffect(() => {
          const savedId = localStorage.getItem(STORAGE_KEY);
          if (savedId) {
            setActiveId(Number(savedId));
          }
        }, []);

        const handleClick = (id) => {
          setActiveId(id);
          localStorage.setItem(STORAGE_KEY, id);
        };

        return (
          <nav className="top_nav">
            <ul className="nav-main">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className={`top-nav-link-item ${
                    activeId === item.id ? "active" : ""
                  }`}
                >
                  <Link
                    to={item.link}
                    className="top-nav-link"
                    onClick={() => handleClick(item.id)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        );
      }}
    </BrowserOnly>
  );
}
