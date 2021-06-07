import React from 'react';
import { FormattedMessage } from 'react-intl';
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
const FuseEcosystem = (props) => {
  return (
    <section className='fuse_ecosysyem'>
      <h3 className='fuse_ecosysyem__title'>
        <FormattedMessage defaultMessage='Join our growing ecosystem of leading infrastructure partners, 
liquidity platforms, data providers and more!' />
      </h3>
      <div className='fuse_ecosysyem__items grid-x align-justify'>
        <div className='grid-x fuse_ecosysyem__logo-block cell'>
          <div className='grid-x fuse_ecosysyem__logo-row'>
            <div className='fuse_ecosysyem__logo-priority small-12 medium-6  large-4'>
              <img src={ola} alt='ola' />
            </div>
            <div className='fuse_ecosysyem__logo-priority small-12 medium-6 large-4'>
              <img src={graph} alt='graph' />
            </div>
            <div className='fuse_ecosysyem__logo-priority small-12 medium-6 large-4'>
             <img src={ramp} alt='ramp' />
            </div>
            <div className='fuse_ecosysyem__logo-priority small-12 medium-6 large-4'>
              <img src={pokt} alt='pokt' />
            </div>
            <div className='fuse_ecosysyem__logo-priority small-12 medium-6 large-4'>
              <img src={zokyo} alt='zokyo' />
            </div>
            <div className='fuse_ecosysyem__logo-priority small-12 medium-6 large-4'>
              <img src={zeppelin} alt='zeppelin' />
            </div>
            <div className='fuse_ecosysyem__logo-priority small-12 medium-6 large-4'>
              <img src={monerium} alt='monerium' />
            </div>
            <div className='fuse_ecosysyem__logo-priority small-12 medium-6 large-4'>
              <img src={staking} alt='staking' />
            </div>
            <div className='fuse_ecosysyem__logo-priority small-12 medium-6 large-4'>
             <img src={chainlink} alt='chainlink' />
            </div>
            <div className='fuse_ecosysyem__logo-priority small-12 medium-6 large-4'>
              <img src={goodfi} alt='goodfi' />
            </div>
            <div className='fuse_ecosysyem__logo-priority small-12 medium-6 large-4'>
              <img src={emoney} alt='emoney' />
            </div>
            <div className='fuse_ecosysyem__logo-priority small-12 medium-6 large-4'>
              <img src={dapp} alt='dapp' />
            </div>
          </div>
          {/* <div className='grid-x fuse_ecosysyem__logo-row'>
          </div> */}
        </div>
        <div className='grid-x fuse_ecosysyem__logo-block cell'>
          <div className='grid-x fuse_ecosysyem__logo-row'>
           <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={coingecko} alt='coingecko' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={defilama} alt='defilama' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
             <img src={coinmarketcap} alt='coinmarketcap' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={uniswap} alt='uniswap' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={kyber} alt='kyber' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={oneinch} alt='oneinch' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={loopring} alt='loopring' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={defipulse} alt='defipulse' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={zerochain} alt='zerochain' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={twokey} alt='twokey' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={mantradao} alt='mantradao' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={torus} alt='torus' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={transak} alt='transak' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={unstoppabledomains} alt='unstoppabledomains' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
             <img src={orion} alt='orion' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={boson} alt='boson' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={unmarshal} alt='unmarshal' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={dappradar} alt='dappradar' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={defistation} alt='defistation' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={mintgate} alt='mintgate' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={pancake} alt='pancake' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={krystal} alt='krystal' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={immunefi} alt='immunefi' />
            </div>
            <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
              <img src={getblock} alt='getblock' />
            </div>
          </div>
        </div>
        {/* <div className='grid-x fuse_ecosysyem__logo-block cell'>
          <div className='grid-x fuse_ecosysyem__logo-row'>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default FuseEcosystem