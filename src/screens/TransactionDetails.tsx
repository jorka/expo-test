import { Layout } from '@ui-kitten/components'
import React from 'react'
import { Button, StyleSheet, Text } from 'react-native'

import { PageScreen } from '../components/PageScreen'

export const TransactionDetails = ({ route, navigation }) => {
  const { amount } = route.params

  return (
    <PageScreen modal>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>The amount $ {amount} is now gone.</Text>
        <Button title="Go home" onPress={() => navigation.popToTop()} />
      </Layout>
    </PageScreen>
  )
}

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
