import React, { useRef, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import fuseWallet from '@/assets/images/fuse_wallet.svg'
import fuseStudio from '@/assets/images/fuse-studio.svg'
import dotFuseWallet from '@/assets/images/dot_fuse_wallet.png'
import walletApp from '@/assets/images/wallet-app.svg'
import lottie from 'lottie-web'
import walletAnimationData from '@/assets/lottie/wallet/wallet.json'
import studioAnimationData from '@/assets/lottie/studio/studio.json'
import chainAnimationData from '@/assets/lottie/chain/chain.json'

const SectionTwo = () => {
  const floorOne = useRef(null)
  const floorTwo = useRef(null)
  const floorThree = useRef(null)

  useEffect(() => {
    if (floorOne.current) {
      lottie.loadAnimation({
        animationData: walletAnimationData,
        container: floorOne.current,
        renderer: 'svg',
        loop: true
      })
    }
  }, [floorOne])

  useEffect(() => {
    if (floorTwo.current) {
      lottie.loadAnimation({
        animationData: studioAnimationData,
        container: floorTwo.current,
        renderer: 'svg',
        loop: true
      })
    }
  }, [floorTwo])

  useEffect(() => {
    if (floorThree.current) {
      lottie.loadAnimation({
        animationData: chainAnimationData,
        container: floorThree.current,
        renderer: 'svg',
        loop: true
      })
    }
  }, [floorThree])

  return (
    <section className='network_stack'>
      <div className='grid-container'>
        <div className='grid-y'>
          <h1 className='title'><FormattedMessage defaultMessage='Network for open source payments' /></h1>
          <div className='floors grid-y'>
            <div className='floors__item grid-x align-spaced align-middle'>
              <div className='content grid-x cell large-8'>
                <div className='grid-y cell large-22 align-top'>
                  <div className='image'><img src={walletApp} /></div>
                  <div className='content__text'>
                    <FormattedMessage
                      defaultMessage='<span>Fuse Wallet </span><span>|</span> <span>for users</span>
                      {newLine}
                      An easy to use cross-platform {newLine} mobile wallet.'
                      values={{
                        newLine: <br />,
                        span: chunks => <span>{chunks}</span>
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className='dots grid-y cell large-6 align-middle align-center'>
                <img src={dotFuseWallet} />
              </div>
              <div className='animation cell large-10'>
                <div ref={floorOne} />
              </div>
            </div>
            <div className='floors__item grid-x align-spaced align-middle'>
              <div className='content grid-x cell large-8'>
                <div className='grid-y cell large-22 align-top'>
                  <div className='image'><img src={fuseWallet} /></div>
                  <div className='content__text'>
                    <FormattedMessage
                      defaultMessage='<span>Fuse Studio </span><span>|</span> <span>for operators</span>
                      {newLine}
                      An easy to use self-service smart contract platform for businesses.'
                      values={{
                        newLine: <br />,
                        span: chunks => <span>{chunks}</span>
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className='dots grid-y cell large-6 align-middle align-center'>
                <img src={dotFuseWallet} />
              </div>
              <div className='animation cell large-10'>
                <div ref={floorTwo} />
              </div>
            </div>
            <div className='floors__item grid-x align-spaced align-middle'>
              <div className='content grid-x cell large-8'>
                <div className='grid-y cell large-22 align-top'>
                  <div className='image'><img src={fuseStudio} /></div>
                  <div className='content__text'>
                    <FormattedMessage
                      defaultMessage='<span>Fuse Chain </span><span>|</span> <span>For network participants</span>
                      {newLine}
                      DPoS blockchain operated by validators and optimized for payments.'
                      values={{
                        newLine: <br />,
                        span: chunks => <span>{chunks}</span>
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className='dots grid-y cell large-6 align-middle align-center'>
                <img src={dotFuseWallet} />
              </div>
              <div className='animation cell large-10'>
                <div ref={floorThree} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
