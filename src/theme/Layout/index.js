import React from "react";
import Layout from "@theme-original/Layout";
import { useLocation } from "@docusaurus/router";
import BrowserOnly from '@docusaurus/BrowserOnly';
import SecondaryNavbar from "@site/src/components/TopNav/TopNav";

export default function LayoutWrapper(props) {
  const location = useLocation();
  return (
    <>
      <Layout {...props}>
      <BrowserOnly fallback={<div />}>
        {() => {
          const pathname = window.location.pathname;
          const isHomePage = pathname === '/';
          return isHomePage ? null : <SecondaryNavbar />;
        }}
      </BrowserOnly>
      {props.children}
    </Layout>
    </>
  );
}
