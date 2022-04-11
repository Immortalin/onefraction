import * as React from 'react'
import { View } from 'react-native'
import { Flex, Box as FlexBox } from '@rebass/grid'
import ContentBox, { Variants as ContentBoxVariants } from './ContentBox'

const Dashboard = () => (
  <View>
    <Flex width={1} flexDirection="row" justifyContent="space-between" alignItems="center" mb={50}>
      <FlexBox width={1} pr="15px">
        <ContentBox title="4.8" subtitle="Your Rating" variant={ContentBoxVariants.rating} />
      </FlexBox>
      <FlexBox width={1} px="15px">
        <ContentBox title="$8420" subtitle="Balance" />
      </FlexBox>
      <FlexBox width={1} pl="15px">
        <ContentBox title="$4210" subtitle="Total Savings" />
      </FlexBox>
    </Flex>
    <Flex width={1} flexDirection="row" justifyContent="space-between" alignItems="center">
      <FlexBox width={2 / 3} pr="10px">
        <ContentBox title="" subtitle="Leave a star on GitHub if you like this project" />
      </FlexBox>
      <FlexBox width={1 / 3} pl="15px">
        <ContentBox
          title="$262"
          subtitle="Earned Interest"
          variant={ContentBoxVariants.cyanTitle}
        />
      </FlexBox>
    </Flex>
  </View>
)

export default Dashboard
