import * as React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components'
import { Link } from '../../../components/Router'
import Box, { Variants as BoxVariants } from '../../../components/Box'

export enum Tabs {
  login = '/login',
  signup = '/signup',
}

enum Sides {
  left = 'LEFT',
  right = 'RIGHT',
}

const TabRow = styled(View)`
  height: 90px;
  flex-direction: row;
`

const TabOuter = styled(Link)<{ active: boolean; side?: Sides }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: ${props => (props.active ? 'var(--light-grayish-blue)' : 'var(--white)')};
  ${props => props.side === Sides.left && 'border-top-left-radius: 10px;'}
  ${props => props.side === Sides.right && 'border-top-right-radius: 10px;'}
`

const TabInner = styled(View)`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const TabText = styled(Text)`
  font-family: AvantGardePro;
  font-size: 20px;
  font-weight: 900;
  color: var(--dark-blue);
  letter-spacing: -0.91px;
`

interface TabBoxProps {
  children: JSX.Element
  activeTab: Tabs
  isLandlord: boolean
}

const TabBox = ({ children, activeTab, isLandlord }: TabBoxProps) => (
  <Box width={'600px'} style={{ height: 500 }} variant={BoxVariants.login}>
    <TabRow>
      <TabOuter
        side={Sides.left}
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
        side={Sides.right}
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
