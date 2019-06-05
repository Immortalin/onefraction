import * as React from 'react'
import { Formik } from 'formik'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { ContentWrapper, FormWrapper, FormRowWrapper } from '../Login'

interface SignupFormProps {
  onSubmit: (args: { email: string; password: string; firstName: string; lastName: string }) => void
}

const SignupForm = ({ onSubmit }: SignupFormProps) => (
  <Formik
    initialValues={{ email: '', password: '', firstName: '', lastName: '' }}
    validate={values => {
      const errors: any = {}
      if (!values.firstName) {
        errors.firstName = 'Required'
      }
      if (!values.lastName) {
        errors.lastName = 'Required'
      }
      if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      if (!values.password) {
        errors.password = 'Required'
      }
      return errors
    }}
    validateOnBlur={true}
    validateOnChange={false}
    onSubmit={async (values, { setSubmitting }) => {
      try {
        await onSubmit({ ...values })
      } catch (e) {
        console.log('ERROR', e.message)
      }
      setSubmitting(false)
    }}
  >
    {({
      values,
      // errors,
      // touched,
      // handleChange,
      handleBlur,
      handleSubmit,
      setFieldValue,
      isSubmitting,
    }) => (
      <ContentWrapper>
        <FormWrapper>
          <FormRowWrapper>
            <Input
              name="firstName"
              label="First Name"
              placeholder="John"
              value={values.firstName}
              onChangeText={text => setFieldValue('firstName', text)}
              style={{ width: '45%', marginBottom: 30 }}
            />
            <Input
              name="lastName"
              label="Last Name"
              placeholder="Doe"
              value={values.lastName}
              onChangeText={text => setFieldValue('lastName', text)}
              style={{ width: '45%', marginBottom: 30 }}
            />
          </FormRowWrapper>
          <FormRowWrapper>
            <Input
              name="email"
              label="Email"
              placeholder="you@example.com"
              value={values.email}
              onChangeText={text => setFieldValue('email', text)}
              onBlur={handleBlur}
              textContentType="emailAddress"
              style={{ width: '45%' }}
            />
            <Input
              name="password"
              label="Password"
              placeholder="••••••••••"
              value={values.password}
              onChangeText={text => setFieldValue('password', text)}
              onBlur={handleBlur}
              textContentType="password"
              style={{ width: '45%' }}
              secure
            />
          </FormRowWrapper>
        </FormWrapper>
        <Button onPress={() => handleSubmit()} disabled={isSubmitting}>
          SIGNUP
        </Button>
      </ContentWrapper>
    )}
  </Formik>
)

export default SignupForm
