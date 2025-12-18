import { React, useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import SearchBar from "@theme-original/SearchBar";
import { motion } from "framer-motion";
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
  ArrowRightIcon,
  ArrowRightIconsm
} from "../../static/img/svg";

const envData = [
  {
    id: 1,
    icon: "/img/icon/wavemaker-uikit.svg",
    title: "Design System",
    desc: "Scalable foundations for consistent design ",
    link: "/docs/design-system/overview",
  },
  {
    id: 2,
    icon: "/img/icon/aira.svg",
    title: "Developing with Agents",
    desc: "Scalable foundations for consistent design",
    link: "/docs/developing_with_agents/overview",
  },
  {
    id: 3,
    icon: "/img/wm-logo.svg",
    title: "Studio",
    desc: "Visual tools to build experiences ",
    link: "/docs/studio/overview",
  },
  {
    id: 4,
    icon: "/img/icon/userInterfaceicon.svg",
    title: "User Interfaces",
    desc: "Create scalable web mobile interfaces",
    link: "/docs/user_interfaces/Concepts/Overview",
  },
  {
    id: 5,
    icon: "/img/icon/apiIcon.svg",
    title: "API's & Microservices",
    desc: "Reliable services for modern applications",
    link: "/docs/apis_and_services/Concepts/overview",
  },
  {
    id: 6,
    icon: "/img/icon/buildicon.svg",
    title: "Build & Deploy",
    desc: "From code to production faster",
    link: "/docs/build_and_deploy/overview",
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
            <div className="icon-svg">
              <img src={item.icon} />
            </div>
            <div className="content-wrapper">
              <div>
                <h4 className="env-item-heading">{item.title}</h4>
                <p className="env-item-desc">{item.desc}</p>
              </div>
              <div className="arrow-icon-wrapper">
                <ArrowRightIconsm/>
              </div>
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

export function DisableScrollRestore() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      <DisableScrollRestore />
      <main className="main-wrapper-homepage">
        <motion.section
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="top-banner-section"
        >
          <h1 className="font-lg">Hello, how can we help?</h1>
          <p>Find answers and inspiration on all things WaveMaker.</p>
          <SearchBar />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 240 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="env-list-section"
        >
          <EnvList prop={envData} />
        </motion.section>
        <section className="rightside-img-section">
          <div className="left-content">
            <span className="highlight-span">Explore</span>
            <h2 className="title">
              Become A Certified
              <br /> Developer
            </h2>
            <p className="desc">
              Discover the WaveMaker Academy and explore a curated set of
              expert-led courses. Gain the knowledge you need to build
              confidently with WaveMaker.
            </p>
            <Link
              to="https://next-academy.onwavemaker.com/"
              className="button button--dark"
            >
              Go to Academy
            </Link>
          </div>
          <div className="right-content">
            <img src="/img/section-img/courses-Illustration.svg" />
          </div>
        </section>
        <section className="leftside-img-section">
          <div className="left-content">
            <img src="/img/section-img/marketplace-Illustration.svg" />
          </div>
          <div className="right-content">
            <span className="highlight-span">What's New</span>
            <h2 className="title">Marketplace</h2>
            <p className="desc">
              A library for developers in the WaveMaker community, where they
              can access ready-to-use artifacts and also contribute back to the
              ecosystem.
            </p>
            <Link
              to="https://next-marketplace.onwavemaker.com/"
              className="button button--dark"
            >
              Start Building
            </Link>
          </div>
        </section>
        {/* <section className="resources-list-section">
          <h3 className="section-title">Additional Resources</h3>
          <ResourceList prop={resourcesData} />
        </section> */}

        <section className="bottom-banner-section">
          <div className="left-content">
            <img src="/img/background/bottom-banner-left-Illustration.svg" />
          </div>
          <div className="right-content">
            <h2 className="title">WaveMaker UI Kit</h2>
            <p className="desc">
              Discover the Wavemaker Academy and explore a curated set of
              expert-led courses. Gain the knowledge you need to build
              confidently with Wavemaker.
            </p>
            <button className="button button__white">
              Go to Academy <ArrowRightIcon color="#fff"  />
            </button>
          </div>
        </section>
      </main>
    </Layout>
  );
}
