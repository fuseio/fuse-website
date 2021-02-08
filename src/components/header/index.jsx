import React, { useState, useRef } from 'react'
import { FormattedMessage } from 'react-intl'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import useOutsideClick from '@/hooks/useOutsideClick.jsx'
import fuseLogo from '@/assets/images/site-logo.svg'
import fuseLogoWhite from '@/assets/images/group_21.svg'
import AnimatedNavbar from '@/components/navbar/AnimatedNavbar'
import SelectLanguage from '../shared/select_language'

const Header = ({ history, isNetworkHeader = false, isAboutHeader = false }) => {
  const [isOpen, setMenuOpen] = useState(false)
  const hamburgerRef = useRef(null)

  useOutsideClick(hamburgerRef, () => {
    if (isOpen) {
      setMenuOpen(false)
    }
  })

  const aboutPage = () => history.push('/about')
  const homePage = () => history.push('/')
  return (
    <header className='header__wrapper'>
      <div className='header'>
        <div onClick={homePage} className='header__logo'>
          <img alt='logo' src={isNetworkHeader || isAboutHeader ? fuseLogoWhite : fuseLogo} />
        </div>
        <button ref={hamburgerRef} type='button' className={classNames('hamburger-button__container', { 'hamburger-button__container--white': isNetworkHeader || isAboutHeader })} onClick={() => setMenuOpen(!isOpen)}>
          <span className='hamburger-button__top' />
          <span className='hamburger-button__middle' />
          <span className='hamburger-button__bottom' />
        </button>
        <div className='grid-x align-middle'>
          <AnimatedNavbar
            duration={300}
            isNetworkHeader={isNetworkHeader}
            isAboutHeader={isAboutHeader}
          />
          <div className='nav__item' onClick={aboutPage}>
            <button className={classNames('text', { 'text--white': (isNetworkHeader || isAboutHeader) })}>
              About us
            </button>
          </div>
          <div className='nav__item' onClick={aboutPage}>
            <a
              rel='noreferrer noopener'
              className={classNames('text', { 'text--white': (isNetworkHeader || isAboutHeader) })}
              target='_blank'
              href='https://medium.com/fusenet'
            >
              Blog
            </a>
          </div>
          <SelectLanguage
            isNetworkHeader={isNetworkHeader}
            isAboutHeader={isAboutHeader}
          />
        </div>
        <div className={classNames('header__wallet', { 'header__wallet--yellow': isNetworkHeader || isAboutHeader })}>
          <a rel='noopener noreferrer' href='https://studio.fuse.io' target='_blank' role='button'>
            <div className='header__wallet__icon' />
            <span>
              <FormattedMessage
                defaultMessage='Fuse studio'
              />
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default withRouter(Header)
