import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import Router from '../Router'
import { UserProvider } from '../../screens/Login/UserContext'
import { client } from '../../utils/apollo'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <UserProvider>
          <Router />
        </UserProvider>
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

export default App
