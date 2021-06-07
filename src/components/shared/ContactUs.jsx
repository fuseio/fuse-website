import React from 'react'
import { FormattedMessage } from 'react-intl'
import { PopupButton } from 'react-calendly'

import bookIcon from '@/assets/images/book-meeting.svg'
import signUpIcon from '@/assets/images/signup.svg'
import NewsletterForm from '@/components/shared/newsletter_form'

const ContactUs = () => {
  return (
    <section className='contact-us'>
      <div className='contact-us__wrapper grid-container'>
        <div>
          <h1 className='contact-us__title'>
            <FormattedMessage
              defaultMessage='Contact us'
            />
          </h1>
        </div>
        <div className='grid-x grid-margin-x'>
          <div className='contact-us__newsletter cell large-12 small-24'>
            <img src={signUpIcon} alt='signup' className='contact-us-icon' />
            <div>
              <h2 className='contact-us__subtitle '>
                <FormattedMessage defaultMessage='Stay updated' />
              </h2>
            </div>
            <div className='contact-us__text'>
              <FormattedMessage defaultMessage='Stay caught up with the most relevant news from the Fuse ecosystem. No spam - we promise!' />
            </div>
            <NewsletterForm />
          </div>
          <div className='contact-us__booking cell large-9 small-24 large-offset-3'>
            <img src={bookIcon} alt='' className='contact-us-icon' />
            <div>
              <h2 className='contact-us__subtitle'>
                <FormattedMessage defaultMessage='Book a meeting' />
              </h2>
            </div>
            <div className='contact-us__text'>
              <FormattedMessage defaultMessage='Interested in launching a community-centric payments system? Or have a partnership in mind?' />
            </div>
            <PopupButton
              className='button main_button contact-us__button'
              url='https://form.typeform.com/to/LMdyK0st?typeform-medium=embed-snippet'
              text={<FormattedMessage defaultMessage='Contact Form' />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
