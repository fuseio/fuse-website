import React from "react";
import { PopupText } from "react-calendly";

import bookIcon from "@/assets/images/book-meeting.svg";
import signUpIcon from "@/assets/images/signup.svg";
import blueArrow from "@/assets/images/blue_arrow.svg";
import NewsletterForm from "../../shared/newsletter_form";

const SectionSeven = () => {
  return (
    <section className="contact-us">
      <div className="contact-us__wrapper grid-container">
        <div>
          <h1 className="contact-us__title">联系我们</h1>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="contact-us__newsletter cell large-12 small-24">
            <img src={signUpIcon} alt="signup" className="contact-us-icon" />
            <div>
              <h2 className="contact-us__subtitle ">立即注册，获得更多最新信息</h2>
            </div>
            <div className="contact-us__text">
              随时保持对来自Fuse网络的最新消息和新闻的关注
            </div>
            <NewsletterForm />
          </div>
          <div className="contact-us__booking cell large-9 small-24 large-offset-3">
            <img src={bookIcon} alt="" className="contact-us-icon" />
            <div>
              <h2 className="contact-us__subtitle">预约会议</h2>
            </div>
            <div className="contact-us__text">
             Fuse团队的成员将很高兴带你体会启动经济模型的旅程
            </div>
            <button className="button contact-us__button">
              <PopupText
                text="Book demo"
                url="https://calendly.com/mark-fuse"
              />
              <span className="contact-us__arrow">
                <img alt="image" src={blueArrow} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;
