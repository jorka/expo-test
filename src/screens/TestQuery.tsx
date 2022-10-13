import {
  Icon,
  IconElement,
  Layout,
  List,
  ListItem,
  Text,
  TopNavigation,
  TopNavigationAction
} from '@ui-kitten/components'
import React from 'react'

import { PageScreen } from '../components/PageScreen'
import { useTest } from '../hooks/useTest'

export const TestQuery = ({ navigation }) => {
  const { data, loading, error } = useTest()

  type BackIconProps = IconElement['props']

  const BackIcon = (props: BackIconProps) => <Icon {...props} name="arrow-back" />

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.popToTop()} />
  )

  return (
    <PageScreen>
      <TopNavigation title="Test Query" alignment="center" accessoryLeft={BackAction} />
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
