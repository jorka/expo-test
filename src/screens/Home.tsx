import { Button, Layout, Text } from '@ui-kitten/components'
import React from 'react'

import { PageScreen } from '../components/PageScreen'
import ToggleTheme from '../components/ToggleTheme'

export const Home = ({ navigation }) => {
  return (
    <>
      <PageScreen>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            category="h1"
            style={{
              marginBottom: 20
            }}
          >
            Hello!
          </Text>
          <ToggleTheme />
          <Button onPress={() => navigation.navigate('SendRequest')}>Pay or request</Button>
          <Button onPress={() => navigation.navigate('Test')}>Test GraphQL</Button>
        </Layout>
      </PageScreen>
    </>
  )
}
