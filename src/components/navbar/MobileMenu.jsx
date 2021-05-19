import React, { useState, useRef } from 'react'
// import { FormattedMessage } from 'react-intl'
import classNames from 'classnames'
import { withRouter } from 'react-router'
import useOutsideClick from '@/hooks/useOutsideClick'

import SelectLanguage from '../shared/select_language'
import Studio from '@/assets/images/dropdown/studio.svg'
import Staking from '@/assets/images/dropdown/staking.svg'
import Fusecash from '@/assets/images/dropdown/fusecash.svg'
import FuseSwap from '@/assets/images/dropdown/fuseswap.svg'
import Network from '@/assets/images/dropdown/network.svg'
import Docs from '@/assets/images/dropdown/docs.svg'
import Status from '@/assets/images/dropdown/status.svg'
import Explorer from '@/assets/images/dropdown/explorer.svg'
import Discord from '@/assets/images/dropdown/discord_nav.svg'
import Forum from '@/assets/images/dropdown/forum.svg'
import Twitter from '@/assets/images/dropdown/twitter_nav.svg'
import Telegram from '@/assets/images/dropdown/telegram.svg'
import Medium from '@/assets/images/dropdown/medium_nav.svg'
import Github from '@/assets/images/dropdown/github_nav.svg'

const menuItems = [
  {
    title: 'Getting started',
    items: [
      {
        title: 'Studio',
        icon: Studio,
        url: 'https://studio.fuse.io'
      },
      {
        title: 'Staking',
        icon: Staking,
        url: 'https://staking.fuse.io'
      },
      {
        title: 'swap',
        icon: FuseSwap,
        url: 'https://fuseswap.com'
      },
      {
        title: 'Fuse Cash',
        icon: Fusecash,
        url: 'https://fuse.cash'
        // disabled: true
      }
    ]
  },
  {
    title: 'Under the hood',
    items: [
      {
        title: 'Network',
        icon: Network,
        route: './network'
      },
      {
        title: 'Explorer',
        icon: Explorer,
        url: 'https://explorer.fuse.io'
      },
      {
        title: 'Documentation',
        icon: Docs,
        url: 'https://docs.fuse.io'
      },
      {
        title: 'Service status',
        icon: Status,
        url: 'https://status.fuse.io'
      }
    ]
  },
  {
    title: 'Community',
    items: [
      {
        title: 'Github',
        icon: Github,
        url: 'https://github.com/fuseio'
      },
      {
        title: 'Twitter',
        icon: Twitter,
        url: 'https://twitter.com/fuse_network'
      },
      {
        title: 'Discord',
        icon: Discord,
        url: 'https://discordapp.com/invite/jpPMeSZ'
      },
      {
        title: 'Medium',
        icon: Medium,
        url: 'https://medium.com/fusenet'
      },
      {
        title: 'Telegram',
        icon: Telegram,
        url: 'https://t.me/fuseio'
      },
      {
        title: 'Fuse forum',
        icon: Forum,
        url: 'https://forum.fuse.io'
      }
    ]
  }
]

const Item = withRouter(({ title, icon, url, route, history }) => {
  return route
    ? (
      <div className='list__item' onClick={() => history.push(route)}>
        <img src={icon} className='icon' />
        {title}
      </div>
      )
    : (
      <a rel='noreferrer noopener' className='list__item' target='_blank' href={url}>
        <img src={icon} className='icon' />
        {title}
      </a>
      )
})

function List ({ title, items }) {
  return (
    <div className='list'>
      <div className='list__title'>{title}</div>
      {
        items.map((item, index) => <Item {...item} key={index} />)
      }
    </div>
  )
}

function MobileMenu ({ history }) {
  const [isOpen, setMenuOpen] = useState(false)
  const hamburgerRef = useRef(null)

  // const isNetworkHeader = true // history.location.pathname.includes('network')
  const isWhite = !history.location.pathname.includes('about')

  useOutsideClick(hamburgerRef, () => {
    if (isOpen) {
      setMenuOpen(false)
    }
  })

  return (
    <>
      <button ref={hamburgerRef} type='button' className={classNames('hamburger-button__container', { 'hamburger-button__container--white': isWhite })} onClick={() => setMenuOpen(!isOpen)}>
        <span className='hamburger-button__top' />
        <span className='hamburger-button__middle' />
        <span className='hamburger-button__bottom' />
      </button>
      {
        isOpen && (
          <div className='mobile_menu'>
            {
              menuItems.map((item, index) => <List key={index} {...item} />)
            }
            <div className='line' />
            <div className='grid-x align-middle  cell shrink'>
              <SelectLanguage />
              {/* <div className='header__wallet'>
                <a rel='noopener noreferrer' href='https://studio.fuse.io' target='_blank' role='button'>
                  <div className='header__wallet__icon' />
                  <span>
                    <FormattedMessage
                      defaultMessage='Fuse studio'
                    />
                  </span>
                </a>
              </div> */}
            </div>
          </div>
        )
      }
    </>
  )
}

export default withRouter(MobileMenu)
