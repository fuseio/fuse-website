import React from 'react'
import { FormattedMessage } from 'react-intl'
import network_arrow from '@/assets/images/network_arrow.svg'
const SectionFour = () => {
  return (
    <div className='participates grid-y'>
      <div className='grid-container'>
        <div className='participates__wrapper'>
          <h1 className='title'><FormattedMessage defaultMessage='Participate In The Network' /></h1>

          <div className='grid-x align-justify'>
            <div className='participates__item'>
              <div className='image'>
                <div className='grid-x align-middle'>
                  <img src='./images/network_tokens.png' alt='network_tokens' />
                </div>
              </div>
              <div className='content grid-y align-top small-15'>
                <div className='participates__item__title'><FormattedMessage defaultMessage='Fuse tokens' /></div>
                <div className='text'><FormattedMessage defaultMessage="Fuse network's native currency, FUSE, works to align the incentives of all the network users. FUSE is currently being traded publicly on decentralized exchanges such as Uniswap." /></div>

                <div className='grid-x links align-center'>
                  <div className='link'>
                    <a
                      rel='noreferrer noopener' target='_blank'
                      href='https://docs.fuse.io/the-fuse-chain/fuse-token'
                    >
                      <span><FormattedMessage defaultMessage='FUSE tokenomics' /></span>
                    </a>
                    <img src={network_arrow} alt='network_arrow' />
                  </div>
                  <div className='link'>
                    <a
                      rel='noreferrer noopener' target='_blank'
                      href='https://uniswap.info/token/0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d'
                    >
                      <span><FormattedMessage defaultMessage='Get on uniswap' /></span>
                    </a>
                    <img src={network_arrow} alt='network_arrow' />
                  </div>
                </div>
              </div>
            </div>
            <div className='participates__item'>
              <div className='image'>
                <div className='grid-x align-middle'>
                  <img src='./images/network_tokens_wallet.png' alt='network_tokens_wallet' />
                </div>
              </div>
              <div className='content grid-y align-top small-15'>
                <div className='participates__item__title'><FormattedMessage defaultMessage='Become A Fuse Validator' /></div>
                <div className='text'><FormattedMessage defaultMessage='In order to ensure the security and speed of all transactions on the Fuse blockchain, validators compete with one another to validate the state of the chain. For this important work validators are rewarded in FUSE.' /></div>
                <div className='grid-x links align-center'>
                  <div className='link'>
                    <a
                      rel='noreferrer noopener' target='_blank'
                      href='https://docs.fuse.io/become-a-validator/getting-started'
                    >
                      <span><FormattedMessage defaultMessage='Learn how to run a Fuse node' /></span>
                    </a>
                    <img src={network_arrow} alt='network_arrow' />
                  </div>
                </div>
              </div>
            </div>
            <div className='participates__item'>
              <div className='image'>
                <div className='grid-x align-middle'>
                  <img src='./images/network_pig.png' alt='network_pig' />
                </div>
              </div>
              <div className='content grid-y align-top small-15'>
                <div className='participates__item__title'><FormattedMessage defaultMessage='Delegate Fuse tokens' /></div>
                <div className='text'><FormattedMessage defaultMessage='Any network participant can delegate their FUSE to a validator of their choice in order to contribute to the security of the chain and in return earn passive income for doing so.' /></div>
                <div className='grid-x links align-center'>
                  <div className='link'>
                    <a rel='noreferrer noopener' href='https://staking.fuse.io' target='_blank'>
                      <span><FormattedMessage defaultMessage='Learn more about Staking' /></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFour
