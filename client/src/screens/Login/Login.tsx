import * as React from 'react'
import { View, Image } from 'react-native'
import styled from 'styled-components'
import logo from '../../assets/images/logo-full.svg'
import Button from '../../components/Button'
import Input from '../../components/Input'
import TabBox, { Tabs } from './components/TabBox'
import { useUserContext } from '../../screens/Login/UserContext'

const Wrapper = styled(View)`
  min-height: 100vh;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(50% 100%, #575b7e 0%, #201c3d 100%);
`

const LogoWrapper = styled(View)`
  position: absolute;
  top: 86px;
  /* top: 44px;
  left: 50px; */
`

const ContentWrapper = styled(View)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

const FormWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const FormRowWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-around;
`

const Login = (props: any) => {
  const path = props.location.pathname
  const { logIn, signUp } = useUserContext()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  return (
    <Wrapper>
      <LogoWrapper>
        <Image source={{ uri: logo }} style={{ width: 180, height: 46 }} />
      </LogoWrapper>
      <TabBox activeTab={path}>
        {path === Tabs.login ? (
          <ContentWrapper>
            <FormWrapper>
              <Input
                label="Email"
                placeholder="you@example.com"
                value={email}
                onChangeText={setEmail}
                style={{ marginBottom: 30 }}
                textContentType="emailAddress"
              />
              <Input
                label="Password"
                placeholder="••••••••••"
                value={password}
                onChangeText={setPassword}
                textContentType="password"
                secure
              />
            </FormWrapper>
            <Button onPress={() => logIn(email, password)}>LOGIN</Button>
          </ContentWrapper>
        ) : (
          <ContentWrapper>
            <FormWrapper>
              <FormRowWrapper>
                <Input
                  label="First Name"
                  placeholder="John"
                  value={firstName}
                  onChangeText={setFirstName}
                  style={{ width: '45%', marginBottom: 30 }}
                />
                <Input
                  label="Last Name"
                  placeholder="Doe"
                  value={lastName}
                  onChangeText={setLastName}
                  style={{ width: '45%', marginBottom: 30 }}
                />
              </FormRowWrapper>
              <FormRowWrapper>
                <Input
                  label="Email"
                  placeholder="you@example.com"
                  value={email}
                  onChangeText={setEmail}
                  textContentType="emailAddress"
                  style={{ width: '45%', marginBottom: 30 }}
                />
                <Input
                  label="Password"
                  placeholder="••••••••••"
                  value={password}
                  onChangeText={setPassword}
                  textContentType="newPassword"
                  secure
                  style={{ width: '45%', marginBottom: 30 }}
                />
              </FormRowWrapper>
            </FormWrapper>
            <Button onPress={() => signUp({ email, password, firstName, lastName })}>SIGNUP</Button>
          </ContentWrapper>
        )}
      </TabBox>
    </Wrapper>
  )
}

export default Login
