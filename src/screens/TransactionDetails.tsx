import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const TransactionDetails = ({ route, navigation }) => {
  const { amount } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.text}>The amount $ {amount} is now gone.</Text>
      <Button title="Go home" onPress={() => navigation.popToTop()} />
    </View>
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
