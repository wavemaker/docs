import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SearchBar from '@theme-original/SearchBar';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout> 
      <main className='main-wrapper-homepage'>
       <section className='top-banner-section'>
         <h1 className='font-lg'>Support & Documentation</h1>
         <p>Clear, structured documentation to help you solve real problems fast.</p>
         <SearchBar/>
       </section>
       <section className='env-list-section'>
         
       </section>
       <section className='rightside-img-section'>
         
       </section>
       <section className='leftside-img-section'>
         
       </section>
       <section className='resources-list-section'>
         
       </section>
       <section className='message-section'>
         
       </section>
       
      </main>
    </Layout>
  );
}
