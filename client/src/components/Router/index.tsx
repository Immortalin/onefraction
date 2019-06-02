import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Router, Route, Link } from './Router'

const Home = () => <Text>Home</Text>
const About = () => <Text>About</Text>

export default () => {
  return (
    <Router>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/">
            <Text>Home</Text>
          </Link>
          <Link to="/about">
            <Text>About</Text>
          </Link>
        </View>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </View>
    </Router>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
