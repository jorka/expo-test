import { useThemeMode } from '@rneui/themed'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { sharedStyles } from '../theme/sharedStyles'

type Props = {
  children: React.ReactNode
  safeArea?: boolean
  [x: string]: any
}

export const Screen = ({ safeArea = false, children, ...rest }: Props) => {
  const { mode } = useThemeMode()
  return safeArea ? (
    <SafeAreaView
      style={mode === 'light' ? sharedStyles.container : sharedStyles.containerDark}
      {...rest}
    >
      {children}
    </SafeAreaView>
  ) : (
    <View style={mode === 'light' ? sharedStyles.container : sharedStyles.containerDark} {...rest}>
      {children}
    </View>
  )
}
