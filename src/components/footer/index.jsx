import React from 'react'
import classNames from 'classnames'
import FooterLogo from '@/assets/images/site-logo-grad.svg'
import Icons from './icons'
import Links from './links'
// import { FormattedMessage } from 'react-intl'

const Footer = ({ isNetworkFooter = false }, isAboutFooter) => {
  const wrapperClasses = classNames('footer__wrapper grid-x', {
    'footer__wrapper--dark': isNetworkFooter || isAboutFooter
  })

  return (
    <footer className={wrapperClasses}>
      <div className='footer grid-x align-justify'>
        <div className='footer__item'>
          <div className='footer__logo__wrapper align-center'>
            <a rel='noreferrer noopener' className='footer__logo'>
              <img alt='logo' src={FooterLogo} />
            </a>
          </div>
          <span className='footer__copyright'>© 2021 Fuse</span>
        </div>
        <Links />
        <Icons />
      </div>
    </footer>
  )
}

export default Footer
