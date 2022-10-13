import { Button, Divider, Layout, List, ListItem, TopNavigation } from '@ui-kitten/components'
import * as Contacts from 'expo-contacts'
import React from 'react'

import { PageScreen } from '../components/PageScreen'

export const SelectUser = ({ navigation }) => {
  const [contacts, setContacts] = React.useState([])

  const onSelectUser = (user: Contacts.Contact) => {
    navigation.navigate('SendRequest', {
      user
    })
  }

  React.useEffect(() => {
    ;(async () => {
      const { status } = await Contacts.requestPermissionsAsync()
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.Emails,
            Contacts.Fields.PhoneNumbers,
            Contacts.Fields.Name,
            Contacts.Fields.Image
          ]
        })

        if (data.length > 0) {
          setContacts(data)
        }
      }
    })()
  }, [])

  return (
    <PageScreen modal>
      <TopNavigation
        title="Select contact"
        alignment="center"
        accessoryRight={
          <Button appearance="ghost" onPress={() => navigation.navigate('SendRequest')}>
            Cancel
          </Button>
        }
      />
      <Divider />
      <Layout style={{ flex: 1 }}>
        <List
          data={contacts}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              description={item.phoneNumbers ? item.phoneNumbers[0].number : ''}
              onPress={() => onSelectUser(item)}
            />
          )}
          ItemSeparatorComponent={Divider}
        />
      </Layout>
    </PageScreen>
  )
}
