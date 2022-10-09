import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import PayRequestScreen from './screens/PayRequestScreen'
import SelectUser from './screens/SelectUser'
import TestQuery from './screens/TestQuery'
import TransactionDetails from './screens/TransactionDetails'

// Initialize Apollo Client
const client = new ApolloClient({
  // for test
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache()
})

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Test" component={TestQuery} options={{ title: 'Test GraphQL' }} />
          <Stack.Screen
            name="PayOrRequest"
            component={PayRequestScreen}
            options={{ title: 'Pay or request' }}
          />
          <Stack.Screen
            name="SelectUser"
            component={SelectUser}
            options={{
              title: 'Select User',
              presentation: 'modal'
            }}
          />
          <Stack.Screen
            name="TransactionDetails"
            component={TransactionDetails}
            options={{
              title: 'Transaction Done',
              animation: 'slide_from_bottom',
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}