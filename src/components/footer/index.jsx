import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import FooterLogo from '@/assets/images/site-logo-grad.svg'
import { FormattedMessage } from 'react-intl'

const Footer = ({ history, isNetworkFooter = false }, isAboutFooter) => {
  const networkPage = () => history.push('/network')
  const aboutPage = () => history.push('./about')
  return (
    <footer
      className={classNames('footer__wrapper grid-x', {
        'footer__wrapper--dark': isNetworkFooter || isAboutFooter
      })}
    >
      <div className='footer grid-y'>
        <div className='footer__item'>
          <div className='footer__logo__wrapper align-center'>
            <a rel='noreferrer noopener' className='footer__logo'>
              <img alt='logo' src={FooterLogo} />
            </a>
          </div>
        </div>
        <div className='footer__item'>
          <div className='footer__nav grid-x align-center '>
            <a
              rel='noreferrer noopener'
              target='_blank'
              className='footer__link footer__link--white'
              href='https://explorer.fuse.io/'
            >
              <FormattedMessage defaultMessage='Explorer' />
            </a>
            <a
              rel='noreferrer noopener'
              className='footer__link footer__link--white'
              target='_blank'
              href='https://docs.fuse.io/'
            >
              <FormattedMessage defaultMessage='Docs' />
            </a>
            <a
              rel='noreferrer noopener'
              className='footer__link footer__link--white'
              target='_blank'
              role='button'
              onClick={networkPage}
            >
              <FormattedMessage defaultMessage='Network' />
            </a>
            <a
              rel='noreferrer noopener'
              className='footer__link footer__link--white'
              target='_blank'
              role='button'
              onClick={aboutPage}
            >
              <FormattedMessage defaultMessage='About Us' />
            </a>
          </div>
        </div>
        <div className='footer__item'>
          <div className='footer__icons grid-x align-center'>
            <a
              rel='noreferrer noopener'
              className='footer__icon cell shrink'
              target='_blank'
              href='https://medium.com/fusenet'
            >
              <div className='medium image' />
            </a>
            <a
              rel='noreferrer noopener'
              className='footer__icon cell shrink'
              target='_blank'
              href='https://github.com/fuseio'
            >
              <div className='github image' />
            </a>
            <a
              rel='noreferrer noopener'
              className='footer__icon cell shrink'
              target='_blank'
              href='https://twitter.com/fuse_network'
            >
              <div className='twitter image' />
            </a>
            <a
              rel='noreferrer noopener'
              className='footer__icon cell shrink'
              target='_blank'
              href='https://discordapp.com/invite/jpPMeSZ'
            >
              <div className='discord image' />
            </a>
            <a
              rel='noreferrer noopener'
              className='footer__icon cell shrink'
              target='_blank'
              href='https://t.me/fuseio'
            >
              <div className='telegram image' />
            </a>
          </div>
        </div>
        <div className='footer__item '>
          <div className='grid-x align-center'>
            <span className='footer__copyright'>© 2021 Fuse</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default withRouter(Footer)
