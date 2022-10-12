import { Button } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'

import { ThemeContext } from '../context/theme'

const ToggleTheme = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext)
  return (
    <View>
      <Button onPress={toggleTheme}>
        {theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      </Button>
    </View>
  )
}

export default ToggleTheme
