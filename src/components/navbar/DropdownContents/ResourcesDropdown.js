import React from 'react'
import {
  DropdownSection
} from './Components'

import Explorer from '@/assets/images/dropdown/explorer.svg'
import Docs from '@/assets/images/dropdown/docs.svg'
import Health from '@/assets/images/dropdown/health.svg'
import Token from '@/assets/images/dropdown/token.svg'

const items = [
  {
    title: 'Fuse Explorer',
    icon: Explorer,
    url: 'https://explorer.fuse.io'
  },
  {
    title: 'Documentation',
    icon: Docs,
    url: 'https://docs.fuse.io'
  },
  {
    title: 'Network Health',
    icon: Health,
    url: 'https://health.fuse.io'
  },
  {
    title: 'Fuse Token',
    icon: Token,
    url: 'https://etherscan.io/token/0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d'
  }
]

const ResourcesDropdown = () => {
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

export default ResourcesDropdown
