import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { isMobileOnly } from 'react-device-detect'
import useFetch from 'use-http'
import { isEmpty } from 'lodash'
import { FormattedMessage } from 'react-intl'
import moment from 'moment'
import Icons from './icons'
import NewsletterForm from '@/components/shared/newsletter_form'
import SubscribeIcon from '@/assets/images/subscribe_icon.svg'

function BlogPostItem ({ title, link, thumbnail, pubDate }) {
  return (
    <a
      className='post_item'
      rel='noreferrer noopener'
      target='_blank'
      href={link}
    >
      <div className='post_item__image'>
        <img alt='owners' src={thumbnail} />
      </div>

      <div className='post_item__content'>
        <h4 className='title'>
          {title}
        </h4>
        <small>
          <FormattedMessage defaultMessage='By Fuse' />
        </small>
        <span>{moment(pubDate).format('MMMM Do YYYY')}</span>
      </div>
    </a>
  )
}

function SectionSix () {
  const { data = { items: [] } } = useFetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/fusenet',
    {},
    []
  )

  if (isEmpty(data.items)) {
    return null
  }

  return (
    <div className='section_6__container'>
      <div className='section_6'>
        <div className='section_6__title'>Latest News on Fuse</div>
        <div className='blogs grid-x align-spaced'>
          {
            isMobileOnly
              ? (
                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  loop
                  setWrapperSize
                >
                  {
                    data?.items.slice(0, 3).map((item, index) => <SwiperSlide key={index}><BlogPostItem {...item} /></SwiperSlide>)
                  }
                </Swiper>
                )
              : data?.items.slice(0, 3).map((item, index) => <BlogPostItem key={index} {...item} />)
          }
        </div>
        <div className='email_social'>
          <div className='subscribe'>
            <img className='icon' src={SubscribeIcon} />
            <div className='texts'>
              <div className='title'>Subscribe to our newsletter</div>
              <div className='text'>The latest news and resources, sent to your inbox.</div>
            </div>
            <NewsletterForm />
          </div>
          <div className='social'>
            <Icons />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionSix
