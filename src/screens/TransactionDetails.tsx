import React from 'react'
import { Button, StyleSheet, Text } from 'react-native'

import { Screen } from '../components/Screen'

const TransactionDetails = ({ route, navigation }) => {
  const { amount } = route.params

  return (
    <Screen safeArea style={styles.container}>
      <Text style={styles.text}>The amount $ {amount} is now gone.</Text>
      <Button title="Go home" onPress={() => navigation.popToTop()} />
    </Screen>
  )
}

export default TransactionDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16
  }
})
