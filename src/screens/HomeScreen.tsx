import { Button, Layout, Text } from '@ui-kitten/components'
import React from 'react'

import ToggleTheme from '../components/ToggleTheme'

const HomeScreen = ({ navigation }) => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">Hello Const!</Text>
      <ToggleTheme />
      <Button onPress={() => navigation.navigate('PayOrRequest')}>Pay or request</Button>
      <Button onPress={() => navigation.navigate('Test')}>Test GraphQL</Button>
    </Layout>
  )
}

export default HomeScreen
