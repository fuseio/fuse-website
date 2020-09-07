import React from 'react'
import SectionOne from './components/section_1';
import SectionTwo from './components/section_2';
import SectionThree from './components/section_3';
import SectionFour from './components/section_4';
import SectionFive from './components/section_5';
import SectionSix from './components/section_6';
import Footer from '@/components/footer'
import SectionSeven from './components/section_7';

const HomePage = () => {
  return (
    <React.Fragment>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;