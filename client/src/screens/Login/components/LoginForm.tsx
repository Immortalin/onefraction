import * as React from 'react'
import { Formik } from 'formik'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { ContentWrapper, FormWrapper } from '../Login'

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void
}

const LoginForm = ({ onSubmit }: LoginFormProps) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validate={values => {
      const errors: any = {}
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
        await onSubmit(values.email, values.password)
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
          <Input
            name="email"
            label="Email"
            placeholder="you@example.com"
            value={values.email}
            onChangeText={text => setFieldValue('email', text)}
            onBlur={handleBlur}
            style={{ marginBottom: 30 }}
            textContentType="emailAddress"
          />
          <Input
            name="password"
            label="Password"
            placeholder="••••••••••"
            value={values.password}
            onChangeText={text => setFieldValue('password', text)}
            onBlur={handleBlur}
            textContentType="password"
            secure
          />
        </FormWrapper>
        <Button onPress={() => handleSubmit()} disabled={isSubmitting}>
          LOGIN
        </Button>
      </ContentWrapper>
    )}
  </Formik>
)

export default LoginForm
