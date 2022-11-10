import React from 'react'
import StackImage from '@/assets/images/stack.png'

function SectionFive () {
  return (
    <section className='section_5__wrapper'>
      <div className='section_5'>
        <div className='title'>Vertical integration for payments</div>
        <div className='text'>Fuse was designed to be friendly for blockchain and non-blockchain developers alike. The stack is interoperable and compatible with the EVM ecosystem while still enabling the business needs of regular businesses wishing to utilize this disruptive technology.</div>
        <div className='content'>
          <div className='item'>
            <div className='title'>Easy user onboarding</div>
            <div className='text'>Every day retail consumers are more difficult to satisfy than crypto investors. Remove obstacles to enable quality consumer experiences while keeping with the non custodial and decentralized nature of the tech.</div>
          </div>
          <img src={StackImage} />
          <div className='item'>
            <div className='title'>Friendly for businesses</div>
            <div className='text'>Businesses in the real world require scalable infrastructure and have constantly evolving needs. Remove web3 development complexity in order to rapidly ship products that introduce disruptive models to the payments space.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFive
