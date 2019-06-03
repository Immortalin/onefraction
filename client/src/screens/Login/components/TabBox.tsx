import * as React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components'
import { Link } from '../../../components/Router'
import Box from '../../../components/Box'

export enum Tabs {
  login = '/login',
  signup = '/signup',
}

const TabRow = styled(View)`
  height: 90px;
  flex-direction: row;
`

const TabOuter = styled(Link)<{ active: boolean; left?: boolean; right?: boolean }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: ${props => (props.active ? '#EDEEF3' : '#fff')};
  ${props => props.left && 'border-top-left-radius: 10px;'}
  ${props => props.right && 'border-top-right-radius: 10px;'}
`

const TabInner = styled(View)`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const TabText = styled(Text)`
  font-size: 20px;
  font-weight: 900;
  color: #575b7e;
  letter-spacing: -0.91px;
`

interface TabBoxProps {
  children: JSX.Element
  activeTab: Tabs
  isLandlord: boolean
}

const TabBox = ({ children, activeTab, isLandlord }: TabBoxProps) => (
  <Box maxWidth={600} width={'90%'} height={500}>
    <TabRow>
      <TabOuter
        left
        active={activeTab === Tabs.login}
        to={`${isLandlord ? '/landlord' : ''}${Tabs.login}`}
        replace
        component={TouchableWithoutFeedback}
      >
        <TabInner>
          <TabText>Login</TabText>
        </TabInner>
      </TabOuter>
      <TabOuter
        right
        active={activeTab === Tabs.signup}
        to={`${isLandlord ? '/landlord' : ''}${Tabs.signup}`}
        replace
        component={TouchableWithoutFeedback}
      >
        <TabInner>
          <TabText>Signup</TabText>
        </TabInner>
      </TabOuter>
    </TabRow>
    <View style={{ flex: 1 }}>{children}</View>
  </Box>
)

export default TabBox
