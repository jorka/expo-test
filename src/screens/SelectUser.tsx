import * as Contacts from 'expo-contacts'
import React from 'react'
import { Button, FlatList, Pressable, Text, View } from 'react-native'

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
    <View>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <Pressable onPress={() => onSelectUser(item)}>
            <Text>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  )
}

export default SelectUser
