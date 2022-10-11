import { Button, useThemeMode } from '@rneui/themed'
import React from 'react'

export const ToggleTheme = () => {
  const { mode, setMode } = useThemeMode()
  return (
    <Button
      onPress={() => setMode(mode === 'light' ? 'dark' : 'light')}
      title={mode === 'light' ? 'Dark' : 'Light'}
    />
  )
}
