import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

import { useTest } from '../hooks/useTest'

const TestQuery = ({ navigation }) => {
  const { data, loading, error } = useTest()

  if (loading) {
    return <Text>Loading...</Text>
  }

  console.log(error)

  return (
    <FlatList
      data={data.countries}
      renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>}
      keyExtractor={(item) => item.name}
    />
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
