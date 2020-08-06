import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string } from "yup"

const SignupSchema = object().shape({
  email: string().email('Invalid email').required('Required'),
})

const SectionFive = () => {
  const [title, setTitle] = useState('')
  return (
    <section className="sign_for_updates grid-y align-middle align-center">
      <h1 className='title'>Sign up for updates</h1>
      <div className='text'>Don't miss the latest updates on Fuse and the <br /> future of payments.</div>
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
            displayName: 'Fuse.io',
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
              setTitle('<span>Thanks joining our mailing list! &#128077</span>')
              setSubmitting(true)
            } else if (response.status === 500) {
              setTitle('<span>Something went wrong &#128078</span>')
              setSubmitting(true)
            }
            resetForm({ email: '' })
          } catch (error) {
            resetForm({ email: '' })
            setTitle('<span>Something went wrong &#128078</span>')
            setSubmitting(true)
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
            <Field type="email" className="form__input" placeholder="Enter email" name="email" />
            <button disabled={isSubmitting} id="btn_submit" type="submit" className="form__button">Send</button>
            <ErrorMessage name="email">{(msg) => <div className='error'>{msg}</div>}</ErrorMessage>
          </Form>
        )}
      </Formik>
    </section>
  )
}

export default SectionFive