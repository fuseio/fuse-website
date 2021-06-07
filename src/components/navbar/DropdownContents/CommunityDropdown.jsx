import React from 'react'

import Discord from '@/assets/images/dropdown/discord_nav.svg'
import Forum from '@/assets/images/dropdown/forum.svg'
import Twitter from '@/assets/images/dropdown/twitter_nav.svg'
import Telegram from '@/assets/images/dropdown/telegram.svg'
import Medium from '@/assets/images/dropdown/medium_nav.svg'
import Github from '@/assets/images/dropdown/github_nav.svg'
import Arrow from '@/assets/images/dropdown/drop_arrow.svg'
import { FormattedMessage } from 'react-intl'

const items = [
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
    title: <FormattedMessage defaultMessage='Fuse Forum' />,
    icon: Forum,
    url: 'https://forum.fuse.io'
  }
]

function CommunityDropdown () {
  return (
    <div className='community_dropdown'>
      <div data-first-dropdown-section>
        <ul className='list grid-x align-middle align-justify'>
          {
            items.map(({ title, icon, url }, index) => (
              <li
                className='item grid-x align-middle cell small-24 medium-8'
                key={index}
              >
                <a
                  rel='noreferrer noopener'
                  className='item__wrapper'
                  target='_blank'
                  href={url}
                >
                  <img src={icon} />
                  <div className='content'>
                    <button className='title'>
                      <span>{title}</span>
                      <img className='arrow' src={Arrow} />
                    </button>
                  </div>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default CommunityDropdown
