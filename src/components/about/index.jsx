import React from 'react'
import SectionOne from './components/section_1';
import SectionTwo from './components/section_2';
import SectionThree from './components/section_3';
import SectionFour from './components/section_4';
import ContactUs from "@/components/shared/ContactUs"
import Footer from '@/components/footer'

const About = () => {
  return (
    <React.Fragment>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <ContactUs />
      <Footer isNetworkFooter />
    </React.Fragment>
  )
}

export default About
