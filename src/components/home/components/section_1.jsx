import React from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'
import GlobeThree from './globe_three'
import { isMobileOnly } from 'react-device-detect'
import VisibilitySensor from 'react-visibility-sensor'
import useFetch from 'use-http'
import useCounter from '@/hooks/useCounter'

const msgs = defineMessages({
  primaryText: {
    defaultMessage: 'Read Documentation'
  }
})

const Button = ({ link, type = 'primary', text }) => {
  const className = (type === 'primary') ? 'main_button main_button--no-arrow main_button--bold' : 'secondary_button'
  return (
    <a
      href={link}
      className={className}
    >
      <FormattedMessage {...text} />
    </a>
  )
}

const Banner = () => {
  const { data = { data: 0 } } = useFetch('https://studio.fuse.io/api/v1/communities/count', {}, [])
  const transactionCounter = useCounter(45161617)
  const communitiesCounter = useCounter(data.data)
  const walletsCounter = useCounter(951390)

  return (
    <section className='info_banner__wrapper'>
      <div className='info_banner__container'>
        <div className='info_banner'>
          <div className='item'>
            <div className='title'>
              <VisibilitySensor delayedCall>
                <span>{transactionCounter}</span>
              </VisibilitySensor>
              &nbsp;
              <FormattedMessage defaultMessage='Transactions' />
            </div>
          </div>
          <hr className='divier' />
          <div className='item'>
            <div className='title'>
              <VisibilitySensor delayedCall>
                <span>{walletsCounter}</span>
              </VisibilitySensor>
              &nbsp;
              <FormattedMessage defaultMessage='Wallets' />
            </div>
          </div>
          <hr className='divier' />
          <div className='item'>
            <div className='title'>
              <VisibilitySensor delayedCall>
                <span>{communitiesCounter}</span>
              </VisibilitySensor>
              &nbsp;
              <FormattedMessage defaultMessage='Communities' />
            </div>
          </div>
          <hr className='divier' />
          <div className='item'>
            <div className='title title--arrow'>
              <a
                rel='noreferrer noopener'
                target='_blank'
                href='https://explorer.fuse.io/'
              >
                <FormattedMessage defaultMessage='View stats' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SectionOne = () => {
  return (
    <section className='section-A'>
      <div className='section-A__wrapper'>
        <div className='section-A__container'>
          <div className='section-A__main'>
            <h1 className='main_title'>
              <FormattedMessage tagName='a' defaultMessage='Infrastructure for ' />
              <FormattedMessage tagName='a' defaultMessage='Open Source Money' />
            </h1>
            <p className='section-A__text'>
              <FormattedMessage
                defaultMessage='Launch community-centric payment systems and {newLine} token economies on an Ethereum-compatible {newLine} blockchain.'
                values={{
                  newLine: <br />,
                  b: (chunks) => <b>{chunks}</b>
                }}
              />
            </p>
            <div className='buttons'>
              <Button link='/docs' type='primary' text={msgs.primaryText} />
            </div>
          </div>
          <div className='canvas'>
            <GlobeThree
              width={isMobileOnly ? 500 : 750}
              height={isMobileOnly ? 500 : 750}
              pois={[
                {
                  creation: 1, // this vaule must be different for every poi !!!!!!!!!!!!!!!!! or no show ...
                  lat: 53.4084,
                  lon: 2.9916,
                  card_title: '<b> Liverpool</b>',
                  card_flag: 'data:image/jpg;base64,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',
                  card_subtitle: '<b>£22 GBP for Coffee &#9749</b>'
                },
                {
                  creation: 2,
                  lat: -9.19,
                  lon: -74.052,
                  card_title: '<b> Lima</b>',
                  card_flag: 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QA6RXhpZgAATU0AKgAAAAgAA1EQAAEAAAABAQAAAFERAAQAAAABAAAAAFESAAQAAAABAAAAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAgACADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/A2Sfbg+1NlmW3jZ5GVEUZLMcAV+Hf8AwXA+KXij4Yf8FSdTm8M+I9c8PyXHhbSfNbTr2S2MuDc4zsIzj3r7S/4IV6tqHxb/AGXvEWreKL+88R6pD4xuYUvNTlN1OiCw08hQ75IALMcA9WPqa8mjm0amLeE5dVfX0P1rOPCfE4DhKjxa8RGVOooe5ytSTlpvdrTv17I+uvit+038P/gf4eXVvFXi3RdG0+SYW6zSz7g0mC2wBckttVjgDoCap/Bn9rv4YftDXZtvBXjvwz4ivVRpTZ2l8hugi43MYSRJtGRk7cDI9a+O/wDg4nsI4P2RvByhflHixMDHT/Qbuviv/g3YhWP/AIKGSbVA/wCKc1P/ANDtaxrZtOGPWEUVZ2166nt5L4S4PHcB1uLZV5RqU1N8llyvkdrd9e/4EP8AwX5fb/wVCvv+xW0r/wBCua+5P+DfG+S0/Y68Tu5CoPGl0Sx4A/4l+nd6+ov2hv2Bvgz+1bqi6h8QPhx4X8R6usK266pLa+TqSxKSVjF1EVnCAsxC78AseOTTvg9+wZ8HvgN4X/sXwv8AD/QLPTftDXZhuY2v8zMFUybrhpG3FUQZznCgdBRh8pnTx0sW5Kzvp11IzvxYweP4DocJxoSjUp8nvXTi1Ft+uva3zPjv/g4M+JGh+Lv2aPCek6Tqun6tq0PilZJLGwnW6uY1FjdjJjjLMBkjkivj/wD4N3bpYf8Ago7PZTbre+j8Nak720ymOZFL2uCUbDAe5Ffuzpul2ui2UdtZ28FpbxDCRQxiNEHsBwKWbTre4vIbiS3hkuLYMIZWQF4g2N209RnAzjrgVpWylTxixfNqraW7Hm5R4t1sDwfV4R+rKUKimufmaa53f4bNO3qf/9k',
                  card_subtitle: '<b>13 PEN for Pizza &#127829</b>'
                },
                {
                  creation: 3,
                  lat: 13.7563,
                  lon: 105.5018,
                  card_title: '<b> Bangkok</b>',
                  card_flag: 'data:image/jpg;base64,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',
                  card_subtitle: '<b>15 THB for Cashback &#129297</b>'
                },
                {
                  creation: 4,
                  lat: 13.169570,
                  lon: -62.990021,
                  card_title: '<b> Curacao</b>',
                  card_flag: 'data:image/jpg;base64,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',
                  card_subtitle: '<b>50 ANG for Surf lesson &#127940</b>'
                },
                {
                  creation: 5,
                  lat: -33.8688,
                  lon: 156.2093,
                  card_title: '<b> Sydney</b>',
                  card_flag: 'data:image/jpg;base64,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',
                  card_subtitle: '<b>250 AUD for Car rental &#128663</b>'
                },
                {
                  creation: 6,
                  lat: 36.1699,
                  lon: -110.1398,
                  card_title: '<b> Las Vegas</b>',
                  card_flag: 'data:image/jpg;base64,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',
                  card_subtitle: '<b>300 USD for Wedding &#128141</b>'
                }
              ]}
            />
          </div>
        </div>
        <Banner />
      </div>
    </section>
  )
}

export default SectionOne
