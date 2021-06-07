import React from 'react'
import FooterLogo from '@/assets/images/group_21.svg'
import Icons from './icons'
import Links from './links'

function Footer () {
  return (
    <footer className='footer__wrapper grid-x'>
      <div className='footer grid-x align-justify'>
        <div className='footer__item'>
          <div className='footer__logo__wrapper align-center'>
            <a rel='noreferrer noopener' className='footer__logo'>
              <img alt='logo' src={FooterLogo} />
            </a>
          </div>
        </div>
        <Links />
        <Icons />
      </div>
      <div className='footer__copy'>
      © 2021 Fuse. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
