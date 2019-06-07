import * as React from 'react'
import { View, Text, Dimensions } from 'react-native'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { useMeQuery } from '../../generated/graphql'
import { SidebarContext } from '../../components/MainLayout'
import Dashboard from './components/Dashboard'
import Onboard from './components/Onboard'

const { width } = Dimensions.get('window')

export const GET_USER = gql`
  query Me {
    me {
      _id
      profile {
        firstName
        lastName
      }
      emails {
        address
      }
      isOnboarded
    }
  }
`

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
  const { data, loading, refetch } = useMeQuery()
  const { sidebarOpen } = React.useContext(SidebarContext)
  const firstName = data && data.me && data.me.profile.firstName
  const isOnboarded = data && data.me && data.me.isOnboarded
  return (
    <Wrapper sidebarOpen={sidebarOpen && width > 930}>
      {loading ? null : (
        <View style={{ position: 'relative', width: '75%', height: '85%' }}>
          <Title>{`Hello, ${firstName}!`}</Title>
          {isOnboarded ? <Dashboard /> : <Onboard done={refetch} />}
        </View>
      )}
    </Wrapper>
  )
}

export default Home
