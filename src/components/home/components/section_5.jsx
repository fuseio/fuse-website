import React from 'react'
import StackImage from '@/assets/images/stack.png'
import Github from '@/assets/images/github_btn.svg'
import Charge from '@/assets/images/charge_btn.svg'

function SectionFive () {
  return (
    <div className='section_5'>
      <div className='content'>
        <div className='title'>Vertical integration for payments</div>
        <div className='text'>Fuse was designed to be friendly for blockchain and non-blockchain developers alike. The stack is interoperable and compatible with the EVM ecosystem while still enabling the business needs of regular businesses wishing to utilize this disruptive technology.</div>
        <div className='buttons'>
          <a
            className='github'
            rel='noopener noreferrer'
            href='https://github.com/fuseio'
            target='_blank'
          >
            <img src={Github} />
            Go to Github
          </a>

          <a
            className='charge'
            rel='noopener noreferrer'
            href='https://chargeweb3.com/'
            target='_blank'
          >
            <img src={Charge} />
            Go to charge
          </a>
        </div>
      </div>
      <div className='image'>
        <img src={StackImage} />
      </div>
    </div>
  )
}

export default SectionFive
