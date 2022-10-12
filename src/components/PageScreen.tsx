import { useTheme } from '@ui-kitten/components'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useThemeContext } from '../context/ThemeContext'

type Props = {
  children: React.ReactNode
  modal?: boolean
  [key: string]: any
}

export const PageScreen = ({ children, modal = false, ...rest }: Props) => {
  const theme = useTheme()
  const { themeMode } = useThemeContext()
  // TODO: see how this works
  // const deviceTheme = useColorScheme()

  return modal ? (
    <>{children}</>
  ) : (
    <>
      <StatusBar style={themeMode === 'light' ? 'dark' : 'light'} />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor:
            themeMode === 'light' ? theme['color-basic-100'] : theme['color-basic-800']
        }}
        {...rest}
      >
        {children}
      </SafeAreaView>
    </>
  )
}
