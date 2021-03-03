import React from 'react'
import { withRouter } from 'react-router'

const items = [
  {
    title: 'Products',
    items: [
      {
        title: 'Fuse Swap',
        url: 'https://fuseswap.com/'
      },
      {
        title: 'Fuse Staking',
        url: 'http://staking.fuse.io/'
      },
      {
        title: 'Fuse Studio',
        url: 'http://studio.fuse.io/'
      }
    ]
  },
  {
    title: 'For Developers',
    items: [
      {
        title: 'Documentation',
        url: 'http://docs.fuse.io/'
      },
      {
        title: 'Explorer',
        url: 'http://explorer.fuse.io/'
      },
      {
        title: 'Become Validator',
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
        title: 'Network',
        route: './network'
      },
      {
        title: 'Careers',
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
    <div className='grid-x links align-middle align-justify cell small-24 medium-8'>
      {
        items.map((item, index) => {
          return <List {...item} key={index} />
        })
      }
    </div>
  )
}

export default Links
