import React from 'react'
import FooterLogo from '@/assets/images/group_21.svg'
// import Icons from './icons'
import Links from './links'

function Footer () {
  return (
    <footer className='footer__wrapper'>
      <div className='footer__container grid-x'>
        <div className='footer grid-y align-justify'>
          <div className='footer__item'>
            <div className='footer__logo__wrapper align-center'>
              <a rel='noreferrer noopener' className='footer__logo'>
                <img alt='logo' src={FooterLogo} />
              </a>
            </div>
          </div>
          <div className='grid-x align-justify'>
            <Links />
            {/* <button
              className='main_button main_button--no-arrow'
            >
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='http://eepurl.com/hWyVN5'
              >
                Register for Newsletter
              </a>
            </button> */}
          </div>
        </div>
        <div className='footer__copy-connect-wrapper grid-x align-justify'>
          <div className='footer__copy'>© 2022 Fuse. All Rights Reserved.</div>
          {/* <Icons /> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
