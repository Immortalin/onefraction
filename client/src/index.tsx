// app entry
import * as React from 'react'
import { AppRegistry, Platform, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Config } from './utils/Config'

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>DERP</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
})

// register the app
AppRegistry.registerComponent(Config.app.name, () => App)

// register the web
if (Platform.OS === Config.os.web) {
  AppRegistry.runApplication(Config.app.name, {
    rootTag: document.getElementById(Config.web.root),
  })
}
