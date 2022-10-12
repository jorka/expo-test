import { Layout } from '@ui-kitten/components'
import React from 'react'
import { Button, StyleSheet, Text } from 'react-native'

const TransactionDetails = ({ route, navigation }) => {
  const { amount } = route.params

  return (
    <Layout>
      <Text style={styles.text}>The amount $ {amount} is now gone.</Text>
      <Button title="Go home" onPress={() => navigation.popToTop()} />
    </Layout>
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
