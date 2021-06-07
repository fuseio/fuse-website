import React from 'react'
import { withRouter } from 'react-router'

const items = [
  {
    title: 'Getting started',
    items: [
      {
        title: 'Fuse Studio',
        url: 'https://fuseswap.com/'
      },
      {
        title: 'Fuse Swap',
        url: 'http://staking.fuse.io/'
      },
      {
        title: 'Fuse Staking',
        url: 'http://studio.fuse.io/'
      }, 
      {
        title: 'Fuse Cash',
        url: 'https://fuseswap.com'
      }
    ]
  },
  {
    title: 'Under the hood',
    items: [
      {
        title: 'Fuse Network',
        url: 'http://docs.fuse.io/'
      },
      {
        title: 'Fuse Token',
        url: 'http://explorer.fuse.io/'
      },
      {
        title: 'Explorer',
        url: 'https://docs.fuse.io/become-a-validator/getting-started'
      },
      {
        title: 'Documentation',
        url: 'https://docs.fuse.io/become-a-validator/getting-started'
      },
      {
        title: 'Service status',
        url: 'https://docs.fuse.io/become-a-validator/getting-started'
      }
    ]
  },
  {
    title: 'Company',
    items: [
      {
        title: 'About Us',
        route: './about'
      },
      {
        title: 'Privacy policy',
        route: './network'
      }
    ]
  }
]

const Item = withRouter(({ history, url, title, route }) => {
  return (
    <li className='list__item'>
      {
        route
          ? (
            <span onClick={() => history.push(route)}>
              {title}
            </span>
            )
          : null
      }
      {
        url
          ? (
            <a rel='noreferrer noopener' target='_blank' href={url}>
              {title}
            </a>
            )
          : null
      }
    </li>
  )
})

function List ({ title, items }) {
  return (
    <div className='list__container'>
      <div className='list__title'>{title}</div>
      <ul className='list'>
        {
          items.map((item, index) => (
            <Item key={index} {...item} />
          ))
        }
      </ul>
    </div>
  )
}

function Links () {
  return (
    <div className='grid-x links cell small-24 medium-8'>
      {
        items.map((item, index) => {
          return <List {...item} key={index} />
        })
      }
    </div>
  )
}

export default Links
