import React from "react";
import { FormattedMessage } from "react-intl";
import whiteArrow from "@/assets/images/white_arrow.svg";
import Globe from "./globe";
import { isMobileOnly } from "react-device-detect";

const SectionOne = () => {
  return (
    <section className="section-A">
      <div className="section-A__wrapper">
        <div className="section-A__container">
          <div className="section-A__main">
            <h1 className="main_title">
              The Infrastructure for {!isMobileOnly ? <br /> : null} Open-Source
              Money
              {/* <FormattedMessage defaultMessage='Turning communities into thriving economies' /> */}
            </h1>
            <p className="section-A__text">
              <FormattedMessage
                defaultMessage="Build community-centric, mobile-first {newLine} payment systems with <b>zero coding</b>{newLine} <b>experience</b> on a low-cost, DeFi platform."
                values={{
                  newLine: <br />,
                  b: (chunks) => <b>{chunks}</b>,
                }}
              />
            </p>
            {/* <div className='grid-x buttons'>
            <a rel='noopener noreferrer' href='https://studio.fuse.io' target='_blank' role='button' className='cell shrink'>
              <button
                data-event='Launch an economy'
                className='section-A__launch__button section-A__launch__button--blue'
              >
                <span>
                  <FormattedMessage defaultMessage='Launch an economy' />
                </span>
                <span className='section-A__arrow'>
                  <img alt='image' src={whiteArrow} />
                </span>
              </button>
            </a>
          </div> */}
          </div>
          <div className="canvas grid-x align-right">
            <Globe />
          </div>
        </div>
      </div>
      {/* <div className='section-A__image'>
      </div> */}
    </section>
  );
};

export default SectionOne;
