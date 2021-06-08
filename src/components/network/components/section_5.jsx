import React from 'react'
import { FormattedMessage } from 'react-intl'
import NewsletterForm from '../../shared/newsletter_form'

const SectionFive = () => {
  return (
    <section className='sign_for_updates grid-y align-middle align-center'>
      <h1 className='sign_for_updates__title'>
        <FormattedMessage defaultMessage='Sign up for updates' />
      </h1>
      <div className='text'>
        <FormattedMessage
          defaultMessage="Don't miss the latest updates on Fuse and the future of payments."
         
        />
      </div>
      <NewsletterForm />
    </section>
  )
}

export default SectionFive
