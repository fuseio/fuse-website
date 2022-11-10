import React from 'react'
import SectionOne from './components/section_1'
import SectionTwo from './components/section_2'
import SectionThree from './components/section_3'
import SectionFour from './components/section_4'
import SectionFive from './components/section_5'
import SectionSix from './components/section_6'
import SectionSeven from './components/section_7'
import SectionEight from './components/section_8'

const HomePage = () => {
  return (
    <>
      <div style={{ position: 'relative', backgroundColor: '#FAFCFF' }}>
        <SectionOne />
        <SectionTwo />
      </div>
      <SectionThree />
      <div className='test_wraper'>
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </div>
      <SectionSeven />
      <SectionEight />
    </>
  )
}

export default HomePage
