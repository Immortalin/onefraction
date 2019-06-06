import * as React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import Input from '../../../components/Input'
import AddressAutofillInput, { MapsPrediction } from './AddressAutofillInput'
import PlaidLink from './PlaidLink'

const PageWrapper = styled(View)`
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Title = styled(Text)`
  font-family: AvantGardePro;
  font-weight: 900;
  font-size: 24px;
  color: var(--dark-blue);
  letter-spacing: -1.09px;
  line-height: 50px;
  margin-top: 50px;
  margin-bottom: 36px;
`

const AddressPage = (props: {
  style: any
  setSelectedItem: (item: MapsPrediction | null) => void
}) => (
  <animated.div style={props.style}>
    <PageWrapper>
      <Title>What is your address?</Title>
      <AddressAutofillInput setSelectedItem={props.setSelectedItem} />
      <View />
    </PageWrapper>
  </animated.div>
)

const RentAmountPage = (props: {
  style: any
  value: string
  onChangeText: (text: string) => void
}) => (
  <animated.div style={props.style}>
    <PageWrapper>
      <Title>How much is rent?</Title>
      <Input
        style={{ width: 240, alignItems: 'center' }}
        inputStyle={{
          textAlign: 'center',
          alignItems: 'center',
          width: '100%',
          height: 55,
          borderRadius: 100,
        }}
        value={props.value}
        onChangeText={text => props.onChangeText(text)}
        keyboardType="numeric"
        placeholder="$1000"
        focusable
      />
      <View />
    </PageWrapper>
  </animated.div>
)

const ConnectBankPage = (props: { setPublicToken: (publicToken: string) => void; style: any }) => (
  <animated.div style={props.style}>
    <PageWrapper>
      <Title>Connect your bank account</Title>
      <PlaidLink setPublicToken={props.setPublicToken} />
      <View />
    </PageWrapper>
  </animated.div>
)

interface OnboardPagesProps {
  page: number
  rent: string
  setRent: (text: string) => void
  setSelectedItem: (item: MapsPrediction | null) => void
  setPublicToken: (publicToken: string) => void
}

const OnboardPages = ({
  page,
  setSelectedItem,
  rent,
  setRent,
  setPublicToken,
}: OnboardPagesProps) => {
  const transitions = useTransition(page, null, {
    initial: { opacity: 1, position: 'absolute', width: '100%', height: '100%', left: 0 },
    from: { opacity: 0, position: 'absolute', width: '100%', height: '100%', left: 300 },
    enter: { opacity: 1, left: 0 },
    leave: { opacity: 0, left: -300 },
  })

  return (
    <View style={{ flex: 1, width: '100%', zIndex: 1 }}>
      {transitions.map(({ item, props }) => {
        switch (item) {
          case 0:
            return <AddressPage setSelectedItem={setSelectedItem} style={props} />
          case 1:
            return <RentAmountPage value={rent} onChangeText={setRent} style={props} />
          case 2:
            return <ConnectBankPage style={props} setPublicToken={setPublicToken} />
          default:
            return null
        }
      })}
    </View>
  )
}

export default OnboardPages
