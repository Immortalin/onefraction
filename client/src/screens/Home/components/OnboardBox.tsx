import * as React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Script from 'react-load-script'
import { GOOGLE_MAPS_KEY } from '../../../utils/env'
import Box from '../../../components/Box'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import googleLogo from '../../../assets/images/google-logo.svg'

declare var google: any

const BoxInner = styled(View)`
  flex: 1;
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

const PredictionDropdown = styled(View)`
  background: var(--white);
  padding: 12px 10px;
  box-shadow: 0 13px 27px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2.67px;
  transition: height 0.3s ease;
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 53px;
`

const PredictionTextRow = styled(TouchableOpacity)<{ selected: boolean }>`
  background-color: ${props => (props.selected ? 'var(--dark-moderate-blue-10)' : 'var(--white)')};
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 6px;

  &:hover {
    background-color: var(--dark-moderate-blue-10);
  }
`

const PreditionText = styled(Text)`
  font-family: AvantGardePro;
  font-size: 20px;
  font-weight: 500;
  color: var(--dark-blue);
  letter-spacing: -0.91px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
`

const GoogleLogo = styled(Image)`
  width: 50px;
  height: 17px;
  position: relative;
  top: 5px;
`

interface MapsPrediction {
  description: string
  id: string
  place_id: string
}

interface OnboardBoxProps {}

class OnboardBox extends React.Component<OnboardBoxProps> {
  autocomplete: any

  state = {
    address: '',
    inputFocused: false,
    predictions: [] as MapsPrediction[],
    selectedItem: null,
    propertyId: '',
  }

  onKeyPress = (e: any) => {
    const { address, inputFocused, predictions, selectedItem } = this.state
    const key = e.key
    if (predictions.length && inputFocused && address) {
      if (key === 'ArrowDown') {
        const value =
          selectedItem === predictions.length - 1 || selectedItem === null ? 0 : selectedItem + 1
        this.setState({ selectedItem: value })
      } else if (key === 'ArrowUp') {
        const value =
          selectedItem === 0 || selectedItem === null ? predictions.length - 1 : selectedItem - 1
        this.setState({ selectedItem: value })
      } else if (key === 'Enter' && selectedItem !== null && predictions[selectedItem]) {
        this.setState({
          address: predictions[selectedItem].description,
          propertyId: predictions[selectedItem].place_id,
          inputFocused: false,
          selectedItem: null,
        })
      }
    }
  }

  onLoadScript = () => {
    this.autocomplete = new google.maps.places.AutocompleteService()
  }

  setAddress = (text: string) => {
    this.setState({ address: text, selectedItem: null, propertyId: '' })
    this.autocomplete.getQueryPredictions(
      { input: text },
      (predictions: MapsPrediction, status: string) => {
        if (status === 'OK') {
          this.setState({ predictions })
        }
      }
    )
  }

  setInputFocused = (isFocused: boolean) => this.setState({ inputFocused: isFocused })

  render() {
    const { address, inputFocused, predictions, selectedItem, propertyId } = this.state
    console.log('this.state', this.state)
    return (
      <Box>
        <BoxInner>
          <View style={{ width: '100%', textAlign: 'center' }}>
            <Title>Enter Your Address</Title>
          </View>
          <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <Input
              style={{ width: 500 }}
              inputStyle={{ textAlign: 'center' }}
              value={address}
              onChangeText={this.setAddress}
              placeholder="1600 Pennsylvania Ave NW"
              textContentType="streetAddressLine1"
              focusable
              onFocus={() => this.setInputFocused(true)}
              onBlur={() => this.setInputFocused(false)}
              onKeyPress={this.onKeyPress}
              focused={inputFocused}
            />
            {predictions.length && inputFocused && address ? (
              <PredictionDropdown>
                {predictions.map((p: MapsPrediction, i: number) => (
                  <PredictionTextRow
                    onPress={() =>
                      this.setState({ address: p.description, propertyId: p.place_id })
                    }
                    selected={i === selectedItem}
                  >
                    <PreditionText>{p.description}</PreditionText>
                  </PredictionTextRow>
                ))}
                <View style={{ marginTop: 7, marginBottom: 5, textAlign: 'center' }}>
                  <Text style={{ color: 'var(--gray)' }}>
                    Powered by <GoogleLogo source={{ uri: googleLogo }} />
                  </Text>
                </View>
              </PredictionDropdown>
            ) : null}
            <View style={{ position: 'relative', marginBottom: 40, marginTop: 52 }}>
              <Button onPress={() => {}} disabled={!propertyId}>
                Next
              </Button>
            </View>
          </View>
        </BoxInner>
        <Script
          url={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&libraries=places`}
          onLoad={this.onLoadScript}
        />
      </Box>
    )
  }
}

export default OnboardBox
