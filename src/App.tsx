import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ThemeProvider } from '@rneui/themed'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import HomeScreen from './screens/HomeScreen'
import PayRequestScreen from './screens/PayRequestScreen'
import SelectUser from './screens/SelectUser'
import TestQuery from './screens/TestQuery'
import TransactionDetails from './screens/TransactionDetails'
import { theme } from './theme/theme'

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
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Test" component={TestQuery} />
              <Stack.Screen name="PayOrRequest" component={PayRequestScreen} />
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
  )
}
