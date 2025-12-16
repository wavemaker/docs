import React from "react";
import Layout from "@theme-original/Layout";
import { useLocation } from "@docusaurus/router";
import BrowserOnly from '@docusaurus/BrowserOnly';
import SecondaryNavbar from "@site/src/components/TopNav/TopNav";

export default function LayoutWrapper(props) {
  const location = useLocation();

  const isDocsPage = location.pathname.startsWith("/docs");
  console.log(props)
  return (
    <>
      <Layout {...props}>
      <BrowserOnly fallback={<div />}>
        {() => {
          const pathname = window.location.pathname;
          const isDocsPage = pathname.startsWith("/docs");
          return isDocsPage ? <SecondaryNavbar /> : null;
        }}
      </BrowserOnly>
      {props.children}
    </Layout>
    </>
  );
}
