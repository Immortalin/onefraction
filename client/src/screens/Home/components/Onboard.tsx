import * as React from 'react'
import { View } from 'react-native'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { useOnboardUserMutation } from '../../../generated/graphql'
import Box from '../../../components/Box'
import Button from '../../../components/Button'
import { MapsPrediction } from './AddressAutofillInput'
import OnboardPages from './OnboardPages'

export const ONBOARD_USER = gql`
  mutation OnboardUser($publicToken: String!, $property: PropertyInput!) {
    onboardUser(publicToken: $publicToken, property: $property)
  }
`

const BoxInner = styled(View)`
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Dot = styled(View)<{ active: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 100px;
  background-color: ${({ active }) =>
    active ? 'var(--dark-blue)' : 'var(--dark-moderate-blue-30)'};
`

const DotRow = styled(View)`
  width: 42px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

const Onboard = () => {
  const onboardUser = useOnboardUserMutation()
  const [selectedItem, setSelectedItem] = React.useState<MapsPrediction | null>(null)
  const [publicToken, setPublicToken] = React.useState<string>('')
  const [rent, setRent] = React.useState()
  const [page, setPage] = React.useState(0)
  const isNextDisabled = [!selectedItem || !selectedItem.place_id, !rent, !publicToken]

  const onPressNext = async () => {
    if (page === 2) {
      await onboardUser({
        variables: {
          publicToken,
          property: {
            address: selectedItem!.description,
            placeId: selectedItem!.place_id,
            rentAmount: parseInt(rent),
          },
        },
      })
      console.log('DONE!!!')
    } else {
      setPage(page + 1)
    }
  }

  return (
    <Box style={{ height: '75%' }}>
      <BoxInner>
        <OnboardPages
          rent={rent}
          setRent={setRent}
          setSelectedItem={setSelectedItem}
          setPublicToken={setPublicToken}
          page={page}
        />
        <View
          style={{ position: 'relative', marginBottom: 40, marginTop: 52, alignItems: 'center' }}
        >
          <DotRow>
            {[0, 1, 2].map((_, i) => (
              <Dot active={i === page} />
            ))}
          </DotRow>
          <Button onPress={onPressNext} disabled={isNextDisabled[page]}>
            {page === 2 ? 'Done' : 'Next'}
          </Button>
        </View>
      </BoxInner>
    </Box>
  )
}

export default Onboard
