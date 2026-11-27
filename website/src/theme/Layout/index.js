import React from 'react';
import Layout from '@theme-original/Layout';
import ClassicBanner from './ClassicBanner';

export default function LayoutWrapper(props) {
  return (
    <Layout {...props}>
      <ClassicBanner />
      {props.children}
    </Layout>
  );
}
