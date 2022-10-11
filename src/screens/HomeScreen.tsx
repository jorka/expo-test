import { Button, Text } from '@rneui/themed'
import React from 'react'

import { Screen } from '../components/Screen'
import { ToggleTheme } from '../components/ToggleTheme'

const HomeScreen = ({ navigation }) => {
  return (
    <Screen safeArea>
      <Text h1>Hello Const!</Text>
      <ToggleTheme />
      <Button
        type="outline"
        title="Pay or request"
        onPress={() => navigation.navigate('PayOrRequest')}
      />
      <Button
        type="solid"
        color="secondary"
        title="Test GraphQL"
        onPress={() => navigation.navigate('Test')}
      />
    </Screen>
  )
}

export default HomeScreen
