import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

// eslint-disable-next-line import/order
import { useTest } from '../hooks/useTest'

// eslint-disable-next-line import/order
import { Screen } from '../components/Screen'

const TestQuery = ({ navigation }) => {
  const { data, loading, error } = useTest()

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    return <Text>Error!</Text>
  }

  return (
    <Screen>
      <FlatList
        data={data.countries}
        renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>}
        keyExtractor={(item) => item.name}
      />
    </Screen>
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
