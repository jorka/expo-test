import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Const</Text>
      <Button title="Pay or request" onPress={() => navigation.navigate('PayOrRequest')} />
      <Button title="Test GraphQL" onPress={() => navigation.navigate('Test')} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginBottom: 20,
    fontSize: 30
  }
})
