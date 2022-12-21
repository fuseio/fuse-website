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
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://form.typeform.com/to/DimM2qve#hubspot_utk=xxxxx&hubspot_page_name=xxxxx&hubspot_page_url=xxxxx'
            >
              <button
                className='primary_button'
              >
                Contact us
              </button>
            </a>
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
