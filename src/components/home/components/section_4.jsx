import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { FormattedMessage } from 'react-intl'
import useFetch from 'use-http'
import moment from 'moment'

SwiperCore.use([Navigation, Pagination])

function Item ({ title, link, thumbnail, pubDate }) {
  return (
    <a
      className='item__post'
      rel='noreferrer noopener'
      target='_blank'
      href={link}
    >
      <div className='item__post__image'>
        <img alt='owners' src={thumbnail} />
      </div>

      <div className='item__post__content'>
        {/* <p className='chips'>
          <span>Blog post</span>
        </p> */}
        <h4 className='title'>
          <FormattedMessage
            defaultMessage='{title}'
            values={{
              title: title
            }}
          />
        </h4>
        <small>
          <FormattedMessage defaultMessage='By Fuse' />
        </small>
        <span>{moment(pubDate).format('MMMM Do YYYY')}</span>
      </div>
    </a>
  )
}

const SectionFour = () => {
  const { data = { items: [] } } = useFetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/fusenet',
    {},
    []
  )

  console.log(data)

  return (
    <section className='section-C__wrapper'>
      <div className='section-C__container'>
        <div className='section-C'>
          <h2 className='section-C__title'>
            <FormattedMessage defaultMessage='Latest updates:' />
          </h2>
          <div className='section-C__content'>
            <div className='grid-x align-justify'>
              <div className='item cell large-5'>
                <p className='section-C__text'>
                  <FormattedMessage
                    defaultMessage="Get to know what we've been up to lately
                Follow us on Medium"
                  />
                </p>
                <a
                  rel='noreferrer noopener'
                  target='_blank'
                  href='https://medium.com/fusenet'
                  className='main_button section-C__read-more section-link'
                >
                  <span>
                    <FormattedMessage defaultMessage='Go to Blog' />
                  </span>
                </a>
              </div>
              <div className="blogs__wrapper cell large-auto grid-x align-spaced">
                {data.items.slice(0, 3).map((item, index) => {
                  return <Item key={index} {...item} />;
                })}
              </div>
            </div>
            <div className='section-C__swiper'>
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop
                setWrapperSize
                autoplay={{
                  reverseDirection: true,
                  delay: 5000
                }}
                pagination={{
                  clickable: true
                }}
              >
                {
                  data.items.slice(0, 3).map((item, index) => (
                    <SwiperSlide key={index}>
                      <Item {...item} />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFour
