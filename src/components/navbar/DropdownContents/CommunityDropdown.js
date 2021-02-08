import React from 'react'
import {
  DropdownSection
} from './Components'
import Github from '@/assets/images/github1.svg'
import Twitter from '@/assets/images/twitter1.svg'
import Telegram from '@/assets/images/telegram1.svg'
import Discord from '@/assets/images/discord1.svg'
import FuseForum from '@/assets/images/fuse_forum.svg'

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
    title: 'Telegram',
    icon: Telegram,
    url: 'https://t.me/fuseio'
  },
  {
    title: 'Discord',
    icon: Discord,
    url: 'https://discord.com/invite/jpPMeSZ'
  },
  {
    title: 'Fuse Forum',
    icon: FuseForum,
    url: 'https://forum.fuse.io/'
  }
]

const CompanyDropdown = () => {
  return (
    <div className='community_dropdown'>
      <DropdownSection data-first-dropdown-section>
        <ul className='list'>
          {
            items.map(({ title, icon, url }, index) => {
              return (
                <li className='item grid-x align-middle' key={index}>
                  <img src={icon} />
                  <a rel='noreferrer noopener' target='_blank' href={url}>
                    {title}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </DropdownSection>
    </div>
  )
}

export default CompanyDropdown
