import React, { useState, useRef } from 'react'
// import { FormattedMessage } from 'react-intl'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import useOutsideClick from '@/hooks/useOutsideClick.jsx'
import fuseLogo from '@/assets/images/site-logo.svg'
import fuseLogoWhite from '@/assets/images/group_21.svg'
import AnimatedNavbar from '@/components/navbar/AnimatedNavbar'
import SelectLanguage from '../shared/select_language'
import MobileMenu from './MobileMenu'

function Header ({ history }) {
  const [isOpen, setMenuOpen] = useState(false)
  const hamburgerRef = useRef(null)

  const isNetworkHeader = history.location.pathname.includes('network')
  const isAboutHeader = history.location.pathname.includes('about')

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
        <MobileMenu />
        <div className={classNames('header__nav grid-x align-middle align-justify', { header__nav__open: isOpen })}>
          <div className='header__link__wrapper cell large-auto'>
            <AnimatedNavbar
              duration={300}
              isNetworkHeader={isNetworkHeader}
              isAboutHeader={isAboutHeader}
            />
            <div className='nav__item' onClick={aboutPage}>
              <a
                rel='noreferrer noopener'
                className={classNames('text', { 'text--white': (isNetworkHeader || isAboutHeader) })}
                target='_blank'
              >
                About
              </a>
            </div>
          </div>
          <div className='grid-x align-middle  cell shrink'>
            <SelectLanguage
              isNetworkHeader={isNetworkHeader}
              isAboutHeader={isAboutHeader}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default withRouter(Header)
