import { Header } from '@rneui/themed'
import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

import { Screen } from '../components/Screen'
import { useTest } from '../hooks/useTest'

const TestQuery = ({ navigation }) => {
  const { data, loading, error } = useTest()

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    return <Text>Error!</Text>
  }

  return (
    <>
      <Header
        centerComponent={{
          text: 'Test Query'
        }}
        leftComponent={{
          icon: 'arrow-back',
          color: 'inherit',
          onPress: () => navigation.goBack()
        }}
      />
      <Screen>
        <FlatList
          data={data.countries}
          renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>}
          keyExtractor={(item) => item.name}
        />
      </Screen>
    </>
  )
}

export default TestQuery

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
