import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function SidebarSwitch({ path }) {
  if (!path?.includes("user-interfaces")) {
    return null;
  }

  const isWeb = path?.includes("/user-interfaces/web");
  const isMobile = path?.includes("/user-interfaces/mobile");

  return (
    <div className={styles.switchContainer}>
      <Link
        to="/docs/user-interfaces/web/concepts/overview"
        className={`${styles.switchOption} ${isWeb ? styles.active : ""}`}
      >
        Web
      </Link>

      <Link
        to="/docs/user-interfaces/mobile/concepts/overview"
        className={`${styles.switchOption} ${isMobile ? styles.active : ""}`}
      >
        Mobile
      </Link>
    </div>
  );
}
