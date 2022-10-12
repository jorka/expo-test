import { Button, Layout, List, ListItem, Text, TopNavigation } from '@ui-kitten/components'
import React from 'react'

import { PageScreen } from '../components/PageScreen'
import { useTest } from '../hooks/useTest'

export const TestQuery = ({ navigation }) => {
  const { data, loading, error } = useTest()

  return (
    <PageScreen>
      <TopNavigation
        title="Test Query"
        alignment="center"
        accessoryLeft={<Button onPress={() => navigation.popToTop()}>{'<'}</Button>}
      />
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
    </PageScreen>
  )
}
