import * as React from 'react'
import { View, Image } from 'react-native'
import styled from 'styled-components'
import logo from '../../assets/images/logo-full.svg'
import TabBox, { Tabs } from './components/TabBox'
import { useUserContext } from '../../screens/Login/UserContext'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import LinkToOtherLogin from './components/LinkToOtherLogin'

const Wrapper = styled(View)`
  min-height: 100vh;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(50% 100%, var(--dark-blue) 0%, var(--very-dark-blue) 100%);
`

const LogoWrapper = styled(View)`
  position: absolute;
  top: 86px;
  /* top: 44px;
  left: 50px; */
`

export const ContentWrapper = styled(View)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

export const FormWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const FormRowWrapper = styled(View)`
  width: 90%;
  flex-direction: row;
  justify-content: space-around;
`

const Login = (props: any) => {
  const isLandlord = props.location.pathname.indexOf('/landlord') !== -1
  const path = isLandlord
    ? props.location.pathname.substring('/landlord'.length)
    : props.location.pathname
  const { logIn, signUp } = useUserContext()
  return (
    <Wrapper>
      <LogoWrapper>
        <Image source={{ uri: logo }} style={{ width: 180, height: 46 }} />
      </LogoWrapper>
      <TabBox activeTab={path} isLandlord={isLandlord}>
        {path === Tabs.login ? (
          <LoginForm
            onSubmit={async (email, passowrd) => {
              await logIn(email, passowrd, isLandlord)
              props.history.push('/')
            }}
          />
        ) : (
          <SignupForm
            onSubmit={async args => {
              await signUp({ ...args, isLandlord })
              props.history.push('/')
            }}
          />
        )}
      </TabBox>
      <LinkToOtherLogin isLandlord={isLandlord} />
    </Wrapper>
  )
}

export default Login
