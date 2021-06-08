import React from 'react'
import { withRouter } from 'react-router'
import FuseToken from '@/assets/images/dropdown/network.svg'
import Network from '@/assets/images/dropdown/network1.svg'
import Docs from '@/assets/images/dropdown/docs.svg'
import Status from '@/assets/images/dropdown/status.svg'
import Explorer from '@/assets/images/dropdown/explorer.svg'
import Arrow from '@/assets/images/dropdown/drop_arrow.svg'
import { FormattedMessage } from 'react-intl'

const items = [
  {
    title: <FormattedMessage defaultMessage='Fuse Network' />,
    icon: Network,
    subTitle: <FormattedMessage defaultMessage='Learn how it works' />,
    route: './network'
  },
  {
    title: <FormattedMessage defaultMessage='Documentation' />,
    icon: Docs,
    subTitle: (
      <FormattedMessage defaultMessage='Articles, tutorials and deep-dive' />
    ),
    url: 'https://docs.fuse.io'
  },
  {
    title: <FormattedMessage defaultMessage='Fuse Token' />,
    icon: FuseToken,
    subTitle: <FormattedMessage defaultMessage='Learn how it works' />,
    route: './token'
  },
  {
    title: <FormattedMessage defaultMessage='Service status' />,
    icon: Status,
    subTitle: <FormattedMessage defaultMessage='Network uptime' />,
    url: 'https://status.fuse.io'
  },
  {
    title: <FormattedMessage defaultMessage='Explorer' />,
    icon: Explorer,
    subTitle: (
      <FormattedMessage defaultMessage='Network transactions & analytics' />
    ),
    url: 'https://explorer.fuse.io'
  }
]

function UnderTheHoodDropdown ({ history }) {
  return (
    <div className='community_dropdown'>
      <div data-first-dropdown-section>
        <ul className='list grid-x align-middle align-justify'>
          {
            items.map(({ title, icon, subTitle, url, route }, index) => {
              return (
                <li
                  className='item grid-x align-middle cell small-24 medium-11'
                  key={index}
                >
                  {route && (
                    <div
                      className='item__wrapper'
                      onClick={() => history.push(route)}
                    >
                      <img src={icon} className='cell shrink' />
                      <div className='content'>
                        <button className='title'>
                          <span>{title}</span>
                          <img className='arrow' src={Arrow} />
                        </button>
                        <span className='sub_title'>{subTitle}</span>
                      </div>
                    </div>
                  )}
                  {url && (
                    <a
                      rel='noreferrer noopener'
                      className='item__wrapper'
                      target='_blank'
                      href={url}
                    >
                      <img src={icon} />
                      <div className='content'>
                        <button className='title'>
                          <span>{title}</span>
                          <img className='arrow' src={Arrow} />
                        </button>
                        <span className='sub_title'>{subTitle}</span>
                      </div>
                    </a>
                  )}
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default withRouter(UnderTheHoodDropdown)
