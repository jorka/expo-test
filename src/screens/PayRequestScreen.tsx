import { Button, Input, Layout, Text } from '@ui-kitten/components'
import { Contact } from 'expo-contacts'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'

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
      <StatusBar style="inverted" />

      <Layout style={{ flex: 1, justifyContent: 'center' }}>
        <View>
          <Text category="h1">Pay or request money</Text>
          <View>
            <View>
              <View>
                {user ? (
                  <View>
                    <Text>{JSON.stringify(user)}</Text>
                    <Button onPress={() => navigation.navigate('SelectUser')}>Change</Button>
                    <Button appearance="ghost" onPress={() => setUser(null)}>
                      Reset
                    </Button>
                  </View>
                ) : (
                  <>
                    <Input
                      onChangeText={onChangeUser}
                      value={unknownUser}
                      placeholder="Select User"
                      label="Select User"
                    />
                    <Button onPress={() => navigation.navigate('SelectUser')}>From Contacts</Button>
                  </>
                )}
              </View>
            </View>
            <View>
              <Text>Amount:</Text>
              <View>
                <Input onChangeText={onChangeAmount} value={amount} keyboardType="numeric" />
              </View>
            </View>
          </View>
          <Button onPress={onSubmit}>Submit</Button>
        </View>
      </Layout>
    </>
  )
}

export default PayRequestScreen
