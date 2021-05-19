import React from 'react'
// import { FormattedMessage } from 'react-intl'
import FuseTokenImage from '@/assets/img/fuse-token-image.png'

const SectionOne = () => {
  return (
    <section className='fuse_token_floor__wrapper'>
      <div className='fuse_token_floor__container'>
        <div className='fuse_token_floor'>
          <div className='content'>
            <h1 className='title'>Fuse Token</h1>
            <p className='text'>
              Fuse token is the primary currency of <br /> the network and the decentralized  <br />applications that it support.
            </p>
          </div>

          <div className='image'>
            <img src={FuseTokenImage} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
