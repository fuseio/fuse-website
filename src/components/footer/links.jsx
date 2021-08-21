import React from 'react'
import { withRouter } from 'react-router'

const items = [
  {
    title: 'Getting started',
    items: [
      {
        title: 'Fuse Studio',
        url: 'https://studio.fuse.io/'
      },
      {
        title: 'Fuse Swap',
        url: 'https://fuseswap.com/'
      },
      {
        title: 'Fuse Staking',
        url: 'http://staking.fuse.io/'
      },
      {
        title: 'Fuse Cash',
        url: 'https://fuse.cash/'
      }
    ]
  },
  {
    title: 'Under the hood',
    items: [
      {
        title: 'Fuse Network',
        route: './network'
      },
      {
        title: 'Fuse Token',
        route: './token'
      },
      {
        title: 'Explorer',
        url: 'https://explorer.fuse.io/'
      },
      {
        title: 'Documentation',
        url: 'https://docs.fuse.io/'
      },
      {
        title: 'Service status',
        url: 'https://status.fuse.io/'
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
        url: 'https://fuse.cash/privacy'
      },
      {
        title: 'Brand Kit',
        url: '/files/Fuse-Network-Brand-Identity-Guidelines_2.pdf',
        download: true,
      },
    ]
  }
]

const Item = withRouter(({ history, url, title, route, download }) => {
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
            <a rel='noreferrer noopener' target='_blank' href={url} download={download}>
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
    <div className='grid-x links cell small-24 medium-14 large-10'>
      {
        items.map((item, index) => {
          return <List {...item} key={index} />
        })
      }
    </div>
  )
}

export default Links
