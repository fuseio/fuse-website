import React from 'react'
import { FormattedMessage } from 'react-intl'
import ola from '@/assets/img/Ecosystem/ola_partner.png'
import graph from '@/assets/img/Ecosystem/graph_partner.png'
import ramp from '@/assets/img/Ecosystem/ramp_partner.png'
import pokt from '@/assets/img/Ecosystem/pokt_partner.png'
import zokyo from '@/assets/img/Ecosystem/zokyo_partner.png'
import zeppelin from '@/assets/img/Ecosystem/open-zeppelin_partner.png'
import monerium from '@/assets/img/Ecosystem/monerium_partner.png'
import staking from '@/assets/img/Ecosystem/staking-rewards_partner.png'
import chainlink from '@/assets/img/Ecosystem/chainlink_partner.png'
import goodfi from '@/assets/img/Ecosystem/goodfi_partner.png'
import emoney from '@/assets/img/Ecosystem/e-money_partner.png'
import dapp from '@/assets/img/Ecosystem/dapp_partner.png'
import coingecko from '@/assets/img/Ecosystem/coingecko_partner.png'
import defilama from '@/assets/img/Ecosystem/defilama_partner.png'
import coinmarketcap from '@/assets/img/Ecosystem/coinmarketcap_partner.png'
import uniswap from '@/assets/img/Ecosystem/uniswap_partner.png'
import kyber from '@/assets/img/Ecosystem/kyber_partner.png'
import oneinch from '@/assets/img/Ecosystem/1inch_partner.png'
import loopring from '@/assets/img/Ecosystem/loopring_partner.png'
import defipulse from '@/assets/img/Ecosystem/defipulse_partner.png'
import zerochain from '@/assets/img/Ecosystem/0chain_partner.png'
import twokey from '@/assets/img/Ecosystem/2key_partner.png'
import mantradao from '@/assets/img/Ecosystem/mantradao_partner.png'
import torus from '@/assets/img/Ecosystem/torus_partner.png'
import transak from '@/assets/img/Ecosystem/transak_partner.png'
import unstoppabledomains from '@/assets/img/Ecosystem/unstoppabledomains_partner.png'
import orion from '@/assets/img/Ecosystem/orion_partner.png'
import boson from '@/assets/img/Ecosystem/boson_partner.png'
import unmarshal from '@/assets/img/Ecosystem/unmarshal_partner.png'
import dappradar from '@/assets/img/Ecosystem/dappradar_partner.png'
import defistation from '@/assets/img/Ecosystem/defistation_partner.png'
import mintgate from '@/assets/img/Ecosystem/mintgate_partner.png'
import pancake from '@/assets/img/Ecosystem/pancake-swap_partner.png'
import krystal from '@/assets/img/Ecosystem/krystal_partner.png'
import immunefi from '@/assets/img/Ecosystem/immunefi_partner.png'
import getblock from '@/assets/img/Ecosystem/getblock_partner.png'

const largeEcoSystem = [
  {
    logo: ola,
    link: 'https://ola.finance/',
    alt: 'ola'
  },
  {
    logo: graph,
    link: 'https://thegraph.com/',
    alt: 'graph'
  },
  {
    logo: ramp,
    link: 'https://ramp.network/',
    alt: 'ramp'
  },
  {
    logo: pokt,
    link: 'https://www.pokt.network/',
    alt: 'pokt'
  },
  {
    logo: zokyo,
    link: 'https://www.zokyo.io/',
    alt: 'zokyo'
  },
  {
    logo: zeppelin,
    link: 'https://openzeppelin.com/',
    alt: 'zepplin'
  },
  {
    logo: monerium,
    link: 'https://monerium.com/',
    alt: 'monerium'
  },
  {
    logo: staking,
    link: 'https://www.stakingrewards.com',
    alt: 'staking'
  },
  {
    logo: chainlink,
    link: 'https://chain.link/',
    alt: 'chainlink'
  },
  {
    logo: goodfi,
    link: 'https://www.goodfi.com/',
    alt: 'goodfi'
  },
  {
    logo: emoney,
    link: 'https://e-money.com/',
    alt: 'emoney'
  },
  {
    logo: dapp,
    link: 'https://www.dapp.com/',
    alt: 'dapp'
  }
]

const smallEcoSystem = [
  {
    logo: coingecko,
    link: 'https://www.coingecko.com/',
    alt: 'coingecko'
  },
  {
    logo: defilama,
    link: 'https://defillama.com/home',
    alt: 'defilama'
  },
  {
    logo: coinmarketcap,
    link: 'https://coinmarketcap.com/',
    alt: 'coinmarketcap'
  },
  {
    logo: uniswap,
    link: 'https://uniswap.org/',
    alt: 'uniswap'
  },
  {
    logo: kyber,
    link: 'https://kyber.network/',
    alt: 'kyber'
  },
  {
    logo: oneinch,
    link: 'https://1inch.io/',
    alt: 'oneinch'
  },
  {
    logo: loopring,
    link: 'https://loopring.org/',
    alt: 'loopring'
  },
  {
    logo: defipulse,
    link: 'https://defipulse.com/',
    alt: 'defipulse'
  },
  {
    logo: zerochain,
    link: 'https://0chain.net/',
    alt: 'zerochain'
  },
  {
    logo: twokey,
    link: 'https://www.2key.network/',
    alt: 'twokey'
  },
  {
    logo: mantradao,
    link: 'https://mantradao.com/',
    alt: 'mantradao'
  },
  {
    logo: torus,
    link: 'https://tor.us/',
    alt: 'torus'
  },
  {
    logo: transak,
    link: 'https://transak.com/',
    alt: 'transak'
  },
  {
    logo: unstoppabledomains,
    link: 'https://unstoppabledomains.com/',
    alt: 'unstoppabledomains'
  },
  {
    logo: orion,
    link: 'https://www.orionprotocol.io/',
    alt: 'orion'
  },
  {
    logo: boson,
    link: 'https://www.bosonprotocol.io/',
    alt: 'boson'
  },
  {
    logo: unmarshal,
    link: 'https://unmarshal.io/',
    alt: 'unmarshal'
  },
  {
    logo: dappradar,
    link: 'https://dappradar.com/',
    alt: 'dappradar'
  },
  {
    logo: defistation,
    link: 'https://www.defistation.io/',
    alt: 'defistation'
  },
  {
    logo: mintgate,
    link: 'https://mintgate.app/',
    alt: 'mintgate'
  },
  {
    logo: pancake,
    link: 'https://pancakeswap.finance/',
    alt: 'pancake'
  },
  {
    logo: krystal,
    link: 'https://krystal.app/',
    alt: 'krystal'
  },
  {
    logo: immunefi,
    link: 'https://immunefi.com/',
    alt: 'immunefi'
  },
  {
    logo: getblock,
    link: 'http://getblock.io/',
    alt: 'getblock'
  }
]

const LargeCompanyLogo = ({ logo, link, alt }) => {
  return (
    <div className='fuse_ecosysyem__logo-priority small-12 medium-6  large-4'>
      <a href={link} rel='noreferrer noopener' target='_blank'>
        <img src={logo} alt={`${alt}`} />
      </a>
    </div>
  )
}

const SmallCompanyLogo = ({ logo, link, alt }) => {
  return (
    <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
      <a href={link} rel='noreferrer noopener' target='_blank'>
        <img src={logo} alt={`${alt}`} />
      </a>
    </div>
  )
}

const FuseEcosystem = (props) => {
  return (
    <section className='fuse_ecosysyem'>
      <h3 className='fuse_ecosysyem__title'>
        <FormattedMessage defaultMessage='Join our growing ecosystem of leading infrastructure partners, liquidity platforms, data providers and more!' />
      </h3>
      <div className='fuse_ecosysyem__items grid-x align-justify'>
        <div className='grid-x fuse_ecosysyem__logo-block cell'>
          <div className='grid-x fuse_ecosysyem__logo-row'>
            {
              largeEcoSystem.map((logo, index) => <LargeCompanyLogo key={index} {...logo} />)
            }
          </div>
        </div>
        <div className='grid-x fuse_ecosysyem__logo-block cell'>
          <div className='grid-x fuse_ecosysyem__logo-row'>
            {
              smallEcoSystem.map((logo, index) => <SmallCompanyLogo key={index} {...logo} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default FuseEcosystem
