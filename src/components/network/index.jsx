import React from 'react'
import SectionOne from '@/components/network/components/section_1';
import SectionTwo from '@/components/network/components/section_2';
import SectionThree from '@/components/network/components/section_3';
import SectionFour from '@/components/network/components/section_4';
import SectionFive from '@/components/network/components/section_5';
import Footer from '@/components/footer'

const Network = () => {
  return (
    <React.Fragment>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer isNetworkFooter />
    </React.Fragment>
  );
};

export default Network;