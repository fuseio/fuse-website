import React from 'react'

import Medium from '@/assets/img/social/medium.svg'
import Discord from '@/assets/img/social/discord.svg'
import GitHub from '@/assets/img/social/github.svg'
import Telegram from '@/assets/img/social/telegram.svg'
import Twitter from '@/assets/img/social/twitter.svg'


const socialLinks = [
  {
    url: 'https://medium.com/fusenet',
    icon: Medium
  },
  {
    url: 'https://github.com/fuseio',
    icon: GitHub
  },
  {
    url: 'https://twitter.com/fuse_network',
    icon: Twitter
  },
  {
    url: 'https://discordapp.com/invite/jpPMeSZ',
    icon: Discord
  },
  {
    url: 'https://t.me/fuseio',
    icon: Telegram
  }
]


function Icons () {
  return (
    <div className='footer__icons grid-y cell small-24 medium-6'>
      <div>
        <div className='footer__icons__title'>Connect</div>
        <div className='footer__icons__images grid-x cell'>
          {
            socialLinks.map(({ icon, url }, index) => (
              <a
                key={index}
                rel='noreferrer noopener'
                className='footer__icon cell shrink'
                target='_blank'
                href={url}
              >
                <img src={icon} />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Icons
