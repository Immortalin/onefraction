import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import Router from '../Router'
import { client } from '../../utils/apollo'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Router />
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

export default App
