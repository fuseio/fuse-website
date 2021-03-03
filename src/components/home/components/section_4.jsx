import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { FormattedMessage } from 'react-intl'

SwiperCore.use([Navigation, Pagination])

const blogs = [
  {
    title: 'Fuse Will Use Chainlink Proof of Reserve to Mint and Verify the Collateralization of FuseDollar (fUSD)',
    href: 'https://medium.com/fusenet/fuse-will-use-chainlink-proof-of-reserve-to-mint-and-verify-the-collateralization-of-fusedollar-6ff6db948029',
    date: 'Mar 2, 2021',
    imagePath: './images/chainlink.png'
  },
  {
    title: 'Introducing FuseDollar: An Asset-Backed Stable Coin Designed for First Time Users',
    href: 'https://medium.com/fusenet/introducing-fusedollar-an-asset-backed-stable-coin-designed-for-first-time-users-dbf143d35e58',
    date: 'Feb 19, 2021',
    imagePath: './images/fusedollar.png'
  },
  {
    title: 'Kolektivo Labs Launches on Fuse to Scale Blockchain-Based, Sustainable Development in Curaçao.',
    href: 'https://medium.com/fusenet/kolektivo-labs-launches-on-fuse-to-scale-blockchain-based-sustainable-development-in-cura%C3%A7ao-ac83d30294b',
    date: 'Feb 18, 2021',
    imagePath: './images/xl.png'
  }
]

function Item({
  title,
  href,
  date,
  imagePath
}) {
  return (
    <a className='item__post' rel='noreferrer noopener' target='_blank' href={href}>
      <div className='item__post__image'>
        <img alt='owners' src={imagePath} />
      </div>

      <div className='item__post__content'>
        <p className='chips'>
          <span>Blog post</span>
        </p>
        <h4 className='title'>{title}</h4>
        <span>{date}</span>
      </div>
    </a>
  )
}

const SectionFour = () => {
  const paginationRef = useRef(null)
  return (
    <section className='section-C wow fadeIn animated'>
      <div className='section-C__content grid-container'>
        <div className='grid-x align-justify'>
          <div className='item cell large-5'>
            <h2 className='section-C__title'><FormattedMessage defaultMessage='Latest updates:' />
            </h2>
            <p className='section-C__text'>
              <FormattedMessage defaultMessage="Get to know what we've been up to lately
              Follow us on Medium"
              />

            </p>
            <a
              rel='noreferrer noopener' target='_blank' href='https://medium.com/fusenet'
              className='section-C__read-more section-link'
            >
              <span><FormattedMessage defaultMessage='Go to Blog' /></span>
              <img style={{ marginLeft: '.3em' }} src='./images/section-C-arrow-right.svg' alt='' />
            </a>
          </div>
          <div className='blogs__wrapper cell large-auto grid-x align-spaced'>
            {
              blogs.map((item, index) => {
                return <Item key={index} {...item} />
              })
            }
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
              clickable: true,
              el: paginationRef.current
            }}
          >
            {
              blogs.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Item {...item} />
                  </SwiperSlide>
                )
              })
            }
            <div className='swiper-pagination' />

          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default SectionFour
