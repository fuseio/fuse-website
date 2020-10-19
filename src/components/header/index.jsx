import React, { useState, useRef } from 'react'
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router'
import classNames from 'classnames'
import useOutsideClick from '@/hooks/useOutsideClick.jsx'
import fuseLogo from '@/assets/images/site-logo.svg'
import fuseLogoWhite from '@/assets/images/group_21.svg'

const Header = ({ history, isNetworkHeader = false }) => {
  const [isOpen, setMenuOpen] = useState(false)
  const hamburgerRef = useRef(null)

  useOutsideClick(hamburgerRef, () => {
    if (isOpen) {
      setMenuOpen(false)
    }
  })

  const networkPage = () => history.push('/network')
  const homePage = () => history.push('/')

  return (
    <header className='header__wrapper'>
      <div className='header'>
        <div onClick={homePage} className='header__logo'>
          <img alt="logo" src={isNetworkHeader ? fuseLogoWhite : fuseLogo} />
        </div>
        <button ref={hamburgerRef} type="button" className={classNames('hamburger-button__container', { 'hamburger-button__container--white': isNetworkHeader })} onClick={() => setMenuOpen(!isOpen)} >
          <span className="hamburger-button__top"></span>
          <span className="hamburger-button__middle"></span>
          <span className="hamburger-button__bottom"></span>
        </button>
        <div className={classNames('header__nav', { 'header__nav__open': isOpen })}>
          <div className="header__link__wrapper">
            <a rel="noreferrer noopener" className={classNames('header__link', { 'header__link--white': isNetworkHeader, 'header__link--dark': isNetworkHeader && isOpen })} target='_blank'
              href='https://explorer.fuse.io/'>
              <FormattedMessage
                defaultMessage="Explorer"
              />
            </a>
            <a rel="noreferrer noopener" className={classNames('header__link', { 'header__link--white': isNetworkHeader, 'header__link--dark': isNetworkHeader && isOpen })} target='_blank' href='https://docs.fuse.io/'>
              <FormattedMessage
                defaultMessage="Docs"
              />
            </a>
            <a rel="noreferrer noopener" className={classNames('header__link', { 'header__link--white': isNetworkHeader, 'header__link--selected': isNetworkHeader, 'header__link--dark': isNetworkHeader && isOpen })} target='_blank' role='button' onClick={networkPage}>
              <FormattedMessage
                defaultMessage="Network"
              />
            </a>
          </div>
          <div className="header__icons">
            <a rel="noreferrer noopener" className={classNames('icon', { 'medium': (!isNetworkHeader || isOpen), 'medium--white': isNetworkHeader && !isOpen })} target='_blank' href='https://medium.com/fusenet' />
            <a rel="noreferrer noopener" className={classNames('icon', { 'github': (!isNetworkHeader || isOpen), 'github--white': isNetworkHeader && !isOpen })} target='_blank' href='https://github.com/fuseio' />
            <a rel="noreferrer noopener" className={classNames('icon', { 'twitter': (!isNetworkHeader || isOpen), 'twitter--white': isNetworkHeader && !isOpen })} target='_blank' href='https://twitter.com/fuse_network' />
            <a rel="noreferrer noopener" className={classNames('icon', { 'telegram': (!isNetworkHeader || isOpen), 'telegram--white': isNetworkHeader && !isOpen })} target='_blank' href='https://t.me/fuseio' />
            <a rel="noreferrer noopener" className={classNames('icon', { 'discord': (!isNetworkHeader || isOpen), 'discord--white': isNetworkHeader && !isOpen })} target='_blank'
              href='https://discordapp.com/invite/jpPMeSZ' />
          </div>
          <div className={classNames('header__wallet', { 'header__wallet--yellow': isNetworkHeader })}>
            <a rel="noopener noreferrer" href='https://studio.fuse.io' target="_blank" role="button" >
              <div className="header__wallet__icon"></div>
              <span>
                <FormattedMessage
                  defaultMessage="Fuse studio"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default withRouter(Header)