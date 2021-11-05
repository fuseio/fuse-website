import React from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'
import Globe from './globe'

const msgs = defineMessages({
  primaryText: {
    defaultMessage: 'Launch Community'
  },
  secondaryText: {
    defaultMessage: 'Stake Fuse'
  }
})

const Button = ({ link, type = 'primary', text }) => {
  const className = (type === 'primary') ? 'main_button main_button--no-arrow main_button--bold' : 'secondary_button'
  return (
    <a
      rel='noreferrer noopener' target='_blank'
      href={link}
      className={className}
    >
      <FormattedMessage {...text} />
    </a>
  )
}

const SectionOne = () => {
  return (
    <section className='section-A'>
      <div className='section-A__wrapper'>
        <div className='section-A__container'>
          <div className='section-A__main'>
            <h1 className='main_title'>
              <FormattedMessage defaultMessage='The Infrastructure for Open-Source Money' />
            </h1>
            <p className='section-A__text'>
              <FormattedMessage
                defaultMessage='Launch community-centric payment systems {newLine} and token economies on an Ethereum-{newLine} compatible blockchain.'
                values={{
                  newLine: <br />,
                  b: (chunks) => <b>{chunks}</b>
                }}
              />
            </p>
            <div className='buttons'>
              <Button link='https://studio.fuse.io/' type='primary' text={msgs.primaryText} />
              <Button link='https://staking.fuse.io/' type='secondary' text={msgs.secondaryText} />
            </div>
          </div>
          <div className='canvas grid-x align-right'>
            <Globe />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
