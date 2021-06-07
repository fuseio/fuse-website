import React from 'react'
import FuseTokenImage from '@/assets/img/fuse-token-image.png'
import { FormattedMessage } from 'react-intl'

const SectionOne = () => {
  return (
    <section className='fuse_token_floor__wrapper'>
      <div className='fuse_token_floor__container'>
        <div className='fuse_token_floor'>
          <div className='content'>
            <h1 className='title'>
              <FormattedMessage defaultMessage='Fuse Token' />
            </h1>
            <p className='text'>
              <FormattedMessage
                defaultMessage='Fuse token is the primary currency of {newLine} the network and the decentralized  {newLine}applications that it support.'
                values={{
                  newLine: <br />
                }}
              />
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
