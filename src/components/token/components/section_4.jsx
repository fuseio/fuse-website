import React from 'react'
import FuseSwap from '@/assets/img/Fuse_Swap.svg'
import Kyber from '@/assets/img/purchase_kyber.png'
import OneInch from '@/assets/img/purchase_1inch.png'
import Loopring from '@/assets/img/purchase_loopring.png'
import ChangeNow from '@/assets/img/Change_now.svg'
import Uniswap from '@/assets/img/purchase_uniswap.png'
import Gate from '@/assets/img/purchase_gate.png'
import Guardian from '@/assets/img/guardian.svg'
import FuseTokenOne from '@/assets/img/fuse_token_1.png'
import FuseTokenTwo from '@/assets/img/fuse_token_2.png'
import Bubble from '@/assets/img/bubble.png'
import { FormattedMessage } from 'react-intl'

const items = [
  {
    icon: FuseSwap,
    name: 'Fuse Swap',
    link: 'https://fuseswap.com/#/swap'
  },
  {
    icon: Gate,
    name: 'Gate.io',
    link: 'https://www.gate.io/trade/FUSE_USDT',
    width: '58px',
    height: '58px'
  },
  {
    icon: Uniswap,
    name: 'Uniswap',
    link: 'https://app.uniswap.org/#/swap?outputCurrency=0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d'
  },
  {
    icon: Kyber,
    name: 'Kyber network',
    link: 'https://kyberswap.com/swap/eth-fuse'
  },
  {
    icon: OneInch,
    name: '1Inch exchange',
    link: 'https://app.1inch.io/#/1/swap/ETH/FUSE'
  },
  {
    icon: Loopring,
    name: 'Loopring',
    link: 'https://exchange.loopring.io/swap/FUSE-ETH'
  },
  {
    icon: ChangeNow,
    name: 'ChangeNOW',
    link: 'https://changenow.io/?from=usdc&to=fuse'
  },
  {
    icon: Guardian,
    name: 'Guardian',
    link: 'https://guardarian.com/'
  }
]

const Item = ({ icon, name, link }) => {
  return (
    <a href={link} rel='noreferrer noopener' target='_blank' className='item'>
      <div className='item__content'>
        <img src={icon} />
        <h3>{name}</h3>
      </div>
    </a>
  )
}

const SectionFour = () => {
  return (
    <section className='purchase_fuse_token__wrapper'>
      <div className='bubble'>
        <img src={Bubble} />
      </div>
      <div className='token1'>
        <img src={FuseTokenOne} />
      </div>
      <div className='token2'>
        <img src={FuseTokenTwo} />
      </div>
      <div className='purchase_fuse_token__container'>
        <div className='purchase_fuse_token'>
          <h1 className='title'>
            <FormattedMessage defaultMessage='Purchase fuse token' />
          </h1>
          <div className='items'>
            {
              items.map((item, index) => <Item key={index} {...item} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFour
