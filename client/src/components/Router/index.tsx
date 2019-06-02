import * as React from 'react'
import { Text } from 'react-native'
import { Router, Route, Switch, Redirect, Link } from './Router'
import Login from '../../screens/Login'
import { useUserContext } from '../../screens/Login/UserContext'

const Home = () => <Text>Home</Text>

export default () => {
  const { userState, getUser } = useUserContext()
  React.useEffect(() => {
    getUser()
  }, [userState.user && userState.user.id])
  return (
    <Router>
      {userState.loggingIn ? null : userState.user ? (
        <Route
          path="/"
          render={() => (
            <Switch>
              <Route path="/" exact component={Home} />
              {/* <Route path="/policies" component={Policies} /> */}
              <Route path="*" render={() => <Redirect to="/" />} />
            </Switch>
          )}
        />
      ) : (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Login} />
          <Route path="*" render={() => <Redirect to="/login" />} />
        </Switch>
      )}
    </Router>
  )
}

export { Router, Route, Switch, Redirect, Link }
