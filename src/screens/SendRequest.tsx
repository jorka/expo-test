import {
  Button,
  Icon,
  IconElement,
  Input,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction
} from '@ui-kitten/components'
import { Contact } from 'expo-contacts'
import React from 'react'
import { View } from 'react-native'

import { PageScreen } from '../components/PageScreen'

export const SendRequest = ({ navigation, route }) => {
  const [user, setUser] = React.useState<Contact>(null)
  const [unknownUser, setUnknownUser] = React.useState('')
  const [amount, setAmount] = React.useState('')

  type BackIconProps = IconElement['props']

  const inputAmountRef = React.useRef<Input>(null)

  const BackIcon = (props: BackIconProps) => <Icon {...props} name="arrow-back" />

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.popToTop()} />
  )

  const onChangeAmount = (value) => {
    setAmount(value)
  }

  const onChangeUser = (value) => {
    setUnknownUser(value)
  }

  const onSubmit = () => {
    navigation.push('TransactionDetails', {
      amount,
      user: user || unknownUser
    })
  }

  React.useEffect(() => {
    const user = route.params?.user
    if (!user) return
    setUser(user)
  }, [route])

  return (
    <PageScreen>
      <TopNavigation title="Send or request" alignment="center" accessoryLeft={BackAction} />

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
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        inputAmountRef.current.focus()
                      }}
                    />
                    <Button onPress={() => navigation.navigate('SelectUser')}>Select User</Button>
                  </>
                )}
              </View>
            </View>
            <View>
              <Input
                ref={inputAmountRef}
                onChangeText={onChangeAmount}
                value={amount}
                placeholder="Amount"
                label="Amount"
                keyboardType="decimal-pad"
                returnKeyType="done"
              />
            </View>
          </View>
          <View>
            <Button onPress={onSubmit}>Submit</Button>
          </View>
        </View>
      </Layout>
    </PageScreen>
  )
}
