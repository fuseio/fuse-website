import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import footer_logo from '@/assets/images/site-logo-grad.svg'

const Footer = ({ history, isNetworkFooter = false }) => {
  const [title, setTitle] = useState('Sign up for update')
  const networkPage = () => history.push('/network')
  return (
    <footer className={classNames('footer__wrapper grid-x align-middle align-center', { 'footer__wrapper--dark': isNetworkFooter })}>
      <div className='footer grid-x align-justify align-middle'>
        <div className='footer__item cell large-12 small-24'>
          <div className='footer__logo__wrapper'>
            <a rel="noreferrer noopener" className='footer__logo'>
              <img alt="logo" src={footer_logo} />
            </a>
            <span>© 2020 Fuse</span>
          </div>
        </div>
        <div className='footer__item cell large-12 small-24'>
          <div className='footer__nav grid-x'>
            <a rel="noreferrer noopener" className='footer__link footer__link--white' target='_blank'
              href='https://explorer.fuse.io/'>Explorer</a>
            <a rel="noreferrer noopener" className='footer__link footer__link--white' target='_blank'
              href='https://docs.fuse.io/'>Docs</a>
            <a rel="noreferrer noopener" className='footer__link footer__link--white' target='_blank' role='button' onClick={networkPage}>Network</a>
            <div className="footer__icons grid-x grid-margin-x">
              <a rel="noreferrer noopener" className='footer__icon cell shrink' target='_blank'
                href='https://medium.com/fusenet'>
                <div className="medium image"></div>
              </a>
              <a rel="noreferrer noopener" className='footer__icon cell shrink' target='_blank'
                href='https://github.com/fuseio'>
                <div className="github image"></div>
              </a>
              <a rel="noreferrer noopener" className='footer__icon cell shrink' target='_blank'
                href='https://twitter.com/fuse_network'>
                <div className="twitter image"></div>
              </a>
              <a rel="noreferrer noopener" className='footer__icon cell shrink' target='_blank'
                href='https://discordapp.com/invite/jpPMeSZ'>
                <div className="discord image"></div>
              </a>
              <a rel="noreferrer noopener" className='footer__icon cell shrink' target='_blank' href='https://t.me/fuseio'>
                <div className="telegram image"></div>
              </a>
            </div>
          </div>
        </div>
        {
          !isNetworkFooter && (
            <div className='footer__item cell large-12 small-24 grid-y'>
              <div className="footer__sign grid-y align-left">
                <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
                <Formik
                  initialValues={{ email: '' }}
                  validate={values => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = 'Required';
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = 'Invalid email address';
                    }
                    return errors;
                  }}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    const { email } = values
                    const user = {
                      accountAddress: email,
                      email: email,
                      provider: 'HDWallet',
                      subscribe: true,
                      source: 'Fuse.io',
                      displayName: 'Fuse.io',
                    };
                    try {
                      const response = await fetch('https://studio.fuse.io/api/v2/users', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        referrerPolicy: 'no-referrer',
                        body: JSON.stringify(user)
                      })
                      if (response.status === 200) {
                        setTitle('<span>Thanks joining our mailing list! &#128077;</span>')
                        setSubmitting(false);
                        resetForm({ email: '' })
                      }
                    } catch (error) {
                      setTitle('<span>Something went wrong &#128078;</span>')
                      resetForm({ email: '' })
                      setSubmitting(false)
                    }
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form className="grid-x align-middle align-start">
                      <Field type="email" className="input cell small-16" placeholder="    Enter email" name="email" />
                      <button disabled={isSubmitting} id="btn_submit" type="submit" className="button cell small-6">Send</button>
                    </Form>
                  )}
                </Formik>
                {/* <form id="myForm" className="grid-x align-middle align-start">
                  <input id="email" autoComplete="off" placeholder="    Enter email" type="email"
                    className="input cell small-16" />
                  <button id="btn_submit" type="submit" className="button cell small-6">Send</button>
                </form> */}
              </div>
            </div>
          )
        }
      </div>
    </footer>
  )
}

export default withRouter(Footer)