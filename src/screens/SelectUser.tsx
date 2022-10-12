import { Divider, Layout, List, ListItem, Text } from '@ui-kitten/components'
import * as Contacts from 'expo-contacts'
import React from 'react'
import { Button, FlatList, Pressable } from 'react-native'

const SelectUser = ({ navigation }) => {
  const [contacts, setContacts] = React.useState([])

  const onSelectUser = (user: Contacts.Contact) => {
    navigation.navigate('PayOrRequest', {
      user
    })
  }

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate('PayOrRequest')} title="Cancel" />
      )
    })
  }, [navigation])

  React.useEffect(() => {
    ;(async () => {
      const { status } = await Contacts.requestPermissionsAsync()
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers, Contacts.Fields.Name]
        })

        if (data.length > 0) {
          setContacts(data)
        }
      }
    })()
  }, [])

  return (
    <Layout>
      <Text category="h1">Select from contacts</Text>
      <List
        data={contacts}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            description={item.phoneNumbers[0].number}
            onPress={() => onSelectUser(item)}
          />
        )}
        ItemSeparatorComponent={Divider}
      />
    </Layout>
  )
}

export default SelectUser
