import * as React from 'react'
import { View, Image } from 'react-native'
import Script from 'react-load-script'
import {
  PLAID_PUBLIC_KEY,
  PLAID_PRODUCTS,
  PLAID_COUNTRY_CODES,
  PLAID_ENV,
} from '../../../utils/env'
import { PlaidStatic, PlaidCountryCodes, PlaidProducts } from '../../../utils/types'
import Button, { Variants as ButtonVariants } from '../../../components/Button'
import plaidLogo from '../../../assets/images/plaid-logo.png'

declare var Plaid: PlaidStatic

interface PlaidLinkProps {
  setPublicToken: (publicToken: string) => void
}

class PlaidLink extends React.Component<PlaidLinkProps> {
  plaidHandler: any

  state = { loaded: false }

  onLoadScript = () => {
    this.plaidHandler = Plaid.create({
      clientName: 'FullStack',
      countryCodes: PLAID_COUNTRY_CODES.split(',') as PlaidCountryCodes[],
      env: PLAID_ENV,
      key: PLAID_PUBLIC_KEY,
      product: PLAID_PRODUCTS.split(',') as PlaidProducts[],
      language: 'en',
      // webhook: 'https://requestb.in',
      // Optional, specify a user object to enable all Auth features
      // user: {
      //   legalName: 'John Appleseed',
      //   emailAddress: 'jappleseed@yourapp.com',
      // },
      onSuccess: async (publicToken, metadata) => {
        console.log('SUCCESS!', { publicToken, metadata })
        return this.props.setPublicToken(publicToken)
      },
      onExit: function(err, metadata) {
        if (err != null) {
          console.log('ERROR', err)
        }
        console.log({ err, metadata })
      },
    })
    this.setState({ loaded: true })
  }

  render() {
    return (
      <View>
        <Button
          disabled={!this.plaidHandler}
          variant={ButtonVariants.primary}
          onPress={() => this.plaidHandler.open()}
        >
          <Image source={{ uri: plaidLogo }} style={{ width: 130, height: 130 }} />
        </Button>
        <Script
          url="https://cdn.plaid.com/link/v2/stable/link-initialize.js"
          onLoad={this.onLoadScript}
        />
      </View>
    )
  }
}

export default PlaidLink
