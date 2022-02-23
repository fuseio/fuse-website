import React from 'react'
import FooterLogo from '@/assets/images/group_21.svg'
import Icons from './icons'
import Links from './links'
import SendMail from './send_email'

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
            <SendMail />
          </div>
        </div>
        <div className='footer__copy-connect-wrapper grid-x align-justify'>
          <div className='footer__copy'>© 2021 Fuse. All Rights Reserved.</div>
          <Icons />
        </div>
      </div>
    </footer>
  )
}

export default Footer
