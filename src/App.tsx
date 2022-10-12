import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import * as eva from '@eva-design/eva'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ApplicationProvider } from '@ui-kitten/components'
import { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { ThemeContext } from './context/theme'
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
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
  }

  return (
    <ApolloProvider client={client}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
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
        </ApplicationProvider>
      </ThemeContext.Provider>
    </ApolloProvider>
  )
}
