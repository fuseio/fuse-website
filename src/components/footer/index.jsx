import React from 'react'
import FooterLogo from '@/assets/images/group_21.svg'
import Icons from './icons'
import Links from './links'

function Footer () {
  return (
    <footer className='footer__wrapper'>
      <div className='footer'>
        <div className='footer__item'>
          <div className='footer__logo__wrapper align-center'>
            <a rel='noreferrer noopener' className='footer__logo'>
              <img alt='logo' src={FooterLogo} />
            </a>
          </div>
          {/* <span className='footer__copyright'>© 2021 Fuse</span> */}
        </div>
        <Links />
        <Icons />
      </div>
    </footer>
  )
}

export default Footer
