import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function SidebarSwitch({ path }) {
  if (!path?.includes("user_interfaces")) {
    return null;
  }

  return (
    <div className={styles.switchContainer}>
      <Link
        to="/docs/dummy-docs/user_interfaces/Concepts/Overview"
        className={styles.switchOption}
        activeClassName={styles.active}
      >
        Web
      </Link>

      <Link
        to="/docs/dummy-docs/user_interfaces/Mobile/Overview"
        className={styles.switchOption}
        activeClassName={styles.active}
      >
        Mobile
      </Link>
    </div>
  );
}
