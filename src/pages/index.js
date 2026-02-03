import { React, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import SearchBar from '@theme/SearchBar';
import { motion } from 'framer-motion';
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
  ArrowRightIconsm,
} from '../../static/img/svg';
import { ArrowRight, SearchIcon } from 'lucide-react';

const envData = [
  {
    id: 1,
    icon: '/img/icon/ui-icon.svg',
    title: 'User Interfaces',
    desc: 'Create scalable web mobile interfaces',
    link: '/docs/user-interfaces/web/concepts/overview',
  },
  {
    id: 2,
    icon: '/img/icon/ds-icon.svg',
    title: 'Design System',
    desc: 'Scalable foundations for consistent design ',
    link: '/docs/design-system/concepts/',
  },
  {
    id: 3,
    icon: '/img/icon/aira.svg',
    title: 'Developing with Agents',
    desc: 'Suite of Agents for Developer Workflows',
    link: '/docs/developing-with-agents/overview',
  },
  {
    id: 4,
    icon: '/img/icon/api-icon.svg',
    title: "API's & Microservices",
    desc: 'Reliable services for modern applications',
    link: '/docs/apis-and-services/concepts/overview',
  },
  {
    id: 5,
    icon: '/img/icon/studio-icon.svg',
    title: 'Platform',
    desc: 'Visual tools to build experiences ',
    link: '/docs/studio/overview',
  },
  {
    id: 6,
    icon: '/img/icon/build-icon.svg',
    title: 'Build & Deploy',
    desc: 'From code to production faster',
    link: '/docs/build-and-deploy/overview',
  },
];

const resourcesData = [
  {
    id: 1,
    icon: <HeadphoneIcon />,
    title: 'Tutorial Library',
    desc: 'Hands-on tutorials to help you learn specific features like data binding, prefabs, workflows, and integrations. ',
  },
  {
    id: 2,
    icon: <PerformanceIcon />,
    title: 'Performance Optimization',
    desc: 'Optimize load performance, API response times, data binding, and runtime behavior with practical tips. ',
  },
  {
    id: 3,
    icon: <GuideIcon />,
    title: 'Platform Guide',
    desc: 'A high-level introduction to Wavemaker, its core capabilities, architecture, and how everything fits together.',
  },
  {
    id: 4,
    icon: <ProductIcon />,
    title: 'Product',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
  },
  {
    id: 5,
    icon: <ReferenceIcon />,
    title: 'API Reference',
    desc: 'A detailed reference for all Wavemaker APIs, events, methods, widgets, and advanced extensibility features. ',
  },
  {
    id: 6,
    icon: <FAQsIcon />,
    title: 'Troubleshooting & FAQs',
    desc: 'Find quick answers to common issues, configuration problems, and environment-related questions. ',
  },
];

export function EnvList({ prop }) {
  return (
    <ul className="env-list-group">
      {prop.map(item => {
        const content = (
          <>
            <div className="icon-svg">
              <img src={item.icon} />
            </div>
            <div className="content-wrapper">
              <div>
                <h4 className="env-item-heading">{item.title}</h4>
                <p className="env-item-desc line-clamp-2">{item.desc}</p>
              </div>
              <div className="arrow-icon-wrapper">
                <ArrowRight size={18} />
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
      {prop.map(item => {
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
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
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
        <div className="section-bg-wrapper content-space">
          <motion.section
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="top-banner-section"
          >
            <h1 className="text-greeting">
              Hello, how can we{' '}
              <span className="search-div ">
                <SearchIcon size={18} />
              </span>{' '}
              help?
            </h1>
            <p className="text-greeting-desc">
              Find answers and inspiration on all things WaveMaker.
            </p>
            <SearchBar />
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 240 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="env-list-section"
          >
            <EnvList prop={envData} />
          </motion.section>
        </div>
        <div className="rightside-img-section">
          <section className="section-space">
            <div className="left-content">
              <span className="highlight-span">Explore</span>
              <h2 className="title">
                Become A Certified
                <br /> Developer
              </h2>
              <p className="desc">
                Discover the WaveMaker Academy and explore a curated set of expert-led courses. Gain
                the knowledge you need to build confidently with WaveMaker.
              </p>
              <Link to="https://next-academy.wavemaker.com/" className="button button--primary">
                Go to Academy
              </Link>
            </div>
            <div className="right-content">
              <img src="/img/section-img/certification.gif" />
            </div>
          </section>
        </div>
        <div className="leftside-img-section">
          <section className="section-space">
            <div className="left-content">
              <img src="/img/section-img/theme-docs.gif" />
            </div>
            <div className="right-content">
              <span className="highlight-span">What's New</span>
              <h2 className="title">Marketplace</h2>
              <p className="desc">
                A library for developers in the WaveMaker community, where they can access
                ready-to-use artifacts and also contribute back to the ecosystem.
              </p>
              <Link
                to="https://next-marketplace.onwavemaker.com/"
                className="button button--primary"
              >
                Start Building
              </Link>
            </div>
          </section>
        </div>

        {/* <section className="resources-list-section">
          <h3 className="section-title">Additional Resources</h3>
          <ResourceList prop={resourcesData} />
        </section> */}
        <div className="content-space">
          <section className="bottom-banner-section">
            <div className="left-content">
              <img src="/img/background/bottom-banner-left-Illustration.svg" />
            </div>
            <div className="right-content">
              <h2 className="title">WaveMaker UI Kit</h2>
              <p className="desc">
                Discover the Wavemaker Academy and explore a curated set of expert-led courses. Gain
                the knowledge you need to build confidently with Wavemaker.
              </p>
              <Link
                to="https://www.figma.com/community/file/1463103184874870889"
                className="button button__white"
              >
                Open in Figma
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
