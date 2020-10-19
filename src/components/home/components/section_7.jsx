import React from "react";
import { FormattedMessage } from 'react-intl';
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
          <h1 className="contact-us__title">
            <FormattedMessage
              defaultMessage="Pay a fixed fee of up to 1 cent per transaction to move money instantly without any hidden fees and inefficiencies"
            />
          </h1>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="contact-us__newsletter cell large-12 small-24">
            <img src={signUpIcon} alt="signup" className="contact-us-icon" />
            <div>
              <h2 className="contact-us__subtitle ">
                <FormattedMessage defaultMessage="Sign up for update" />
              </h2>
            </div>
            <div className="contact-us__text">
              <FormattedMessage
                defaultMessage="Stay caught up with all the latest updates and exciting news from the Fuse Network."
              />

            </div>
            <NewsletterForm />
          </div>
          <div className="contact-us__booking cell large-9 small-24 large-offset-3">
            <img src={bookIcon} alt="" className="contact-us-icon" />
            <div>
              <h2 className="contact-us__subtitle">
                <FormattedMessage defaultMessage="Book a meeting" />
              </h2>
            </div>
            <div className="contact-us__text">
              <FormattedMessage
                defaultMessage="A member of the Fuse team will be happy to take you through the process of launching an economy"
              />

            </div>
            <button className="button contact-us__button">
              <PopupText
                text={<FormattedMessage defaultMessage="Book demo" />}
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
