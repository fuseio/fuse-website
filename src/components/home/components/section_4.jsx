import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import { isMobileOnly } from 'react-device-detect'
import useFetch from 'use-http'
import { isEmpty } from 'lodash'
import { FormattedMessage } from 'react-intl'
import moment from 'moment'
import Icons from './icons'
import NewsletterForm from '@/components/shared/newsletter_form'
import SubscribeIcon from '@/assets/images/subscribe_icon.svg'
import imagePlaceholder from '@/assets/images/image-placeholder.jpeg'
// import SwiperArrow from '@/assets/images/swiper_arrow.svg'

SwiperCore.use([Autoplay])

function BlogPostItem ({ title, link, yoast_head_json, date }) {
  return (
    <a
      className='post_item'
      rel='noreferrer noopener'
      target='_blank'
      href={link}
    >
      <div className='post_item__image'>
        <img alt='owners' src={isEmpty(yoast_head_json.og_image[0]) ? { imagePlaceholder } : yoast_head_json.og_image[0].url} />
      </div>
      <div className='post_item__content'>
        <h4 className='title'>
          {title.rendered}
        </h4>
        <small>
          <FormattedMessage defaultMessage='By Fuse' />
        </small>
        <span>{moment(date).format('MMMM Do YYYY')}</span>
      </div>
    </a>
  )
}

function SectionFour () {
  const { data } = useFetch(
    'https://news.fuse.io/wp-json/wp/v2/posts/',
    {},
    []
  )

  if (isEmpty(data)) {
    return null
  }

  return (
    <div className='section_4__container'>
      {console.log(data)}
      <div className='section_4'>
        <div className='section_4__title'>Latest News on Fuse</div>
        <div className='blogs'>
          <Swiper
            slidesPerView={isMobileOnly ? 1 : 4}
            spaceBetween={20}
            loop
            setWrapperSize
            autoplay
          >
            {
              data.map((item, index) => <SwiperSlide key={index}><BlogPostItem {...item} /></SwiperSlide>)
            }
          </Swiper>
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

export default SectionFour
