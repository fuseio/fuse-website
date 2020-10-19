import React from 'react';
import step1 from '@/assets/images/step_1.png'
import step2 from '@/assets/images/step_2.png'
import step3 from '@/assets/images/step_3.png'
import { FormattedMessage } from 'react-intl';

const SectionThree = () => {
  return (
    <div className="blue">
      <section className="steps__wrapper grid-container">
        <div className="steps grid-x">
          <h1 className="steps__title">
            <FormattedMessage defaultMessage="How does it work?" />
          </h1>
          <div className="steps__video grid-x align-middle">
            <img src="./images/you-tube.svg" alt="tube" />&nbsp;
            <a rel="noreferrer noopener" target="_blank" href="https://www.youtube.com/channel/UC7NaJ0UhmyHi5MvZSk61akA/featured?view_as=subscriber"
              className='steps__watch'>
              <span>Watch our walkthroughs</span>
            </a>
          </div>
          <div className="items grid-x align-justify cell grid-margin-x">
            <div className="item cell medium-24 large-8">
              <img alt="=community" className="item__image" src={step1} />
              <div className="item__content">
                <div className="item__title">
                  <FormattedMessage defaultMessage="Create a community" />
                </div>
                <div className="item__text">
                  <FormattedMessage defaultMessage="With the Fuse Studio you can customize your own economy, where you set the
                  rules, decide the look and integrate a wide array of different features." />
                </div>
              </div>
            </div>
            <div className="item cell medium-24 large-8">
              <img alt="currency" className="item__image item__image--step2" src={step2} />
              <div className="item__content">
                <div className="item__title">
                  <FormattedMessage defaultMessage="Choose your currency" />
                </div>
                <div className="item__text">
                  <FormattedMessage defaultMessage="Fuse supports any ERC-20 token on Ethereum. You can choose your favorite
                  stablecoin like DAI or decide to mint your own." />
                </div>
              </div>
            </div>
            <div className="item cell medium-24 large-8">
              <img alt="customers" className="item__image item__image--step3" src="./images/step_3.png" />
              <div className="item__content">
                <div className="item__title">
                  <FormattedMessage defaultMessage="Grow your community" />
                </div>
                <div className="item__text">
                  <FormattedMessage defaultMessage="Begin inviting your community to your newly built ecosystem by sending them a
                  special invite link." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_E__wrapper grid-x align-center">
        <div className="section_E grid-x align-center  align-middle">
          <div className="section_E__content grid-y align-left  align-center large-12 cell medium-24">
            <div className="section_E__title">
              <FormattedMessage defaultMessage="Introducing the Fuse wallet" />
            </div>
            <div className="sub-title">
              <FormattedMessage defaultMessage="All community members can download their own Fuse wallet, where they can store a wide
              array of different currencies and tokens both crypto and traditional fiat currencies. Allowing them to
              participate in this digital economy with ease." />
            </div>
            <div className="features grid-x align-justify grid-margin-x">
              <div className="features__item grid-x align-middle cell small-24 medium-12">
                <div className="features__item__pic"><img alt="dollar" src="./images/merchant_support.svg" />
                </div>
                <div className="features__item__text">
                  <FormattedMessage defaultMessage="Merchant support" />
                </div>
              </div>
              <div className="features__item grid-x align-middle cell small-24 medium-12">
                <div className="features__item__pic"><img alt="ticket" src="./images/fast_verification.svg" />
                </div>
                <div className="features__item__text">
                  <FormattedMessage defaultMessage="Fast verification times" />
                </div>
              </div>
              <div className="features__item grid-x align-middle cell small-24 medium-12">
                <div className="features__item__pic"><img alt="safe" src="./images/fee_abstraction.svg" />
                </div>
                <div className="features__item__text">
                  <FormattedMessage defaultMessage="Fee abstraction" />
                </div>
              </div>
              <div className="features__item grid-x align-middle cell small-24 medium-12">
                <div className="features__item__pic"><img alt="safe" src="./images/highly_customizable.svg" />
                </div>
                <div className="features__item__text">
                  <FormattedMessage defaultMessage="Highly customizable" />
                </div>
              </div>
              <div className="features__item grid-x align-middle cell small-24 medium-12">
                <div className="features__item__pic"><img alt="safe" src="./images/frictionless.svg" />
                </div>
                <div className="features__item__text">
                  <FormattedMessage defaultMessage="Frictionless onboarding" />
                </div>
              </div>
              <div className="features__item grid-x align-middle cell small-24 medium-12">
                <div className="features__item__pic"><img alt="safe" src="./images/user.svg" />
                </div>
                <div className="features__item__text">
                  <FormattedMessage defaultMessage="User owned data" />
                </div>
              </div>
            </div>
            <div className="get-on-markets">
              <a rel="noreferrer noopener" target="_blank"
                href="https://apps.apple.com/il/app/fuse-wallet/id1491783654">
                <img alt="twitter" src="./images/apple.png" /></a>

              <a rel="noreferrer noopener" target="_blank"
                href="https://play.google.com/store/apps/details?id=io.fuse.fusecash">
                <img alt="android" src="./images/playstore.png" /></a>

              <a rel="noreferrer noopener" target="_blank" href="https://github.com/fuseio/fuse-wallet2.0">
                <img alt="twitter" src="./images/github_large.png" /></a>
            </div>
          </div>
          <div className="section_E__image large-10 cell medium-22">
            <img alt="money" src="./images/send_money.gif" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionThree;