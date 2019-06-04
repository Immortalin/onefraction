import * as React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { Flex, Box as FlexBox } from '@rebass/grid'
import Sidebar from './components/Sidebar'
import MenuIcon from './components/MenuIcon'
import ContentBox, { Variants as ContentBoxVariants } from './components/ContentBox'

const Wrapper = styled(View)`
  flex: 1;
  flex-direction: row;
  height: 100%;
  min-height: 100vh;
  background: var(--light-grayish-blue);
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

const ContentWrapper = styled(View)<{ sidebarOpen: boolean }>`
  flex: 1;
  align-items: center;
  margin-top: 97px;
  ${props => props.sidebarOpen && 'margin-left: 300px;'}
  transition: margin-left 0.3s ease;
`

const Home = () => {
  const firstName = 'Jason'
  const [sidebarOpen, setSidebarOpen] = React.useState(true)
  return (
    <Wrapper>
      <Sidebar open={sidebarOpen} />
      <MenuIcon onPress={() => setSidebarOpen(!sidebarOpen)} />
      <ContentWrapper sidebarOpen={sidebarOpen}>
        <View style={{ width: '75%' }}>
          <Title>{`Hello, ${firstName}!`}</Title>
          <Flex
            width={1}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mb={50}
          >
            <FlexBox width={1} pr="15px">
              <ContentBox
                title="4.8"
                subtitle="Your Renter Rating"
                variant={ContentBoxVariants.rating}
              />
            </FlexBox>
            <FlexBox width={1} px="15px">
              <ContentBox title="$8420" subtitle="Total Savings" />
            </FlexBox>
            <FlexBox width={1} pl="15px">
              <ContentBox title="$4210" subtitle="Savings from Landlord" />
            </FlexBox>
          </Flex>
          <Flex width={1} flexDirection="row" justifyContent="space-between" alignItems="center">
            <FlexBox width={2 / 3} pr="10px">
              <ContentBox title="4.8" subtitle="Your Renter Rating" />
            </FlexBox>
            <FlexBox width={1 / 3} pl="15px">
              <ContentBox title="$262" subtitle="Earned Interest" />
            </FlexBox>
          </Flex>
        </View>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Home
