import * as React from 'react'
import { View, Text } from 'react-native'
import { Link } from '../../../components/Router'

const LinkToOtherLogin = (props: { isLandlord: boolean }) => (
  <View style={{ marginTop: 50 }}>
    {props.isLandlord ? (
      <Text style={{ color: 'var(--light-grayish-blue)' }}>
        Looking for{' '}
        <Link to="/login">
          <Text style={{ color: 'var(--light-grayish-blue)' }}>tenant login</Text>
        </Link>
        ?
      </Text>
    ) : (
      <Text style={{ color: 'var(--light-grayish-blue)' }}>
        Looking for{' '}
        <Link to="/landlord/login">
          <Text style={{ color: 'var(--light-grayish-blue)' }}>landlord login</Text>
        </Link>
        ?
      </Text>
    )}
  </View>
)

export default LinkToOtherLogin
