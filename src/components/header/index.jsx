import React, { useState, useRef } from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import useOutsideClick from '@/hooks/useOutsideClick.jsx'
import fuseLogo from '@/assets/images/site-logo.svg'
import fuseLogoWhite from '@/assets/images/site-logo-white.svg'

const Header = ({ history, isNetworkHeader = false }) => {
  const [isOpen, setMenuOpen] = useState(false)
  const hamburgerRef = useRef(null)

  useOutsideClick(hamburgerRef, () => {
    if (isOpen) {
      setMenuOpen(false)
    }
  })

  const networkPage = () => history.push('/network')

  return (
    <header className={classNames('header__wrapper', { 'header__wrapper--absolute': isNetworkHeader })}>
      <div className='header'>
        <a className='header__logo'>
          <img alt="logo" src={isNetworkHeader ? fuseLogoWhite : fuseLogo} />
        </a>
        <button ref={hamburgerRef} type="button" className="hamburger-button__container" onClick={() => setMenuOpen(!isOpen)} >
          <span className="hamburger-button__top"></span>
          <span className="hamburger-button__middle"></span>
          <span className="hamburger-button__bottom"></span>
        </button>
        <div className={classNames('header__nav', { 'header__nav__open': isOpen })}>
          <div className="header__link__wrapper">
            <a rel="noreferrer noopener" className={classNames('header__link', { 'header__link--white': isNetworkHeader })} target='_blank'
              href='https://explorer.fuse.io/'>Explorer</a>
            <a rel="noreferrer noopener" className={classNames('header__link', { 'header__link--white': isNetworkHeader })} target='_blank' href='https://docs.fuse.io/'>Docs</a>
            <a rel="noreferrer noopener" className={classNames('header__link', { 'header__link--white': isNetworkHeader, 'header__link--selected': isNetworkHeader })} target='_blank' role='button' onClick={networkPage}>Network</a>
          </div>
          <div className="header__icons">
            <a rel="noreferrer noopener" className={classNames('icon', { 'medium': !isNetworkHeader, 'medium--white': isNetworkHeader })} target='_blank' href='https://medium.com/fusenet' />
            <a rel="noreferrer noopener" className={classNames('icon', { 'github': !isNetworkHeader, 'github--white': isNetworkHeader })} target='_blank' href='https://github.com/fuseio' />
            <a rel="noreferrer noopener" className={classNames('icon', { 'twitter': !isNetworkHeader, 'twitter--white': isNetworkHeader })} target='_blank' href='https://twitter.com/fuse_network' />
            <a rel="noreferrer noopener" className={classNames('icon', { 'telegram': !isNetworkHeader, 'telegram--white': isNetworkHeader })} target='_blank' href='https://t.me/fuseio' />
            <a rel="noreferrer noopener" className={classNames('icon', { 'discord': !isNetworkHeader, 'discord--white': isNetworkHeader })} target='_blank'
              href='https://discordapp.com/invite/jpPMeSZ' />
          </div>
          <div className={classNames('header__wallet', { 'header__wallet--yellow': isNetworkHeader })}>
            <a rel="noopener noreferrer" href='https://studio.fuse.io' target="_blank" role="button" >
              <div className="header__wallet__icon"></div>
              <span>Connect wallet</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default withRouter(Header)