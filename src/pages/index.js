import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import SearchBar from "@theme-original/SearchBar";
import {
  BugIcon,
  BulbIcon,
  PackageIcon,
  DatabaseIcon,
  CpuIcon,
  DesignIcon,
  HeadphoneIcon,
  PerformanceIcon,
  GuideIcon,
  ProductIcon,
  ReferenceIcon,
  FAQsIcon,
} from "../../static/img/svg";

const envData = [
  {
    id: 1,
    icon: <BulbIcon />,
    title: "Building User Interfaces",
    desc: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. ",
    link: "/",
  },
  {
    id: 2,
    icon: <BugIcon />,
    title: "Building  API's & Microservices",
    desc: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. ",
    link: "/",
  },
  {
    id: 3,
    icon: <DatabaseIcon />,
    title: "Build & Deploy",
    desc: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. ",
    link: "/",
  },
  {
    id: 4,
    icon: <DesignIcon />,
    title: "Design System",
    desc: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. ",
    link: "/docs/dummy-docs/design-system/Mobile/components",
  },
  {
    id: 5,
    icon: <CpuIcon />,
    title: "Agentic Development",
    desc: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. ",
    link: "/docs/dummy-docs/ai-agents/agents",
  },
  {
    id: 6,
    icon: <PackageIcon />,
    title: "Studio",
    desc: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. ",
    link: "dummy-docs/platform/",
  },
];

const resourcesData = [
  {
    id: 1,
    icon: <HeadphoneIcon />,
    title: "Tutorial Library",
    desc: "Hands-on tutorials to help you learn specific features like data binding, prefabs, workflows, and integrations. ",
  },
  {
    id: 2,
    icon: <PerformanceIcon />,
    title: "Performance Optimization",
    desc: "Optimize load performance, API response times, data binding, and runtime behavior with practical tips. ",
  },
  {
    id: 3,
    icon: <GuideIcon />,
    title: "Platform Guide",
    desc: "A high-level introduction to Wavemaker, its core capabilities, architecture, and how everything fits together.",
  },
  {
    id: 4,
    icon: <ProductIcon />,
    title: "Product",
    desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    id: 5,
    icon: <ReferenceIcon />,
    title: "API Reference",
    desc: "A detailed reference for all Wavemaker APIs, events, methods, widgets, and advanced extensibility features. ",
  },
  {
    id: 6,
    icon: <FAQsIcon />,
    title: "Troubleshooting & FAQs",
    desc: "Find quick answers to common issues, configuration problems, and environment-related questions. ",
  },
];

export function EnvList({ prop }) {
  return (
    <ul className="env-list-group">
      {prop.map((item) => {
        const content = (
          <>
            <div className="img-wrapper">{item.icon}</div>
            <div className="content-wrapper">
              <h4 className="env-item-heading">{item.title}</h4>
              <p className="env-item-desc">{item.desc}</p>
            </div>
          </>
        );

        return (
          <li className="env-list-item" key={item.id}>
            {item.link ? (
              <Link to={item.link} className="env-item-link">
                {content}
              </Link>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ul>
  );
}
export function ResourceList({ prop }) {
  return (
    <ul className="res-list-group">
      {prop.map((item) => {
        return (
          <li className="res-list-item" key={item.id}>
            <div className="img-wrapper">{item.icon}</div>
            <div className="content-wrapper">
              <h4 className="res-item-heading">{item.title}</h4>
              <p className="res-item-desc">{item.desc}</p>
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
        <section className="rightside-img-section">
          <div className="left-content">
            <span className="highlight-span">What’s New</span>
            <h2 className="title">
              Developer <br />
              Quickstart Series
            </h2>
            <p className="desc">
              Short, structured guides to help new developers build,
              <br /> deploy, and scale apps in minutes.
            </p>
            <button className="button button--dark">Get Started</button>
          </div>
          <div className="right-content">
            <img src="/img/section-img/RightIllustration.svg" />
          </div>
        </section>
        <section className="leftside-img-section">
          <div className="left-content">
            <img src="/img/section-img/IllustrationLeft.svg" />
          </div>
          <div className="right-content">
            <span className="highlight-span">What’s New</span>
            <h2 className="title">Wavemaker UI Kits</h2>
            <p className="desc">
              A curated set of reusable UI elements, patterns, and templates to
              help you design and ship applications faster.
            </p>
            <button className="button button--dark">Get Started</button>
          </div>
        </section>
        <section className="resources-list-section">
          <h3 className="section-title">Additional Resources</h3>
          <ResourceList prop={resourcesData}/>
        </section>
        <section className="message-section"></section>
      </main>
    </Layout>
  );
}
