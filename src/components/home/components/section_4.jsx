import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { FormattedMessage } from 'react-intl';

import '../components/section_4/style.scss';

SwiperCore.use([Navigation, Pagination]);

const SectionFour = () => {
  const paginationRef = useRef(null)
  return (
    <section className='section-C wow fadeIn animated'>
      <div className='section-C__content grid-container'>
        <div className="grid-x align-justify">
          <div className='item cell large-5'>
            <h2 className='section-C__title'><FormattedMessage defaultMessage="Latest updates:" />
            </h2>
            <p className='section-C__text'>
              <FormattedMessage defaultMessage="Get to know what we've been up to lately
              Follow us on Medium" />

            </p>
            <a rel="noreferrer noopener" target="_blank" href="https://medium.com/fusenet"
              className='section-C__read-more section-link'>
              <span><FormattedMessage defaultMessage="Go to Blog" /></span>
              <img style={{ marginLeft: '.3em' }} src="./images/section-C-arrow-right.svg" alt="" />
            </a>
          </div>
          <div className='blogs__wrapper cell large-auto grid-x align-spaced'>
            <a className='item__post' rel="noreferrer noopener" target='_blank' href="https://medium.com/fusenet/the-future-of-universal-basic-income-within-hands-reach-48d5e4527eac">
              <div className='item__post__image'>
                <img alt='owners' src="./images/gooddollaroblogpost.png" />
              </div>

              <div className='item__post__content'>
                <p className='chips'>
                  <span>Blog post</span>
                </p>
                <h4 className="title">Fuse & GoodDollar partner on the future of UBI</h4>
                <span>Jul 10, 2020</span>
              </div>
            </a>

            <a className='item__post' rel="noreferrer noopener" target='_blank' href="https://medium.com/fusenet/how-wikibank-is-using-fuse-to-deliver-cash-in-times-of-corona-492f8b163107">
              <div className='item__post__image'><img alt="fuse" src="./images/wikibank_blog.png" />
              </div>
              <div className='item__post__content'>
                <p className='chips'>
                  <span>Blog post</span>
                </p>
                <h4 className="title">How Wikibank is using Fuse to deliver cash in times of Corona</h4>
                <span>Jul 6, 2020</span>
              </div>
            </a>

            <a className='item__post' rel="noreferrer noopener" target='_blank' href="https://medium.com/fusenet/fuse-studio-updates-07-07-2020-c27983182e36">
              <div className='item__post__image'><img src="./images/Studio_updates.png" alt="fuse" />
              </div>
              <div className='item__post__content'>
                <p className='chips'>
                  <span>Blog post</span>
                </p>
                <h4 className="title">Fuse Studio Updates — 07/07/2020</h4>
                <span>Jul 6, 2020</span>
              </div>
            </a>
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
              delay: 5000,
            }}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
          >
            <SwiperSlide>
              <a className='item__post' rel="noreferrer noopener" target='_blank' href="https://medium.com/fusenet/the-future-of-universal-basic-income-within-hands-reach-48d5e4527eac">
                <div className='item__post__image'>
                  <img alt='owners' alt="plugins" src="./images/gooddollaroblogpost.png" />
                </div>
                <div className='item__post__content'>
                  <p className='chips'>
                    <span>Blog post</span>
                  </p>
                  <h4 className="title">Fuse & GoodDollar partner on the future of UBI</h4>
                  <span>Jul 10, 2020</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a className='item__post' rel="noreferrer noopener" target='_blank' href="https://medium.com/fusenet/how-wikibank-is-using-fuse-to-deliver-cash-in-times-of-corona-492f8b163107">
                <div className='item__post__image'><img alt="api" src="./images/wikibank_blog.png" />
                </div>
                <div className='item__post__content'>
                  <p className='chips'>
                    <span>Blog post</span>
                  </p>
                  <h4 className="title">How Wikibank is using Fuse to deliver cash in times of Corona</h4>
                  <span>Jul 6, 2020</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a className='item__post' rel="noreferrer noopener" target='_blank' href="https://medium.com/fusenet/fuse-studio-updates-07-07-2020-c27983182e36">
                <div className='item__post__image'><img src="./images/Studio_updates.png" alt="fuse" />
                </div>
                <div className='item__post__content'>
                  <p className='chips'>
                    <span>Blog post</span>
                  </p>
                  <h4 className="title">Fuse Studio Updates — 07/07/2020</h4>
                  <span>Jul 6, 2020</span>
                </div>
              </a>
            </SwiperSlide>
            <div className="swiper-pagination" />

          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;