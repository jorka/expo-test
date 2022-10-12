import { Layout, List, ListItem, Text } from '@ui-kitten/components'
import React from 'react'

import { useTest } from '../hooks/useTest'

const TestQuery = ({ navigation }) => {
  const { data, loading, error } = useTest()

  return (
    <>
      <Layout>
        {loading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text>Error!</Text>
        ) : (
          <List
            data={data.countries}
            renderItem={({ item }) => <ListItem title={item.name} />}
            keyExtractor={(item) => item.name}
          />
        )}
      </Layout>
    </>
  )
}

export default TestQuery
