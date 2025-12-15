import React from "react";
import Layout from "@theme-original/Layout";
import { useLocation } from "@docusaurus/router";
import SecondaryNavbar from "@site/src/components/TopNav/TopNav";

export default function LayoutWrapper(props) {
  const location = useLocation();

  const isDocsPage = location.pathname.startsWith("/docs");
  return (
    <>
      <Layout {...props}>
      {isDocsPage && <SecondaryNavbar />}
      {props.children}
    </Layout>
    </>
  );
}
