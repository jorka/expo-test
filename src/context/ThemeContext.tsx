import * as eva from '@eva-design/eva'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ApplicationProvider } from '@ui-kitten/components'
import React from 'react'

export enum ThemeMode {
  Light = 'light',
  Dark = 'dark'
}

export enum ThemeStorageKey {
  ThemeMode = 'themeMode'
}

type ThemeContextType = {
  themeMode: ThemeMode
  toggleThemeMode: () => void
}

const ThemeContext = React.createContext<ThemeContextType>(null)

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = React.useState(ThemeMode.Light)

  const toggleThemeMode = async () => {
    const nextTheme = themeMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light

    try {
      await AsyncStorage.setItem(ThemeStorageKey.ThemeMode, nextTheme)
      setThemeMode(nextTheme)
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    AsyncStorage.getItem(ThemeStorageKey.ThemeMode).then((value) => {
      if (value) {
        setThemeMode(value as ThemeMode)
      }
    })

    return () => {
      setThemeMode(null)
    }
  }, [])

  const value = {
    themeMode,
    toggleThemeMode
  }

  return (
    <ThemeContext.Provider value={value}>
      <ApplicationProvider {...eva} theme={eva[themeMode]}>
        {children}
      </ApplicationProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
