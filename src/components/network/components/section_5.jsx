import React from 'react'
import NewsletterForm from '../../shared/newsletter_form'

const SectionFive = () => {
  return (
    <section className="sign_for_updates grid-y align-middle align-center">
      <h1 className='title'>Sign up for updates</h1>
      <div className='text'>Don't miss the latest updates on Fuse and the <br /> future of payments.</div>
      <NewsletterForm />
    </section>
  )
}

export default SectionFive