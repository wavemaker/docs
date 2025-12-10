import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import SearchBar from "@theme-original/SearchBar";
import { BugIcon,BulbIcon,PackageIcon,DatabaseIcon,CpuIcon,DesignIcon } from "../../static/img/icon";

const envData = [
  {
    id: 1,
    icon: <BulbIcon classname="card-icon"/>,
    title: "Building User Interfaces",
    desc: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. ",
  },
  {
    id: 2,
    icon: <BugIcon classname="card-icon"/>,
    title: "Building  API’s & Microservices",
    desc: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. ",
  },
  {
    id: 3,
    icon:<DatabaseIcon classname="card-icon"/>,
    title: "Build & Deploy",
    desc: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. ",
  },
  {
    id: 4,
    icon: <DesignIcon classname="card-icon"/>,
    title: "Design System",
    desc: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. ",
  },
  {
    id: 5,
    icon: <CpuIcon classname="card-icon"/>,
    title: "Agentic Development",
    desc: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. ",
  },
  {
    id: 6,
    icon:<PackageIcon/>,
    title: "Studio",
    desc: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. ",
  },
];
export function EnvList({ prop }) {
  return (
    <ul className="env-list-group">
      {prop.map((item) => {
        return (
          <li className="env-list-item" key={item.id}>
            <div className="img-wrapper">
              {item.icon}
            </div>
            <div className="content-wrapper">
              <h4 className="env-item-heading">{item.title}</h4>
              <p className="env-item-desc">{item.desc}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <main className="main-wrapper-homepage">
        <section className="top-banner-section">
          <h1 className="font-lg">Support & Documentation</h1>
          <p>
            Clear, structured documentation to help you solve real problems
            fast.
          </p>
          <SearchBar />
        </section>
        <section className="env-list-section">
          <EnvList prop={envData} />
        </section>
        <section className="rightside-img-section"></section>
        <section className="leftside-img-section"></section>
        <section className="resources-list-section"></section>
        <section className="message-section"></section>
      </main>
    </Layout>
  );
}
