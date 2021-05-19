import React from 'react'
import SectionOne from './components/section_1'
import SectionTwo from './components/section_2'
import SectionThree from './components/section_3'
import SectionFour from './components/section_4'
import SectionFive from './components/section_5'
import SectionSix from './components/section_6'
import ContactUs from '@/components/shared/ContactUs'

const HomePage = () => {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <SectionFour />
      <SectionSix />
      <ContactUs />
    </>
  )
}

export default HomePage
