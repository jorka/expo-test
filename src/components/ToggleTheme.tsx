import { Button } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import Toast from 'react-native-toast-message'

import { useThemeContext } from '../context/ThemeContext'

const ToggleThemeMode = () => {
  const { themeMode, toggleThemeMode } = useThemeContext()

  const showToast = () => {
    Toast.show({
      type: 'info',
      text1: 'Theme changed'
    })
  }

  const handleToggleThemeMode = () => {
    toggleThemeMode()
    showToast()
  }

  return (
    <View>
      <Button onPress={handleToggleThemeMode}>
        {themeMode === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      </Button>
    </View>
  )
}

export default ToggleThemeMode
