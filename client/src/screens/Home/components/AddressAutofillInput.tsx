import * as React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Script from 'react-load-script'
import { GOOGLE_MAPS_KEY } from '../../../utils/env'
import Input from '../../../components/Input'
import googleLogo from '../../../assets/images/google-logo.svg'

declare var google: any

const Wrapper = styled(View)<{ focused: boolean }>`
  width: 75%;
  max-width: 720px;
  position: relative;
  bottom: ${({ focused }) => (focused ? '100px' : '0')};
  transition: bottom 0.25s ease;
  z-index: 1;
`

const PredictionDropdown = styled(View)`
  width: 100%;
  position: absolute;
  top: 61px;
  align-items: center;
`

const PredictionDropdownInner = styled(View)`
  background: var(--white);
  padding: 12px 10px;
  box-shadow: 0 13px 27px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2.67px;
  width: 95%;
  /* transition: height 0.3s ease; */
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

export interface MapsPrediction {
  description: string
  id: string
  place_id: string
}

interface AddressAutofillInputProps {
  setSelectedItem: (item: MapsPrediction | null) => void
}

class AddressAutofillInput extends React.Component<AddressAutofillInputProps> {
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
        this.onSelect(predictions[selectedItem])
      }
    }
  }

  onSelect = (prediction: MapsPrediction) => {
    this.setState({
      address: prediction.description,
      propertyId: prediction.place_id,
      inputFocused: false,
      selectedItem: null,
    })
    this.props.setSelectedItem(prediction)
  }

  onLoadScript = () => {
    this.autocomplete = new google.maps.places.AutocompleteService()
  }

  onChangeText = (text: string) => {
    this.setState({ address: text, selectedItem: null, propertyId: '' })
    this.props.setSelectedItem(null)
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
    const { address, inputFocused, predictions, selectedItem } = this.state
    return (
      <Wrapper focused={!!(inputFocused && address)}>
        <Input
          style={{ width: '100%', alignItems: 'center' }}
          inputStyle={{
            textAlign: 'center',
            alignItems: 'center',
            width: '100%',
            height: 55,
            borderRadius: 100,
          }}
          value={address}
          onChangeText={this.onChangeText}
          placeholder="1600 Pennsylvania Ave NW"
          textContentType="streetAddressLine1"
          focusable
          onFocus={() => this.setInputFocused(true)}
          onBlur={() => this.setInputFocused(false)}
          onKeyPress={this.onKeyPress}
        />
        {predictions.length && inputFocused && address ? (
          <PredictionDropdown>
            <PredictionDropdownInner>
              {predictions.map((p: MapsPrediction, i: number) => (
                <PredictionTextRow onPress={() => this.onSelect(p)} selected={i === selectedItem}>
                  <PreditionText>{p.description}</PreditionText>
                </PredictionTextRow>
              ))}
              <View style={{ marginTop: 7, marginBottom: 5, textAlign: 'center' }}>
                <Text style={{ color: 'var(--gray)' }}>
                  Powered by <GoogleLogo source={{ uri: googleLogo }} />
                </Text>
              </View>
            </PredictionDropdownInner>
          </PredictionDropdown>
        ) : null}
        <Script
          url={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&libraries=places`}
          onLoad={this.onLoadScript}
        />
      </Wrapper>
    )
  }
}

export default AddressAutofillInput
