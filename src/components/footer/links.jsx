import React from 'react'
import { withRouter } from 'react-router'
import { FormattedMessage } from 'react-intl'

const links = [
  {
    title: <FormattedMessage defaultMessage='Docs' />,
    url: 'http://docs.fuse.io/'
  },
  {
    title: <FormattedMessage defaultMessage='Explorer' />,
    url: 'http://explorer.fuse.io/'
  },
  {
    title: <FormattedMessage defaultMessage='Network' />,
    route: './network'
  },
  {
    title: <FormattedMessage defaultMessage='Privacy policy' />,
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
    <div className='links cell small-24 medium-8'>
      {
        links.map((item, index) => (
          <Item key={index} {...item} />
        ))
      }
    </div>
  )
}

export default Links
