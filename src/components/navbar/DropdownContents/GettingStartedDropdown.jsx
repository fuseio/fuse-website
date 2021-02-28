import React from 'react'

import Studio from '@/assets/images/dropdown/studio.svg'
import Staking from '@/assets/images/dropdown/staking.svg'
import Fusecash from '@/assets/images/dropdown/fusecash.svg'
import FuseSwap from '@/assets/images/dropdown/fuseswap.svg'

const items = [
  {
    title: 'Fuse Studio',
    icon: Studio,
    subTitle: 'Create an economy',
    url: 'https://studio.fuse.io'
  },
  {
    title: 'Fuse Staking',
    icon: Staking,
    subTitle: 'Vote & earn Fuse',
    url: 'https://staking.fuse.io'
  },
  {
    title: 'Fuse swap',
    icon: FuseSwap,
    subTitle: 'Trade without fees',
    url: 'https://fuseswap.com/'
  },
  {
    title: 'Fuse Cash',
    icon: Fusecash,
    subTitle: 'Coming soon',
    disabled: true
  }
]

function GettingStartedDropdown () {
  return (
    <div className='community_dropdown'>
      <div data-first-dropdown-section>
        <ul className='list grid-x align-middle align-justify'>
          {
            items.map(({ title, icon, subTitle, disabled, url }, index) => {
              return (
                <li className='item grid-x align-middle cell small-24 medium-12' key={index}>
                  {
                    disabled
                      ? (
                        <>
                          <img src={icon} />
                          <div className='content'>
                            <span>{title}</span>
                            <span className='sub_title'>{subTitle}</span>
                          </div>
                        </>
                        )
                      : (
                        <a rel='noreferrer noopener' className='grid-x align-middle' target='_blank' href={url}>
                          <img src={icon} />
                          <div className='content'>
                            <span>
                              {title}
                            </span>
                            <span className='sub_title'>{subTitle}</span>
                          </div>
                        </a>
                        )
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default GettingStartedDropdown
