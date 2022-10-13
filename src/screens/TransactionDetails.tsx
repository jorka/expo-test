import { Button, Layout, Text } from '@ui-kitten/components'
import React from 'react'

import { LottieTest } from '../components/LottieTest'
import { PageScreen } from '../components/PageScreen'

export const TransactionDetails = ({ route, navigation }) => {
  const { amount, user } = route.params

  return (
    <PageScreen modal>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LottieTest />
        <Text
          category="h5"
          style={{
            marginBottom: 20,
            textAlign: 'center'
          }}
        >
          $ {amount} sent to {user.name || user}
        </Text>
        <Button onPress={() => navigation.popToTop()}>Go home</Button>
      </Layout>
    </PageScreen>
  )
}
