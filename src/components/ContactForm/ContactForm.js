import React, { memo, useState } from 'react';
import classnames from 'classnames';

import ReCAPTCHA from 'react-google-recaptcha';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import fetchJson from '../../lib/fetchJson';
import styles from './ContactForm.module.scss';

import { ContactSchema } from '../../schemas/ContactSchema';
import Button from '../Button/Button';

function ContactForm({ className }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [displayError, setDisplayError] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = React.createRef();

  const handleSubmit = (formValues) => {
    setIsSubmitting(true);
    formValues.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();

    if (recaptchaValue) {
      try {
        fetchJson('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email,
            message: message
          })
        })
          .then((res) => {
            if (res.message === 200) {
              // Successfully sent mail
              setSubmitted(true);
              setIsSubmitting(false);
            } else {
              // console.log(`Failed to submit. In 'then' method in else, please check response code: ${res}`);
              setDisplayError('Unexpected error. Please refresh and try again.');
            }
          })
          .catch(() => {
            setDisplayError('Error trying to submit, please try again');
          });
      } catch (error) {
        setDisplayError('Error trying to submit, please try again.');
        // console.log('Fetch failed.');
      }
    } else {
      setDisplayError('Please complete captcha below then resubmit.');
    }
  };

  const initialValues = {
    email: '',
    message: ''
  };

  return (
    <div className={classnames(styles.ContactForm, className)}>
      {submitted === false ? (
        isSubmitting ? (
          <div className={classnames(styles.spinnerTest)}>
            <p>Loading...</p>
          </div>
        ) : (
          <>
            {displayError && <p className={classnames(styles.errorMessage)}>{displayError}</p>}
            <Formik
              initialValues={initialValues}
              validationSchema={ContactSchema}
              onSubmit={(formValues) => {
                handleSubmit(formValues);
              }}
            >
              <Form
                onSubmit={(formValues) => {
                  handleSubmit(formValues);
                }}
              >
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={classnames(styles.inputLabel)}>
                    <Field
                      className={classnames(styles.inputField, styles.emailInputField)}
                      onChange={(formValues) => {
                        setEmail(formValues.target.value);
                      }}
                      id="email"
                      type="email"
                      name="email_address"
                      aria-label="Email address"
                      placeholder="Email"
                      required
                      disabled={isSubmitting}
                    />
                    <ErrorMessage name="email" />
                  </label>
                  <label htmlFor="message" className={classnames(styles.inputLabel)}>
                    <textarea
                      className={classnames(styles.inputField, styles.messageInputField)}
                      onChange={(formValues) => {
                        setMessage(formValues.target.value);
                      }}
                      id="message"
                      type="text"
                      name="message"
                      placeholder="Message"
                      aria-label="Message"
                      required
                      minLength="8"
                      disabled={isSubmitting}
                    />
                  </label>
                </div>
                <Button className={classnames(styles.submitButton)}>Submit</Button>
                <ReCAPTCHA
                  className={classnames(styles.captcha)}
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
                />
              </Form>
            </Formik>
          </>
        )
      ) : (
        <div className={classnames(styles.successContainer)}>
          <p className={classnames(styles.successTitle)}>Success!</p>
          <p className={classnames(styles.succesMessage)}>
            Thanks for reaching out, we&quot;ll get back to you shortly.
          </p>
        </div>
      )}
    </div>
  );
}

export default memo(ContactForm);
