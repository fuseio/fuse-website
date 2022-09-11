import React from 'react'
import FuseSwap from '@/assets/images/Fuse_Swap.svg'
import Kyber from '@/assets/images/purchase_kyber.png'
import OneInch from '@/assets/images/purchase_1inch.png'
import Loopring from '@/assets/images/purchase_loopring.png'
import ChangeNow from '@/assets/images/Change_now.svg'
import Uniswap from '@/assets/images/purchase_uniswap.png'
import Gate from '@/assets/images/purchase_gate.png'
import Guardian from '@/assets/images/guardian.svg'
import BitMart from '@/assets/images/bitmart.svg'
import FuseTokenOne from '@/assets/images/fuse_token_1.png'
import FuseTokenTwo from '@/assets/images/fuse_token_2.png'
import Bubble from '@/assets/images/bubble.png'
import Bittrex from '@/assets/images/Bittrex.png'
import Liquid from '@/assets/images/Liquid.png'
import Mexc from '@/assets/images/MEXC.png'
import Pancake from '@/assets/images/pancake.png'
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
    link: 'https://www.gate.io/trade/FUSE_USDT'
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
    name: 'Guardarian',
    link: 'https://guardarian.com/'
  },
  {
    icon: BitMart,
    name: 'BitMart',
    link: 'https://www.bitmart.com/'
  },
  {
    icon: Bittrex,
    name: 'Bittrex',
    link: 'https://global.bittrex.com/'
  },
  {
    icon: Mexc,
    name: 'MEXC',
    link: 'https://www.mexc.com/exchange/FUSE_USDT'
  },
  {
    icon: Liquid,
    name: 'Liquid',
    link: 'https://app.liquid.com/exchange/FUSEUSDT'
  },
  {
    icon: Pancake,
    name: 'PancakeSwap',
    link: 'https://pancakeswap.finance/swap'
  }
]

const Item = ({ icon, name, link, ...rest }) => {
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
