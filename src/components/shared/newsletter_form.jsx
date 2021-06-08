import React, { useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { object, string } from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const NewsletterForm = () => {
  const [title, setTitle] = useState('')
  const intl = useIntl()

  const emailInvalidMessage = intl.formatMessage({
    defaultMessage: 'Invalid email'
  })
  const requiredMessage = intl.formatMessage({
    defaultMessage: 'Required'
  })
  const SignupSchema = object().shape({
    email: string().email(emailInvalidMessage).required(requiredMessage)
  })

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const { email } = values
        const user = {
          accountAddress: email,
          email: email,
          provider: 'HDWallet',
          subscribe: true,
          source: 'Fuse.io',
          displayName: 'Fuse.io'
        }

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
            const okMessage = intl.formatMessage({
              defaultMessage: 'Thanks joining our mailing list! &#128077'
            })
            setTitle(`<span>${okMessage}</span>`)
            setTimeout(() => {
              setTitle('')
            }, 3000)
            setSubmitting(true)
          } else if (response.status === 500) {
            const errorMessage = intl.formatMessage({
              defaultMessage: 'Something went wrong &#128078'
            })
            setTitle(`<span>${errorMessage}</span>`)
            setTimeout(() => {
              setTitle('')
            }, 3000)
            setSubmitting(true)
          }

          resetForm({ email: '' })
        } catch (error) {
          const errorMessage = intl.formatMessage({
            defaultMessage: 'Something went wrong &#128078'
          })
          resetForm({ email: '' })
          setTitle(`<span>${errorMessage}</span>`)
          setTimeout(() => {
            setTitle('')
          }, 3000)
          setSubmitting(true)
        }
      }}
    >
      {({ isSubmitting, dirty }) => (
        <Form className='newsletter__form '>
          <div className='title' dangerouslySetInnerHTML={{ __html: title }} />
          <FormattedMessage defaultMessage='Enter Email'>
            {(txt) => (
              <Field
                type='email'
                className='newsletter__form__input'
                placeholder={txt}
                name='email'
              />
            )}
          </FormattedMessage>
          <ErrorMessage name='email'>
            {(msg) => (
              <div className='newsletter__form__mobile-error'>{msg}</div>
            )}
          </ErrorMessage>
          <button
            disabled={!dirty || isSubmitting}
            id='btn_submit'
            type='submit'
            className='newsletter__form__button'
          >
            <FormattedMessage defaultMessage='Send' />
          </button>
          <ErrorMessage name='email'>
            {(msg) => <div className='newsletter__form__error '>{msg}</div>}
          </ErrorMessage>
        </Form>
      )}
    </Formik>
  )
}

export default NewsletterForm
