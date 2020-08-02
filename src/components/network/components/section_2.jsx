import React, { useRef, useEffect } from 'react';
import fuseWallet from '@/assets/images/fuse_wallet.svg'
import fuseStudio from '@/assets/images/fuse-studio.svg'
import dotFuseWallet from '@/assets/images/dot_fuse_wallet.png'
import walletApp from '@/assets/images/wallet-app.svg'
import lottie from 'lottie-web'
// import floorOneAnimationData from '@/assets/lottie/floor_one/data.json'
import floorOneAnimationData from '@/assets/lottie/network_page/data.json'

const SectionTwo = () => {
  const floorOne = useRef(null)

  useEffect(() => {
    if (floorOne.current)
      lottie.loadAnimation({
        floorOneAnimationData,
        container: floorOne.current,
        renderer: 'svg',
        loop: true,
      })
  }, [floorOne])
  return (
    <section className='network_stack'>
      <div className='grid-container'>
        <div className='grid-y'>
          <h1 className='title'>Network for open source payments</h1>
          <div className='floors grid-y'>
            <div className='floors__item grid-x'>
              <div className='content grid-x cell large-8'>
                <div className='grid-y cell large-22 align-top'>
                  <img src={walletApp} />
                  <div className='content__text'>
                    <span>Fuse Wallet </span><span>|</span> for users
                  An easy to use cross-platform mobile wallet
                </div>
                </div>
              </div>
              <div className='dots grid-y cell large-8 align-middle align-center'>
                <img src={dotFuseWallet} />
              </div>
              <div className='animation cell large-8'>
                <div ref={floorOne} />
              </div>
            </div>
            <div className='floors__item grid-x'>
              <div className='content grid-x cell large-8'>
                <div className='grid-y cell large-22 align-top'>
                  <img src={fuseWallet} />
                  <div className='content__text'>
                    <span>Fuse Studio </span><span>|</span> An easy to use self-service smart contract platform for businesses.
                </div>
                </div>
              </div>
              <div className='dots grid-y cell large-8 align-middle align-center'>
                <img src={dotFuseWallet} />
              </div>
              <div className='animation cell large-8'>
                <div ref={floorOne} />
              </div>
            </div>
            <div className='floors__item grid-x'>
              <div className='content grid-x cell large-8'>
                <div className='grid-y cell large-22 align-top'>
                  <img src={fuseStudio} />
                  <div className='content__text'>
                    <span>Fuse Studio </span><span>|</span> For network participants
DPoS blockchain operated by validators and optimized for payments.
                </div>
                </div>
              </div>
              <div className='dots grid-y cell large-8 align-middle align-center'>
                <img src={dotFuseWallet} />
              </div>
              <div className='animation cell large-8'>
                <div ref={floorOne} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;