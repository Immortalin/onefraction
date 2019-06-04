import * as React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { SidebarContext } from '../../components/MainLayout'
import Dashboard from './components/Dashboard'
import OnboardBox from './components/OnboardBox'

const Wrapper = styled(View)<{ sidebarOpen: boolean }>`
  flex: 1;
  align-items: center;
  margin-top: 97px;
  ${props => props.sidebarOpen && 'margin-left: 300px;'}
  transition: margin-left 0.3s ease;
`

const Title = styled(Text)`
  font-family: AvantGardePro;
  font-weight: 900;
  font-size: 30px;
  color: var(--dark-blue);
  letter-spacing: -1.36px;
  line-height: 47px;
  margin-bottom: 60px;
`

const Home = () => {
  const { sidebarOpen } = React.useContext(SidebarContext)
  const firstName = 'Jason'
  const isOnboarded = false
  return (
    <Wrapper sidebarOpen={sidebarOpen}>
      <View style={{ width: '75%' }}>
        <Title>{`Hello, ${firstName}!`}</Title>
        {isOnboarded ? <Dashboard /> : <OnboardBox />}
      </View>
    </Wrapper>
  )
}

export default Home
