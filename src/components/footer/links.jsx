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

const links = [
  {
    title: 'Docs',
    url: 'http://docs.fuse.io/'
  },
  {
    title: 'Explorer',
    url: 'http://explorer.fuse.io/'
  },
  {
    title: 'Network',
    route: './network'
  },
  {
    title: 'Privacy policy',
    route: './privacy'
  }
]

const Item = withRouter(({ history, url, title, route }) => {
  return (
    <div className='links__item'>
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
    </div>
  )
})

function Links () {
  return (
    <div className='grid-x links align-middle align-justify cell small-24 medium-8'>
      {
        links.map((item, index) => (
          <Item key={index} {...item} />
        ))
      }
      {/* {
        items.map((item, index) => {
          return <List {...item} key={index} />
        })
      } */}
    </div>
  )
}

export default Links
