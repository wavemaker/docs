import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout> 
      <main className='main-wrapper-homepage'>
       <section className='top-banner-section'>

       </section>
      </main>
    </Layout>
  );
}
