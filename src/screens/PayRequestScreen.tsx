import { Button, Header, Text } from '@rneui/themed'
import { Contact } from 'expo-contacts'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import { Screen } from '../components/Screen'

const PayRequestScreen = ({ navigation, route }) => {
  const [user, setUser] = React.useState<Contact>(null)
  const [unknownUser, setUnknownUser] = React.useState('')
  const [amount, setAmount] = React.useState('')

  const onChangeAmount = (value) => {
    setAmount(value)
  }

  const onChangeUser = (value) => {
    setUnknownUser(value)
  }

  const onSubmit = () => {
    navigation.push('TransactionDetails', {
      amount
    })
  }

  React.useEffect(() => {
    const user = route.params?.user
    if (!user) return
    setUser(user)
  }, [route])

  return (
    <>
      <Header
        centerComponent={{
          text: 'Pay or request'
        }}
        leftComponent={{
          icon: 'arrow-back',
          color: 'inherit',
          onPress: () => navigation.goBack()
        }}
      />
      <Screen>
        <Text h1>Pay or request money</Text>
        <View>
          <View style={styles.formGroup}>
            <View style={styles.row}>
              {user ? (
                <View>
                  <Text>{JSON.stringify(user)}</Text>
                  <Button title="Change" onPress={() => navigation.navigate('SelectUser')} />
                  <Button title="Reset" onPress={() => setUser(null)} />
                </View>
              ) : (
                <>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeUser}
                    value={unknownUser}
                    placeholder="Select User"
                  />
                  <Button title="From Contacts" onPress={() => navigation.navigate('SelectUser')} />
                </>
              )}
            </View>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Amount:</Text>
            <View style={styles.row}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeAmount}
                value={amount}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
        <Button title="Submit" onPress={onSubmit} />
      </Screen>
    </>
  )
}

export default PayRequestScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'flex-start'
  },
  text: {
    fontSize: 30,
    marginBottom: 20
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    flexShrink: 0
  },
  formGroup: {
    marginBottom: 20,
    flexShrink: 0
  },
  label: {
    fontSize: 14
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5
  }
})
