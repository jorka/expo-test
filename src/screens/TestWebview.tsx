import {
  Icon,
  IconElement,
  Layout,
  TopNavigation,
  TopNavigationAction
} from '@ui-kitten/components'
import React from 'react'
import { WebView } from 'react-native-webview'

import { PageScreen } from '../components/PageScreen'

export const TestWebview = ({ navigation }) => {
  type BackIconProps = IconElement['props']

  const BackIcon = (props: BackIconProps) => <Icon {...props} name="arrow-back" />

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.popToTop()} />
  )

  return (
    <PageScreen>
      <TopNavigation title="Test Webview" alignment="center" accessoryLeft={BackAction} />
      <Layout
        style={{
          flex: 1
        }}
      >
        <WebView source={{ uri: 'https://google.com' }} />
      </Layout>
    </PageScreen>
  )
}
