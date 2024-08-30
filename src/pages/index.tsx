import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '../components/HomePage/hero.section';
import WhatIsRaFramework from '../components/HomePage/what-is-ra-framework';


export default class extends React.PureComponent {
  render() {
    return (
      <Layout
        title="RA Framework"
        description='RA Framework is a component library that enables developers to build universal design systems. It is built on top of React Native, allowing you to develop apps for Android, iOS, and the Web.'>
        <HeroSection />
        <WhatIsRaFramework />
      </Layout>
    );
  }
}