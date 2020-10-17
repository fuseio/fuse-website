import React from 'react';

const SectionSix = () => {
  return (
    <section className="why_fuse_better">
      <div className="why_fuse_better__wrapper grid-x align-middle">
        <div className="why_fuse_better__content">
          <div>
            <h1 className="title">为什么在FUSE上的开源支付方式是更好的现金选择?</h1>
          </div>
          <div className="items">
            <div className="item">
              <div className="image">
                <img src="./images/network_world.png" alt="network_world" />
              </div>
              <div className="line"></div>
              <div className="text">
               首先它的准入门槛很低，因此这个技术可以izai世界上任何地方推广
              </div>
            </div>
            <div className="item">
              <div className="image">
                <img src="./images/network_wallet.png" alt="network_wallet" />
              </div>
              <div className="line"></div>
              <div className="text">
               和去中心化金融对接，这样你就可以用你的钱做更多的事情
              </div>
            </div>
            <div className="item">
              <div className="image grid-x align-center align-middle">
                <img style={{ width: '75px', height: '75px' }} src="./images/network_coin.png" alt="network_coin.png" />
              </div>
              <div className="line"></div>
              <div className="text">
               每笔交易支付最多1美分的固定费用，在没有任何隐藏费用情况下非常高效的进行资金的兑换
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSix;