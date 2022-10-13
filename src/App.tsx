import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'

import { ThemeProvider } from './context/ThemeContext'
import { Home } from './screens/Home'
import { SelectUser } from './screens/SelectUser'
import { SendRequest } from './screens/SendRequest'
import { TestQuery } from './screens/TestQuery'
import { TestWebview } from './screens/TestWebview'
import { TransactionDetails } from './screens/TransactionDetails'
import { toastConfig } from './theme/toast-config'

// Initialize Apollo Client
const client = new ApolloClient({
  // for test
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache()
})

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Test" component={TestQuery} />
                <Stack.Screen name="SendRequest" component={SendRequest} />
                <Stack.Screen name="TestWebview" component={TestWebview} />
                <Stack.Screen
                  name="SelectUser"
                  component={SelectUser}
                  options={{
                    presentation: 'modal'
                  }}
                />
                <Stack.Screen
                  name="TransactionDetails"
                  component={TransactionDetails}
                  options={{
                    animation: 'slide_from_bottom'
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </ThemeProvider>
      </ApolloProvider>
      <Toast position="bottom" config={toastConfig} />
    </>
  )
}
