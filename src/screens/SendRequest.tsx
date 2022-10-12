import { Button, Input, Layout, Text, TopNavigation } from '@ui-kitten/components'
import { Contact } from 'expo-contacts'
import React from 'react'
import { View } from 'react-native'

import { PageScreen } from '../components/PageScreen'

export const SendRequest = ({ navigation, route }) => {
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
    <PageScreen>
      <TopNavigation
        title="Send or request"
        alignment="center"
        accessoryLeft={<Button onPress={() => navigation.popToTop()}>{'<'}</Button>}
      />

      <Layout style={{ flex: 1, justifyContent: 'center', paddingLeft: 20, paddingRight: 20 }}>
        <View>
          <Text category="h1">Send or request</Text>
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
              <View>
                <Input
                  onChangeText={onChangeAmount}
                  value={amount}
                  keyboardType="numeric"
                  label="Amount"
                />
              </View>
            </View>
          </View>
          <Button onPress={onSubmit}>Submit</Button>
        </View>
      </Layout>
    </PageScreen>
  )
}
