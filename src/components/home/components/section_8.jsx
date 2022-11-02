import React from 'react'

const items = [
  {
    title: 'Start Learning',
    links: [
      {
        title: 'Learn about Web3 and Fuse',
        linkText: 'Start with the basics',
        link: 'https://fuse.io/docs'
      },
      {
        title: 'Watch Fuse on YouTube',
        linkText: 'Subscribe to official channel',
        link: 'https://www.youtube.com/c/Fusenetwork'
      },
      {
        title: 'Dive deeper',
        linkText: 'See all learning resources',
        link: 'https://docs.fuse.io/aboutFuse/about-fuse'
      }
    ]
  },
  {
    title: 'Start Using',
    links: [
      {
        title: 'Understand why it matters',
        linkText: 'Become a web3 citizen',
        link: '/network'
      },
      {
        title: 'Create an account',
        linkText: 'Choose a wallet',
        link: '/token'
      },
      {
        title: 'Explore dApps',
        linkText: 'Discover Growing Ecosystem',
        link: '/ecosystem'
      }
    ]
  }
]

function Item ({ title, links }) {
  return (
    <div className='section_8__item'>
      <div className='section_8__item__container'>
        <div className='title'>{title}</div>
        <div className='list'>
          <div className='list__item'>
            {
              links.map(({
                title: temp,
                linkText,
                link
              }, index) => {
                return (
                  <div key={index} className='list__item__content'>
                    <div className='title'>{temp}</div>
                    <a href={link} className='link'>{linkText}</a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionEight () {
  return (
    <section className='section_8__wrapper'>
      <div className='section_8'>
        {
          items.map((item, index) => {
            return (
              <Item {...item} key={index} />
            )
          })
        }
      </div>
    </section>
  )
}

export default SectionEight
