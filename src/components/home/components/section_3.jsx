import React from 'react';
import step1 from '@/assets/images/step_1.png'
import step2 from '@/assets/images/step_2.png'
import step3 from '@/assets/images/step_3.png'

const SectionThree = () => {
  return (
    <div className="blue">
      <section className="steps__wrapper grid-container">
        <div className="steps grid-x">
          <h1 className="steps__title">它是如何使用的呢？</h1>
          <div className="steps__video grid-x align-middle">
            <img src="./images/you-tube.svg" alt="tube" />&nbsp;
            <a rel="noreferrer noopener" target="_blank" href="https://www.youtube.com/channel/UC7NaJ0UhmyHi5MvZSk61akA/featured?view_as=subscriber"
              className='steps__watch'>
              <span>观看我们的使用流程</span>
            </a>
          </div>
          <div className="items grid-x align-justify cell grid-margin-x">
            <div className="item cell medium-24 large-8">
              <img alt="=community" className="item__image" src={step1} />
              <div className="item__content">
                <div className="item__title">社区建立</div>
                <div className="item__text">你可以使用Fuse Studio 来定制属于你自己的经济系统，在其中你可以设置规则，觉得外观并集成大量不同的特征。</div>
              </div>
            </div>
            <div className="item cell medium-24 large-8">
              <img alt="currency" className="item__image item__image--step2" src={step2} />
              <div className="item__content">
                <div className="item__title">选择你的货币</div>
                <div className="item__text">Fuse支持Ethereum上任何ERC-2.0代币，您可以选择你最喜欢的稳定币比如DAI， 或者创建一个属于你自己的代币。</div>
              </div>
            </div>
            <div className="item cell medium-24 large-8">
              <img alt="customers" className="item__image item__image--step3" src="./images/step_3.png" />
              <div className="item__content">
                <div className="item__title">社区增长</div>
                <div className="item__text">通过发送一个特别的邀请链接来邀请你的社区成员到你新创建的生态系统中。</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_E__wrapper grid-x align-center">
        <div className="section_E grid-x align-center  align-middle">
          <div className="section_E__content grid-y align-left  align-center large-12 cell medium-24">
            <div className="section_E__title">Fuse钱包介绍</div>
            <div className="sub-title">所有社区成员都可以下载他们自己的Fuse钱包，在那里他们可以存储大量不同的货币和代币，包括加密货币和传统的法定货币，可以让他们轻松地参与到数字经济中来。</div>
            <div className="features grid-x align-justify grid-margin-x">
              <div className="features__item grid-x align-middle cell small-24 medium-12">
                <div className="features__item__pic"><img alt="dollar" src="./images/merchant_support.svg" />
                </div>
                <div className="features__item__text">商业支持</div>
              </div>
              <div className="features__item grid-x align-middle cell small-24 medium-12">
                <div className="features__item__pic"><img alt="ticket" src="./images/fast_verification.svg" />
                </div>
                <div className="features__item__text">快速确认</div>
              </div>
              <div className="features__item grid-x align-middle cell small-24 medium-12">
                <div className="features__item__pic"><img alt="safe" src="./images/fee_abstraction.svg" />
                </div>
                <div className="features__item__text">费用分离</div>
              </div>
              <div className="features__item grid-x align-middle cell small-24 medium-12">
                <div className="features__item__pic"><img alt="safe" src="./images/highly_customizable.svg" />
                </div>
                <div className="features__item__text">高度定制化</div>
              </div>
              <div className="features__item grid-x align-middle cell small-24 medium-12">
                <div className="features__item__pic"><img alt="safe" src="./images/frictionless.svg" />
                </div>
                <div className="features__item__text">无摩擦使用流程</div>
              </div>
              <div className="features__item grid-x align-middle cell small-24 medium-12">
                <div className="features__item__pic"><img alt="safe" src="./images/user.svg" />
                </div>
                <div className="features__item__text">用户自持数据</div>
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