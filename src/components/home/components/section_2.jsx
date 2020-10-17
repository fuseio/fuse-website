import React from 'react';

const SectionTwo = () => {
  return (
    <section className='studio__wrapper grid-x align-center'>
      <div className="studio">
        <h1 className="studio__title">定制属于你自己的钱包和货币</h1>
        <div className="studio__text">Fuse Studio允许您创建属于你自己的钱包，为你的公司/社区设置和定义属于自己的品牌货币。我们处理所有繁重的技术任务，而你通过轻松的集成支付解决方案来奖励自己的用户和实现用户增长。
        </div>
        <div className="dapp_image">
          <a rel="noopener noreferrer" href='https://studio.fuse.io' target="_blank" role="button" className="button__wrapper">
            <button data-event="Start now with the studio" className="button">
              和我们一起从现在开始吧
              <img alt='image' src="./images/blue_arrow.svg" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;