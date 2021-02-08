import React from 'react'
import {
  DropdownSection
} from './Components'

import Network from '@/assets/images/dropdown/network.svg'
import Studio from '@/assets/images/dropdown/studio.svg'
import Staking from '@/assets/images/dropdown/staking.svg'
import Reward from '@/assets/images/dropdown/reward.svg'
import FuseSwap from '@/assets/images/dropdown/fuseswap.svg'

const items = [
  {
    title: 'Network',
    icon: Network,
    url: 'https://explorer.fuse.io'
  },
  {
    title: 'Fuse Studio',
    icon: Studio,
    url: 'https://studio.fuse.io'
  },
  {
    title: 'Fuse swap',
    icon: FuseSwap,
    url: 'https://fuseswap.io'
  },
  {
    title: 'Fuse Staking',
    icon: Staking,
    url: 'https://staking.fuse.io'
  },
  {
    title: 'Fuse LP Rewards',
    icon: Reward,
    url: 'https://rewards.fuse.io'
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
